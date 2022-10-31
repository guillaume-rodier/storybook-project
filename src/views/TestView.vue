<template>
  <div class="testPage">
    <h1>This is an about page</h1>
    <StbkBtn
      label="test"
      size="medium"
      :error="errorBtn"
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

  data() {
    return {
      errorBtn: false,
    };
  },

  methods: {
    clickedBtn() {
      this.errorBtn = !this.errorBtn;
    },
  },
};
</script>
