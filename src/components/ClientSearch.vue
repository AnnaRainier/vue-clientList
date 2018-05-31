<template>
    <div>
        <input type="text" class="form-control" placeholder="Type to search..." v-model="searchedText">
    </div>
</template>
<script>
import _ from 'lodash';

export default {
    data() {
        return {
            searchedText: '',
            clients: this.$store.getters.getClients
        }
    }, 
    watch: {
        searchedText: function() {
            console.log(this.searchedText);
        }
    }
    
}
</script>
<style>

</style>


