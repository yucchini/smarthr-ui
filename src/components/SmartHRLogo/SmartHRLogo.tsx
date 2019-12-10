import React, { FC } from 'react'
import styled, { css } from 'styled-components'

type Props = {
  title?: string
  fill?: string
  className?: string
}

export const SmartHRLogo: FC<Props> = ({ title = 'SmartHR', fill = '#fff', className = '' }) => (
  <Wrapper fill={fill} className={className}>
    <svg role="img">
      <title>{title}</title>
      <path d="M12.36,16.23c-0.1,0-0.2-0.01-0.3-0.04c-0.6-0.17-1.15-0.44-1.66-0.81c-2.38-1.74-2.93-5.12-1.21-7.53c0.83-1.17,2.06-1.94,3.47-2.17c1.4-0.23,2.81,0.1,3.97,0.95c0.79,0.58,1.41,1.36,1.79,2.27c0.24,0.57-0.02,1.23-0.59,1.48c-0.57,0.24-1.22-0.02-1.46-0.6c-0.22-0.53-0.58-0.98-1.04-1.32c-0.67-0.49-1.49-0.69-2.31-0.55c-0.82,0.13-1.54,0.58-2.02,1.26c-1,1.4-0.68,3.37,0.7,4.38c0.3,0.22,0.62,0.37,0.97,0.47c0.59,0.17,0.94,0.79,0.77,1.39C13.29,15.91,12.84,16.23,12.36,16.23z M13.25,20.38c-1.08,0-2.17-0.3-3.11-0.92c-0.98-0.64-1.69-1.58-2.02-2.64c-0.17-0.54,0.18-1.1,0.77-1.25c0.59-0.15,1.21,0.16,1.37,0.71c0.19,0.62,0.6,1.15,1.17,1.53c1.39,0.91,3.33,0.62,4.33-0.64s0.68-3.04-0.7-3.96c-0.17-0.11-0.35-0.21-0.55-0.29c-0.56-0.23-0.81-0.83-0.56-1.34c0.25-0.51,0.91-0.74,1.47-0.51c0.33,0.13,0.64,0.3,0.93,0.49c2.38,1.57,2.93,4.62,1.21,6.8C16.55,19.68,14.91,20.38,13.25,20.38z M18.14,2.25h-9.6c-3.49,0-6.31,2.86-6.31,6.39v9.71c0,3.53,2.83,6.39,6.31,6.39h9.6c3.49,0,6.31-2.86,6.31-6.39V8.64C24.45,5.11,21.63,2.25,18.14,2.25z M18.14,0c1.15,0,2.27,0.23,3.32,0.68c1.02,0.44,1.93,1.06,2.71,1.85c0.78,0.79,1.4,1.72,1.83,2.75c0.45,1.07,0.67,2.2,0.67,3.36v9.71c0,1.17-0.23,2.3-0.67,3.36c-0.43,1.03-1.05,1.95-1.83,2.75c-0.78,0.79-1.7,1.42-2.71,1.85C20.41,26.77,19.29,27,18.14,27h-9.6c-1.15,0-2.27-0.23-3.32-0.68c-1.02-0.44-1.93-1.06-2.71-1.85c-0.78-0.79-1.4-1.72-1.83-2.75C0.23,20.66,0,19.52,0,18.36V8.64c0-1.17,0.23-2.3,0.67-3.36C1.1,4.25,1.72,3.32,2.5,2.53c0.78-0.79,1.7-1.42,2.71-1.85C6.27,0.23,7.39,0,8.54,0H18.14z M43.58,12.15c2.85,1.16,4.18,3.02,4.18,5.86c0,3.23-2.54,6.71-8.11,6.71c-2.75,0-5.46-0.98-7.53-2.7c-0.2-0.16-0.22-0.46-0.06-0.66l2.16-2.67c0.16-0.19,0.44-0.22,0.64-0.07c1.55,1.18,3.38,1.89,4.9,1.89c2.6,0,2.99-1.31,2.99-2.08c0-1.29-1.11-1.76-2.79-2.47l-3.14-1.34c-1.29-0.52-4.3-2.13-4.3-5.86c0-3.69,3.31-6.47,7.7-6.47c2.38,0,4.76,0.9,6.5,2.43c0.19,0.17,0.22,0.46,0.06,0.66l-1.86,2.36c-0.15,0.19-0.42,0.24-0.62,0.1c-1.38-0.95-2.62-1.37-4.08-1.37c-1.73,0-2.76,0.75-2.76,2c0,1.26,1.29,1.77,3.08,2.48L43.58,12.15z M70.94,9.85c0.85,0.94,1.27,2.48,1.27,4.61v9.38c0,0.26-0.21,0.47-0.47,0.47h-3.52c-0.26,0-0.47-0.21-0.47-0.47v-8.71c0-0.63-0.08-1.13-0.24-1.48c-0.16-0.35-0.39-0.59-0.69-0.72c-0.3-0.13-0.69-0.19-1.16-0.19c-0.55,0-1.02,0.13-1.41,0.4c-0.39,0.27-0.7,0.64-0.92,1.12v0.32v9.26c0,0.26-0.21,0.47-0.47,0.47h-3.51c-0.26,0-0.47-0.21-0.47-0.47v-8.68c0-0.64-0.08-1.14-0.24-1.5c-0.16-0.35-0.39-0.6-0.7-0.73c-0.3-0.13-0.69-0.19-1.17-0.19c-0.52,0-0.98,0.12-1.37,0.35c-0.39,0.24-0.71,0.57-0.95,1v9.75c0,0.26-0.21,0.47-0.47,0.47H50.5c-0.26,0-0.47-0.21-0.47-0.47V9.2c0-0.26,0.21-0.47,0.47-0.47h3.27c0.24,0,0.45,0.19,0.47,0.43l0.11,1.34c0.51-0.66,1.14-1.17,1.88-1.53c0.74-0.35,1.58-0.53,2.52-0.53c0.95,0,1.76,0.19,2.45,0.58c0.68,0.39,1.21,0.98,1.58,1.78c0.5-0.76,1.14-1.34,1.91-1.75c0.77-0.41,1.66-0.61,2.66-0.61C68.89,8.44,70.09,8.91,70.94,9.85z M87.27,24.31h-3.31c-0.26,0-0.47-0.21-0.47-0.47v-0.91c-0.93,1.11-2.2,1.67-3.81,1.67c-0.96,0-1.84-0.2-2.63-0.6c-0.8-0.4-1.43-0.96-1.89-1.67c-0.46-0.72-0.7-1.52-0.7-2.41c0-1.64,0.6-2.91,1.8-3.79c1.2-0.89,2.99-1.33,5.36-1.33h1.66v-0.85c0-0.7-0.17-1.25-0.51-1.63c-0.34-0.39-0.86-0.58-1.56-0.58c-0.63,0-1.11,0.15-1.46,0.45c-0.26,0.23-0.42,0.53-0.49,0.9c-0.04,0.23-0.22,0.4-0.45,0.4l-3.51,0c-0.28,0-0.5-0.24-0.47-0.52c0.08-0.74,0.35-1.42,0.79-2.04c0.55-0.77,1.32-1.37,2.33-1.81c1.01-0.44,2.17-0.66,3.49-0.66c1.22,0,2.31,0.21,3.25,0.63c0.94,0.42,1.68,1.04,2.22,1.86c0.54,0.83,0.8,1.84,0.8,3.04v6.45c0,0.69,0,2.54,0,3.42C87.73,24.1,87.53,24.31,87.27,24.31z M82.29,20.83c0.46-0.26,0.79-0.58,0.99-0.96v-2.55h-1.59c-0.95,0-1.65,0.22-2.11,0.66c-0.46,0.44-0.68,0.99-0.68,1.66c0,0.47,0.16,0.85,0.49,1.14c0.33,0.29,0.76,0.44,1.3,0.44C81.3,21.23,81.83,21.1,82.29,20.83z M110,21.35v2.49c0,0.21-0.13,0.4-0.33,0.45c-0.69,0.2-1.44,0.3-2.26,0.3c-1.49,0-2.63-0.38-3.42-1.14c-0.79-0.76-1.19-1.95-1.19-3.59v-7.62h-1.64c-0.26,0-0.47-0.21-0.47-0.47V8.91c0-0.26,0.21-0.47,0.47-0.47h1.64v-3.1c0-0.26,0.21-0.47,0.47-0.47h3.51c0.26,0,0.47,0.21,0.47,0.47v3.1h2.11c0.26,0,0.47,0.21,0.47,0.47v2.87c0,0.26-0.21,0.47-0.47,0.47h-2.11v7.07c0,0.61,0.12,1.03,0.36,1.25c0.24,0.22,0.64,0.33,1.21,0.33c0.24,0,0.47-0.01,0.68-0.03C109.76,20.86,110,21.07,110,21.35z M99.28,8.98l-0.05,2.8c0,0.28-0.24,0.49-0.51,0.46c-0.47-0.04-0.81-0.06-1.03-0.04c-0.79,0.07-1.38,0.34-1.9,0.72c-0.57,0.42-1.07,1.35-1.07,2.08v8.82c0,0.26-0.21,0.47-0.47,0.47h-3.51c-0.26,0-0.47-0.21-0.47-0.47V9.2c0-0.26,0.21-0.47,0.47-0.47h3.27c0.24,0,0.45,0.19,0.47,0.44l0.1,1.16c0.39-0.71,0.86-1.09,1.45-1.44c0.66-0.38,1.23-0.45,1.96-0.45c0.34,0,0.64,0.02,0.9,0.07C99.11,8.55,99.28,8.75,99.28,8.98z M130.53,3.79v20.05c0,0.26-0.21,0.47-0.47,0.47h-3.68c-0.26,0-0.47-0.21-0.47-0.47v-7.58h-7.86v7.58c0,0.26-0.21,0.47-0.47,0.47h-3.69c-0.26,0-0.47-0.21-0.47-0.47V3.79c0-0.26,0.21-0.47,0.47-0.47h3.69c0.26,0,0.47,0.21,0.47,0.47v8.7h7.86v-8.7c0-0.26,0.21-0.47,0.47-0.47h3.68C130.32,3.32,130.53,3.53,130.53,3.79z M149.95,23.62c0.16,0.31-0.07,0.69-0.42,0.69h-3.9c-0.18,0-0.34-0.1-0.42-0.26l-3.85-7.74h-2.85v7.52c0,0.26-0.21,0.47-0.47,0.47h-3.69c-0.26,0-0.47-0.21-0.47-0.47V3.81c0-0.26,0.21-0.47,0.47-0.47h7.46c1.59,0,2.97,0.24,4.13,0.73c1.16,0.48,2.05,1.2,2.68,2.15c0.62,0.95,0.93,2.1,0.93,3.46c0,1.52-0.31,2.75-0.94,3.69c-0.63,0.94-1.53,1.68-2.72,2.23L149.95,23.62z M144.14,11.78c0.53-0.48,0.8-1.13,0.8-1.97c0-0.86-0.26-1.52-0.79-2c-0.53-0.48-1.3-0.71-2.33-0.71h-3.3v5.4h3.3C142.84,12.49,143.61,12.25,144.14,11.78z" />
    </svg>
  </Wrapper>
)

const Wrapper = styled.figure<{ fill: string }>`
  ${({ fill }) => {
    return css`
      display: inline-block;
      margin: 0;
      padding: 0;

      > svg {
        display: inline-block;
        width: 150px;
        height: 27px;
        fill: ${fill};
      }
    `
  }}
`
