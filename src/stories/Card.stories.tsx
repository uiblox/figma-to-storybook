import type { Meta, StoryObj, } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { Card } from '../components/card/Card';

const meta = {
    title: 'Components/Card',
    component: Card,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        handleCardConfirmClick: {action: 'Confirm card button selected'},
    },
  } satisfies Meta<typeof Card>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const Primary: Story = {
    args: {
      label: 'Default',
      msg: 'short informative message.',
    },
  };


  export const Success: Story = {
    args: {
      label: 'Success',
      msg: 'informative message.',
      type: 'success',
    },
  };

  export const Warning: Story = {
    args: {
      label: 'Warning',
      msg: 'informative message.',
      type: 'warn'
    },
  };

  export const Error: Story = {
    args: {
      label: 'Error',
      msg: 'informative message.',
      type: 'error'
    },
  };

