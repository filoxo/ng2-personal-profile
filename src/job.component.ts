import { Component, Input } from 'angular2/core';

@Component({
    selector: 'job-component',
    template:
`<section class="post">
  <header class="post-header">
    <h2 class="post-title">{{ job.title }}</h2>
    <p class="post-meta">{{ job.company }}, {{ job.startDate }}&ndash;{{ job.endDate }}</p>
  </header>
  <div class="post-description">
    <p>Job description</p>
  </div>
</section>`
})
export class JobComponent {
    @Input() job;
}