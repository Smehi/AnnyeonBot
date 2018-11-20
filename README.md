# AnnyeonBot
# read this before cloning rep.
## To get the modules:
- Install [Node.js (LTS should be fine)](https://nodejs.org/en/)
- Navigate to project root
- Run `npm install discord.js --save`

## Optional:
- Navigate to project root
- Run `npm install -g nodemon`







## added npm's in this branch

- [x] discord.js
- [x] fs
- [x] simple-youtube-api
- [x] ytdl-core
- [x] node-opus - Watchout this shit is big
- [x] windows-build-tools - Watchout this shit is big



Before instalation required npm's , you need to obtain windows build tools. ( it would be best...)


Documentation;

https://www.npmjs.com/package/windows-build-tools

https://www.npmjs.com/package/node-opus

https://www.npmjs.com/package/ytdl-core

https://www.npmjs.com/package/simple-youtube-api


## Also needed

- [x] ffmpeg 

This is for streaming audio. Its not npm . Google it!
Download also binnaries for ffmpeg.

https://www.ffmpeg.org/

https://www.youtube.com/watch?v=xcdTIDHm4KM

- [x] YouTube Api Key 







Features Added


Audio Stream from youtube api using search or direct link.

Supports playlists and live stream.


To do ;


Shorten and clearer code so other contributors will maybe understand this shity source code.


simple pause,resume


Local mp3 files streaming.

current config.json looks like this;


{

      "token": "   ",
      "prefix":"  ",
      "youtube_api_key":"   "
}