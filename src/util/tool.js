import axios from 'axios'
import vue from 'vue';
const tool = {
  imgUrl: 'http://127.0.0.1:7001',
  getElementTops(el) {
    let actualTop = el.offsetTop;
    let current = el.offsetParent;
    while (current !== null) {
      actualTop += current.offsetTop;
      current = current.offsetParent;
    }
    return actualTop;
  },
  ajax(param) {
    let ajax;
    let config = {
      url: '/api' + param.url, //请求url
      data: param.data || {}, //请求参数
      type: param.type || 'post', //请求方式，默认为post
      success: param.success, //请求成功回调函数
      error: param.error, //请求失败回调函数
    }
    if (!config.url) {
      alert('url required');
      return
    }
    axios.defaults.headers.csrfToken = this.cookie.get('csrfToken');
    if (config.type.toUpperCase() == 'POST') {
      ajax = axios.post(config.url, config.data);
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    } else {
      ajax = axios.get(config.url, {
        params: config.data
      });
    }
    ajax.then(response => {
      if (typeof config.success === "function") {
        if (response.data.code === 302) {
          const local = window.location;
          window.location.href = `http://${local.host}${local.pathname}#/login`

        }

        config.success(response.data);
      }
    }).catch(error => {
      config.error(error);
    })
  },
  cookie: {
    set: function (name, value, flag) {
      var Days = 30;
      var exp = new Date();
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
      if (flag == true) {
        document.cookie = name + "=" + window.escape(value);
        return;
      }
      document.cookie = name + "=" + window.escape(value) + ";expires=" + exp.toGMTString() + "; path=/";
    },
    get: function (name) {
      var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
      if (arr !== null) {
        return window.unescape(arr[2]);
      }
      return null;
    },
    del: function (name) {
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      var cval = cookie.get(name);
      if (cval !== null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
      }
    }
  },

  JSEncrypt(password) {
    return new Promise((resolve, reject) => {
      ajax.getPublicKey(res => {
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(res.data);
        if (res.code === 200) {
          resolve(encrypt.encrypt(password));
        } else {
          reject('公钥获取失败')
        }

      })
    })

  },
  //处理时间格式
  formatDate(date, format) {
    if (!date || new Date(date) == 'Invalid Date') return false;
    format = format || "yyyy/MM/dd hh:mm:ss";
    date = date || new Date();
    if (typeof date == "string") date = new Date(Date.parse(date.replace(/-/g, "/"))); //Safari不支持 2017-01-01的格式
    //if(typeof date == "string") date = new Date(date);
    const o = {
      "M+": date.getMonth() + 1, //month
      "d+": date.getDate(), //day
      "h+": date.getHours(), //hour
      "m+": date.getMinutes(), //minute
      "s+": date.getSeconds(), //second
      "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
      "S": date.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
          RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    return format;
  },
  LocalStorage: {
    on: function () {
      this.events.addListener.apply(this.events, arguments);
    },
    off: function () {
      this.events.removeListener.apply(this.events, arguments);
    },
    fireEvent: function (name, event) {
      if (this.events) {
        this.events.fireEvent(name, event);
      }
    },
    get: function get(name) {
      var s = localStorage.getItem(name),
        obj;
      try {
        obj = s ? JSON.parse(s) : null;
      } catch (e) {
        console.log(name + " : " + s);
      }
      return obj;
    },
    set: function (name, obj) {
      var args = {};
      args[name] = {
        oldValue: this.get(name),
        value: null
      };
      if (obj === undefined) {
        localStorage.removeItem(name);
      } else {
        try {
          localStorage.setItem(name, JSON.stringify(obj));
        } catch (e) {
          if (e.name == 'QuotaExceededError') {
            localStorage.clear();
          }
        }
      }
      args[name].value = obj;
      this.fireEvent("PropertyChanged", args);
    },
    destory: function (name) {
      localStorage.removeItem(name);
    }
  },
  cookie: {
    set: function (name, value, flag) {
      var Days = 30;
      var exp = new Date();
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
      if (flag == true) {
        document.cookie = name + "=" + window.escape(value);
        return;
      }
      document.cookie = name + "=" + window.escape(value) + ";expires=" + exp.toGMTString() + "; path=/";
    },
    get: function (name) {
      var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
      if (arr !== null) {
        return window.unescape(arr[2]);
      }
      return null;
    },
    del: function (name) {
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      var cval = cookie.get(name);
      if (cval !== null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
      }
    }
  }
}
export default tool;