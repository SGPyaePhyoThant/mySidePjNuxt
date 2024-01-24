<template>
    <div>
        <h3>This is about page under pages____________________.</h3>
        <p>{{data}}</p>
    </div>
</template>

<script setup>
    const {data} = await useFetch('/api/ppt?name=specialPromotion',{
        method : 'post',
        body   : {fes:'Christmas',percent : 5}
    })
</script>

<style  scoped>

</style>