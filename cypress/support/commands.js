// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

const cypress = require("cypress")

// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
    cy.visit('https://locoldeal.com/')
    cy.get("button[title='Login']").click()
    cy.get("#username").type ("Local_qa")
    cy.get("#password").type("Alexa@131190")
    cy.get("form[class='ng-pristine ng-invalid ng-touched'] button[type='submit']").click()
    })

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })