const mix = require('laravel-mix');

mix.styles([
   'node_modules/webslides/static/css/webslides.css',
   'node_modules/webslides/static/css/svg-icons.css',
], 'assets/css/webslides.css');

mix
  .js('resources/js/app.js', 'assets/js')
  .js('resources/js/webslides.js', 'assets/js')
  .js('resources/js/terminal.js', 'assets/js')
    .sass('resources/sass/app.scss', 'assets/css');
