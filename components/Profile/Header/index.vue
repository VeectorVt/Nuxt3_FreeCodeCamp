<template>
  <div class="ProfileHeader">
    {{ props.headerText }}

    <ProfileHeaderAvatar/>
  </div>
</template>

<script lang="ts" setup>

    const props = defineProps({
        headerText:String
    });

</script>

<style>

</style>