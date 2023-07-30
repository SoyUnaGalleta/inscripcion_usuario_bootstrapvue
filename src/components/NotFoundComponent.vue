<template>
    <div id="NotFoundComponent">
        <div>
            <h1>Not Found</h1>
            <p>Página no encontrada</p>
            <router-link to="/">Volver</router-link> 
        </div>
    </div>
</template>

<script>
export default {
    name:'NotFoundComponent'
}
</script>

<style scoped>
#NotFoundComponent {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
    width: 100%;
}
</style>