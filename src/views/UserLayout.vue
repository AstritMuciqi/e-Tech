<template>
    <v-main>
        <Navbar />
        <router-view />
        <Footer />
    </v-main>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";


export default {
    data() {
        
    },
    components:{
        Navbar,
        Footer
    }
}
</script>