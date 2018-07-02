<template>
    <nav class="navbar has-text-centered" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
        </div>
        <div class="navbar-menu">
            <router-link to="/">Scoreboard</router-link>
            <router-link to="/home">Admin</router-link>
        </div>
    </nav>
</template>

<script>
    import firebase from 'firebase';

    export default {
        methods: {
          
        }
    }
</script>

<style lang="scss" scoped>
    .navbar {
        background: #42b983;
        color: white;
        text-align: right;
        position: relative;
        a {
            color: white;
            text-decoration: underline;
            margin: 10px;
            float: right
        }
    }
</style>