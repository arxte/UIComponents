export default [
  {
    name: "inputs",
    path: "/inputs",
    url: "/inputs",
    component: () => import("@/views/inputs.vue"),
  },
  {
    name: "sliders",
    path: "/sliders",
    url: "/sliders",
    component: () => import("@/views/sliders.vue"),
  },
  {
    name: "icons",
    path: "/icons",
    url: "/icons",
    component: () => import("@/views/icons.vue"),
  },
];
