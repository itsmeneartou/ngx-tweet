import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { TweetComponent, TweetService } from "./index";

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
