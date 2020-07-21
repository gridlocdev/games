<template>
  <div class="home">
    <div>
      <b-jumbotron>
        <h1 class="animate__animated animate__lightSpeedInLeft">GridlocDev</h1>
        <p>I like making games and stuff</p>
        <p>Check them out if they're cool</p>
        <b-button variant="primary" @click="router.push('/about')">Get Started</b-button>
      </b-jumbotron>
    </div>
    <div id="my-games">
      <b-container class="bv-example-row">
        <b-row>
          <b-col sm="12" md="12" lg="6" xl="4">
            <div>
              <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-row no-gutters>
                  <b-col md="6">
                    <div
                      style="  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;"
                    >
                      <router-link to="/CubeSlide">
                        <b-card-img
                          :src="require('../assets/CubeSlideImage.png')"
                          alt="Image"
                          class="rounded-0"
                        ></b-card-img>
                      </router-link>
                    </div>
                  </b-col>
                  <b-col md="6">
                    <b-card-body>
                      <h4>
                        <b-link :to="{ path: '/CubeSlide'}">Cube Slide</b-link>
                      </h4>
                      <router-link to="/CubeSlide">
                        <b-card-text
                          class="nobold"
                        >Slide left and right to make your way to the goal.</b-card-text>
                      </router-link>
                      <b-button
                        class="button animate__animated animate__infinite animate__pulse"
                        variant="primary"
                        href="https://gridlocdev.github.io/cubeSlide/"
                      >Play</b-button>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </div>
          </b-col>
          <b-col sm="12" md="12" lg="6" xl="4">
            <div>
              <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-row no-gutters>
                  <b-col md="6">
                    <div
                      style="  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;"
                    >
                      <router-link to="/CubeSlide">
                        <b-card-img
                          :src="require('../assets/CubeSlideImage.png')"
                          alt="Image"
                          class="rounded-0"
                        ></b-card-img>
                      </router-link>
                    </div>
                  </b-col>
                  <b-col md="6">
                    <b-card-body>
                      <h4>
                        <b-link :to="{ path: '/CubeSlide'}">Cube Slide</b-link>
                      </h4>
                      <router-link to="/CubeSlide">
                        <b-card-text
                          class="nobold"
                        >Slide left and right to make your way to the goal.</b-card-text>
                      </router-link>
                      <b-button
                        class="button animate__animated animate__infinite animate__pulse"
                        variant="primary"
                        href="https://gridlocdev.github.io/cubeSlide/"
                      >Play</b-button>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </div>
          </b-col>
          <b-col sm="12" md="12" lg="6" xl="4">
            <div>
              <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-row no-gutters>
                  <b-col md="6">
                    <div
                      style="  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;"
                    >
                      <router-link to="/CubeSlide">
                        <b-card-img
                          :src="require('../assets/CubeSlideImage.png')"
                          alt="Image"
                          class="rounded-0"
                        ></b-card-img>
                      </router-link>
                    </div>
                  </b-col>
                  <b-col md="6">
                    <b-card-body>
                      <h4>
                        <b-link :to="{ path: '/CubeSlide'}">Cube Slide</b-link>
                      </h4>
                      <router-link to="/CubeSlide">
                        <b-card-text
                          class="nobold"
                        >Slide left and right to make your way to the goal.</b-card-text>
                      </router-link>
                      <b-button
                        class="button animate__animated animate__infinite animate__pulse"
                        variant="primary"
                        href="https://gridlocdev.github.io/cubeSlide/"
                      >Play</b-button>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
a {
  color: rgba(0, 0, 0, 0.75);
  font-weight: bold;
}
a:hover {
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
a .nobold {
  font-weight: normal;
}
a .nobold:hover {
  color: rgba(0, 0, 0, 0.75);
}
.button {
  margin: 10%;
  color: white;
}
</style>
