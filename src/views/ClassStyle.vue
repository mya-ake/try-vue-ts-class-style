<template>
  <div class="home">
    <h1>Class Style</h1>

    <SectionText :message="message">
      <template slot="headline">
        <h2>Text</h2>
      </template>
      <template>
        <p>slot text</p>
      </template>
    </SectionText>

    <SectionModel v-model="value" />

    <section>
      <h2>Form</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="input">Add Task：</label>
          <input id="input" v-model.trim="formText" type="text" />
        </div>
      </form>

      <template v-if="hasTasks">
        <ul>
          <template v-for="task in tasks">
            <li :key="task.id">{{ task.body }}</li>
          </template>
        </ul>
      </template>
      <template v-else>
        <p>No tasks</p>
      </template>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { v4 as uuid } from "uuid";
import SectionText from "@/components/SectionText.vue";
import SectionModel from "@/components/SectionModel.vue";
import { Task } from "@/types/models";

@Component({
  components: {
    SectionText,
    SectionModel
  }
})
export default class ClassStyle extends Vue {
  message = "text message";
  value = "";
  formText = "";
  tasks: Task[] = [];

  get hasTasks() {
    return this.tasks.length > 0;
  }

  handleSubmit() {
    if (this.formText === "") {
      return;
    }
    const task: Task = { id: uuid(), body: this.formText };
    this.tasks.push(task);
    this.formText = "";
  }
}
</script>
