<template>
    <section>
    <!-- <div class="row justify-content-center">
        <div class="col-md-7 col-lg-3 p-4 p-md-5"> -->
            <!-- <form @submit.prevent="loginUser">       
            <div class="form-group">
                <label for="email">Email:</label> -->
                <!-- <input class="form-control" type="email" v-model="form.email" placeholder="Email" />
            </div>
            <div class="form-group"> -->
               <!-- <label for="password">Password:</label> -->
                <!-- <input class="form-control" type="password" v-model="form.password" placeholder="Password" />
            </div>

            <button class="btn btn-primary" type="submit">Login</button>
            <br>
            <p>
              Don't have an account? <router-link class="router-link" :to="{name: 'Register'}">Register</router-link>
            </p>
            </form>
        </div>
    </div>  -->
    <div class="form-wrap">
        <form @submit.prevent="loginUser" class="login">
            <h2>Login to e-Tech</h2>
            <br>
            <br>
            <div class="inputs">
                <div class="input">
                    <input class="form-control" type="email" placeholder="Email" v-model="form.email">
                </div>
                 <div class="input">
                    <input class="form-control" type="password" placeholder="Password" v-model="form.password">
                </div>
            </div>
            <p class="login-register">
                Don't have an account?
            <router-link class="router-link" :to="{name: 'Register'}">Register</router-link>
            </p>
            <div v-if="this.error">Error ocurred: {{this.error}}</div>
            <button class="btn black" type="submit">Login</button>
        </form>
    </div>
    </section>    
</template>

<script>
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

 export default {
     data() {
         return {
             form: {
                 email: "",
                 password: ""
             },
             error: null,
         };
     },
     methods: {
         async loginUser() {
             const auth = getAuth();
             try {
                 await signInWithEmailAndPassword(auth, this.form.email, this.form.password);
             } catch (err) {
                 this.error = err.response.data.error;
             }
             this.$router.replace({name: 'Listing'})
         }
     }
 };
</script>

<style lang="scss">
.form-wrap {
    overflow: hidden;
    display: flex;
    height: 100vh;
    justify-content: center;
    margin: 0 auto;
    width: 90%;

    .login-register{
        margin-bottom: 32px;

        .router-link{
            color: #000; 
        }
    }
    form {
        padding: 0 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }

    h2 {
        text-align: center;
        font-size: 32px;
        color: #303030;
    }
    .inputs {
        width: 100%;
        max-width: 350px;

        .input{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 8px;
            input {
                width: 100%;
                border: none;
                background-color: #f2f7f6;
                padding: 4px 4px 4px 30px;
                height: 50px;

                &:focus{
                    outline: none;
                }
            }
        }
    }
    button {
        color: white;

        &:hover{
            color: white;
        }
    }
}
</style>
