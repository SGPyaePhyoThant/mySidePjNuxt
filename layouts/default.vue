<template>
    <div>
        <header  class="shadow-sm">
            <nav class="container mx-auto p-4 flex justify-between">
                <ul class="flex gap-4">
                    <li><NuxtLink to="/" class="font-bold">MainScreen</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot/>
        </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>
.router-link-exact-active {
    color: rgb(9, 247, 120);
}
</style>