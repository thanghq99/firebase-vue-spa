<template>
  <div>
    <v-dialog max-width="1000" v-model="dialog" persistent>
      <template v-slot:activator="{ on }">
        <v-btn text small color="primary" v-on="on">{{ btnName }}</v-btn>
      </template>
      <v-card>
        <v-card-title>Add new animal</v-card-title>
        <v-card-text>
          <v-form :readonly="isReadOnly" ref="inputForm">
            <v-tabs
              v-model="tab"
              background-color="transparent"
              color="basil"
              fixed-tabs
            >
              <v-tab href="#id"> ID </v-tab>
              <v-tab href="#name"> Name </v-tab>
              <v-tab href="#type-and-status"> Type & Status</v-tab>
              <v-tab href="#location"> Location </v-tab>
              <v-tab href="#photo-notes-contributer"> Additional info </v-tab>
              <v-tabs-items v-model="tab">
                <v-tab-item value="id">
                  <v-container class="pa-2 ma-2">
                    <v-text-field
                      outlined
                      dense
                      label="Base museum number"
                      v-model="sample.baseMuseumNumber"
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      label="Field number"
                      v-model="sample.fieldNumber"
                    ></v-text-field>
                  </v-container>
                </v-tab-item>
                <v-tab-item value="name">
                  <v-container class="pa-2 ma-2">
                    <v-text-field
                      outlined
                      dense
                      label="Scientific name"
                      v-model="sample.scientificName"
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      label="Class"
                      v-model="sample.animalClass"
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      label="Order"
                      v-model="sample.order"
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      label="Family"
                      v-model="sample.family"
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      label="Genus"
                      v-model="sample.genus"
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      label="Vietnamese name"
                      v-model="sample.vienameseName"
                    ></v-text-field>
                  </v-container>
                </v-tab-item>
                <v-tab-item value="type-and-status">
                  <v-container class="pa-2 ma-2">
                    <v-row>
                      <v-col>
                        <v-row>
                          <v-col>
                            <v-container fluid>
                              <h2>Chose type of sample</h2>
                              <v-checkbox
                                dense
                                v-model="sample.specimenType"
                                label="Research sample"
                                value="Research sample"
                                hide-details
                              ></v-checkbox>
                              <v-checkbox
                                dense
                                v-model="sample.specimenType"
                                label="Display sample"
                                value="Display sample"
                                hide-details
                              ></v-checkbox>
                            </v-container>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col>
                            <v-textarea
                              label="Status"
                              v-model="sample.status"
                              height="257"
                              no-resize
                              hide-details
                              outlined
                            >
                            </v-textarea>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col>
                        <v-row>
                          <v-col>
                            <v-text-field
                              hide-details
                              outlined
                              dense
                              label="Length"
                              v-model="sample.sampleLength"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="3">
                            <v-select
                              v-model="selectListDimentions[0]"
                              :items="lengthUnits"
                              label="Length unit"
                              :readonly="false"
                              solo
                              dense
                            ></v-select>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col>
                            <v-text-field
                              hide-details
                              outlined
                              dense
                              label="Height"
                              v-model="sample.height"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="3">
                            <v-select
                              v-model="selectListDimentions[1]"
                              :items="lengthUnits"
                              label="Height unit"
                              solo
                              dense
                            ></v-select>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col>
                            <v-text-field
                              hide-details
                              outlined
                              dense
                              label="Width"
                              v-model="sample.width"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="3">
                            <v-select
                              v-model="selectListDimentions[2]"
                              :items="lengthUnits"
                              label="Witdh unit"
                              solo
                              dense
                            ></v-select>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col>
                            <v-text-field
                              hide-details
                              outlined
                              dense
                              label="Weight"
                              v-model="sample.weight"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="3">
                            <v-select
                              v-model="selectListDimentions[3]"
                              :items="weightUnits"
                              label="Weight unit"
                              solo
                              dense
                            ></v-select>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col>
                            <v-text-field
                              hide-details
                              outlined
                              dense
                              label="Volume"
                              v-model="sample.volume"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="3">
                            <v-select
                              v-model="selectListDimentions[4]"
                              :items="volumeUnits"
                              label="Volume unit"
                              solo
                              dense
                            ></v-select>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-tab-item>
                <v-tab-item value="location">
                  <v-container class="pa-2 ma-2">
                    <v-row>
                      <v-col>
                        <v-menu
                          v-model="datePickermenu"
                          :close-on-content-click="false"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              outlined
                              dense
                              v-model="sample.sampleCollectingTime"
                              label="Sampling time"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            no-title
                            scrollable
                            v-model="sample.sampleCollectingTime"
                            @input="datePickermenu = false"
                          ></v-date-picker>
                        </v-menu>
                        <v-text-field
                          outlined
                          dense
                          label="Sample Collector"
                          v-model="sample.sampleCollector"
                        ></v-text-field>
                        <v-text-field
                          outlined
                          dense
                          label="Sampling Method"
                          v-model="sample.samplingMethod"
                        ></v-text-field>
                      </v-col>
                      <v-col>
                        <v-textarea
                          label="Project information"
                          v-model="sample.projectInfo"
                          height="173"
                          no-resize
                          hide-details
                          outlined
                        >
                        </v-textarea>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <h2>Chose the sampling location</h2>
                        <v-radio-group
                          v-model="sample.samplingLocation"
                          row
                          mandatory
                        >
                          <v-radio label="Land" value="Land"></v-radio>
                          <v-radio label="Island" value="Island"></v-radio>
                          <v-radio label="Sea" value="Sea"></v-radio>
                        </v-radio-group>
                        <!-- <v-text-field
                          outlined
                          dense
                          label="Country"
                          v-model="sample.country"
                        ></v-text-field> -->
                        <v-combobox
                          v-model="sample.country"
                          :items="countries"
                          label="Country"
                          outlined
                          dense
                        ></v-combobox>
                        <v-text-field
                          outlined
                          dense
                          v-if="sample.country == 'Viet Nam'"
                          :disabled="isSea"
                          label="Provincial"
                          v-model="sample.provincial"
                        ></v-text-field>
                        <v-text-field
                          outlined
                          dense
                          :disabled="isSea"
                          v-if="sample.country == 'Viet Nam'"
                          label="District"
                          v-model="sample.district"
                        ></v-text-field>
                        <v-text-field
                          outlined
                          dense
                          v-if="sample.country == 'Viet Nam'"
                          :disabled="isSeaOrIsland"
                          label="Ward"
                          v-model="sample.ward"
                        ></v-text-field>
                      </v-col>
                      <v-col>
                        <h2>Coordinates</h2>
                        <v-radio-group v-model="coordinateType" row mandatory>
                          <v-radio
                            label="Decimal Degrees"
                            value="decimal"
                          ></v-radio>
                          <v-radio
                            label="Degrees Minutes Seconds"
                            value="dms"
                          ></v-radio>
                        </v-radio-group>
                        <v-container
                          class="pa-0 ma-a"
                          v-if="coordinateType === 'decimal'"
                        >
                          <v-text-field
                            outlined
                            dense
                            label="Latitude"
                            v-model="sample.dLatitude"
                          ></v-text-field>
                          <v-text-field
                            outlined
                            dense
                            label="Longtitude"
                            v-model="sample.dLongitude"
                          ></v-text-field>
                        </v-container>
                        <v-container
                          class="pa-0 ma-a"
                          v-else-if="coordinateType === 'dms'"
                        >
                          <h3>Latitude</h3>
                          <v-row dense>
                            <v-col cols="4">
                              <v-text-field
                                outlined
                                dense
                                label="Degrees"
                                v-model="sample.dmsLatitude.degrees"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="4">
                              <v-text-field
                                outlined
                                dense
                                label="Minutes"
                                v-model="sample.dmsLatitude.minutes"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="4">
                              <v-text-field
                                outlined
                                dense
                                label="Second"
                                v-model="sample.dmsLatitude.seconds"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <h3>Longitude</h3>
                          <v-row dense>
                            <v-col cols="4">
                              <v-text-field
                                outlined
                                dense
                                label="Degrees"
                                v-model="sample.dmsLongitude.degrees"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="4">
                              <v-text-field
                                outlined
                                dense
                                label="Minutes"
                                v-model="sample.dmsLongitude.minutes"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="4">
                              <v-text-field
                                outlined
                                dense
                                label="Second"
                                v-model="sample.dmsLongitude.seconds"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-tab-item>
                <v-tab-item value="photo-notes-contributer">
                  <v-container class="pa-2 ma-2">
                    <v-textarea
                      no-resize
                      hide-details
                      outlined
                      label="Description"
                      v-model="sample.description"
                    >
                    </v-textarea>
                    <v-combobox
                      v-model="sample.placeOfDistribution"
                      :items="areas"
                      label="Place of Distribution"
                      class="mt-4"
                      outlined
                      dense
                      multiple
                      chips
                      small-chips
                    ></v-combobox>
                    <v-text-field
                      outlined
                      dense
                      label="Specimen Contributer"
                      v-model="sample.specimenContributer"
                    ></v-text-field>
                    <div v-if="isAdmin == true && isModify == false">
                      <h2>Upload an image to Firebase:</h2>
                      <input
                        id="file-input"
                        type="file"
                        @change="previewImage"
                        accept="image/*"
                      />
                    </div>
                  </v-container>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>
            <v-btn
              class="mr-4"
              v-if="isAdmin == true && isModify == false"
              @click="submit"
              >Submit</v-btn
            >
            <v-btn class="mr-4" v-if="isModify == true" @click="modify"
              >Modify</v-btn
            >
            <v-btn class="mr-4" v-if="isReadOnly == true" @click="cancel"
              >Close</v-btn
            >
            <v-btn class="mr-4" v-if="isReadOnly == false" @click="cancel"
              >Cancel</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { db } from "../firebase/db";
