import { FC } from 'react'

import { Typography } from '@/components/ui/typography/typography'
import { Indicator, Root } from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  label?: string
  onChange?: (checked: boolean) => void
  position?: 'left'
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  className,
  disabled,
  label,
  onChange,
  position,
}) => {
  const classNames = {
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled, position === 'left' && s.left),
    container: clsx(s.container, className),
    indicator: clsx(s.indicator),
    label: clsx(s.label, disabled && s.disabled),
    root: clsx(s.root),
  }

  return (
    <div className={classNames.container}>
      <Typography as={'label'} className={classNames.label} htmlFor={'c1'} variant={'body2'}>
        <div className={classNames.buttonWrapper}>
          <Root
            checked={checked}
            className={classNames.root}
            disabled={disabled}
            id={'c1'}
            onCheckedChange={onChange}
          >
            <Indicator className={classNames.indicator}>
              <CheckIcon />
            </Indicator>
          </Root>
        </div>
        {label}
      </Typography>
    </div>
  )
}
