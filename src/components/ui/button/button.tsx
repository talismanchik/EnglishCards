import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'
export type ButtonProps<T extends ElementType> = {
  as?: T
  children?: ReactNode
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    className,
    fullWidth,
    variant = 'primary',
    ...otherProps
  } = props

  const classNames = {
    root: clsx(s[variant], fullWidth && s.fullWidth, className),
  }

  return <Component className={classNames.root} {...otherProps} />
}
