<template>
  <div>
    <ContactUs :contacts="contacts" />
  </div>
</template>

<script lang="ts" setup>
const contacts = computed(() => {
  return useAttrs().contacts
})
</script>