<script lang="ts" setup>
import { ChevronDown, ChevronUp, Sun, Moon, SunMoon, Menu, ExternalLink, ChevronRight } from "lucide-vue-next";
import type {ContentNavigationItem} from "@nuxt/content";

const router = useRouter();
const route = useRoute();
const colorMode = useColorMode();

const props = defineProps<{
	navigation: ContentNavigationItem[];
}>();

 const externalLinks: ContentNavigationItem[] = [  
    {
        "title": "The National Indigenous Data Catalogue",
        "path": "https://data.idnau.org/",
        "stem": "2.national-indigenous-data-catalogue"
    },
    {
        "title": "Tools",
        "path": "/tools",
        "stem": "5.tools/1.index",
        "children": [
            {
                "title": "IDN Catalogue Profile",
                "path": "https://data.idnau.org/pid/cp",
                "stem": "5.tools/2.idn-catalogue-profile",
                "description": ""
            },
            {
                "title": "Agent Database",
                "path": "https://agentsdb.idnau.org",
                "stem": "5.tools/3.agent-database",
                "description": ""
            },
            {
                "title": "Metadata Entry Tool",
                "path": "https://metadata.idnau.org/",
                "stem": "5.tools/4.metadata-entry-tool",
                "description": ""
            },
            {
                "title": "Search portal",
                "path": "https://data.idnau.org/search",
                "stem": "5.tools/5.search-portal",
                "description": ""
            }
        ]
    }
 ];

function mergeExternalLinks(nav: any[], external: any[]) {
  const map = new Map(nav.map(i => [i.path, i]));

  for (const ext of external) {
    const parent = map.get(ext.path);

    if (!parent) {
      nav.push(ext);
      continue;
    }

    const existing = new Set(parent.children?.map((c: any) => c.path));

    parent.children = [
      ...(parent.children ?? []),
      ...(ext.children ?? []).filter((c: any) => !existing.has(c.path))
    ].sort((a, b) => a.stem.localeCompare(b.stem, undefined, { numeric: true }));
  }

  return nav.sort((a, b) =>
    a.stem.localeCompare(b.stem, undefined, { numeric: true })
  );
}

const navigation = mergeExternalLinks(
  [...props.navigation], 
  externalLinks
);

const showSidenav = ref(false);

router.beforeEach((from, to) => {
    showSidenav.value = false;
});
</script>

<template>
    <header class="top-nav sticky top-0 bg-background/40 grid grid-cols-2 md:flex md:flex-row md:justify-between items-center p-2 z-50 gap-2 backdrop-sm backdrop-blur-sm">
        <!-- mobile nav -->
        <Sheet v-model:open="showSidenav">
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" class="md">
                    <Menu class="size-8" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" class="p-2  w-84" hideClose>
                <SheetHeader class="grid grid-cols-3 gap-2 mb-4">
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                            <Menu class="size-4" />
                        </Button>
                    </SheetClose>
                    <NuxtLink to="/">
                        <div class="flex flex-col gap-3 items-center justify-center">                            
                            <NuxtImg v-show="colorMode.unknown || colorMode.value === 'light'" src="/apple-touch-icon.png" alt="The Indigenous Data Commons Logo" class="h-[40px]" />
                            <NuxtImg v-show="!colorMode.unknown && colorMode.value === 'dark'" src="/apple-touch-icon.png" alt="The Indigenous Data Commons Logo" class="h-[40px]" />
                            <!-- <span class="text-xs whitespace-nowrap">The Indigenous Data Commons</span> -->
                        </div>
                    </NuxtLink>
                </SheetHeader>
                <nav class="nav-sidebar flex flex-col gap-2">
                    <template v-for="link of navigation">
                        <Collapsible v-if="link.children && link.children.length > 1" :defaultOpen="route.path.startsWith(link.path)" v-slot="{open}">
                            <CollapsibleTrigger :class="`rounded-none border-l-2 border-l-transparent ${route.path.startsWith(link.path) ? 'border-l-isu-red' : ''}`" asChild>
                                <Button variant="ghost" class="w-full">
                                    {{ link.children.find(c => c.path === link.path)?.title || link.title }} 
                                    <ChevronUp v-if="open" class="size-4" />
                                    <ChevronDown v-else class="size-4" />
                                </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent class="flex flex-col gap-2 bg-secondary/50 rounded">
                                <template v-if="link.children.find(c => c.path === link.path)">
                                    <Button variant="ghost" :class="`rounded-none border-l-2 border-l-transparent ${route.path === link.path ? 'border-l-isu-red' : ''}`" asChild>
                                        <!-- <NuxtLink :to="link.path" class="!font-bold">
                                            {{ link.children.find(c => c.path === link.path)?.title }} 
                                        </NuxtLink> -->
                                    </Button>
                                    <Separator />
                                </template>
                                <Button v-for="child in link.children" variant="ghost" :class="`rounded-none border-l-2 border-l-transparent ${route.path.startsWith(child.path) ? 'border-l-isu-red' : ''}`" asChild>
                                    <NuxtLink v-if="child.path !== link.path" :to="child.path">{{ child.title }} </NuxtLink>
                                </Button>
                            </CollapsibleContent>
                        </Collapsible>
                        <Button v-else variant="ghost" :class="`rounded-none border-l-2 border-l-transparent ${route.path.startsWith(link.path) ? 'border-l-isu-red' : ''}`" asChild>
                            <NuxtLink :to="link.path">{{ link.title }}</NuxtLink>
                        </Button>
                    </template>
                </nav>
            </SheetContent>
        </Sheet>        
        <div class="flex flex-row justify-end items-center gap-2">
            <!-- <SearchCommand /> -->
	        <Button variant="ghost" size="icon" @click="!colorMode.unknown ? colorMode.value === 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark' : undefined">
		        <SunMoon v-show="colorMode.unknown" />
		        <Sun v-show="colorMode.value === 'dark'" class="w-4 h-4" />
		        <Moon v-show="colorMode.value === 'light'" class="w-4 h-4" />
	        </Button>
        </div>
    </header>
</template>
