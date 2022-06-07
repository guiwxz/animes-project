describe('homepage.cy.js - Remover anime', () => {

  it('Remover um anime em Watching', () => {
    cy.visit('/')
    //cy.contains("Watching")
    cy.get("#removeButton:first").click()

  })

})
