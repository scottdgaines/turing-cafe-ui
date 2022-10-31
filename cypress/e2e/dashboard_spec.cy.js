describe('Dashboard', () => {

  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/reservations', {
      fixture: 'get_stub.json',
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should show the title', () => {
    cy.get('.app-title').should('contain', 'Turing Cafe Reservations')
  }) 

  it('Should show the reservation form', () => {
    cy.get('form').should('be.visible')
  })

  it('Should show the reseveration card(s)', () => {
    cy.get('.reservation-card').should('be.visible')
      .should('contain', 'Christie')
  })

  it('Should display a new reservation card', () => {
    cy.get('[name="name"]').type('Scott')
    cy.get('[name="date"]').type('11/11')
    cy.get('[name="time"]').type('3:00')
    cy.get('[name="number"]').type(2)
    cy.get('.resy-form > button').click()
    cy.get('.resy-container > :nth-child(2)').should('be.visible')
      .should('contain', 'Scott')
  })
 
})