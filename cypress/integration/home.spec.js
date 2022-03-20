/// <reference types="cypress" />


context("Home Page", ()=> {
    beforeEach(()=>{
        cy.visit("http://localhost:3000");
    });

    it("should find our message in the home page", ()=> {
        cy.get("h1").contains("welcome to cypress")
    })
} )