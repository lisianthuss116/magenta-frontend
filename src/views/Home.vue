<template>
  <div class="home">
    <pre>{{users}}</pre>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      users: []
    };
  },
  async created() {
    await this.getUsers();
  },
  methods: {
    async getUsers() {
      const response = await this.$axios({
        method: "GET",
        url: "/users"
      });

      this.users = response.data.docs;
    }
  }
};
</script>
