<template>
  <article class="dt w-100 bb b--black-05 pb2 mt2">
    <a :href="result.link" class="dtc w2 w3-ns v-mid">
      <img :src="result.image" class="ba b--black-10 db br3 br4-ns w2 w3-ns h2 h3-ns pointer">
    </a>
    <div class="dtc v-mid pl3">
      <h1 class="f6 f5-ns fw6 lh-title black mv0"><a v-html="result._highlightResult.name.value" :href="result.link" class="link black"></a></h1>
      <span class="f6 fw4 mt0 mb0 black-60" v-html="result.category"></span>
    </div>
    <div class="dtc v-mid">
      <div class="w-100 tr">
        <a :href="result.link" class="f6 button-reset bg-white ba b--black-10 dim pointer pv2 ph2 ml1 black-60">iTunes</a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    result: Object
  }
}
</script>
