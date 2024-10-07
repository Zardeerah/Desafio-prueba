<template>
    <div class="contact">
      <h1>Contáctanos</h1>
      <form>
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="name">
        
  
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'contact',
    data() {
      return {
        name: '',
        
      }
    }
  }
  </script>