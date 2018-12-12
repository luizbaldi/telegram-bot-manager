import React from 'react'
import { render } from 'react-testing-library'
import Button from '../../src/components/Button'

test('<Button />', () => {
  const { container } = render((
    <Button>
      Potatoe
    </Button>
  ))

  expect(container).toMatchSnapshot()
})
