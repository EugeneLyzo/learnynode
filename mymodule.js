const fs = require('fs');
module.exports = function (path, extention, callback) {
  // console.log(args)
  fs.readdir(path, (err, data) => {
    if (err) return callback(err);
    callback(null, data.filter(item => item.substr(-3) === `.${extention}`));
  });
};