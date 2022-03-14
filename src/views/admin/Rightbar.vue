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
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title style="text-align: start; margin-left:25px;">Jane Smith</v-list-item-title>
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
            <v-list-item-title style="text-align: start; margin-left:25px;">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

    </v-navigation-drawer>
</template>


<script>
export default {
  name: 'Rightbar',
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