/// <reference types="cypress" />

  it('loads ToDoMVC React page and adds one task', () => {
    cy.visit('https://todomvc.com/examples/react/#/')
    cy.get('.new-todo')
        .type('Drink a glass of water')
        .type('{enter}')
    cy.get('.view > label')
        .should('be.visible')
        .and('contain.text', 'Drink a glass of water')
  })
