import {Component} from 'angular2/core';
import {JobListComponent} from './job-list.component';
import {JobComponent} from './job.component';

@Component({
    selector: 'my-app',
    templateUrl: 'template/main.html',
    directives: [JobListComponent]
})
export class AppComponent {
    public name = 'Your name';
    public email = 'youremail@address.com';
}