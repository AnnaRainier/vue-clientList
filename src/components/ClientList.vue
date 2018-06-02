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
  <tbody v-if="!matchedClients">
    <tr v-for="(client,i) in clients" :key="i" @click="clientSelected(client)">
      <th scope="row">{{i+1}}</th>
      <td><img :src="client.general.avatar"></td>
      <td>{{ client.general.firstName }} {{client.general.lastName }}</td>
      <td>{{ client.job.title }}</td>
    </tr>
  </tbody>
  <tbody v-else>
      <tr v-for="(client,i) in matchedClients" :key="i" @click="clientSelected(client)">
      <th scope="row">{{i+1}}</th>
      <td><img :src="client.avatar"></td>
      <td>{{ client.firstName }} {{client.lastName }}</td>
      <td>{{ client.title }}</td>
    </tr>
  </tbody>
</table>
</template>
<script>
export default {
    data() {
        return {
            clients: [],
            matchedClients: null
        }
    },
    created() {
        this.clients = this.$store.getters.getClients;
        //console.log(this.clients);
        this.$store.dispatch("transformClientsArray", this.clients) && console.log('dispatch was made');
    },
    computed: {
        searchClientsResult() {
            return this.$store.getters.getMatchedClients
        } 
    },
    watch: {
        searchClientsResult: function() {
            this.matchedClients = this.searchClientsResult;
            // console.log(this.matchedClients);
        }
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


