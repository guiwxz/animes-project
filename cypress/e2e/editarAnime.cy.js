describe('homepage.cy.js - Editar anime', () => {

  it('Editar um anime em Watching', () => {
    cy.visit('/')
    cy.get('#openEditModal:first').dblclick()
    cy.contains('Descrição')
    cy.get('#editButton').click()
    cy.get('form').within(( ) => {
      cy.get('#nomeEditar').clear().type('Anime EDITADO')
      cy.get('#descricaoEditar').clear().type('DESCRICAO EDITADA')
    })
    cy.get('#submit').click()
  })
})
