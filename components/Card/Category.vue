<template>
  <article class="w-full h-[320px] my-10 rounded-2xl overflow-hidden relative">
    <img :src="photo" alt="" class="object-cover w-full h-full -z-1" />
    <div class="absolute w-full h-full top-0 category__card--overlay"></div>
    <div class="mx-auto max-w-full lg:mx-0 absolute bottom-0 px-8 pb-8">
      <h2
        v-if="title"
        class="text-2xl font-bold tracking-tight text-white sm:text-3xl"
      >
        <nuxt-link v-if="url" :to="url">{{ title }}</nuxt-link>
        <template v-else>{{ title }}</template>
      </h2>
      <p v-if="description" class="mt-2 text-gray-300 text-[14px]">
        {{ description }}
      </p>
    </div>
  </article>
</template>

<script lang="ts" setup>
type CategoryCardProps = {
  title: string;
  description: string;
  photo?: string;
  url?: string;
};

withDefaults(defineProps<CategoryCardProps>(), {
  photo:
    "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
});
</script>
