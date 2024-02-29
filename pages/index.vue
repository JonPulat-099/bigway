<template>
  <HomeSlider class="mb-10" />

  <template v-if="pending">
    <CardCategorySkeleton v-for="i in 3" :key="i" :small-card-count="3" />
  </template>
  <template v-else>
    <section v-for="c in content" :key="c.slug">
      <CardCategory
        :description="c.description"
        :photo="url + c.photo"
        :title="c.title"
        :url="c.slug"
      />
      <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
        <div v-for="(k, i) in c.products" :key="i" class="col">
          <CardProduct
            :parent="c.slug"
            :title="k.title"
            :text="k.description"
            :url="k.slug"
            :img="url + k.photo"
            :actions="false"
          />
        </div>
      </div>
    </section>
  </template>
  <div class="my-10 py-6">
    <Partners />
  </div>

  <div class="my-10 py-6">
    <article class="flex w-full flex-col items-start justify-between rounded-2xl p-4 shadow-2xl">
      <div class="flex items-center gap-x-4 text-xs">
        <time datetime="2024-02-27" class="text-gray-500">Feb 27, 2024</time>
      </div>
      <div class="group relative">
        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          Big Way Trading is a wonderful business for textile lovers! They have a great selection of home textile products and their staff is both knowledgeable and friendly. I highly recommend Big Way Trading if you're looking for a quality home textile product supplier!
        </p>
      </div>
      <div class="relative mt-8 flex items-center gap-x-4">
        <img
          src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          class="h-10 w-10 rounded-full bg-gray-50"
        />
        <div class="text-sm leading-6">
          <p class="font-semibold text-gray-900">
            <a href="#">
              <span class="absolute inset-0"></span>
              Adam Taylor (MMP Group)
            </a>
          </p>
          <p class="text-gray-600">Co-Founder / CTO</p>
        </div>
      </div>
    </article>
  </div>

  <div class="my-10 py-6">
    <ContactUs :contacts="contacts" />
  </div>
</template>

<script lang="ts" setup>
import type { TProduct } from "~/shared";

type TMainResponse = {
  data: {
    description: string;
    title: string;
    slug: string;
    photo: string;
    products: TProduct[];
  }[];
};

const url = useRuntimeConfig().public.BASE_URL + "/storage/";

const { data, pending } = await useCustomFetch<TMainResponse>("/categories", {
  lazy: true,
  server: false,
});

const content = computed(() => {
  return data.value?.data;
});

const contacts = computed(() => {
  return useAttrs().contacts;
});
</script>
<style></style>
