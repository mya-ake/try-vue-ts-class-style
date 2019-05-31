<template>
  <div>
    <h1>Contact</h1>

    <ContactForm :initial-value="form" @submit="handleSubmit" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ContactForm from "@/components/ContactForm.vue";
import { contactStore } from "@/store/contact";
import { Contact } from "@/types/models";

type Data = {
  form: Contact;
};

export default Vue.extend({
  components: {
    ContactForm
  },

  data(): Data {
    return {
      form: {
        title: "",
        email: "",
        body: ""
      }
    };
  },

  methods: {
    async handleSubmit(form: Contact) {
      await contactStore.saveValues(form);
      this.$router.push("/contact/confirm");
    }
  }
});
</script>
