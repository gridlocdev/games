<template>
  <div>
    <b-container class="bv-example-row">
      <div class="animate__animated animate__fadeIn" id="gameContainer">
        <b-row align-v="center">
          <b-col sm="12" md="7" lg="8" xl="8">
            <b-img fluid-grow :src="require('../assets/CubeSlidePreview.gif')"></b-img>
          </b-col>
          <b-col sm="12" md="5" lg="4" xl="4">
            <h4>
              <b>Cube Slide</b>
            </h4>
            <p>
              Here's Cube Slide, my first game! Maneuver around the obstacles and
              make your way to the goal!
            </p>
            <b-button
              class="button animate__animated animate__infinite animate__pulse"
              variant="primary"
              href="https://gridlocdev.github.io/cubeSlide/"
              style="width:100%;"
            >
              <b>Play</b>
            </b-button>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "CubeSlide",
  components: {}
};
</script>

<style>
#gameContainer {
  height: 600px;
  display: flex;
  align-items: center;
}
</style>
