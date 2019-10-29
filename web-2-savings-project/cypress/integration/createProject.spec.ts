/// <reference types="Cypress" />
/// <reference path="../support/index.d.ts" />

import { R } from "../helpers";

describe("createProject", () => {
  it("fills out form and submits", () => {
    cy.visit(R.NEW)
      .dataCy("name-input")
      .click()
      .type("Hello World")
      .dataCy("user-picker")
      .click()
      .dataCy("user-picker-option")
      .contains("John Smith")
      .click()
      .dataCy("submit-btn")
      .click();
  });
});
