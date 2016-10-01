<template lang="pug">
al-search(app-id='XCG7JJBBFK', api-key='e3d622501fbbe065394049f746b16314', :facets="['category']")
  .w-100.flex.items-center.flex-column.mv2
    .flex.items-center
      a(href='https://algolia.com')
        img.w3(src='https://www.algolia.com/static_assets/images/press/downloads/algolia-light.svg', alt='logo of Algolia', title='Algolia')
      span.mh2(title='plus') &#xFF0B;
      a(href='https://vuejs.org')
        img.w3(src='https://s.haroen.me/img/vue.svg', alt='logo of vue', title='Vue')
    al-input
  al-facet(name='category')
  al-sort(:options="[{index: 'appstore_rating_asc',name: 'Rank ascending'}, {index: 'appstore_rating_desc',name: 'Rank descending'}]")
  al-results
</template>

<script>
import AlFacet from './components/AlFacet.vue'
import AlInput from './components/AlInput.vue'
import AlResults from './components/AlResults.vue'
import AlSearch from './components/AlSearch.vue'

export default {
  components: {
    AlFacet: AlFacet,
    AlInput: AlInput,
    AlResults: AlResults,
    AlSearch: AlSearch
  }
}
</script>
