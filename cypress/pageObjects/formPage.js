import BasePage from "./basePage";

class FormPage extends BasePage {
    static get url () {
      return '/automation-practice-form';
    }

    static get firstName () {
        return cy.get('input#firstName');
    }

    static get lastName () {
        return cy.get('input#lastName');
    }

    static get email () {
        return cy.get('input#userEmail');
    }

    static get genderMale () {
        return cy.get("label[for='gender-radio-1']");
    }

    static get mobileNumber () {
        return cy.get('input#userNumber');
    }

    static get dateOfBirth () {
        return cy.get('input#dateOfBirthInput');
    }
    
    static get year () {
        return cy.get('*[class^="react-datepicker__year-select"]');
    }

    static get month () {
        return cy.get('*[class^="react-datepicker__month-select"]');
    }

    static get day13 () {
        return cy.get('*[class^="react-datepicker__day react-datepicker__day--013"]');
    }

    static get subjects () {
        return cy.get('input#subjectsInput');
    }

    static get addSubjects () {
        return cy.get('#react-select-2-option-0');
    }

    static get hobbiesMusic () {
        return cy.get("label[for='hobbies-checkbox-3']");
    }

    static get uploadFile () {
        return cy.get('input[type=file]');
    }

    static get state () {
        return cy.get('*[class^=" css-yk16xz-control"]');
    }

    static get selectNCR () {
        return cy.get('*[class^="css-2613qy-menu"]');
    }


}
export default FormPage;