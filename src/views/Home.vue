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
        <form
          class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg flex flex-col mx-auto mb-8"
          @submit.prevent="addTask"
          action=""
        >
          <label
            class="block text-xs font-semibold text-gray-600 uppercase text-left"
            for="body"
            >Contenu</label
          >
          <br />
          <input
            class="block w-full py-3 px-1 mt-2 
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
            v-model="form.body"
            type="text"
            name="body"
            id="body"
            placeholder="task content"
          />
          <br />
          <label
            class="block text-xs font-semibold text-gray-600 uppercase text-left"
            for="done"
            >Effectuée</label
          >
          <input
            class="form-checkbox h-5 w-5 text-gray-600 cursor-pointer mt-6 mb-12"
            v-model="form.done"
            type="checkbox"
            name="done"
            id="done"
          />
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
