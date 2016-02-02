# Part 2

The first part of the app isn't exciting and doesn't do much. We're going to change that. 

## Steps

#### 1. Add relevant data to our Component
- Edit `app.component.ts` and add some new properties to our class

		export class AppComponent {
			public name = 'Your name';
			public email = 'youremail@address.com';
		}
	      
#### 2. Link this data to our template

	@Component({
		...
		template: '<h1>{{ name }}</h1><h3>{{ email }}</h3>'
	})

##### Alternative
ES6 syntax allows us to use the backtick (&nbsp;\`&nbsp;) character to declare multi-line strings. Yay for syntactic sugar! This may not seem so awesome right now, but comes in handy later. 
	
	@Component({
		...
		template: `<h1>{{ name }}</h1>
		<h3>{{ email }}</h3>`
	})

And, returning to our browser, we should now see	
![](https://i.imgur.com/zpywhf6.png)
	
#### 3. Let's add some beauty. 
Now we know it works. We'll be using [Pure.css](http://purecss.io/) because it does not require any additional js, and has a great looking [blog layout](http://purecss.io/layouts/blog/) already pre-built. 

- Include the Pure.css CDN in your `index.html`: `<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">`
- Include the Pure.css Grid system: `<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css">`
- Download the [Pure Blog](http://purecss.io/layouts/blog/download) css files, extract, and copy `blog.css` from `css/layouts` into a new `css` folder in your project root.
- Include `blog.css` in your index page: `<link rel="stylesheet" href="css/blog.css">`
- Add the Viewport Meta Element to the top of the `<head>` element. The viewport meta element lets you control the the width and scale of the viewport on mobile browsers. Since you're building a responsive website, you want the width to be equal to the device's native width.
		
	All together, your index.html should look like this:
    
		<!DOCTYPE html>
		<html lang="en">
		<head>
		  <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1">
		  <title>Personal Profile</title>
		  <!-- 0. Load css -->
		  <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
		  <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css">
		  <link rel="stylesheet" href="css/blog.css">
		  <!-- 1. Load libraries -->
		  ...
		  
4. Let's now add the Pure elements to our template. Copy the below into your component's template. 

		`<div id="layout" class="pure-g">
		    <div class="sidebar pure-u-1 pure-u-md-1-4">
		        <div class="header">
		            <h1 class="brand-title">{{ name }}</h1>
		            <h2 class="brand-tagline">{{ email }}</h2>
		        </div>
		    </div>
		
		    <main class="content pure-u-1 pure-u-md-3-4">
		        <div>
		            <!-- Posts wrapper -->
		            <div class="posts">
		                <h1 class="content-subhead">Experience</h1>
		
		                <!-- Single post -->
		                <section class="post">
		                    <header class="post-header">
		                        <h2 class="post-title">Job Position</h2>
		                        <p class="post-meta">Job metadata</p>
		                    </header>
		                    <div class="post-description">
		                        <p>Job description</p>
		                    </div>
		                </section>
		            </div>
		        </div>
		    </main>
		</div>`
	
Switch back to your browser, and you'll now see the changed styles. 
![](http://i.imgur.com/yzXHJEG.png)

#### 5. Great! But that's a lot to keep inside a component file. Let's separate the template from the component.
- Create a `template` directory in the project root
- Inside `template/`, create a new file and name it `main.html`
- Take everything from the previous template string except the backticks, and paste it into that file
- Back in your component, change the `template` key to `templateUrl`
- Set the value of `templateUrl` to `template/main.html`
		
So what is this for? This does the exact same thing as before, but allows you to store the template in an external file. This will allow your component to remain readable, and possibly reuse that template later. Return to your browser and see that nothing has really changed in terms of layout. 

#### Job list
Instead of having a static page, let's create a component that will take a list of jobs and display each one. We'll call this a JobListComponent. 

- Create a new file and name it `job-list.component.ts`
- Use the standard syntax for creating your component

		import { Component } from 'angular2/core';
		    
		@Component({
			selector: 'job-list',
			template: ''
		})
		export class JobListComponent { }
		
- Let's create a property on our `JobListComponent` to hold our `jobs`

		export class JobListComponent {
		    public jobs = [
		        {
		            title: "Web Developer",
		            company: "MyCompany, Inc.",
		            startDate: new Date(),
		            endDate: new Date()
		        },
		        {
		            title: "Front End Developer",
		            company: "Big Co.",
		            startDate: new Date(),
		            endDate: new Date()
		        }
		    ];
		}

	Here we can create our data set that will be shown on the page. 

- Now let's create a template that will take this data. We're taking this from the HTML we had copied into index earlier, and moving it into this component. 

		`<div class="posts">
		    <h1 class="content-subhead">Experience</h1>
		    <section class="post" *ngFor="#job of jobs">
		      <header class="post-header">
		        <h2 class="post-title">{{ job.title }}</h2>
		        <p class="post-meta">{{ job.company }} | {{ job.startDate }}&ndash;{{ job.endDate }}</p>
		      </header>
		      <div class="post-description">
		        <p>Job description</p>
		      </div>
		    </section>
		</div>`

- Notice that the section element has a new attribute, [`ngFor`](https://angular.io/docs/ts/latest/api/common/NgFor-directive.html). This is the directive that replaces `ngRepeat` from Angular 1, and does exactly that: iterates through a set of elements. In our case, it is iterating over the `jobs` array, and creating a new section for each one. 
- Inside our loop, we are binding our list of jobs 

##### More modularlization
The static list is great, but we should further break down our components so that they are even more modular, in case we want to use our job information elsewhere. Let's create a `JobComponent`.

- In `src/` create `job.component.ts`
		
		import { Component } from 'angular2/core';
		
		@Component({
		    selector: 'job',
		    template:
		`<section class="post">
		  <header class="post-header">
		    <h2 class="post-title">{{ title }}</h2>
		    <p class="post-meta">{{ company }}, {{ startDate }}&ndash;{{ endDate }}</p>
		  </header>
		  <div class="post-description">
		    <p>Job description</p>
		  </div>
		</section>`
		})
		export class JobComponent {
		  @Input() job;
		}
		
Let's review the code above

- We changed our selector to look for a `job-element` in the HTML. Thus why we added `<job-element></job-element>` to our index page.
- The template for the JobComponent came from the single post element in index.
- The JobComponent class has an `Input` called job. We will use this to pass the job data from our `job-list` into the `JobComponent`.

We will now need to update the `JobListComponent` to be able to recognize a `JobComponent`. 

- At the top of our file, we need to `import { JobComponent } from './job.component';`
- In the `JobComponent` template, update the view to use a `<job-element>`.

		`<div class="posts">
		    <h2 class="content-subhead">Experience</h2>
		    <section class="post" *ngFor="#job of jobs">
		        <job-component [job]="job"></job-component>
		    </section>
		</div>` 
		
Notice that we're now utilizing the `job` input we had defined in our `JobComponent` in the form of `[job]`. We're passing through the local instance of a job by assigning it to that input. Our view still looks the same, but now we've separated concerns, logic, and functionality much better. 

#### Summary
We've created 2 new components (modules) that will allow us to compartmentalize as much as possible. In PART3.md we'll cover decoupling our data from our components and into a service.