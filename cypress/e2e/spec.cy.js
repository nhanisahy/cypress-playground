describe('My first test following Cypress.io documentation', () => {
  
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })

  it('Visits the Kitchen Sink', () =>{
    cy.visit('https://example.cypress.io')
    //gets the content "type"
    cy.contains('type')
    //click the "type" element
    cy.contains('type').click()
    //check that the url contains '/commands/action'
    cy.url().should('include', '/commands/action')
    //get an input
    cy.get('.action-email')
      //type into it
      .type('fake-email@email.com')
      //verify that the value has been updated as per previous input
      .and('have.value', 'fake-email@email.com')
  })

})