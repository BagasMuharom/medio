<template>
  <div class="flex h-screen justify-center items-center">
    <div id="menang-panel" v-if="pemenang != null">
      <h1>Pemenangnya Adalah :</h1>

      <div class="pion-o" v-if="pemenang == 'o'">
        <!-- <img src="./image/o.png" /> -->
      </div>
      <div class="pion-x" v-if="pemenang == 'x'">
        <!-- <img src="./image/x.png" /> -->
      </div>
    </div>

    <div id="number-board">
      <div class="flex" v-for="(row, index_row) in board" :key="index_row">
        <div
          :class="[
            'w-12',
            'h-12',
            'text-center',
            'flex',
            'justify-center',
            'items-center',
            'rounded-md',
            'border-4',
            'm-1',
            'font-bold',
            'text-lg',
            {
              active:
                col == hasil_operasi && xoboard[index_row][index_col] == '',
              unactive:
                (col != hasil_operasi &&
                xoboard[index_row][index_col] == ''),
              'col-o': xoboard[index_row][index_col] == 'o',
              'col-x': xoboard[index_row][index_col] == 'x',
            },
          ]"
          v-for="(col, index_col) in row"
          :key="index_col"
          @click="chooseNumberBoard(index_row, index_col)"
        >
          <span v-if="xoboard[index_row][index_col] === ''">
            {{ col }}
          </span>
          <span v-else-if="xoboard[index_row][index_col] === 'x'">
            <fa-icon icon="times"></fa-icon>
          </span>
          <span v-else-if="xoboard[index_row][index_col] === 'o'">
            <fa-icon :icon="['far', 'circle']"></fa-icon>
          </span>
        </div>
      </div>
    </div>

    <div id="tools-board">
      <h3>Giliran</h3>
      <div class="w-14 h-14 rounded-md flex justify-center items-center border-4 border-yellow-400 bg-yellow-200 text-yellow-600 text-2xl" v-if="turn == 'o'">
        <fa-icon :icon="['far', 'circle']"></fa-icon>
      </div>
      <div class="w-14 h-14 rounded-md flex justify-center items-center border-4 border-red-400 bg-red-200 text-red-600 text-2xl" v-if="turn == 'x'">
        <fa-icon icon="times"></fa-icon>
      </div>

      <div class="border-4 border-blue-600 text-blue-600 bg-blue-100 rounded-md m-1 px-2 py-2 font-bold text-3xl">
        {{ last_number }}
      </div>
      <div class="flex" id="operator-pad">
        <div
          @click="chooseOperator('+')"
          :class="[
            'border-4',
            'font-bold',
            'rounded-md',
            'flex-grow',
            'text-2xl',
            'm-1',
            'text-center',
            'py-2',
            {
              active: choosed_operator == null && last_number != 0,
              focus: choosed_operator == '+',
              unactive: choosed_operator != '+' && choosed_operator != null,
            },
          ]"
        >
          +
        </div>
        <div
          @click="chooseOperator('x')"
          :class="[
            'border-4',
            'font-bold',
            'rounded-md',
            'flex-grow',
            'text-2xl',
            'm-1',
            'text-center',
            'py-2',
            {
              active: choosed_operator == null && last_number != 0,
              focus: choosed_operator == 'x',
              unactive: choosed_operator != 'x' && choosed_operator != null,
            },
          ]"
        >
          x
        </div>
      </div>
      <div class="grid grid-cols-3" id="number-pad">
        <div
          v-for="i in 9"
          :key="i"
          @click="chooseNumber(i)"
          :class="[
            'border-4',
            'flex',
            'justify-center',
            'items-center',
            'h-16',
            'w-16',
            'text-2xl',
            'rounded-md',
            'm-1',
            'font-bold',
            {
              unactive: numberPadUnfocus(i),
              active: !numberPadUnfocus(i)
            },
          ]"
        >
          {{ i }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
#number-board {
  .active {
    @apply border-blue-400 bg-blue-200 text-blue-600 cursor-pointer;
  }

  .active:hover {
    @apply border-blue-500 bg-blue-300 text-blue-700 cursor-pointer;
  }

  .unactive {
    @apply border-gray-400 bg-gray-200 text-gray-600;
  }
}

#operator-pad {
  .focus, .active:hover {
    @apply border-green-500 bg-green-300 text-green-700;
  }

  .active {
    @apply border-green-400 bg-green-200 text-green-600 cursor-pointer;
  }

  .unactive {
    @apply border-gray-400 bg-gray-200 text-gray-600;
  }
}

#number-pad {
  .active:hover {
    @apply border-purple-500 bg-purple-300 text-purple-700;
  }

  .active {
    @apply border-purple-400 bg-purple-200 text-purple-600 cursor-pointer;
  }

  .unactive {
    @apply border-gray-400 bg-gray-200 text-gray-600;
  }
}

.col-x {
  @apply border-red-400 bg-red-200 text-red-600;
}

.col-o {
  @apply border-yellow-400 bg-yellow-200 text-yellow-600;
}
</style>

