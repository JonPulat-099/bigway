<script setup lang="ts">
import type { TContacts, TSeoData, TSocial_media, Tmenu } from "@/shared";
type TMainRequest = {
  data: {
    catalog_url: string;
    menu: Tmenu[];
    social_media: TSocial_media[];
    contacts: TContacts[];
    ceo: TSeoData;
  };
};

const { data } = await useCustomFetch<TMainRequest>("/main");

const url = useRuntimeConfig().public.BASE_URL + "/storage/";

const catalog_url = computed(() => {
  return data.value?.data.catalog_url || "";
});

const menus = computed(() => {
  return data.value?.data.menu || [];
});

const social_media = computed(() => {
  return data.value?.data.social_media || [];
});

const contacts = computed(() => {
  return data.value?.data.contacts || [];
});

const seo = computed(() => {
  return data.value?.data.ceo;
});

useSeoMeta({
  title: seo.value?.title,
  ogTitle: seo.value?.title,
  description: seo.value?.description,
  ogDescription: seo.value?.description,
  ogImage: url + seo.value?.photo,
});

</script>
<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader :menus="menus" :catalog="catalog_url" />
    <main class="grow">
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <NuxtPage :contacts="contacts" />
      </div>
    </main>
    <AppFooter :contacts="contacts" :social-media="social_media" />
  </div>
</template>
