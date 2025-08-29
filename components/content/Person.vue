<template>
    <Card imgPosition="right" class="mb-6">
        <template #header>
            <slot name="name" mdc-unwrap="p" />
            <CardDescription><slot name="position" mdc-unwrap="p" /></CardDescription>
        </template>
        <slot />
        <template #img>
            <slot name="img" mdc-unwrap="p" />
        </template>
    </Card>
</template>
