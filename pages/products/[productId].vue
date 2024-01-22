<template>
    <div>
        <ProductDetails :productByID = "productLink"/>
    </div>
</template>

<script setup>

const {productId}          = useRoute().params
const uri                  = 'https://fakestoreapi.com/products/' + productId
const {data : productLink} = await useFetch(uri)
definePageMeta({
    layout:'product'
})
</script>

<style scoped>
    .tColor {
    color: rgb(255, 174, 0);
    } 
</style>