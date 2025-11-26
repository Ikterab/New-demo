import React from 'react'
import Register1test from './register1test'

describe('<Register1test />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Register1test />)
  })
})