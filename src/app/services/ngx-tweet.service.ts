import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NgxTweetService {

    private readonly TWITTER_OBJECT = 'twttr';
    private readonly TWITTER_SCRIPT_ID = 'twitter-wjs';
    private readonly TWITTER_WIDGET_URL = 'https://platform.twitter.com/widgets.js';

    public loadScript(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            this._startScriptLoad();
            window[ this.TWITTER_OBJECT ].ready(this._onTwitterScriptLoadedFactory(observer));
        });
    }

    private _startScriptLoad() {
        const twitterData = window[ this.TWITTER_OBJECT ] || {};

        if (this._twitterScriptAlreadyExists()) {
            window[ this.TWITTER_OBJECT ] = twitterData;
            return;
        }

        this._appendTwitterScriptToDOM();

        twitterData._e = [];

        twitterData.ready = (callback: Function) => {
            twitterData._e.push(callback);
        };

        window[ this.TWITTER_OBJECT ] = twitterData;
    }

    private _twitterScriptAlreadyExists(): boolean {
        const twitterScript = document.getElementById(this.TWITTER_SCRIPT_ID);
        return (twitterScript !== null || typeof twitterScript !== 'object');
    }

    private _appendTwitterScriptToDOM(): void {
        const firstJSScript = document.getElementsByTagName('script')[ 0 ];
        const js = document.createElement('script');
        js.id = this.TWITTER_SCRIPT_ID;
        js.src = this.TWITTER_WIDGET_URL;
        firstJSScript.parentNode.insertBefore(js, firstJSScript);
    }

    private _onTwitterScriptLoadedFactory(observer: Observer<any>): Function {
        return (twitterData: any) => {
            observer.next(twitterData);
            observer.complete();
        };
    }
}
