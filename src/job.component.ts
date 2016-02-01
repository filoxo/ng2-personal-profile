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
    public title: String = "Web Developer";
    public company: String = "MyCompany, Inc.";
    public startDate: Date = new Date();
    public endDate: Date = new Date();
}