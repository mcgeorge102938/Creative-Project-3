<template>
  <div class="doggo">
    <div class='pets'>
    <h1>Cute dogs just cause</h1>
    <button @click="showTheDoggos">Click To show new Doggos</button>
    <div class='animal-columns'>
        <div class='animal-column'>
            <div class='adoptee'>
                <div id="img1"></div>
            </div>
            <div class='adoptee'>
              <div id="img2"></div>                
            </div>
            <div class='adoptee'>
              <div id="img3"></div>             
          </div>
          <div class='adoptee'>
              <div id="img10"></div>                
            </div>
            <div class='adoptee'>
              <div id="img11"></div>                
            </div>
            <div class='adoptee'>
              <div id="img12"></div>             
          </div>
        </div>

        <div class='animal-column'>
            <div class='adoptee'>
              <div id="img4"></div>
            </div>
            <div class='adoptee'>
              <div id="img5"></div>                
            </div>
            <div class='adoptee'>
              <div id="img6"></div>                
            </div>
            <div class='adoptee'>
              <div id="img13"></div>                
            </div>
            <div class='adoptee'>
              <div id="img14"></div>                
            </div>
            <div class='adoptee'>
              <div id="img15"></div>             
          </div>
        </div>

        <div class='animal-column'>
            <div class='adoptee'>
              <div id="img7"></div>                
            </div>
            <div class='adoptee'>
              <div id="img8"></div>                
            </div>
            <div class='adoptee'>
              <div id="img9"></div>             
          </div>
          <div class='adoptee'>
              <div id="img16"></div>                
            </div>
            <div class='adoptee'>
              <div id="img17"></div>                
            </div>
            <div class='adoptee'>
              <div id="img18"></div>             
          </div>
        </div>
    </div>
    </div>
</div>
</template>




<style>
.pets {
  background-color: black;
}

.doggo {
  background-color: black;
  align-items: center;
  text-align: center;
}

.pets h1 {
  padding: 20px;
  color: white;
  text-align: center;
}

.pets button {
  background-color: #77cbe7;
  border: solid 1px black;
  height: 40px;
  font-style: oblique;
  margin-bottom: 25px;
  margin-top: 5px;
}

.animal-columns {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: black;
}

.animal-column {
    display: flex;
    flex-direction: column;
    width: 60%;
}

.adoptee {
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border: solid 10px black;
}

.pets img {
  width: 100%;
}

.pets h2 {
  font-size: 20px;
}

/* Desktop Styles */
  @media only screen and (min-width: 961px) {
    .animal-columns {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 100%;
    background-color: black;
    flex-direction: row;
    }
  .animal-column {
    display: flex;
    flex-direction: column;
    width: 27.5%;
    }
  }
</style>


