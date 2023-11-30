import { Meta, StoryObj } from "@storybook/react";
import { EditorialCardGroup } from "../components/editorialCardGroup/EditorialCardGroup";

const meta: Meta<typeof EditorialCardGroup> = {
    title: 'Components/EditorialCardGroup',
    component: EditorialCardGroup,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
}


export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        cards: 4
    }
}

export const ThreeCard: Story = {
    args: {
        cards: 3
    }
}

export const Pair: Story = {
    args: {
        cards: 2
    }
}