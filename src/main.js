import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import Splitter from "primevue/splitter";
import SplitterPanel from 'primevue/splitterpanel';
import Dialog from "primevue/dialog";

createApp(App)
.component("Dialog", Dialog)
.component("Splitter", Splitter)
.component("SplitterPanel", SplitterPanel)
.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
.mount('#app')
