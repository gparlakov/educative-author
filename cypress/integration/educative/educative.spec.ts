import { Lesson } from '../../support/educative-types';

describe('store current version in fixtures', () => {
  const jasmineEducativeMainPage = 'collection/6379329146060800/5814889438773248/draft';
  const coursePage = '[class^="Page-sc"]';
  const lessonPage = '[class^="Page-sc"]';
  // $$('[class^="LessonWrapper-sc"] a').map(a => ({name: a.text, href: a.attributes.href.nodeValue}))
  const lessonsSelector = '[class^="LessonWrapper-sc"] a';

  const edit = {
    course: '/collectioneditor/6379329146060800/5814889438773248',
    'lesson1.1': '/pageeditor/6379329146060800/5814889438773248/6096061343465472',
    lesson: '/pageeditor/6379329146060800/5814889438773248/',
  };
  const lessonsCol = [
    {
      name: "What's This Jasmine Unit Testing Course All About?",
      href: '/pageeditor/6379329146060800/5814889438773248/6096061343465472',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/6096061343465472',
    },
    {
      name: 'What to Expect?',
      href: '/pageeditor/6379329146060800/5814889438773248/6251756642631680',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/6251756642631680',
    },
    {
      name: 'Unit Testing Basics',
      href: '/pageeditor/6379329146060800/5814889438773248/5655563365515264',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/5655563365515264',
    },
    {
      name: 'Untitled Masterpiece',
      href: '/pageeditor/6379329146060800/5814889438773248/4946049982005248',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/4946049982005248',
    },
    {
      name: 'How to Use Jasmine to Run Unit Tests',
      href: '/pageeditor/6379329146060800/5814889438773248/4667481946324992',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/4667481946324992',
    },
    {
      name: 'How to Unit Test a Function',
      href: '/pageeditor/6379329146060800/5814889438773248/5441668893900800',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/5441668893900800',
    },
    {
      name: 'How to Test a Function Throwing Error',
      href: '/pageeditor/6379329146060800/5814889438773248/5730244788486144',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/5730244788486144',
    },
    {
      name: 'How to Use Jasmine Matchers',
      href: '/pageeditor/6379329146060800/5814889438773248/5953336295030784',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/5953336295030784',
    },
    {
      name: 'How to Test a Functions Depending on Other Functions',
      href: '/pageeditor/6379329146060800/5814889438773248/6146746529349632',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/6146746529349632',
    },
    {
      name: 'How to Use Jasmine to Test Functions in Browser',
      href: '/pageeditor/6379329146060800/5814889438773248/5268849580048384',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/5268849580048384',
    },
    {
      name: 'How to Test Function Depending on a Browser API',
      href: '/pageeditor/6379329146060800/5814889438773248/6390575614394368',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/6390575614394368',
    },
    {
      name: 'Arrange Act Assert',
      href: '/pageeditor/6379329146060800/5814889438773248/5573205455011840',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/5573205455011840',
    },
    {
      name: 'How to Test Functions Depending on Date-s',
      href: '/pageeditor/6379329146060800/5814889438773248/6096178644516864',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/6096178644516864',
    },
    {
      name: 'How to Perform an Action Before and After Each Test',
      href: '/pageeditor/6379329146060800/5814889438773248/6087722587914240',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/6087722587914240',
    },
    {
      name: 'How to Test Classes',
      href: '/pageeditor/6379329146060800/5814889438773248/6724802221441024',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/6724802221441024',
    },
    {
      name: 'How to Test Promise-s Using async and await',
      href: '/pageeditor/6379329146060800/5814889438773248/6654233204490240',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/6654233204490240',
    },
    {
      name: 'How to Test the Hidden Promise using Done or await',
      href: '/pageeditor/6379329146060800/5814889438773248/5981887229591552',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/5981887229591552',
    },
    {
      name: 'How to Test Single Page App Components',
      href: '/pageeditor/6379329146060800/5814889438773248/6105643225710592',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/6105643225710592',
    },
    {
      name: 'How to Test Node.js Asynchronous Code',
      href: '/pageeditor/6379329146060800/5814889438773248/5478056912748544',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/5478056912748544',
    },
    {
      name: 'How to Debug Node.js Unit Tests',
      href: '/pageeditor/6379329146060800/5814889438773248/6033274961395712',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/6033274961395712',
    },
    {
      name: 'How to Debug Browser-Javascript Tests',
      href: '/pageeditor/6379329146060800/5814889438773248/5970361676464128',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/5970361676464128',
    },
    {
      name: 'Summary',
      href: '/pageeditor/6379329146060800/5814889438773248/5643332405952512',
      apiGetPage: '/api/author/6379329146060800/collection/5814889438773248/page/5643332405952512',
    },
  ];

  before(() => {
    cy.intercept('**/api/user/login').as('login');
    //  https://www.educative.io/api/author/6379329146060800/collection/5814889438773248/page/6096178644516864/props/draft?editor_page_props=false

    cy.on('window:confirm', (text) => {
      return true;
    });
  });

  it('get html', () => {
    login();

    cy.intercept('**/api/instances**').as('instance');
    cy.visit(edit.course).wait('@instance');
    storeContents(coursePage, 'course/main-page.txt');

    lessonsCol.forEach((l, i) => {
      const p = `page${l.apiGetPage}`;
      const pAlias = `@${p}`;
      const num =
        i < 2
          ? `1.${i + 1}`
          : i < 15
          ? `2.${i - 2 + 1}`
          : i < 19
          ? `3.${i - 15 + 1} `
          : i < 21
          ? `4.${i - 19 + 1}`
          : `5.${i - 21 + 1}`;
      const fileName = `${num}${l.name.trim().replace(/\?/g, '').replace('/s/g', '-')}`;

      cy.intercept(`**/${l.apiGetPage}`).as(p);
      cy.visit(l.href);
      cy.wait(pAlias)
        .its('response.body')
        .then((body: string) => {
          const l: Lesson = JSON.parse(body);

          const md = `${l.summary.description}/n//tags${l.summary.tags.join()}/n${l.components.map(c => {
            c.type === 'MarkdownEditor' ? c.content.text : c.type
          })}`

          cy.writeFile(`course/lessons/${fileName}.json`, JSON.stringify(JSON.parse(body), null, 2));
          cy.writeFile(`course/lessons/${fileName}.md`, md);
        });
      // storeContents(lessonPage, `course/lessons/${fileName}.txt`);
      cy.wait(10000);
    });
  });
});
function storeContents(coursePage: string, fileName: string) {
  cy.get(coursePage)
    .invoke('text')
    .then((contents) => {
      cy.writeFile(fileName, contents);
    });
}

function login() {
  cy.visit('https://www.educative.io/login', {});
  cy.get('input[type="email"]').type(Cypress.env('EDUCATIVE_USERNAME'));
  cy.get('input[type="password"]').type(Cypress.env('EDUCATIVE_PASSWORD').replace(/"/g, ''));
  cy.get('[type="submit"]').click();
  cy.wait('@login');

  cy.contains('[name=two_factor_code]', /\d{6}/, {timeout: 600000});
}
