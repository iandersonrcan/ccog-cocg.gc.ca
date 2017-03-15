<template>
  <header role="banner">
    <div id="wb-bnr">
      <div class="container">
        <div class="row">
          <div id="wb-sttl" class="col-md-8">
            <a href="http://wet-boew.github.io/v4.0-ci/index-en.html">
              <span><img id="hatfield" src="/static/hatfield.png" /><span class="wb-inv">, </span><small></small></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HatfieldHeader'
}
</script>

<style lang="stylus">
  img#hatfield
    width auto
    height auto

  #wb-bnr>.container
    background white
</style>
