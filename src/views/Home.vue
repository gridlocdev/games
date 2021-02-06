<template>
  <div class="home">
    <div>
      <b-jumbotron>
        <h1 class="animate__animated animate__lightSpeedInLeft">GridlocDev</h1>
        <p class="animate__animated animate__fadeIn animate__delay-1s">
          I like making games and other stuff
        </p>
        <p class="animate__animated animate__fadeIn animate__delay-1s">
          Check them out if they're cool
        </p>
        <b-button
          class="animate__animated animate__fadeIn animate__delay-1s"
          variant="primary"
          v-scroll-to="{ el: '#my-projects', offset: -50 }"
          >Get Started</b-button
        >
      </b-jumbotron>
    </div>
    <div
      class="animate__animated animate__fadeIn animate__delay-1s"
      id="my-projects"
    >
      <b-container class="bv-example-row">
        <b-row>
          <b-col
            v-for="project in projects"
            :key="project.id"
            sm="12"
            md="12"
            lg="6"
            xl="4"
          >
            <div>
              <b-card no-body class="overflow-hidden" style="max-width: 540px">
                <b-row no-gutters>
                  <b-col md="6">
                    <div
                      style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                      "
                    >
                      <router-link :to="project.links.previewPageRoute">
                        <b-card-img
                          :src="
                            require('../assets/' + project.imageName + '.png')
                          "
                          alt="Image"
                          class="rounded-0"
                        ></b-card-img>
                      </router-link>
                    </div>
                  </b-col>
                  <b-col md="6">
                    <b-card-body>
                      <h4>
                        <b-link
                          :to="{ path: project.links.previewPageRoute }"
                          >{{ project.title }}</b-link
                        >
                      </h4>
                      <router-link :to="project.links.previewPageRoute">
                        <b-card-text class="nobold">
                          {{ project.description }}</b-card-text
                        >
                      </router-link>
                      <b-button
                        class="button animate__animated animate__infinite animate__pulse"
                        variant="primary"
                        :href="project.links.playURL"
                        >Play</b-button
                      >
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </div>
          </b-col>
          <b-col sm="12" md="12" lg="6" xl="4">
            <div>
              <b-card no-body class="overflow-hidden" style="max-width: 540px">
                <b-row no-gutters>
                  <b-col md="6">
                    <div
                      style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        background-color: grey;
                      "
                    >
                      <b-card-img
                        :src="
                          require('../assets/Under-construction-white.26c32086.png')
                        "
                        alt="Image"
                        class="rounded-0"
                      ></b-card-img>
                    </div>
                  </b-col>
                  <b-col md="6">
                    <b-card-body>
                      <h4>
                        <b>Coming Soon...</b>
                      </h4>
                      <b-card-text class="nobold"
                        >When I make a new project, it will be displayed
                        here!</b-card-text
                      >
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
  components: {},
  data: function () {
    return {
      projects: [
        {
          id: 0,
          title: "Cube Slide",
          description: "Slide left and right to make your way to the goal.",
          imageName: "CubeSlideImage",
          links: {
            previewPageRoute: "/CubeSlide",
            playURL: "https://gridlocdev.github.io/cubeSlide/",
          },
        },
        {
          id: 1,
          title: "Text Adventure",
          description: "Play and create interactive stories.",
          imageName: "TextAdventureImage",
          links: {
            previewPageRoute: "/TextAdventure",
            playURL: "https://gridlocdev.github.io/textadventure/",
          },
        },
        {
          id: 2,
          title: "Drum Machine",
          description: "Play a virtual drumkit using your keyboard.",
          imageName: "DrumMachineImage",
          links: {
            previewPageRoute: "/DrumMachine",
            playURL: "https://gridlocdev.github.io/drummachine/",
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
#my-projects {
  margin: 5% 0%;
}

.jumbotron h1 {
  font-weight: bold;
}
a {
  color: rgba(0, 0, 0, 0.75);
  font-weight: bold;
}
a:hover,
a:active {
  transition: 0.2s;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
a .nobold {
  font-weight: normal;
}
a .nobold:hover {
  color: rgba(0, 0, 0, 0.75);
}

.card:hover {
  transition: 0.3s;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 16px 0px,
    rgba(0, 0, 0, 0.19) 0px 6px 20px 0px !important;
}

.button {
  margin: 10%;
  color: white;
}
.button:hover,
button:hover {
  color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 16px 0px,
    rgba(0, 0, 0, 0.19) 0px 6px 20px 0px !important;
}
</style>
