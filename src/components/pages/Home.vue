<script setup>
  import CueCard from '../elements/CueCard.vue'
  import TagRow from '../elements/RowOfTags.vue'
</script>

<template>
<!--  Main Parent Container-->
  <div class="mainContainer">
<!--    Container for the Columns-->
    <div class="gridContainer">
      <!--  Column Left -->
      <div class="gridItem">
        <h2>Most Recently Opened</h2>

        <!--  Title of Cards  -->
        <div class="headingContainer">
          <h3 class="grid-item">Title</h3>
          <h3 class="grid-item">Description</h3>
          <h3 class="grid-item">Tags</h3>
        </div>
        <!-- List of Stored Cards       -->
        <div v-for="card in Cards" :class="{'selectedRow': (card.id === selectedRow)}" @click="selectRow(card.id)" :key="card.id" class="deckContainer">
            <div class="grid-item">{{ card.name_of_deck }}</div>
            <div class="grid-item">{{ card.description }}</div>
            <TagRow class="grid-item" :tags="card.tags"></TagRow>

        </div>

        <!-- Open/Delete Cards     -->
        <div>
          <button class="openDeck" type="button">Open Deck</button>
          <button class="deleteDeck" type="button">Delete Deck</button>
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
      //dummy data
      Cards: [
        {
          id: "1",
          name_of_deck: "French",
          description: "bonjour, salut, coucou",
          tags: ["French", "Language"],
        },

        {
          id: "2",
          name_of_deck: "English",
          description: "hello, hi, hey",
          tags: ["English", "Language", "Confuse", "quelquefois"],
        },

        {
          id: "3",
          name_of_deck: "Baking",
          description: "flambe, brulee, yum",
          tags: ["Food", "Cooking", "Recipes"],
        },

        {
          id: "4",
          name_of_deck: "Je ne sais pas",
          description: "avoir, savoir, manger",
          tags: ["French", "Language", "Verbs"],
        },
      ],
      selectedRow: null
    };
  },

methods: {
  selectRow(id) {
      if (this.selectedRow === id) {
        this.selectedRow = null;
      }
      else {
        this.selectedRow = id;
      }
    }
  }
};

</script>
<style scoped lang="scss">
  @import '../../scss/pages/_home';

  .selectedRow {
    background-color: #d45ac0;
  }
</style>