<template>
  <section>
    <h1 class="text-2xl font-bold mb-8">Our Partners</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <article v-for="p in content" :key="p.id" class="rounded-2xl p-4 shadow-xl">
        <h4 class="leading-4 font-bold text-lg text-[rgb(17,24,39)] mb-5">{{ p.translation.title }}</h4>
        <p class="text-sm my-2 text-[rgb(75,85,99)] leading-6">{{ p.translation.description }}</p>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
type TPartners = {
  id: number
  translation: {
    title: string
    description: string
  }
}

const {data: content} = await useCustomFetch<TPartners[]>('/partners')
</script>
