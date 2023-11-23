import { Meta, StoryObj } from "@storybook/react";
import { Button } from '../components/button/Button'
import { InfoCircleOutlined } from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import React from "react";

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
    }
}

export const Light: Story = {
    parameters: {
        backgrounds: { default: 'dark'}
    },
    args: {
        label: 'Light Button',
        mode: 'light'
    }
}

export const Secondary: Story = {
    args: {
        label: 'Secondary Button',
        type: 'secondary'
    }
}
export const SecondaryLight: Story = {
    parameters: {
        backgrounds: { default: 'dark'}
    },
    args: {
        label: 'Secondary Light Button',
        type: 'secondary',
        mode: 'light'
    }
}

// export const DefaultSecondary: Story = {
//     args: {
//         label: 'Default secondary',
//         type: 'secondary'
//     }
// }

// export const SmallSecondary: Story = {
//     args: {
//         label: 'Small secondary',
//         size: 'sm',
//         type: 'secondary',
//     },
// }

// export const LargeSecondary: Story = {
//     args: {
//         label: 'Large secondary',
//         size: 'lg',
//         type: 'secondary'
//     }
// }