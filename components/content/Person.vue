<template>
    <Card imgPosition="right" class="mb-6">
        <template #header>
            <slot name="name" mdc-unwrap="p" />
            <CardDescription v-if="$slots.position"><slot name="position" mdc-unwrap="p" /></CardDescription>
        </template>
        <slot />
        <template v-if="$slots.img" #img>
            <slot name="img" mdc-unwrap="p" />
        </template>
    </Card>
</template>