<script>
export default {
  name: 'Doggo',
  methods: {
    showTheDoggos() {
      const url = "https://api.thedogapi.com/v1/images/search?limit=18";
        fetch(url)
          .then(function(response) {
            return response.json();
          }).then(function(json) {
          var image1 = "<img src='" + json[0].url + "'/>";
          if (json[0].breeds.length > 0) {
            image1 += "<h2>" + json[0].breeds[0].name + "</h2> <p>(Bred for: " + json[0].breeds[0].bred_for + ")</p>";
          }
          else {
            image1 += "<h2>Breed Unknown</h2>";
          }
          document.getElementById("img1").innerHTML = image1;

          var image2 = "<img src='" + json[1].url + "'/>";
          if (json[1].breeds.length > 0) {
            image2 += "<h2>" + json[1].breeds[0].name + "</h2> <p>(Bred for: " + json[1].breeds[0].bred_for + ")</p>";
          }
          else {
            image2 += "<h2>Breed Unknown</h2>";
          }
          document.getElementById("img2").innerHTML = image2;

          var image3 = "<img src='" + json[2].url + "'/>";
          if (json[2].breeds.length > 0) {
            image3 += "<h2>" + json[2].breeds[0].name + "</h2> <p>(Bred for: " + json[2].breeds[0].bred_for + ")</p>";
          }
          else {
            image3 += "<h2>Breed Unknown</h2>";
          }
          document.getElementById("img3").innerHTML = image3;

          var image4 = "<img src='" + json[3].url + "'/>";
          if (json[3].breeds.length > 0) {
            image4 += "<h2>" + json[3].breeds[0].name + "</h2> <p>(Bred for: " + json[3].breeds[0].bred_for + ")</p>";
          }
          else {
            image4 += "<h2>Breed Unknown</h2>";
          }
          document.getElementById("img4").innerHTML = image4;

          var image5 = "<img src='" + json[4].url + "'/>";
          if (json[4].breeds.length > 0) {
            image5 += "<h2>" + json[4].breeds[0].name + "</h2> <p>(Bred for: " + json[4].breeds[0].bred_for + ")</p>";
          }
          else {
            image5 += "<h2>Breed Unknown</h2>";
          }
          document.getElementById("img5").innerHTML = image5;

          var image6 = "<img src='" + json[5].url + "'/>";
          if (json[5].breeds.length > 0) {
            image6 += "<h2>" + json[5].breeds[0].name + "</h2> <p>(Bred for: " + json[5].breeds[0].bred_for + ")</p>";
          }
          else {
            image6 += "<h2>Breed Unknown</h2>";
          }
          document.getElementById("img6").innerHTML = image6;

          var image7 = "<img src='" + json[6].url + "'/>";
          if (json[6].breeds.length > 0) {
            image7 += "<h2>" + json[6].breeds[0].name + "</h2> <p>(Bred for: " + json[6].breeds[0].bred_for + ")</p>";
          }
          else {
            image7 += "<h2>Breed Unknown</h2>";
          }
          document.getElementById("img7").innerHTML = image7;

          var image8 = "<img src='" + json[7].url + "'/>";
          if (json[7].breeds.length > 0) {
            image8 += "<h2>" + json[7].breeds[0].name + "</h2> <p>(Bred for: " + json[7].breeds[0].bred_for + ")</p>";
          }
          else {
            image8 += "<h2>Breed Unknown</h2>";
          }
          document.getElementById("img8").innerHTML = image8;

          var image9 = "<img src='" + json[8].url + "'/>";
          if (json[8].breeds.length > 0) {
            image9 += "<h2>" + json[8].breeds[0].name + "</h2> <p>(Bred for: " + json[8].breeds[0].bred_for + ")</p>";
          }
          else {
            image9 += "<h2>Breed Unknown</h2>";
          }
          document.getElementById("img9").innerHTML = image9;

          var image10 = "<img src='" + json[9].url + "'/>";
          if (json[9].breeds.length > 0) {
            image10 += "<h2>" + json[9].breeds[0].name + "</h2> <p>(Bred for: " + json[9].breeds[0].bred_for + ")</p>";
          }
          else {
            image10 += "<h2>Breed Unknown</h2>";
          }
          document.getElementById("img10").innerHTML = image10;

          var image11 = "<img src='" + json[10].url + "'/>";
          if (json[10].breeds.length > 0) {
            image11 += "<h2>" + json[10].breeds[0].name + "</h2> <p>(Bred for: " + json[10].breeds[0].bred_for + ")</p>";
          }
          else {
            image11 += "<h2>Breed Unknown</h2>";
          }
          document.getElementById("img11").innerHTML = image11;

          var image12 = "<img src='" + json[11].url + "'/>";
          if (json[11].breeds.length > 0) {
            image12 += "<h2>" + json[11].breeds[0].name + "</h2> <p>(Bred for: " + json[11].breeds[0].bred_for + ")</p>";
          }
          else {
            image12 += "<h2>Breed Unknown</h2>";
          }
          document.getElementById("img12").innerHTML = image12;

          var image13 = "<img src='" + json[12].url + "'/>";
          if (json[12].breeds.length > 0) {
            image13 += "<h2>" + json[12].breeds[0].name + "</h2>  <p>(Bred for: " + json[12].breeds[0].bred_for + ")</p>";
          }
          else {
            image13 += "<h2>Breed Unknown</h2>";
          }
          document.getElementById("img13").innerHTML = image13;

          var image14 = "<img src='" + json[13].url + "'/>";
          if (json[13].breeds.length > 0) {
            image14 += "<h2>" + json[13].breeds[0].name + "</h2>  <p>(Bred for: " + json[13].breeds[0].bred_for + ")</p>";
          }
          else {
            image14 += "<h2>Breed Unknown</h2>";
          }
          document.getElementById("img14").innerHTML = image14;

          var image15 = "<img src='" + json[14].url + "'/>";
          if (json[14].breeds.length > 0) {
            image15 += "<h2>" + json[14].breeds[0].name + "</h2>  <p>(Bred for: " + json[14].breeds[0].bred_for + ")</p>";
          }
          else {
            image15 += "<h2>Breed Unknown</h2>";
          }
          document.getElementById("img15").innerHTML = image15;

          var image16 = "<img src='" + json[15].url + "'/>";
          if (json[15].breeds.length > 0) {
            image16 += "<h2>" + json[15].breeds[0].name + "</h2>  <p>(Bred for: " + json[15].breeds[0].bred_for + ")</p>";
          }
          else {
            image16 += "<h2>Breed Unknown</h2>";
          }
          document.getElementById("img16").innerHTML = image16;

          var image17 = "<img src='" + json[16].url + "'/>";
          if (json[16].breeds.length > 0) {
            image17 += "<h2>" + json[16].breeds[0].name + "</h2>  <p>(Bred for: " + json[16].breeds[0].bred_for + ")</p>";
          }
          else {
            image17 += "<h2>Breed Unknown</h2>";
          }
          document.getElementById("img17").innerHTML = image17;

          var image18 = "<img src='" + json[17].url + "'/>";
          if (json[17].breeds.length > 0) {
            image18 += "<h2>" + json[17].breeds[0].name + "</h2>  <p>(Bred for: " + json[17].breeds[0].bred_for + ")</p>";
          }
          else {
            image18 += "<h2>Breed Unknown</h2>";
          }
          document.getElementById("img18").innerHTML = image18;
        });
    }
  }
}
</script>
