<template>
    <div @update="handleWarning($event)" v-if="showWarning" class="warningContainer">
      <h3>Warning</h3>
      <slot>{{ warningMessage }}</slot>
    </div>
</template>

<style scoped lang="scss">
@import '../../scss/elements/_warningBox';
</style>

<script>
  export default {
    props: {
      showWarning: {
        type: Boolean,
        default: false
      },
      warningMessage: ''
    },
    methods: {
      // dismissAlert() {
      //     this.('dismiss');
      // },

      // Handles warnings emitted by "show-warning"
      handleWarning(warning) {
        // Shows the warningbox
        this.showWarning = true;
        this.warningMessage = warning;
      }
    },
    
  };
</script>