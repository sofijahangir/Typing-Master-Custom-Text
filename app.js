/**
 * @Author: Jahangir Ahmad
 * @Date:   2021-03-26 17:31:10
 * @Last Modified by:   Jahangir Ahmad
 * @Last Modified time: 2021-03-26 18:17:28
 */
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  );
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
document.getElementById('btn').addEventListener(
  'click',
  function () {
    // Generate download of hello.txt file with some content
    var filename = document.getElementById('filename').value;
    // var filename = 'hello.txt';
    var exiGen =
      'name=' +
      filename +
      '\n' +
      'description=' +
      filename +
      '\n' +
      'language=eng';
    document.getElementById('myfile1').value = exiGen;
    var text = document.getElementById('myfile').value;
    var text1 = document.getElementById('myfile1').value;

    var exmFile = filename + '.exm';
    var exiFile = filename + '.exi';

    download(exmFile, text);
    download(exiFile, text1);
  },
  false
);
