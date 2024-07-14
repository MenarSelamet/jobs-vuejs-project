<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import HomeCards from "./components/HomeCards.vue";
import JobListings from './components/JobListings.vue'
</script>

<template>
  <Navbar />
  <Hero
    title="Become a Vue Developer"
    subTitle="Find the Job that fits your Needs and Expertise"
  />
  <HomeCards />
  <JobListings/>
</template>

<style scoped></style>
