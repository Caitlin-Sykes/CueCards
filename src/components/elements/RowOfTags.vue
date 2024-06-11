<script setup>

</script>
<!--hii-->
<template>
  <div class="tags">
    <p v-for="tag in tags" class="tag">{{ tag }}</p>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">

/** ----------------------------------
        Coloured Tags
----------------------------------**/

      //Tag Randomness
      $tag-colours: (
          #f33b3b,
          #d79158,
          #e8ca44,
          #67ce3e,
          #6ceeb5,
          #a958d7,
      );

      $tag-text-colour: #070719;
      $repeat: 7;

      @for $i from 1 through $repeat {
        p.tag:nth-child(#{length($tag-colours)}n+#{$i}) {
          background: lighten(nth($tag-colours, random(length($tag-colours))), 20%);
        }
      }


.tags {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  overflow: hidden;

  //Each tag in tags
  .tag {
    border-radius: 5%;
    padding: 7px;
    display: flex;
    margin: 0 1px 1px 1px;
    color: $tag-text-colour;
    text-align: center;
  }

  p {
    display: block;
    flex: 1 0 10px;
  }
}

</style>