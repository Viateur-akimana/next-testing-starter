import React from 'react'
import Counter from './Counter'

describe('<Counter />', () => {
  it('renders and handles clicks correctly', () => {
    cy.mount(<Counter />)
    
    // Check initial render
    cy.contains(/counter/i)
    cy.get('[data-id="count"]').should('have.text', '0')
    
    // Test increment
    cy.get('[data-id="plus-button"]').click()
    cy.get('[data-id="count"]').should('have.text', '1')
    
    // Test decrement
    cy.get('[data-id="minus-button"]').click()
    cy.get('[data-id="count"]').should('have.text', '0')
  })
})