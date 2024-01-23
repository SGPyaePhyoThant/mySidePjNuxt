 <template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
          <div class="p-7">
            <img :src="productByID.image" alt="detail img" class="mx-auto my-7">
          </div>
          <div class="p-7">
            <h2 class="text-4xl my-7">{{productByID.title}}</h2>
            <p>{{productByID.price}}</p>
            <button class="btn flex">
              <i class="material-icons mr-2">add_shopping_cart</i>
              <span>Add to cart</span>
            </button>
          </div>
        </div>
    </div>
 </template>
 
 <script setup>
  const { productByID } = defineProps(['productByID']);
 </script>
 
 <style scoped>
 </style>