import { Meta, StoryFn } from '@storybook/vue3';

import CsvEditor from './CsvEditor.vue';

export default {
  title: 'User/CsvEditor',
  component: CsvEditor,
  argTypes: {
    encoding: {
      control: 'text'
    },
  },
} as Meta<typeof CsvEditor>;

export const Default: StoryFn<typeof CsvEditor> = (args) => ({
  components: { CsvEditor },
  setup() {
    return { args };
  },
  template: '<CsvEditor v-bind="args" />',
});

Default.args = {
  encoding: 'utf-8',
};