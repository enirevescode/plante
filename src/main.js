import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { mdiExport } from '@mdi/js';
import { mdiConnection } from '@mdi/js';
import { mdiViewDashboard } from '@mdi/js';
import { mdiEmailOutline } from '@mdi/js';
import { mdiLockOutline } from '@mdi/js';
import { mdiCancel } from '@mdi/js';
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      export: mdiExport,
      connexion: mdiConnection,
      admin: mdiViewDashboard,
      email: mdiEmailOutline,
      password: mdiLockOutline,
      fermer: mdiCancel,
    },
    sets: {
      mdi,
    },
  },
});

createApp(App).use(vuetify).use(store).use(router).mount("#app");
