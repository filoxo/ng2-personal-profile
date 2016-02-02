import { Component } from 'angular2/core';
import { JobComponent } from './job.component';

@Component({
    selector: 'job-list',
    directives: [JobComponent],
    template:
`<div class="posts">
    <h2 class="content-subhead">Experience</h2>
    <section class="post" *ngFor="#job of jobs">
        <job-component [job]="job"></job-component>
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