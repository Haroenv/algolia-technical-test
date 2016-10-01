<template>
  <article>
    <select v-model="index">
      <option :value="option.index" v-for="option of options">{{option.name}}</option>
    </select>
  </article>
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
      index: '',
      parent
    };
  },
  props: {
    options: Array,
    alSearch: Object
  },
  mounted() {
    this.index = this.options[0].index;
  },
  watch: {
    index() {
      this.parent.setIndex(this.index);
    }
  }
}
</script>
