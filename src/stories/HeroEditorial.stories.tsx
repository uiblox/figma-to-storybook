import {Meta, StoryObj } from '@storybook/react'
import { HeroEditorial } from '../components/heroEditorial/HeroEditorial'

const meta: Meta<typeof HeroEditorial> = {
    title: 'Components/HeroEditorial',
    component: HeroEditorial,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>


export const Default: Story = {
    args: {
        reverse: false
    }
}

export const reverse: Story = {
    args: {
        reverse: true
    }
}