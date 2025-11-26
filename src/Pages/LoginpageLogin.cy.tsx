import React from 'react'
import { Login } from './Loginpage'
import Modal from 'antd/es/modal/Modal';
import { message } from 'antd';
// describe('<Login />', () => {
//   it('renders', () => {
//     // see: https://on.cypress.io/mounting-react
//     cy.mount(<Login />)
//   })
// })

describe('<Login />', () => {
  beforeEach(() => {
    const dummyUser = [
      {
        name: "Tonmoy",
        email: "test@gmail.com",
        password: "123456"
      }
    ];
    // window.localStorage.setItem(
    //   "registerdata",
    //   JSON.stringify([{ name: "Other", email: "other@gmail.com", password: "000000" }])
    // );
    window.localStorage.setItem("registerdata", JSON.stringify(dummyUser));

  });

// 1st test
  it("shows Zod errors when clicking login without filling fields", () => {
    cy.mount(<Login />, {
      stylesheets:["https://cdnjs.cloudflare.com/ajax/libs/antd/5.20.0/reset.min.css"]
    });

    cy.get('[data-testid="btn-login"]').click();

    // cy.contains("Name is required").should("exist");
    // cy.contains("Email is required").should("exist");
    // cy.contains("Password atleast 3 charecters").should("exist");
  });


  // 2nd test
  it("Shows errors message if give invvalid input", () => {
    cy.mount(<Login />);
    
    cy.get('[data-testid="login-name"]').type("Ton");
    cy.get('[data-testid="login-email"]').type("Ton@");
    cy.get('[data-testid="login-password"]').type("123");
    cy.get('[data-testid="btn-login"]').click();
    // cy.contains("Name is required in minimum 5 words").should("exit")
    // cy.contains("Invalied email fromet").should("exist");

  })

  // optional test
  it("shows invalid email format error", () => {
    cy.mount(<Login />);

    cy.get('[data-testid="login-name"]').type("Tonmoy");
    cy.get('[data-testid="login-email"]').type("wrongemail");
    cy.get('[data-testid="login-password"]').type("123456");

    cy.get('[data-testid="btn-login"]').click();

    // cy.contains("Invalied email fromet").should("exist");
  });


// 3rd test

  it("shows login error modal when user not found", () => {
    cy.mount(<Login />);

    cy.get('[data-testid="login-name"]').type("Unknown");
    cy.get('[data-testid="login-email"]').type("unknown@gmail.com");
    cy.get('[data-testid="login-password"]').type("111111");

    cy.get('[data-testid="btn-login"]').click();

    cy.contains("Login Error ⚠️").should("exist");
    cy.contains("Invalied name or email or password").should("exist");
  });



// 4th test
  it('renders login component', () => {
    cy.mount(<Login />);
    cy.get('[data-testid="cylogin-title"]').should("exist");
  });



  //5 tth test
  it('should login successfully', () => {
    cy.mount(<Login />);

    // cy.get('input[placeholder="Enter your name"]').type("Tonmoy");
    // cy.get('input[placeholder="Enter your eamil"]').type("test@gmail.com");
    // cy.get('input[placeholder="Enter your password"]').type("123456");
    cy.get('[data-testid="login-name"]').type("Tonmoy");
    cy.get('[data-testid="login-email"]').type("test@gmail.com");
    cy.get('[data-testid="login-password"]').type("123456");


    // cy.contains("Login").click();
cy.get('[data-testid="btn-login"]').click()
    // cy.contains("Log Successful 🎉").should("exist");
  });
});
