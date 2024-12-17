
describe('Locoldeal Login Test', () => {
    beforeEach(() => {
        cy.visit('https://locoldeal.com/');
    });

    it('Signup code ', () => {
        cy.get('#navbarSignUpDropdown').click()
        cy.wait(5000)
        cy.xpath("(//a[@class='dropdown-item'])[1]").click()
        cy.wait(5000)
        cy.xpath("//input[@formcontrolname='firstname']").type("Arbind")
        cy.wait(5000)
        cy.xpath("//input[@formcontrolname='lastname']").type("Yadav")
        cy.wait(5000)
        cy.xpath("//input[@placeholder='Email']").type("arbind.localdeal@gamil.com")
        cy.wait(5000)
        cy.xpath("//input[@placeholder='Username']").type("arbind")
        cy.xpath("//input[@placeholder='Password']").type("Alexa@131190")
        cy.xpath("//input[@placeholder='Confirm Password']").type("Alexa@131190")
        cy.xpath(6000)
        cy.xpath("//input[@role='checkbox']").click()
        cy.wait(7000)
        cy.xpath("//input[@type='checkbox']").click()
        cy.wait(5000)
        cy.xpath(".submit-btn submit-btn-disabled").click()
        cy.wait(5000)

    });


    it('Login Locoldeal Project', () => {
        cy.xpath("//button[@title='Login']").click()
        cy.xpath("//input[@name='username']").type("arbind.localdeal@gmail.com")
        cy.wait(4000)
        cy.xpath("//input[@name='password']").type("Alexa@131190")
        cy.xpath("//div[@id='google-signin-btn']").click()


    });
});
