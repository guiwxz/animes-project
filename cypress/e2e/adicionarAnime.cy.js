describe('homepage.cy.js - Cadastrar anime', () => {
  
  it('Cadastar anime em Watching', () => {
    cy.visit('/')
    //cy.contains("Watching")
    cy.get("#pageheader--add-button").click()
    cy.contains("Adicionar anime")

    cy.get('form').within(( ) => {
      cy.get('#nome').type('Anime bom')
      cy.get('#descricao').type('Anime bom damis')
      cy.get('#ep').type('1')
    })

    cy.get('#submit').click()
    cy.contains("Anime bom")
  })

  
})
