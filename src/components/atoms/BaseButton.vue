<script setup lang="ts">
// src/components/atoms/BaseButton.vue

interface Props {
  variant?: 'primary' | 'secondary' | 'danger';
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button',
  loading: false,
  disabled: false
});
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :aria-busy="loading"
    class="base-btn"
    :class="[`btn-${variant}`, { 'is-loading': loading }]"
  >
    <span v-if="loading" class="spinner" aria-hidden="true"></span>
    
    <span v-if="loading" class="sr-only">Loading...</span>

    <span :class="{ 'invisible': loading }">
      <slot />
    </span>
  </button>
</template>

<style scoped>
/* Base Styles */
.base-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px; /* WCAG 2.5.5 Target Size */
}

/* Variants */
.btn-primary {
  background-color: #646cff;
  color: white;
}
.btn-primary:hover:not(:disabled) {
  background-color: #535bf2;
}

.btn-secondary {
  background-color: transparent;
  border-color: #646cff;
  color: #646cff;
}

/* Focus State */
.base-btn:focus-visible {
  outline: 3px solid #ffcc00;
  outline-offset: 2px;
}

/* Disabled State */
.base-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Utilities */
.invisible {
  visibility: hidden;
}

/* Spinner */
.spinner {
  width: 1em;
  height: 1em;
  border: 2px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  position: absolute;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Screen Reader Only Class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>