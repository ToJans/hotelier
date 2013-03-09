System = require('../system')

Scenario "A new customer wants to set up their hotel", ->
  system = new System()
  client = system.add_client()

  Given "A new customer visits our website", (done) ->
    system.start ->
      client.browse_to_website(done)
  
  When "the customer asks to set up their hotel", (done) ->
    client.ask_to_create_hotel(done)

  Then "a form should be displayed", ->
    client.can_see('form')

  And "the form asks for the name of the hotel", ->
    client.has_form_input('name')

  And "the form asks for the description of the hotel", ->
    client_has_form_input('description')

  after ->
    system.stop()
    