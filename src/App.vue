<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import SkipLink from './components/atoms/SkipLink.vue';
  import MainNav from './components/MainNav.vue';
</script>

<template>
  <SkipLink/>

  <header role="banner" class="app-header">
    <MainNav/>
  </header>

  <main id="main-content" role="main" tabindex="-1">
    <RouterView />
  </main>

  <footer role="contentinfo" class="app-footer">
    <p>&copy; 2025 NeonStream. Compliance: WCAG 2.2 AAA.</p>
  </footer>
</template>

<style lang="scss" scoped>
    :focus-visible{
    outline: 3px solid #ffcc00;
    outline-offset: 2px;
  }
#main{
   outline: none;
}

</style>