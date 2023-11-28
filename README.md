# k_crud

KCrud - JavaScript client for k_crud
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0
- Package version: 1.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install k_crud --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your k_crud from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install dprakash2101/NodeCLientOpai --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var KCrud = require('k_crud');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var api = new KCrud.ContactApi()
var callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ');
        console.log(data);
    }
};
api.contactGet(callback);
****

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost:7207*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*KCrud.ContactApi* | [**contactGet**](docs/ContactApi.md#contactGet) | **GET** /contact | 
*KCrud.ContactApi* | [**contactIdDelete**](docs/ContactApi.md#contactIdDelete) | **DELETE** /contact/{id} | 
*KCrud.ContactApi* | [**contactIdGet**](docs/ContactApi.md#contactIdGet) | **GET** /contact/{id} | 
*KCrud.ContactApi* | [**contactIdPut**](docs/ContactApi.md#contactIdPut) | **PUT** /contact/{id} | 
*KCrud.ContactApi* | [**contactPost**](docs/ContactApi.md#contactPost) | **POST** /contact | 


## Documentation for Models

 - [KCrud.Contact](docs/Contact.md)


## Documentation for Authorization

Endpoints do not require authorization.

