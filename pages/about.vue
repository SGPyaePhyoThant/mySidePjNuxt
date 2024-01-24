<template>
    <div>
        <h3>This is about page under pages____________________.</h3>
        <p>{{data}}</p>
    </div>
</template>

<script setup>
    const {data} = await useFetch('/api/ppt')
</script>

<style  scoped>

</style>