<template>
    <footer  class="footer-distributed">
        <div style="height:100%" class="fotter-l">
            <h3>e <span>Tech</span></h3>
            <p class="footer-links">
                <a>Home</a> <br>
                <a >Sector1</a> <br>
                <a >Sector2</a> <br>
                <a >Sector3</a> <br>
                <a >Sector4</a> <br>
                <a >Sector5</a> <br>
                <a >Sector6</a> <br>
                <a>Admin Panel</a>             
            </p>
            <p class="footer-company-name">
                Copyright © 2022 <strong>e Tech</strong>
                All rights reserved
            </p>
        </div>
        <div class="footer-center">
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
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About the company</span>
                <strong>e Tech</strong> is a Tech Shop company where you can find
                best technology products.
            </p>
            <div class="footer-icons">
                <a v-bind:href="'https://www.facebook.com/'"><fa :icon="['fab','facebook']"/></a>
                <a v-bind:href="'https://www.instagram.com/'" ><fa :icon="['fab','instagram']"/></a>
                <a v-bind:href="'https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo'"><fa :icon="['fab','linkedin']"/></a>
                <a v-bind:href="'https://twitter.com/'" ><fa :icon="['fab','twitter']"/></a>
            </div>
        </div>
    </footer>

</template>
<script>
export default{
    name: 'Footer',

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
    height:40%;
    text-align: left;
    font: bold 16px sans-serif;
    padding: 50px 50px 60px 50px;
    margin-top: 2px;
}

.footer-l {
        display: inline-block;
        vertical-align: top;
        width: 300px;
}
body > footer > div.fotter-l {
    width: 300px;
    height:100%;
}

.footer-distributed .footer-center {
    display: inline-block;
    vertical-align: top;
    left: 5%;
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
    margin: 20px 0 12px;
}

.footer-distributed .footer-links a {
    display: inline-block;
    line-height: 1.8;
    text-decoration: none;
    color: inherit;
}

    .footer-distributed .footer-company-name {
        color: #8f9296;
        font-size: 14px;
        font-weight: normal;
        margin: 0;
    }

    .footer-distributed .footer-center {
        width: 35%;
    }

        .footer-distributed .footer-center i {
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

            .footer-distributed .footer-center i.fa-envelope {
                font-size: 17px;
                line-height: 38px;
            }

        .footer-distributed .footer-center p {
            display: inline-block;
            color: #ffffff;
            vertical-align: middle;
            margin: 0;
        }

            .footer-distributed .footer-center p span {
                display: block;
                font-weight: normal;
                font-size: 14px;
                line-height: 2;
            }

            .footer-distributed .footer-center p a {
                color: #e4461f;
                text-decoration: none;
            }

    .footer-distributed .footer-right {
        width: 30%;
    }

    .footer-distributed .footer-company-about {
        line-height: 20px;
        color: #92999f;
        font-size: 13px;
        font-weight: normal;
        margin: 5px 0 0 0;
    }

        .footer-distributed .footer-company-about span {
            display: block;
            color: #ffffff;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
        }

    .footer-distributed .footer-icons {
        margin-top: 25px;
    }

        .footer-distributed .footer-icons a {
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

            .footer-distributed .footer-icons a:hover {
                background-color: #e4461f;
            }

.footer-links a:hover {
    color: #e4461f;
}


</style>