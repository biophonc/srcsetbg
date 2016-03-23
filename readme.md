# Intro

I needed simple responsive backgrounds for more than one project and I haven't found a utility that is flexible enough or fit my needs, so I wrote one.

## Features

- AMD support
- Small foot print: 803 bytes (minified)
- Simple usage (srcset style)
- Passes validation
- Modern Browser support only
- Does what it does and nothing more

## Excluded by design

- Events (on load and resize): Use your favourite framework, library or vanilla js function or whatever you like for that.
- Throttling events: I'd suggest something like lodash's _.throttle() but it's up to you.
- CSS defaults: Use your own CSS as you need it.

## Getting started

Clone Repository, download or install via `npm install --save-dev srcsetbg`

### Markup

```html
<div class="srcsetbg"
  data-srcset="img/xs.png 420w, img/s.png 780w, img/m.png 1024w, img/l.png 1400w, img/xl.png 1920w">
```
Note: the script uses the ℕw param as maximum width with one execption: the largest param is used as minimum width.

### JS

Once included the script is included and the markup is ready, just run: `ctrlSrcSetBg();`
By default the script looks for elements, that contains the class name srcsetbg. Of course you can override the class name like so: `ctrlSrcSetBg('my-own-selector');`

__A little bit more advanced but not that much__

The script just uses the data-srcset attribtue to extracts and map the values and set one of them as background image. If you use an event listener for the 'resize' event, you may want to throttle the execution, because events can be expensive.

__Example: AMD/jQuery/lodash/Coffeescript:__
```coffeescript
# require libs/modules
_ = require 'lodash'
$ = require 'jquery'
srcsetbg = require 'ctrl-srcsetbg' # set custom CSS selector

# init event listeners
$(window).on('resize', _.throttle(srcsetbg, 50)) # throttle the resize event
$(window).on('ready', srcsetbg) # this one needs no throttling
```
