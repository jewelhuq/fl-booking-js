var FLScheduler = function FLScheduler(apiUrl) {
  'use strict';
  if (!apiUrl) { throw new Error('FLScheduler(): no apiUrl parameter provided.'); }

  if (!(this instanceof FLScheduler)) {
    return new FLScheduler(apiUrl);
  }

  var _this = this;
  var baseUrl = apiUrl;
  function request(method, url, data) {
    var config = {
      method: method,
    };

    var target = baseUrl + url;
    if (method.toUpperCase() === 'POST') {
      config.body = JSON.stringify(data);
    }

    return fetch(target, config).then(function (res) {
      return res.json();
    }).then(function (json) {
      return json;
    });
  }

  this.configure = function () {};

  this.setUser = function () {};

  this.findTime = function (data) {
    return request('POST', '/findtime', data);
  };

  this.getUserTimezone = function (data) {
    return request('GET', '/users/timezone/?email=' + data.email);
  };

  this.headers = function (arg) {
    console.log(arg);
    return _this;
  };

  this.createBooking = function (data) {
    console.log('Creating booking with:');
    console.dir(data);
    return request('POST', '/bookings', data);
  };

  //Logs function calls
  // Object.keys(_this).forEach(function (prop) {
  //   var func = _this[prop];
  //   Object.defineProperty(_this, prop, {
  //     get: function () {
  //       console.log('slvSceduler: ' + prop);
  //       return func;
  //     },
  //   });
  // });

  return this;
};
