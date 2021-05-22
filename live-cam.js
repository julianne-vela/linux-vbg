const sharp = require('sharp');
const v4l2camera = require('v4l2camera');

const cam = new v4l2camera.Camera('/dev/video2');
cam.start();
