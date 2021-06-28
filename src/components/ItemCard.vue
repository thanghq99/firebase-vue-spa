<template>
  <v-card>
    <v-img height="165px" class="white--text align-end" :src="sample.picture">
      <v-card-title>{{ sample.scientificName }}</v-card-title>
    </v-img>
    <v-card-actions>
      <v-container class="ma-0 pa-0">
        <v-row justify="center" dense>
          <v-col class="d-flex justify-center">
            <input-form
              v-if="isAdmin == true"
              :id="sample.id"
              :sample="sample"
              btnName="Modify"
              :isReadOnly="false"
              :isModify="true" />
            <input-form
              v-if="isAdmin == false"
              :sample="sample"
              btnName="More"
              :isReadOnly="true"
              :isModify="false"
          /></v-col>
          <v-col class="d-flex justify-center">
            <v-btn text small color="error" @click="remove(sample.id)" v-if="isAdmin == true"
              >Delete</v-btn
            ></v-col
          >
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>
<script>
import InputForm from "./InputForm.vue";
export default {
  name: "item-card",
  components: {
    InputForm,
  },
  props: {
    sample: Object,
    isAdmin: Boolean,
  },
  data: () => {
    return {
      dialogOn: false,
    };
  },
  methods: {
    remove(id) {
      this.$emit("trigger-remove", id);
    },
  },
};
</script>
<style>
</style>