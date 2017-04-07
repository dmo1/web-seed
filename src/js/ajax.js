/*
 * @
 */

var Site = Site || {};
Site.ajax = {
  post: function(url, data, successCallback, failCallback) {
      xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                successCallback(xhr.responseText);
              } else {
                failCallback(xhr.responseText);
              }
          }
      };

      //Send the proper header information along with the request
      xhr.open('POST', url, true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send(data);

      return xhr;
  }
};
