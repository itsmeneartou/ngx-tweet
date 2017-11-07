# ngx-tweet

## Angular Tweet Component

Easily embed Twitter widgets into your Angular application! No more having to kludge together a Twitter script loader, or manage embed state on visibility change.

ngx-tweet is sourced from arusahni's ngTweet app (https://github.com/arusahni/ngtweet).

## Installation

`npm install ngx-tweet --save`

## Usage

Import `TweetModule` in your module:

```javascript
import { TweetModule } from "ngx-tweet/lib/ngx-tweet.module";

[...]
imports: [
  TweetModule
]
[...]
```

Finally, use `ngxc-tweet` component in your template:

```javascript
<ngxc-tweet tweetId="824004497055907844"></ng2-tweet>
```

The `tweetId` is the number at the end of the tweet url that you want to embed, for example,

`https://twitter.com/tommygaessler/status/824004497055907844`

And voila! Happy Tweeting!
