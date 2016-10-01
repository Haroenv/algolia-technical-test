<template>
  <p class="o-40">{{parent.stats.hits}} hits in {{parent.stats.time}}ms</p>
</template>

<script>
export default {
  data() {
    let parent;
    if (this.$parent.appId) {
      parent = this.$parent;
    } else if (this.alSearch) {
      parent = this.alSearch;
    } else {
      throw Error('this isn\'t a direct child of al-search or you forgot the v-bind:al-search');
    }
    return {
      parent
    };
  },
  props: {
    alSearch: Object
  }
}
</script>
