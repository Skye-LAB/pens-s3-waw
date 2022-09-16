import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import MedTableView from "../views/medecines/MedTableView.vue";
import MedAddView from "../views/medecines/MedAddView.vue";
import PatAddView from "../views/patients/PatAddView.vue";
import PatPreCheckView from "../views/patients/PatPreCheckView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/medecine",
    name: "medecine",
    component: MedTableView,
  },
  {
    path: "/medecine/new",
    name: "medecine-create",
    component: MedAddView,
  },
  {
    path: "/patient/preserve",
    name: "patient-preserve",
    component: PatAddView,
  },
  {
    path: "/patient/precheck",
    name: "patient-precheck",
    component: PatPreCheckView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
