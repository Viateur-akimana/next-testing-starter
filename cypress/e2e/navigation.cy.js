describe('Navigation tests', () => {
  it('opening and closing sidebar', () => {
    cy.visit('/')
    cy.get('[data-id="open-sidebar"]').should("not.be.exist")
    cy.get('[data-id="sidebar-button"]').click()
    cy.get('[data-id="open-sidebar"]').should("be.visible")
    cy.get('[data-id="close-sidebar"]').click()
    cy.get('[data-id="close-sidebar"]').should("not.be.exist")
  })
  it.only("Navigation to about me page",()=>{
    cy.visit('/')
    cy.get('[data-id="sidebar-button"]').click()
    cy.get('[data-id="about-header"]').click()
    cy.contains("About Me")
  })
})