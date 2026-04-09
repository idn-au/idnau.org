<script lang="ts" setup>
import { ChevronDown, ChevronUp, Sun, Moon, SunMoon, Menu, ExternalLink, ChevronRight } from "lucide-vue-next";
import { NavigationMenuSub } from "reka-ui";
import {navigationMenuTriggerStyle} from "~/components/ui/navigation-menu";
import type {ContentNavigationItem} from "@nuxt/content";

const router = useRouter();
const route = useRoute();
const colorMode = useColorMode();

const props = defineProps<{
	navigation: ContentNavigationItem[];
}>();

// const externalLinks: {title: string; url: string}[] = [
//     {
//         title: "The National Indigenous Data Catalogue",
//         url: "https://data.idnau.org/"
//     }
//  ];

 const externalLinks: {title: string; path: string, stem: string, children?: any[]}[] = [  
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
                "path": "/resources/idn-catalogue-profile",
                "stem": "5.tools/2.idn-catalogue-profile",
                "description": "",
                "websiteURL": "https://idn-au.github.io/idn-catalogue-profile/profile.html"
            },
            {
                "title": "Agent Database",
                "path": "/tools/agent-database",
                "stem": "5.tools/3.agent-database",
                "description": "",
                "websiteURL": "https://agentsdb.idnau.org"
            },
            {
                "title": "Metadata Entry Tools",
                "path": "/tools/metadata-entry-tool",
                "stem": "5.tools/4.metadata-entry-tool",
                "description": "",
                "websiteURL": "https://metadata.idnau.org/"
            },
            {
                "title": "Search portal",
                "path": "/tools/search-portal",
                "stem": "5.tools/5.search-portal",
                "description": "",
                "websiteURL": "https://data.idnau.org/search"
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
                                    <NuxtLink v-if="child.path !== link.path" :to="child.websiteURL || child.path">{{ child.title }} </NuxtLink>
                                </Button>
                            </CollapsibleContent>
                        </Collapsible>
                        <Button v-else variant="ghost" :class="`rounded-none border-l-2 border-l-transparent ${route.path.startsWith(link.path) ? 'border-l-isu-red' : ''}`" asChild>
                            <NuxtLink :to="link.websiteURL || link.path">{{ link.title }}</NuxtLink>
                        </Button>
                    </template>
                    <!-- <Button v-for="extLink in externalLinks" variant="ghost" asChild>
                        <a :href="extLink.url" target="_blank" rel="noopener noreferrer">{{ extLink.title }} <ExternalLink class="size-4" /></a>
                    </Button> -->
                </nav>
            </SheetContent>
        </Sheet>
        <!-- <NuxtLink to="/">
            <div class="flex flex-row gap-2 items-center justify-center">
                <NuxtImg v-show="colorMode.unknown || colorMode.value === 'light'" src="/apple-touch-icon.png" alt="The Indigenous Data Commons Logo" class="h-[40px] md:h-[54px]" />
                <NuxtImg v-show="!colorMode.unknown && colorMode.value === 'dark'" src="/apple-touch-icon.png" alt="The Indigenous Data Commons Logo" class="h-[40px] md:h-[54px]" /> -->
                <!-- <span class="hidden md:inline text-xl">The Indigenous Data Commons</span> -->
                <!-- <span class="md:hidden text-xl">IDN</span> -->
            <!-- </div>
        </NuxtLink> -->
        <!-- desktop nav -->
<!--        <nav class="ml-auto md:flex md:flex-row hidden">-->
<!--            <template v-for="link of navigation">-->
<!--                <DropdownMenu v-if="link.children && link.children.length > 1" v-slot="{open}">-->
<!--                    <DropdownMenuTrigger asChild>-->
<!--                        <Button variant="ghost" :class="`rounded-none p-2 border-b-2 border-b-transparent ${route.path.startsWith(link.path) ? 'border-b-isu-red' : ''}`">-->
<!--                            {{ link.children.find(c => c.path === link.path)?.title || link.title }}-->
<!--                            <ChevronUp v-if="open" class="size-4" />-->
<!--                            <ChevronDown v-else class="size-4" />-->
<!--                        </Button>-->
<!--                    </DropdownMenuTrigger>-->
<!--                    <DropdownMenuContent class="w-56 nav-dropdown">-->
<!--                        <template v-if="link.children.find(c => c.path === link.path)">-->
<!--                            <DropdownMenuItem :class="`rounded-none border-l-2 border-l-transparent ${route.path === link.path ? 'border-l-isu-red' : ''}`" asChild>-->
<!--                                <NuxtLink :to="link.path" class="font-bold cursor-pointer">-->
<!--                                    {{ link.children.find(c => c.path === link.path)?.title }} Home-->
<!--                                </NuxtLink>-->
<!--                            </DropdownMenuItem>-->
<!--                            <DropdownMenuSeparator />-->
<!--                        </template>-->
<!--                        <DropdownMenuGroup>-->
<!--                            <DropdownMenuItem v-for="child in link.children" :class="`rounded-none border-l-2 border-l-transparent ${route.path.startsWith(child.path) ? 'border-l-isu-red' : ''}`" asChild>-->
<!--                                <NuxtLink v-if="child.path !== link.path" :to="child.path" class="cursor-pointer">{{ child.title }}</NuxtLink>-->
<!--                            </DropdownMenuItem>-->
<!--                        </DropdownMenuGroup>-->
<!--                    </DropdownMenuContent>-->
<!--                </DropdownMenu>-->
<!--                <Button v-else variant="ghost" :class="`rounded-none p-2 border-b-2 border-b-transparent ${route.path.startsWith(link.path) ? 'border-b-isu-red' : ''}`" asChild>-->
<!--                    <NuxtLink :to="link.path">{{ link.title }}</NuxtLink>-->
<!--                </Button>-->
<!--            </template>-->
<!--            <Button v-for="extLink in externalLinks" variant="ghost" asChild>-->
<!--                <a :href="extLink.url" target="_blank" rel="noopener noreferrer">{{ extLink.title }} <ExternalLink class="size-4" /></a>-->
<!--            </Button>-->
<!--        </nav>-->
	    <!-- <NavigationMenu>
		    <NavigationMenuList>
			    <NavigationMenuItem v-for="link of navigation">
				    <template v-if="!!link.children && link.children.length > 1">
					    <NavigationMenuTrigger :class="route.path.startsWith(link.path) ? 'bg-accent/50 text-accent-foreground' : ''">{{link.title}}</NavigationMenuTrigger>
					    <NavigationMenuContent>
						    <ul class="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                <li v-if="link.children?.find(c => c.path === link.path)" class="md:col-span-2">
                                    <NavigationMenuLink asChild :active="route.path === link.path">
                                        <NuxtLink :to="link.path" class="font-bold">
                                            {{ link.children.find(c => c.path === link.path)?.title }}
                                        </NuxtLink>
                                    </NavigationMenuLink>
                                </li>
                                <li v-if="link.children?.find(c => c.path === link.path)" class="md:col-span-2 border-t my-1"> </li>
							    <li v-for="child in link.children.filter(c => c.path !== link.path)" >
								    <div v-if="!!child.children && child.children.length > 1">
									    <div class="text-sm">{{child.title}}</div>
									    <div class="ml-4">
										    <NavigationMenuLink v-for="grandchild in child.children" asChild :active="route.path.startsWith(grandchild.path)">
											    <NuxtLink :to="grandchild.path">
												    <div class="text-sm leading-none font-medium">
													    {{ grandchild.title }}
												    </div>
												    <p v-if="child.description" class="text-muted-foreground line-clamp-2 text-sm leading-snug">
													    {{ grandchild.description }}
												    </p>
											    </NuxtLink>
										    </NavigationMenuLink>
									    </div>
								    </div>
								    <NavigationMenuLink v-else asChild :active="route.path.startsWith(child.path)">
									    <NuxtLink :to="child.websiteURL || child.path">
										    <div class="text-sm leading-none font-medium">
											    {{ child.title }}
										    </div>
										    <p v-if="child.description" class="text-muted-foreground line-clamp-2 text-sm leading-snug">
											    {{ child.description }}
										    </p>
									    </NuxtLink>
								    </NavigationMenuLink>
							    </li>
						    </ul>
					    </NavigationMenuContent>
				    </template>
				    <NavigationMenuLink v-else asChild :class="navigationMenuTriggerStyle()" :active="link.path === '/' ? route.path === '/' : route.path.startsWith(link.path)">
					    <NuxtLink :to="link.path">{{link.title}}</NuxtLink>
				    </NavigationMenuLink>
			    </NavigationMenuItem>
			    <NavigationMenuItem v-for="extLink in externalLinks">
				    <NavigationMenuLink asChild :class="navigationMenuTriggerStyle()">
					    <a :href="extLink.url">{{extLink.title}} <ExternalLink class="size-4" /></a>
				    </NavigationMenuLink>
			    </NavigationMenuItem>
		    </NavigationMenuList>
	    </NavigationMenu> -->
        
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
