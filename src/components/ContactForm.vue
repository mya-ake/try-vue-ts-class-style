<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="title">Title: </label>
      <input id="title" v-model.trim="form.title" type="text" />
    </div>
    <div>
      <label for="email">Email: </label>
      <input id="email" v-model.trim="form.email" type="email" />
    </div>
    <div>
      <label for="body">Body: </label>
      <textarea
        id="body"
        v-model.trim="form.body"
        cols="30"
        rows="10"
      ></textarea>
    </div>

    <button type="submit">確認する</button>
  </form>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Contact } from "@/types/models";

type Data = {
  form: Contact;
};

export default Vue.extend({
  props: {
    initialValue: {
      type: Object as PropType<Contact>,
      required: true
    }
  },

  data(): Data {
    return {
      form: { ...this.initialValue }
    };
  },

  methods: {
    handleSubmit() {
      this.$emit("submit", { ...this.form });
    }
  }
});
</script>
