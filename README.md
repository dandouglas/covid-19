# Coronavirus

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

It has been built to follow a "smart dumb" architecture.  

Containers are smart components as they have external dependencies and contain logic but are not part of the routes.

Pages are smart components but are part of the routes.

Components are "dumb components" as they have not external dependencies or logic.  They are purely for display.

The project also utilises NgRx.. all this is not really necessary for such a small project but it's a good example of how large scale application could be built
with Angular and NgRx.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deploying

- Merge master
- $ git push origin gh-pages
- $ ng build --prod --base-href https://dandouglas.github.io/covid-19/
- $ ngh --dir=dist/covid-19
