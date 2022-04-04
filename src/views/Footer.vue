<template>
    <footer class="footer-distributed">
        <div style="height:100%;width:36%;" class="fotter-l">
            <router-link to="/"><img style="width:80px;height:80px;" v-bind:src="require('../assets/icon3.jpg')" /></router-link>
            <br>
            <p class="footer-links">
                <router-link to="/">Home</router-link> <br>
            </p>
            <p v-for="category in categoryList" :key="category._id" class="footer-links">
                <a >{{category.name}}</a>
            </p>
            <p v-show="this.$store.state.user.claims && this.$store.state.user.claims.admin" class="footer-links">
            <router-link to="./admin/contacts"><fa :icon="['fas','dashboard']"/>  Admin Panel</router-link> 
            </p>
            <p class="footer-company-name">
                Copyright © 2022 <strong>e Tech</strong>
                All rights reserved
            </p>
        </div>
       
        <div class="footer-right">
            <p class="footer-company-about" style="max-width:220px; text-align:justify">
                <span>About the company</span>
                <strong>e Tech</strong> is a Tech Shop company where you can find
                best technology products...<router-link style="font-weight:bold;color:blue" to="about">Read More</router-link>
            </p> <br>
                        <p class="footer-links" style="margin-left:0px">
                            <router-link to="/useability">Kushtet e Perdorimit</router-link>
                        </p>
                        <p class="footer-links" style="margin-left:0px">
                            <router-link to="/contact">Contact Form</router-link>            
                            </p>
            <div class="footer-icons">
                <a v-bind:href="'https://www.facebook.com/'"><fa :icon="['fab','facebook']"/></a>
                <a v-bind:href="'https://www.instagram.com/'" ><fa :icon="['fab','instagram']"/></a>
                <a v-bind:href="'https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo'"><fa :icon="['fab','linkedin']"/></a>
                <a v-bind:href="'https://twitter.com/'" ><fa :icon="['fab','twitter']"/></a>
            </div>
        </div>
         <div  class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                <p>
                    <span>Prishtinë,</span>
                    Kosovë
                </p>
            </div>
            <div>
                <i class="fa fa-phone"></i>
                <p>+383 49 000 000</p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="#">e@tech.com</a></p>
            </div>
        </div>
    </footer>

</template>
<script>
import { mapGetters } from "vuex";
import apiRequest from "../utility/apiRequest";
export default{
    name: 'Footer',
    created() {
    this.fetchCategories();
     },
    methods: {
        async fetchCategories(){
            const result = await apiRequest.getCategoryList();
            this.$store.dispatch("fetchCategories", result);                
        },
    },
    computed: {
      ...mapGetters({
        categoryList: "categoryList",
        user: "user",
        claims: "claims",
      }),
  }
}
</script>

<style>
    /* Footer */
footer {
    bottom: 0;
    display: flex;
}
.footer-distributed {
    display:flex;
    flex-direction:row;
    background-color: #2a2f2d;
    box-sizing: border-box;
    width: 100%;
    height:100%;
    text-align: left;
    font: bold 16px sans-serif;
    padding: 50px 50px 60px 50px;
    margin-top: 2px;
}
.footer-l {
        display: inline-block;
        vertical-align: top;

}
body > footer > div.fotter-l {
    height:100%;
}
.footer-distributed .footer-center {
    display: inline-block;
    vertical-align: top;
    left: 5%;
     margin-top: 10px;
}
.footer-distributed .footer-right {
    display: inline-block;
    vertical-align: top;
}
.footer-distributed h3 {
    color: #ffffff;
    font: normal 35px;
    margin: 0;
}
.footer-distributed h3 span {
    color: #e4461f;
}
.footer-distributed .footer-links {
    color: #ffffff;
    margin: 5px;
}
.footer-distributed .footer-links a {
    display: inline-block;
    line-height: 1.8;
    text-decoration: none;
    color: inherit;
}
    div .footer-distributed .footer-company-name {
        color: #8f9296;
        font-size: 14px;
        font-weight: normal;
        margin: 0;
    }
        div .footer-distributed .footer-center i {
            background-color: #33383b;
            color: #ffffff;
            font-size: 25px;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            text-align: center;
            line-height: 42px;
            margin: 10px 15px;
            vertical-align: middle;
        }
           div .footer-distributed .footer-center i.fa-envelope {
                font-size: 17px;
                line-height: 38px;
            }
        div .footer-distributed .footer-center p {
            display: inline-block;
            color: #ffffff;
            vertical-align: middle;
            margin: 0;
        }
           div .footer-distributed .footer-center p span {
                display: block;
                font-weight: normal;
                font-size: 14px;
                line-height: 2;
            }
            div .footer-distributed .footer-center p a {
                color: #e4461f;
                text-decoration: none;
            }
    div .footer-distributed .footer-right {
        width: 40%;
        margin-top: 10px;
    }
   div .footer-distributed .footer-company-about {
        line-height: 20px;
        color: #92999f;
        font-size: 13px;
        font-weight: normal;
        margin: 5px 0 0 0;
    }
     div   .footer-distributed .footer-company-about span {
            display: block;
            color: #ffffff;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
        }
    div .footer-distributed .footer-icons {
        margin-top: 25px;
    }
       div .footer-distributed .footer-icons a {
            display: inline-block;
            width: 35px;
            height: 35px;
            cursor: pointer;
            background-color: #33383b;
            border-radius: 2px;
            font-size: 20px;
            color: #ffffff;
            text-align: center;
            line-height: 35px;
            margin-right: 3px;
            margin-bottom: 5px;
        }
           div .footer-distributed .footer-icons a:hover {
                background-color: #e4461f;
            }
.footer-links a:hover {
    color: #e4461f;
}
</style> 