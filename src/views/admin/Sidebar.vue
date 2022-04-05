<template>
  <v-navigation-drawer style="position:fixed; margin-top:95px;background-color:black;  z-index: 1;"
        permanent
        expand-on-hover
  >
  <v-icon style="color:white; padding-top:10px" >mdi-arrow-collapse-right</v-icon>
  <v-list>

  <div class="sidebar">
      <nav>
        <ul>
          <li> <v-icon color="white" large>mdi-alpha-p-box</v-icon><router-link style="font-size:18px; color:white" to="/admin/products"> Products <v-icon style="margin-left:70px" color="white" large>mdi-arrow-right-drop-circle</v-icon></router-link></li>
          <li> <v-icon color="white" large>mdi-alpha-b-box</v-icon><router-link style="font-size:18px; color:white" to="/admin/brands"> Brands <v-icon style="margin-left:83px" color="white" large>mdi-arrow-right-drop-circle</v-icon></router-link></li>
          <li> <v-icon color="white" large>mdi-alpha-c-box</v-icon><router-link style="font-size:18px; color:white" to="/admin/categories"> Categories <v-icon style="margin-left:52px" color="white" large>mdi-arrow-right-drop-circle</v-icon></router-link></li>
          <hr style="border:2px solid gray">
          <li style="border:1px solid black"> <v-icon color="white" large>mdi-message</v-icon><router-link style="font-size:18px; color:white" to="/admin/contacts"> Contact Form <v-icon style="margin-left:28px" color="white" large>mdi-arrow-right-drop-circle</v-icon></router-link></li>
          <hr style="border:2px solid gray">
          <li style="border:1px solid black"> <v-icon color="white" large>mdi-account-multiple</v-icon><router-link style="font-size:18px; color:white" to="/admin/users"> Users <v-icon style="margin-left:90px" color="white" large>mdi-arrow-right-drop-circle</v-icon></router-link></li>
          <hr style="border:2px solid gray">
          <li style="border:1px solid black"> <v-icon color="white" large>mdi-alpha-o-circle</v-icon><router-link style="font-size:18px; color:white" to="/admin/orders"> Orders <v-icon style="margin-left:82px" color="white" large>mdi-arrow-right-drop-circle</v-icon></router-link></li>

        </ul>
      </nav>
  </div>
  </v-list>
  </v-navigation-drawer>
</template>

<style>
  .sidebar{
    background-color: black;
    position: fixed;
    width: 245px;
  }
  .sidebar ul{
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .sidebar ul li{
    text-align: start;
    list-style: none;
    padding: 5px;
    border-top: 1px solid gray;
  }
  .sidebar ul li a{
    color: white;
    text-decoration: none;
  }
</style>

<script>
    export default{
        name:"Sidebar"
    };

</script>