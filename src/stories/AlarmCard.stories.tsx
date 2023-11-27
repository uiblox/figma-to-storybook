import type { Meta, StoryObj, } from '@storybook/react';
// import { action } from '@storybook/addon-actions'
import { AlarmCard } from '../components/alarmCard/AlarmCard'

const meta = {
    title: 'Components/AlarmCard',
    component: AlarmCard,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        handleCardConfirmClick: {action: 'Confirm card button selected'},
    },
  } satisfies Meta<typeof AlarmCard>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const Inofrmation: Story = {
    args: {
      label: 'Lorem ipsum',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      type: 'info',
    },
  };


  export const Success: Story = {
    args: {
      label: 'Lorem ipsum',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      type: 'success',
    },
  };

  export const Warning: Story = {
    args: {
      label: 'Lorem ipsum',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      type: 'warn'
    },
  };

  export const Error: Story = {
    args: {
      label: 'Lorem ipsum',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      type: 'error'
    },
  };

