import { DOCUMENT, CommonModule } from '@angular/common';
import { Inject, Injectable, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation, Output, EventEmitter, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxTweetService = /** @class */ (function () {
    function NgxTweetService(_document) {
        this._document = _document;
        this.TWITTER_OBJECT = 'twttr';
        this.TWITTER_SCRIPT_ID = 'twitter-wjs';
        this.TWITTER_WIDGET_URL = 'https://platform.twitter.com/widgets.js';
    }
    /**
     * @return {?}
     */
    NgxTweetService.prototype.loadScript = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Observable.create(function (observer) {
            _this._startScriptLoad();
            _this._document.defaultView[_this.TWITTER_OBJECT].ready(_this._onTwitterScriptLoadedFactory(observer));
        });
    };
    /**
     * @return {?}
     */
    NgxTweetService.prototype._startScriptLoad = /**
     * @return {?}
     */
    function () {
        console.log('script loading started');
        var /** @type {?} */ twitterData = this._document.defaultView[this.TWITTER_OBJECT] || {};
        if (this._twitterScriptAlreadyExists()) {
            this._document.defaultView[this.TWITTER_OBJECT] = twitterData;
            return;
        }
        this._appendTwitterScriptToDOM();
        twitterData._e = [];
        twitterData.ready = function (callback) {
            twitterData._e.push(callback);
        };
        this._document.defaultView[this.TWITTER_OBJECT] = twitterData;
    };
    /**
     * @return {?}
     */
    NgxTweetService.prototype._twitterScriptAlreadyExists = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ twitterScript = this._document.getElementById(this.TWITTER_SCRIPT_ID);
        return (twitterScript !== null || typeof twitterScript !== 'object');
    };
    /**
     * @return {?}
     */
    NgxTweetService.prototype._appendTwitterScriptToDOM = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ firstJSScript = this._document.getElementsByTagName('script')[0];
        var /** @type {?} */ js = this._document.createElement('script');
        js.id = this.TWITTER_SCRIPT_ID;
        js.src = this.TWITTER_WIDGET_URL;
        firstJSScript.parentNode.insertBefore(js, firstJSScript);
    };
    /**
     * @param {?} observer
     * @return {?}
     */
    NgxTweetService.prototype._onTwitterScriptLoadedFactory = /**
     * @param {?} observer
     * @return {?}
     */
    function (observer) {
        return function (twitterData) {
            observer.next(twitterData);
            observer.complete();
        };
    };
    NgxTweetService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NgxTweetService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
    ]; };
    return NgxTweetService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxTweetComponent = /** @class */ (function () {
    function NgxTweetComponent(_elementRef, _ngxTweetService, _changeDetectorRef) {
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
    NgxTweetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._loadTwitterScript();
    };
    /**
     * @return {?}
     */
    NgxTweetComponent.prototype._loadTwitterScript = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._ngxTweetService
            .loadScript()
            .subscribe(function (twitterData) {
            _this._updateTwitterScriptLoadingState();
            twitterData.widgets.createTweet(_this.tweetId, _this._elementRef.nativeElement, {}).then(function (result) {
                _this.onTweetLoaded.emit(true);
            });
        });
    };
    /**
     * @return {?}
     */
    NgxTweetComponent.prototype._updateTwitterScriptLoadingState = /**
     * @return {?}
     */
    function () {
        this.isTwitterScriptLoading = false;
        this._changeDetectorRef.detectChanges();
    };
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
    NgxTweetComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgxTweetService, },
        { type: ChangeDetectorRef, },
    ]; };
    NgxTweetComponent.propDecorators = {
        "tweetId": [{ type: Input },],
        "onTweetLoaded": [{ type: Output },],
    };
    return NgxTweetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxTweetModule = /** @class */ (function () {
    function NgxTweetModule() {
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
    return NgxTweetModule;
}());

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