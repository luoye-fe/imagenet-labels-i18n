# imagenet-labels-i18n

Human-readable labels for imagenet, and provide multi-language json.

> PS: In order to better describe the content of label, the completed json file may be updated

## Usage

`imagenet-labels-i18n` export default `i18n` instance, you can use the `i18n` method directly.

```js
const ImageNetLabelsI18n = require('imagenet-labels-i18n');

console.log(ImageNetLabelsI18n.__('0')); // -> tench, Tinca tinca

ImageNetLabelsI18n.setLocale('zh');
console.log(ImageNetLabelsI18n.__('0')); // -> 丁鲷
```

Similarly, you can use i18n directly.

```js
const { I18n } = require('i18n');

const i18n = new I18n({
  locales: ['en', 'zh'],
  directory: path.join('node_modules/imagenet-labels-i18n/locales'),
})

console.log(i18n.__('0')); // -> tench, Tinca tinca

i18n.setLocale('zh');
console.log(i18n.__('0')); // -> 丁鲷
```

## Multilingual status

| locale |          status           |
| :----: | :-----------------------: |
|  `en`  |             ✅             |
|  `zh`  |             ✅             |
|  `jp`  | ⏩ (need help, welcome pr) |
