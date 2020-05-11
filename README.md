# fluent-ffmpeg video thumbnail maker

## only exports wanted thumbnail
### author: Hyunwoo.Park
### THANKS fluent-ffmpeg

* guide here https://github.com/fluent-ffmpeg/node-fluent-ffmpeg
* this module config guide

```
note

can you use aws s3 bucket upload
please check setting ./lib/s3.json 

```

```
count = exports image count
filename = exports image name
outputPath = exports image output path
size = exports image size
isS3Upload = s3 upload flag
bucketName: s3 bucket name

config = {
    count: number,
    filename: string,
    outputPath: string,
    size: string,
    isS3Upload: boolean,
    bucketName: string
}
```