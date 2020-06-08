import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import * as React from 'react'
import styled from 'styled-components'

import { FilterDropdown } from './FilterDropdown'
import { RadioButtonLabel } from '../../RadioButtonLabel'
import { Input } from '../../Input'

storiesOf('Dropdown/filter', module).add('all', () => {
  const [value, setValue] = React.useState('hoge')
  const [text, setText] = React.useState('')
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.name)
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value)

  return (
    <Wrapper>
      <FilterDropdown
        onApply={action('apply')}
        onCancel={action('cancel')}
        onReset={() => {
          setValue('hoge')
          setText('')
        }}
      >
        <Text>
          `FilterDropdown` provide specific interface to be able to filter data.
          <br />
          You can control inputs for filtering conditions as children components.
        </Text>
        <RadioButtonList>
          <li>
            <RadioButtonLabel
              name="hoge"
              label="hoge"
              checked={value === 'hoge'}
              onChange={onChangeValue}
            />
          </li>
          <li>
            <RadioButtonLabel
              name="fuga"
              label="fuga"
              checked={value === 'fuga'}
              onChange={onChangeValue}
            />
          </li>
          <li>
            <RadioButtonLabel
              name="piyo"
              label="piyo"
              checked={value === 'piyo'}
              onChange={onChangeValue}
            />
          </li>
          <li>
            <Input name="test" value={text} onChange={onChangeText} />
          </li>
        </RadioButtonList>
        <Description>
          ↓<br />↓
        </Description>
        <Text>Children content is scrollable.</Text>
      </FilterDropdown>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  padding: 24px;
  color: #333;
`
const Text = styled.p`
  margin: 0;
  font-size: 14px;
  color: #333;
`
const Description = styled.p`
  margin: 0;
  padding: 100px 0;
  font-size: 20px;
`
const RadioButtonList = styled.ul`
  list-style: none;
`
