const path = require('path');
const download = require('../src/index');

const downloadUrlFood = 'http://lorempixel.com/500/500/food/';
const downloadNodeTar = 'https://nodejs.org/dist/v10.15.1/node-v10.15.1-linux-x64.tar.xz';


/** Promise API */

// download(downloadNodeTar, path.join(__dirname, 'node.tar.xz'), {
//         timeout: 5000
//     }).then((res) => {

//         console.log('download comcpleted');

//     })

//     .catch((err) => {

//         console.log('!!! :( Error ', err)
//     })


/** Async API */
try {

    download(downloadNodeTar, path.join(__dirname, 'node.tar.xz'))
} catch (e) {

    console.log('!! :( ', e);
}