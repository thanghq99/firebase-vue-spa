<template>
  <v-app id="inspire">
    <v-app-bar app color="#395b80" dense>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="white darken-1" size="32"></v-avatar>
        <!-- <v-container>
          <v-text-field
            label="New Animal"
            placeholder="Add new animal here"
            v-model="newAnimal"
          ></v-text-field>
          <v-btn @click="addAnimalFromParent">Add new animal</v-btn>
        </v-container> -->
        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <animal-list
        ref="animalList"
      ></animal-list>
    </v-main>
  </v-app>
</template>

<script>
import AnimalList from "./components/AnimalList.vue";

export default {
  name: "App",
  components: {
    AnimalList,
  },
  data: () => {
    return {
      //newAnimal: ''
    }
  },
  // methods: {
  //   addAnimalFromParent: function() {
  //     console.log(this.newAnimal)
  //     this.$refs.animalList.addAnimal()
  //   }
  // },
};
</script>
