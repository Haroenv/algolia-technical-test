<template>
  <nav v-if="parent.pagination.total > 1" class="ph3 ph5-ns pv4">
    <div class="nowrap overflow-x-auto">
      <a @click="paginate(n - 1)" :class="(n - 1 === parent.pagination.current ? 'black ' : 'gray ') + 'link dim f5 f4-ns dib mh2 pointer'" v-for="n of parent.pagination.total">{{n}}</a>
    </div>
  </nav>
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
  },
  methods: {
    paginate(page) {
      this.parent.setPage(page);
    }
  }
}
</script>
