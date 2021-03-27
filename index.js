const path = require('path');
const { I18n } = require('i18n');

module.exports = new I18n({
  locales: ['en', 'zh'],
  directory: path.join(__dirname, './locales'),
})
