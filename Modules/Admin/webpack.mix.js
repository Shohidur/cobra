const dotenvExpand = require('dotenv-expand');
dotenvExpand(require('dotenv').config({ path: '../../.env'/*, debug: true*/}));

const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.setPublicPath('../../public').mergeManifest();

mix.js(__dirname + '/Resources/assets/js/app.js', 'js/admin.js')
    .sass( __dirname + '/Resources/assets/sass/app.scss', 'css/admin.css');

mix.postCss(__dirname + '/assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css', 'public/tempusdominus-bootstrap-4.min.css'); 

if (mix.inProduction()) {
    mix.version();
}

console.log(__dirname)
