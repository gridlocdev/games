<template>
  <div>
    <b-container class="bv-example-row">
      <div class="animate__animated animate__fadeIn" id="gameContainer">
        <b-row align-v="center">
          <b-col sm="12" md="6" lg="6" xl="6">
            <h4>
              <b>About Me</b>
            </h4>
            <p>I'm a software developer by trade, but I make games too. I like long walks on the beach, and hanging with the bros on a saturday night. I'm 6'2", and feel just as comfortable in jeans and a T-shirt as I do in a cocktail dress and heels.</p>
            <p>If you didn't notice already, the dude in the picture is not me. That would be sweet though.</p>
          </b-col>
          <b-col sm="12" md="6" lg="6" xl="6">
            <b-img fluid-grow :src="require('../assets/abs.jpg')"></b-img>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "about",
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
