import { AfterViewInit, Component, ElementRef, Input } from "@angular/core";
import { TweetService } from "../../services";

@Component({
    selector: "ngxc-tweet",
    template: "",
    styles: [ "" ],
    providers: []
})
export class TweetComponent implements AfterViewInit {
    @Input()
    public tweetId: string = null;

    constructor(private element: ElementRef, private tweetService: TweetService) {}

    public ngAfterViewInit(): void {
        this.tweetService
            .loadScript()
            .subscribe((twitterScript: string) => {
                window[ "twttr" ].widgets.createTweet(this.tweetId, this.element.nativeElement, {});
            });
    }
}
