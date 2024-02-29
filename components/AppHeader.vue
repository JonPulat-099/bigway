<template>
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-emerald-800" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex items-center gap-2 flex-shrink-0 text-white">
              <nuxt-link to="/" class="flex items-center gap-2 bg-transparent">
                <img class="h-8 w-8" src="/logo.svg" alt="Big Way Trading" />
                Big Way Trading
              </nuxt-link>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <nuxt-link
                  v-for="item in menus"
                  :key="item.id"
                  :to="'/' + item.slug"
                  class="rounded-md px-3 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-700 hover:text-white"
                  >{{ item.translation.title }}</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div v-if="baseURL && catalog" class="ml-4 flex items-center md:ml-6">
              <a
                :href="`${baseURL}/storage/${catalog}`"
                target="_blank"
                class="inline-flex justify-center rounded-md border border-transparent bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                Catalog PDF
              </a>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md bg-emerald-800 p-2 text-emerald-400 hover:bg-emerald-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-800"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
              />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <DisclosureButton
            v-for="item in menus"
            :key="item.id"
            as="a"
            :href="item.slug"
            :class="[
              
                
              'block rounded-md px-3 py-2 text-base font-medium',
            ]"
            >{{ item.translation.title }}</DisclosureButton
          >
        </div>
        <div class="border-t border-emerald-700 pb-3 pt-4">
          <div class="flex items-center px-5">
            <a
              href="/download"
              class="inline-flex justify-center rounded-md border border-transparent bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              Catalog PDF
            </a>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import type { Tmenu } from "@/shared";

defineProps<{
  menus: Tmenu[];
  catalog: string;
}>();

const baseURL = useRuntimeConfig().public?.BASE_URL
</script>
