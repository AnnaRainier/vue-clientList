<template>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Avatar</th>
      <th scope="col">Name</th>
      <th scope="col">Job titme</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(client,i) in clients" :key="i" @click="clientSelected(client)">
      <th scope="row">{{i+1}}</th>
      <td><img :src="client.general.avatar"></td>
      <td>{{ client.general.firstName }} {{client.general.lastName }}</td>
      <td>{{ client.job.title }}</td>
    </tr>
  </tbody>
</table>
</template>
<script>
export default {
    data() {
        return {
            clients: []
        }
    },
    created() {
        this.clients = this.$store.getters.getClients;
        //console.log(this.clients);
        this.$store.dispatch("transformClientsArray", this.clients) && console.log('dispatch was made');
        
    },
    computed: {

    },
    methods: {
        clientSelected(client) {
            this.$store.dispatch("clientSelected", client)
        }
    }
    
    
}
</script>
<style>

</style>


