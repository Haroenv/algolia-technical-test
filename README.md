# Algolia technical test

This project is made for the technical test part of the Algolia hiring process.

The original requirements can be found at [requirements.md](requirements.md).

# Frontend

## Components

This project uses several Vue components. All of them are prefixed with `al-`. You need to either directly nest the other components in an `al-search` or supply the `:al-search` attribute.

Styling is opinionated and makes use of [Tachyons](https://tachyons.io).

### al-search
**props**: `app-id='XCG7JJBBFK' api-key='e3d622501fbbe065394049f746b16314' facets=''`

A component that deals with the Algolia integration. Usually you'll wrap this around the other components. If that's not the case, then you will have to pass a reference to this `al-search` as a prop to each of the other components.

### al-input
**props**: `:al-search='alSearch'`

An input that will search over your specified `al-search`.

### al-facet
**props**: `:name='"categories"' :al-search='alSearch'`

A component that allows you to filter over a certain facet. Take in account that you need to give an array of facets to the `relevant` `al-search`.

### al-sort
**props**: `:options='options' :al-search='alSearch'`

Allows you to pick a different index to search in.

`options` can for example be:

```js
[{
  index: 'appstore_rating_asc',
  name: 'Rank ascending'
}, {
  index: 'appstore_rating_desc',
  name: 'Rank descending'
}]
```

### al-stats
**props**: `:al-search='alSearch'`

A component that shows the amount of hits and the amount of time needed for the latest result.

### al-result
**props**: `:result='result'`

Render a single search result.

### al-pagination
**props**: `:al-search='alSearch'`

Render and handle pagination functions.

### al-results
**props**: `:al-search='alSearch'`

A component that includes `stats`, `result`s and `pagination`.

# Backend

The backend is written in Express and has two main routes. Static routes, which are in `/controllers/index.js` and API routes, which are in `/controllers/api/`.

## API v1

The API route `1/index.js` contains two methods:

* `POST /api/1/apps` with a JSON body this will be added to the `appstore` Algolia index.
* `DELETE /api/1/apps/:id` will delete the object with that idea at the `appstore` Algolia index.

# Setup

The api routes require an Algolia Admin API Key you can find on [algolia.com/api-keys](https://www.algolia.com/api-keys). This should be set as the [environment variable](https://www.gnu.org/software/bash/manual/html_node/Shell-Parameters.html#Shell-Parameters) `ALGOLIA_API_KEY`. Other API keys are at `/controllers/api/1/index.js` and `/views/index.pug`.
