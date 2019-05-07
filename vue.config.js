module.exports = {
    baseUrl: process.env.NODE_ENV === "production" ? "./" : "/",
    outputDir: 'dist', 
    // 放置静态资源的地方 (js/css/img/font/...)
    assetsDir: 'static',
    
}