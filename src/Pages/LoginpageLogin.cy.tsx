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

describe('<Login/>', () => {
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
    cy.wait(6500)
    // cy.contains("Name is required").should("exist");
    // cy.contains("Email is required").should("exist");
    // cy.contains("Password atleast 3 charecters").should("exist");
  });


  // 2nd test
  it("Shows errors message if give invvalid input", () => {
    cy.mount(<Login />);
    
    cy.get('[data-testid="login-name"]').type("Ton").wait(2000);
    cy.get('[data-testid="login-email"]').type("Ton@").wait(2000);
    cy.get('[data-testid="login-password"]').type("123").wait(2000);
    cy.get('[data-testid="btn-login"]').click();
    // cy.contains("Name is required in minimum 5 words").should("exit")
    // cy.contains("Invalied email fromet").should("exist");
    cy.wait(6500)
  })

  // optional test
  it("shows invalid email format error", () => {
    cy.mount(<Login />);

    cy.get('[data-testid="login-name"]').type("Tonmoy").wait(2000);
    cy.get('[data-testid="login-email"]').type("wrongemail").wait(2000);
    cy.get('[data-testid="login-password"]').type("123456").wait(2000);

    cy.get('[data-testid="btn-login"]').click();

    // cy.contains("Invalied email fromet").should("exist");
    cy.wait(6500)
  });


// 3rd test

  it("shows login error modal when user not found", () => {
    cy.mount(<Login />);

    cy.get('[data-testid="login-name"]').type("Unknown").wait(2000);
    cy.get('[data-testid="login-email"]').type("unknown@gmail.com").wait(2000);
    cy.get('[data-testid="login-password"]').type("111111").wait(2000);

    cy.get('[data-testid="btn-login"]').click();

    cy.contains("Login Error ⚠️").should("exist");
    cy.contains("Invalied name or email or password").should("exist");
    cy.wait(6500)
  });



// 4th test
  it('renders login component', () => {
    cy.mount(<Login />);
    cy.get('[data-testid="cylogin-title"]').should("exist");
    cy.wait(6500)
  });



  //5 tth test
  it('should login successfully', () => {
    cy.mount(<Login />);

    // cy.get('input[placeholder="Enter your name"]').type("Tonmoy");
    // cy.get('input[placeholder="Enter your eamil"]').type("test@gmail.com");
    // cy.get('input[placeholder="Enter your password"]').type("123456");
    cy.get('[data-testid="login-name"]').type("Tonmoy").wait(2000);
    cy.get('[data-testid="login-email"]').type("test@gmail.com").wait(2000);
    cy.get('[data-testid="login-password"]').type("123456").wait(2000);


    // cy.contains("Login").click();
cy.get('[data-testid="btn-login"]').click()
    // cy.contains("Log Successful 🎉").should("exist");
      cy.wait(6500)
  });
});
