/**
 * Created by Mason Jackson in Office on 2017/4/21.
 */
var HtmlWebpackPlugin=require('html-webpack-plugin');
var webpack=require('webpack');
var modulePath=__dirname+"/modules";
var entryPath=__dirname;
var outPath=__dirname;

module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry:  entryPath + "/index.js",
    output: {
        path: outPath,
        filename: "bundle.js"
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
            favicon: __dirname + '/favicon.ico'
        }),
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
    ],
    devServer:{
        contentBase:"./build",   //入口地址目录
        historyApiFallback:true,  //true代表跳转指向index.html
        inline:true,    //源文件改变时自动刷新页面
        port:8090  //服务器端口号
    }
}
