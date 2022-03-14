<template>
    <v-toolbar dark style="height:20vh;color:white; background-color:black;">
      <v-toolbar-title class="white--text">
        <div style="margin-top:30px">
          <router-link to="/"><img class="logo" v-bind:src="require('../../assets/icon.png')" width="100px" height="100px"></router-link>
        </div>
      </v-toolbar-title>




      <v-layout style="max-width: 40vw; min-width:1vw; margin:30px 0 0 275px">
        <v-text-field
          solo
          placeholder="Search..."
          append-icon="mdi-magnify"
          background-color="#202d3f"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>

      
    </v-toolbar>
</template>



<script>
export default {
  name: 'Header',
  data(){
     return{
       items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
      ],              
    }     
  }
}
    
    

</script>