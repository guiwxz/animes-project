describe('homepage.cy.js', () => {
  it('should visit watching', () => {
    cy.visit('/')
  })

  it('should visit toWatch', () => {
    cy.visit('/to-watch')
  })

  it('should visit ended', () => {
    cy.visit('/ended')
  })

  it('should open add modal', () => {
    cy.visit('/')
    //cy.contains("Watching")
    cy.get('[data-test-id="button"]').click()
    cy.contains("Adicionar anime")
  })
})
