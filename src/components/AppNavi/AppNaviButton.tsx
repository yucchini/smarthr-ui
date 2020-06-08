import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Theme, useTheme } from '../../hooks/useTheme'

import { Props as IconProps } from '../Icon'
import { Active, InActiveStyle, getIconComponent } from './appNaviHelper'

export type AppNaviButtonProps = {
  children: ReactNode
  current?: boolean
  icon?: IconProps['name']
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const AppNaviButton: FC<AppNaviButtonProps> = ({ children, current, icon, onClick }) => {
  const theme = useTheme()
  const iconComponent = getIconComponent(theme, icon, current)

  if (current) {
    return (
      <Active themes={theme} aria-selected="true">
        {iconComponent}
        {children}
      </Active>
    )
  }

  return (
    <InActive themes={theme} onClick={onClick}>
      {iconComponent}
      {children}
    </InActive>
  )
}

const InActive = styled.button<{ themes: Theme }>`
  ${InActiveStyle}
`
