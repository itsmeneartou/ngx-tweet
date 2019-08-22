import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewEncapsulation,
    Output,
    EventEmitter
} from '@angular/core';
import { NgxTweetService } from '../services/ngx-tweet.service';

@Component({
    selector: 'ngx-tweet',
    template: '<ng-content *ngIf="isTwitterScriptLoading"></ng-content>',
    styles: [ '.twitter-tweet { transform: none !important; }' ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxTweetComponent implements OnInit {
    @Input() public tweetId: string='1164396389075263489';
    @Output() public onTweetLoaded:EventEmitter<boolean>=new EventEmitter();
    public isTwitterScriptLoading: boolean = true;

    constructor(private readonly _elementRef: ElementRef,
                private readonly _ngxTweetService: NgxTweetService,
                private readonly _changeDetectorRef: ChangeDetectorRef) {
    }

    public ngOnInit(): void {
        this._loadTwitterScript();
    }

    private _loadTwitterScript(): void {
        this._ngxTweetService
            .loadScript()
            .subscribe((twitterData: any) => {
                this._updateTwitterScriptLoadingState();
                twitterData.widgets.createTweet(this.tweetId, this._elementRef.nativeElement, {}).then(result=>{
                    this.onTweetLoaded.emit(true);
                });
            });
    }

    private _updateTwitterScriptLoadingState(): void {
        this.isTwitterScriptLoading = false;
        this._changeDetectorRef.detectChanges();
    }
}
