import { createRouter, createWebHistory } from "vue-router";
import { loadLayoutMiddleware } from "@/composables/loadLayoutMiddleware";
import type { RouteRecordRaw } from "vue-router";
import menus from "@/modules";

const routes: RouteRecordRaw[] = menus as RouteRecordRaw[];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(loadLayoutMiddleware);
// @ts-ignore
// router.beforeEach(loadLayoutMiddleware)
// router.beforeEach(checkAuthenticationMiddleware)

export default router;
