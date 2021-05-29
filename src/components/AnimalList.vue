<template>
  <div class="pt-2">
    <v-container>
      <v-text-field
        label="New Animal"
        placeholder="Add new animal here"
        v-model="newAnimal"
      ></v-text-field>
      <v-btn @click="addAnimal">Add new animal</v-btn>
    </v-container>
    <v-container>
      <v-row>
        <v-col v-for="animal in animals" :key="animal.id" cols="3">
          <v-card height="200">
            <v-col>
              <v-row>{{ animal.name }}</v-row>
              <v-row>
                <v-btn @click="deleteAnimal(animal.id)">Delete</v-btn>
              </v-row>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { db } from "../firebase/db";

export default {
  name: "animal-list",
  //props: ["newAnimal"],
  data: () => {
    return {
      animals: [],
      newAnimal: ''
    };
  },
  firestore: {
    animals: db.collection("Animals"),
  },
  methods: {
    async addAnimal() {
      if (this.newAnimal) {
        await db.collection("Animals").add({
          name: this.newAnimal,
        });
      }
    },
    deleteAnimal(id) {
      db.collection("Animals").doc(id).delete();
    },
  },
};
</script>

<style>
</style>