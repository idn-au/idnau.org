<script lang="ts" setup>
const route = useRoute();
</script>

<template>
    <BNavbar toggleable="lg" v-b-color-mode="'light'" class="bg-light">
        <BNavbarToggle target="nav-collapse" />
        <BNavbarBrand to="/">
            <BImg src="/public/img/idn-logo-250.png" alt="IDN logo" :style="{height: '40px'}" />
            <span class="nav-title d-none d-sm-inline">The Indigenous Data Network</span>
            <span class="nav-title d-sm-none">IDN</span>
        </BNavbarBrand>
        <span class="d-lg-none">
            <NavSearch />
        </span>
        <BCollapse id="nav-collapse" is-nav>
            <BNavbarNav class="ms-auto mb-2 mb-lg-0">
                <ContentNavigation v-slot="{ navigation }">
                    <template v-for="(link, index) of navigation">
                        <template v-if="link.children">
                            <BNavItem
                                v-if="link.children.length === 1 && link.children[0]._path === link._path"
                                :to="link._path"
                                :class="route.path.startsWith(link._path) ? 'active' : ''"
                            >{{ link.title }}</BNavItem>
                            <BNavItemDropdown
                                v-else
                                :id="`dropdown-${index}`"
                                :text="link.title"
                                :teleport-disabled="true"
                                teleport-to="body"
                                :class="route.path.startsWith(link._path) ? 'active' : ''"
                            >
                                <BDropdownItem
                                    v-for="(child, subindex) of link.children"
                                    :to="child._path"
                                    :active="child._path === link._path ? (route.path === child._path) : route.path.startsWith(child._path)"
                                >{{ child.title }}</BDropdownItem>
                            </BNavItemDropdown>
                        </template>
                        <BNavItem
                            v-else
                            :to="link._path"
                            :class="link._path === '/' ? (route.path === link._path ? 'active' : '') : route.path.startsWith(link._path) ? 'active' : ''"
                        >{{ link.title }}</BNavItem>
                    </template>
                </ContentNavigation>
            </BNavbarNav>
            <span class="d-none d-lg-inline">
                <NavSearch />
            </span>
        </BCollapse>
    </BNavbar>
</template>

<style lang="scss" scoped>
@import "~/assets/sass/_variables.scss";

$hoverColor: #efefef;

.nav-item {
    border-bottom: 2px solid transparent;
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
    
    &:hover {
        background-color: $hoverColor;
    }

    &.active {
        color: $primary;
        border-bottom-color: $primary;
    }
}

:deep(.dropdown-item) {
    &:hover {
        background-color: $hoverColor;
    }
    
    &.active {
        color: $primary;
        background-color: unset;
    }
}

:deep(.dropdown-menu) {
    background-color: #f8f9fa;
}

:deep(.dropdown-toggle) {
    --bs-btn-active-color: black;
}

.navbar {
    .navbar-toggler {
        padding: 4px 6px;
        border: none;
    }
}

.nav-title {
    margin-left: 6px;
    // font-size: 0.9em;

    // @media (min-width: 576px) {
    //     font-size: 0.9em;
    // }

    // @media (min-width: 768px) {
    //     font-size: 1em;
    // }

    // @media (min-width: 992px) {
    //     font-size: 1em;
    // }
}
</style>