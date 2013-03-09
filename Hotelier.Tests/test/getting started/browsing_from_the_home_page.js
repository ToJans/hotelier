(function() {
  var System;

  System = require('../system');

  Scenario("A new customer wants to set up their hotel", function() {
    var client, system;
    system = new System();
    client = system.add_client();
    Given("A new customer visits our website", function(done) {
      return system.start(function() {
        return client.browse_to_website(done);
      });
    });
    When("the customer asks to set up their hotel", function(done) {
      return client.ask_to_create_hotel(done);
    });
    Then("a form should be displayed", function() {
      return client.can_see('form');
    });
    And("the form asks for the name of the hotel", function() {
      return client.has_form_input('name');
    });
    And("the form asks for the description of the hotel", function() {
      return client_has_form_input('description');
    });
    return after(function() {
      return system.stop();
    });
  });

}).call(this);
