
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  describe('practice login', () => {
    it('should be able to login', () => {
      cy.visit('https://www.konga.com/')
      cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click()
      cy.get('#username').type('ebahausa@yopmail.com')
      cy.get('#password').type('123456')
      cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click()
  
        /// mouseover
        cy.get('._0d327_3ftRW > [href="/category/phones-tablets-5294"]').trigger('mouseover')
        cy.contains('Android').click()
        cy.get(':nth-child(5) > :nth-child(1) > .a2cf5_2S5q5 > ._4941f_1HCZm > form > ._2aac2_3bwnD > ._0a08a_3czMG', {timeout: 10000})
        .should("be.visible").click()
        cy.get(':nth-child(2) > :nth-child(1) > .a2cf5_2S5q5 > ._4941f_1HCZm > form > ._2aac2_3bwnD > ._0a08a_3czMG', {timeout: 10000})
        .should("be.visible").click()
        /// view cart
        cy.get('._79484_1sLEt').click()
  
  
    })
  })