<script lang="ts" setup>
import { ChevronDown, ChevronUp, Sun, Moon, SunMoon, Menu , ExternalLink } from "lucide-vue-next";

const router = useRouter();
const route = useRoute();
const colorMode = useColorMode();

const externalLinks: {title: string; url: string}[] = [];

const showSidenav = ref(false);

const { data: navigation } = await useAsyncData("navigation", () => queryCollectionNavigation("content"));

router.beforeEach((from, to) => {
    showSidenav.value = false;
});
</script>

<template>
    <header class="top-nav sticky top-0 bg-background/60 grid grid-cols-3 md:flex md:flex-row md:justify-between items-center p-2 z-50 gap-2 backdrop-blur-sm">
        <!-- mobile nav -->
        <Sheet v-model:open="showSidenav">
            <SheetTrigger as-child>
                <Button variant="ghost" size="icon" class="md:hidden">
                    <Menu class="size-4" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" class="p-2" hideClose>
                <SheetHeader class="grid grid-cols-3 gap-2 mb-4">
                    <SheetClose as-child>
                        <Button variant="ghost" size="icon">
                            <Menu class="size-4" />
                        </Button>
                    </SheetClose>
                    <NuxtLink to="/">
                        <div class="flex flex-row gap-2 items-center justify-center">
                            <NuxtImg v-show="colorMode.unknown || colorMode.value === 'light'" src="/img/idn-logo-250.png" alt="IDN Logo" class="h-[40px]" />
                            <NuxtImg v-show="!colorMode.unknown && colorMode.value === 'dark'" src="/img/idn-logo-250.png" alt="IDN Logo" class="h-[40px]" />
                            <span class="text-xl">IDN</span>
                        </div>
                    </NuxtLink>
                    <div></div>
                </SheetHeader>
                <nav class="nav-sidebar flex flex-col gap-2">
                    <template v-for="link of navigation">
                        <Collapsible v-if="link.children && link.children.length > 1" :defaultOpen="route.path.startsWith(link.path)" v-slot="{open}">
                            <CollapsibleTrigger :class="`rounded-none border-l-2 border-l-transparent ${route.path.startsWith(link.path) ? 'border-l-isu-red' : ''}`" as-child>
                                <Button variant="ghost" class="w-full">
                                    {{ link.children.find(c => c.path === link.path)?.title || link.title }}
                                    <ChevronUp v-if="open" class="size-4" />
                                    <ChevronDown v-else class="size-4" />
                                </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent class="flex flex-col gap-2 bg-secondary/50 rounded">
                                <template v-if="link.children.find(c => c.path === link.path)">
                                    <Button variant="ghost" :class="`rounded-none border-l-2 border-l-transparent ${route.path === link.path ? 'border-l-isu-red' : ''}`" as-child>
                                        <NuxtLink :to="link.path" class="!font-bold">
                                            {{ link.children.find(c => c.path === link.path)?.title }} Home
                                        </NuxtLink>
                                    </Button>
                                    <Separator />
                                </template>
                                <Button v-for="child in link.children" variant="ghost" :class="`rounded-none border-l-2 border-l-transparent ${route.path.startsWith(child.path) ? 'border-l-isu-red' : ''}`" as-child>
                                    <NuxtLink v-if="child.path !== link.path" :to="child.path">{{ child.title }}</NuxtLink>
                                </Button>
                            </CollapsibleContent>
                        </Collapsible>
                        <Button v-else variant="ghost" :class="`rounded-none border-l-2 border-l-transparent ${route.path.startsWith(link.path) ? 'border-l-isu-red' : ''}`" as-child>
                            <NuxtLink :to="link.path">{{ link.title }}</NuxtLink>
                        </Button>
                    </template>
                    <Button v-for="extLink in externalLinks" variant="ghost" as-child>
                        <a :href="extLink.url" target="_blank" rel="noopener noreferrer">{{ extLink.title }} <ExternalLink class="size-4" /></a>
                    </Button>
                </nav>
            </SheetContent>
        </Sheet>
        <NuxtLink to="/">
            <div class="flex flex-row gap-2 items-center justify-center">
                <NuxtImg v-show="colorMode.unknown || colorMode.value === 'light'" src="/img/idn-logo-250.png" alt="IDN Logo" class="h-[40px] md:h-[54px]" />
                <NuxtImg v-show="!colorMode.unknown && colorMode.value === 'dark'" src="/img/idn-logo-250.png" alt="IDN Logo" class="h-[40px] md:h-[54px]" />
                <span class="hidden md:inline text-xl">The Indigenous Data Network</span>
                <span class="md:hidden text-xl">IDN</span>
            </div>
        </NuxtLink>
        <!-- desktop nav -->
        <nav class="ml-auto md:flex md:flex-row hidden">
            <template v-for="link of navigation">
                <DropdownMenu v-if="link.children && link.children.length > 1" v-slot="{open}">
                    <DropdownMenuTrigger as-child>
                        <Button variant="ghost" :class="`rounded-none p-2 border-b-2 border-b-transparent ${route.path.startsWith(link.path) ? 'border-b-isu-red' : ''}`">
                            {{ link.children.find(c => c.path === link.path)?.title || link.title }}
                            <ChevronUp v-if="open" class="size-4" />
                            <ChevronDown v-else class="size-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent class="w-56 nav-dropdown">
                        <template v-if="link.children.find(c => c.path === link.path)">
                            <DropdownMenuItem :class="`rounded-none border-l-2 border-l-transparent ${route.path === link.path ? 'border-l-isu-red' : ''}`" as-child>
                                <NuxtLink :to="link.path" class="font-bold cursor-pointer">
                                    {{ link.children.find(c => c.path === link.path)?.title }} Home
                                </NuxtLink>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                        </template>
                        <DropdownMenuGroup>
                            <DropdownMenuItem v-for="child in link.children" :class="`rounded-none border-l-2 border-l-transparent ${route.path.startsWith(child.path) ? 'border-l-isu-red' : ''}`" as-child>
                                <NuxtLink v-if="child.path !== link.path" :to="child.path" class="cursor-pointer">{{ child.title }}</NuxtLink>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button v-else variant="ghost" :class="`rounded-none p-2 border-b-2 border-b-transparent ${route.path.startsWith(link.path) ? 'border-b-isu-red' : ''}`" as-child>
                    <NuxtLink :to="link.path">{{ link.title }}</NuxtLink>
                </Button>
            </template>
            <Button v-for="extLink in externalLinks" variant="ghost" as-child>
                <a :href="extLink.url" target="_blank" rel="noopener noreferrer">{{ extLink.title }} <ExternalLink class="size-4" /></a>
            </Button>
        </nav>
        <div class="flex flex-row justify-end items-center gap-2">
            <SearchCommand />
            <Button variant="ghost" size="icon" @click="!colorMode.unknown ? colorMode.value === 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark' : undefined">
                <SunMoon v-show="colorMode.unknown" />
                <Sun v-show="colorMode.value === 'dark'" class="w-4 h-4" />
                <Moon v-show="colorMode.value === 'light'" class="w-4 h-4" />
            </Button>
        </div>
    </header>
</template>
