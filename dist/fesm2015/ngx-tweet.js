import { DOCUMENT, CommonModule } from '@angular/common';
import { Inject, Injectable, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation, Output, EventEmitter, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxTweetService {
    /**
     * @param {?} _document
     */
    constructor(_document) {
        this._document = _document;
        this.TWITTER_OBJECT = 'twttr';
        this.TWITTER_SCRIPT_ID = 'twitter-wjs';
        this.TWITTER_WIDGET_URL = 'https://platform.twitter.com/widgets.js';
    }
    /**
     * @return {?}
     */
    loadScript() {
        return Observable.create((observer) => {
            this._startScriptLoad();
            this._document.defaultView[this.TWITTER_OBJECT].ready(this._onTwitterScriptLoadedFactory(observer));
        });
    }
    /**
     * @return {?}
     */
    _startScriptLoad() {
        console.log('script loading started');
        const /** @type {?} */ twitterData = this._document.defaultView[this.TWITTER_OBJECT] || {};
        if (this._twitterScriptAlreadyExists()) {
            this._document.defaultView[this.TWITTER_OBJECT] = twitterData;
            return;
        }
        this._appendTwitterScriptToDOM();
        twitterData._e = [];
        twitterData.ready = (callback) => {
            twitterData._e.push(callback);
        };
        this._document.defaultView[this.TWITTER_OBJECT] = twitterData;
    }
    /**
     * @return {?}
     */
    _twitterScriptAlreadyExists() {
        const /** @type {?} */ twitterScript = this._document.getElementById(this.TWITTER_SCRIPT_ID);
        return (twitterScript !== null || typeof twitterScript !== 'object');
    }
    /**
     * @return {?}
     */
    _appendTwitterScriptToDOM() {
        const /** @type {?} */ firstJSScript = this._document.getElementsByTagName('script')[0];
        const /** @type {?} */ js = this._document.createElement('script');
        js.id = this.TWITTER_SCRIPT_ID;
        js.src = this.TWITTER_WIDGET_URL;
        firstJSScript.parentNode.insertBefore(js, firstJSScript);
    }
    /**
     * @param {?} observer
     * @return {?}
     */
    _onTwitterScriptLoadedFactory(observer) {
        return (twitterData) => {
            observer.next(twitterData);
            observer.complete();
        };
    }
}
NgxTweetService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgxTweetService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxTweetComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxTweetModule {
}
NgxTweetModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgxTweetComponent
                ],
                imports: [CommonModule],
                exports: [NgxTweetComponent],
                providers: [NgxTweetService]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { NgxTweetModule, NgxTweetComponent as ɵa, NgxTweetService as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR3ZWV0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtdHdlZXQvc3JjL2FwcC9zZXJ2aWNlcy9uZ3gtdHdlZXQuc2VydmljZS50cyIsIm5nOi8vbmd4LXR3ZWV0L3NyYy9hcHAvY29tcG9uZW50cy9uZ3gtdHdlZXQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtdHdlZXQvc3JjL2FwcC9uZ3gtdHdlZXQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neFR3ZWV0U2VydmljZSB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IFRXSVRURVJfT0JKRUNUID0gJ3R3dHRyJztcbiAgICBwcml2YXRlIHJlYWRvbmx5IFRXSVRURVJfU0NSSVBUX0lEID0gJ3R3aXR0ZXItd2pzJztcbiAgICBwcml2YXRlIHJlYWRvbmx5IFRXSVRURVJfV0lER0VUX1VSTCA9ICdodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanMnO1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSByZWFkb25seSBfZG9jdW1lbnQ6IGFueSkge1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkU2NyaXB0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0U2NyaXB0TG9hZCgpO1xuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXdbIHRoaXMuVFdJVFRFUl9PQkpFQ1QgXS5yZWFkeSh0aGlzLl9vblR3aXR0ZXJTY3JpcHRMb2FkZWRGYWN0b3J5KG9ic2VydmVyKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3N0YXJ0U2NyaXB0TG9hZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NjcmlwdCBsb2FkaW5nIHN0YXJ0ZWQnKTtcbiAgICAgICAgY29uc3QgdHdpdHRlckRhdGEgPSB0aGlzLl9kb2N1bWVudC5kZWZhdWx0Vmlld1sgdGhpcy5UV0lUVEVSX09CSkVDVCBdIHx8IHt9O1xuXG4gICAgICAgIGlmICh0aGlzLl90d2l0dGVyU2NyaXB0QWxyZWFkeUV4aXN0cygpKSB7XG4gICAgICAgICAgICB0aGlzLl9kb2N1bWVudC5kZWZhdWx0Vmlld1sgdGhpcy5UV0lUVEVSX09CSkVDVCBdID0gdHdpdHRlckRhdGE7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hcHBlbmRUd2l0dGVyU2NyaXB0VG9ET00oKTtcblxuICAgICAgICB0d2l0dGVyRGF0YS5fZSA9IFtdO1xuXG4gICAgICAgIHR3aXR0ZXJEYXRhLnJlYWR5ID0gKGNhbGxiYWNrOiBGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICAgdHdpdHRlckRhdGEuX2UucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXdbIHRoaXMuVFdJVFRFUl9PQkpFQ1QgXSA9IHR3aXR0ZXJEYXRhO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3R3aXR0ZXJTY3JpcHRBbHJlYWR5RXhpc3RzKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB0d2l0dGVyU2NyaXB0ID0gdGhpcy5fZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5UV0lUVEVSX1NDUklQVF9JRCk7XG4gICAgICAgIHJldHVybiAodHdpdHRlclNjcmlwdCAhPT0gbnVsbCB8fCB0eXBlb2YgdHdpdHRlclNjcmlwdCAhPT0gJ29iamVjdCcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FwcGVuZFR3aXR0ZXJTY3JpcHRUb0RPTSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZmlyc3RKU1NjcmlwdCA9IHRoaXMuX2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVsgMCBdO1xuICAgICAgICBjb25zdCBqcyA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBqcy5pZCA9IHRoaXMuVFdJVFRFUl9TQ1JJUFRfSUQ7XG4gICAgICAgIGpzLnNyYyA9IHRoaXMuVFdJVFRFUl9XSURHRVRfVVJMO1xuICAgICAgICBmaXJzdEpTU2NyaXB0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmaXJzdEpTU2NyaXB0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblR3aXR0ZXJTY3JpcHRMb2FkZWRGYWN0b3J5KG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KTogRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gKHR3aXR0ZXJEYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQodHdpdHRlckRhdGEpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIElucHV0LFxuICAgIE9uSW5pdCxcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4VHdlZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbmd4LXR3ZWV0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC10d2VldCcsXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudCAqbmdJZj1cImlzVHdpdHRlclNjcmlwdExvYWRpbmdcIj48L25nLWNvbnRlbnQ+JyxcbiAgICBzdHlsZXM6IFsgJy50d2l0dGVyLXR3ZWV0IHsgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7IH0nIF0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hUd2VldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgcHVibGljIHR3ZWV0SWQ6IHN0cmluZz0nMTE2NDM5NjM4OTA3NTI2MzQ4OSc7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblR3ZWV0TG9hZGVkOkV2ZW50RW1pdHRlcjxib29sZWFuPj1uZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgcHVibGljIGlzVHdpdHRlclNjcmlwdExvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9uZ3hUd2VldFNlcnZpY2U6IE5neFR3ZWV0U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2xvYWRUd2l0dGVyU2NyaXB0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbG9hZFR3aXR0ZXJTY3JpcHQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX25neFR3ZWV0U2VydmljZVxuICAgICAgICAgICAgLmxvYWRTY3JpcHQoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgodHdpdHRlckRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVR3aXR0ZXJTY3JpcHRMb2FkaW5nU3RhdGUoKTtcbiAgICAgICAgICAgICAgICB0d2l0dGVyRGF0YS53aWRnZXRzLmNyZWF0ZVR3ZWV0KHRoaXMudHdlZXRJZCwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7fSkudGhlbihyZXN1bHQ9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblR3ZWV0TG9hZGVkLmVtaXQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF91cGRhdGVUd2l0dGVyU2NyaXB0TG9hZGluZ1N0YXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzVHdpdHRlclNjcmlwdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4VHdlZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmd4LXR3ZWV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hUd2VldFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL25neC10d2VldC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTmd4VHdlZXRDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlIF0sXG4gICAgZXhwb3J0czogWyBOZ3hUd2VldENvbXBvbmVudCBdLFxuICAgIHByb3ZpZGVyczogWyBOZ3hUd2VldFNlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hUd2VldE1vZHVs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