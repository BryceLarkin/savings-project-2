import app from "firebase/app";
import "firebase/auth";

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
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("dataCy", value => {
  return cy.get(`[data-cy=${value}]`);
});

Cypress.Commands.add("authVisit", route => {
  const signin = () => {
    let firebase;

    if (app.apps.length === 0) {
      const config = {
        apiKey: Cypress.env("FIREBASE_API_KEY"),
        authDomain: Cypress.env("FIREBASE_AUTH_DOMAIN"),
        databaseURL: Cypress.env("FIREBASE_DATABASE_URL"),
        projectId: Cypress.env("FIREBASE_PROJECT_ID"),
        storageBucket: Cypress.env("FIREBASE_STORAGE_BUCKET"),
        messagingSenderId: Cypress.env("FIREBASE_MESSAGING_SENDER_ID"),
        appId: Cypress.env("FIREBASE_APP_ID")
      };

      firebase = app.initializeApp(config);
    } else {
      firebase = app;
    }

    return new Cypress.Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase
            .auth()
            .signInWithEmailAndPassword("test@test.com", "password")
            .then(resolve)
            .catch(reject);
        });
    });
  };
  return cy.then(signin).visit(route);
});
