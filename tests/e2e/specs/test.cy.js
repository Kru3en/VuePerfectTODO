describe("Todo App Tests with Data Attributes", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display header, task list, and footer", () => {
    cy.get('[data-test="textTop"]').should("contain", "to do list");
    cy.get('[data-test="containerTodo"]').should("exist");
    cy.get('[data-test="containerBottom"]').should("exist");
  });

  it("should add a new task", () => {
    cy.get('[data-test="buttonAddTask"]').click();
    cy.get('[data-test="containerListTask"]')
      .children()
      .should("have.length.at.least", 1);
  });

  it("should delete a task", () => {
    cy.get('[data-test="buttonAddTask"]').click();
    cy.get('[data-test="closeTaskButton"]').first().click();

    cy.get('[data-test="noTasks"]').should("be.visible");
  });

  it("should toggle task completion", () => {
    cy.get('[data-test="buttonAddTask"]').click();
    cy.get('[data-test="checkBoxSpan"]').first().click();
    cy.get('[data-test="checkBoxInput"]').first().should("be.checked");
  });

  it("should filter tasks correctly", () => {
    cy.get('[data-test="buttonAddTask"]').click();
    cy.get('[data-test="checkBoxSpan"]').first().click();
    cy.get('[data-test="buttonAddTask"]').click();

    cy.get('[data-test="filterCompleted"]').click();
    cy.get('[data-test="containerListTask"]')
      .children()
      .should("have.length", 1);

    cy.get('[data-test="filterActive"]').click();
    cy.get('[data-test="containerListTask"]')
      .children()
      .should("have.length", 1);

    cy.get('[data-test="filterAll"]').click();
    cy.get('[data-test="containerListTask"]')
      .children()
      .should("have.length", 2);
  });

  it("should display correct footer text", () => {
    cy.get('[data-test="textPages"]').should("contain", "1/0");
    cy.get('[data-test="textAction"]').should("contain", "tasks left");
  });
});
