<script setup lang="ts">
import BaseButton from '../components/atoms/BaseButton.vue';

</script>



<template>
<div class="home">
    <h1>welcome to NeonStream</h1>

    <div class="actions">
        <BaseButton>Log In</BaseButton>

        <BaseButton variant="secondary">learn more</BaseButton>

        <BaseButton :loading="true">submit payment</BaseButton>
    </div>
</div>
</template>
<style>
.actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}
</style>