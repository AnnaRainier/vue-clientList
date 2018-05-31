<template>
  <div id="app">
    <div class="clients">
      <client-search></client-search>
      <client-list ></client-list>
    </div>
    
    <client-details class="details"></client-details>

  </div>
</template>

<script>
import ClientList from './components/ClientList'
import ClientDetails from './components/ClientDetails'
import ClientSearch from './components/ClientSearch'


export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    ClientList,
    ClientDetails,
    ClientSearch
  }
}
</script>

<style>
.clients {
  width: 50%;
  display: inline-block;
}
.details {
  display: inline-block;
  vertical-align: top;
}

</style>
