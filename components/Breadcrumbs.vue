<template>
  <nav class="flex">
    <ol role="list" class="flex items-center">
      <li class="text-left">
        <div class="-m-1">
          <nuxt-link
            to="/"
            class="rounded-md p-1 text-sm font-medium bg-transparent text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
          >
            Home
          </nuxt-link>
        </div>
      </li>

      <li v-for="u in urls" :key="u.url" class="text-left">
        <div class="flex items-center">
          <span class="mx-2 text-gray-400">/</span>
          <div class="-m-1">
            <nuxt-link
              :to="u.url"
              class="rounded-md p-1 text-sm font-medium bg-transparent text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
            >
              {{ u.title }}
            </nuxt-link>
          </div>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts" setup>
defineProps<{
  urls: {
    title: string;
    url: string;
  }[];
}>();
</script>

<style></style>
