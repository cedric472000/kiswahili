/* Persistenz über localStorage.
   Jeder Datensatz trägt updatedAt + deviceId, damit ein späteres
   Sync-Backend per "last write wins" zusammenführen kann, ohne dass
   hier etwas umgebaut werden muss.                                   */
window.KS = window.KS || {};

(function () {
  var KEY = "kiswahili.v1";

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  var Store = {
    data: null,

    load: function () {
      var raw = null;
      try { raw = localStorage.getItem(KEY); } catch (e) { /* Privatmodus o.ä. */ }
      if (raw) {
        try { this.data = JSON.parse(raw); } catch (e) { this.data = null; }
      }
      if (!this.data) {
        this.data = {
          schema: 1,
          deviceId: uid(),
          activeProfile: null,
          profiles: {}
        };
      }
      if (!this.data.deviceId) this.data.deviceId = uid();
      return this.data;
    },

    save: function () {
      try { localStorage.setItem(KEY, JSON.stringify(this.data)); }
      catch (e) { console.warn("Speichern fehlgeschlagen:", e); }
    },

    /* ---------- Profile ---------- */
    listProfiles: function () {
      var d = this.data, out = [];
      for (var id in d.profiles) if (d.profiles.hasOwnProperty(id)) out.push(d.profiles[id]);
      out.sort(function (a, b) { return a.createdAt - b.createdAt; });
      return out;
    },

    createProfile: function (name) {
      var id = uid();
      this.data.profiles[id] = {
        id: id,
        name: name,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        cards: {},     /* vocabId -> { box, due, reps, lapses, updatedAt } */
        lessons: {},   /* lessonId -> { done, score, updatedAt } */
        stats: { reviews: 0, correct: 0, streak: 0, lastDay: null },
        settings: { dailyGoal: 20, direction: "de2sw" }
      };
      this.data.activeProfile = id;
      this.save();
      return this.data.profiles[id];
    },

    deleteProfile: function (id) {
      delete this.data.profiles[id];
      if (this.data.activeProfile === id) {
        var rest = this.listProfiles();
        this.data.activeProfile = rest.length ? rest[0].id : null;
      }
      this.save();
    },

    setActive: function (id) { this.data.activeProfile = id; this.save(); },

    profile: function () {
      var id = this.data.activeProfile;
      return id ? this.data.profiles[id] : null;
    },

    touch: function () {
      var p = this.profile();
      if (p) { p.updatedAt = Date.now(); this.save(); }
    },

    /* ---------- Karten ---------- */
    card: function (vocabId) {
      var p = this.profile();
      if (!p) return null;
      if (!p.cards[vocabId]) {
        p.cards[vocabId] = { box: 0, due: 0, reps: 0, lapses: 0, updatedAt: 0 };
      }
      return p.cards[vocabId];
    },

    /* ---------- Tagesstreak ---------- */
    markDay: function () {
      var p = this.profile();
      if (!p) return;
      var today = new Date().toISOString().slice(0, 10);
      if (p.stats.lastDay === today) return;
      var yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
      p.stats.streak = (p.stats.lastDay === yesterday) ? p.stats.streak + 1 : 1;
      p.stats.lastDay = today;
      this.save();
    },

    /* ---------- Export / Import (= manueller Sync zwischen Geräten) ---------- */
    exportProfile: function () {
      var p = this.profile();
      if (!p) return null;
      return JSON.stringify({ kind: "kiswahili-profile", schema: 1,
                              exportedAt: Date.now(), profile: p });
    },

    importProfile: function (json) {
      var obj = JSON.parse(json);
      if (!obj || obj.kind !== "kiswahili-profile" || !obj.profile) {
        throw new Error("Das ist kein kopierter Kiswahili-Fortschritt. Kopiere ihn auf dem anderen Gerät unter „Fortschritt kopieren“.");
      }
      var incoming = obj.profile;
      var existing = this.data.profiles[incoming.id];

      if (!existing) {
        this.data.profiles[incoming.id] = incoming;
      } else {
        /* Feldweise zusammenführen: der jeweils neuere Stand gewinnt. */
        var k;
        for (k in incoming.cards) {
          if (!incoming.cards.hasOwnProperty(k)) continue;
          var a = existing.cards[k], b = incoming.cards[k];
          if (!a || (b.updatedAt || 0) > (a.updatedAt || 0)) existing.cards[k] = b;
        }
        for (k in incoming.lessons) {
          if (!incoming.lessons.hasOwnProperty(k)) continue;
          var la = existing.lessons[k], lb = incoming.lessons[k];
          if (!la || (lb.updatedAt || 0) > (la.updatedAt || 0)) existing.lessons[k] = lb;
        }
        if ((incoming.updatedAt || 0) > (existing.updatedAt || 0)) {
          existing.name = incoming.name;
          existing.stats = incoming.stats;
          existing.settings = incoming.settings;
          existing.updatedAt = incoming.updatedAt;
        }
      }
      this.data.activeProfile = incoming.id;
      this.save();
      return this.data.profiles[incoming.id];
    },

    reset: function () {
      this.data = null;
      try { localStorage.removeItem(KEY); } catch (e) {}
      this.load();
    }
  };

  KS.store = Store;
})();
