describe('store current version in fixtures', () => {
    const jasmineEducativeMainPage = 'collection/6379329146060800/5814889438773248/draft';
    const coursePage = '[class^="Page-sc"]';
    const lessonPage = '[class^="Page-sc"]';
    const lessons = '[class^=LessonWrapper-sc"]';

    const edit = {
        'course': '/collectioneditor/6379329146060800/5814889438773248',
        'lesson1.1': '/pageeditor/6379329146060800/5814889438773248/6096061343465472',
        'lesson1.2': '/pageeditor/6379329146060800/5814889438773248/6251756642631680',
        'lesson2.1': '/pageeditor/6379329146060800/5814889438773248/5655563365515264',
        'lesson2.2': ''
    }
    before(() => {
        cy.intercept('**/api/user/login').as('login')

        cy.on('window:confirm', (text) => {
            return true;
        });
    })



    it('get html', () => {
        login();
        cy.visit(edit.course);
        storeContents(coursePage, 'course/main-page.txt');

        cy.get(lessons).each(e => {
            cy.wrap(e).click();
            storeContents(lessonPage, `course/lessons/${e.text()}.txt`)
        });
    })
})
function storeContents(coursePage: string, fileName: string) {
    cy.get(coursePage).invoke('text').then(contents => {
        cy.writeFile(fileName, contents);
    });
}

function login() {
    cy.visit('https://www.educative.io/login', {});
    cy.get('input[type="email"]').type(Cypress.env('EDUCATIVE_USERNAME'));
    cy.get('input[type="password"]').type(Cypress.env('EDUCATIVE_PASSWORD').replace(/"/g, ''));
    cy.get('[type="submit"]').click();
    cy.wait('@login');
}

