import React from 'react'
import TodoList from './TodoList'

describe('<TodoList />', () => {
  it('renders and handles clicks correctly', () => {
    cy.mount(<TodoList />)
    
    // Check initial render
    cy.contains(/list/i)
    cy.get('input').type("Todo list one");
    cy.get('button').click()
    cy.contains(/todo/i)
    cy.get('[data-id="task"]').click()

  
  })
})