<template>
  <div class="dice-box">
    <Dice :value="diceValue" :roll="diceRoll" />
    <!-- v-touch-swipe="test" -->
    <button @click="rollDiceRandom">굴리기</button>
  </div>
</template>

<script>
import Dice from '/src/components/Dice';

export default {
  name: "App",
  components: {
    Dice
  },
  data() {
    return {
      diceRoll: false,
      diceValue: 1,
    };
  },
  methods: {
    async rollDiceRandom() {
      this.diceValue = Math.floor(Math.random() * (6 - 1) + 1);
      this.diceRoll = true;
      await this.delay(1);
      this.diceRoll = false;
    },

    test(agr, agr2, agr3, agr4) {
      console.log(agr, agr2, agr3, agr4)
    },

    delay(time) {
      return new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, time * 1000)
      );
    },
  },
};
</script>

<style lang="sass">
@import ./components/Dice/dice

.dice-box
  width: 100%
  height: 400px
  display: flex
  justify-content: space-around
  align-items: center
</style>
