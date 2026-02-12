<script lang="ts" setup>
import { ChevronDown, ChevronUp, Sun, Moon, SunMoon, Menu, ExternalLink, ChevronRight } from "lucide-vue-next";
import { NavigationMenuSub } from "reka-ui";
import {navigationMenuTriggerStyle} from "~/components/ui/navigation-menu";

const router = useRouter();
const route = useRoute();
const colorMode = useColorMode();

const externalLinks: {title: string; url: string}[] = [
// 	{
// 		title: "IDN",
// 		url: "https://mspgh.unimelb.edu.au/centres-institutes/onemda/research-group/indigenous-studies-unit/indigenous-data-network",
// 	}
    {
        title: "The National Indigenous Data Catalogue",
        url: "https://data.idnau.org/catalogs"
    }
 ];

const showSidenav = ref(false);

const { data: navigation } = await useAsyncData("navigation", () => queryCollectionNavigation("content", ["description"]));

router.beforeEach((from, to) => {
    showSidenav.value = false;
});
</script>

<template>
    <header class="top-nav sticky top-0 bg-background/60 grid grid-cols-3 md:flex md:flex-row md:justify-between items-center p-2 z-50 gap-2 backdrop-blur-sm">
        <!-- mobile nav -->
        <Sheet v-model:open="showSidenav">
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" class="md:hidden">
                    <Menu class="size-4" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" class="p-2" hideClose>
                <SheetHeader class="grid grid-cols-3 gap-2 mb-4">
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                            <Menu class="size-4" />
                        </Button>
                    </SheetClose>
                    <NuxtLink to="/">
                        <div class="flex flex-row gap-2 items-center justify-center">
                            <NuxtImg v-show="colorMode.unknown || colorMode.value === 'light'" src="/apple-touch-icon.png" alt="IDN Logo" class="h-[40px]" />
                            <NuxtImg v-show="!colorMode.unknown && colorMode.value === 'dark'" src="/apple-touch-icon.png" alt="IDN Logo" class="h-[40px]" />
                            <span class="text-xl">IDN</span>
                        </div>
                    </NuxtLink>
                    <div></div>
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
                                        <NuxtLink :to="link.path" class="!font-bold">
                                            {{ link.children.find(c => c.path === link.path)?.title }} Home
                                        </NuxtLink>
                                    </Button>
                                    <Separator />
                                </template>
                                <Button v-for="child in link.children" variant="ghost" :class="`rounded-none border-l-2 border-l-transparent ${route.path.startsWith(child.path) ? 'border-l-isu-red' : ''}`" asChild>
                                    <NuxtLink v-if="child.path !== link.path" :to="child.path">{{ child.title }}</NuxtLink>
                                </Button>
                            </CollapsibleContent>
                        </Collapsible>
                        <Button v-else variant="ghost" :class="`rounded-none border-l-2 border-l-transparent ${route.path.startsWith(link.path) ? 'border-l-isu-red' : ''}`" asChild>
                            <NuxtLink :to="link.path">{{ link.title }}</NuxtLink>
                        </Button>
                    </template>
                    <Button v-for="extLink in externalLinks" variant="ghost" asChild>
                        <a :href="extLink.url" target="_blank" rel="noopener noreferrer">{{ extLink.title }} <ExternalLink class="size-4" /></a>
                    </Button>
                </nav>
            </SheetContent>
        </Sheet>
        <NuxtLink to="/">
            <div class="flex flex-row gap-2 items-center justify-center">
                <NuxtImg v-show="colorMode.unknown || colorMode.value === 'light'" src="/apple-touch-icon.png" alt="IDN Logo" class="h-[40px] md:h-[54px]" />
                <NuxtImg v-show="!colorMode.unknown && colorMode.value === 'dark'" src="/apple-touch-icon.png" alt="IDN Logo" class="h-[40px] md:h-[54px]" />
                <span class="hidden md:inline text-xl">The Indigenous Data Commons</span>
                <span class="md:hidden text-xl">IDN</span>
            </div>
        </NuxtLink>
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
	    <NavigationMenu>
		    <NavigationMenuList>
			    <NavigationMenuItem v-for="link of navigation">
				    <template v-if="!!link.children && link.children.length > 1">
					    <NavigationMenuTrigger :class="route.path.startsWith(link.path) ? 'bg-accent/50 text-accent-foreground' : ''">{{link.title}}</NavigationMenuTrigger>
					    <NavigationMenuContent>
						    <ul class="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							    <li v-for="child in link.children" >
<!--								    <HoverCard v-if="!!child.children && child.children.length > 1" :openDelay="300">-->
<!--									    <HoverCardTrigger asChild tabindex="0">-->
<!--										    <NavigationMenuLink class="flex flex-row items-center justify-between cursor-default">{{child.title}} <ChevronRight class="size-4" /></NavigationMenuLink>-->
<!--									    </HoverCardTrigger>-->
<!--									    <HoverCardContent side="right" align="start">-->
<!--										    <NavigationMenuLink v-for="grandchild in child.children" asChild>-->
<!--											    <NuxtLink :to="grandchild.path">-->
<!--												    <div class="text-sm leading-none font-medium">-->
<!--													    {{ grandchild.title }}-->
<!--												    </div>-->
<!--												    <p v-if="child.description" class="text-muted-foreground line-clamp-2 text-sm leading-snug">-->
<!--													    {{ grandchild.description }}-->
<!--												    </p>-->
<!--											    </NuxtLink>-->
<!--										    </NavigationMenuLink>-->
<!--									    </HoverCardContent>-->
<!--								    </HoverCard>-->
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
<!--								    <NavigationMenuSub v-if="!!child.children && child.children.length > 1">-->
<!--									    <NavigationMenuList>-->
<!--										    <NavigationMenuItem>-->
<!--											    <NavigationMenuTrigger>{{child.title}}</NavigationMenuTrigger>-->
<!--											    <NavigationMenuContent>-->
<!--												    <NavigationMenuLink v-for="grandchild in child.children" asChild>-->
<!--													    <NuxtLink :to="grandchild.path">-->
<!--	                                                        <div class="text-sm leading-none font-medium">-->
<!--	                                                            {{ grandchild.title }}-->
<!--	                                                        </div>-->
<!--	                                                        <p v-if="child.description" class="text-muted-foreground line-clamp-2 text-sm leading-snug">-->
<!--	                                                            {{ grandchild.description }}-->
<!--	                                                        </p>-->
<!--	                                                    </NuxtLink>-->
<!--												    </NavigationMenuLink>-->
<!--											    </NavigationMenuContent>-->
<!--										    </NavigationMenuItem>-->
<!--									    </NavigationMenuList>-->
<!--								    </NavigationMenuSub>-->
								    <NavigationMenuLink v-else asChild :active="route.path.startsWith(child.path)">
									    <NuxtLink :to="child.path">
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
	    </NavigationMenu>
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
