import { Meta, StoryObj } from "@storybook/react";
import { Button } from '../components/button/Button'
import { InfoCircleOutlined } from '@ant-design/icons';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        handleClick: {action: 'Button has been clicked'},
        children: {
            control: { type: 'boolean' },
            options: ['true', 'false'],
            mapping: {
                true: <InfoCircleOutlined />,
                false: '',
            }
        }
    }
}

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'Default Button',
        mode: 'dark',
        type: 'primary'
    }
}

export const Light: Story = {
    parameters: {
        backgrounds: { default: 'dark'}
    },
    args: {
        label: 'Light Button',
        mode: 'light',
        type: 'primary'
    }
}

export const Secondary: Story = {
    args: {
        label: 'Secondary Button',
        mode: 'dark',
        type: 'secondary'
    }
}
export const SecondaryLight: Story = {
    parameters: {
        backgrounds: { default: 'dark'}
    },
    args: {
        label: 'Secondary / Light Button',
        mode: 'light',
        type: 'secondary',
        
    }
}