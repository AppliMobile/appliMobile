<template>


  <h1>todolist</h1>
  <input type="checkbox" v-on:change='checkTodo'>{{box.name}}
  <ul>

  <li class="todo" :class="{completed: todo.completed}" v-for="todo in todos" v-bind:key="todo.id">
  <input type="checkbox" v-model="todo.completed">
  {{todo.name}}</li>
  </ul>
  <span>{{remaining}}</span> Taches restantes








</template>

<script>


export default {
  name: 'App',

  data(){
  return{

  box:{
  name: 'uncheck all',
  completed : false
  },

  todos: [

  {
  id: 1,
  name : 'tache 1',
  completed : true
  },
  {
  id: 2,
  name : 'tache 2',
  completed: true
  },
  {
  id: 3,
  name : 'tache 3',
  completed : false
  },
  {
  id: 4,
  name : 'tache 4',
  completed : false
  },

],

  newTodo: '',
  filter:'all'
}
},

    methods: {


    checkTodo(){
    if (this.box.completed==true){
    this.todos.forEach(todo => {todo.completed=true})
    this.box.completed=false
    this.box.name = 'uncheck all'
    }else{
    this.todos.forEach(todo => {todo.completed=false})
    this.box.completed=true
    this.box.name='check all'
    }
    console.log(this.box.completed)
    },

    filterTaches(){
    this.todos.forEach("todo in tachesAfaire")


    }


    },

    components: {
},

  computed:{
    remaining(){
    return this.todos.filter(todo => !todo.completed).length
    },

    tachesAfaire(){
    return this.todos.filter(todo => !todo.completed)

    }


  }

}


</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  li.todo{
        color: red;
    }
    li.completed{
        color: green;
    }

</style>
