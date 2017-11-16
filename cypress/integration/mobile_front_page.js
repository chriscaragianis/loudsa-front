describe('Structure', () => {
  it('has correct title', () => {
    cy.visit('localhost:3002')
    cy.title().should('include', 'Louisville DSA')
  })

});
