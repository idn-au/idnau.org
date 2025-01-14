<template>
    <Card imgPosition="right" class="mb-6">
        <template #header>
            <ContentSlot :use="$slots.name" unwrap="p" />
            <ShadCardDescription><ContentSlot :use="$slots.position" unwrap="p" /></ShadCardDescription>
        </template>
        <slot />
        <template #img>
            <ContentSlot :use="$slots.img" unwrap="p" />
        </template>
    </Card>
</template>
