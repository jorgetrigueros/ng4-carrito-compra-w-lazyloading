# Descripcion

Proyecto Angular-4 para demostrar la comunicación entre componentes con Observable y BehaviorSubject.
El proyecto usa lazy-loading.
Para ello reemplazamos el componente raíz (app.component) por el "masterpage.component" dejando el módulo
app.module lo más "limpio" posible, y llevando la lógica del mismo al modulo core.module
Se usa [Bulma](http://bulma.io/) como framework CSS

![pantallazo](pantallazo.png)

# ng4-carrito-compra-w-lazyloading

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

npm install

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## instalacion bulma

npm install bulma --save

Añadir en el angular-cli.json
      "styles": [
        "./node_modules/bulma/css/bulma.css",

