<template>

    <div style="color:white;">
        <div style="background-color:black; display:flex; margin-bottom:0px; height: 100px;" class="container-fluid">
            <a class="navbar-brand">
            <router-link to="/"><img style="width:90px;height:90px;" v-bind:src="require('../assets/icon.png')" /></router-link>
            </a>
            <form style="align-items:center; margin-left:280px;" class="d-flex">
            <input style="width:500px" class="form-control me-2" type="search" placeholder="Kërko" aria-label="Search">
          <v-btn style="height:38px; margin-left:-60px;background-color:white" type="submit"><v-icon>mdi-magnify</v-icon></v-btn>
            </form>
            <form style="align-items:center; margin-left:140px;" class="d-flex">
                 <router-link to="/login"><button v-if="!user.loggedIn" style="height:40px;width:80px; " class="btn btn-outline-primary" type="submit">Login</button></router-link>
            <button v-if="user.loggedIn" style="height:40px;width:80px;" class="btn btn-outline-danger" type="submit" @click="handleLogout">Logout</button>
            <CartHeader />

            </form>


        </div>
       </div>

</template>
<script>
    import CartHeader from "./CartHeader.vue";
    import { getAuth, signOut } from '@firebase/auth'
import { mapGetters } from 'vuex';

    export default {
        name: 'Navbar',
        components:{
            CartHeader
        },
         methods: {
            handleLogout() {
                signOut(getAuth());    
            }
        },
        computed: {
            ...mapGetters({
                user: 'user',
            })
        }
        
}
    

</script>