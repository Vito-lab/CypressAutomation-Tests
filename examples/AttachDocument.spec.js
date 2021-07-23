/// <reference types="Cypress" />

describe("AttachDocument", function () {
  it("DragAndDrop Method", function () {
    const disableSmoothScroll = () => {
      cy.document().then((document) => {
        const node = document.createElement("style");
        node.innerHTML = "html { scroll-behavior: inherit !important; }";
        document.body.appendChild(node);
      });
    };

    disableSmoothScroll();
    const ExampleFile= "example.jpg";
    cy.get(".dropzone > span").attachFile(ExampleFile, {
      subjectType: "drag-n-drop",
    });
    cy.wait(5000);
    cy.get(".document-type > .form-control", { timeout: 30000 })
      .select("Contract");
    cy.wait(5000);
  });
});
