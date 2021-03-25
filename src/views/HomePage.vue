<template>
  <div id="welcome">
    <h1>TodoList</h1>
    <div class="cta">
      <router-link to="/signup">Register</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/myList">Ma liste</router-link>
    </div>
  </div>
</template>

<style scoped>
  #welcome {
    width: 80%;
    margin: auto;
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  .cta {
    width: 300px;
    margin: auto;
    text-align: center;
  }

  .cta a {
    margin: 10px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid black;
    border-radius: 3px;
    width: 100px;
    padding: 10px;
    box-sizing: border-box;
    color: black;
  }

  .cta a:hover,
  .cta a:active {
    background-color: rgb(73, 73, 143);
    color: white;
  }
</style>