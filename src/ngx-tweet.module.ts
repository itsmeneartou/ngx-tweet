import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { TweetComponent } from "./components/ngx-tweet";
import { TweetService } from "./services";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TweetComponent
    ],
    exports: [
        TweetComponent
    ],
    providers: [
        TweetService
    ]
})
export class TweetModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TweetModule,
            providers: []
        };
    }
}
