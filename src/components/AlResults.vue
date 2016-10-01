<template>
  <section>
    <h2>Results</h2>
    <div>
      <al-stats :al-search="parent"></al-stats>
      <article v-if="parent.results.length === 0" class="center">no results</article>
      <al-result v-for="result of $parent.results" :result="result"></al-result>
    </div>
    <al-pagination :al-search="parent"></al-pagination>
  </section>
</template>
<script>
import AlStats from './AlStats.vue'
import AlResult from './AlResult.vue'
import AlPagination from './AlPagination.vue'

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
  },
  components: {
    AlStats: AlStats,
    AlResult: AlResult,
    AlPagination: AlPagination
  }
}
</script>
