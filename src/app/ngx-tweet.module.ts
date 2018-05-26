import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxTweetComponent } from './components/ngx-tweet.component';
import { NgxTweetService } from './services/ngx-tweet.service';

@NgModule({
    declarations: [
        NgxTweetComponent
    ],
    imports: [ CommonModule ],
    exports: [ NgxTweetComponent ],
    providers: [ NgxTweetService ]
})
export class NgxTweetModule {
}
