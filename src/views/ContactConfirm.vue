<template>
  <div>
    <h1>Confrim</h1>
    <p>{{ values }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { contactStore } from "@/store/contact";

export default Vue.extend({
  computed: {
    values() {
      return contactStore.values;
    }
  }
});
</script>
