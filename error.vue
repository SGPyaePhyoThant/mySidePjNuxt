<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl text-clrDef">{{error.statusCode}}</p>
        <p class="mt-7 text-bold text-4xl text-clrDef">{{error.message}}</p>
        <button class="btn my-7" @click="handleClearErr">製品ページへ帰る！</button>
    </div>
</template>

<script setup>
    defineProps(['error'])
    const handleClearErr = () => {
        clearError({redirect:'/products'})
    }
</script>

<style scoped>
.text-clrDef {
    color: rgb(255, 0, 0);
}
</style>