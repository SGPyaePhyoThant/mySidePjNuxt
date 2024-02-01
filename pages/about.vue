<template>
    <div>
        <!-- <p>{{data}}</p> -->
        <TodayMmk :mmkData="data"/>
    </div>
</template>

<script setup>
    const {data} = await useFetch(`/api/currency/MMK`)
</script>

<style  scoped>

</style>