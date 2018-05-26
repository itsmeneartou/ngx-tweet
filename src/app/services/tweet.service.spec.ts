import { inject, TestBed } from '@angular/core/testing';

import { NgxTweetService } from './ngx-tweet.service';

describe('NgxTweetService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ NgxTweetService ]
        });
    });

    it('should be created', inject([ NgxTweetService ], (service: NgxTweetService) => {
        expect(service).toBeTruthy();
    }));
});
