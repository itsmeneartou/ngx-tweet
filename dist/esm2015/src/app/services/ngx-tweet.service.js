/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export class NgxTweetService {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR3ZWV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdHdlZXQvIiwic291cmNlcyI6WyJzcmMvYXBwL3NlcnZpY2VzL25neC10d2VldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUc1QyxNQUFNOzs7O0lBTUYsWUFBK0M7UUFBQSxjQUFTLEdBQVQsU0FBUzs4QkFKdEIsT0FBTztpQ0FDSixhQUFhO2tDQUNaLHlDQUF5QztLQUc5RTs7OztJQUVNLFVBQVU7UUFDYixNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQXVCLEVBQUUsRUFBRTtZQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsY0FBYyxDQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ3pHLENBQUMsQ0FBQzs7Ozs7SUFHQyxnQkFBZ0I7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RDLHVCQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsY0FBYyxDQUFFLElBQUksRUFBRSxDQUFDO1FBRTVFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsY0FBYyxDQUFFLEdBQUcsV0FBVyxDQUFDO1lBQ2hFLE1BQU0sQ0FBQztTQUNWO1FBRUQsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFFakMsV0FBVyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFFcEIsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLFFBQWtCLEVBQUUsRUFBRTtZQUN2QyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNqQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBRSxHQUFHLFdBQVcsQ0FBQzs7Ozs7SUFHNUQsMkJBQTJCO1FBQy9CLHVCQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM1RSxNQUFNLENBQUMsQ0FBQyxhQUFhLEtBQUssSUFBSSxJQUFJLE9BQU8sYUFBYSxLQUFLLFFBQVEsQ0FBQyxDQUFDOzs7OztJQUdqRSx5QkFBeUI7UUFDN0IsdUJBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDekUsdUJBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQy9CLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ2pDLGFBQWEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQzs7Ozs7O0lBR3JELDZCQUE2QixDQUFDLFFBQXVCO1FBQ3pELE1BQU0sQ0FBQyxDQUFDLFdBQWdCLEVBQUUsRUFBRTtZQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN2QixDQUFDOzs7O1lBdERULFVBQVU7Ozs7NENBT00sTUFBTSxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hUd2VldFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBUV0lUVEVSX09CSkVDVCA9ICd0d3R0cic7XG4gICAgcHJpdmF0ZSByZWFkb25seSBUV0lUVEVSX1NDUklQVF9JRCA9ICd0d2l0dGVyLXdqcyc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBUV0lUVEVSX1dJREdFVF9VUkwgPSAnaHR0cHM6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbS93aWRnZXRzLmpzJztcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgcmVhZG9ubHkgX2RvY3VtZW50OiBhbnkpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFNjcmlwdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zdGFydFNjcmlwdExvYWQoKTtcbiAgICAgICAgICAgIHRoaXMuX2RvY3VtZW50LmRlZmF1bHRWaWV3WyB0aGlzLlRXSVRURVJfT0JKRUNUIF0ucmVhZHkodGhpcy5fb25Ud2l0dGVyU2NyaXB0TG9hZGVkRmFjdG9yeShvYnNlcnZlcikpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zdGFydFNjcmlwdExvYWQoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzY3JpcHQgbG9hZGluZyBzdGFydGVkJyk7XG4gICAgICAgIGNvbnN0IHR3aXR0ZXJEYXRhID0gdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXdbIHRoaXMuVFdJVFRFUl9PQkpFQ1QgXSB8fCB7fTtcblxuICAgICAgICBpZiAodGhpcy5fdHdpdHRlclNjcmlwdEFscmVhZHlFeGlzdHMoKSkge1xuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXdbIHRoaXMuVFdJVFRFUl9PQkpFQ1QgXSA9IHR3aXR0ZXJEYXRhO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYXBwZW5kVHdpdHRlclNjcmlwdFRvRE9NKCk7XG5cbiAgICAgICAgdHdpdHRlckRhdGEuX2UgPSBbXTtcblxuICAgICAgICB0d2l0dGVyRGF0YS5yZWFkeSA9IChjYWxsYmFjazogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHR3aXR0ZXJEYXRhLl9lLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2RvY3VtZW50LmRlZmF1bHRWaWV3WyB0aGlzLlRXSVRURVJfT0JKRUNUIF0gPSB0d2l0dGVyRGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90d2l0dGVyU2NyaXB0QWxyZWFkeUV4aXN0cygpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdHdpdHRlclNjcmlwdCA9IHRoaXMuX2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuVFdJVFRFUl9TQ1JJUFRfSUQpO1xuICAgICAgICByZXR1cm4gKHR3aXR0ZXJTY3JpcHQgIT09IG51bGwgfHwgdHlwZW9mIHR3aXR0ZXJTY3JpcHQgIT09ICdvYmplY3QnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hcHBlbmRUd2l0dGVyU2NyaXB0VG9ET00oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZpcnN0SlNTY3JpcHQgPSB0aGlzLl9kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbIDAgXTtcbiAgICAgICAgY29uc3QganMgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAganMuaWQgPSB0aGlzLlRXSVRURVJfU0NSSVBUX0lEO1xuICAgICAgICBqcy5zcmMgPSB0aGlzLlRXSVRURVJfV0lER0VUX1VSTDtcbiAgICAgICAgZmlyc3RKU1NjcmlwdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcywgZmlyc3RKU1NjcmlwdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25Ud2l0dGVyU2NyaXB0TG9hZGVkRmFjdG9yeShvYnNlcnZlcjogT2JzZXJ2ZXI8YW55Pik6IEZ1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuICh0d2l0dGVyRGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHR3aXR0ZXJEYXRhKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH07XG4gICAgfVxufVxuIl19