<template>
    <v-container>
      <v-row>
        <v-col
            v-for="sample in sortedSamples"
            :key="sample.id"
            lg="3"
            md="4"
            sm="6"
            xs="8"
          >
            <item-card :sample="sample" :isAdmin="isAdmin" @trigger-remove="deleteSample"></item-card>
          </v-col>
      </v-row>
    </v-container>
</template>

<script>
import { db } from "../firebase/db";
import ItemCard from './ItemCard.vue';

export default {
  name: "sample-list",
  components: { ItemCard },
  props: {
    isAdmin: Boolean,
  },
  data: () => {
    return {
      samples: [],
      sortedSamples: [],
    };
  },
  firestore: {
    samples: db.firestore().collection("Animals"),
    sortedSamples: db.firestore().collection("Animals").orderBy("timestamp", "desc")
  },
  methods: {
    deleteSample(id) {
      db.firestore().collection("Animals").doc(id).delete();
    },
  },
};
</script>

<style>
</style>