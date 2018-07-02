<template>
  <div class="home">
    <button v-on:click="signOut" >Sign Out</button><br>
    <div class="container add-data">
      <h1>Add Game</h1>
    <input type="text" v-model="player1" placeholder="Player 1"/>
    <input type="number" v-model="score1" placeholder="0"/>
    <input type="number" v-model="score2" placeholder="0"/>
    <input type="text" v-model="player2" placeholder="Player 2"/>
    <button @click="submitGame()"> + Add Game</button>
  </div>
  <div class="container">
    <h1>Games Played</h1>
      <b-table :data='games' :columns="[
                    {
                        field: 'player1',
                        label: 'Player 1',
                        centered: true
                    },
                    {
                        field: 'score1',
                        label: 'Player 1 Score',
                        numeric: true
                    },
                    {
                        field: 'score2',
                        label: 'Player 2 Score',
                        left: true
                    },
                    {
                        field: 'player2',
                        label: 'Player 2',
                        centered: true
                    }
                ]"></b-table>

  </div>
    
 
  </div>
</template>

<script>
import firebase from 'firebase';
import vuefire from 'vuefire';
import { database } from '../firebase.config'

    export default {
        data() {
          return {
            games: {}
          }
            },
      firebase: {
        games: {
          source: database.ref('scoreboard'),
          cancelCallback(err) {
            console.error(err)
          }
        }
      },
            methods: {
                submitGame() {
                    database.ref('scoreboard').push({
                      player1: this.player1,
                      player2: this.player2,
                      score1: this.score1, 
                      score2: this.score2, 
                      edit: false
                      });
                    alert('Game submitted')
                },
                signOut: function () {
                firebase.auth()
                    .signOut()
                    .then(() => {
                        this.$router.replace('/');
                    });
            }
            },
  }

</script>

<style lang="scss">
  input {
    margin: 1rem;
  }
  .add-data {
    background: #EEE;
    margin: 2rem auto;
    padding: 1rem;
    border-radius: 10px
      }

</style>