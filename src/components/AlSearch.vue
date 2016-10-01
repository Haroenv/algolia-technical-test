<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import algoliasearch from 'algoliasearch'
import algoliasearchHelper from 'algoliasearch-helper'

export default {
  data() {
    const client = algoliasearch(this.appId, this.apiKey);
    const helper = algoliasearchHelper(client, 'appstore', {
      facets: this.facets
    });
    return {
      results: [],
      pagination: {
        total: 0,
        current: 1
      },
      facetValues: {},
      stats: {
        time: 0,
        hits: 0,
      },
      helper: helper
    };
  },
  props: {
    appId: String,
    apiKey: String,
    facets: Array
  },
  created() {
    this.helper.on('result', content => {
      this.queryDone(content);
    });
  },
  mounted() {
    this.helper.search();
  },
  methods: {
    queryDone(content) {
      this.results = content.hits;
      this.pagination = {
        total: content.nbPages,
        current: content.page
      };
      this.stats = {
        time: content.processingTimeMS,
        hits: content.nbHits
      };
      this.facets.forEach(facet => {
        this.$set(this.facetValues,facet, content.getFacetValues(facet));
      });
    },
    setQuery(val) {
      this.helper.setQuery(val).search();
    },
    setPage(page) {
      this.helper.setPage(page).search();
    },
    setRefinement(facet, value) {
      this.helper.toggleRefinement(facet, value).search();
    },
    setIndex(index) {
      this.helper.setIndex(index).search();
    }
  }
}
</script>
