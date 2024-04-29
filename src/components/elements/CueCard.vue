<script setup>

</script>

<template>
  <div class="card">
    <img alt="Cue card Cover Art" src="https://picsum.photos/200/200"/>
    <div class="card-body">
      <h2>Title Deck</h2>
      <div class="gridContainer">
        <!--  Column Left -->
        <div class="gridItem">
          <p class="tag" v-for="tag in tags">{{ tag }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import '../../scss/elements/_cuecard';
</style>

<script>
  export default {
    data() {
      return {
        tags: ["cait", "loves", "adam", "very", "much"]
      };
    }
  };
</script>
<!--would need
- name of deck
- image of deck
- tags for deck
- words of deck
- id for each deck

//-------
table 1 : deck identify
- uuid
- display_name
- display_image
- tags

table 2 : deck contents
list of records containing each word for the deck
- uuid
- word
- word 2
- type
-->