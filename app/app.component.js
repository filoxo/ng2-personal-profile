System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = 'Your name';
                    this.email = 'youremail@address.com';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<div id=\"layout\" class=\"pure-g\">\n    <div class=\"sidebar pure-u-1 pure-u-md-1-4\">\n        <div class=\"header\">\n            <h1 class=\"brand-title\">{{ name }}</h1>\n            <h2 class=\"brand-tagline\">{{ email }}</h2>\n        </div>\n    </div>\n\n    <main class=\"content pure-u-1 pure-u-md-3-4\">\n        <div>\n            <!-- Posts wrapper -->\n            <div class=\"posts\">\n                <h1 class=\"content-subhead\">Experience</h1>\n\n                <!-- Single post -->\n                <section class=\"post\">\n                    <header class=\"post-header\">\n                        <h2 class=\"post-title\">Job Position</h2>\n                        <p class=\"post-meta\">Job metadata</p>\n                    </header>\n                    <div class=\"post-description\">\n                        <p>Job description</p>\n                    </div>\n                </section>\n            </div>\n        </div>\n    </main>\n</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map