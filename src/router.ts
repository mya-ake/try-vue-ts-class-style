import Vue from "vue";
import Router from "vue-router";
import {
  ClassStyle,
  ObjectStyle,
  Contact,
  ContactConfirm,
  NotFound
} from "@/views";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "class-style",
      component: ClassStyle
    },
    {
      path: "/object-style",
      name: "object-style",
      component: ObjectStyle
    },
    {
      path: "/contact",
      component: Contact
    },
    {
      path: "/contact/confirm",
      component: ContactConfirm
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});
