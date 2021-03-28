const path = require('path');
const { I18n } = require('i18n');

const instance = new I18n({
  locales: ['en', 'zh'],
  directory: path.join(__dirname, './locales'),
});

module.exports = instance;
