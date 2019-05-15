<template>
  <section>
    <h2>Model</h2>
    <p>Value: {{ value }}</p>
    <input v-model="modelValue" type="text" />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component
export default class SectionModel extends Vue {
  @Prop({ required: true }) readonly value!: string;

  get modelValue() {
    return this.value;
  }

  set modelValue(value: string) {
    this.$emit("input", value);
  }
}
</script>
