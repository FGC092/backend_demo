# Backend server demo

This is a dummy project to show a backend server typical structure.

## Server endpoints:

This demo includes 2 endpoints to gather data from a hardcoded url and execute some processes. 

These endpoints returns a json with the following data: { number_of_products, average_price, average_rating, products }

`http://localhost:3000/products/` - To review products without limit

`http://localhost:3000/products/:maxListedProducts` - To review products with max limit. This endpoint requires the following token in authorization header to get a respones: `Basic ABCD`

## Server execution and implementation:

> ### Development purposes:  
> Server could be launched with the following command `node index.js`.
> 
> The server could be launched with `npm start` to enable auto reload the server when files are saved using `nodemon` package.

> ### Production environment:
> Server could be launched as a process in a cloud instance and redirect traffic to the defined enpoints throuout Nginx or Apache.

## Included concepts:

This projects intents to create a basic NodeJs structure and include the following concepts:

* Exposing server endpoints: How to start a event handler that listens to http request in a defined port and generate a response taking into account the provided routing.
* Handle asyncronous task with promises: How to process data retrived asyncronsously with async await.
* Include custom middleware in exposed endpoints: Middlewares allows to execute the same script for several endpoints.
* Include external npm packages: There are several npm third party packages included in this project such as axiox and simple-statistics

## Concepts to be included in the future:

* Create a server worker to process information periodically
* Handle asyncronous tasks with eventEmitter from 'events' module
