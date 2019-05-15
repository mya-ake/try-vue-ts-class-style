<template>
  <div class="home">
    <h1>Home</h1>

    <section>
      <h2>Text</h2>
      <p>{{ message }}</p>
      <p>{{ repeatMessage }}</p>
    </section>

    <section>
      <h2>Model</h2>
      <p>Value: {{ value }}</p>
      <input v-model="value" type="text" />
    </section>

    <section>
      <h2>Form</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="input">Add Task：</label>
          <input id="input" v-model="formText" type="text" />
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
import { Task } from "@/types/models";

@Component({
  components: {}
})
export default class Home extends Vue {
  message = "text message";
  value = "";
  formText = "";
  tasks: Task[] = [];

  get repeatMessage() {
    return this.message.repeat(2);
  }

  get hasTasks() {
    return this.tasks.length > 0;
  }

  handleSubmit() {
    const body = this.formText.trim();
    if (body === "") {
      return;
    }
    const task: Task = { id: uuid(), body };
    this.tasks.push(task);
    this.formText = "";
  }
}
</script>
