<template>
    <header class="d-flex align-items-center justify-content-between">
        
        <div class="my_logo ms-5">
            <a class="fs-2 nav-link" href="#">BoolPress</a>
        </div>

        <div class="my_link me-5 d-flex justify-content-around">
            <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
            <router-link :to="{name: 'about'}" class="nav-link">Chi Siamo</router-link>
            <router-link :to="{name: 'contact'}" class="nav-link">Contatti</router-link>
            <router-link :to="{name: 'posts'}" class="nav-link">Visualizza i Post</router-link>
        </div>

    </header>
</template>


<script>

export default{
    name: 'Header',
}
</script>

<style lang="scss">

</style>