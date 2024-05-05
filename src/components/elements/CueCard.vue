<script setup>
  import TagRow from './RowOfTags.vue'
</script>

<template>
  <div class="card">
    <img alt="Cue card Cover Art" src="https://picsum.photos/200/200"/>
    <div class="card-body">
      <h2>Title Deck</h2>
      <p>Bonjour. Je m'appelle Cait. Je suis vingt-et-un ans, et mon anniversaire est vingt-huit Mars. Je ne sais pas quoi écrire ici. Au revoir. Ceci est une description </p>
      <div class="gridContainer">
        <!--  Column Left -->
        <div class="gridItem">
          <TagRow :tags="tag"></TagRow>
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
            tag: ["Cait", "Loves", "Adam"],
          }
        }
  };
</script>