import { countryList, areas } from "../datas/countries";

export default {
  name: "input-form",
  props: {
    sample: Object,
    btnName: String,
    isReadOnly: Boolean,
    isModify: Boolean,
    isAdmin: Boolean,
    id: String,
  },
  data() {
    return {
      tab: null,
      datePickermenu: false,
      coordinateType: "",
      areas: areas,
      countries: countryList,
      lengthUnits: ["mm", "cm", "m"],
      weightUnits: ["mg", "g", "kg"],
      volumeUnits: ["ml", "l"],
      selectListDimentions: ["mm", "mm", "mm", "mg", "ml"],
      imageData: null,
      picture: null,
      // toggle input
      dialog: false,
    };
  },
  methods: {
    previewImage(event) {
      console.log(event);
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    getDimensions() {
      //get lenght as mm
      if (this.selectListDimentions[0] == "cm") {
        this.sample.sampleLength = this.sample.sampleLength * 10;
      } else if (this.selectListDimentions[0] == "m") {
        this.sample.sampleLength = this.sample.sampleLength * 1000;
      }
      //get height as mm
      if (this.selectListDimentions[1] == "cm") {
        this.sample.height = this.sample.height * 10;
      } else if (this.selectListDimentions[1] == "m") {
        this.sample.height = this.sample.height * 1000;
      }
      //get width as mm
      if (this.selectListDimentions[2] == "cm") {
        this.sample.width = this.sample.width * 10;
      } else if (this.selectListDimentions[2] == "m") {
        this.sample.width = this.sample.width * 1000;
      }
      //get weight as mg
      if (this.selectListDimentions[3] == "g") {
        this.sample.weight = this.sample.weight * 1000;
      } else if (this.selectListDimentions[3] == "kg") {
        this.sample.weight = this.sample.weight * 1000000;
      }
      //get volume as ml
      if (this.selectListDimentions[4] == "l") {
        this.sample.volume = this.sample.volume * 1000;
      }
    },
    async submit() {
      //calculating
      this.getDimensions();
      //get timestamp
      var now = Date.now();
      //push to database
      try {
        this.sample.picture = null;
        const storageRef = db
          .storage()
          .ref(`${this.imageData.name}`)
          .put(this.imageData);
        storageRef.on(
          `state_changed`,
          (snapshot) => {
            this.uploadValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log(error.message);
          },
          () => {
            this.uploadValue = 100;
            storageRef.snapshot.ref.getDownloadURL().then((url) => {
              this.sample.picture = url;
              db.firestore()
                .collection("Animals")
                .add({
                  baseMuseumNumber: this.sample.baseMuseumNumber,
                  fieldNumber: this.sample.fieldNumber,
                  scientificName: this.sample.scientificName,
                  animalClass: this.sample.animalClass,
                  order: this.sample.order,
                  family: this.sample.family,
                  genus: this.sample.genus,
                  vienameseName: this.sample.vienameseName,
                  specimenType: this.sample.specimenType,
                  sampleLength: this.sample.sampleLength,
                  height: this.sample.height,
                  width: this.sample.width,
                  weight: this.sample.weight,
                  volume: this.sample.volume,
                  status: this.sample.status,
                  sampleCollectingTime: this.sample.sampleCollectingTime,
                  sampleCollector: this.sample.sampleCollector,
                  samplingMethod: this.sample.samplingMethod,
                  samplingLocation: this.sample.samplingLocation,
                  country: this.sample.country,
                  provincial: this.sample.provincial,
                  district: this.sample.district,
                  ward: this.sample.ward,
                  projectInfo: this.sample.projectInfo,
                  dLatitude: this.sample.dLatitude,
                  dLongitude: this.sample.dLongitude,
                  dmsLatitude: this.sample.dmsLatitude,
                  dmsLongitude: this.sample.dmsLongitude,
                  description: this.sample.description,
                  placeOfDistribution: this.sample.placeOfDistribution,
                  specimenContributer: this.sample.specimenContributer,
                  picture: this.sample.picture,
                  timestamp: now,
                })
                .then(() => {
                  console.log("Document successfully written!");
                  this.selectListDimentions =  ["mm", "mm", "mm", "mg", "ml"]
                  this.$refs.form.reset()
                });
            });
          }
        );
        this.dialog = false;
      } catch (e) {
        console.error("add doc error");
      }
    },
    async modify() {
      //calculating
      this.getDimensions();
      //get timestamp
      //var now = Date.now();
      //push to database
      try {
        await db.firestore().collection("Animals").doc(this.id).update({
          baseMuseumNumber: this.sample.baseMuseumNumber,
          fieldNumber: this.sample.fieldNumber,
          scientificName: this.sample.scientificName,
          animalClass: this.sample.animalClass,
          order: this.sample.order,
          family: this.sample.family,
          genus: this.sample.genus,
          vienameseName: this.sample.vienameseName,
          specimenType: this.sample.specimenType,
          sampleLength: this.sample.sampleLength,
          height: this.sample.height,
          width: this.sample.width,
          weight: this.sample.weight,
          volume: this.sample.volume,
          status: this.sample.status,
          sampleCollectingTime: this.sample.sampleCollectingTime,
          sampleCollector: this.sample.sampleCollector,
          samplingMethod: this.sample.samplingMethod,
          samplingLocation: this.sample.samplingLocation,
          country: this.sample.country,
          provincial: this.sample.provincial,
          district: this.sample.district,
          ward: this.sample.ward,
          projectInfo: this.sample.projectInfo,
          dLatitude: this.sample.dLatitude,
          dLongitude: this.sample.dLongitude,
          dmsLatitude: this.sample.dmsLatitude,
          dmsLongitude: this.sample.dmsLongitude,
          description: this.sample.description,
          placeOfDistribution: this.sample.placeOfDistribution,
          specimenContributer: this.sample.specimenContributer,
        })
        this.selectListDimentions =  ["mm", "mm", "mm", "mg", "ml"]
        this.dialog = false;
      } catch (e) {
        console.error("update error");
      }
    },
    cancel() {
      this.selectListDimentions =  ["mm", "mm", "mm", "mg", "ml"]
      this.$refs.inputForm.value = "";
      this.dialog = false;
    },
  },
  computed: {
    isSea() {
      if (this.sample.samplingLocation == "Sea") {
        return true;
      }
      return false;
    },
    isSeaOrIsland() {
      if (
        this.sample.samplingLocation == "Sea" ||
        this.sample.samplingLocation == "Island"
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
</style>