# KCrud.ContactApi

All URIs are relative to *https://localhost:7207*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactGet**](ContactApi.md#contactGet) | **GET** /contact | 
[**contactIdDelete**](ContactApi.md#contactIdDelete) | **DELETE** /contact/{id} | 
[**contactIdGet**](ContactApi.md#contactIdGet) | **GET** /contact/{id} | 
[**contactIdPut**](ContactApi.md#contactIdPut) | **PUT** /contact/{id} | 
[**contactPost**](ContactApi.md#contactPost) | **POST** /contact | 



## contactGet

> [Contact] contactGet()



### Example

```javascript
import KCrud from 'k_crud';

let apiInstance = new KCrud.ContactApi();
apiInstance.contactGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Contact]**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## contactIdDelete

> [Contact] contactIdDelete(id)



### Example

```javascript
import KCrud from 'k_crud';

let apiInstance = new KCrud.ContactApi();
let id = 56; // Number | 
apiInstance.contactIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**[Contact]**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## contactIdGet

> Contact contactIdGet(id)



### Example

```javascript
import KCrud from 'k_crud';

let apiInstance = new KCrud.ContactApi();
let id = 56; // Number | 
apiInstance.contactIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## contactIdPut

> [Contact] contactIdPut(id, opts)



### Example

```javascript
import KCrud from 'k_crud';

let apiInstance = new KCrud.ContactApi();
let id = 56; // Number | 
let opts = {
  'contact': new KCrud.Contact() // Contact | 
};
apiInstance.contactIdPut(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **contact** | [**Contact**](Contact.md)|  | [optional] 

### Return type

[**[Contact]**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## contactPost

> [Contact] contactPost(opts)



### Example

```javascript
import KCrud from 'k_crud';

let apiInstance = new KCrud.ContactApi();
let opts = {
  'contact': new KCrud.Contact() // Contact | 
};
apiInstance.contactPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact** | [**Contact**](Contact.md)|  | [optional] 

### Return type

[**[Contact]**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

