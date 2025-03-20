<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col justify-between">
    <NavBar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/layouts/NavBar.vue'
import Footer from '~/layouts/Footer.vue'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>
