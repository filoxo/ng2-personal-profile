### Congratuations
You've come this far and have gotten your first Angular2 page working, created several components, a service, and performed an http request to get the data. 

There are a few things we can still do to improve your application. For one, go back and replace the dummy data (like "Your name" and "email@address.com") with real values. Make it your own.

#### Polish

Our view is fine, but let's make a few adjustments. 

##### Pipes
In our `JobComponent`, our date strings are ugly and not very readable. We will format them using Angular2 [`pipes`](https://angular.io/docs/ts/latest/guide/pipes.html). 

In our template string, we can pipe the value of our property to a pipe by by using the pipe (`\`) operator. 
	
	{{ job.startDate | date }}
			
Now, before we get ahead of ourselves, we have to remember that our `json` data are only strings. The `DatePipe` requires a `Date` object, and for now our dates are stored as strings. 
	
We can convert our date strings into `Date`s on the component initialization. 
			
	import { OnInit } from 'angular2/core';
	...
	export class JobComponent {
		@Input() job;
		ngOnInit(){
		}
	}

Why ngOnInit? Because our constructor function won't have access to the `Job` input. That's not the purpose of a constructor. 

So in `ngOnInit()`, we will check if we have a value in `job.startDate` and `job.endDate` and create a `new Date` if possible. 

	ngOnInit(){
    if(this.job.startDate){
      this.job.startDate = new Date(this.job.startDate);
    }
    if(this.job.endDate){
      this.job.endDate = new Date(this.job.endDate);
    }
	}
	
Now we're ready to use update our template to format the dates properly. In our template, we pipe our properties into the date pipe. 

	{{ job.startDate | date:"mediumDate" }}&ndash;{{ job.endDate | date:"mediumDate" }}
	
There are multiple `format` values that we can pass into the date pipe to produce different datetime display values. We're using the `"mediumDate"` format, but there are many [other formats for pipes](https://angular.io/docs/ts/latest/api/common/DatePipe-class.html). 

##### NgIf
Now, our placeholder data has an example of a `null` value that won't be a valid Date to pass in into our pipe. Moreover we would rather display an alternative message if the date is null. A null end date would signify that the job is still current, so we'll display `"present"` instead. 

But how? How do we show or hide an element in our template? It is easy with the [`ngIf`](https://angular.io/docs/ts/latest/api/common/NgIf-directive.html) directive. We give it an expression to evaluate, and the element will be shown or hidden based on whether the condition evaluates to true or false, respectively. 

Let's apply this to our template.

	<span *ngIf="job.startDate">{{ job.startDate | date:"mediumDate" }}</span>
	&ndash;
	<span *ngIf="job.endDate">{{ job.endDate | date:"mediumDate" }}</span>
	<span *ngIf="!job.endDate">present</span>
	
So, altogether our revamped `JobComponent` now looks like this:

	import { Component, Input } from 'angular2/core';
	import { OnInit } from 'angular2/core';

	@Component({
    selector: 'job-component',
    template:
		`<section class="post">
		  <header class="post-header">
		    <h2 class="post-title">{{ job.title }}</h2>
		    <p class="post-meta">{{ job.company }},
	        <span *ngIf="job.startDate">{{ job.startDate | date:"mediumDate" }}</span>
	        &ndash;
	        <span *ngIf="job.endDate">{{ job.endDate | date:"mediumDate" }}</span>
	        <span *ngIf="!job.endDate">present</span>
		    </p>
		  </header>
		  <div class="post-description">
		    <p>{{ job.description }}</p>
		  </div>
		</section>`
	})
	export class JobComponent {
    @Input() job;
    ngOnInit(){
      if(this.job.startDate){
        this.job.startDate = new Date(this.job.startDate);
      }
      if(this.job.endDate){
        this.job.endDate = new Date(this.job.endDate);
      }
    }
	}
	
The result should look like this:

![](http://i.imgur.com/I2FQojk.png)

#### More polish

What else is there to do? Here are some ideas. 

- Add a `description` field to the jobs object
- Rather than making the description field just a long string, make it an array. Then output the array as a bulleted list. 
- Add another field that stores the logo of the company you worked for. 
- Add links to your other social media sites. 
- Add your photo to the sidebar