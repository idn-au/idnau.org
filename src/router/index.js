import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/HomeView.vue") 
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../views/AboutView.vue")
        },
        {
            path: "/resources",
            component: () => import("../views/resources/ProjectResourcesWrapperView.vue"),
            children: [
                {
                    path: "",
                    name: "resources",
                    component: () => import("../views/ProjectResourcesView.vue"),
                },
                {
                    path: "findingindigenousdata",
                    name: "finding data",
                    component: () => import("../views/resources/FindingView.vue")
                },
                {
                    path: "characterisingindigenousdata",
                    name: "characterising data",
                    component: () => import("../views/resources/CharacterisingView.vue")
                },
                {
                    path: "senddatatous",
                    name: "send data to us",
                    component: () => import("../views/resources/SendDataView.vue")
                },
                {
                    path: "indigenousdatagovernance",
                    name: "indigenous data governance",
                    component: () => import("../views/resources/DataGovernanceView.vue")
                },
                {
                    path: "iircproject",
                    name: "IIRC project",
                    component: () => import("../views/resources/IIRCProjectView.vue")
                },
                {
                    path: "faircare",
                    name: "fair care",
                    component: () => import("../views/resources/FairCareView.vue")
                },
            ]
        },
        {
            path: "/contact",
            name: "contact",
            component: () => import("../views/ContactView.vue")
        },
        {
            path: "/catalogue",
            beforeEnter: () => {
                if (window.confirm("Be careful: This catalogue has been gathered from a wide range of sources and sometimes contains language and views that may be offensive to Aboriginal and Torres Strait Islander people. While the IDN does not support such language and views, it is considered important historically to present this information without alteration. Are you sure you want to proceed?")) {
                    location.href = "http://idn.kurrawong.net/catprez";
                }
            }
        }
    ]
});

export default router;
