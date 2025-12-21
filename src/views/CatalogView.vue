<script setup lang="ts">
    import MediaCard from '../components/molecules/MediaCard.vue';

    const movies = [
  { id: 1, title: 'Neon Nights', year: '2024', image: 'https://placehold.co/600x400/1a1a1a/FFF?text=Neon' },
  { id: 2, title: 'Cyber Horizon', year: '2023', image: 'https://placehold.co/600x400/003366/FFF?text=Cyber' },
  { id: 3, title: 'The Algorithm', year: '2025', image: 'https://placehold.co/600x400/330000/FFF?text=Algo' }
];
</script>
<template>
    <div class="catalog-page">
        <h1>browse catalog</h1>

        <div class="grid">
            <MediaCard
            v-for="movie in movies"
            :key="movie.id"
            :id="movie.id"
            :title="movie.title"
            :imageSrc="movie.image"
            :year="movie.year"
            />
        </div>
    </div>

    </template>

    <style>
.grid {
  display: grid;
  /* Responsive Grid Logic */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
}
</style>