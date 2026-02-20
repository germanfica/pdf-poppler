const { fromPath } = require('pdf2pic');

const converter = fromPath('input.pdf', {
  density: 200,
  savePath: './out',
  format: 'png',
  width: 800,
  height: 1000
});

converter(1) // página 1
  .then(res => console.log('Guardado:', res))
  .catch(err => console.error(err));
