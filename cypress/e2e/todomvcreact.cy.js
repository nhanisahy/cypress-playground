/// <reference types="cypress" />

  it('loads ToDoMVC React page and adds one task', () => {
    cy.visit('https://todomvc.com/examples/react/#/')
    cy.get('.new-todo').type('Drink a glass of water{enter}')
    cy.get('.view > label')
        .should('be.visible')
        .and('contain.text', 'Drink a glass of water')
  })

  it('adds multiple unique todos', () => {
    cy.visit('https://todomvc.com/examples/react/#/')
    //practising Cypress' way of command-action command-action instead of command-action-action
    cy.get('.new-todo').type('Open the bedroom windows{enter}')
    cy.get('.new-todo').type('Do your morning stretch exercise!{enter}')
    //confirm that the list now contains 2 items
    cy.get('.view').should('have.length', 2)
  })

  it('creates 3 todos, marks 1 task Completed, and 2 as Active', () => {
    cy.visit('https://todomvc.com/examples/react/#/')
    //create 3 todos
    cy.get('.new-todo').type('stretch{enter}')
    cy.get('.new-todo').type('iron shirt{enter}')
    cy.get('.new-todo').type('make bed{enter}')
    //verify the length and texts of the todos
    cy.get('.view').should('have.length', 3)
    cy.get('.todo-list li').first().should('have.text', 'stretch')
    cy.get('.todo-list li').last().should('have.text', 'make bed')
    cy.get('.todo-list li').eq(1).should('have.text', 'iron shirt')
    //select the first todo (this marks it completed)
    cy.get('.toggle').first().click()
    cy.get('.toggle').first().should("be.checked")
    //verify that the selected first to do is in the status Completed
    cy.contains('a', 'Completed').click()
    cy.contains('stretch').should('be.visible')
    //view display for Active tasks
    cy.contains('a', 'Active').click()
    cy.contains('make bed').should('be.visible')
    cy.contains('iron shirt').should('be.visible')
    //view all todos
    cy.contains('a', 'All').click()
    cy.contains('stretch').should('be.visible')
    cy.get('.toggle').first().should("be.checked")
    cy.contains('make bed').should('be.visible')
    cy.contains('iron shirt').should('be.visible')
    //trigger Clear Completed function
    cy.get('.clear-completed').click()
    //click on Completed section to verify
    cy.contains('a', 'Completed').click()
    cy.get('.selected').contains('Completed')
    })