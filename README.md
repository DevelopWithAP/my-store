# MyStore
A single page application handling the front end of an e-commerce site.
## Technologies
* ``Angular`` framework. ``Angular CLI`` for project scaffolding.
* ```npm``` for package management.
* ``TypeScript`` for enforcing strict typing.
* ``Angular Router`` for routing and navigation.
* ``RxJS`` for subscribing to Observables.
* ``HttpClientModule`` for handling asynchronous calls.
* ``node.js`` as a runtime environment.
* ``json server`` as a fake back-end.
## Set up and installation.
All relevant dependencies can be installed using the ``npm`` package manager.
To install and use ``json server`` run ``npm install json-server``.
## Running the application.
* ``npm run server`` will start the back end server which contains product information in JSON format. The server will run on port 3000.
Once online navigate to ``http://localhost:3000/products`` to obtain a JSON view of all available products.
* ``ng serve -o`` will start the application server which runs on port 4200 by default. You can view the application by navigating to ``http://localhost:4200`` on your browser.
* ``ng build`` will compile the application into an output directory called ``dist/``.
## Functionality.
The application supports the following functionality:
### Products view. 
  Users can have an overview of all the available products. They can add the product to their cart in the desired quantity by clicking the appropriate button.
### Product view. 
Users can view additional product information not available in the previous view. An ``Add to Cart`` button is still available in this view along with a quantity input field.
### Cart view.
Users can view the products they have previously added to their cart in the quantity of their choice. The quantity of the product can still be adjusted by clicking the appropriate buttons.
Users can view the subtotal amount of the items in their cart. It is fully responsive meaning that any changes that might affect that amount are registered automaticallty. The subtotal only appears in the event of a non-empty cart.
### Customer view.
Users can fill in the information required to complete their purchase such as name, address and card number. In other words this view serves as a checkout form. The ``Place Order`` button is disabled until
all the user inputs are valid. 
### Conformation view.
Users are redirected to this view on completing their purchase. This view displays the amount spent as well as infromation about the card used to complete the purchase. 

