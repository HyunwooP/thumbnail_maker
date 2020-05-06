# fluent-ffmpeg video thumbnail maker

## only exports wanted thumbnail
### author: Hyunwoo.Park

* guide is here https://github.com/fluent-ffmpeg/node-fluent-ffmpeg

* this module has config guide
```
config = {
    count: config.count || 1, // what do you want count?
    filename: `${config.filename}-at-%s-seconds.png` || 'thumbnail-at-%s-seconds.png',
    folder: '/want/output/file/path',
    size: config.size || '320x240'
}
```