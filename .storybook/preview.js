import { app } from '@storybook/vue3'
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-light-indigo/theme.css';
app.use(PrimeVue);


import '../src/index.css'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}