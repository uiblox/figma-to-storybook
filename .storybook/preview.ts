import type { Preview } from '@storybook/react'

const customViewports = {
  desktopXL: {
    name: 'desktopXL',
    styles: {
      width: '1400px',
      height: '100%',
    },
  },
};

const preview: Preview = {
  parameters: {
    viewport: { viewports: customViewports },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}


export default preview
