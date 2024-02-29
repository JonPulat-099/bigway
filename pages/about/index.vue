<template>
  <section>
    <h1 class="text-2xl font-bold mb-8">{{ title }}</h1>
    <p class="card__body--text my-4" v-html="description"></p>
  </section>
</template>

<script lang="ts" setup>
const { data: content } = await useCustomFetch<{
  ceo: {
    description: string;
    title: string;
    photo: string;
  };
  translation: {
    description: string;
    title: string;
  };
}>("/about");

const title = computed(() => {
  return content.value?.translation.title;
});

const description = computed(() => {
  return content.value?.translation.description;
});

const seo = computed(() => {
  return content.value?.ceo;
});

const url = useRuntimeConfig().public.BASE_URL + "/storage/";

useSeoMeta({
  title: seo.value?.title,
  ogTitle: seo.value?.title,
  description: seo.value?.description,
  ogDescription: seo.value?.description,
  ogImage: url + seo.value?.photo,
})
</script>

<style></style>
