describe('index page', () => {
  before

  it('h1 title is rendered', () => {
    cy.visit('/');

    cy.get("h1").should("have.text", "List of all available countries");
  })

  it("list of countries is rendered", () => {
    cy.visit('/');

    cy.get("li.border.flex").should("have.length.greaterThan", 100);
  })

  it("click on single country", () => {
    cy.visit('/');

    const li = cy.contains("li", "Ukraine");
    const link = li.find("a");

    const page = link.click();

    page.get("h1").should("have.text", "Ukraine");

    page.get("li").should("have.length", 7);
  })

  it("/ua page", () => {
    cy.visit("/ua");

    cy.get("h1").should("have.text", "Ukraine");
  })

  it("links on /ua page", () => {
    cy.visit("/ua");

    const li = cy.contains("li", "Republic of Poland");
    const link = li.find("a");

    const page = link.click();

    page.get("h1").should("have.text", "Republic of Poland");

    page.get("li").should("have.length", 7);
  })
})