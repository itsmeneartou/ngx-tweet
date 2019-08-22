/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { NgxTweetService } from '../services/ngx-tweet.service';
export class NgxTweetComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _ngxTweetService
     * @param {?} _changeDetectorRef
     */
    constructor(_elementRef, _ngxTweetService, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._ngxTweetService = _ngxTweetService;
        this._changeDetectorRef = _changeDetectorRef;
        this.tweetId = '1164396389075263489';
        this.onTweetLoaded = new EventEmitter();
        this.isTwitterScriptLoading = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._loadTwitterScript();
    }
    /**
     * @return {?}
     */
    _loadTwitterScript() {
        this._ngxTweetService
            .loadScript()
            .subscribe((twitterData) => {
            this._updateTwitterScriptLoadingState();
            twitterData.widgets.createTweet(this.tweetId, this._elementRef.nativeElement, {}).then(result => {
                this.onTweetLoaded.emit(true);
            });
        });
    }
    /**
     * @return {?}
     */
    _updateTwitterScriptLoadingState() {
        this.isTwitterScriptLoading = false;
        this._changeDetectorRef.detectChanges();
    }
}
NgxTweetComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-tweet',
                template: '<ng-content *ngIf="isTwitterScriptLoading"></ng-content>',
                styles: ['.twitter-tweet { transform: none !important; }'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
NgxTweetComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: NgxTweetService, },
    { type: ChangeDetectorRef, },
];
NgxTweetComponent.propDecorators = {
    "tweetId": [{ type: Input },],
    "onTweetLoaded": [{ type: Output },],
};
function NgxTweetComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NgxTweetComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NgxTweetComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    NgxTweetComponent.propDecorators;
    /** @type {?} */
    NgxTweetComponent.prototype.tweetId;
    /** @type {?} */
    NgxTweetComponent.prototype.onTweetLoaded;
    /** @type {?} */
    NgxTweetComponent.prototype.isTwitterScriptLoading;
    /** @type {?} */
    NgxTweetComponent.prototype._elementRef;
    /** @type {?} */
    NgxTweetComponent.prototype._ngxTweetService;
    /** @type {?} */
    NgxTweetComponent.prototype._changeDetectorRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR3ZWV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10d2VldC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZ3gtdHdlZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFTaEUsTUFBTTs7Ozs7O0lBS0YsWUFBNkIsV0FBdUIsRUFDdkIsa0JBQ0E7UUFGQSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCO1FBQ2hCLHVCQUFrQixHQUFsQixrQkFBa0I7dUJBTmYscUJBQXFCOzZCQUNBLElBQUksWUFBWSxFQUFFO3NDQUM5QixJQUFJO0tBSzVDOzs7O0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDOzs7OztJQUd0QixrQkFBa0I7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQjthQUNoQixVQUFVLEVBQUU7YUFDWixTQUFTLENBQUMsQ0FBQyxXQUFnQixFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGdDQUFnQyxFQUFFLENBQUM7WUFDeEMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBLEVBQUU7Z0JBQzNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pDLENBQUMsQ0FBQztTQUNOLENBQUMsQ0FBQzs7Ozs7SUFHSCxnQ0FBZ0M7UUFDcEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7Ozs7WUFsQy9DLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLDBEQUEwRDtnQkFDcEUsTUFBTSxFQUFFLENBQUUsZ0RBQWdELENBQUU7Z0JBQzVELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNsRDs7OztZQWZHLFVBQVU7WUFPTCxlQUFlO1lBVHBCLGlCQUFpQjs7O3dCQW1CaEIsS0FBSzs4QkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBPbkluaXQsXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFR3ZWV0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL25neC10d2VldC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtdHdlZXQnLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQgKm5nSWY9XCJpc1R3aXR0ZXJTY3JpcHRMb2FkaW5nXCI+PC9uZy1jb250ZW50PicsXG4gICAgc3R5bGVzOiBbICcudHdpdHRlci10d2VldCB7IHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50OyB9JyBdLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTmd4VHdlZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0d2VldElkOiBzdHJpbmc9JzExNjQzOTYzODkwNzUyNjM0ODknO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25Ud2VldExvYWRlZDpFdmVudEVtaXR0ZXI8Ym9vbGVhbj49bmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHB1YmxpYyBpc1R3aXR0ZXJTY3JpcHRMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfbmd4VHdlZXRTZXJ2aWNlOiBOZ3hUd2VldFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9sb2FkVHdpdHRlclNjcmlwdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xvYWRUd2l0dGVyU2NyaXB0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9uZ3hUd2VldFNlcnZpY2VcbiAgICAgICAgICAgIC5sb2FkU2NyaXB0KClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHR3aXR0ZXJEYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUd2l0dGVyU2NyaXB0TG9hZGluZ1N0YXRlKCk7XG4gICAgICAgICAgICAgICAgdHdpdHRlckRhdGEud2lkZ2V0cy5jcmVhdGVUd2VldCh0aGlzLnR3ZWV0SWQsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge30pLnRoZW4ocmVzdWx0PT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Ud2VldExvYWRlZC5lbWl0KHRydWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlVHdpdHRlclNjcmlwdExvYWRpbmdTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc1R3aXR0ZXJTY3JpcHRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG59XG4iXX0=