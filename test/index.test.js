const ImageNetLabelsI18n = require('../index');

const enJSON = require('../locales/en.json');
const zhJSON = require('../locales/zh.json');

test("ImageNet Labels i18n - check basic usage", (done) => {
  const result = ImageNetLabelsI18n.__('0');

  expect(result).toEqual(enJSON['0']);
  done()
});

test("ImageNet Labels i18n - check other language", (done) => {
  ImageNetLabelsI18n.setLocale('zh');
  const result = ImageNetLabelsI18n.__('0');

  expect(result).toEqual(zhJSON['0']);
  done()
});
