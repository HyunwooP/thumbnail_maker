'use strict';

var ffmpeg = require('fluent-ffmpeg');
var fs = require('fs');
var utils = require('./utils');

/**
 * fluent-ffmpeg Only Create Video Thumbnail
 *
 * @constructor
 * @param {String} [path] video file path
 * @param {Object} [config] make thumbnail config options
 * @param {Number} [config.count=1] fluent-ffmpeg exports thumbnail count
 * @param {Number} [config.filename="thumbnail-at-%s-seconds.png"] exports thumbnail file name
 * @param {String} [config.folder] output directory path
 * @param {String} [options.size="320x240"] exports thumbnail size
 */
module.exports = function(path, config) {
    
    if (!path || typeof path !== 'string') {
        errorHandler(new Error('Can not find path'));
    }

    if (!config.outputPath) {
        errorHandler(new Error('Can not read output path'));
    }

    var setConfig = {
        count: config.count || 1,
        filename: config.filename ? `${config.filename}-at-%s-seconds.png` : 'thumbnail-at-%s-seconds.png',
        folder: config.outputPath,
        size: config.size || '320x240'
    };
    var filename = '';

    ffmpeg(path)
    .on('filenames', function(filenames) {
        filename = filenames;
    })
    .on('end', function() {
        messageHandler('complete!');
    })
    .screenshots(setConfig);

    function messageHandler(message) {
        return message;
    }

    function errorHandler(err) {
        return err;
    }
};
