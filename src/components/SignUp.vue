<template>
    <div class="sign-up">
        <p>Create a new account!</p>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button v-on:click="signUp" >Sign Up</button>
        <span> or go <router-link to="/login"> back to Login.</router-link></span>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: 'signUp',
        data: function() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            signUp: function() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        this.$router.replace('home')
                    },
                    function (err) {
                        alert('Opps. ' + err.message)
                    }
                )
            }

        }
    }
</script>

<style lang="scss" scoped>
    .signUp {
        margin-top: 40px
    }
</style>