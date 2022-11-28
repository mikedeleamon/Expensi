/*For Webpack, we need to:
** define entry point
** define ouput point*/

//load in a node module:
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


process.env.NODE_ENV = process.env.NODE_ENV || 'developement'


if (process.env.NODE_ENV=='test'){
    require('dotenv').config({path: '.env.test'})
} else if(process.env.NODE_ENV == 'development'){
    require('dotenv').config({path: '.env.developement'})
}

module.exports =(env) => {
const isProduction = env === 'production'
const CSSExtract = new ExtractTextPlugin('styles.css')

    return{
    entry: './src/app.js',
    output: {
        //output path must be explicitly declared. use __dirname to access dir location
        path:path.join(__dirname,'public','dist'),
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
            use:CSSExtract.extract({
               use: [
                    {
                        loader:'css-loader',
                        options:{
                        sourceMap:true
                    }
                    },
                    {
                        loader:'sass-loader',
                        options:{
                        sourceMap:true
                        }
                    }
                ]
            })
        }]
    },

    plugins: [
        CSSExtract,
        new webpack.DefinePlugin({
            
            'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            'process.env. FIREBASE_PROJECT_ID': JSON.stringify(process.env. FIREBASE_PROJECT_ID),
            'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
            'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
        })
    ],
   
    //cheap-module-eval-source-map allows you to locate errors where you origionally wrote them
    devtool: isProduction? 'source-map' : 'inline-source-map',
   
    //development server for the app
    devServer:{
        contentBase: [path.join(__dirname,'public')],
        //this tells app that this app is using client side routing when the value is true
        historyApiFallback:true,
        publicPath:'/dist/'
    }}
}



