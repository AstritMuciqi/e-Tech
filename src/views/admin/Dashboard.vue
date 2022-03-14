<template >
    <div style="background-color:white">
      <Header />
      <Sidebar />
      <Rightbar />
      <router-view></router-view>
    </div>
        
</template>

<script>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import Rightbar from './Rightbar.vue';



export default {
  name:"Dashboard",
  components:{
      Header,
      Sidebar,
      Rightbar

  },
  
};
</script>
