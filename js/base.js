var eventToUse = 'tap';

function makeTemplates() {
  var templateName = '';
  $('script[type="text/x-jquery-tmpl"]').each(function (index, item) {
    templateName = $(item).attr("id");
    $.template(templateName.replace("Template", ""), $(item).html());
  });
}

function render(element, template, data, cb) {
  $(element).html('');
  $.tmpl(template, data).appendTo(element);
  if (cb)
    cb($(element))
}

function bind(element, func, eventName) {
  //log('bind ' + element);
  if (eventName)
    $(element).unbind().bind(eventName, func);
  else
    $(element).unbind().bind(eventToUse, func);
}


function slideIn(element, func) {
  $(element).show().transition({
    x: w * -1
  }, func);
}

function slideOut(element, func) {
  $(element).show().transition({
    x: w * 1
  }, func);
}

function swapIn(elementFrom, elementTo, func) {
  $(elementTo).show().transition({
    x: w * -1
  }, function () {
    $(elementFrom).transition({
      x: w * 1
    }, 10, function () {
      $(this).hide();
    });

    func();
  });
}


function execute(command, request) {
  return new Promise(function (res, rej) {
    executeInternal(appUrl, command, 'POST', request, res, rej, 10000);
  });
}

function executeInternal(url, command, request_path, requestData, success, fail, timeout) {
  fail = ((fail == undefined) ? function () {
    //handle error
  } : fail);

  $.ajax({
    type: request_path,
    url: url + command,
    data: JSON.stringify(requestData),
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    timeout: timeout == undefined ? 30000000 : timeout, // in milliseconds
    success: success,
    error: fail
  });
}

function merge(obj1, obj2) {
  var obj3 = {};
  for (var attrname in obj1) {
    obj3[attrname] = obj1[attrname];
  }
  for (var attrname in obj2) {
    obj3[attrname] = obj2[attrname];
  }
  return obj3;
}

