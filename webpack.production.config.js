/**
 * Created by Mason Jackson in Office on 2017/5/3.
 */
/**
 * Created by Mason Jackson in Office on 2017/4/21.
 */
var HtmlWebpackPlugin=require('html-webpack-plugin');
var webpack=require('webpack');
var modulePath=__dirname+"/modules";
var entryPath=__dirname;
var outPath=__dirname+"/result";

module.exports = {
    entry:  {
        index: entryPath + "/index.js",
        signIn: entryPath+"/signUp.js"
    },
    output: {
        path: outPath,
        filename: "[name].js"
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loaders:['style-loader','css-loader']
            },
            {
                test:/\.scss$/,
                loaders:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.(png|jpg|svg)$/,
                loader:'url-loader?limit=40000'
            },
            {
                test:/\.(eot|woff2|woff|ttf)$/,
                loader:"file-loader"
            },
            {
                test:/\.jsx?$/,
                loader:'babel-loader',
                query:{presets:['react','es2015']},
                exclude: /node_modules/
            }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: '麦米科技后台管理系统',
            template:'./src/mainPageTemplate.html',
            favicon: __dirname + '/favicon.ico',
            filename:'index.html',
            chunks:['index'],
            inject:'body',
        }),
        new HtmlWebpackPlugin({
            title: '麦米科技后台管理系统注册',
            template:'./src/mainPageTemplate.html',
            favicon: __dirname + '/favicon.ico',
            filename:'signin.html',
            chunks:['signIn'],
            inject:'body'
        }),
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
    ],

}
