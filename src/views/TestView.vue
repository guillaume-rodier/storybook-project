<template>
  <div class="testPage">
    <h1>This is an about page</h1>
    <StbkBtn
      label="test"
      :error="true"
      @click="clickedBtn"
    />
  </div>
</template>

<script>
import StbkBtn from "@/components/atoms/stbk-btn.vue/stbk-btn.vue";

export default {
  name: "TestView",

  props: {
    msg: String
  },

  components: {
    StbkBtn,
  },

  methods: {
    clickedBtn() {
      console.log("btnClicked received by parent");
    },
  },
};
</script>
