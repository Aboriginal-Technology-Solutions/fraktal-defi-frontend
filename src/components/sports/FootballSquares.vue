<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col>
        HOME TEAM: {{teams.home.name}}
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        AWAY TEAM: {{teams.away.name}}
      </v-col>
    </v-row>
    <v-row :key="index" v-for="(_rows, index) in this.board">
      <v-col :key="index2" v-for="(_cols, index2) in _rows">
       | {{index}}, {{index2}} |
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { randomBytes } from 'crypto'
import { BigNumber } from 'ethers'
export default {
  data: () => ({
    _board: [],
    tvl: 0,
    teams: {
      home: {
        name: "Saints"
      },
      away: {
        name: 'Falcons'
      }
    }
  }),
  computed: {
    board () {
      return this.board
    }
  },
  methods: {
    createBoard () {
      let rows = 10
      let cols = 10

      for (let i = 0; i < rows; i++) {
        let _cols = []
        for (let n = 0; n < cols; n++) {
          _cols[n] = [i, n, Number(BigNumber.from(randomBytes(100))) % 100]
          this.tvl += 5
        }
        this.board[i] = _cols
      }
    },
    setRandomNumber () {
      let rand = Number(BigNumber.from(randomBytes(10000))) % 100
      let hasRand = this.board.filter(_row => {
        return !!_row.filter(_cols => _cols[3] === rand).length
      })
      if (hasRand) return this.setRandomNumber()
      return rand
    }
  },
  mounted () {
    this.createBoard()
    console.log('BOARD:', this.board)
    console.log('TVL:', this.tvl)
  }
}
</script>

