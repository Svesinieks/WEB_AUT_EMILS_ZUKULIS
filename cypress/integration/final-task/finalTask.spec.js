
import FormPage from "../../pageObjects/formPage";

context("Elements Page", () => {

      it("Filling in Text Boxes", () => {
        cy.fixture("formData").then((data) => {
        FormPage.visit();

        FormPage.firstName.type('George');
        FormPage.lastName.type('Costanza');
        FormPage.email.type(data.email);

        FormPage.genderMale.click();

        FormPage.mobileNumber.type(data.mobile);

        FormPage.dateOfBirth.click();
        FormPage.year.select("1930");
        FormPage.month.select("February");
        FormPage.day13.click();

        FormPage.subjects.type(data.subjects);
        FormPage.addSubjects.click();

        FormPage.hobbiesMusic.click();

        FormPage.uploadFile.selectFile('cypress/files/george.jpg');

        FormPage.state.click();
        //FormPage.state.type('Cypress.io{enter}')
        FormPage.selectNCR.click();

        FormPage.city.click();
        FormPage.selectDelhi.click();

        FormPage.submitButton.click();
        });
    });


    it("Validating data", () => {
        cy.fixture("formData").then((data) => {

        FormPage.formData.should("contain", data.name);
        FormPage.formData.should("contain", data.email);
        FormPage.formData.should("contain", data.gender);
        FormPage.formData.should("contain", data.mobile);
        FormPage.formData.should("contain", data.DOB);
        FormPage.formData.should("contain", data.subjects);
        FormPage.formData.should("contain", data.hobbies);
        FormPage.formData.should("contain", data.picture);
        FormPage.formData.should("contain", data.address);
        FormPage.formData.should("contain", data.stateAndCity);


        });
    });

});