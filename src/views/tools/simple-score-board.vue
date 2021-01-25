<template>
  <div id="tool-container">
    <h2>{{ $t("tool.content[1].title") }}</h2>
    <div id="tool-content">
      <div id="score-board">
        <div id="player-container">
          <table>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
            <tr v-for="(value, index) in players" :key="index">
              <td>{{ value }}</td>
              <td>{{ scores[index] }}</td>
              <td>
                <input
                  class="score-input"
                  type="number"
                  v-model="tempScores[index]"
                  @keypress.enter="addScore(index)"
                /><button class="change-score" @click="addScore(index)">+</button
                ><button class="change-score" @click="subtractScore(index)">-</button>
              </td>
              <td><button @click="removePlayer(index)">Delete</button></td>
            </tr>
          </table>
        </div>
      </div>
      <div id="new-player">
        <input
          id="new-player-input"
          ref="newPlayerInput"
          type="text"
          v-model="newPlayer"
          @keypress.enter="addPlayer"
        />
        <button @click="addPlayer">Add Player</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newPlayer: '',
      players: [],
      scores: [],
      tempScores: []
    }
  },
  methods: {
    addPlayer () {
      if (this.newPlayer) {
        this.players.push(this.newPlayer)
        this.scores.push(0)
        this.tempScores.push(1)
        this.newPlayer = ''
        this.$refs.newPlayerInput.focus()
      } else {
        alert('Please type in your NAME!')
      }
    },
    removePlayer (index) {
      this.players.splice(index, 1)
      this.scores.splice(index, 1)
      this.tempScores.splice(index, 1)
    },
    addScore (index) {
      this.scores[index] += parseInt(this.tempScores[index])
    },
    subtractScore (index) {
      this.scores[index] -= parseInt(this.tempScores[index])
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
}

#tool-content {
  width: 90%;
  min-width: 300px;
  flex-direction: column;
  margin: 20px auto;
  align-items: center;
  flex-grow: 1;
}

#player-container {
  margin: 10px auto;
}

#player-container tr {
  margin: 5px;
}

#player-container th,
td {
  padding: 5px;
}

.score-input {
  max-width: 50px;
}

@media only screen and (max-width: 400px) {
  .score-input {
    max-width: 80px;
  }

  .change-score {
    margin: 5px;
    padding: 5px 15px;
  }

  #score-board {
    width: 100%;
  }

  table {
    width: 100%;
  }
}
</style>
