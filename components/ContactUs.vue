<template>
  <section class="grid grid-cols-1 md:grid-cols-2">
    <article>
      <h1 class="leading-4 font-bold text-lg text-[rgb(17,24,39)]">
        Get in touch with Big Way Trading
      </h1>
      <ul role="list" class="my-6">
        <template v-for="(c, i) in contacts" :key="i">
          <li>
            <a
              v-if="c.type == 1"
              :href="`tel:${c.number}`"
              class="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-900"
            >
              <PhoneIcon class="block h-5 w-5" />
              {{ c.title }}
            </a>
            <a
              v-else-if="c.type == 2"
              :href="`mailto:${c.title}`"
              class="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-900 mt-2"
            >
              <EnvelopeIcon class="block h-5 w-5" />
              {{ c.title }}
            </a>
          </li>
        </template>
      </ul>
      <p class="card__body--text">
        Or fill out the form and a member of the Big Way Trading team will get
        back to you as soon as possible.
      </p>
    </article>
    <article>
      <form
        class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
        @submit.prevent="sendMessage"
      >
        <div class="sm:col-span-3">
          <label
            for="first-name"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Name</label
          >
          <div class="mt-2">
            <input
              v-model="form.name"
              type="text"
              name="name"
              id="name"
              autocomplete="given-name"
              required
              class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              :disabled="disabled"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label
            for="last-name"
            class="block text-sm font-medium leading-6 text-gray-900"
            >​E-mail</label
          >
          <div class="mt-2">
            <input
              v-model="form.email"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              required
              class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              :disabled="disabled"
            />
          </div>
        </div>

        <div class="col-span-full">
          <label
            for="about"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Message</label
          >
          <div class="mt-2">
            <textarea
              v-model="form.message"
              id="about"
              name="about"
              rows="3"
              required
              class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              :disabled="disabled"
            ></textarea>
          </div>
        </div>

        <div class="col-span-full">
          <div class="mt-2 flex items-center gap-x-3 justify-end">
            <button
              type="submit"
              class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { PhoneIcon, EnvelopeIcon } from "@heroicons/vue/24/outline";

defineProps<{
  contacts: any;
}>();

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const disabled = ref<boolean>(false);

const sendMessage = async () => {
  try {
    disabled.value = true;
    const { data } = await useCustomFetch("/client/message", {
      method: "POST",
      body: form,
    });
    form.name = "";
    form.email = "";
    form.message = "";
  } catch (e) {}
  disabled.value = false;
};
</script>

<style></style>
