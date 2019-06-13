Api routes
==========

### This API is a classic REST API developed in php with the symfony framework that returns a response to JSON object. 
#### The list of routes indicated in this file must be called in GET
-------------------

* The online server is **https://wine.frb.io** and will no longer be available from 15/06/2019


* Get the list of wines

```bash
curl {server}/api/wines
```

* Get a signe wine
```bash
curl {server}/api/wine/{wine_id}
```

* Search (a) wine(s)

```bash
curl {server}/api/wines/search/{researh_value}
```

* Get the list of countries

```bash
curl {server}/api/countries
```

* Get the list of productors

```bash
curl {server}/api/productors
```
* Get a single productor

```bash
curl {server}/api/productor/{productor_id}
```

* Get the wines average per country

```bash
curl {server}/api/average
```

* Get the three best wines per country

```php
curl {server}/api/best/wines
```

* Get varieties per country

```php
curl {server}/api/varieties
```









