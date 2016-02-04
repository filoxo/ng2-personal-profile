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