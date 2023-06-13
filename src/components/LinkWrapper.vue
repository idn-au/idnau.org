<script setup>
import warnUrls from "@/utils/warnUrls";

function warnIfNeeded(e) {
    const href = e.target.closest("a").getAttribute("href");
    const link = warnUrls.find(link => link.url == href);
    if (!!link){
        if (!confirm(`${link.message}\n\nAre you sure you want to proceed?`)) {
            e.preventDefault();
            return false;
        }
    }
}
</script>

<template>
    <a @click.stop="warnIfNeeded($event)">
        <slot></slot>
    </a>
</template>

<style lang="scss" scoped>

</style>