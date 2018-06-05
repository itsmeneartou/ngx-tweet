import { AfterViewInit, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { NgxTweetService } from '../services/ngx-tweet.service';

@Component({
    selector: 'ngx-tweet',
    template: '',
    styles: ['.twitter-tweet { transform: none !important; }'],
    encapsulation: ViewEncapsulation.None
})
export class NgxTweetComponent implements AfterViewInit {

    @Input()
    public tweetId: string;

    constructor(private _elementRef: ElementRef, private _ngxTweetService: NgxTweetService) {
    }

    public ngAfterViewInit(): void {
        this._ngxTweetService
            .loadScript()
            .subscribe((twitterData: any) => {
                twitterData.widgets.createTweet(this.tweetId, this._elementRef.nativeElement, {});
            });
    }
}
