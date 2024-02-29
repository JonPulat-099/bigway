<template>
  <article class="card rounded-2xl shadow-lg overflow-hidden">
    <div class="card__header">
      <img
        :src="img"
        alt=""
        class="object-cover rounded-2xl block aspect-[3/2]"
      />
    </div>
    <div class="card__body px-3 pb-6">
      <h3 class="card__body--title">
        <nuxt-link :to="parent + '/' + url">{{ title }}</nuxt-link>
      </h3>
      <p class="card__body--text ellipsis">
        {{ text }}
      </p>
    </div>
    <slot v-if="actions" name="actions">
      <div class="card__actions"></div>
    </slot>
  </article>
</template>
<script setup lang="ts">
defineProps<{
  actions?: boolean;
  title: string;
  text?: string;
  url: string;
  img: string;
  parent: string;
}>();
</script>
<style>
.ellipsis {
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
