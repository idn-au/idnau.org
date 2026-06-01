<script setup lang="ts">
import type {ContentNavigationItem} from "@nuxt/content";
import { ArrowUp } from "@lucide/vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faFacebookF, faInstagram, faLinkedinIn, faYoutube, type IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {getNavigation} from "~/utils/helpers";
import {useIntersectionObserver, useWindowScroll} from "@vueuse/core";

const route = useRoute();

const { arrivedState } = useWindowScroll();
const target = useTemplateRef('target')
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(target, ([entry], observerElement) => {
	targetIsVisible.value = entry?.isIntersecting || false;
});

const socials: {
	title: string;
	icon: IconDefinition,
	url: string;
}[] = [
	{
		title: "Facebook",
		icon: faFacebookF,
		url: "",
	},
	{
		title: "Instagram",
		icon: faInstagram,
		url: "",
	},
	{
		title: "LinkedIn",
		icon: faLinkedinIn,
		url: "",
	},
	{
		title: "YouTube",
		icon: faYoutube,
		url: "",
	},
];

const { data: navigation } = await useAsyncData("navigation-merged", () => getNavigation(true), {
	default: () => [] as ContentNavigationItem[],
});

function scrollToTop() {
	window.scrollTo({top: 0, behavior: "smooth"});
}
</script>

<template>
	<div class="flex flex-col min-h-dvh">
		<MainNav :allowToggleNav="route.path === '/' && targetIsVisible" />

		<main class="grow mb-12">
			<div v-if="route.path === '/'" class="bg-[grey] h-dvh -mt-[128px] flex items-center justify-center" ref="target">
				video
			</div>
			<slot />
		</main>

		<div class="bg-isu-yellow/10 py-12 relative overflow-hidden isolate">
			<NuxtImg src="/img/symbol/UoM_Indig.Data.Com_Brand_Art_RGB_Symbol_Red.svg" class="absolute h-[1000%] -z-1 opacity-20 -right-[37%] top-[45%] rotate-3 -translate-y-1/2" />
			<div class="mx-auto max-w-[1200px] text-center">
				The Indigenous Data Network acknowledges the Aboriginal and Torres Strait Islander Traditional Custodians of the lands on which we work and live. We pay respect to their Elders, past and present, and the place of Indigenous Knowledge in the academy and beyond. We acknowledge and respect that Aboriginal and Torres Strait Islander people have always used resources from the land and waters for nourishment, medicine and healing.
			</div>
		</div>

		<div v-if="route.path === '/'" class="bg-secondary">
			<div class="mx-auto max-w-[1200px] py-12 px-5 text-center flex flex-col items-center gap-6">
				<div class="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-8 mx-auto">
					<img src="/img/idn-logo-250.png" alt="IDN Logo" class="h-[80px]" />
					<img src="/img/logo-um.svg" alt="UoM Logo" class="w-[80px]" />
					<img src="/img/ARDC-logo.png" alt="ARDC Logo" class="w-[200px] lg:hidden" />
					<img src="/img/NCRIS-PROVIDER.png" alt="NCRIS Logo" class="h-[100px] lg:hidden" />
					<img src="/img/ARDC-AUS-NCRIS-logo.png" alt="ARDC, Australian Government and NCRIS Logos" class="h-[100px] hidden lg:flex" />
				</div>

				<div class="text-sm"> 
					Improving Indigenous Research Capabilities is a co-investment partnership with the Australian Research Data Commons (ARDC) through the HASS and Indigenous Research Data Commons (DOI: <a href="https://doi.org/10.3565/pr3g-s109" target="_blank"> 10.3565/pr3g-s109 </a>). The ARDC is enabled by the Australian Government’s National Collaborative Research Infrastructure Strategy (NCRIS).
				</div>
			</div>
		</div>

		<footer class="dark bg-secondary text-secondary-foreground py-12">
			<div class="mx-auto max-w-[1200px] flex flex-col gap-12">
				<div class="grid grid-cols-2 gap-12">
					<div class="grid grid-cols-2 gap-6">
						<div v-for="link in navigation">
							<NuxtLink v-if="link.path.startsWith('/')" :to="link.path" class="text-isu-yellow! font-bold">{{link.title}}</NuxtLink>
							<a v-else :href="link.path" class="text-isu-yellow! font-bold">{{link.title === "NIDC" ? "The National Indigenous Data Catalogue" : link.title}}</a>
							<div class="flex flex-col">
								<template v-for="child in link.children?.filter(c => c.path !== link.path)">
									<NuxtLink v-if="child.path.startsWith('/')" :to="child.path" class="text-foreground!">{{child.title}}</NuxtLink>
									<a v-else :href="child.path" class="text-foreground!">{{child.title}}</a>
								</template>
							</div>
						</div>
					</div>
					<div class="">
						<NuxtLink to="/">
							<NuxtImg src="/img/UoM_Indig.Data.Com_Brand_Art_RGB_Logo_White.png" class="h-32" />
						</NuxtLink>
						<Button class="bg-isu-red !text-isu-red-foreground" asChild>
							<NuxtLink to="/news/newsletter">
								Subscribe to our newsletter
							</NuxtLink>
						</Button>
						<div class="flex flex-row items-center justify-around">
							<Button v-for="social in socials" size="icon" class="bg-isu-green !text-isu-green-foreground" :title="social.title" asChild>
								<a :href="social.url">
									<FontAwesomeIcon :icon="social.icon" />
								</a>
							</Button>
						</div>
						<a href="https://mspgh.unimelb.edu.au/centres-institutes/onemda/research-group/indigenous-studies-unit/indigenous-data-network">
							<NuxtImg src="/img/UoM_Indig_Studies_Unit_Brand_ART - (ICON LOCK UP) IDN - WHITE.png" class="h-32" />
						</a>
					</div>
				</div>
				<div class="text-center">&copy; Indigenous Data Network 2026</div>
			</div>
		</footer>
		<Button v-show="!arrivedState.top" size="icon-lg" class="rounded-full bg-isu-green !text-isu-green-foreground fixed bottom-4 right-4 z-50" title="Scroll to top" @click="scrollToTop">
			<ArrowUp class="size-5" />
		</Button>
  	</div>
</template>