# MVC in Express 
MVC Architectural Pattern built with express, mongo and ejs as a template engine.

## Description
The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller. Each of these components are built to handle specific development aspects of an application. MVC is one of the most frequently used industry-standard web development framework to create scalable and extensible projects.

<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MVC-Process.svg/1200px-MVC-Process.svg.png" width="300"></p>

# Getting Started

Firstly, clone this repository to your local machine.

```bash
git clone https://github.com/notwld/express-mvc
```

Install all the dependencies using,
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

#### Create Vehicle

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

#### Update Vehicle

```http
  POST /update/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Vehicle Id |

#### Delete Vehicle

```http
 DELETE /delete/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Vehicle Id |

#### GET Vehicle

```http
 GET /vehicle/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Vehicle Id |

