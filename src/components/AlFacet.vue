<template>
  <article>
    <h1 class="f3">{{name}}</h1>
    <div>
      <button v-for="option of options" :class="(option.isRefined ? 'refined ' : '') + 'f6 link dim br-pill ba b--black-10 bw1 ph3 pv2 mb2 mr1 dib bg-none'" @click="refine(option.name)">{{option.name}} ({{option.count}})</button>
    </div>
  </article>
</template>

<script>
export default {
  computed: {
    parent() {
      let parent;
      if (this.$parent.appId) {
        parent = this.$parent;
      } else if (this.alSearch) {
        parent = this.alSearch;
      } else {
        throw Error('this isn\'t a direct child of al-search or you forgot the v-bind:al-search');
      }
      return parent;
    },
    options() {
      return this.parent.facetValues[this.name];
    }
  },
  props: {
    name: String,
    alSearch: Object
  },
  methods: {
    refine(option) {
      this.parent.setRefinement(this.name, option);
    }
  }
}
</script>

<style scoped>
.refined:before {
  content: '× ';
  color: inherit;
}
</style>
