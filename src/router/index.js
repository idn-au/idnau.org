import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/about",
            name: "about",
            component: () => import("@/views/AboutView.vue")
        },
        {
            path: "/resources",
            component: () => import("@/views/resources/ProjectResourcesWrapperView.vue"),
            children: [
                {
                    path: "",
                    name: "resources",
                    component: () => import("@/views/resources/ProjectResourcesView.vue"),
                },
                {
                    path: "findingindigenousdata",
                    name: "finding data",
                    component: () => import("@/views/resources/FindingView.vue")
                },
                {
                    path: "characterisingindigenousdata",
                    name: "characterising data",
                    component: () => import("@/views/resources/CharacterisingView.vue")
                },
                {
                    path: "senddatatous",
                    name: "send data to us",
                    component: () => import("@/views/resources/SendDataView.vue")
                },
                {
                    path: "indigenousdatagovernance",
                    name: "indigenous data governance",
                    component: () => import("@/views/resources/DataGovernanceView.vue")
                },
                {
                    path: "iircproject",
                    name: "IIRC project",
                    component: () => import("@/views/resources/IIRCProjectView.vue")
                },
                {
                    path: "faircare",
                    name: "fair care",
                    component: () => import("@/views/resources/FairCareView.vue")
                },
                {
                    path: "metadataprofile",
                    name: "metadata profile",
                    component: () => import("@/views/resources/MetadataProfileView.vue")
                },
                {
                    path: "metadataentry",
                    name: "metadata entry",
                    component: () => import("@/views/resources/MetadataEntryView.vue")
                },
                {
                    path: "catalog",
                    name: "catalog",
                    component: () => import("@/views/resources/CatalogView.vue")
                },
                {
                    path: "vocabs",
                    name: "vocabularies",
                    component: () => import("@/views/resources/VocabsView.vue")
                },
                {
                    path: "catalogprofile",
                    name: "catalog profile",
                    component: () => import("@/views/resources/CatalogProfileView.vue")
                },
                {
                    path: "agentsdb",
                    name: "agentsdb",
                    component: () => import("@/views/resources/AgentsDBView.vue")
                },
            ]
        },
        {
            path: "/contact",
            name: "contact",
            component: () => import("@/views/ContactView.vue")
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not found",
            component: () => import("@/views/NotFoundView.vue")
        }
    ]
});

router.beforeEach(() => {
    window.scrollTo(0, 0);
});

export default router;
