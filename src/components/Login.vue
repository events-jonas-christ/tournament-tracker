<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="email" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button v-on:click="login">Connect</button>
        <p>You don't have an account? <router-link to="/sign-up">You can create one</router-link></p>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: 'login',
        data: function() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login: function () {
                firebase.auth()
                    .signInWithEmailAndPassword(this.email, this.password)
                    .then( user => { this.$router.replace('home');},
                    error => { alert('Opps, ' + error.message ); });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login {
        margin-top: 40px;
    }
</style>