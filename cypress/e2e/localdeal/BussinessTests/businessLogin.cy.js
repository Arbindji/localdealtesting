
describe('Business login Login Test', () => {
    beforeEach(() => {
        cy.visit('https://locoldeal.com/business/signin');
    });


    it('Business Login Test code ', () => {
        // cy.get('https://locoldeal.com/business/signin').click()
        cy.get('#username').type('arbind.localdeal+bussiness@gmail.com')
        cy.wait(3000)
        cy.get('#password').type('Alexa@131190')
        cy.wait(5000)
        cy.get('[class="btn-wrap text-center"]').click()
        cy.wait(5000)

    });
    it('Localdeal Business Signup code', () => {
        const randomName = generaterandomName();
        cy.visit('https://locoldeal.com/business/signup')

        cy.get('form.ng-untouched > :nth-child(1) > .form-control').type('arbind')
        cy.get(':nth-child(2) > .form-control').type('IT building Washigton')
        cy.get(':nth-child(3) > .form-control').type('arbind')
        cy.get(':nth-child(4) > .form-control').type('lastname_Tester_arbind')
        const generaterandomString = (length) => {
            const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return result;
        };
        const randomEmail = '${generateRandomString(8)}@gmail.com';
        cy.get(':nth-child(5) > .form-control').type(randomEmail)
        cy.wait(10000)
        cy.get(':nth-child(6) > .form-control').type('9454191270')
        cy.get(':nth-child(7) > .form-control').type('arbindQA')  // username localdeal
        cy.get('.text > .form-control').type('Alexa@131190')   // password 
        cy.get(':nth-child(9) > .form-control').type('Alexa@131190')  //confirm password
        // cy.get('[name="category"]').click()
        // cy.wait(10000)
        // cy.get('value="Beauty"').click()
        cy.wait(10000)
        cy.get('#toc').click()
        cy.wait(10000)
        cy.get('.btnWrap').click()
    });
});
