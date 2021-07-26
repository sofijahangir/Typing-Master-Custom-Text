/*
 * @Author: Jahangir Ahmad
 * @Date:   2021-07-26 18:50:12
 * @Last Modified by:   Jahangir Ahmad
 * @Last Modified time: 2021-07-26 19:34:22
 */
function download(name, text) {
  var element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  );
  element.setAttribute('download', name);

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
    var filename = document.getElementById('name').value;
    // var filename = 'hello.txt';

    // Check empty file name and text box;

    // document.getElementById('btn').disabled = false;
    var exiGen =
      'name=' +
      filename +
      '\n' +
      'description=' +
      filename +
      '\n' +
      'language=eng';
    document.getElementById('message1').value = exiGen;
    var text = document.getElementById('message').value;
    var text1 = document.getElementById('message1').value;

    var exmFile = filename + '.exm';
    var exiFile = filename + '.exi';

    download(exmFile, text);
    download(exiFile, text1);
  },
  false

  // If Text Fields are empty disable the download button
);
