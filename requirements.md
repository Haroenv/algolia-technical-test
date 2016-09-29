# Requirements

The app is composed by 2 parts:

* the backend: handling the HTTP routing & the Algolia indexing,
and the frontend: displaying an instant-search interface to search in the underlying items. In the spirit of https://demo.algolia.com/instant-search-demo/
* The app you need to build is a small Appstore search. The initial import dataset can be found here: data.json (just below this subject).

## Backend

Build the smallest MVC framework able to route an HTTP query and send the response.

The framework does not need to handle more than what is required for the app.

The app needs to implement the following endpoints:

* GET / => Render an HTML page displaying an instant-search interface searching in an Algolia apps index.
* POST /api/1/apps => Add an app (as a JSON object) to the Algolia apps index and return its id
* DELETE /api/1/apps/:id => Delete an app from the Algolia index

You can use any technology for this.

## Frontend

Build a nice looking, relevant & fast instant-search interface searching in the underlying apps.

You must use Vue.js 2 to build this demo.

The frontend UI should include:

* a searchbox
* list of apps found
* a categories filtering (faceting)
* a sort by rank (default asc, allow desc and any other sort you want)
