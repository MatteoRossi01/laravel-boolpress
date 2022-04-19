<template>
    <div class="app">

        <Header/>
        <Main/>
        <Footer/>

    </div>
</template>


<script>
import Header from '../components/MyHeader.vue';
import Main from '../components/MyMain.vue';
import Footer from '../components/MyFooter.vue';

export default{
    name: 'App',
    components: {
    Header,
    Main,
    Footer
  },
}
</script>

<style lang="scss" scoped>

</style>


