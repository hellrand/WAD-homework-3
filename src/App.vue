<template>
  <nav>
    <router-link to="/" class="nav-link">Home</router-link> |
    <!-- <router-link to="/about">About</router-link> -->
    <!-- <router-link to="/addPost" class="nav-link">Add post</router-link> |-->
    <router-link to="/login">Log in</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: rgba(238, 238, 238, 0.722);
  border-radius: 8px;
}

nav a {
  font-weight: bold;
  /*color: #2c3e50;*/
  text-decoration: none;
  color: black;
  padding: 5px 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a:hover {
    background-color: #e4e4e4c4;
    border: 1px;
    border-radius: 5px;
}
</style>
