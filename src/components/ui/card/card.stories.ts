import { Meta, StoryObj } from '@storybook/react'

import { Card } from './card'

const meta = {
  argTypes: {},
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Card1: Story = {
  args: {
    children: '',
  },
}
