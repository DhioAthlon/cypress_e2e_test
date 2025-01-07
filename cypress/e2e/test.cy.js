describe('Cypress Playground Tests', () => {
  beforeEach(() => {
    // Visit the application before each test
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html');
  });

  // it('Clicks the Subscribe button and verifies the action', () => {
  //   cy.contains('button', 'Subscribe').click();
  //   cy.get('body')
  //   .should('contain', "You've been successfully subscribed to our newsletter."); //pakek petik dua soalnya you've ada petiknya, atau diakalin pakek ini \\
  // });

  //  it('Types a name in the Sign here field and verifies the signature preview', () => {
  //   cy.get('#signature-textarea').type('Dhio Athlon'); 
  //   cy.get('#signature').should('have.text', 'Dhio Athlon'); //bisa pakek contain dan have.text, have.text lebih ketat sampai spasi
  // });
  
  // it('Should type name and check the signature preview checkbox', () => {
  //   cy.get('#signature-textarea-with-checkbox').type('Dhio Athlon'); 
  //   cy.get('input#signature-checkbox').check();  // contohnya pakek [type="checkbox"] tapi ga spesifik checkbox yg signature checkbox, soalnya ada dua checkbox di testnhya 
  //   cy.get('#signature-triggered-by-check').should('be.visible');
  // });

  //  it('should check the On/Off radio button and display the correct text', () => {
  //   cy.get('#on').check(); //contohnya pakek input[type="radio"] tapi malah error anjir, harus ada id/value, nulisnya  cy.get('input[type="radio"][value="on"]').check(); tapi kalok ada value/id langsung aja gausah input type radio lg soalnya udah spesifik
  //   cy.get('#on').should('be.checked');
  //   cy.contains('ON').should('be.visible');

  //   cy.get('#off').check();
  //   cy.get('#off').should('be.checked');
  //   cy.contains('OFF').should('be.visible');
  //  });

  //  it('should select a type and display the correct type', () => {
  //   cy.get('#selection-type').select('Basic');
  //   cy.get('#selection-type').should('have.value', 'basic');

  //   cy.get('#selection-type').select('Standard');
  //   cy.get('#selection-type').should('have.value', 'standard');

  //   cy.get('#selection-type').select(3);
  //   cy.get('#selection-type').should('have.value', 'vip');
  //  });


  //  it('selects a few fuits and make sure the correct fruits are displayed', ()=> {
  //   cy.get('select[multiple]')
  //     .select(['apple', 'banana','cherry']);  
    
  //   cy.get('#fruits-paragraph') 
  //     .should('contain', 'You\'ve selected the following fruits: apple, banana, cherry');
  //  });
   
  //  it('selects a file and make sure the correct file name is displayed', ()=> {
  //   cy.get('input[type="file"]')
  //   .selectFile('/xampp/htdocs/cypress_e2e_test/cypress/fixtures/example.json')
  //  });
   




   it('Intercepts and waits for a real Get TODO request', ()=> {
    cy.intercept('GET', 'https://cypress-playground.s3.eu-central-1.amazonaws.com/').as('getTodo');
    cy.contains('button', 'Get TODO').click() // this would trigger the above request.
    cy.wait('@getTodo')
    cy.get('ul') // Select the <ul> element containing the list items
    .should('contain', 'TODO ID: 1')
    .and('contain', 'Title: delectus aut autem')
    .and('contain', 'Completed: false')
    .and('contain', 'User ID: 1');
   });
      




  // it('Makes a GET request to /todos/1 and checks the status code', () => {
  //   cy.request('GET', 'https://jsonplaceholder.typicode.com/todos/1')
  //     .its('status')
  //     .should('be.equal', 200); // Assert that the response status is 200
  // });
  
  // it('Selects a level using a range slider', () => {
  //   cy.get('input[type="range"]')
  //     .invoke('val', 8) 
  //     .trigger('change'); 
      
  //     cy.get('#level-paragraph') //kalok mau lebih spesifik pakek namnbah strong di get, biar bisa akses <strong> terus contain ganti have.text
  //     .should('contain', '8'); 
  // });
  
  // it('Types a date and blurs the date field', () => {
  //  cy.get('input[type="date"]')
  //   .type('2222-02-22') 
  //   .blur(); 

  //   cy.get('#date-paragraph') 
  //   .should('contain', '2222-02-22'); 
  // });

  // it('Handles sensitive data securely', () => {
  //   // Masukkan password ke input password tanpa log data ke log Cypress
  //   cy.get('input[type="password"]')
  //   .type(String(Cypress.env('password')), {log:false}); //ini kalok nurut contoh error, sementara maksa rubah ke string biar ga unditified, tapi gatau ini aslinya error kenapa, ntar coba tanya dicha wkwk
 
  //   // Centang "Show passworsd" untuk menampilkan password
  //   cy.get('input[type="checkbox"]')
  //    .check();

  //   // Verifikasi bahwa password ditampilkan
  //   cy.get('#password')
  //    .should('have.attr', 'type', 'text'); // Password terlihat

  //   // Uncheck "Show password" untuk menyembunyikan password
  //   cy.get('input[type="checkbox"]')
  //     .uncheck();

  //   // Verifikasi bahwa password kembali disembunyikan
  //   cy.get('input[type="password"]')
  //     .should('have.attr', 'type', 'password'); // Password tersembunyi
  //   });

  // it('counts the number of animals in the below list and make sure it\'s 5', () => {
  //   cy.get('ul li').should('have.length', 5); //kalok mau spesifik pakek id selector '#animals li'
  // });

  // it('Displays success message when the correct code is submitted', () => {
  //   // Get the code from the #code element
  //   cy.get('#timestamp') // Select the <span> element
  //   .then((element) => {
  //     const code = element.text(); // Extract the text value
  //     cy.get('#code').type(code); // Type the code into the input field
  // });
      
  //   // Click the submit button
  //   cy.contains('button', 'Submit').click();
  
  //   // Assert the success message is visible
  //   cy.get('.success').should('be.visible');
  // });

  // it('Displays error message when the wrong code is submitted', () => {
  //   // Type an incorrect code into the input field
  //   cy.get('#code').type('0');
  
  //   // Click the submit button
  //   cy.contains('button', 'Submit').click();
  
  //   // Assert the error message is visible
  //   cy.get('.error').should('be.visible');
  // });
  
  // it('Downloads a text file and verifies its content', () => {
  //   // Click the download link
  //   cy.contains('a', 'Download a text file').click();
  
  //   // Read the downloaded file
  //   cy.readFile('cypress/downloads/example.txt')
  //     .should('be.equal', 'This is an example text file.'); // Verify file content
  // });
  

});

// describe('Freeze clock and assert displayed date', () => {
//   beforeEach(() => {
//     // Freeze the date to January 6, 2025
//     const frozenDate = new Date(2025, 0, 7); // Month & date is 0-indexed, so 0 = January
//     cy.clock(frozenDate); // Freeze the browser's clock to this date

    
//     cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html'); 
//   });

//   it('Displays the correct frozen date', () => {
//     // Assert that the date "2025-01-06" is displayed correctly
//     cy.contains('p', '2025-01-06').should('be.visible');
//   });

// });
