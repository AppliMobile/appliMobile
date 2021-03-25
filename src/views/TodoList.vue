<template>
	<h1></h1>
	<form @submit.prevent="addTodo()">
		<label>Nouvelle tache </label>
		<input
			v-model="newTodo"
			name="newTodo"
			autocomplete="off"
		>
		<button>Ajouter</button>
	</form>
	<h2>Votre liste</h2>
	<ul>
		<li
			v-for="(todo, index) in todos"
			:key="index"
		>
			<span
				:class="{ done: todo.done }"
				@click="doneTodo(todo)"
			>{{ todo.content }}</span>
			<button @click="removeTodo(index)">supprimer</button>
		</li>
	</ul>
	<h4 v-if="todos.length === 0">Empty list.</h4>
</template>

<script>
	import { ref } from 'vue';
	export default {
		name: 'App',
		setup () {
			const newTodo = ref('');
			const defaultData = [{
				done: false,
				content: 'Write a blog post'
			}]
			const todosData = JSON.parse(localStorage.getItem('todos')) || defaultData;
			const todos = ref(todosData);
			function addTodo () {
				if (newTodo.value) {
					todos.value.push({
						done: false,
						content: newTodo.value
					});
					newTodo.value = '';
				}
				saveData();
			}
			function doneTodo (todo) {
				todo.done = !todo.done
				saveData();
			}
			function removeTodo (index) {
				todos.value.splice(index, 1);
				saveData();
			}
			function saveData () {
				const storageData = JSON.stringify(todos.value);
				localStorage.setItem('todos', storageData);
			}
			return {
				todos,
				newTodo,
				addTodo,
				doneTodo,
				removeTodo,
				saveData
			}
		}
	}
</script>

<style lang="scss">
$border: 2px solid
	rgba(
		$color: white,
		$alpha: 0.35,
	);
$size1: 6px;
$size2: 10px;
$size3: 18px;
$size4: 24px;
$size5: 30px;
$backgroundColor: white;
$textColor: white;
$primaryColor: lighblue;
$secondTextColor: #1f2023;
body {
	margin: 0;
	padding: 0;


	background-color: $backgroundColor;
	color: $textColor;
	#app {
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		padding: 20px;

		form {
			display: flex;
			flex-direction: column;
			width: 100%;
			label {
				font-size: 14px;
				font-weight: bold;
			}
			input,
			button {
				height: $size5;
				box-shadow: none;
				outline: none;
				padding-left: $size2;
				padding-right: $size2;
				border-radius: $size1;
				font-size: 18px;
				margin-top: $size1;
				margin-bottom: $size2;
                
			}
			input {
				background-color: lightgrey;
				border: $border;
				color: black;
			}
		}
		button {
			cursor: pointer;
			background-color: $primaryColor;
			border: 1px solid $primaryColor;
			color: $secondTextColor;
			font-weight: bold;

			border-radius: $size1;
            margin-right: 100px;
            margin-left: 100px;
		}
		h2 {
			font-size: 22px;
			border-bottom: $border;
			padding-bottom: $size1;
		}
		ul {
			padding: 10px;
			li {
				display: flex;
				justify-content: space-between;
				align-items: center;
				border: $border;
				padding: $size2 $size4;
				border-radius: $size1;
				margin-bottom: $size2;
				span {
					cursor: pointer;
				}
				.done {
					text-decoration: line-through;
				}
				button {
					font-size: $size2;
					padding: $size1;
				}
			}
		}
		h4 {
			text-align: center;
			opacity: 0.5;
			margin: 0;
		}
	}
}
</style>



