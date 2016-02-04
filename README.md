# ng2-personal-profile
A beginner personal website project for getting started with Angular 2 with Typescript. 

## Overall description
This repo outlines the steps you'd take to get started with Angular 2 to create a website. You could clone the master branch and tailor it for your own needs, but the true purpose is to outline each step on how to get started with Angular2 so that you can become familiar with the inner workings and the setup. 

### So, what is TypeScript? 
TypeScript is an open-source superset of JavaScript originating from Microsoft. It incorporates typing rules, like those of other Object-Oriented languages, that allows for stricter typing and class-based development. TypeScript is a __transpiler__ so the code you write with it will eventually be converted into plain JavaScript. 
You will hear from both sides of whether TypeScript is a good or bad thing, but suffice it to say that the engineers at Google felt that it was worthwhile to adopt and base Angular2 on. 

### Node.js, npm, no entiendo?
Node is very popular because it enables JavaScript to be your server-side language. This means that you are one step closer to a 'universal language' because both your backend and frontend can use the same language. Nice! There will be nuances and slight syntactical difference to work out, but in the end its all JavaScript. 

`npm` is the Node Package Manager. It will take care of managing the dependent packages that your project will rely on. It has a great deal of features, but the most important one for this project is that it will save a list of dependencies for both a production and development environment. This makes it very easy to share across systems (think: your development machine, and the production server). 

### Let's get cooking 
Notes: commands and code will be formatted for clarity. 

1. Run `npm init`
	- This will lead you through a series of questions relating to your project, and will create a file called `package.json` to store that information. This is the file that you'd use to install your project's dependencies on a difference computer. 

2. Run `npm install angular2@2.0.0-beta.1 rxjs@5.0.0-beta.0 systemjs es6-promise es6-shim@0.33.3 reflect-metadata@0.1.2 zone.js@0.5.10 --save`
	- We are using npm to install Angular2, Rxjs, Systemjs, and some additional packages. These will all be saved into their own folder called `node-packages`.
	- Note the `--save` flag that we are passing into the command. This will save those packages as **required** dependecies for your project to run.
	- Note that we are asking for specific versions of some packages with the `@` and version number. 
	- You might open `package.json` before running this command and comparing it with what it contains after. Look for the `dependencies` list. 

3. Run `npm install typescript concurrently lite-server --save-dev`
	- The real reason this a separate step is because of the `--save-dev` flag. This will save the packages as **development dependencies** and won't install them unless you do so specifically. 

4. Edit `scripts` section of `package.json` with the following:

		"scripts": {
		  "tsc": "tsc",
		  "tsc:w": "tsc -w",
		  "lite": "lite-server",
		  "start": "concurrent \"npm run tsc:w\" \"npm run lite\" "
		},
		
	This adds aliases that we will use to start the server. `tsc` is the TypeScript compiler, the `-w` flag is to enable a watcher, and `lite-server` is a simple HTTP server to deliver our web assets. 

5. Now we will configure TypeScript
	At your project root, create a new file named `tsconfig.json` and copy the below into it. Save.

		{
			"compilerOptions": {
			"target": "ES5",
			"module": "system",
			"moduleResolution": "node",
			"sourceMap": true,
			"emitDecoratorMetadata": true,
			"experimentalDecorators": true,
			"removeComments": false,
			"noImplicitAny": false,
			"outDir": "./app"
			},
			"exclude": [
				"node_modules"
			]
		}

6. Let's add a .gitignore so that unnecessary things don't get saved into our repo.
	- create a file called `.gitignore` (don't forget the preceding period)
	- In it, just type `node_modules/` and save. 
	- Run `git add .gitignore` and then `git commit -m "Add .gitignore"` to save it to your repo. 
	- Now you can add the rest of the files that we've just created. 

7. Create a `src` and an `app` folder
8. Create `app.component.ts` inside `src/` and copy the code below into it

		import {Component} from 'angular2/core';
		
		@Component({
		    selector: 'my-app',
		    template: '<h1>My First Angular 2 App</h1>'
		})
		export class AppComponent { }

    Let's review this code:
      - We are importing `Component` as a _class_ from Angular2's core library. At the bottom of the file, we are exporting `AppComponent` as a class as well.
      - The `export` statement is what turns the file into a module. Angular apps are modular, and each file should correspond to only one module. 
      - The `@` in front of Component means that it is a _decorator_. This will apply metadata to our class using the configuration object we are passing into it. 
      - The configuration object has 2 properties: `selector` and `template`. 
		    - The `selector` specifies a simple CSS selector for a host HTML element named `my-app`. 
		    - The `template` property holds the component's companion template. A template is a form of HTML that tells Angular how to render a view. Our template is a single line of HTML announcing "My First Angular App". 
    
9. Bootstrap the application
	- Create `main.ts` in `src` and copy in the below code
	
			import {bootstrap}    from 'angular2/platform/browser'
			import {AppComponent} from './app.component'
			
			bootstrap(AppComponent);
			
	We are importing bootstrap, Angular2's method to starting your application. You can learn more about [Angular's bootstrap function](https://angular.io/docs/ts/latest/quickstart.html#!#main) from their docs. Don't get confused with Twitter's Bootstrap styling! We are also importing the AppComponent we just exported in our `app.component` file.
	
10. Add `index.html` to the project root and copy the below code

		<!DOCTYPE html>
		<html lang="en">
		<head>
		  <meta charset="UTF-8">
		  <title>Personal Profile</title>
		  <!-- 1. Load libraries -->
		  <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
		  <script src="node_modules/systemjs/dist/system.src.js"></script>
		  <script src="node_modules/rxjs/bundles/Rx.js"></script>
		  <script src="node_modules/angular2/bundles/angular2.dev.js"></script>
		  <!-- 2. Configure SystemJS -->
		  <script>
		    System.config({
		      packages: {
		        app: {
		          format: 'register',
		          defaultExtension: 'js'
		        }
		      }
		    });
		    System.import('app/main')
		      .then(null, console.error.bind(console));
		  </script>
		</head>
		
		<!-- 3. Display the application -->
		<body>
		  <my-app>Loading...</my-app>
		</body>
		</html>

	There are three noteworthy sections of HTML:
    - We load the JavaScript libraries we need.
    - We configure something called `System` and ask it to import the `main` file we just wrote. SystemJS is a module loader that pulls in the parts that as needed, starting with `main`.
    - We add the `<my-app>` tag in the `<body>`. This is where our app lives!
    
11. Run `npm start`
	That command runs two parallel node processes
		- The TypeScript compiler in watch mode
		- A static server called `lite-server` that loads `index.html` in a browser and refreshes the browser when application files change
	
	A browser tab should open and display 
	![](http://i.imgur.com/9m1GQ7C.png)
	
### Congrats! It works!

The TypeScript compiler and `lite-server` are watching so they will be able to detect changes, recompile the TypeScript into JavaScript, refresh the browser, and display the code. Play around with the text in the `<h1>` tag to see this in action. 

Once you're ready, move in to PART2.md. 