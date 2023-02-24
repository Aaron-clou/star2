module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/star2/' : '/',
    devServer: {
        disableHostCheck: true, // 关闭host检查
    },
};
