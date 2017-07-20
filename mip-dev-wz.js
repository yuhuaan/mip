/**
 * @file mip-dev-wz 组件
 * @author dev
 */

define(function (require) {

    var customElement = require('customElement').create();

    /**
     * 构造元素，只会运行一次
     */
    customElement.prototype.build = function () {
        var element = this.element;
        var groupid = element.getAttribute('adid');
        var s = '_' + Math.random().toString(36).slice(2);
        var x = document.createElement('div');
        x.id = s;
        element.appendChild(x);
        var e = document.createElement('script');
        e.type = 'text/javascript', e.src = 'https://s.m.csefaazc.com.cn/11/' + groupid + '.net?ssid=' + s, e.async = 'true';
        var t = document.getElementsByTagName('head')[0];
        if (t) {
            t.insertBefore(e, t.firstChild);
        }
    };

    return customElement;
});
