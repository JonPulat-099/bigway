<template>
  <template v-if="pending">
    <CardCategorySkeleton v-for="i in 3" :key="i" :small-card-count="6" />
  </template>

  <div class="my-10">
    <Breadcrumbs :urls="breadcrumbs" />
    
    <CardCategory v-bind="category" />

    <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
      <div v-for="(c, i) in products" class="col">
        <CardProduct
          :parent="parent"
          :title="c.title"
          :text="c.description"
          :url="c.slug"
          :img="url + c.photo"
          :actions="false"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TProduct, TSeoData } from "@/shared";

const params = computed<string>(() => {
  return String(useRoute().params.category || "");
});

const url = useRuntimeConfig().public.BASE_URL + "/storage/";
const parent = computed<string>(() => String(useRoute().params.category || ""));

const { data: content, pending } = await useCustomFetch<{
  data: {
    title: string;
    description: string;
    photo: string;
    ceo: TSeoData;
    products: TProduct[];
  };
}>(() => `products/${params.value}`);

const category = computed(() => {
  return {
    title: content.value?.data?.title || "",
    description: content.value?.data?.description || "",
    photo: url + content.value?.data?.photo || "",
  };
});

const products = computed(() => {
  return content.value?.data.products || [];
});

const breadcrumbs = computed(() => {
  return [
    {
      title: content.value?.data.title || '',
      url: "/" + parent,
    },
  ];
});

const seo = computed(() => {
  return content.value?.data.ceo;
});

useSeoMeta({
  title: seo.value?.title,
  ogTitle: seo.value?.title,
  description: seo.value?.description,
  ogDescription: seo.value?.description,
  ogImage: url + seo.value?.photo,
});
</script>
