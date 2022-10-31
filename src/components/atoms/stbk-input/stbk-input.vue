<template>
    <div>
        <label>{{ label }}</label>
        <input type="text" />
    </div>
</template>

<script>
export default {
    name: "StbkInput",

    props: {
        label: {
            type: String,
            required: true,
            default: "",
        },

        name: {
            type: String,
            required: true,
            default: "",
        },

        type: {
            type: String,
            required: false,
            default: "text",
            validator(value) {
                // The value must match one of these strings
                return ['text', 'color', 'date', 'email', 'datetime-local', 'month', 'number', 'url', 'search', 'tel'].includes(value)
            }
        },

        error: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
};
</script>

<style lang="scss" scoped>

</style>
