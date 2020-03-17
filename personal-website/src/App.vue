<template>
  <div id="app">
  <div id="menu">
      <router-link to="/">
        <div class="menu-item">
          <p>HOME</p>
        </div>
      </router-link>
      <router-link to="/resume">
        <div class="menu-item">
          <p>Resume</p>
        </div>
      </router-link>
      <a href="https://www.linkedin.com/in/matthew-c-george/">
        <div class="menu-item">
          <p>Linkedin</p>
        </div>
      </a>
      <router-link to="/doggo">
        <div class="menu-item">
        <p>Doggos</p>
        </div>
      </router-link>
  </div>
  <router-view />
  </div>
</template>

<style>
  #menu {
  display: flex;
  margin-bottom: 50px;
  background-color: #77cbe7;
}

#menu a {
  color: black;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  margin: 10px;
}

.menu-item p {
  margin: 0px;
}

</style>
