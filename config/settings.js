var path = require('path');
var __root =__dirname;

exports.debug = true;
exports.port = process.env.PORT || 80;
exports.email = "bianshifeng@live.com";
exports.site_name = "bianshifeng' Blog";
exports.site_desc = "this is a blog";
exports.root = __root;
exports.staticPath = path.resolve(__root,'public');
exports.viewsPath = path.resolve(__root,'views');

