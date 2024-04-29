<script setup>
  import CueCard from '../elements/CueCard.vue'
</script>

<template>
<!--  Main Parent Container-->
  <div class="mainContainer">
<!--    Container for the Columns-->
    <div class="gridContainer">
      <!--  Column Left -->
      <div class="gridItem">
        <div  class="deckContainer">
          <div>
            <h3>Name of Deck</h3>
            <h3> Tags</h3>
            <h3> Logo</h3>
          </div>
          <div v-for="card in Cards">
            <p>{{ card.name_of_deck }}</p>
            <p> {{ card.tags }}</p>
            <span class="material-symbols-outlined"> {{ card.logo}}</span>
          </div>

        </div>
        <div>
          <button class="addCard" type="button">Add Card</button>
          <button class="deleteCard" type="button">Delete Card</button>
        </div>
      </div>
      <!-- Column Right -->
      <div class="gridItem">
        <CueCard></CueCard>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      Cards: [
        {
          name_of_deck: "French",
          tags: "bonjour, salut, coucou",
          logo: "flag",
        },

        {
          name_of_deck: "English",
          tags: "hello, hi, hey",
          logo: "sports_score"
        },

        {
          name_of_deck: "Baking",
          tags: "flambe, brulee, yum",
          logo: "cookie"
        },

        {
          name_of_deck: "Je ne sais pas",
          tags: "avoir, savoir, manger",
          logo: "edit"
        },
    ]};
  }
};
</script>
<style scoped lang="scss">
  @import '../../scss/pages/_home';
</style>