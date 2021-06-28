<template>
  <v-app id="inspire">
    <v-app-bar app color="#c0fcd0">
      <v-container class="pl-2 ma-0">
          <v-avatar size="48" color="#c0fcd0">
          <v-img src="https://vnmncollection.vast.vn/guest/logo.png"></v-img>
        </v-avatar>
      </v-container>
      <v-spacer></v-spacer>
      <v-btn text small v-if="isAdmin == false" @click="login">Login</v-btn>
      <v-container class="pa-0 ma-0" v-if="isAdmin == true">
        <v-row justify="end">
          <input-form
            v-if="isAdmin"
            :sample="newSample"
            btnName="Add new sample"
            :isAdmin="isAdmin"
            :isModify="false"
          />
          <v-btn text small @click="logout">Logout</v-btn>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <samples-list :isAdmin="isAdmin" :isDisabled="false"></samples-list>
    </v-main>
  </v-app>
</template>

<script>
import SamplesList from "./components/SamplesList.vue";
import InputForm from "./components/InputForm.vue";
import { db } from "./firebase/db";

export default {
  name: "App",
  components: {
    SamplesList,
    InputForm,
  },
  data() {
    return {
      newSample: {
        // animal attributes
        //id
        baseMuseumNumber: "",
        fieldNumber: "",
        //name
        scientificName: "",
        animalClass: "",
        order: "",
        family: "",
        genus: "",
        vienameseName: "",
        //type-and-status
        specimenType: [],
        sampleLength: 0,
        height: 0,
        width: 0,
        weight: 0,
        volume: 0,
        status: "",
        //location information
        sampleCollectingTime: "",
        sampleCollector: "",
        samplingMethod: "",
        samplingLocation: "",
        country: "",
        provincial: "",
        district: "",
        ward: "",
        projectInfo: "",
        dLatitude: "",
        dLongitude: "",
        dmsLatitude: {
          degrees: "",
          minutes: "",
          seconds: "",
        },
        dmsLongitude: {
          degrees: "",
          minutes: "",
          seconds: "",
        },
        // additional information
        description: "",
        placeOfDistribution: [],
        specimenContributer: "",
        picture: "",
      },
      isAdmin: false,
    };
  },
  methods: {
    async login() {
      db.auth()
        .signInWithEmailAndPassword("admin@admin.com", "admin123")
        .then(() => {
          // Signed in
          this.isAdmin = true;
        })
        .catch((error) => {
          console.error(error.code + " : " + error.message);
        });
    },
    logout() {
      db.auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          this.isAdmin = false;
        })
        .catch((error) => {
          console.error(error.code + " : " + error.message);
        });
    },
  },
};
</script>
