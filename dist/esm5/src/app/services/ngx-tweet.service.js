/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
export { NgxTweetService };
function NgxTweetService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NgxTweetService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NgxTweetService.ctorParameters;
    /** @type {?} */
    NgxTweetService.prototype.TWITTER_OBJECT;
    /** @type {?} */
    NgxTweetService.prototype.TWITTER_SCRIPT_ID;
    /** @type {?} */
    NgxTweetService.prototype.TWITTER_WIDGET_URL;
    /** @type {?} */
    NgxTweetService.prototype._document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR3ZWV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdHdlZXQvIiwic291cmNlcyI6WyJzcmMvYXBwL3NlcnZpY2VzL25neC10d2VldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7SUFTeEMseUJBQStDO1FBQUEsY0FBUyxHQUFULFNBQVM7OEJBSnRCLE9BQU87aUNBQ0osYUFBYTtrQ0FDWix5Q0FBeUM7S0FHOUU7Ozs7SUFFTSxvQ0FBVTs7Ozs7UUFDYixNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQXVCO1lBQzdDLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFFLEtBQUksQ0FBQyxjQUFjLENBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLDZCQUE2QixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDekcsQ0FBQyxDQUFDOzs7OztJQUdDLDBDQUFnQjs7OztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEMscUJBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxjQUFjLENBQUUsSUFBSSxFQUFFLENBQUM7UUFFNUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxjQUFjLENBQUUsR0FBRyxXQUFXLENBQUM7WUFDaEUsTUFBTSxDQUFDO1NBQ1Y7UUFFRCxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUVqQyxXQUFXLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUVwQixXQUFXLENBQUMsS0FBSyxHQUFHLFVBQUMsUUFBa0I7WUFDbkMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDakMsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxjQUFjLENBQUUsR0FBRyxXQUFXLENBQUM7Ozs7O0lBRzVELHFEQUEyQjs7OztRQUMvQixxQkFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDNUUsTUFBTSxDQUFDLENBQUMsYUFBYSxLQUFLLElBQUksSUFBSSxPQUFPLGFBQWEsS0FBSyxRQUFRLENBQUMsQ0FBQzs7Ozs7SUFHakUsbURBQXlCOzs7O1FBQzdCLHFCQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFFLENBQUMsQ0FBRSxDQUFDO1FBQ3pFLHFCQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUMvQixFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNqQyxhQUFhLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUM7Ozs7OztJQUdyRCx1REFBNkI7Ozs7Y0FBQyxRQUF1QjtRQUN6RCxNQUFNLENBQUMsVUFBQyxXQUFnQjtZQUNwQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN2QixDQUFDOzs7Z0JBdERULFVBQVU7Ozs7Z0RBT00sTUFBTSxTQUFDLFFBQVE7OzBCQVhoQzs7U0FLYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmd4VHdlZXRTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgVFdJVFRFUl9PQkpFQ1QgPSAndHd0dHInO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgVFdJVFRFUl9TQ1JJUFRfSUQgPSAndHdpdHRlci13anMnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgVFdJVFRFUl9XSURHRVRfVVJMID0gJ2h0dHBzOi8vcGxhdGZvcm0udHdpdHRlci5jb20vd2lkZ2V0cy5qcyc7XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIHJlYWRvbmx5IF9kb2N1bWVudDogYW55KSB7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRTY3JpcHQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc3RhcnRTY3JpcHRMb2FkKCk7XG4gICAgICAgICAgICB0aGlzLl9kb2N1bWVudC5kZWZhdWx0Vmlld1sgdGhpcy5UV0lUVEVSX09CSkVDVCBdLnJlYWR5KHRoaXMuX29uVHdpdHRlclNjcmlwdExvYWRlZEZhY3Rvcnkob2JzZXJ2ZXIpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc3RhcnRTY3JpcHRMb2FkKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygnc2NyaXB0IGxvYWRpbmcgc3RhcnRlZCcpO1xuICAgICAgICBjb25zdCB0d2l0dGVyRGF0YSA9IHRoaXMuX2RvY3VtZW50LmRlZmF1bHRWaWV3WyB0aGlzLlRXSVRURVJfT0JKRUNUIF0gfHwge307XG5cbiAgICAgICAgaWYgKHRoaXMuX3R3aXR0ZXJTY3JpcHRBbHJlYWR5RXhpc3RzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvY3VtZW50LmRlZmF1bHRWaWV3WyB0aGlzLlRXSVRURVJfT0JKRUNUIF0gPSB0d2l0dGVyRGF0YTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2FwcGVuZFR3aXR0ZXJTY3JpcHRUb0RPTSgpO1xuXG4gICAgICAgIHR3aXR0ZXJEYXRhLl9lID0gW107XG5cbiAgICAgICAgdHdpdHRlckRhdGEucmVhZHkgPSAoY2FsbGJhY2s6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgICAgICB0d2l0dGVyRGF0YS5fZS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9kb2N1bWVudC5kZWZhdWx0Vmlld1sgdGhpcy5UV0lUVEVSX09CSkVDVCBdID0gdHdpdHRlckRhdGE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdHdpdHRlclNjcmlwdEFscmVhZHlFeGlzdHMoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHR3aXR0ZXJTY3JpcHQgPSB0aGlzLl9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLlRXSVRURVJfU0NSSVBUX0lEKTtcbiAgICAgICAgcmV0dXJuICh0d2l0dGVyU2NyaXB0ICE9PSBudWxsIHx8IHR5cGVvZiB0d2l0dGVyU2NyaXB0ICE9PSAnb2JqZWN0Jyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYXBwZW5kVHdpdHRlclNjcmlwdFRvRE9NKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBmaXJzdEpTU2NyaXB0ID0gdGhpcy5fZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWyAwIF07XG4gICAgICAgIGNvbnN0IGpzID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGpzLmlkID0gdGhpcy5UV0lUVEVSX1NDUklQVF9JRDtcbiAgICAgICAganMuc3JjID0gdGhpcy5UV0lUVEVSX1dJREdFVF9VUkw7XG4gICAgICAgIGZpcnN0SlNTY3JpcHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZpcnN0SlNTY3JpcHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uVHdpdHRlclNjcmlwdExvYWRlZEZhY3Rvcnkob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pOiBGdW5jdGlvbiB7XG4gICAgICAgIHJldHVybiAodHdpdHRlckRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh0d2l0dGVyRGF0YSk7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==