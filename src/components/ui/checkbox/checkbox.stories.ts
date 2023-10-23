import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './checkbox'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxWithLabel: Story = {
  args: {
    checked: true,
    disabled: false,
    label: 'Click here',
  },
}
export const CheckboxWithoutLabel: Story = {
  args: {
    checked: true,
    disabled: false,
    label: '',
  },
}
