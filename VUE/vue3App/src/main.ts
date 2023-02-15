import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
// console.log("++++", process);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
