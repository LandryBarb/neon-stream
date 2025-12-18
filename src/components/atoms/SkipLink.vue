<script setup lang="ts">
    //Skiplink.vue
    //Purpose: Allows keyboard users to jump past navigation to the main content.
</script>

<template>
   <a href="#main-content" class="skip-link">
    Skip to main content
   </a>
</template>

<style lang="scss" scoped>
    /* Visually hidden until focused */
.skip-link {
  position: absolute;
  top: -9999px;
  left: -9999px;
  background: #000;
  color: #fff;
  padding: 1rem;
  z-index: 1000; /* Must sit above everything */
  text-decoration: none;
  font-weight: b
}

// When focused via Tab, it moves into view 
.skip-link:focus {
  top: 0;
  left: 0;
  outline: 3px solid #ffcc00; /* High contrast focus ring */
}
</style>