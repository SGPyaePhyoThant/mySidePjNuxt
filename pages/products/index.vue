<template>
        <!-- <h3>This is Product Page</h3> -->
    <div class="grid grid-cols-4 gap-5">
        <div v-for="product in products" :key="product.id">
            <!-- <NuxtLink :to="`/products/${product.id}`" >{{product.title}}</NuxtLink> -->
            <ProductCard :productDetail="product" />
        </div>

    </div>
</template>

<script setup>
definePageMeta({
        layout:'product'
    })
    // fetch products
   const { data : products } =  await useFetch('https://fakestoreapi.com/products')
//    custom header by useHead
useHead({
    title : 'Nuxt3 | Products',
    meta : [
        {
            name:'desc', content:'nuxt product index'
        }
    ]
})
</script>

<style  scoped>

</style>