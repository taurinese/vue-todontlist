<template>
  <div>
    <div class="flex flex-col h-screen bg-gray-100">
      <!-- Auth Card Container -->
      <div class="grid place-items-center mx-2 my-20 sm:my-auto">
        <!-- Auth Card -->
        <div
          class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <!-- Card Title -->
          <h2
            class="text-center font-semibold text-3xl lg:text-4xl text-gray-800"
          >
            Register
          </h2>
          <form class="mt-10" @submit.prevent="formValidation" action="">
            <!-- Name Input -->

            <label
              for="name"
              class="block text-xs font-semibold text-gray-600 uppercase text-left"
              >Name</label
            >
            <div
              v-if="errors.name.length > 0"
              class="block w-full py-3 px-1 mt-2 
                            text-white text-lg appearance-none 
                            border-b-2 border-gray-100
                            bg-red-500"
            >
              <div v-for="error in errors.name" :key="error">{{ error }}</div>
            </div>
            <input
              v-model="form.name"
              id="name"
              type="text"
              name="name"
              placeholder="name"
              autocomplete="name"
              class="block w-full py-3 px-1 mt-2 
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
            />
            <!-- Email Input -->

            <label
              for="email"
              class="block mt-8 text-xs font-semibold text-gray-600 uppercase text-left"
              >E-mail</label
            >
            <div
              v-if="errors.email.length > 0"
              class="block w-full py-3 px-1 mt-2 
                            text-white text-lg appearance-none 
                            border-b-2 border-gray-100
                            bg-red-500"
            >
              <div v-for="error in errors.email" :key="error">{{ error }}</div>
            </div>
            <input
              v-model="form.email"
              id="email"
              type="email"
              name="email"
              placeholder="e-mail address"
              autocomplete="email"
              class="block w-full py-3 px-1 mt-2 
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
            />

            <!-- Password Input -->
            <label
              for="password"
              class="block mt-8 text-xs font-semibold text-gray-600 uppercase text-left"
              >Password</label
            >
            <div
              v-if="errors.password.length > 0"
              class="block w-full py-3 px-1 mt-2 
                            text-white text-lg appearance-none 
                            border-b-2 border-gray-100
                            bg-red-500"
            >
              <div v-for="error in errors.password" :key="error">
                {{ error }}
              </div>
            </div>
            <input
              v-model="form.password"
              id="password"
              type="password"
              name="password"
              placeholder="password"
              autocomplete="current-password"
              class="block w-full py-3 px-1 mt-2 mb-4
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
            />

            <!-- Auth Buttton -->
            <button
              type="submit"
              class="w-full py-3 mt-10 bg-gray-800 rounded-sm
                            font-medium text-white uppercase
                            focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      form: {
        email: "",
        password: "",
        name: "",
      },
      errors: {
        name: [],
        email: [],
        password: [],
      },
    };
  },
  methods: {
    ...mapActions(["register"]),
    formValidation() {
      this.errors.name = [];
      this.errors.email = [];
      this.errors.password = [];
      if (this.form.name.trim().length == 0) {
        this.errors.name.push("This field is required");
      }
      if (this.form.email.trim().length == 0) {
        this.errors.email.push("This field is required");
      }
      if (!this.validateEmail(this.form.email)) {
        this.errors.email.push("Email is not valid");
      }
      if (this.form.password.trim().length == 0) {
        this.errors.password.push("This field is required");
      }
      if (
        this.errors.password.length > 0 ||
        this.errors.email.length > 0 ||
        this.errors.name.length > 0
      )
        return;
      this.register(this.form);
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
};
</script>

<style scoped></style>
