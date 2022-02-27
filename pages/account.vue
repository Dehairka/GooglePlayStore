<template>
    <div class="accountPage">
        <div v-if="isAuthenticated" class="name">
          {{ loggedInUser.username }}
        </div>
        <div v-else class="login">
          login
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'AccountPage',
  layout: 'defaultLayout',
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
}
</script>