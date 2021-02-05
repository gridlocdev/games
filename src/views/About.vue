<template>
  <div>
    <b-container class="bv-example-row">
      <div class="animate__animated animate__fadeIn" id="gameContainer">
        <b-row class="text-left" align-v="center">
          <b-col sm="12" md="6" lg="6" xl="6">
            <h4>
              <b>About Me</b>
            </h4>
            <p>
              I've been a software developer by trade since I graduated from
              university in 2019, and I also create games when I have some spare
              time.
            </p>
            <p>
              The projects I've built to show here have been a great experience
              to enhance my skills as a programmer and also to have something to
              look back on years down the line.
            </p>
            <p>
              Also, my favorite flavor of ice cream is cookie dough.
            </p>
          </b-col>
          <b-col sm="12" md="6" lg="6" xl="6">
            <b-img
              fluid-grow
              :src="require('../assets/aboutImage.jpg')"
            ></b-img>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "about",
  components: {},
};
</script>

<style>
#gameContainer {
  height: 600px;
  display: flex;
  align-items: center;
}
</style>
