import { Injectable } from "@angular/core";
import { Observer } from "rxjs/Observer";
import { Observable } from "rxjs/Rx";

@Injectable()
export class TweetService {
    private readonly TWITTER_OBJECT = "twttr";
    private readonly TWITTER_SCRIPT_ID = "twitter-wjs";
    private readonly TWITTER_WIDGET_URL = "https://platform.twitter.com/widgets.js";

    constructor() {}

    public loadScript(): Observable<any> {
        return Observable.create((observer: Observer<string>) => {
            this._startScriptLoad();
            window[ this.TWITTER_OBJECT ].ready(this._onTwitterScriptLoadedFactory(observer));
        });
    };

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
        return !this._isNull(twitterScript);
    }

    private _isNull(value: any): boolean {
        return value === null && typeof value === "object";
    }

    private _appendTwitterScriptToDOM(): void {
        const firstJSScript = document.getElementsByTagName("script")[ 0 ];
        const js = document.createElement("script");
        js.id = this.TWITTER_SCRIPT_ID;
        js.src = this.TWITTER_WIDGET_URL;
        firstJSScript.parentNode.insertBefore(js, firstJSScript);
    }

    private _onTwitterScriptLoadedFactory(observer: Observer<string>): Function {
        return (twitterScript: string) => {
            observer.next(twitterScript);
            observer.complete();
        };
    }
}
