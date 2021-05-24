<template>
  <div>
    <div class="flex items-center h-full w-full justify-center">
      <div class="w-96" v-if="user">
        <div class="bg-white shadow-xl rounded-lg py-3">
          <div class="photo-wrapper p-2">
            <img
              class="w-32 h-32 rounded-full mx-auto"
              src="../assets/utilisateur.svg"
              :alt="user.data.name"
            />
          </div>
          <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
              {{ user.data.name }}
            </h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
              <p>Mannequin 😏</p>
            </div>
            <table class="text-xs text-left my-3 mx-auto">
              <tbody>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Created at</td>
                  <td class="px-2 py-2">{{ user.data.created_at }}</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                  <td class="px-2 py-2">{{ user.data.email }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped></style>
