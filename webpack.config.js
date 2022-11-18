/*For Webpack, we need to:
** define entry point
** define ouput point*/

//load in a node module:
const path = require('path')

module.exports={
    entry: './src/app.js',
    output: {
        //output path must be explicitly declared. use __dirname to access dir location
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    // loader
    //converts js files to babel jsx
    module:{
        rules:[{
            loader:'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },

        /*loading css*/
        {
            //? = optional
            //$ = ends with
            test:/\.s?css$/,
            //use allows you to load multiple loaders at once
            //PUT THE STYLE LOADER BEFORE THE CSS LOADER!!!!!!
            use:['style-loader',
                'css-loader',
                'sass-loader']
        }
    ]
    },
   
    //cheap-module-eval-source-map allows you to locate errors where you origionally wrote them
    devtool: 'cheap-module-eval-source-map',
   
    //development server for the app
    devServer:{
        contentBase: [path.join(__dirname,'public')],
        //this tells app that this app is using client side routing when the value is true
        historyApiFallback:true
    }
}

