import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '@/components/ui/input/input'

const meta = {
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
}

export const Password: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'password',
  },
}

export const Search: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'search',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
  },
}

export const Error: Story = {
  args: {
    errorMessage: 'ErrorMessage',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
  },
}
