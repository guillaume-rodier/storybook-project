<template>
  <button
    class="stbk-btn"
    :class="computedClass"
    @click="btnClicked"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "stbkBtn",

  props: {
    label: {
      type: String,
      required: true,
      default: "",
    },

    error: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    computedClass() {
      return this.error ? "stbk-btn_danger" : "stbk-btn_default";
    },
  },

  methods: {
    btnClicked() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.stbk-btn {
  padding: 5px 20px;
  border-radius: 20px;
  border: 0px;
  transition: 90ms linear;
  color: var(--main-button-text-color);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    // filter: brightness(50%);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  }

  &_danger {
    background: var(--danger-color);
  }

  &_default {
    background: var(--main-primary-color);
  }
}
</style>
