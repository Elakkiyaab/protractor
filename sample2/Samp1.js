describe ('Lobster Ink', function() {

    beforeEach(function() {
        browser.get('https://lobsterink.com/');

    } );
   // it ('clicking on Login link', function()
  //  {
 //       element(by.linkText('Login')).click();

 //   });

    it ('clicking on explore our courses', function()
    {
        expect(browser.getTitle()).toContain('The world\'s leading hospitality learning platform I Lobster Ink');
        element(by.linkText('EXPLORE OUR COURSES')).click();
       // expect(browser.getCurrentUrl()).toContain('The world\'s leading hospitality learning platform I Lobster Ink');

        //browser.waitForAngular();
        //expect(browser.getCurrentUrl()).toMatch('courses/');


    });


});