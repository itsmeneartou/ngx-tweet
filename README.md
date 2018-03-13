# ngx-tweet [![npm version](https://badge.fury.io/js/ngx-tweet.svg)](https://badge.fury.io/js/ngx-tweet) [![npm downloads](https://img.shields.io/npm/dm/ngx-tweet.svg)](https://npmjs.org/ngx-tweet)

[![NPM](https://nodei.co/npm/ngx-tweet.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ngx-tweet/)
[![NPM](https://nodei.co/npm-dl/ngx-tweet.png)](https://nodei.co/npm/ngx-tweet/)

## Angular Tweet Component

Easily embed Twitter widgets into your Angular application! No more having to kludge together a Twitter script loader, or manage embed state on visibility change.

ngx-tweet is sourced from arusahni's ngTweet app (https://github.com/arusahni/ngtweet).

## Installation

`npm install ngx-tweet --save` or `yarn add ngx-tweet`

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
<ngxc-tweet tweetId="824004497055907844"></ngxc-tweet>
```

The `tweetId` is the number at the end of the tweet url that you want to embed, for example,

`https://twitter.com/tommygaessler/status/824004497055907844`

And voila! Happy Tweeting!

## License

The MIT License (see the [LICENSE](https://github.com/Adrael/ngx-tweet/blob/master/LICENSE) file for the full text)
