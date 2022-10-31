// stbk-btn.stories.js

import StbkBtn from "@/components/atoms/stbk-btn.vue/stbk-btn.vue";


//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button for Storybook',
  component: StbkBtn,
};

//👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { StbkBtn },
  props: Object.keys(argTypes),
  template: '<StbkBtn v-bind="$props"/>',
});

export const StbkButtonStory = Template.bind({});
StbkButtonStory.args = {
    label: "test",
    size: "medium",
    error: "errorBtn",
};
