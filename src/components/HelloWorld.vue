<template>
  <div class="hello">{{ address }}</div>
  <div>
    <input placeholder="input message" v-model="inputMessage">
    <button v-on:click="submit">submit</button>
  </div>
  <div>
    submited message: {{show}}
  </div>
</template>

<script>
import aptos from "./aptos"
export default {
  name: 'HelloWorld',
  data() {
    return {
      address: "",
      inputMessage: "",
      show: ""
    } 
  },
  async mounted() {
    setTimeout(async() => {
      window.aptos.connect()
    this.address = (await window.aptos.account()).address;
    this.show = await aptos.getMessage(this.address);
    }, 2000)
  
  },
  methods: {
    async submit() {
      let self = this;
        const transaction = {
          type: "entry_function_payload",
          function: `0xc88f3671e180f915cc1284995c5fb0b02bc4cb61e4e184f419494fed7ee80525::message::set_message`,
          arguments: [this.inputMessage],
          type_arguments: [],
        };
        await window.aptos.signAndSubmitTransaction(transaction);
        setTimeout(async () => { self.show = await aptos.getMessage(self.address)}, 2000)
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
