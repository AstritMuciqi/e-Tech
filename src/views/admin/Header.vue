<template>
  <v-toolbar dark style="height:16vh;color:white; background-color:black;">
    <v-toolbar-title style="margin-top:auto;" class="white--text">
      <router-link style="text-decoration:none; display:flex;padding-top:33px;" to="/"
        ><p
          style="font-family: Lucida Handwriting, cursive;color:red; margin-right:5px; font-size: 30px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 20px; text-decoration:none"
        >
          e
        </p>
        <p
          style="font-family: Lucida Handwriting, cursive; font-size: 26px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 20px; color:white;text-decoration:none"
        >
          TECH
        </p>
      </router-link>
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
  name: "Header",
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" }
      ]
    };
  }
};
</script>
