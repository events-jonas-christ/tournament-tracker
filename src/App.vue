<template>
  <div>
    <Nav/>
    <div class="container has-text-centered">
    <router-view/>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  data () {
    return {};
  },
  components: {
    Nav,
  },
  firebase: {
  },
};

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
        border-radius: 10px
    }
    button {
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
        background: #42b983;
        color: white;
        font-weight: bold;
        padding: 10px;
        text-transform: uppercase;
        border-radius: 10px
    }
    p {
        margin-top: 40px;
        font-size: 13px;
        font-family: Helvetica, Arial, sans-serif
        a {
            text-decoration: underline;
            cursor: pointer;
        }
    }
</style>
