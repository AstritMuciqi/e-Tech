<template>
  <v-navigation-drawer style="padding-top:10px;z-index: 1;"  
       fixed
       expand-on-hover
      permanent
      right
    >

      <template v-slot:prepend>
        <v-icon style="color:black;">mdi-arrow-collapse-left</v-icon>
        <v-list-item>
          <v-list-item-avatar>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlAFutru5z7bS9_kmLUz_CmfJynP5Ipcf_A&usqp=CAU">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-if="user.data" style="text-align: start; margin-left:25px;">{{user.data.email}}</v-list-item-title>
            <v-list-item-subtitle style="text-align: start; margin-left:25px;">Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="text-align: start; margin-left:25px;"><router-link style="text-decoration:none; color:black" :to="item.link">{{ item.title }}</router-link> </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <br>
        <button style="display: flex; margin-left: 20px;"><v-icon>mdi-logout</v-icon><v-list-item-subtitle @click="handleLogout" style="text-align: start; color: black; margin-left:25px;"><span class="span" style="display: flex; margin-left: 30px; font-size: 15px;">Logout</span></v-list-item-subtitle></button>
      </template>

    </v-navigation-drawer>
</template>

<style>
.span:hover{
color: red;
}
</style>


<script>
import { mapGetters } from 'vuex'
import {signOut, getAuth} from '@firebase/auth'
export default {
  name: 'Rightbar',
  data(){
     return{
       items: [
          { title: 'Home', icon: 'mdi-home-city', link: "/" },
          { title: 'My Account', icon: 'mdi-account',link: "/" },
          { title: 'Users', icon: 'mdi-account-group-outline',link: "/" }
      ],              
    }     
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  methods: {
            handleLogout() {
                signOut(getAuth());    
            }
        },
}
    
    

</script>