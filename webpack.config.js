const path = require('path');

module.exports = {
  entry: "./public/js/calendar.js",
  output: {
    filename: 'calendarBundle.js',
    path: path.resolve(__dirname, 'public/js/'),
    publicPath: '/js/'
  },
  mode: 'production',
  resolve: {
    alias: {
      sequelize$: path.resolve(__dirname, 'config', 'connection.js')
    }
  }
};
