describe('Structure', () => {
  it('has correct title', () => {
    cy.visit('localhost:3000')
    cy.title().should('include', 'Louisville DSA')
  })
  it('content is contained in a div with class "layout-container', () => {
    cy.get('.layout-container').should('contain', 'Lorem-1')
    // Alert curtain
    cy.get('.curtain').should('contain', 'Lorem')
    // Main title container
    cy.get('.main-title').should('contain', 'DSA')
    cy.get('.louisville').should('contain', 'Louisville')
    cy.get('.dsa').should('contain', 'DSA')
    cy.get('.dsa-long').should('contain', 'Democratic')
    // Nav component for mobile
    cy.get('.nav-select').should('contain', 'NAVIGATE')
    cy.get('.nav-select').should('contain', 'Who we are')
    cy.get('.pg').should('contain', 'Lorem')
  })
});
