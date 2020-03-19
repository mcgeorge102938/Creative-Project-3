<template>
  <div class="doggo">
    <div class='pets'>
    <h1>Cute dogs just cause</h1>
    <button @click="showTheDoggos">Click To show new Doggos</button>
    <div class='animal-columns'>
        <div class='animal-column'>
          <div class='adoptee'>
                <div id="img0">
                  <p>Information Key:</p>
                  <div id="imageSample">
                    Image
                  </div>
                  <h2>Breed</h2>
                  <p><em>Breed type</em></p>
                  <p>(Bred for)</p>
                  <h3>Personality</h3>
                </div>
            </div>
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
  font-size: 25px;
}

.pets h3 {
  font-size: 16px;
}

#imageSample {
  width: 100%;
  padding: 20px;
  border: solid 1px black;
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
            console.log(json);
          
          for (var i = 0; i < 19; i++){
              var image = "<img src='" + json[i].url + "'/>";
              if (json[i].breeds.length > 0) {
                image += "<h2>" + json[i].breeds[0].name + "</h2> <p><em>" + json[i].breeds[0].breed_group + "</em></p> <p>(" + json[i].breeds[0].bred_for + ")</p> <h3>" + json[i].breeds[0].temperament + "</h3>";
              }
              else {
                image += "<h2>Breed Unknown</h2>";
              }
              var variable = "img" + (i + 1);
              document.getElementById(variable).innerHTML = image; 
          }
          });
          
    }
  }
}
</script>
