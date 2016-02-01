import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template:
`<div id="layout" class="pure-g">
    <div class="sidebar pure-u-1 pure-u-md-1-4">
        <div class="header">
            <h1 class="brand-title">{{ name }}</h1>
            <h2 class="brand-tagline">{{ email }}</h2>
        </div>
    </div>

    <main class="content pure-u-1 pure-u-md-3-4">
        <div>
            <!-- Posts wrapper -->
            <div class="posts">
                <h1 class="content-subhead">Experience</h1>

                <!-- Single post -->
                <section class="post">
                    <header class="post-header">
                        <h2 class="post-title">Job Position</h2>
                        <p class="post-meta">Job metadata</p>
                    </header>
                    <div class="post-description">
                        <p>Job description</p>
                    </div>
                </section>
            </div>
        </div>
    </main>
</div>`
})
export class AppComponent {
    public name = 'Your name';
    public email = 'youremail@address.com';
}