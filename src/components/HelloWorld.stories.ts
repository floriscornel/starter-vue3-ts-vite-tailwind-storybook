import { Meta, StoryFn } from '@storybook/vue3';

import HelloWorld from './HelloWorld.vue';

export default {
  title: 'User/HelloWorld',
  component: HelloWorld,
  argTypes: {
    msg: {
      control: 'text'
    },
  },
} as Meta<typeof HelloWorld>;

export const Default: StoryFn<typeof HelloWorld> = (args) => ({
  components: { HelloWorld },
  setup() {
    return { args };
  },
  template: '<HelloWorld v-bind="args" />',
});

Default.args = {
  msg: "Hello Dear World",
};