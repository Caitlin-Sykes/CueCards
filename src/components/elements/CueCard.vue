<script setup>
  import TagRow from './RowOfTags.vue'
</script>

<template>
  <div class="card">
      <span class="material-symbols-outlined">close</span>
    <img alt="Cue card Cover Art" :src="image"/>
    <div class="card-body">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="gridContainer">
        <!--  Column Left -->
        <div class="gridItem">
          <TagRow :tags="tags"></TagRow>
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
            // tag: ["Cait", "Loves", "Adam"],
          }
        },

        props: {
          tags: {
            type: Array,
            required: true
          },
          title: {
            type: String,
          }, 
          description: {
            type: String
          }, 
          image: {
            type: String
          },

        }
  };
</script>


