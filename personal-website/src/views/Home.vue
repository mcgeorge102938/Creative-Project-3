<template>
  <div class="home">
    <div class="header">
      <h1>Matthew George</h1>
    </div>
    <div id="checkerTop">
      <div class="checkerblankTopWide" id="checkerTop1"></div>
      <div class="checkerInfoTop" id="checkerTop2"><p><strong>My Resume</strong></p></div>
      <div class="checkerblankTop" id="checkerTop3"></div>
      <div class="checkerInfoTop" id="checkerTop4"><p><strong>Linkedin</strong></p></div>
      <div class="checkerblankTop" id="checkerTop5"></div>
      <div class="checkerInfoTop" id="checkerTop6"><p><strong>Pics of Dogs</strong></p></div>
      <div class="checkerblankTopWide" id="checkerTop7"></div>
    </div>
    <div id="checkerBottom">
      <div class="checkerblankBottomWide" id="checkerBottom1"></div>
      <div class="checkerInfoBottom" id="checkerBottom2"><router-link to="/resume"><img src="/images/cartoonResume.jpeg"/></router-link></div>
      <div class="checkerblankBottom" id="checkerBottom3"></div>
      <div class="checkerInfoBottom" id="checkerBottom4"><a href="https://www.linkedin.com/in/matthew-c-george/"><img src="/images/linkedin.jpg"/></a></div>
      <div class="checkerblankBottom" id="checkerBottom5"></div>
      <div class="checkerInfoBottom" id="checkerBottom6"><router-link to="/doggo"><img src='/images/cuteDog1.jpeg'/></router-link></div>
      <div class="checkerblankBottomWide" id="checkerBottom7"></div>
    </div>
    <div class="blankSpace"></div>
  </div>
</template>


<style>
  #app {
    background-color: black;
    width: 100%;
  }
  .header {
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
  }
  .header h1 {
    font-size: 75px;
    color: #77cbe7;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
  }
  #checkerTop {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 80px;
  }
  .checkerblankTopWide {
    background-color: black;
    width: 20%;
    
  }
  .checkerInfoTop {
    justify-content: center;
    text-align: center;
    line-height: 75px;
    background-color: white;
    width: 15%;
    align-items: center;
    font-size: 22px;
  }
  .checkerblankTop {
    width: 7.5%;
    background-color: black;
  }
  #checkerBottom {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 260px;
  }
  #checkerBottom6 {
    display: flex;
    align-items: center;
    padding-bottom: 15px;
  }
  #checkerBottom6 img {
    width: 80%;
  }
  .checkerblankBottomWide {
    background-color: #77cbe7;
    width: 20.2%;
  }
  .checkerInfoBottom {
    justify-content: center;
    text-align: center;
    background-color: white;
    width: 15.3%;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    
  }
  .checkerblankBottom {
    width: 7.5%;
    background-color: #77cbe7;
  }
  .blankSpace {
    width: 100%;
    height: 100px;
    background-color: #77cbe7;
  }
</style>
