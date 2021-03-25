<template>
<<<<<<< HEAD
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
=======


  <h1>todolist</h1>
  <input type="checkbox" v-on:change='checkTodo'>{{box.name}}
  <ul>

  <li class="todo" :class="{completed: todo.completed}" v-for="todo in todos" v-bind:key="todo.id">
  <input type="checkbox" v-model="todo.completed">
  {{todo.name}}</li>
  </ul>
  <span>{{remaining}}</span> Taches restantes








>>>>>>> 8ed6816b320023969a0f0dd2d294e45c0bcb4af5
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

<<<<<<< HEAD
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
=======
>>>>>>> 8ed6816b320023969a0f0dd2d294e45c0bcb4af5
</style>
