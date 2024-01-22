 <template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
          <div class="p-7">
            <img :src="productByID.image" alt="detail img" class="mx-auto my-7">
          </div>
          <div class="p-7">
            <h2 class="text-4xl my-7">{{productByID.title}}</h2>
            <p>{{productByID.price}}</p>
          </div>
        </div>
    </div>
 </template>
 
 <script setup>
  const { productByID } = defineProps(['productByID']);
 </script>
 
 <style scoped>
 </style>