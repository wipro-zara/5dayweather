var webpack = require('webpack');

module.exports = {
  entry: [
      'script-loader!jquery/dist/jquery.min.js',
      'script-loader!foundation-sites/dist/foundation.min.js',
      './app/app.jsx'
  ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin(
        {
            '$': 'jquery',
            'jQuery': 'jquery'
        })

    ],

    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        alias: {
            Main: 'app/components/Main.jsx',
            Navbar: 'app/components/Navbar.jsx',
            WeatherApp: 'app/components/WeatherApp.jsx',
            WeatherForm: 'app/components/WeatherForm.jsx',
            WeatherOutput: 'app/components/WeatherOutput.jsx',
            Resources: 'app/components/Resources.jsx',
            Examples: 'app/components/Examples.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx',
            ErrorModal: 'app/components/ErrorModal.jsx',
            applicationStyles: 'app/styles/app.css'

        },
        extensions: ['.js', '.jsx']
    },

    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'] //compile code for these
                },
                test: /\.jsx?$/, //apply loader to every file that is .jsx
                exclude: /(node_modules|bower_components)/ //excluding these from the loader
            },

            {
              loader: 'url-loader',
              query: { limit: 10000 }, // Inline images smaller than 10kb as data URIs
              test: /\.(?:png|jpg|svg)$/,
            }
        ]
    },

    devtool: 'cheap-module-eval-source-map'
};
