<template>
  <footer v-if="$slidev.nav.currentLayout !== 'cover'">
    <ul v-if="$slidev.nav.refs" class="absolute bottom-2 left-4">
      <li v-for="ref in $slidev.nav.refs" :key="ref">{{ ref }}</li>
    </ul>
    <span class="absolute bottom-2 right-4"
      >{{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}</span
    >
  </footer>
</template>
