<script setup>
import jobData from "@/jobs.json";
import { ref } from "vue";

const jobs = ref(jobData);
</script>

<template>
  <Section class="bg-blue-50 px-4 py-10">
  <div class="container-xl lg:container mx-auto">
    <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
      Browse Jobs
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div v-for="job in jobs" v-bind:key="job.id">{{ job.title }}</div>
    </div>
  </div>
</Section>
</template>
