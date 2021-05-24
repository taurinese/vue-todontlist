<template>
  <div class="w-96 bg-indigo-700 text-white p-8 rounded-lg mb-6 relative">
    <label class="inline-flex w-full items-center justify-left mt-3">
      <input
        type="checkbox"
        class="form-checkbox h-5 w-5 text-gray-600 cursor-pointer"
        @click="checkboxPressed"
        :checked="taskDone"
      />
      <span v-if="!textInput" class="ml-2 text-white">{{ taskBody }}</span>
      <input
        v-else
        v-model="taskBody"
        class="ml-2 px-2 w-full text-gray-800 rounded-md focus:outline-none"
        type="text"
      />
    </label>
    <div
      v-if="!textInput"
      class="absolute top-4 right-4 flex flex-row items-center justify-between w-12"
    >
      <img
        @click="editBtnPressed"
        class="w-4 h-4 icon-white cursor-pointer"
        src="../assets/pencil.svg"
        alt=""
      />
      <img
        @click="deleteBtnPressed"
        class="w-4 h-4 icon-white cursor-pointer"
        src="../assets/cancel.svg"
        alt=""
      />
    </div>
    <div
      v-else
      class="absolute top-4 right-8 flex flex-row items-center justify-end w-12"
    >
      <img
        @click="editBtnPressed"
        class="w-4 h-4 icon-white cursor-pointer"
        src="../assets/cocher.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Task",
  props: ["done", "body", "id"],
  data() {
    return {
      taskDone: false,
      taskBody: "",
      textInput: false,
    };
  },
  mounted() {
    this.taskDone = this.done;
    this.taskBody = this.body;
  } /* ,
  computed: {
      isTaskDone(){
          return this.taskDone;
      }
  } */,
  methods: {
    ...mapActions(["updateTask", "deleteTask"]),
    checkboxPressed() {
      this.taskDone = !this.taskDone;
      //   this.$emit("checkbox");
      this.updateTask({
        id: this.id,
        content: this.taskBody,
        done: this.taskDone,
      });
    },
    editBtnPressed() {
      if (this.textInput) {
        this.updateTask({
          id: this.id,
          content: this.taskBody,
          done: this.taskDone,
        });
      }
      this.textInput = !this.textInput;
    },
    deleteBtnPressed() {
      this.deleteTask(this.id);
    },
  },
};
</script>

<style scoped>
.icon-white {
  filter: brightness(0) invert(1);
}
</style>
