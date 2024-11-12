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
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

createApp(App)
.component("Dialog", Dialog)
.component("Button", Button)
.component("Splitter", Splitter)
.component("SplitterPanel", SplitterPanel)
.component("Tabs", Tabs)
.component("TabList", TabList)
.component("Tab", Tab)
.component("TabPanels", TabPanels)
.component("TabPanel", TabPanel)
.use(createPinia())
.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
.mount('#app')
