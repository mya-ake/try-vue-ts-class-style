<template>
  <section>
    <slot name="headline" />
    <p>{{ message }}</p>
    <p>{{ repeatMessage }}</p>
    <slot />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class SectionText extends Vue {
  @Prop({ required: true }) readonly message!: string;

  get repeatMessage() {
    return this.message.repeat(2);
  }
}
</script>
