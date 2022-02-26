<template>

    <div>
        <div style="background-color:black; display:flex;" class="container-fluid">
            <a class="navbar-brand">
            <img style="width:100px;height:100px;" v-bind:src="require('../assets/icon.png')" />
            </a>
            <form style="align-items:center; margin-left:280px;" class="d-flex">
            <input style="width:400px" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button style="height:40px" class="btn btn-outline-warning" type="submit">Search</button>
            </form>
            <form style="align-items:center; margin-left:170px;" class="d-flex">
            <button style="height:40px;width:80px; " class="btn btn-outline-primary" type="submit"><fa :icon="['fas','user']"/></button>
            <button style="height:40px;width:80px; margin-left:10px;" class="btn btn-outline-warning" type="submit"><fa :icon="['fas','cart-shopping']"/></button>
            </form>
        </div>
            <div style="background-color:white;" id="nav">
                <router-link style="font-size:24px;margin:20px;" to="/">Home</router-link> 
                <router-link style="font-size:24px;margin:20px;" to="/about">About</router-link> 
                <router-link style="font-size:24px;margin:20px;" to="/register">Register</router-link> 
                <router-link style="font-size:24px;margin:20px;" to="/listing">Listing</router-link>
            </div>
            <hr>
       </div>

</template>
<script>
    export default{
        name: 'Navbar'
    }

</script>