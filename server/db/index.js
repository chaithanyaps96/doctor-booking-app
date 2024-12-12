const mongoose = require('mongoose');
const chalk = require('chalk');
mongoose
  .connect('mongodb://localhost:27017/docDB')
  .then(() => {
    console.log(chalk.blue('DB connected'));
  })
  .catch(e => {
    console.log(chalk.red(e));
  });
module.exports = mongoose;
