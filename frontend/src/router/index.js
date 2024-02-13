import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Buttons from "../views/Buttons.vue";
import Alerts from "../views/Alerts.vue";
import Cards from "../views/Cards.vue";
import Forms from "../views/Forms.vue";
import Typography from "../views/Typography.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Icons from "../views/Icons.vue";
import SamplePage from "../views/SamplePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/buttons",
    name: "Buttons",
    component: Buttons,
  },
  {
    path: "/alerts",
    name: "Alerts",
    component: Alerts,
  },
  {
    path: "/cards",
    name: "Cards",
    component: Cards,
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  },
  {
    path: "/typography",
    name: "Typography",
    component: Typography,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/icons",
    name: "Icons",
    component: Icons,
  },
  {
    path: "/sample_page",
    name: "SamplePage",
    component: SamplePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
