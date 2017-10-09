describe('Splash page', function() {
  it('Loads splash page', function() {
    cy.visit('localhost:3000');
    cy.contains('Louisville');
    cy.contains('Swag');
  })
})

describe('Menu navigation', () => {
  it('Menu items lead to pages', () => {
    cy.visit('localhost:3000');
    cy.contains('Swag').click()
    cy.contains('Red needs green');
  });
});
