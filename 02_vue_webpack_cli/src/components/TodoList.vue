<template>
  <div class="todo-list">
    <h2>{{ category }}</h2>
    <input v-model="newTodo" type="text" v-on:keydown.enter="addTodo" />
    <button @click="addTodo">+</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id" :id="todo.id">
        <span>{{ todo.content }}</span>
        <button @click="removeTodo(todo.id)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      todos: [],
      newTodo: ""
    };
  },
  methods: {
    addTodo: function() {
      if (this.newTodo) {
        this.todos.push({
          id: new Date().getTime(),
          completed: false,
          content: this.newTodo
        });
        this.newTodo = "";
      }
    },
    removeTodo: function(id) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== id;
      });
    }
  }
};
</script>

<style>
  .todo-list {
    display: inline-block;
    width: 31%;
  }
</style>