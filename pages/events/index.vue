<template>
  <div class="text-3xl font-bold underline">Events</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

const { say } = useUtils(false);

say();
</script>
