import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'
import { createPinia } from "pinia";

import Splitter from "primevue/splitter";
import SplitterPanel from 'primevue/splitterpanel';
import Dialog from "primevue/dialog";
import Button from 'primevue/button';

createApp(App)
.component("Dialog", Dialog)
.component("Button", Button)
.component("Splitter", Splitter)
.component("SplitterPanel", SplitterPanel)
.use(createPinia())
.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
.mount('#app')
