import { Component } from 'angular2/core';
import { JobComponent } from './job.component';
import { JobsService } from './jobs.service';
import { OnInit } from 'angular2/core';

@Component({
    selector: 'job-list',
    directives: [JobComponent],
    template:
`<div class="posts">
    <h2 class="content-subhead">Experience</h2>
    <section class="post" *ngFor="#job of jobs">
        <job-component [job]="job"></job-component>
    </section>
</div>`,
    providers: [JobsService]
})
export class JobListComponent implements OnInit {
    jobs = [];
    constructor(private _jobsService:JobsService) {}

    ngOnInit() {
        this._jobsService.getJobs()
            .subscribe(res => this.jobs = res.jobs); //Subscribing to observable
    }
}