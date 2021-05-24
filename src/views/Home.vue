<template>
  <div class="home">
    <h1
      class="text-2xl text-white font-bold"
      v-if="Object.keys(data).length == 0"
    >
      Veuillez-vous connecter!
    </h1>
    <div v-else class="tasks">
      <div v-if="showNewForm">
        <form @submit.prevent="addTask" action="">
          <label for="body">Contenu</label> <br />
          <input v-model="form.body" type="text" name="body" id="body" /> <br />
          <label for="done">Effectuée</label>
          <input v-model="form.done" type="checkbox" name="done" id="done" />
          <button
            class="mb-6 border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Ajouter
          </button>
        </form>
      </div>
      <button
        class="mb-6 border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        v-if="!showNewForm"
        @click.prevent="showNewTaskForm"
      >
        Ajouter une tâche
      </button>
      <Task
        v-for="task in tasks"
        :key="task"
        :class="{ done: task.done }"
        class="w-96 flex flex-column justify-center items-center m-auto"
        :done="task.done"
        :body="task.body"
        :id="task.id"
      ></Task>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import Task from "../components/Task";

export default {
  name: "Home",
  components: { Task },
  data() {
    return {
      showNewForm: false,
      form: {
        body: "",
        done: false,
      },
    };
  },
  computed: {
    ...mapGetters(["tasks"]),
    data() {
      if (Object.keys(this.$store.getters.data).length != 0) {
        this.$store.dispatch("tasks");
      }
      return this.$store.getters.data;
    },
  },
  methods: {
    /* show(task) {
      console.log(task.id);
    }, */
    showNewTaskForm() {
      this.showNewForm = true;
    },
    addTask() {
      this.$store.dispatch("addTask", this.form);
      this.content = "";
      this.showNewForm = false;
    },
  },
  /* watch: {
    data(){
      this.$store.dispatch('tasks');
    },
    deep: true
  } */
  /* created() {
    this.$store.watch(()=>{
      return this.$store.getters.data
    },
    (newValue)=>{
      if(newValue != null)
        this.$store.dispatch('tasks');
    },
      {
        deep:true
      }
    )
  }, */
};
</script>
<style scoped>
input:checked + svg {
  display: block;
}
</style>
