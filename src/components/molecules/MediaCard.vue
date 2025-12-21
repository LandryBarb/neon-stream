<script setup lang="ts">
    import { computed } from 'vue';
    import { RouterLink } from 'vue-router'

    interface Props{
        id: string | number;
        title: string;
        imageSrc: string;
        year: string;
    }

    const props = defineProps<Props>();


    //generate link path
    const linkTo = computed(() => `/watch/${props.id}`);
</script>

<template>
<div class="media-card">
    <RouterLink :to="linkTo" class="card-link">
        <div class="image-wrapper">
            <img :src="imageSrc" alt="" loading="lazy">
        </div>

        <div class="content">
            <h3 class="title">{{ title }}</h3>
            <p class="meta">{{ year }}</p>
        </div>
    </RouterLink>
</div>
</template>

<style scoped>
.media-card {
  position: relative;
  transition: transform 0.2s ease;
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid transparent; /* Prepare for focus border */
}

/* Hover Effect */
.card-link:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* FOCUS STATE - Critical for Keyboard Users */
/* We put the focus ring on the link wrapper */
.card-link:focus-visible {
  outline: 3px solid #ffcc00;
  outline-offset: 4px;
}

.image-wrapper {
  aspect-ratio: 16 / 9; /* Enforce standard video aspect ratio */
  background-color: #eee;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.content {
  padding: 0.75rem;
  background: #fff;
}

.title {
  margin: 0;
  font-size: 1.1rem;
  color: #2c3e50;
}

.meta {
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
  color: #666;
}
</style>