<script>
export default {
  data() {
    return {
      boardSize: 10,
      board: [],
      xoboard: [],
      index: [],
      turn: "x",
      last_number: 0,
      choosed_operator: null,
      hasil_operasi: null,
      pemenang: null,
    };
  },

  mounted() {
    this.generateNumberBoard();
    this.index = this.generateRandomIndex();
  },

  methods: {
    generateNumberBoard: function () {
      for (let row = 1; row <= this.boardSize; row++) {
        this.board.push([]);
        this.xoboard.push([]);

        for (let col = 1; col <= this.boardSize; col++) {
          // this.board[row - 1].push(1)
          this.board[row - 1].push(this.random(2, 9));
          this.xoboard[row - 1].push("");
        }
      }

      for (let index of this.generateRandomIndex(80)) {
        let row = index[0];
        let col = index[1];
        let num = this.board[row][col];

        // atas
        if (row > 0) {
          if (this.board[row - 1][col] < 10 && num < 10) {
            this.board[row - 1][col] *= num;
          }
        }

        // bawah
        if (row < this.boardSize - 1) {
          if (this.board[row + 1][col] < 10 && num < 10) {
            this.board[row + 1][col] *= num;
          }
        }

        // kiri
        if (col > 0) {
          if (this.board[row][col - 1] < 10 && num < 10) {
            this.board[row][col - 1] *= num;
          }
        }

        // bawah
        if (col < this.boardSize - 1) {
          if (this.board[row][col + 1] < 10 && num < 10) {
            this.board[row][col + 1] *= num;
          }
        }
      }
    },

    generateRandomIndex: function (count) {
      let rand = [];

      for (let i = 1; i <= count; i++) {
        let temp = [this.random(0, 9), this.random(0, 9)];

        while (
          rand.filter(function (value, index) {
            return value[0] == temp[0] && value[1] == temp[1];
          }).length > 0
        ) {
          temp = [this.random(0, 9), this.random(0, 9)];
        }

        rand.push(temp);
      }

      return rand;
    },

    random: function (min = 1, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    chooseNumber: function (number) {
      if (this.choosed_operator == null && this.last_number > 0) {
        return;
      }

      if (this.choosed_operator == "+") {
        this.hasil_operasi = this.last_number + number;
      } else {
        this.hasil_operasi = this.last_number * number;
      }

      this.last_number = number;
      this.choosed_operator = null;
    },

    chooseOperator: function (operator) {
      if (this.last_number == 0) {
        return;
      }

      if (this.choosed_operator != null) {
        return;
      }

      this.choosed_operator = operator;
    },

    chooseNumberBoard: function (row, col) {
      if (
        this.hasil_operasi == null ||
        this.xoboard[row][col] !== "" ||
        this.hasil_operasi != this.board[row][col]
      ) {
        return;
      }

      this.xoboard[row][col] = this.turn;
      this.turn = this.turn === "x" ? "o" : "x";
      this.hasil_operasi = null;
      this.cekPemenang();
      this.$forceUpdate();
    },

    numberFactor: function (num) {
      var half = Math.floor(num / 2), // Ensures a whole number <= num.
        factors = [],
        i,
        j;

      // Determine out increment value for the loop and starting point.
      num % 2 === 0 ? ((i = 2), (j = 1)) : ((i = 3), (j = 2));

      for (i; i <= half; i += j) {
        if (num % 1 === 0) {
          factors.push(i);
        }
      }

      return factors;
    },

    cekPemenang: function () {
      let menang = false;

      for (let row = 0; row <= 9; row++) {
        for (let col = 0; col <= 9; col++) {
          if (this.xoboard[row][col] == "") {
            continue;
          }

          menang = this.cekMenangKanan(row, col);

          if (!menang) {
            menang = this.cekMenangAtas(row, col);
          }

          if (!menang) {
            menang = this.cekMenangDiagonalKanan(row, col);
          }

          if (!menang) {
            menang = this.cekMenangDiagonalKiri(row, col);
          }

          if (menang) {
            this.pemenang = this.xoboard[row][col];

            break;
          }
        }

        if (menang) {
          break;
        }
      }
    },

    cekMenangKanan: function (row, col) {
      if (col + 3 > 9) {
        return false;
      }

      let count = 0;

      for (let i = col; i <= col + 3; i++) {
        if (this.xoboard[row][i] == this.xoboard[row][col]) {
          count++;
        }
      }

      return count > 3;
    },

    cekMenangAtas: function (row, col) {
      if (row - 3 < 0) {
        return false;
      }

      let count = 0;

      for (let i = row - 3; i <= row; i++) {
        if (this.xoboard[i][col] == this.xoboard[row][col]) {
          count++;
        }
      }

      return count > 3;
    },

    cekMenangDiagonalKanan: function (row, col) {
      if (row - 3 < 0 || col + 3 > 9) {
        return false;
      }

      let count = 0;

      for (let i = 0; i <= 3; i++) {
        if (this.xoboard[row - i][col + i] == this.xoboard[row][col]) {
          count++;
        }
      }

      return count > 3;
    },

    cekMenangDiagonalKiri: function (row, col) {
      if (row - 3 < 0 || col - 3 < 0) {
        return false;
      }

      let count = 0;

      for (let i = 0; i <= 3; i++) {
        if (this.xoboard[row - i][col - i] == this.xoboard[row][col]) {
          count++;
        }
      }

      return count > 3;
    },

    numberPadUnfocus: function (number) {
      return this.last_number > 0 && this.choosed_operator == null;
    },
  },
};
</script>