<template>
  <div class="w-80 flex">
    <form action="" @submit="blur">
      <input type="search" v-model="search" placeholder="search" ref="input" class="f2 mh2 mv2 ph2 pv2 br2 b--black-10 input-reset flex-auto">
      <button type="reset" class="bn bg-none outline-0 pointer f2 ph2">×</button>
    </form>
  </div>
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
      search: '',
      parent
    }
  },
  props: {
    alSearch: Object
  },
  watch: {
    search() {
      this.parent.setQuery(this.search);
    },
    submit() {
      this.$refs.input.blur();
    },
    reset() {
      this.$refs.input.focus();
    }
  },
}
</script>
