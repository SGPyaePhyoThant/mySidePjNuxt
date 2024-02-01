 <template>
    <div class="card text-center hover:border-dotted">
        <p class="font-bold text-green-400 truncate hover:text-green-600">Today, 1 USD is equal to {{ mmkData.MMK.value }} Kyat</p>
        <!-- <NuxtLink :to="`/products/${productDetail.id}`">
            <p class="btn my-4">More Detail</p>
        </NuxtLink> -->
    </div>
 </template>
 
 <script setup>
   const  { mmkData } = defineProps(['mmkData'])
 </script>
 
 <style scoped>
 .thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
 }
 </style>