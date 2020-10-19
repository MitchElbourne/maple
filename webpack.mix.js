const mix = require('laravel-mix')

mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/vendor.scss', 'public/css').version()
    .sass('resources/sass/app.scss', 'public/css').version()
    .browserSync('maple.test')
