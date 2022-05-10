<template>
    <div class="contact">
        <h1>This is a contact page.</h1>
    </div>
</template>

<script>
export default {
  name: 'contactPage',
  mounted () {
    if (Object.keys(this.$route.params).length) {
      alert(
        `Hey! I'v got some parameter! ${JSON.stringify(this.$route.params)}`
      )
    }
  }
}
</script>
