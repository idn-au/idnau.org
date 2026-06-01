<script lang="ts" setup>
import { ChevronDown, ChevronUp, Sun, Moon, SunMoon, Menu, ListIndentDecrease } from "@lucide/vue";
import type { ContentNavigationItem } from "@nuxt/content";
import { navigationMenuTriggerStyle } from "~/components/ui/navigation-menu";
import { cn } from "~/lib/utils";
import {getNavigation} from "~/utils/helpers";

const router = useRouter();
const route = useRoute();
// const colorMode = useColorMode();

const props = defineProps<{
	allowToggleNav?: boolean;
}>();

const { data: navigation } = await useAsyncData("navigation-merged", () => getNavigation(true), {
	default: () => [] as ContentNavigationItem[],
});

const linkClasses = "bg-transparent hover:bg-black/10 transition-colors";

const showSidenav = ref(false);
const expandNav = ref(route.path !== "/");
// const expandNav = ref(true);

router.beforeEach((from, to) => {
    showSidenav.value = false;
	expandNav.value = false;
});
</script>

<template>
    <header :class="`top-nav sticky top-0 flex flex-row items-center p-4 gap-4 z-50 transition-colors ${props.allowToggleNav ? 'bg-transparent' : 'bg-background'}`">
	    <NuxtLink to="/" class="mr-auto">
			<NuxtImg src="/img/idc-logo.png" class="h-24" />
	    </NuxtLink>
	    <div :class="props.allowToggleNav ? `transition-opacity ${expandNav ? '' : 'opacity-0'}` : ''">
		    <NavigationMenu>
			    <NavigationMenuList>
				    <NavigationMenuItem v-for="link of navigation">
					    <template v-if="!!link.children && link.children.length > 1">
						    <NavigationMenuTrigger :class="cn(linkClasses, 'data-[state=open]:hover:bg-black/20', route.path.startsWith(link.path) ? '!text-isu-red' : '')">{{link.title}}</NavigationMenuTrigger>
						    <NavigationMenuContent>
							    <ul class="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
								    <li v-for="child in link.children">
									    <NavigationMenuLink :active="route.path === child.path" class="data-active:!text-isu-red" asChild>
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
					    <NavigationMenuLink v-else :active="route.path === link.path" :class="cn(navigationMenuTriggerStyle(), 'bg-transparent hover:bg-black/10 transition-colors data-active:!text-isu-red')" asChild>
						    <NuxtLink :to="link.path">{{link.title}}</NuxtLink>
					    </NavigationMenuLink>
				    </NavigationMenuItem>
			    </NavigationMenuList>
		    </NavigationMenu>
	    </div>
        <div class="flex flex-row justify-end items-center gap-2">
	        <Button v-if="props.allowToggleNav" size="icon" variant="ghost" @click="expandNav = !expandNav">
		        <ListIndentDecrease :class="`size-4 transition-transform ${expandNav ? 'rotate-y-180' : ''}`" />
	        </Button>
	        <SearchCommand icon />
<!--	        <Button variant="ghost" size="icon" @click="!colorMode.unknown ? colorMode.value === 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark' : undefined">-->
<!--		        <SunMoon v-show="colorMode.unknown" />-->
<!--		        <Sun v-show="colorMode.value === 'dark'" class="size-4" />-->
<!--		        <Moon v-show="colorMode.value === 'light'" class="size-4" />-->
<!--	        </Button>-->
        </div>
    </header>
</template>
