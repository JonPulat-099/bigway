<template>
  <section class="py-12 sm:py-16">
    <div class="container mx-auto px-4">
      <Breadcrumbs :urls="breadcrumbs" />

      <div
        class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16"
      >
        <div class="lg:col-span-3 lg:row-end-1">
          <div class="lg:flex lg:items-start">
            <div class="lg:order-2 lg:ml-5">
              <div class="max-w-xl overflow-hidden rounded-lg">
                <img
                  class="h-full w-full max-w-full object-cover aspect-[4/3] max-h-96"
                  :src="url + content?.photos[photoIdx]?.link"
                  alt=""
                />
              </div>
            </div>

            <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
              <div class="flex flex-row items-start lg:flex-col">
                <button
                  v-for="(p, i) in content?.photos"
                  :key="p.id"
                  type="button"
                  class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                  @click="photoIdx = i"
                >
                  <img
                    class="h-full w-full object-cover"
                    :src="url + p.link"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
          <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
            {{ content?.title }}
          </h1>

          <h2 class="mt-8 text-base text-gray-900">Size</h2>
          <div class="mt-3 flex select-none flex-wrap items-center gap-1">
            <span
              v-for="s in content?.size"
              :key="s"
              class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
              >{{ s }}</span
            >
          </div>

          <h2 class="mt-8 text-base text-gray-900">Type</h2>
          <div class="mt-3 flex select-none flex-wrap items-center gap-1">
            <span
              class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
              >{{ content?.type }}</span
            >
          </div>

          <h2 class="mt-8 text-base text-gray-900">Colors</h2>
          <div class="mt-3 flex select-none flex-wrap items-center gap-1">
            <span
              v-for="(c, i) in content?.colors"
              :key="i"
              :style="`background-color: ${c}`"
              class="inline-flex items-center rounded-full w-8 h-8 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            ></span>
          </div>

          <ul class="mt-8 space-y-2 border-t py-4">
            <li
              class="flex items-center text-left text-sm font-medium text-gray-600"
            >
              <svg
                class="mr-2 block h-5 w-5 align-middle text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  class=""
                ></path>
              </svg>
              Free shipping worldwide
            </li>

            <li
              class="flex items-center text-left text-sm font-medium text-gray-600"
            >
              <svg
                class="mr-2 block h-5 w-5 align-middle text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  class=""
                ></path>
              </svg>
              Cancel Anytime
            </li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <div class="border-b border-gray-300">
            <nav class="flex gap-4">
              <span
                class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
              >
                Description
              </span>
            </nav>
          </div>

          <div class="mt-8 flow-root sm:mt-12">
            <h1 class="text-3xl font-bold">{{ content?.title }}</h1>
            <p class="mt-4">
              {{ content?.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { TSeoData } from '~/shared';

type TProductDetail = {
  data: {
    ceo: TSeoData;
    category: string;
    type: string;
    title: string;
    description: string;
    photo: string;
    slug: string;
    size: string[];
    photos: {
      id: number;
      link: string;
    }[];
    colors: string[];
  };
};

const route = useRoute().path;
const url = useRuntimeConfig().public.BASE_URL + "/storage/";
const param = useRoute().params?.slug;

const { data } = await useCustomFetch<TProductDetail>(
  () => `/product/${param}`
);

const content = computed(() => {
  return data.value?.data;
});

const photoIdx = ref<number>(0);

const breadcrumbs = computed(() => {
  return [
    {
      title: content.value?.category || "",
      url: "/" + route.split("/")?.[1],
    },
    {
      title: content.value?.title || "",
      url: route,
    },
  ];
});

const seo = computed(() => {
  return content.value?.ceo;
});

useSeoMeta({
  title: seo.value?.title,
  ogTitle: seo.value?.title,
  description: seo.value?.description,
  ogDescription: seo.value?.description,
  ogImage: url + seo.value?.photo,
});

</script>