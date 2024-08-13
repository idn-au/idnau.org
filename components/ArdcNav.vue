<script lang="ts" setup>
const { data } = await useAsyncData("ardc", () => fetchContentNavigation(queryContent("/research/ardc")));

const results = computed(() => data.value?.[0].children?.[0].children);
</script>

<template>
    <BNav class="ardc-nav">
        <template v-for="(link, index) of results">
            <template v-if="link.children">
                <BNavItem v-if="link.children.length === 1 && link.children[0]._path === link._path" :to="link._path">{{ link.title }}</BNavItem>
                <BNavItemDropdown v-else :id="`dropdown-${index}`" :text="link.title" right :teleport-disabled="true" teleport-to="body" strategy="fixed">
                    <BDropdownItem v-for="(child, subindex) of link.children" :to="child._path">{{ child.title }}</BDropdownItem>
                </BNavItemDropdown>
            </template>
            <BNavItem v-else :to="link._path">{{ link.title }}</BNavItem>
        </template>
    </BNav>
</template>

<style lang="scss" scoped>
.ardc-nav {
    overflow-x: auto;
    flex-wrap: nowrap;

    .nav-item {
        flex-shrink: 0;
    }
}
</style>