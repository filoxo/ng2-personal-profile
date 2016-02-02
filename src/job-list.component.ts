import { Component } from 'angular2/core';

@Component({
    selector: 'job-list',
    template:
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
})
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