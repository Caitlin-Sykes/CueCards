<script setup>
  import TagRow from '../elements/RowOfTags.vue'
  import WarningBox from "../elements/WarningBox.vue";
</script>

<template>
  <WarningBox></WarningBox>
<!--  Main Parent Container-->
  <div class="mainContainer">
<!--    Container for the Columns-->
    <div class="gridContainer">
      <!--  Column Left -->
      <div class="gridItem">
        <h2>Current Decks of Cards</h2>

        <!--  Title of Cards  -->
        <div class="headingContainer">
          <h3 class="grid-item">Title</h3>
          <h3 class="grid-item">Description</h3>
          <h3 class="grid-item">Tags</h3>
        </div>
        <!-- List of Stored Cards       -->
        <div v-for="card in Cards" :class="{'selectedRow': (card.id === selectedRow)}" @click="handleRowClick(card.id)" :key="card.id" class="deckContainer">
          <div class="grid-item">{{ card.name_of_deck }}</div>
          <div class="grid-item">{{ card.description }}</div>
          <TagRow class="grid-item" :tags="card.tags"></TagRow>

        </div>
        <!-- Open/Delete Cards     -->
        <div class="modifyButtonsContainer">
          <button class="openDeck" type="button" @click="">Manage Deck</button>
          <button class="deleteDeck" type="button" @click="">Delete Deck</button>
          <button class="filterDeck" type="button" @click="">Filter Deck</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { selectRow } from '../../js/pages/manageDecks.js';
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
    // Handles clicking on the rows
    handleRowClick(id) {
      this.selectedRow = selectRow(this.selectedRow, id);
    },
    
  
    
  }
}

</script>
<style scoped lang="scss">
  @import '../../scss/pages/_manageDecks';
  
  .selectedRow {
    background-color: #d45ac0;
  }
</style>