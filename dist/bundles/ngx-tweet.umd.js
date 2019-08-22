(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ngx-tweet', ['exports', '@angular/common', '@angular/core', 'rxjs'], factory) :
    (factory((global['ngx-tweet'] = {}),global.ng.common,global.ng.core,global.rxjs));
}(this, (function (exports,common,core,rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgxTweetService = (function () {
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
                return rxjs.Observable.create(function (observer) {
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
            { type: core.Injectable },
        ];
        /** @nocollapse */
        NgxTweetService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] },] },
            ];
        };
        return NgxTweetService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgxTweetComponent = (function () {
        function NgxTweetComponent(_elementRef, _ngxTweetService, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._ngxTweetService = _ngxTweetService;
            this._changeDetectorRef = _changeDetectorRef;
            this.tweetId = '1164396389075263489';
            this.onTweetLoaded = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'ngx-tweet',
                        template: '<ng-content *ngIf="isTwitterScriptLoading"></ng-content>',
                        styles: ['.twitter-tweet { transform: none !important; }'],
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        /** @nocollapse */
        NgxTweetComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: NgxTweetService, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        NgxTweetComponent.propDecorators = {
            "tweetId": [{ type: core.Input },],
            "onTweetLoaded": [{ type: core.Output },],
        };
        return NgxTweetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgxTweetModule = (function () {
        function NgxTweetModule() {
        }
        NgxTweetModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            NgxTweetComponent
                        ],
                        imports: [common.CommonModule],
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

    exports.NgxTweetModule = NgxTweetModule;
    exports.ɵa = NgxTweetComponent;
    exports.ɵb = NgxTweetService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR3ZWV0LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXR3ZWV0L3NyYy9hcHAvc2VydmljZXMvbmd4LXR3ZWV0LnNlcnZpY2UudHMiLCJuZzovL25neC10d2VldC9zcmMvYXBwL2NvbXBvbmVudHMvbmd4LXR3ZWV0LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXR3ZWV0L3NyYy9hcHAvbmd4LXR3ZWV0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hUd2VldFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBUV0lUVEVSX09CSkVDVCA9ICd0d3R0cic7XG4gICAgcHJpdmF0ZSByZWFkb25seSBUV0lUVEVSX1NDUklQVF9JRCA9ICd0d2l0dGVyLXdqcyc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBUV0lUVEVSX1dJREdFVF9VUkwgPSAnaHR0cHM6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbS93aWRnZXRzLmpzJztcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgcmVhZG9ubHkgX2RvY3VtZW50OiBhbnkpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFNjcmlwdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zdGFydFNjcmlwdExvYWQoKTtcbiAgICAgICAgICAgIHRoaXMuX2RvY3VtZW50LmRlZmF1bHRWaWV3WyB0aGlzLlRXSVRURVJfT0JKRUNUIF0ucmVhZHkodGhpcy5fb25Ud2l0dGVyU2NyaXB0TG9hZGVkRmFjdG9yeShvYnNlcnZlcikpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zdGFydFNjcmlwdExvYWQoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzY3JpcHQgbG9hZGluZyBzdGFydGVkJyk7XG4gICAgICAgIGNvbnN0IHR3aXR0ZXJEYXRhID0gdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXdbIHRoaXMuVFdJVFRFUl9PQkpFQ1QgXSB8fCB7fTtcblxuICAgICAgICBpZiAodGhpcy5fdHdpdHRlclNjcmlwdEFscmVhZHlFeGlzdHMoKSkge1xuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXdbIHRoaXMuVFdJVFRFUl9PQkpFQ1QgXSA9IHR3aXR0ZXJEYXRhO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYXBwZW5kVHdpdHRlclNjcmlwdFRvRE9NKCk7XG5cbiAgICAgICAgdHdpdHRlckRhdGEuX2UgPSBbXTtcblxuICAgICAgICB0d2l0dGVyRGF0YS5yZWFkeSA9IChjYWxsYmFjazogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHR3aXR0ZXJEYXRhLl9lLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2RvY3VtZW50LmRlZmF1bHRWaWV3WyB0aGlzLlRXSVRURVJfT0JKRUNUIF0gPSB0d2l0dGVyRGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90d2l0dGVyU2NyaXB0QWxyZWFkeUV4aXN0cygpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdHdpdHRlclNjcmlwdCA9IHRoaXMuX2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuVFdJVFRFUl9TQ1JJUFRfSUQpO1xuICAgICAgICByZXR1cm4gKHR3aXR0ZXJTY3JpcHQgIT09IG51bGwgfHwgdHlwZW9mIHR3aXR0ZXJTY3JpcHQgIT09ICdvYmplY3QnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hcHBlbmRUd2l0dGVyU2NyaXB0VG9ET00oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZpcnN0SlNTY3JpcHQgPSB0aGlzLl9kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbIDAgXTtcbiAgICAgICAgY29uc3QganMgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAganMuaWQgPSB0aGlzLlRXSVRURVJfU0NSSVBUX0lEO1xuICAgICAgICBqcy5zcmMgPSB0aGlzLlRXSVRURVJfV0lER0VUX1VSTDtcbiAgICAgICAgZmlyc3RKU1NjcmlwdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcywgZmlyc3RKU1NjcmlwdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25Ud2l0dGVyU2NyaXB0TG9hZGVkRmFjdG9yeShvYnNlcnZlcjogT2JzZXJ2ZXI8YW55Pik6IEZ1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuICh0d2l0dGVyRGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHR3aXR0ZXJEYXRhKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBPbkluaXQsXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFR3ZWV0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL25neC10d2VldC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtdHdlZXQnLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQgKm5nSWY9XCJpc1R3aXR0ZXJTY3JpcHRMb2FkaW5nXCI+PC9uZy1jb250ZW50PicsXG4gICAgc3R5bGVzOiBbICcudHdpdHRlci10d2VldCB7IHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50OyB9JyBdLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTmd4VHdlZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0d2VldElkOiBzdHJpbmc9JzExNjQzOTYzODkwNzUyNjM0ODknO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25Ud2VldExvYWRlZDpFdmVudEVtaXR0ZXI8Ym9vbGVhbj49bmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHB1YmxpYyBpc1R3aXR0ZXJTY3JpcHRMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfbmd4VHdlZXRTZXJ2aWNlOiBOZ3hUd2VldFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9sb2FkVHdpdHRlclNjcmlwdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xvYWRUd2l0dGVyU2NyaXB0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9uZ3hUd2VldFNlcnZpY2VcbiAgICAgICAgICAgIC5sb2FkU2NyaXB0KClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHR3aXR0ZXJEYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUd2l0dGVyU2NyaXB0TG9hZGluZ1N0YXRlKCk7XG4gICAgICAgICAgICAgICAgdHdpdHRlckRhdGEud2lkZ2V0cy5jcmVhdGVUd2VldCh0aGlzLnR3ZWV0SWQsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge30pLnRoZW4ocmVzdWx0PT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Ud2VldExvYWRlZC5lbWl0KHRydWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlVHdpdHRlclNjcmlwdExvYWRpbmdTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc1R3aXR0ZXJTY3JpcHRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFR3ZWV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25neC10d2VldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4VHdlZXRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9uZ3gtdHdlZXQuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE5neFR3ZWV0Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSBdLFxuICAgIGV4cG9ydHM6IFsgTmd4VHdlZXRDb21wb25lbnQgXSxcbiAgICBwcm92aWRlcnM6IFsgTmd4VHdlZXRTZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4VHdlZXRNb2R1bGUge1xufVxuIl0sIm5hbWVzIjpbIk9ic2VydmFibGUiLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiRE9DVU1FTlQiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiRWxlbWVudFJlZiIsIkNoYW5nZURldGVjdG9yUmVmIiwiSW5wdXQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBV0kseUJBQStDO1lBQUEsY0FBUyxHQUFULFNBQVM7a0NBSnRCLE9BQU87cUNBQ0osYUFBYTtzQ0FDWix5Q0FBeUM7U0FHOUU7Ozs7UUFFTSxvQ0FBVTs7Ozs7Z0JBQ2IsT0FBT0EsZUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQXVCO29CQUM3QyxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFDeEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsNkJBQTZCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDekcsQ0FBQyxDQUFDOzs7OztRQUdDLDBDQUFnQjs7OztnQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUN0QyxxQkFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBRSxJQUFJLEVBQUUsQ0FBQztnQkFFNUUsSUFBSSxJQUFJLENBQUMsMkJBQTJCLEVBQUUsRUFBRTtvQkFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBRSxHQUFHLFdBQVcsQ0FBQztvQkFDaEUsT0FBTztpQkFDVjtnQkFFRCxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztnQkFFakMsV0FBVyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JB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