<template>
    <div>
        <Head>
            <Title>Nuxt3 PPT | {{productLink.title}}</Title>
            <Meta name="description" :content="productLink.description"></Meta>
        </Head>
        <ProductDetails :productByID = "productLink"/>
    </div>
</template>

<script setup>

const {productId}          = useRoute().params
console.log('_____id____',productId)
const uri                  = 'https://fakestoreapi.com/products/' + productId
const {data : productLink} = await useFetch(uri)
definePageMeta({
    layout:'product'
})
// custom error handling
// console.log('__productLind__',productLink)
    if(!productLink.value){
        throw createError({statusCode: 404 , statusMessage:'求められるページが見つかりませんので、もう一度お願い！', fatal:true,})
    }
</script>

<style scoped>
    .tColor {
    color: rgb(255, 174, 0);
    } 
</style>