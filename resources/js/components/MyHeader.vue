<template>
    <header class="d-flex align-items-center justify-content-between">
        
        <div class="my_logo ms-5">
            <a class="fs-2 nav-link" href="#">BoolPress</a>
        </div>

        <div class="box-link">
            <div v-for="menuItem in menuItems" :key="menuItem.routeName" class="my_link d-flex justify-content-around">
                <router-link class="nav-link" :to="{name: menuItem.routeName}">{{menuItem.label}}</router-link>
            </div>  
        </div>
        

    </header>
</template>


<script>

export default{
    name: 'Header',

    data() {
        return {
            menuItems: [
                {
                    routeName: 'home',
                    label: 'Home'
                },
                {
                    routeName: 'about',
                    label: 'Chi Siamo'
                },
                {
                    routeName: 'contact',
                    label: 'Contatti'
                },
                {
                    routeName: 'blog',
                    label: 'Blog'
                },
            ]
        }
    }
}
</script>

<style lang="scss">

</style>