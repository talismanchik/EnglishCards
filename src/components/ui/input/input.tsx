import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import Eye from '@/assets/icons/eye'
import EyeOff from '@/assets/icons/eyeOff'
import Search from '@/assets/icons/search'
import { Typography } from '@/components/ui/typography/typography'
import clsx from 'clsx'

/* eslint-disable */
import s from './input.module.scss' //eslint-ignore

type TextFieldProps = {
  onValueChange?: (value: string) => void
  type?: string
  placeholder?: string
  errorMessage?: string
  label?: string
  disabled?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, TextFieldProps>(
  ({
     type,
     placeholder,
     errorMessage,
     label,
     onValueChange,
     onChange,
     disabled,
     ...otherProps
   }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const isPasswordButtonShow = type === 'password'
    const isSearchButtonShow = type === 'search'

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e)
      }
      if (onValueChange) {
        onValueChange(e.target.value)
      }
    }
    const classNames = {
      root: clsx(s.root),
      fieldContainer: clsx(s.fieldContainer),
      field: clsx(
        s.field,
        errorMessage && s.error,
        isSearchButtonShow ? s.fieldWithSearch : s.fieldWithOutSearch,
        disabled && s.disabledLabel
      ),
      label: clsx(s.label, disabled && s.disabledLabel),
      errorLabel: clsx(s.errorLabel),
    }

    return (
      <div className={classNames.root}>
        {!isSearchButtonShow && (
          <div>
            <Typography variant={'body2'} className={classNames.label}>
              {label}
            </Typography>
          </div>
        )}
        <div className={classNames.fieldContainer}>
          {isSearchButtonShow && (
            <div>
              <button className={s.showSearch}>
                <Search />
              </button>
            </div>
          )}
          <input
            type={showPassword ? 'text' : type}
            placeholder={errorMessage ? errorMessage : placeholder}
            onChange={onChangeHandler}
            className={classNames.field}
            disabled={disabled}
            ref={ref}
            {...otherProps}
          />
          {isPasswordButtonShow && (
            <button className={s.showPassword} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          )}

        </div>
        <div>
          <Typography className={classNames.errorLabel} variant={'caption'}>
            {errorMessage}
          </Typography>
        </div>
      </div>
    )
  }
)
