<script setup lang="ts">
import { ChevronDown, ChevronUp, X, Search, Sun, Moon, SunMoon, Menu , ExternalLink } from "lucide-vue-next";

const router = useRouter();
const route = useRoute();
const colorMode = useColorMode();

const externalLinks: {title: string; url: string}[] = [];

const searchTerm = ref("");
const showSearch = ref(false);
const showSidenav = ref(false);

const { data, status, error, refresh } = await useLazyAsyncData(() => searchContent(searchTerm));

const results = computed(() => {
    const searchResults = [];
    if (data.value?.value) {
        // data.value.value.forEach(r => {
        //     const existing = searchResults.find(s => s.id.split("#")[0] === r.id.split("#")[0]);
        //     if (existing) {
                
        //     } else {
        //         searchResults.push(r);
        //     }
        // });
        return data.value.value;
    }
    return searchResults;
});

function reset() {
    showSearch.value = false;
    searchTerm.value = "";
    data.value = [];
}

router.beforeEach((from, to) => {
    showSidenav.value = false;
    reset();
});

watch(showSearch, (newValue) => {
    if (!newValue) {
        reset();
    }
});
</script>
<template>
    <header class="top-nav sticky top-0 bg-background grid grid-cols-3 md:flex md:flex-row md:justify-between items-center p-2 z-50">
        <ShadSheet v-model:open="showSidenav">
            <ShadSheetTrigger as-child>
                <ShadButton variant="ghost" size="icon" class="md:hidden">
                    <Menu class="size-4" />
                </ShadButton>
            </ShadSheetTrigger>
            <ShadSheetContent side="left" class="p-2" hideClose>
                <ShadSheetHeader class="grid grid-cols-3 gap-2 mb-4">
                    <ShadSheetClose as-child>
                        <ShadButton variant="ghost" size="icon">
                            <Menu class="size-4" />
                        </ShadButton>
                    </ShadSheetClose>
                    <NuxtLink to="/">
                        <div class="flex flex-row gap-2 items-center justify-center">
                            <NuxtImg v-show="colorMode.unknown || colorMode.value === 'light'" src="/img/idn-logo-250.png" alt="IDN Logo" class="h-[40px]" />
                            <NuxtImg v-show="!colorMode.unknown && colorMode.value === 'dark'" src="/img/idn-logo-250.png" alt="IDN Logo" class="h-[40px]" />
                            <span class="text-xl">IDN</span>
                        </div>
                    </NuxtLink>
                    <div></div>
                </ShadSheetHeader>
                <nav class="nav-sidebar flex flex-col gap-2">
                    <ContentNavigation v-slot="{ navigation }">
                        <template v-for="link of navigation">
                            <ShadCollapsible v-if="link.children && link.children.length > 1" :defaultOpen="route.path.startsWith(link._path)" v-slot="{open}">
                                <ShadCollapsibleTrigger :class="`rounded-none border-l-2 border-l-transparent ${route.path.startsWith(link._path) ? 'border-l-isu-red' : ''}`" as-child>
                                    <ShadButton variant="ghost" class="w-full">
                                        {{ link.children.find(c => c._path === link._path)?.title || link.title }}
                                        <ChevronUp v-if="open" class="size-4" />
                                        <ChevronDown v-else class="size-4" />
                                    </ShadButton>
                                </ShadCollapsibleTrigger>
                                <ShadCollapsibleContent class="flex flex-col gap-2 bg-secondary/50 rounded">
                                    <template v-if="link.children.find(c => c._path === link._path)">
                                        <ShadButton variant="ghost" :class="`rounded-none border-l-2 border-l-transparent ${route.path === link._path ? 'border-l-isu-red' : ''}`" as-child>
                                            <NuxtLink :to="link._path" class="!font-bold">
                                                {{ link.children.find(c => c._path === link._path)?.title }} Home
                                            </NuxtLink>
                                        </ShadButton>
                                        <ShadSeparator />
                                    </template>
                                    <ShadButton v-for="child in link.children" variant="ghost" :class="`rounded-none border-l-2 border-l-transparent ${route.path.startsWith(child._path) ? 'border-l-isu-red' : ''}`" as-child>
                                        <NuxtLink v-if="child._path !== link._path" :to="child._path">{{ child.title }}</NuxtLink>
                                    </ShadButton>
                                </ShadCollapsibleContent>
                            </ShadCollapsible>
                            <ShadButton v-else variant="ghost" :class="`rounded-none border-l-2 border-l-transparent ${route.path.startsWith(link._path) ? 'border-l-isu-red' : ''}`" as-child>
                                <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
                            </ShadButton>
                        </template>
                    </ContentNavigation>
                    <ShadButton v-for="extLink in externalLinks" variant="ghost" as-child>
                        <a :href="extLink.url" target="_blank" rel="noopener noreferrer">{{ extLink.title }} <ExternalLink class="size-4" /></a>
                    </ShadButton>
                </nav>
            </ShadSheetContent>
        </ShadSheet>
        <NuxtLink to="/">
            <div class="flex flex-row gap-2 items-center justify-center">
                <NuxtImg v-show="colorMode.unknown || colorMode.value === 'light'" src="/img/idn-logo-250.png" alt="IDN Logo" class="h-[40px] md:h-[54px]" />
                <NuxtImg v-show="!colorMode.unknown && colorMode.value === 'dark'" src="/img/idn-logo-250.png" alt="IDN Logo" class="h-[40px] md:h-[54px]" />
                <span class="hidden md:inline text-xl">The Indigenous Data Network</span>
                <span class="md:hidden text-xl">IDN</span>
            </div>
        </NuxtLink>
        <nav class="ml-auto md:flex md:flex-row hidden">
            <ContentNavigation v-slot="{ navigation }">
                <template v-for="link of navigation">
                    <ShadDropdownMenu v-if="link.children && link.children.length > 1" v-slot="{open}">
                        <ShadDropdownMenuTrigger as-child>
                            <ShadButton variant="ghost" :class="`rounded-none p-2 border-b-2 border-b-transparent ${route.path.startsWith(link._path) ? 'border-b-isu-red' : ''}`">
                                {{ link.children.find(c => c._path === link._path)?.title || link.title }}
                                <ChevronUp v-if="open" class="size-4" />
                                <ChevronDown v-else class="size-4" />
                            </ShadButton>
                        </ShadDropdownMenuTrigger>
                        <ShadDropdownMenuContent class="w-56 nav-dropdown">
                            <template v-if="link.children.find(c => c._path === link._path)">
                                <ShadDropdownMenuItem :class="`rounded-none border-l-2 border-l-transparent ${route.path === link._path ? 'border-l-isu-red' : ''}`" as-child>
                                    <NuxtLink :to="link._path" class="font-bold cursor-pointer">
                                        {{ link.children.find(c => c._path === link._path)?.title }} Home
                                    </NuxtLink>
                                </ShadDropdownMenuItem>
                                <ShadDropdownMenuSeparator />
                            </template>
                            <ShadDropdownMenuGroup>
                                <ShadDropdownMenuItem v-for="child in link.children" :class="`rounded-none border-l-2 border-l-transparent ${route.path.startsWith(child._path) ? 'border-l-isu-red' : ''}`" as-child>
                                    <NuxtLink v-if="child._path !== link._path" :to="child._path" class="cursor-pointer">{{ child.title }}</NuxtLink>
                                </ShadDropdownMenuItem>
                            </ShadDropdownMenuGroup>
                        </ShadDropdownMenuContent>
                    </ShadDropdownMenu>
                    <ShadButton v-else variant="ghost" :class="`rounded-none p-2 border-b-2 border-b-transparent ${route.path.startsWith(link._path) ? 'border-b-isu-red' : ''}`" as-child>
                        <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
                    </ShadButton>
                </template>
            </ContentNavigation>
            <ShadButton v-for="extLink in externalLinks" variant="ghost" as-child>
                <a :href="extLink.url" target="_blank" rel="noopener noreferrer">{{ extLink.title }} <ExternalLink class="size-4" /></a>
            </ShadButton>
        </nav>
        <div class="flex flex-row justify-end items-center">
            <ShadDialog v-model:open="showSearch">
                <ShadDialogTrigger as-child>
                    <ShadButton variant="ghost" size="icon">
                        <Search class="size-4" />
                    </ShadButton>
                </ShadDialogTrigger>
                <ShadDialogContent class="sm:max-w-[640px] rounded-lg" hideClose>
                    <div class="relative w-full items-center">
                        <ShadInput type="search" v-model="searchTerm" @input="refresh" placeholder="Search..." class="px-10" autofocus />
                        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                            <Search class="size-5 text-muted-foreground" />
                        </span>
                        <span class="absolute end-0 inset-y-0 flex items-center justify-center">
                            <ShadButton size="icon" variant="link" class="text-muted-foreground hover:text-foreground" @click="searchTerm = ''">
                                <X class="size-4" />
                            </ShadButton>
                        </span>
                    </div>
                    <div v-if="results.length > 0" class="flex flex-col gap-4 max-h-[80dvh] overflow-y-auto">
                        <NuxtLink v-for="res in results" :to="res.id" class="search-result">
                            <ShadCard class="hover:bg-accent cursor-pointer p-3 flex flex-col gap-2">
                                <ShadCardHeader class="p-0">
                                    <template v-if="res.titles.length > 0">{{ res.titles[0] }} > {{ res.title }}</template>
                                    <template v-else>{{ res.title }}</template>
                                </ShadCardHeader>
                                <ShadCardContent class="p-0">
                                    <p class="text-sm italic text-muted-foreground">
                                        {{ res.content.length > 200 ? res.content.slice(0, 200) + "..." : res.content }}
                                    </p>
                                </ShadCardContent>
                            </ShadCard>
                        </NuxtLink>
                    </div>
                </ShadDialogContent>
            </ShadDialog>
            <ShadButton variant="ghost" size="icon" @click="!colorMode.unknown ? colorMode.value === 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark' : undefined">
                <SunMoon v-show="colorMode.unknown" />
                <Sun v-show="colorMode.value === 'dark'" class="w-4 h-4" />
                <Moon v-show="colorMode.value === 'light'" class="w-4 h-4" />
            </ShadButton>
        </div>
    </header>
</template>
