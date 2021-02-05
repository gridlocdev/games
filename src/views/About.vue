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
              I'm a software developer by trade, and I also create games when I
              have some spare time.
            </p>
            <p>
              I like long walks on the beach, and hanging with the bros on a
              saturday night. I'm 6'2", and in general feel just as comfortable
              as I do in jeans and a T-shirt as I do in a cocktail dress and
              heels; which is not very.
            </p>
            <p>
              If you didn't notice already, the dude in the picture is not me.
              That would be sweet though.
            </p>
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
