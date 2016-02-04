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
    var JobComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            JobComponent = (function () {
                function JobComponent() {
                }
                JobComponent.prototype.ngOnInit = function () {
                    if (this.job.startDate) {
                        this.job.startDate = new Date(this.job.startDate);
                    }
                    if (this.job.endDate) {
                        this.job.endDate = new Date(this.job.endDate);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], JobComponent.prototype, "job", void 0);
                JobComponent = __decorate([
                    core_1.Component({
                        selector: 'job-component',
                        template: "<section class=\"post\">\n  <header class=\"post-header\">\n    <h2 class=\"post-title\">{{ job.title }}</h2>\n    <p class=\"post-meta\">{{ job.company }},\n        <span *ngIf=\"job.startDate\">{{ job.startDate | date:\"mediumDate\" }}</span>\n        &ndash;\n        <span *ngIf=\"job.endDate\">{{ job.endDate | date:\"mediumDate\" }}</span>\n        <span *ngIf=\"!job.endDate\">present</span>\n    </p>\n  </header>\n  <div class=\"post-description\">\n    <p>{{ job.description }}</p>\n  </div>\n</section>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], JobComponent);
                return JobComponent;
            })();
            exports_1("JobComponent", JobComponent);
        }
    }
});
//# sourceMappingURL=job.component.js.map