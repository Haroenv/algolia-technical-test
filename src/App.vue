<template lang="pug">
al-search(app-id='XCG7JJBBFK', api-key='e3d622501fbbe065394049f746b16314', :facets="['category']")
  .w-100.flex.items-center.flex-column.mv2
    .flex.items-center
      a(href='https://algolia.com')
        img.w3(src='https://www.algolia.com/static_assets/images/press/downloads/algolia-light.svg', alt='logo of Algolia', title='Algolia')
      span.mh2(title='plus') &#xFF0B;
      a(href='https://vuejs.org')
        svg(xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", viewBox="0 0 392 340").w3
          defs
            path(d="M149.616.414H.073L195.857 339.5 391.64.415H242.1L195.858 80.5 149.615.415z")#a
          g(fill="none" fill-rule="evenodd")
            mask(fill="#fff")#b
              use(xlink:href="#a")
            use(fill="#52B988",xlink:href="#a")
            path(fill="#445364", d="M.073-135.586H391.64L195.858 203.5.073-135.585z", mask="url(#b)")
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
import AlSort from './components/AlSort.vue'

export default {
  components: {
    AlFacet: AlFacet,
    AlInput: AlInput,
    AlSort: AlSort,
    AlResults: AlResults,
    AlSearch: AlSearch
  }
}
</script>
