
import FormPage from "../../pageObjects/formPage";

context("Elements Page", () => {
    beforeEach(() => {
        FormPage.visit();
      });


    it("Filling in Text Boxes", () => {
        FormPage.firstName.type('George');
        FormPage.lastName.type('Costanza');
        FormPage.email.type('george.costanza@gmail.com');

        FormPage.genderMale.click();

        FormPage.mobileNumber.type('1234567890');

        FormPage.dateOfBirth.click();
        FormPage.year.select("1930");
        FormPage.month.select("February");
        FormPage.day13.click();

        FormPage.subjects.type('Economics');
        FormPage.addSubjects.click();

        FormPage.hobbiesMusic.click();

        FormPage.uploadFile.selectFile('cypress/files/george.jpg');

        FormPage.state.type('NCR');
        FormPage.selectNCR.click();
    });

    

});