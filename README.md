# Algolia technical test

This project is made for the technical test part of the Algolia hiring process.

The original requirements can be found at [requirements.md](requirements.md).

# Frontend

## Components

This project uses several Vue components. All of them are prefixed with `al-`. You can either supply your own [`algoliaHelper`](https://github.com/algolia/algoliasearch-helper-js) in the `:helper` attribute, or nest the tags in an `al-search` tag and insert `:helper='helper'` in the child, that will deal with that complexity for you.

Styling is opinionated and makes use of [Tachyons](https://tachyons.io).

### al-search
**props**: `:app-id='XCG7JJBBFK', :api-key='e3d622501fbbe065394049f746b16314'`
### al-input
**props**: `:helper='helper'`
### al-facet
**props**: `:options='categories' :name='"categories"' :helper='helper'`
### al-sort
**props**: `:options='options' :helper='helper'`
### al-stats
**props**: `:hits='stats.hits' :time='stats.time'`
### al-result
**props**: `:result='result'`
### al-pagination
**props**: `:current='pagination.current' :total='pagination.total' :helper='helper'`
### al-results
**props**: `:stats='stats', :pagination='pagination' :results='results' :helper='helper'`

A component that includes `stats`, `results` and `pagination`.

# Backend

The backend is written in Express and has two main routes. Static routes, which are in `/controllers/index.js` and API routes, which are in `/controllers/api/`.

## API v1

The API route `1/index.js` contains two methods:

* `POST /api/1/apps` with a JSON body this will be added to the `appstore` Algolia index.
* `DELETE /api/1/apps/:id` will delete the object with that idea at the `appstore` Algolia index.

# Setup

The api routes require an Algolia Admin API Key you can find on [algolia.com/api-keys](https://www.algolia.com/api-keys). This should be set as the [environment variable](https://www.gnu.org/software/bash/manual/html_node/Shell-Parameters.html#Shell-Parameters) `ALGOLIA_API_KEY`. Other API keys are at `/controllers/api/1/index.js` and `/views/index.pug`.
