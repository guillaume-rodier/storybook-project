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

    size: {
      type: String,
      required: false,
      default: "medium",
      validator(value) {
        // The value must match one of these strings
        return ["small", "medium", "large"].includes(value)
      },
    },
  },

  computed: {
    computedClass() {
      return [
        `stbk-btn_${this.size}`,
        this.error ? "stbk-btn_danger" : "stbk-btn_default",
      ];
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
@mixin btn-properties($padding, $fontSize, $borderRadius) { // Si aucune valeur n'est précisée alors $margin vaut 10px
  padding: $padding;
  font-size: $fontSize;
  border-radius: $borderRadius;
}

.stbk-btn {
  border: 0px;
  transition: 90ms linear;
  color: var(--main-button-text-color);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    // filter: brightness(50%);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  }

  &_small {
    @include btn-properties(4px 20px, 13px, 20px);
  }

  &_medium {
    @include btn-properties(8px 24px, 16px, 22px);
  }

  &_large {
    @include btn-properties(12px 26px, 20px, 24px);
  }

  &_danger {
    background: var(--danger-color);
  }

  &_default {
    background: var(--main-primary-color);
  }
}
</style>
