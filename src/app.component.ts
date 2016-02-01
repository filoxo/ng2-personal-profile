import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'template/main.html'
})
export class AppComponent {
    public name = 'Your name';
    public email = 'youremail@address.com';
}