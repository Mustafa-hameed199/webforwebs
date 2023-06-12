import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Picture from "../views/Picture.vue";
import Icon from "../views/Icon.vue";
import Font from "../views/Font.vue";
import Color from "../views/Color.vue";
import Layout from "../views/Layout.vue";
import Template from "../views/Template.vue";
import Practice from "../views/Practice.vue";
import ProblemSolving from "../views/ProblemSolving.vue";
import Animation from "../views/Animation.vue";
import Reference from "../views/Reference.vue";
import UsefulWeb from "../views/UsefulWeb.vue";
import WebInspire from "../views/WebInspire.vue";
import Hosting from "../views/Hosting.vue";
import RemoteJob from "../views/RemoteJob.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/picture",
        name: "Picture",
        component: Picture,
    },
    {
        path: "/icon",
        name: "Icon",
        component: Icon,
    },
    {
        path: "/font",
        name: "Font",
        component: Font,
    },
    {
        path: "/color",
        name: "Color",
        component: Color,
    },
    {
        path: "/layout",
        name: "Layout",
        component: Layout,
    },
    {
        path: "/template",
        name: "Template",
        component: Template,
    },
    {
        path: "/practice",
        name: "Practice",
        component: Practice,
    },
    {
        path: "/problem_solving",
        name: "ProblemSolving",
        component: ProblemSolving,
    },
    {
        path: "/animation",
        name: "Animation",
        component: Animation,
    },
    {
        path: "/reference",
        name: "Reference",
        component: Reference,
    },
    {
        path: "/useful_web",
        name: "UsefulWeb",
        component: UsefulWeb,
    },
    {
        path: "/web_inspire",
        name: "WebInspire",
        component: WebInspire,
    },
    {
        path: "/hosting",
        name: "Hosting",
        component: Hosting,
    },
    {
        path: "/remote_job",
        name: "RemoteJob",
        component: RemoteJob,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
