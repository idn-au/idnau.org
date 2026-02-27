<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const route = useRoute();

const { data: navigation } = await useAsyncData(
  "navigation",
  () => queryCollectionNavigation("content", ["description", "websiteURL"]),
  {
    default: () => [] as ContentNavigationItem[],
  }
);
</script>

<template>
	<div class="flex flex-col min-h-dvh">
		<MainNav :navigation="navigation" class="relative z-10" />
			<main :class="`grow ${(route.path === '/resources/map') || (route.path === '/') ? '' : 'mb-12'}`">
  
				<div :class="route.path === '/' ? '' : 'mx-auto max-w-[1200px] px-5 prose dark:prose-invert'">
					<Breadcrumbs v-if="route.path !== '/'" :navigation="navigation" />
					<slot />
				</div>

				<SearchPage v-if="route.path === '/resources/map'" />
			</main>

		<footer class="bg-secondary">
			<div class="mx-auto max-w-[1200px] py-12 px-5 text-center flex flex-col items-center gap-6">
				<div class="text-sm">
					The Indigenous Data Network acknowledges the Aboriginal and Torres Strait Islander Traditional Custodians of the lands on which we work and live. We pay respect to their Elders, past and present, and the place of Indigenous Knowledge in the academy and beyond. We acknowledge and respect that Aboriginal and Torres Strait Islander people have always used resources from the land and waters for nourishment, medicine and healing.
				</div>

				<hr class="w-3/4 mx-auto" />

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

				<div>&copy; Indigenous Data Network 2026</div>
			</div>
		</footer>
  	</div>
</template>