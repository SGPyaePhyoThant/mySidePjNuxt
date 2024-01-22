 <template>
    <div class="card text-center hover:border-dotted">
        <img :src="productDetail.image" alt="product thumb" class="thumb">
        <p class="font-bold text-blue-400 truncate hover:text-blue-600">{{ productDetail.title }}</p>
        <NuxtLink :to="`/products/${productDetail.id}`">
            <p class="btn my-4">More Detail</p>
        </NuxtLink>
    </div>
 </template>
 
 <script setup>
   const  { productDetail } = defineProps(['productDetail'])
 </script>
 
 <style scoped>
 .thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
 }
 </style>