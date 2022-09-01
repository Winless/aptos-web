let aptos = require("aptos");
const NODE_URL = process.env.APTOS_NODE_URL || "https://fullnode.devnet.aptoslabs.com";
const client = new aptos.AptosClient(NODE_URL);
const pk = "0xc88f3671e180f915cc1284995c5fb0b02bc4cb61e4e184f419494fed7ee80525::message::MessageHolder"
  export default {
    getMessage: async function(address) {
      let response = await client.getAccountResources(address).then();
      let result = response.filter(i => i.type === pk)
      return result[0].data.message
    }
  }