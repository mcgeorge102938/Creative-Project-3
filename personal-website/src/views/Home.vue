<template>
  <div class="home">
    <div class="top">
      <div class="topLeft">
        <h1>Matthew</h1>
      </div>
      <div class="topRight">
        <router-link to="/resume"><img src="/images/cartoonResume.jpeg"/></router-link>
        <a href="https://www.linkedin.com/in/matthew-c-george/"><img src="/images/linkedin.jpg"/></a>
      </div>
    </div>
    <div class="bottom">
      <div class="bottomLeft">
        <router-link to="/doggo"><img src='/images/cuteDog1.jpeg'/></router-link>
      </div>
      <div class="bottomRight">
        <h1>George</h1>
      </div>
    </div>
    <div class="blankSpace"></div>
  </div>
</template>


<style>
  #app {
    background-color: black;
    width: 100%;
  }
  .top h1 {
    font-size: 70px;
    color: #77cbe7;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
  }
  .bottom h1 {
    font-size: 70px;
    color: #77cbe7;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
  }
  .blankSpace {
    width: 100%;
    height: 20px;
    background-color: black;
  }
  .top {
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
  }
  .bottom {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
  }
  .topLeft {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px white;
  }
  .topRight {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: solid 1px white;
    flex-direction: column;
    height: 100%;
  }
  .bottomLeft {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px white;
    flex-direction: column;
  }
  .topRight img {
    width: 200px;
  }
  .bottomLeft img {
    width: 260px;
    padding: 20px;
  }
  .bottomRight {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px white;
  }

  /* Desktop Styles */
  @media only screen and (min-width: 961px) {
    .top h1 {
    font-size: 100px;
    color: #77cbe7;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
  }
  .bottom h1 {
    font-size: 100px;
    color: #77cbe7;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
  }
    .top {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: row;
  }
  .bottom {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: row;
  }
  .topLeft {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px white;
  }
  .topRight {
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: solid 1px white;
    flex-direction: row;
  }
  .bottomLeft {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px white;
    flex-direction: row;
  }
  .topRight img {
    width: 200px;
  }
  .bottomLeft img {
    width: 260px;
  }
  .bottomRight {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px white;
  }
  .blankSpace {
    width: 100%;
    height: 100px;
    background-color: black;
  }
  }
</style>
