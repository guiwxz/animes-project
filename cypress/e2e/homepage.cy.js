describe('homepage.cy.js - Visitar páginas', () => {
  it('should visit watching', () => {
    cy.visit('/')
  })

  it('should visit toWatch', () => {
    cy.visit('/to-watch')
  })

  it('should visit ended', () => {
    cy.visit('/ended')
  })

})
