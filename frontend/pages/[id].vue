<template>
  <div>
    <Detail :companyId="companyId"/>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
import Detail from "~/components/detail/index.vue";

const companyId = route.params.id;
</script>
