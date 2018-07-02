<template>
  <div class="home">
    <h1>Admin Area</h1>
    <button v-on:click="signOut" >Sign Out</button><br>
    <div class="container">
    <input type="text" v-model="player1" placeholder="Player 1"/>
    <input type="number" v-model="score1" placeholder="0"/>
    <input type="number" v-model="score2" placeholder="0"/>
    <input type="text" v-model="player2" placeholder="Player 2"/>
    <button @click="submitGame()"> + Add Game</button>
    </div>
  <div class="container">
    <tbody>
      <!--tr v-if='games' v-for='game in games'>
        <td>{{game.player1}}</td>
        <td>{{game.score1}}</td>
        <td>{{game.score2}}</td>
        <td>{{game.player2}}</td>
      </tr-->

    </tbody>
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
                    db.ref('scoreboard').push({
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
  tbody {
    width: 100%;
  }
  tr {
    width: 100%;
  }
  td {
    width: 20%
  }

</style>