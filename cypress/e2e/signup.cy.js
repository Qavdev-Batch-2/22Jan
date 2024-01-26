import {signup,signin} from "../fixtures/selectors.js";


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Testing Signup', () => {
  beforeEach(()=> {
    cy.visit('https://www.konga.com/')
  })

  it.skip('Should be able to signup', () => {
    cy.get(signup.signupBtn,{defaultCommandTimeout: 60000}).click()
    cy.get(signup.dontHaveAnAcc).click()
    cy.get(signup.firstNameField).type('Jane')
    cy.get(signup.lastNameField).type('Maxwell')
    cy.get(signup.emailField).type('ebahausa@yopmail.com')
    cy.get(signup.phoneNumber).type('08101777081')
    cy.get(signup.password).type('123456')
    cy.get(signup.createAccBtn).click()
    cy.get(signup.pin).type('9931')
  })


  it.skip('Should not be able to signin with incorrect email', () => {
    // Negative Scenerio
    cy.get(signin.signupBtn,{defaultCommandTimeout: 60000}).click()
    cy.get(signin.signInField).type('eahausa@yopmail.com')
    cy.get(signin.password).type('123456')
    cy.get(signin.loginBtn).click()
  })

  it.skip('Should not be able to signin with incorrect password', () => {
      // Negative Scenerio
      cy.get(signin.signupBtn,{defaultCommandTimeout: 60000}).click()
      cy.get(signin.signInField).type('ebahausa@yopmail.com')
      cy.get(signin.password).type('1234578')
      cy.get(signin.loginBtn).click()
})
  it('Should not be able to signin with incorrect password', () => {
      cy.get(signin.signupBtn,{defaultCommandTimeout: 60000}).click()
      cy.get(signin.signInField).type('ebahausa@yopmail.com')
      cy.get(signin.password).type('123456')
      cy.get(signin.loginBtn).click()
})
})





























