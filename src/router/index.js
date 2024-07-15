import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";
import JobView from "@/views/JobView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/addjob",
      name: "addjob",
      component: AddJobView,
    },
    {
      path: "/editjob",
      name: "editjob",
      component: EditJobView,
    },
    {
      path: "/jobs/:id",
      name: "/job",
      component: JobView,
    },
    {
      path: "/:catchAll(.*)",
      name: "/not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
