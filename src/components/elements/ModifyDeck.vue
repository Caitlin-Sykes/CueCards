<script setup>
  import CueCard from '../elements/CueCard.vue'
  const tags = ["Cait", "Loves", "Adam"]; //for testing
</script>

<template>
  <CueCard image="https://picsum.photos/200/200" description="Love you Adam" title="Cue Card" :tags="tags">
  </CueCard>
</template>

<style scoped lang="scss">
  .card {
    margin: auto;
    padding: 40px;
  }
  
  :deep(.material-symbols-outlined) {
    display: block;
    float: right;
  }
  
  :deep(.tags) {
    display: flex;
    flex: 1;
  }

 
  
</style>

<script>
</script>