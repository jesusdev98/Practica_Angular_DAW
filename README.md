# AplicacionPrueba2

Angular Single Page Application that models a compact e-commerce workflow. It includes a product catalog, shopping cart interactions, a product administration area, and a user listing view backed by an external API.

The project is organized around client-side routing, shared state management, reactive forms, and HTTP data retrieval.

## Features

- Product catalog with product name, price, and stock visibility
- Add-to-cart flow with automatic stock updates
- Cart management with item removal and stock restoration
- Product administration panel for creating and deleting catalog items
- Reactive form validation for product creation
- User listing view backed by a REST endpoint with UI-level error handling
- Client-side navigation between store, administration, and users sections

## Tech Stack

- Angular 21
- TypeScript
- Angular Router
- Angular Reactive Forms
- Angular HttpClient
- RxJS
- SCSS
- Vitest
- Angular CLI

## Architecture

The application follows a classic Angular `NgModule` structure centered on `AppModule`, which wires the root components, `ReactiveFormsModule`, router configuration, and the modern `provideHttpClient()` provider setup.

Routing is defined in `AppRoutingModule` and exposes three main views:

- `/tienda` for the storefront
- `/admin` for catalog administration
- `/users` for user retrieval

State for the storefront is centralized in `TiendaService`, a singleton service that keeps the product catalog and shopping cart in memory. This service is shared across the store and administration flows, allowing product creation, deletion, stock updates, and cart operations to remain consistent across views.

The storefront itself is split between a container component (`Main`) and presentation components (`ListadoProductos` and `CarritoCompra`), using `@Input()` and `@Output()` bindings for component communication. The users area is isolated behind `UsuariosServicio`, which wraps `HttpClient` access to the external endpoint and handles request failures with RxJS error handling.

## Key Concepts Demonstrated

- Shared in-memory state management through an injectable Angular service
- Component composition with parent-child communication via inputs and outputs
- Reactive forms with validation rules for administrative workflows
- Client-side routing between functional areas of the application
- HTTP data retrieval with subscription lifecycle handling and error propagation

## Getting Started

### Requirements

- Node.js
- npm

This repository declares `npm@11.6.2` as its package manager in `package.json`.

### Installation

```bash
npm install
```

### Run the Development Server

```bash
npm start
```

By default, the application runs at `http://localhost:4200/`.

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm test
```

## Project Structure

```text
src/
  app/
    admin-productos/      Product administration view
    carrito-compra/       Shopping cart presentation component
    listado-productos/    Product catalog presentation component
    main/                 Storefront container view
    menu/                 Top-level navigation
    usuarios/             Users view
    tienda.service.ts     Shared in-memory store for catalog and cart
    usuarios-servicio.ts  HTTP service for user retrieval
    app-module.ts         Root Angular module
    app-routing-module.ts Application routing
  styles.scss             Global styles
  main.ts                 Application bootstrap
public/
  favicon.ico
```

## Notes

- Product and cart data are managed in memory through `TiendaService`; changes are reset on page reload.
- The users section consumes `https://jsonplaceholder.typicode.com/users` and displays request errors in the UI.
- The project uses SCSS and a component-based split between container components and presentation components.

## Limitations

- Catalog and cart persistence is not implemented; application state is reset on refresh.
- Product data is managed locally in the frontend rather than through a backend API.
