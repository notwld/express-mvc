# MVC in Express 
MVC Architectural Pattern built with express, mongo and ejs as a template engine.

# Getting Started

First install all the dependencies using,
```bash
npm i
```
Create an .env file and define database's URI and application's Port.
```bash
URI=(your connection string)
PORT=3000
```

Finally run your application using,
```bash
npm start
```

## API Reference

#### GET all Vehicles

```http
  GET /
```

#### POST Vehicle

```http
  POST /save
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `v_type` | `string` | **Required**. Vehicle Type |
| `description` | `string` | **Required**. Vehicle Description |
| `model` | `string` | **Required**. Vehicle Model |
| `engine` | `string` | **Required**. Vehicle Engine |
| `color` | `string` | **Required**. Vehicle Color |

