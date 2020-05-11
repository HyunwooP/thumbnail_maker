'use strict';

const ffmpeg = require('fluent-ffmpeg');
const exportFile = require('./export');

/**
 * fluent-ffmpeg Only Create Video Thumbnail
 *
 * @constructor
 * @param {String} [path] video file path
 * @param {Object} [config] make thumbnail config options
 * @param {Number} [config.count=1] fluent-ffmpeg exports thumbnail count
 * @param {String} [config.filename="thumbnail-at-%s-seconds.png"] exports thumbnail file name
 * @param {String} [config.outputPath] output directory path
 * @param {String} [options.size="320x240"] exports thumbnail size
 */
module.exports = function(path, config) {
    
    if (!path || typeof path !== 'string') {
        errorHandler(new Error('Can not find path'));
    }

    const options = {
        count: config.count || 1,
        filename: config.filename ? `${config.filename}-at-%s-seconds.png` : 'thumbnail-at-%s-seconds.png',
        folder: config.outputPath || './output',
        size: config.size || '320x240'
    };

    let filename = '';

    ffmpeg(path)
    .on('filenames', function(name) {
        filename = name;
    })
    .on('end', function() {
        exportFile.init('link');
        console.log(`${config.outputPath}/${filename}`);
        // return exportFile.upload({
        //     Bucket: config.bucketName,
        //     Key: new Date().getTime() + "_" + filename,
        //     Body: FileSystem.createReadStream(`${config.outputPath}/${filename}`),
        //     ACL: "public-read",
        //     ContentType: file.headers["content-type"],
        //     Pragma: "public"
        // })
        // .then(response => {
        //     return finishHandler(response);
        // })
        // .catch(err => {
        //     console.log("err :::", err);
        // });
    })
    .screenshots(options);

    function finishHandler(json) {
        return json;
    }

    function errorHandler(err) {
        throw err;
    }
};
