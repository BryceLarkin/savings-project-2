/// <reference types="Cypress" />
/// <reference path="../support/index.d.ts" />

import { R } from "../helpers";

describe("Creates complete Project", () => {
  it("fills out forms and submits", () => {
    //Page 1
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

    //Page 2
    cy.dataCy("remove-business-unit-icon")
      .click()
      .dataCy("add-business-unit-btn")
      .click()
      .dataCy("picker-business-units")
      .click()
      .dataCy("picker-business-units-option")
      .contains("Hardware")
      .click()
      .dataCy("add-business-unit-icon")
      .click()
      .dataCy("picker-business-units")
      .eq(1)
      .click()
      .dataCy("picker-business-units-option")
      .contains("Software")
      .click()
      .dataCy("submit-btn")
      .click();

    //Page 3
    //Input 1
    cy.dataCy("month-0-0")
      .find("input")
      .click()
      .clear()
      .type("102020")
      .dataCy("baseline-0-0")
      .click()
      .type("1")
      .dataCy("forecasted-0-0")
      .click()
      .type("2")
      .dataCy("remove-0-0")
      .should("be.disabled")
      .dataCy("add-0-0")
      .click()
      .dataCy("remove-0-0")
      .should("be.enabled");

    cy.dataCy("month-0-1")
      .find("input")
      .click()
      .clear()
      .type("112020")
      .dataCy("baseline-0-1")
      .click()
      .type("3")
      .dataCy("forecasted-0-1")
      .click()
      .type("4")
      .dataCy("remove-0-1")
      .should("be.enabled");

    //Input 2
    cy.dataCy("month-1-0")
      .find("input")
      .click()
      .clear()
      .type("012020")
      .dataCy("baseline-1-0")
      .click()
      .type("5")
      .dataCy("forecasted-1-0")
      .click()
      .type("6")
      .dataCy("remove-1-0")
      .should("be.disabled")
      .dataCy("add-1-0")
      .click()
      .dataCy("remove-1-0")
      .should("be.enabled")
      .dataCy("remove-1-1")
      .click();

    cy.dataCy("total-baseline-0")
      .should("have.text", "$4")
      .dataCy("total-savings-0")
      .should("have.text", "$6")
      .dataCy("total-baseline-1")
      .should("have.text", "$5")
      .dataCy("total-savings-1")
      .should("have.text", "$6");

    cy.dataCy("submit-btn").click();

    // Update actual spend
  });

  it.only("visits auth route", () => {
    cy.authVisit(
      "update/projects/vm49752lB/profiles/ck2l63exp0138ewk5o1cjjf0r"
    );
  });
});
