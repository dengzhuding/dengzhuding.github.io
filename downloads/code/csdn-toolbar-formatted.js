"use strict";
function _toConsumableArray(t) {
    if (Array.isArray(t)) {
        for (var e = 0, n = Array(t.length); e < t.length; e++)
            n[e] = t[e];
        return n
    }
    return Array.from(t)
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
var _createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1,
            o.configurable = !0,
            "value"in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o)
        }
    }
    return function(e, n, o) {
        return n && t(e.prototype, n),
        o && t(e, o),
        e
    }
}()
  , _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
}
: function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
}
;
"function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
    value: function(t, e) {
        if (null === t || void 0 === t)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var n = Object(t), o = 1; o < arguments.length; o++) {
            var a = arguments[o];
            if (null !== a && void 0 !== a)
                for (var r in a)
                    Object.prototype.hasOwnProperty.call(a, r) && (n[r] = a[r])
        }
        return n
    },
    writable: !0,
    configurable: !0,
    enumerable: !1
}),
window._hmt = window._hmt || [],
function() {
    function t(t) {
        for (var e = document.cookie.split("; "), n = 0; n < e.length; n++) {
            var o = e[n].split("=");
            if (o[0] == t && "UD" == t)
                return decodeURIComponent(o[1]);
            if (o[0] == t)
                return decodeURI(o[1])
        }
    }
    function e() {
        var t = window.location.host;
        return 0 === t.indexOf("blog") ? "UA-127895514-2" : 0 === t.indexOf("download") ? "UA-127895514-8" : 0 === t.indexOf("edu") ? "UA-127895514-9" : 0 === t.indexOf("bbs") ? "UA-127895514-4" : 0 === t.indexOf("ask") ? "UA-127895514-5" : 0 === t.indexOf("gitbook") ? "UA-127895514-10" : 0 === t.indexOf("iteye") ? "UA-127895514-6" : 0 === t.indexOf("passport") ? "UA-127895514-7" : 0 === t.indexOf("so") ? "UA-127895514-3" : 0 === t.indexOf("www") ? t.indexOf("iteye") > 0 ? "UA-127895514-6" : "UA-127895514-1" : ""
    }
    var n = "6bcd52f51e9b3dce32bec4a3997715ac"
      , o = function() {
        var t = "6bcd52f51e9b3dce32bec4a3997715ac"
          , e = $('meta[name="toolbar"]');
        if (e.length) {
            var n = e.attr("content") || {};
            n = JSON.parse(n),
            t = n.hmId || t
        }
        return t
    }();
    !function(t) {
        for (var e = document.cookie.split("; "), o = 0; o < e.length; o++) {
            var a = e[o].split("=");
            /^Hm\_.+\_.+$/.test(a[0]) && -1 === a[0].indexOf(t) && -1 === a[0].indexOf(n) && (document.cookie = a[0] + "=" + escape("") + ";max-age=0;domain=.csdn.net;path=/")
        }
    }(o),
    function(t) {
        _hmt.push(["_setAccount", t])
    }(o),
    function() {
        try {
            var e = !!t("UN")
              , n = !!t("UserName")
              , o = t("p_uid");
            o = o ? o.substr(1, 1) : 0,
            _hmt.push(["_setUserProperty", {
                islogin: +e,
                isonline: +n,
                isvip: +(1 == o)
            }]),
            n && _hmt.push(["_setUserId", t("UserName")]),
            _hmt.push(["_setUserTag", "6525", t("uuid_tt_dd")])
        } catch (t) {
            void 0
        }
    }();
    var a = document.createElement("script");
    a.src = "https://hm.baidu.com/hm.js?" + o;
    var r = document.getElementsByTagName("script")[0];
    if (r.parentNode.insertBefore(a, r),
    document.referrer.indexOf("google.com") > -1) {
        var i = function() {
            dataLayer.push(arguments)
        }
          , s = document.createElement("script");
        s.src = "https://www.googletagmanager.com/gtag/js?id=" + e(),
        r.parentNode.insertBefore(s, r),
        window.dataLayer = window.dataLayer || [];
        var c = t("UserName") || "";
        i("js", new Date),
        i("config", e()),
        c && i("set", {
            user_id: c
        })
    }
}(),
function() {
    var t = document.createElement("script");
    t.type = "text/javascript",
    t.async = !0,
    t.src = "https://g.csdnimg.cn/??asdf/1.1.3/trackad.js,iconfont/nav/iconfont-1.0.1.js,notification/1.3.8/notify.js,notification/1.3.8/main.js";
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(t, e)
}(),
function() {
    function t(t, e, n) {
        var o = new Date;
        if (-1 == n)
            return void (document.cookie = t + "=" + escape(e) + ";domain=.csdn.net;path=/");
        if (n)
            o.setTime(o.getTime() + n);
        else {
            o.setTime(o.getTime() + 2592e6)
        }
        document.cookie = t + "=" + escape(e) + ";expires=" + o.toGMTString() + ";domain=.csdn.net;path=/"
    }
    function e(t) {
        var e, n = new RegExp("(^| )" + t + "=([^;]*)(;|$)");
        return (e = document.cookie.match(n)) ? unescape(e[2]) : ""
    }
    var n = ["blog", "bbs", "download", "ask", "edu", "biwen"]
      , o = document.referrer;
    if ("" !== o)
        if (o.indexOf(".csdn.net") > -1)
            for (var a = 0; a < n.length; a++)
                o.indexOf(n[a] + ".csdn.net") > -1 && (t("c_pref", e("c_ref"), -1),
                t("c_ref", o, -1));
        else
            t("c_pref", e("c_ref"), -1),
            t("c_ref", o.split("?")[0], -1)
}(),
window._hmt = window._hmt || [],
function(t, e) {
    function n(t) {
        var e = document.createElement("link");
        e.rel = "stylesheet",
        e.type = "text/css",
        e.href = t,
        document.getElementsByTagName("head")[0].appendChild(e)
    }
    function o(t, e) {
        var n = document.createElement("script");
        n.type = "text/javascript",
        n.readyState ? n.onreadystatechange = function() {
            "loaded" != n.readyState && "complete" != n.readyState || (n.onreadystatechange = null,
            e && e())
        }
        : n.onload = function() {
            e && e()
        }
        ,
        n.src = t,
        document.getElementsByTagName("head")[0].appendChild(n)
    }
    function a(t) {
        for (var e = document.cookie.split("; "), n = 0; n < e.length; n++) {
            var o = e[n].split("=");
            if (o[0] == t)
                return decodeURIComponent(o[1])
        }
    }
    function r(t, e, n) {
        var o = new Date;
        if (n)
            o.setTime(o.getTime() + n);
        else {
            o.setTime(o.getTime() + 2592e6)
        }
        document.cookie = t + "=" + encodeURIComponent(e) + ";expires=" + o.toGMTString() + ";domain=.csdn.net;path=/"
    }
    function i(t) {
        var e = new Date;
        document.cookie = t + "=" + escape("1") + ";max-age=0;expires=" + e.toGMTString() + ";domain=.csdn.net;path=/"
    }
    function o(t, e) {
        var n = document.createElement("script");
        n.type = "text/javascript",
        n.readyState ? n.onreadystatechange = function() {
            "loaded" != n.readyState && "complete" != n.readyState || (n.onreadystatechange = null,
            e && e())
        }
        : n.onload = function() {
            e && e()
        }
        ,
        n.src = t,
        document.getElementsByTagName("head")[0].appendChild(n)
    }
    function s(t, e) {
        var n, o = null;
        return function() {
            var a = this
              , r = new Date;
            r - o - e > 0 ? (n && (clearTimeout(n),
            n = null),
            t.apply(a, arguments),
            o = r) : n || (n = setTimeout(function() {
                t.apply(a, arguments)
            }, e))
        }
    }
    function c(t) {
        t = t.replace("https://", "");
        var e = t.split(".")[0];
        return ~location.host.indexOf(e)
    }
    function l(n) {
        if ("[object Object]" == Object.prototype.toString.call(n)) {
            var o = e("#csdn-toolbar")
              , a = n.need_first_suspend || !1
              , r = n.need_little_suspend || !1
              , i = n.little_tool_id || ""
              , c = n.little_need_insert_type || ""
              , d = n.need_change_function || ""
              , p = ""
              , u = "";
            if (1 != a || 1 != r) {
                if (r && "" != i && (o = e(i)),
                r && i && "" != c && (p = "." + c,
                u = e(p)),
                0 === o.length)
                    return void m.push(l.bind(this, n));
                var h = s(function() {
                    if ((document.documentElement.scrollTop || document.body.scrollTop) >= 50)
                        o.css({
                            position: "fixed",
                            top: "0",
                            left: "0",
                            "z-index": "1993",
                            width: "100%"
                        }),
                        r && e(".secodn_level_csdn_logo").length && e(".secodn_level_csdn_logo").css({
                            display: "block"
                        }),
                        r && "" != c && (e("body").addClass("toolbar-second-drop"),
                        "onlySearch" == c ? e("#csdn_tool_otherPlace").append(u) : "onlyUser" == c ? e("#csdn_tool_otherPlace").append(u) : "searchUser" == c && (e("#csdn_tool_otherPlace").append(e(".onlySearch")),
                        e("#csdn_tool_otherPlace").append(e(".onlyUser")))),
                        "function" == typeof d && d("fixed");
                    else {
                        if (o.css({
                            position: "static",
                            "z-index": ""
                        }),
                        r && e(".secodn_level_csdn_logo").length && e(".secodn_level_csdn_logo").css({
                            display: "none"
                        }),
                        r && "" != c) {
                            e("body").removeClass("toolbar-second-drop");
                            var t = e("#csdn-toolbar .toolbar-container");
                            "onlySearch" == c ? t.find(".toolbar-menus").after(u) : "onlyUser" == c ? t.find(".toolbar-container-right").append(u) : "searchUser" == c && (t.find(".toolbar-container-middle").append(e(".onlySearch")),
                            t.find(".toolbar-container-right").append(e(".onlyUser")))
                        }
                        "function" == typeof d && d("noFixed")
                    }
                }, 80);
                (document.documentElement.scrollTop || document.body.scrollTop) > 50 && h(),
                e(t).on("scroll", h)
            }
        }
    }
    function d() {
        var e = t.location.host
          , n = e.split(".")[0]
          , o = "";
        switch (n) {
        case "www":
        case "blog":
        case "bbs":
            o = "";
            break;
        case "download":
            o = "doc";
            break;
        case "ask":
        case "gitchat":
        case "geek":
            o = "";
            break;
        case "edu":
            o = "course";
            break;
        default:
            o = ""
        }
        return e.indexOf(".blog.csdn.net") > -1 && (o = "blog"),
        o
    }
    function p(t) {
        var e = {};
        return location.href.replace(/([^*#&=?]+)=([^*#&=?]+)/g, function() {
            for (var t = arguments.length, n = Array(t), o = 0; o < t; o++)
                n[o] = arguments[o];
            var a = n[1]
              , r = n[2];
            e[a] = r
        }),
        t ? e[t] : e
    }
    function u(t) {
        void 0;
        try {
            t && e(document).trigger(t)
        } catch (t) {
            void 0
        }
    }
    function h() {
        this.currentUser = {
            userName: "",
            userNick: '<a class="set-nick" href="https://passport.csdn.net/account/profile">设置昵称<span class="write-icon"></span></a>',
            desc: '<a class="fill-dec" href="//my.csdn.net" target="_blank">编辑自我介绍，让更多人了解你<span class="write-icon"></span></a>',
            avatar: ""
        },
        this.hasLogin = !1,
        this.$container = "",
        this.announcement = 0,
        this.logoData = {
            title: "CSDN首页",
            url: {
                default: "https://csdnimg.cn/cdn/content-toolbar/csdn-logo.png?v=20200416.1",
                dark: "https://g.csdnimg.cn/common/csdn-toolbar/images/csdn-logo.png",
                home: "https://g.csdnimg.cn/common/csdn-toolbar/images/csdn-logo.png"
            }
        },
        this.navData = [],
        this.personMenuData = [],
        this.advertData = {
            date: {
                start: "2020/07/03 08:50:00",
                end: "2020/07/04 17:30:00"
            },
            background: {
                large: "https://csdnimg.cn/public/publick_img/ad_20200703_toolbar325.jpg",
                default: "https://csdnimg.cn/public/publick_img/ad_20200703_toolbar80_2.jpg"
            },
            color: "#027ef2",
            url: "https://aiprocon.csdn.net/p/live?utm_source=live_703"
        },
        this.init()
    }
    t.csdn = t.csdn || {},
    t.csdn.configuration_tool_parameterv = l;
    var g = ["csdn-toolbar-default", "csdn-toolbar-dark", "csdn-toolbar-home"]
      , m = []
      , f = 0;
    h.prototype = {
        constructor: h,
        init: function() {
            var t = this;
            t.checkLogin(function(e) {
                e.userName && (t.hasLogin = !0,
                _hmt.push(["_setUserTag", "5744", e.userName])),
                t.setPersonMenuData()
            }),
            t.getToolbarData(t.render)
        },
        render: function(t) {
            var e = this;
            e.renderToolbar(),
            e.renderLogo(),
            e.renderNav(),
            e.renderSearch(),
            e.renderBtns(),
            e.getHotSearchWordData(),
            e.chain()
        },
        setPersonMenuData: function() {
            this.personMenuData = [{
                name: "我的关注",
                url: "https://i.csdn.net/#/uc/follow-list",
                report: {
                    mod: "popu_789",
                    dest: "https://i.csdn.net/#/uc/follow-list",
                    spm: "3001.5109"
                },
                icon: "toolbar-icon-follow",
                class: ""
            }, {
                name: "我的收藏",
                url: "https://i.csdn.net/#/uc/collection-list?type=1",
                report: {
                    mod: "popu_789",
                    dest: "https://i.csdn.net/#/uc/collection-list?type=1",
                    spm: "3001.5110"
                },
                icon: "toolbar-icon-collect",
                class: ""
            }, {
                name: "个人中心",
                url: "https://i.csdn.net/#/uc/profile",
                report: {
                    mod: "popu_789",
                    dest: "https://i.csdn.net/#/uc/profile",
                    spm: "3001.5111"
                },
                icon: "toolbar-icon-profile",
                class: ""
            }, {
                name: "帐号设置",
                url: "https://i.csdn.net/#/account/index",
                report: {
                    mod: "popu_789",
                    dest: "https://i.csdn.net/#/account/index",
                    spm: "3001.5112"
                },
                icon: "toolbar-icon-account",
                class: "toolbar-subMenu-border"
            }, {
                name: "我的博客",
                url: "https://blog.csdn.net/" + this.currentUser.userName,
                report: {
                    mod: "popu_789",
                    dest: "https://blog.csdn.net/",
                    spm: "3001.5113"
                },
                icon: "toolbar-icon-blog",
                class: ""
            }, {
                name: "管理博客",
                url: "https://mp.csdn.net/console/article",
                report: {
                    mod: "popu_789",
                    dest: "https://mp.csdn.net/console/article",
                    spm: "3001.5114"
                },
                icon: "toolbar-icon-mp",
                class: ""
            }, {
                name: "我的学院",
                url: "https://edu.csdn.net/",
                report: {
                    mod: "popu_789",
                    dest: "https://edu.csdn.net/",
                    spm: "3001.5115"
                },
                icon: "toolbar-icon-edu",
                class: ""
            }, {
                name: "我的下载",
                url: "https://mp.csdn.net/console/upDetailed",
                report: {
                    mod: "popu_789",
                    dest: "https://mp.csdn.net/console/upDetailed",
                    spm: "3001.5116"
                },
                icon: "toolbar-icon-download",
                class: ""
            }, {
                name: "我的书架",
                url: "https://book.csdn.net/bookshelf",
                report: {
                    mod: "popu_789",
                    dest: "https://book.csdn.net/bookshelf",
                    spm: "3001.5117"
                },
                icon: "toolbar-icon-book",
                class: "toolbar-subMenu-border"
            }, {
                name: "我的钱包",
                url: "https://i.csdn.net/#/wallet/index",
                report: {
                    mod: "popu_789",
                    dest: "https://i.csdn.net/#/wallet/index",
                    spm: "3001.5136"
                },
                icon: "toolbar-icon-wallet",
                class: ""
            }, {
                name: "我的订单",
                url: "https://mall.csdn.net/myorder",
                report: {
                    mod: "popu_789",
                    dest: "https://mall.csdn.net/myorder",
                    spm: "3001.5137"
                },
                icon: "toolbar-icon-order",
                class: "toolbar-subMenu-border"
            }, {
                name: "帮助",
                url: "https://blog.csdn.net/blogdevteam/article/details/103478461",
                report: {
                    mod: "popu_789",
                    dest: "https://blog.csdn.net/blogdevteam/article/details/103478461",
                    spm: "3001.5138"
                },
                icon: "toolbar-icon-help",
                class: ""
            }, {
                name: "退出",
                url: "javascript:;",
                report: {
                    spm: "3001.5139"
                },
                icon: "toolbar-icon-logout",
                class: "toolbar-btn-logout"
            }]
        },
        getAvatarByAu: function(t) {
            return !!t && "https://profile.csdnimg.cn/" + t.split("").join("/") + "/2_" + (this.currentUser.userName && this.currentUser.userName.toLowerCase())
        },
        checkLogin: function(t) {
            var e = a("AU")
              , n = a("UserNick")
              , o = a("UserName");
            this.currentUser.userNick = n,
            this.currentUser.userName = o,
            this.currentUser.avatar = this.getAvatarByAu(e),
            t && t(this.currentUser)
        },
        renderToolbar: function() {
            var t = this
              , n = t.getToolbarStyle()
              , o = e('<div id="csdn-toolbar">\n                    <div class="toolbar-inside" ' + (n ? 'style="' + n + '"' : "") + '>\n                      <div class="toolbar-container">\n                        <div class="toolbar-container-left">\n                          <div class="toolbar-logo toolbar-subMenu-box csdn-toolbar-fl"></div>\n                          <ul class="toolbar-menus csdn-toolbar-fl"></ul>\n                        </div>\n                        <div class="toolbar-container-middle">\n                          <div class="toolbar-search onlySearch"></div>\n                        </div>\n                        <div class="toolbar-container-right">\n                          <div class="toolbar-btns onlyUser"></div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>');
            return e("body").prepend(o),
            t.$container = o.find(".toolbar-container"),
            t.$logoBox = o.find(".toolbar-logo"),
            t.$NavBox = o.find(".toolbar-menus"),
            t.$searchBox = o.find(".toolbar-search"),
            t.$btnsBox = o.find(".toolbar-btns"),
            e(document).on("click", function(n) {
                0 !== e(n.target).closest(".toolbar-search").length || t.searchInputFocus || (t.clearSeachDropMenu(),
                t.toggleSearchBarInput())
            }),
            this
        },
        renderNav: function() {
            var t = this
              , e = "" + this.navData.map(function(e) {
                e.active = c(e.url);
                var n = ((new Date).getTime(),
                t.isEffectiveTime(e.icon));
                t.isEffectiveTime(e.slider);
                return '<li class="' + (e.active ? "active " : "") + (e.children.length ? "toolbar-subMenu-box" : "") + '">\n                                <a ' + (e.report ? "data-report-click='" + JSON.stringify(e.report) + "'" : "") + " " + (e.report && e.report.spm ? 'data-report-query="spm=' + e.report.spm + '"' : "") + " href='" + e.url + "'>\n                                  " + e.name + "\n                                  " + (n ? "<img style='" + e.icon.style + '\'" src="' + e.icon.url + '">' : "") + "\n                                </a>\n                                " + (e.children.length ? '<div class="toolbar-subMenu">\n                                    ' + e.children.map(function(t) {
                    return "<a data-report-click='" + JSON.stringify(t.report) + "' data-report-query=\"spm=" + t.report.spm + '" target="_blank" href=\'' + t.url + "'>" + t.name + "</a>"
                }).join("") + "\n                                  </div>" : "") + "\n                              </li>"
            }).join("");
            return this.$NavBox.append(e),
            this
        },
        renderLogo: function() {
            var t = ["default", "dark", "home"]
              , e = t[f]
              , n = '<a data-report-click=\'{"spm":"3001.4476"}\' data-report-query="spm=3001.4476" href="' + (this.logoData.link || "https://csdn.net") + '"><img title="' + (this.logoData.title || "CSDN首页") + '" src="' + this.logoData.url[e] + '"></a>\n                    ' + (this.logoData.qrcode ? '<div class="toolbar-subMenu">\n                    <img width="96" height="96" src="' + this.logoData.qrcode + '">\n                  </div>' : "");
            return void 0,
            this.$logoBox.append(n),
            this
        },
        renderSearch: function() {
            var t = this
              , n = e('<div class="toolbar-search-container">\n                    <input id="toolbar-search-input" autocomplete="off" type="text" value="" placeholder="' + this.getSearchInputPlaceHolder() + '">\n                    <button id="toolbar-search-button"></button>\n                    <input type="password" autocomplete="new-password" readonly disabled="true" style="display: none; position:absolute;left:-9999999px;width:0;height:0;"/>\n                  </div>')
              , o = !1;
            return n.on("focus", "#toolbar-search-input", function(n) {
                "" === e(this).val() && (t.renderSearchHistoryDropMenu(),
                t.getHotSearchData()),
                t.toggleSearchBarInput("focus"),
                t.searchInputFocus = !0,
                o = !0
            }).on("blur", "#toolbar-search-input", function(e) {
                t.searchInputFocus = !1
            }).on("input", "#toolbar-search-input", function(n) {
                var a = e(this)
                  , r = a.val();
                void 0,
                "" === r && o ? (t.renderSearchHistoryDropMenu(),
                t.getHotSearchData()) : e(".toolbar-search-drop-menu").remove()
            }).on("click", "button", function(n) {
                var o = e("#toolbar-search-input").val();
                return t.clickSearchBtnHandler.call(t, o),
                t.buriedPoint({
                    spm: "3001.4498"
                }),
                !1
            }).on("keyup", "#toolbar-search-input", function(t) {
                13 === t.keyCode && e("#toolbar-search-button").trigger("click")
            }),
            this.$searchBox.append(n),
            this.renderBaiduSearchDropMenu(),
            this
        },
        renderBtns: function() {
            var t = this
              , n = e('<div class="toolbar-btn toolbar-btn-login csdn-toolbar-fl ' + (this.hasLogin ? "toolbar-subMenu-box" : "") + '">\n                      ' + (this.hasLogin ? '<a class="hasAvatar" data-report-click=\'{"spm": "3001.5343"}\' data-report-query="spm=3001.5343" href="https://blog.csdn.net/' + t.currentUser.userName + '"><img src="' + this.currentUser.avatar + '"></a>' : ' <a data-report-click=\'{"spm":"3001.5105"}\' data-report-query="spm=3001.5105" href="https://passport.csdn.net/account/login">登录/注册</a>') + '\n                      </div>\n                    <div class="toolbar-btn toolbar-btn-vip csdn-toolbar-fl">\n                      <a data-report-click=\'' + JSON.stringify(t.vipData.report) + "' " + (t.vipData.report.spm ? 'data-report-query="spm=' + t.vipData.report.spm + '"' : "") + " href='" + t.vipData.url + "'>" + t.vipData.name + " " + (t.isEffectiveTime(t.vipData.icon) ? "<img style='" + t.vipData.icon.style + '\'" src="' + t.vipData.icon.url + '">' : "") + '</a>\n                    </div>\n                    <div class="toolbar-btn toolbar-btn-collect csdn-toolbar-fl">\n                      <a data-report-click=\'{"spm":"3001.4506"}\' data-report-query="spm=3001.4506" href="https://i.csdn.net/#/user-center/collection-list?type=1">收藏</a>\n                    </div>\n                    ' + (this.hasLogin ? ' <div class="toolbar-btn csdn-toolbar-fl"><a data-report-click=\'{"spm":"3001.4507"}\' data-report-query="spm=3001.4507" href="https://blog.csdn.net/nav/watchers">动态</a></div>' : "") + '\n                    <div class="toolbar-btn toolbar-btn-msg csdn-toolbar-fl">\n                      <div class="toolbar-subMenu-box">\n                        <a data-report-click=\'{"spm":"3001.4508"}\' data-report-query="spm=3001.4508" id="toolbar-remind" href="https://i.csdn.net/#/msg/index">消息</a>\n                      </div>\n                      <div class="toolbar-msg-box"></div>\n                    </div>\n                    <div class="toolbar-btn toolbar-btn-write csdn-toolbar-fl ' + (this.hasLogin ? "toolbar-subMenu-box" : "") + '">\n                      <a data-report-click=\'{"spm":"3001.4503"}\' data-report-query="spm=3001.4503" href="https://mp.csdn.net"><i></i>创作中心</a>\n                    </div>');
            return this.$btnsBox.append(n),
            n.on("click", ".toolbar-btn-logout", function() {
                t.clickLogoutBtnHandler()
            }),
            this.$msgBox = n.find(".toolbar-msg-box"),
            this
        },
        renderMsgMenu: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = '<div class="toolbar-subMenu">\n                    <a id="toolbar-announcement" href="' + (t.announcement ? t.announcement.announcementUrl : "javaScript:;") + '">公告' + (t.announcement && t.announcement.announcementCount ? "<i>" + (t.announcement.announcementCount > 99 ? "99+" : t.announcement.announcementCount) + "</i>" : "") + "</a>\n                    " + (this.hasLogin ? '<a data-type="comment" href="https://i.csdn.net/#/msg/index">评论' + (t.comment ? "<i>" + (t.comment > 99 ? "99+" : t.comment) + "</i>" : "") + '</a>\n                                      <a data-type="attention" href="https://i.csdn.net/#/msg/attention">关注' + (t.follow ? "<i>" + (t.follow > 99 ? "99+" : t.follow) + "</i>" : "") + '</a>         \n                                      <a data-type="like" href="https://i.csdn.net/#/msg/like">点赞' + (t.thumb_up ? "<i>" + (t.thumb_up > 99 ? "99+" : t.thumb_up) + "</i>" : "") + '</a>\n                                      <a data-type="chat" href="https://im.csdn.net/im/main.html">私信' + (t.im ? "<i>" + (t.im > 99 ? "99+" : t.im) + "</i>" : "") + '</a>\n                                      <a data-type="answer" href="https://i.csdn.net/#/msg/answer">回答' + (t.invitation ? "<i>" + (t.invitation > 99 ? "99+" : t.invitation) + "</i>" : "") + '</a>\n                                      <a data-type="notice" href="https://i.csdn.net/#/msg/notice">系统通知' + (t.system ? "<i>" + (t.system > 99 ? "99+" : t.system) + "</i>" : "") + '</a>\n                                      <a href="https://i.csdn.net/#/msg/setting">消息设置</a>' : "") + "     \n                  </div>";
            this.$btnsBox.find(".toolbar-btn-msg .toolbar-subMenu-box").append(n),
            e("#toolbar-announcement").off("click").on("click", this.clickAnnouncementHandler.bind(this)),
            this.hasLogin || t.announcement && this.setRemind(t.announcement.announcementUrl, t.announcement.announcementCount),
            m.length && m.forEach(function(t) {
                return t()
            })
        },
        renderCoupon: function(n) {
            var o = e('<a href="https://i.csdn.net/#/msg/notice" class="toolbar-msg-coupon">你有一张VIP限时优惠券哦</a>');
            n && n > 0 && -1 === t.location.href.indexOf("assign_skin_id") && (this.$msgBox.append(o),
            setTimeout(function() {
                o.remove()
            }, 5e3))
        },
        renderGuide: function(t) {
            var n = this
              , o = a("c-toolbar-loginguide")
              , i = e('<span class="toolbar-msg-guide"><a href="https://i.csdn.net/#/msg/index">登录查看未读消息</a><i></i></span>');
            !o && t && (i.find("i").click(function(t) {
                r("c-toolbar-loginguide", 1, 864e5),
                i.remove()
            }),
            !n.hasLogin && t > 0 && this.$msgBox.append(i))
        },
        renderLiveMsg: function(t) {
            var n = this;
            if (t && 1 === t.status) {
                var o = e('<div class="toolbar-msg-live">\n                      <a class="toolbar-msg-live-title" target="_blank" href="' + t.url + '">' + t.title + '</a>\n                      <p class="toolbar-msg-live-count"><i></i>' + t.count + '人在看</p>\n                      <div class="toolbar-msg-live-avatar"><span><img src="' + t.avatar + '" alt=""></span></div>\n                      <span class="toolbar-msg-live-close"></span>\n                    </div>');
                o.on("click", ".toolbar-msg-live-close", function(t) {
                    o.remove()
                }),
                o.on("click", ".toolbar-msg-live-title", function(e) {
                    n.reportLiveId(+t.messageId)
                }),
                n.$msgBox.append(o),
                setTimeout(function() {
                    o.remove()
                }, 15e3)
            }
        },
        reportLiveId: function(t) {
            if (t === t) {
                var n = {
                    messageId: t
                };
                n = JSON.stringify ? JSON.stringify(n) : '{"messageId":' + t + "}",
                e.ajax({
                    url: "https://msg.csdn.net/v1/web/message/view/live",
                    type: "post",
                    data: n,
                    contentType: "application/json",
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: "json",
                    success: function(t) {}
                })
            }
        },
        renderSearchHistoryDropMenu: function() {
            var t = this
              , n = this.getSearchHistoryData()
              , o = e('<div class="toolbar-search-drop-menu ' + (n.length ? "toolbar-search-half" : "") + '">\n                        ' + (n.length ? '<div class="toolbar-search-history">\n                          <p class="toolbar-search-title">搜索历史<span class="toolbar-search-clear"><i></i>清空</span></p>\n                          <ul>\n                            ' + n.map(function(t) {
                return '<li class="toolbar-search-item" data-type="history">' + t + "</li>"
            }).join("") + "\n                          </ul>\n                        </div>" : "") + "\n                      </div>");
            o.on("click", ".toolbar-search-clear", function(e) {
                t.clearSearchHistory(),
                o.find(".toolbar-search-history").remove(),
                o.removeClass("toolbar-search-half")
            }).on("click", "li", function(n) {
                t.clickSearchItemHandler.call(t, e(this)),
                t.setAnimate(t.$NavBox, {
                    width: "auto"
                })
            }),
            t.clearSeachDropMenu(),
            t.$searchHotAndHistoryDropMenu = o,
            t.$searchBox.append(o)
        },
        renderSearchHotDropMenu: function(t) {
            if (t) {
                var n = e('<div class="toolbar-search-hot">\n                      <p class="toolbar-search-title">CSDN热搜</p>\n                      <ul>\n                        ' + t.map(function(t, e) {
                    return '<li class="toolbar-search-item ' + (e <= 2 || t.hot ? "hot" : "") + '" data-type="hot">' + (t.productId || t.word) + "</li>"
                }).join("") + "\n                      </ul>\n                    </div>");
                this.$searchHotAndHistoryDropMenu.find(".toolbar-search-hot").remove(),
                this.$searchHotAndHistoryDropMenu && this.$searchHotAndHistoryDropMenu.append(n)
            }
        },
        renderBaiduSearchDropMenu: function() {
            o("https://csdnimg.cn/search/baidu_opensug-1.0.1.js", function() {
                BaiduSuggestion.bind("toolbar-search-input", {
                    XOffset: "-1",
                    YOffset: "-8",
                    fontSize: "14px",
                    width: 260,
                    "line-height": "32px",
                    padding: "0 16px",
                    color: e(".toolbar-search-drop-menu ").css("color"),
                    borderColor: e(".toolbar-search-drop-menu ").css("background-color"),
                    bgcolorHI: "#F0F1F2",
                    sugSubmit: !1
                }, function() {
                    e("#toolbar-search-button").click()
                })
            })
        },
        clickSearchBtnHandler: function(n) {
            var o = encodeURIComponent(n || this.placeHolder)
              , a = !n && this.placeHolder
              , r = ""
              , i = "https://so.csdn.net/so/search/s.do?q=" + o + "&t=" + d() + "&u="
              , s = a ? this.urlParamsPlaceholder : this.urlParams
              , c = this;
            if (void 0,
            "undefined" === o)
                return e("#toolbar-search-input").focus(),
                !1;
            if (c.addSearchHistory(decodeURIComponent(o).substr(0, 30)),
            s) {
                for (var l in s)
                    if (s.hasOwnProperty(l)) {
                        var p = s[l];
                        r += "&" + l + "=" + p
                    }
                i += r
            }
            this.urlParams = "",
            t.location.href.indexOf("so.csdn.net") > -1 ? t.csdn && t.csdn.toolbarSearchUrl ? t.location.href = t.csdn.toolbarSearchUrl + o + r : t.location.href = i : t.open(i)
        },
        clickSearchItemHandler: function(t) {
            var n = t.text()
              , o = t.data("type")
              , a = this
              , r = t.index()
              , i = {
                extra: JSON.stringify({
                    searchword: n
                }),
                spm: "hot" === o ? "3001.4502" : "3001.4501"
            };
            if ("hot" === o) {
                var s = a.hotSearchData[r]
                  , c = s && s.reportData;
                i = c ? a.getHotSearchPointData(c, n) : i
            }
            void 0,
            a.buriedPoint(i),
            e("#toolbar-search-input").val(n).blur(),
            a.clickSearchBtnHandler.call(a, n),
            a.clearSeachDropMenu(),
            a.toggleSearchBarInput()
        },
        clickAnnouncementHandler: function() {
            this.hasLogin && (e("#toolbar-announcement").find(">i").remove(),
            this.announcement && (this.announcement.announcementCount = 0),
            r("announcement-new", JSON.stringify(this.announcement), this.announcement.announcementExpire || 3e5),
            this.clearReadAnnouncement())
        },
        clickLogoutBtnHandler: function() {
            var e = {
                mod: "popu_789"
            }
              , n = "https://passport.csdn.net/account/logout?from=" + encodeURIComponent(t.location.href);
            e.dest = n,
            e.extend1 = "退出",
            t.location.href = n,
            csdn && csdn.report && csdn.report.reportClick(e)
        },
        clearSeachDropMenu: function() {
            e(".toolbar-search-drop-menu").remove()
        },
        clearReadAnnouncement: function() {
            e.ajax({
                url: "https://msg.csdn.net/v1/web/message/read_announcement",
                type: "post",
                contentType: "application/json",
                xhrFields: {
                    withCredentials: !0
                },
                dataType: "json",
                success: function(t) {},
                error: function(t) {
                    void 0
                }
            })
        },
        setUserAvatar: function(t) {
            var n = t.avatarUrl;
            if (t.totalCount > 0 && n && !this.hasLogin && a("UN")) {
                var o = '<a class="hasAvatar" href="https://passport.csdn.net/account/login"><img src="' + n + '"></a>';
                e(".toolbar-btn-login").html(o)
            }
        },
        getHotSearchPointData: function(t, e) {
            var n = this
              , o = Object.assign({}, {
                searchword: e
            }, JSON.parse(t.data.extra || "{}"));
            return n.urlParams = t.urlParams,
            Object.assign({}, t.data, {
                extra: JSON.stringify(o),
                spm: "3001.4502"
            })
        },
        getReadAnnouncement: function() {
            var t = this;
            e.ajax({
                url: "https://msg.csdn.net/v1/web/message/view/announcement",
                type: "post",
                contentType: "application/json",
                xhrFields: {
                    withCredentials: !0
                },
                dataType: "json",
                success: function(e) {
                    if (e.status) {
                        var n = e.data;
                        t.announcement = n,
                        r("announcement-new", JSON.stringify(n), n.announcementExpire || 3e5),
                        t.hasLogin ? t.getUnreadMsg() : t.renderMsgMenu({
                            announcement: n
                        })
                    }
                },
                error: function(t) {
                    void 0
                }
            })
        },
        getUnreadMsg: function() {
            if (this.hasLogin || a("UN")) {
                var t = this
                  , n = JSON.stringify ? JSON.stringify({
                    coupon: !0
                }) : '{"coupon":true}';
                e.ajax({
                    url: "https://msg.csdn.net/v1/web/message/view/unread",
                    type: "post",
                    data: n,
                    contentType: "application/json",
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: "json",
                    success: function(e) {
                        if (e.status) {
                            var n = e.data
                              , o = t.announcement && t.announcement.announcementCount
                              , a = t.announcement && t.announcement.announcementUrl;
                            n.totalCount = o ? o + n.totalCount : n.totalCount,
                            n.announcement = {
                                announcementCount: o,
                                announcementUrl: a
                            },
                            t.setRemind("", n.totalCount),
                            t.setDocumentTitle(n.totalCount),
                            t.renderCoupon(n.coupon_order),
                            t.renderGuide(n.totalCount),
                            t.renderLiveMsg(n.live_info),
                            t.setUserAvatar(n),
                            t.renderMsgMenu(n)
                        }
                    }
                })
            }
        },
        getSearchHistoryData: function() {
            return this.getSearchHistoryArray("searchHistoryArray-new").splice(0, 10)
        },
        getSearchHistoryArray: function(t) {
            var e = a(t);
            return e ? JSON.parse(e) : []
        },
        getHotSearchData: function() {
            var t = this;
            if ((new Date).valueOf() - t.copyHotSearchDataTime <= 2e3 && t.hotSearchData)
                return void t.renderSearchHotDropMenu(t.hotSearchData);
            e.ajax({
                url: "https://silkroad.csdn.net/api/v2/assemble/list/channel/pc_hot_word",
                type: "get",
                data: {
                    channel_name: "pc_hot_word",
                    size: 10,
                    user_name: t.currentUser.userName,
                    platform: "pc",
                    imei: a("uuid_tt_dd")
                },
                contentType: "application/json",
                dataType: "json",
                success: function(e) {
                    if (200 === e.code) {
                        var n = e.data && e.data.items;
                        t.copyHotSearchData(n),
                        t.renderSearchHotDropMenu(n)
                    }
                },
                error: function(e) {
                    t.hotSearchData && t.renderSearchHotDropMenu(t.hotSearchData)
                }
            })
        },
        getHotSearchDataOld: function() {
            var t = this;
            if ((new Date).valueOf() - t.copyHotSearchDataTime <= 2e3 && t.hotSearchData)
                return void t.renderSearchHotDropMenu(t.hotSearchData);
            e.ajax({
                url: "https://redisdatarecall.csdn.net/recommend/soHotWord",
                type: "get",
                data: {},
                contentType: "application/json",
                dataType: "json",
                success: function(e) {
                    e.status && (t.copyHotSearchData(e.data),
                    t.renderSearchHotDropMenu(e.data))
                },
                error: function(e) {
                    t.hotSearchData && t.renderSearchHotDropMenu(t.hotSearchData)
                }
            })
        },
        getHotSearchWordData: function(n) {
            var o = {
                channel_name: "pc_hot_word",
                size: 10,
                user_name: this.currentUser.userName,
                platform: "pc",
                imei: a("uuid_tt_dd")
            };
            if (t.toolbarSearchExt && "object" === _typeof(t.toolbarSearchExt))
                try {
                    o.toolbarSearchExt = JSON.stringify(t.toolbarSearchExt)
                } catch (t) {
                    void 0
                }
            var r = this;
            e.ajax({
                url: "https://silkroad.csdn.net/api/v2/assemble/list/channel/search_hot_word",
                type: "get",
                data: o,
                contentType: "application/json",
                dataType: "json",
                success: function(t) {
                    if (200 === t.code) {
                        var e = t.data && t.data.items.length && t.data.items;
                        if (void 0,
                        e.length) {
                            r.setPleaceHolderInterval(e.filter(function(t) {
                                return !!t.productId
                            }), 0, !1)
                        }
                        n && n()
                    }
                },
                error: function(t) {
                    void 0
                }
            })
        },
        setPleaceHolderInterval: function(t) {
            var e = this
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , o = arguments[2];
            n === t.length && (n = 0,
            o = !0),
            this.setSearchInputPlaceholder(t[n], o),
            1 !== t.length && setTimeout(function() {
                e.setPleaceHolderInterval(t, n + 1, o)
            }, 1e4)
        },
        copyHotSearchData: function(t) {
            if (t) {
                var e = this;
                e.hotSearchData = t,
                e.copyHotSearchDataTime = (new Date).getTime()
            }
        },
        clearSearchHistory: function() {
            this.updataSearchHistoryArray("searchHistoryArray-new", [])
        },
        updataSearchHistoryArray: function(t, e) {
            r(t, JSON.stringify(e))
        },
        addSearchHistory: function(t) {
            t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            var n = this.getSearchHistoryArray("searchHistoryArray-new")
              , o = e.inArray(t, n);
            o > -1 && n.splice(o, 1),
            "" !== e.trim(t) && n.unshift(t),
            n.length > 10 && n.pop(),
            this.updataSearchHistoryArray("searchHistoryArray-new", n)
        },
        getSearchInputPlaceHolder: function() {
            return this.placeHolder ? this.placeHolder : ~location.host.indexOf("edu") ? "搜学院课程" : "搜CSDN"
        },
        setSearchInputPlaceholder: function(t, n) {
            this.hotSearchWordData = t,
            this.placeHolder = t.productId,
            this.urlParamsPlaceholder = t.reportData && t.reportData.urlParams,
            this.placeHolder && e("#toolbar-search-input").attr("placeholder", this.placeHolder)
        },
        isEffectiveTime: function(t) {
            if (!t)
                return !1;
            var e = (new Date).getTime()
              , n = new Date(t.start);
            return e <= new Date(t.end) && e >= n
        },
        getCurrentLogoData: function(t) {
            var e = this;
            return Array.isArray(t) ? t.reduce(function(t, n) {
                return t = "default" !== n.type || t ? t : n,
                t = e.isEffectiveTime(n.time) ? n : t
            }, void 0) : "object" === (void 0 === t ? "undefined" : _typeof(t)) ? t : e.logoData
        },
        getToolbarData: function(n) {
            var o = this;
            e.ajax({
                url: "https://img-home.csdnimg.cn/data_json/toolbar/toolbar1217.json",
                type: "get",
                dataType: "JSON",
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                success: function(e) {
                    void 0,
                    o.navData = e.menus.slice(0, e.menus.length - 1),
                    o.vipData = e.menus.pop(),
                    void 0,
                    void 0,
                    o.logoData = o.getCurrentLogoData(e.logo),
                    void 0,
                    o.background = e.background,
                    o.redpackData = e.redpackData,
                    t.csdn.toolbarData = e,
                    n && n.call(o)
                },
                error: function(t) {
                    n && n.call(o)
                }
            })
        },
        buriedPoint: function(t) {
            try {
                csdn && csdn.report && csdn.report.reportClick(t)
            } catch (t) {
                void 0
            }
        },
        setDocumentTitle: function(t) {
            var e = document.title;
            t > 0 && (document.title = "(" + t + "条消息) " + e)
        },
        setRemind: function(t, n) {
            var o = e("#toolbar-remind");
            !this.hasLogin && t && o.attr("href", t),
            o.html("消息" + (n > 0 ? '<i class="toolbar-msg-count">' + (n > 99 ? "99+" : n) + "</i>" : ""))
        },
        setAnimate: function(t, e, n) {
            n && t.animate(e, n) || t.css(e)
        },
        toggleNavItems: function(t, e) {
            var n = this.$NavBox.find(">li").eq(t).nextAll();
            e && n.show() || n.hide()
        },
        getNavItemsWidthByCount: function(t) {
            var n = 0;
            return this.$NavBox.find(">li").eq(t).prevAll().each(function(t, o) {
                n += e(this).width()
            }),
            n
        },
        toggleSearchBarInput: function(t) {
            if (!(e(document).width() > 1366)) {
                var n = this.getNavItemsWidthByCount(5);
                "focus" === t ? this.setAnimate(this.$NavBox, {
                    width: n
                }, 200) : this.setAnimate(this.$NavBox, {
                    width: "auto"
                }, 0),
                this.toggleNavItems(4, "focus" !== t)
            }
        },
        getToolbarStyle: function() {
            var t = this
              , e = t.background
              , n = ["default", "dark", "home"]
              , o = n[f];
            if (e) {
                var a = e[o];
                if (void 0,
                a.indexOf("http") >= 0)
                    return "background: url(" + a + ") no-repeat center center;background-size: cover;";
                if (a.indexOf("#") >= 0)
                    return "background: " + a
            }
        },
        setToolbarMsgCountByType: function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            if (t && this.hasLogin) {
                var o = e(".toolbar-btn-msg").find('a[data-type="' + t + '"]');
                if (0 !== o.length) {
                    o.find("i").remove(),
                    o.html(o.text() + (n > 0 ? "<i>" + n + "</i>" : ""));
                    var a = 0;
                    e(".toolbar-btn-msg").find(".toolbar-subMenu>a>i").each(function(t, n) {
                        a += 1 * e(n).text()
                    }),
                    void 0,
                    this.setRemind("", a)
                }
            }
        },
        chain: function() {
            var t = a("announcement-new")
              , e = a("UserName");
            return u("toolbarReady"),
            t && "undefined" !== JSON.parse(t).announcementUrl ? (this.announcement = JSON.parse(t),
            e ? this.getUnreadMsg() : this.renderMsgMenu({
                announcement: this.announcement
            }),
            i("announcement"),
            i("announcement_new"),
            i("searchHistoryArray"),
            this) : void this.getReadAnnouncement()
        }
    },
    function() {
        var t = e('meta[name="toolbar"]')
          , o = ""
          , a = 0;
        if (t.length) {
            var r = t.attr("content") || {};
            r = JSON.parse(r),
            a = r.type || a
        } else
            a = p("toolbarSkinType") || a;
        o = "https://g.csdnimg.cn/common/csdn-toolbar/" + g[a] + ".css",
        f = a,
        -1 === location.host.indexOf("loc-toolbar") && n(o)
    }();
    var b = new h;
    t.csdn.toolbar = {
        setToolbarMsgCountByType: b.setToolbarMsgCountByType.bind(b),
        configuration_tool_parameterv: l
    }
}(window, jQuery),
function() {
    function t(t) {
        for (var e = document.cookie.split("; "), n = 0; n < e.length; n++) {
            var o = e[n].split("=");
            if (o[0] == t && "UD" == t)
                return decodeURIComponent(o[1]);
            if (o[0] == t)
                return decodeURI(o[1])
        }
    }
    function e(t, e, n) {
        var o = new Date;
        if (-1 == n)
            return void (document.cookie = t + "=" + escape(e) + ";domain=.csdn.net;path=/");
        if (n)
            o.setTime(o.getTime() + n);
        else {
            o.setTime(o.getTime() + 2592e6)
        }
        document.cookie = t + "=" + escape(e) + ";expires=" + o.toGMTString() + ";domain=.csdn.net;path=/"
    }
    function n(t) {
        var e = new Date;
        document.cookie = t + "=" + escape("1") + ";max-age=0;expires=" + e.toGMTString() + ";domain=.csdn.net;path=/"
    }
    function o(t) {
        try {
            t && $(document).trigger(t)
        } catch (t) {
            void 0
        }
    }
    function a(t) {
        var e = "https://kunpeng.csdn.net/ad/json/" + (i ? 539 : 536);
        $.ajax({
            url: e,
            type: "get",
            dataType: "JSON",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            xhrFields: {
                withCredentials: !0
            },
            success: function(e) {
                200 === e.code && t && t(e.data)
            }
        })
    }
    function r(a) {
        var r = !!t("is_advert");
        if (!a)
            return void n("is_advert");
        var i = "width:100%; height:100%; background-image: url(" + a.imgUrl + "); background-size: auto 80px;background-repeat: no-repeat; background-position: center center;"
          , s = "width:100%; height:100%; background-image: url(" + a.bigImgUrl + "); background-size: auto 320px;background-repeat: no-repeat; background-position: center center;"
          , c = $('<div class="toolbar-advert">\n            <a href="' + a.clickUrl + '" target="_blank" style="background: ' + a.backgroundColor + ';" class="toolbar-advert-default ' + (r ? "" : "toolbar-advert-lg") + '"><div style="' + (r ? i : s) + '"></div></a>\n            <span class="toolbar-adver-btn">×</span>\n            <img style="width:0;height:0;display:none;" src="' + a.exposureUrl + '"/>\n          </div>');
        c.find(".toolbar-adver-btn").click(function(t) {
            return c.remove(),
            o("toolbarHeightChange"),
            !1
        }),
        $("#csdn-toolbar").prepend(c),
        o("toolbarHeightChange"),
        !r && e("is_advert", "1", 864e5),
        c.on("transitionend", function(t) {
            o("toolbarHeightChange")
        }),
        setTimeout(function() {
            !r && $(".toolbar-advert-default").removeClass("toolbar-advert-lg").find("div").attr("style", i),
            o("toolbarHeightChange")
        }, 1e3 * (a.showSeconds || 5))
    }
    var i = !1;
    $(document).on("toolbarReady", function(t) {
        void 0,
        void 0,
        a(r)
    })
}(),
function() {
    function t(t) {
        for (var e = document.cookie.split("; "), n = 0; n < e.length; n++) {
            var o = e[n].split("=");
            if (o[0] == t && "UD" == t)
                return decodeURIComponent(o[1]);
            if (o[0] == t)
                return decodeURI(o[1])
        }
    }
    function e(t, e, n) {
        var o = new Date;
        if (-1 == n)
            return void (document.cookie = t + "=" + e + ";domain=.csdn.net;path=/");
        if (n)
            o.setTime(o.getTime() + n);
        else {
            o.setTime(o.getTime() + 2592e6)
        }
        document.cookie = t + "=" + e + ";expires=" + o.toGMTString() + ";domain=.csdn.net;path=/"
    }
    function n(t) {
        return t.some(function(t) {
            return "*" === t || !!~location.href.indexOf(t)
        })
    }
    var o = function() {
        function n() {
            _classCallCheck(this, n),
            this.allData = [],
            this.barrageList = [],
            this.barrageDomArr = [],
            this.fnArr = [],
            this.barrageBoxWidth = 400,
            this.pollDelay = 30,
            this.timer = null,
            this.errorCount = 0,
            this.toolbarHeight = 44
        }
        return _createClass(n, [{
            key: "init",
            value: function() {
                "1" !== t("hideBarrage") && (this.getToolbarHeight(),
                this.insertCss(),
                this.queryBarrage(),
                this.bindToolbarHeightChange(),
                this.handlePageVisibilityChange())
            }
        }, {
            key: "queryBarrage",
            value: function() {
                var t = this;
                $.ajax({
                    url: "https://barrage-kunpeng.csdn.net/api/barrage/list",
                    type: "get",
                    contentType: "application/x-www-form-urlencoded; charset=utf-8",
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: "json",
                    success: function(e) {
                        if (200 === e.code) {
                            if (t.pollDelay = e.pollDelay,
                            !e.data.length)
                                return void t.setTimer();
                            t.allData = e.data,
                            t.barrageList = t.getBarrageList(),
                            t.renderBarrage(),
                            t.start(),
                            t.insertAdCookie(),
                            t.resetErrorCount()
                        } else
                            201 !== e.code && t.handleQueryError()
                    },
                    error: function(e) {
                        t.handleQueryError()
                    }
                })
            }
        }, {
            key: "handleQueryError",
            value: function() {
                this.errorCount++,
                this.setTimer(),
                this.errorCount > 10 && clearTimeout(this.timer)
            }
        }, {
            key: "getBarrageList",
            value: function() {
                var t = this.allData.slice(0, 3);
                return this.allData = this.allData.slice(3),
                t.map(function(t) {
                    return Object.assign({}, t, {
                        x: 0,
                        speed: 2 + Number(Math.random().toFixed(1)),
                        stop: !1
                    })
                })
            }
        }, {
            key: "start",
            value: function() {
                for (var t = this, n = document.documentElement.clientWidth, o = 0, a = 0; a < this.barrageDomArr.length; a++)
                    !function(a) {
                        t.fnArr.push(function() {
                            if (t.barrageList[a].x -= t.barrageList[a].speed,
                            t.barrageDomArr[a].style.transform = "translateX(" + t.barrageList[a].x + "px)",
                            n + t.barrageList[a].x >= -t.barrageBoxWidth && !t.barrageList[a].stop)
                                requestAnimationFrame(t.fnArr[a]);
                            else if (n + t.barrageList[a].x < -t.barrageBoxWidth && !t.barrageList[a].stop && ++o === t.barrageDomArr.length) {
                                if (t.fnArr = [],
                                $("#barrageBox").remove(),
                                !t.checkIsPassport()) {
                                    var r = t.getTomorrowTimeRemaining();
                                    e("ad_last_time", Date.now(), r)
                                }
                                t.barrageList = t.getBarrageList(),
                                t.barrageList.length ? (t.renderBarrage(),
                                t.start(),
                                t.insertAdCookie()) : t.setTimer()
                            }
                        })
                    }(a);
                for (var r = 0; r < this.barrageList.length; r++)
                    !function(e) {
                        requestAnimationFrame(t.fnArr[e]),
                        setTimeout(function() {
                            window.csdn.report.reportView({
                                mod: "popu_894",
                                extend1: t.barrageList[e].barrageId,
                                dest: t.barrageList[e].clickUrl
                            })
                        }, 1e3)
                    }(r)
            }
        }, {
            key: "insertCss",
            value: function() {
                var t = document.getElementsByTagName("head")[0]
                  , e = document.createElement("style");
                e.type = "text/css",
                e.appendChild(document.createTextNode("\n        #barrageBox .barrage-item {\n          position:relative;\n          display: flex;\n          align-items: center;\n          height: 40px;\n          margin-bottom: 62px;\n          border-radius: 0 100px 100px 0;\n          width: fit-content;\n        }\n        #barrageBox .barrage-item.barrage-link-hide {\n          visibility: hidden;\n        }\n        #barrageBox .barrage-item .barrage-follow {\n          cursor: pointer;\n          position: absolute;\n          left: 8px;\n          bottom: -9px;\n          z-index: 999;\n          border: none;\n          outline: none;\n          font-size: 12px;\n          font-weight: 500;\n          line-height: 17px;\n          color: #FFFFFF;\n          -webkit-background-clip: text;\n          -webkit-text-fill-color: transparent;\n        }\n        #barrageBox .barrage-item .barrage-follow.is-follow {\n          left: 2px\n        }\n        #barrageBox .barrage-item .barrage-link {\n          position: relative;\n          display: flex;\n          align-items: center;\n          color: #fff;\n          font-size: 14px;\n          font-weight: 500;\n          height: 100%;\n          padding-right: 24px;\n          min-width: 294px;\n        }\n        #barrageBox .barrage-item .barrage-link img {\n          width: 38px;\n          height: 38px;\n          display: block;\n          border-radius: 50%;\n          margin-right: 27px;\n        }\n        #barrageBox .barrage-item .barrage-link .barrage-content {\n          max-width: 592px;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n        }\n        #barrageBox .barrage-item .barrage-link .barrage-bg {\n          width: 320px;\n          height: 80px;\n          position: absolute;\n          left: -26px;\n          top: 50%;\n          transform: translateY(-50%);\n        }\n        #barrageBox .barrage-item .barrage-right {\n          position: relative;\n          height: 100%;\n          width: 44px;\n          display: flex;\n          align-items: center;\n        }\n        #barrageBox .barrage-item .barrage-right .barrage-close {\n          width: 100%;\n          height: 100%;\n          position: absolute;\n          background: url('https://img-home.csdnimg.cn/images/20201104030927.png') no-repeat center;\n          background-size: 16px 16px;\n          cursor: pointer;\n        }\n        #barrageBox .barrage-item .barrage-right .barrage-right-border {\n          width: 1px;\n          height: 20px;\n          background: rgba(255, 255, 255, 0.3);\n        }\n      ")),
                t.appendChild(e)
            }
        }, {
            key: "renderBarrage",
            value: function() {
                for (var n = "", o = 0; o < this.barrageList.length; o++) {
                    var a = this.barrageList[o].barrageId
                      , r = this.barrageList[o].clickUrl;
                    n += '\n          <div class="barrage-item" style="background-color: ' + this.barrageList[o].bgColor + "; box-shadow: -12px 4px 14px 0 " + this.barrageList[o].shadowColor + ';">\n          ' + (this.barrageList[o].type ? "" : '<button class="barrage-follow" data-username="' + this.barrageList[o].username + '">关注</button>') + '\n            <a class="' + (this.barrageList[o].type ? "barrage-link barrage-link-redpack" : "barrage-link") + '" href="' + (this.barrageList[o].type ? "javascript:;" : r) + '" target="' + (this.barrageList[o].type ? "" : "_blank") + '" data-report-click=\'{"mod":"popu_894","extend1": "' + a + '", "dest": "' + r + '"}\'>\n              <img src="' + this.barrageList[o].headImage + '" alt="">\n              <div class="barrage-content">' + this.barrageList[o].nickname.slice(0, 10) + "：" + this.barrageList[o].content + '</div>\n              <div class="barrage-bg" style="background: url(' + this.barrageList[o].bgImage + ') no-repeat center; background-size: cover;"></div>\n            </a>\n            <div class="barrage-right">\n              <div class="barrage-close"></div>\n              <div class="barrage-right-border"></div>\n            </div>\n          </div>\n        '
                }
                $("#csdn-toolbar").append('<div id="barrageBox" style="position: fixed; z-index: 99999; top: ' + (this.toolbarHeight + 32) + 'px;">' + n + "</div>"),
                this.barrageDomArr = [].concat(_toConsumableArray(document.querySelectorAll("#barrageBox .barrage-item")));
                var i = $("#barrageBox");
                this.barrageBoxWidth = i.width() + 26,
                i.css({
                    right: -this.barrageBoxWidth + "px"
                });
                var s = this;
                i.on("mouseenter", ".barrage-item", function() {
                    s.barrageList[$(this).index()].stop = !0
                }),
                i.on("mouseleave", ".barrage-item", function() {
                    s.barrageList[$(this).index()].stop = !1,
                    requestAnimationFrame(s.fnArr[$(this).index()])
                }),
                i.on("click", ".barrage-close", function() {
                    $("#barrageBox").remove(),
                    clearTimeout(s.timer),
                    e("hideBarrage", "1", s.getTomorrowTimeRemaining())
                }),
                i.on("click", ".barrage-follow", function() {
                    $(this).hasClass("is-follow") || s.follow(s.barrageList[$(this).parent().index()].username)
                }),
                i.on("click", ".barrage-link.barrage-link-redpack", function() {
                    if (t("UserName")) {
                        if (!$(this).hasClass("already")) {
                            var e = $(this).parent().index();
                            window.csdn.barrageRedpack && window.csdn.barrageRedpack.open(s.barrageList[e].typeId),
                            $(this).addClass("already").parent().addClass("barrage-link-hide")
                        }
                    } else
                        window.location.href = "https://passport.csdn.net/account/login?from=" + encodeURIComponent(window.location.href)
                })
            }
        }, {
            key: "insertAdCookie",
            value: function() {
                var n = t("ad_barrage_ids") || ""
                  , o = n ? n.split(",") : [];
                for (o = [].concat(_toConsumableArray(new Set(o.concat(this.barrageList.filter(function(t) {
                    return t.isAddCookie
                }).map(function(t) {
                    return t.barrageId
                }))))); o.length > 500; )
                    o.shift();
                e("ad_barrage_ids", o.join(","), 864e5)
            }
        }, {
            key: "setTimer",
            value: function() {
                var t = this;
                clearTimeout(this.timer),
                this.timer = setTimeout(function() {
                    t.queryBarrage()
                }, 1e3 * this.pollDelay)
            }
        }, {
            key: "resetErrorCount",
            value: function() {
                this.errorCount = 0
            }
        }, {
            key: "bindToolbarHeightChange",
            value: function() {
                var t = this;
                $(document).on("toolbarHeightChange", function() {
                    t.getToolbarHeight();
                    var e = $("#barrageBox");
                    e.length && e.css("top", t.toolbarHeight + 32 + "px")
                })
            }
        }, {
            key: "getToolbarHeight",
            value: function() {
                var t = $("#csdn-toolbar");
                this.toolbarHeight = t.length ? t.height() : 44
            }
        }, {
            key: "handlePageVisibilityChange",
            value: function() {
                var t, e, n = this;
                void 0 !== document.hidden ? (t = "hidden",
                e = "visibilitychange") : void 0 !== document.msHidden ? (t = "msHidden",
                e = "msvisibilitychange") : void 0 !== document.webkitHidden && (t = "webkitHidden",
                e = "webkitvisibilitychange");
                var o = function() {
                    document[t] ? clearTimeout(n.timer) : !$("#barrageBox").length && n.setTimer()
                };
                document.addEventListener(e, o, !1)
            }
        }, {
            key: "getTomorrowTimeRemaining",
            value: function() {
                var t = (new Date).getFullYear() + "/" + ((new Date).getMonth() + 1) + "/" + ((new Date).getDate() + 1);
                return new Date(t) - Date.now()
            }
        }, {
            key: "follow",
            value: function(e) {
                var n = this;
                t("UserName") ? t("UserName") !== e && $.ajax({
                    url: "https://me.csdn.net/api/relation/create",
                    type: "post",
                    contentType: "application/x-www-form-urlencoded; charset=utf-8",
                    xhrFields: {
                        withCredentials: !0
                    },
                    data: JSON.stringify({
                        username: e
                    }),
                    dataType: "json",
                    success: function(t) {
                        n.changeFollowStatus(e)
                    },
                    error: function(t) {
                        n.changeFollowStatus(e)
                    }
                }) : window.location.href = "https://passport.csdn.net/account/login?from=" + encodeURIComponent(window.location.href)
            }
        }, {
            key: "changeFollowStatus",
            value: function(t) {
                $("#barrageBox").find(".barrage-item").each(function() {
                    $(this).find(".barrage-follow").attr("data-username") === t && $(this).find(".barrage-follow").addClass("is-follow").text("已关注")
                })
            }
        }, {
            key: "checkIsPassport",
            value: function() {
                return !!~window.location.href.indexOf("passport.csdn.net")
            }
        }]),
        n
    }();
    $(document).on("toolbarReady", function() {
        var t = window.csdn.toolbarData.barrageData.whiteList;
        t.length && n(t) && (new o).init()
    })
}(),
function() {
    var t = !1
      , e = function() {
        function e() {
            _classCallCheck(this, e),
            this.container = $(".toolbar-btn.toolbar-btn-collect"),
            this.data = [],
            this.currentIndex = 0,
            this.isHideOnce = !1,
            this.finishInit = !1,
            this.timer = null,
            this.init()
        }
        return _createClass(e, [{
            key: "init",
            value: function() {
                this.getCollectionFolder()
            }
        }, {
            key: "getCollectionFolder",
            value: function() {
                var t = this;
                $.ajax({
                    url: "https://www.csdn.net/community/toolbar-api/v1/favorites-list",
                    type: "get",
                    contentType: "application/x-www-form-urlencoded; charset=utf-8",
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: "json",
                    success: function(e) {
                        if (200 === e.code) {
                            if (t.data = e.data.favoritesList,
                            !t.data.length)
                                return;
                            t.data[0].contentList = e.data.contentList,
                            t.render(),
                            t.finishInit = !0
                        }
                    },
                    error: function(t) {
                        void 0
                    }
                })
            }
        }, {
            key: "getCollectionContent",
            value: function(t) {
                var e = this;
                $.ajax({
                    url: "https://www.csdn.net/community/toolbar-api/v1/get-favorite-content?id=" + t,
                    type: "get",
                    contentType: "application/x-www-form-urlencoded; charset=utf-8",
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: "json",
                    success: function(t) {
                        200 === t.code && (e.data[e.currentIndex].contentList = t.data,
                        e.render())
                    },
                    error: function(t) {
                        void 0
                    }
                })
            }
        }, {
            key: "bindToggleFolder",
            value: function() {
                var t = this;
                $("#csdn-toolbar-collection").on("click", ".toolbar-collection-left ul li", function() {
                    $(this).index() !== t.currentIndex && (t.currentIndex = $(this).index(),
                    $(this).addClass("collection-folder-active").siblings().removeClass("collection-folder-active"),
                    t.data[t.currentIndex].contentList ? t.render() : t.getCollectionContent(t.data[t.currentIndex].id))
                })
            }
        }, {
            key: "render",
            value: function() {
                if (this.finishInit)
                    $("#csdn-toolbar-collection .toolbar-collection-right").empty().append(this.renderRight());
                else {
                    var t = '\n          <div id="csdn-toolbar-collection" class="csdn-toolbar-plugin">\n            <div class="toolbar-collection-left csdn-toolbar-scroll-box">\n              <ul>' + this.renderLeft() + '</ul>\n            </div>\n            <div class="toolbar-collection-right">\n              ' + this.renderRight() + '\n            </div>\n            <div class="csdn-toolbar-plugin-triangle"></div>\n          </div>\n        ';
                    this.container.append(t),
                    this.isHideOnce && $("#csdn-toolbar-collection").hide(),
                    this.bindToggleFolder()
                }
            }
        }, {
            key: "renderLeft",
            value: function() {
                for (var t = "", e = 0; e < this.data.length; e++)
                    t += "\n          <li" + (e === this.currentIndex ? ' class="collection-folder-active"' : "") + '>\n            <div class="toolbar-collection-folder-name">' + this.data[e].name + '</div>\n            <div class="toolbar-collection-folder-count">' + this.data[e].num + "</div>\n          </li>\n        ";
                return t
            }
        }, {
            key: "renderRight",
            value: function() {
                if (this.data[this.currentIndex].contentList.length) {
                    for (var t = "", e = 0; e < this.data[this.currentIndex].contentList.length; e++) {
                        var n = this.data[this.currentIndex].contentList[e];
                        t += '\n          <li>\n            <a href="' + n.url + '" target="_blank">\n              <span ' + ("其他" === n.source ? 'class="toolbar-collection-type toolbar-collection-otherType"' : 'class="toolbar-collection-type"') + ">" + n.source + '</span>\n              <span class="toolbar-collection-title">' + n.title + "</span>\n            </a>\n          </li>\n        "
                    }
                    return '<ul class="csdn-toolbar-scroll-box">' + t + "</ul>" + (this.data[this.currentIndex].num > 15 ? '<a href="https://i.csdn.net/#/user-center/collection-list?type=1&folder=' + this.data[this.currentIndex].id + "&key=" + this.currentIndex + '" class="toolbar-collection-more" target="_blank">查看更多<i></i></a>' : "")
                }
                return '\n          <div class="toolbar-collection-empty">\n            <div>空空如也</div>\n          </div>\n        '
            }
        }, {
            key: "show",
            value: function() {
                clearTimeout(this.timer),
                this.timer = setTimeout(function() {
                    t && $("#csdn-toolbar-collection").stop().fadeIn(100)
                }, 150)
            }
        }, {
            key: "hide",
            value: function() {
                this.isHideOnce = !0,
                clearTimeout(this.timer),
                t || $("#csdn-toolbar-collection").stop().fadeOut(100)
            }
        }]),
        e
    }();
    (function(t) {
        for (var e = document.cookie.split("; "), n = 0; n < e.length; n++) {
            var o = e[n].split("=");
            if (o[0] == t && "UD" == t)
                return decodeURIComponent(o[1]);
            if (o[0] == t)
                return decodeURI(o[1])
        }
    }
    )("UserName") && $(document).on("toolbarReady", function() {
        var n = null
          , o = $(".toolbar-btn.toolbar-btn-collect");
        o.on("mouseenter", function() {
            t = !0,
            n ? n.show() : n = new e
        }),
        o.on("mouseleave", function() {
            t = !1,
            n.hide()
        })
    })
}(),
function() {
    function t(t) {
        for (var e = document.cookie.split("; "), n = 0; n < e.length; n++) {
            var o = e[n].split("=");
            if (o[0] == t)
                return decodeURIComponent(o[1])
        }
    }
    function e(t, e, n) {
        var o = new Date;
        if (n)
            o.setTime(o.getTime() + n);
        else {
            o.setTime(o.getTime() + 2592e6)
        }
        document.cookie = t + "=" + encodeURIComponent(e) + ";expires=" + o.toGMTString() + ";domain=.csdn.net;path=/"
    }
    function n() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
        return t && $(t).height()
    }
    function o() {
        return !!t("needShowLoginBoxAuto")
    }
    function a() {
        return t("UserName")
    }
    function r() {
        var t = !window.csdn || void 0 === window.csdn.needShowLoginBoxAuto || !!window.csdn.needShowLoginBoxAuto;
        window.csdn && window.csdn.loginBox && t && !o() && !a() && (setTimeout(function() {
            try {
                window.csdn.loginBox.show()
            } catch (t) {
                void 0
            }
        }, 800),
        e("needShowLoginBoxAuto", "1", 60 * c.hours * 60 * 1e3))
    }
    function i() {
        $(window).on("scroll", function(t) {
            var e = $(this).scrollTop()
              , o = n(document)
              , a = n(window);
            void 0,
            e >= (o - a) * c.ratio && r()
        })
    }
    function s(t) {
        return t && t.some(function(t) {
            return "*" === t || !!~location.href.indexOf(t)
        })
    }
    var c = {
        whiteList: ["loc-toolbar.csdn.net"],
        blackList: [],
        ratio: .5,
        hours: 6
    };
    $(document).on("toolbarReady", function(t) {
        var e = window.csdn.toolbarData || {};
        if (c = Object.assign({}, c, e.loginBoxData),
        void 0,
        c && s(c.whiteList) && !s(c.blackList)) {
            var o = n(document)
              , a = n(window);
            void 0,
            (o - a) * c.ratio < 100 ? (void 0,
            r()) : (void 0,
            i())
        }
    })
}(),
function() {
    function t(t) {
        return t && t.el && t.url
    }
    function e(t) {
        return t = t.split("?")[0],
        t.indexOf(".csdn.net") > -1
    }
    function n(t) {
        return /^#/g.test(t)
    }
    function o(o) {
        t(o) ? (void 0,
        $(o.el).on("click", "a", function(t) {
            var a = $(this).attr("href") || ""
              , r = e(a) ? a : o.url + (o.url.indexOf("?") > -1 ? "&" : "?") + "target=" + encodeURIComponent(a);
            t.preventDefault(),
            void 0,
            a && !n(a) && window.open(r, "_blank")
        })) : void 0
    }
    window.csdn = window.csdn || {},
    window.csdn.middleJump = o
}(),
function() {
    function t(t) {
        for (var e = document.cookie.split("; "), n = 0; n < e.length; n++) {
            var o = e[n].split("=");
            if (o[0] == t && "UD" == t)
                return decodeURIComponent(o[1]);
            if (o[0] == t)
                return decodeURI(o[1])
        }
    }
    function e() {
        var e = t("AU");
        return e ? "https://profile.csdnimg.cn/" + e.split("").join("/") + "/0_" + n().toLowerCase() : ""
    }
    function n() {
        return t("UserName")
    }
    function o() {
        return !!+(t("p_uid") || "").substr(1, 1)
    }
    function a() {
        return "--"
    }
    function r() {
        this.data = {},
        this.isVip = o(),
        this.isRender = !1,
        this.$box = $(".toolbar-btn.toolbar-btn-login"),
        this.nickName = a(),
        this.userName = t("UserName"),
        this.avatar = e(),
        this.list = [{
            name: "个人中心",
            url: "https://i.csdn.net/#/user-center/profile",
            report: {
                dest: "https://i.csdn.net/#/user-center/profile",
                spm: "3001.5111"
            },
            icon: "csdn-profile-icon-person",
            class: ""
        }, {
            name: "内容管理",
            url: "https://mp.csdn.net/console/article",
            report: {
                dest: "https://mp.csdn.net/console/article",
                spm: "3001.5448"
            },
            icon: "csdn-profile-icon-pages",
            class: ""
        }, {
            name: "学习平台",
            url: "https://edu.csdn.net/",
            report: {
                dest: "https://edu.csdn.net/",
                spm: "3001.5350"
            },
            icon: "csdn-profile-icon-study",
            class: ""
        }, {
            name: "我的订单",
            url: "https://mall.csdn.net/myorder",
            report: {
                dest: "https://mall.csdn.net/myorder",
                spm: "3001.5137"
            },
            icon: "csdn-profile-icon-order",
            class: ""
        }, {
            name: "我的钱包",
            url: "https://i.csdn.net/#/wallet/index",
            report: {
                dest: "https://i.csdn.net/#/wallet/index",
                spm: "3001.5136"
            },
            icon: "csdn-profile-icon-wallet",
            class: "pb-8 csdn-border-bottom"
        }, {
            name: "签到抽奖",
            url: "https://i.csdn.net/#/uc/reward",
            report: {
                dest: "https://i.csdn.net/#/uc/reward",
                spm: "3001.5351"
            },
            icon: "csdn-profile-icon-draw",
            class: "pt-8 pb-8 csdn-border-bottom"
        }, {
            name: "退出",
            url: "javascript:;",
            report: {
                spm: "3001.5139"
            },
            icon: "csdn-profile-icon-logout",
            class: "pt-8 csdn-profile-logout"
        }],
        this.render()
    }
    r.prototype.render = function() {
        var t = this
          , e = $('<div id="csdn-toolbar-profile" class="csdn-toolbar-plugin">\n            <div class="csdn-profile-top">\n              <a class="csdn-profile-avatar" data-report-click=\'{"spm": "3001.5343"}\' data-report-query="spm=3001.5343"  href="https://blog.csdn.net/' + t.userName + '"><img src="' + t.avatar + '"></a>\n              <p class="csdn-profile-nickName">' + t.nickName + '</p>\n              <a data-report-click=\'{"spm": "3001.5344"}\' data-report-query="spm=3001.5344" href="https://mall.csdn.net/vip" class="csdn-profile-no-vip"></a>\n            </div>\n            <div class="csdn-profile-mid">\n              <a data-report-click=\'{"spm": "3001.5347"}\' data-report-query="spm=3001.5347" href="https://blog.csdn.net/' + t.userName + '"><i class="csdn-profile-fansCount">--</i>粉丝</a>\n              <a data-report-click=\'{"spm": "3001.5348"}\' data-report-query="spm=3001.5348" href="https://blog.csdn.net/' + t.userName + '"><i class="csdn-profile-favoritesCount">--</i>收藏</a>\n              <a data-report-click=\'{"spm": "3001.5349"}\' data-report-query="spm=3001.5349" href="https://blog.csdn.net/' + t.userName + '"><i class="csdn-profile-likeCount">--</i>获赞</a>\n            </div>\n            <div class="csdn-profile-bottom">\n              <ul class="csdn-border-bottom">\n                ' + t.list.map(function(t) {
            return '<li class="' + t.class + '"><a href="' + t.url + '" ' + (t.report ? "data-report-click='" + JSON.stringify(t.report) + "'" : "") + " " + (t.report ? "data-report-query='spm=" + t.report.spm + "'" : "") + '><i class="csdn-profile-icon ' + t.icon + '"></i>' + t.name + "</a></li>"
        }).join("") + "\n              </ul>\n            </div>\n          </div>");
        return this.$box.append(e),
        this.$tpl = e,
        this.$box.on("mouseenter", function(e) {
            void 0,
            t.isEenter = !0,
            t.isRender && t.showProfile() || t.getData()
        }).on("mouseleave", function(e) {
            void 0,
            t.isEenter = !1,
            t.hideProfile()
        }),
        this.$tpl.find(".csdn-profile-logout").on("click", function(t) {
            var e = {
                mod: "popu_789"
            }
              , n = "https://passport.csdn.net/account/logout?from=" + encodeURIComponent(window.location.href);
            e.dest = n,
            e.extend1 = "退出",
            window.location.href = n,
            csdn && csdn.report && csdn.report.reportClick(e)
        }),
        this
    }
    ,
    r.prototype.update = function(t) {
        if (t) {
            var e = t.fansCount
              , n = t.likeCount
              , o = t.favoritesCount
              , a = t.nickName;
            this.toggleVip(t),
            this.isRender = !0,
            $(".csdn-profile-fansCount").text(e || "--"),
            $(".csdn-profile-likeCount").text(n || "--"),
            $(".csdn-profile-favoritesCount").text(o || "--"),
            $(".csdn-profile-nickName").text(a || "--")
        }
    }
    ,
    r.prototype.toggleVip = function(t) {
        this.isVip = 1 === t.vip,
        this.isVip && $(".csdn-profile-no-vip").addClass("csdn-profile-vip").removeClass("csdn-profile-no-vip").attr("href", "https://www.csdn.net/vip")
    }
    ,
    r.prototype.showProfile = function() {
        var t = this;
        this.timer && clearTimeout(this.timer),
        this.timer = setTimeout(function() {
            t.isEenter && (void 0,
            $(".csdn-toolbar-plugin").hide(),
            t.$box.addClass("toolbar-btn-login-action"),
            t.$tpl.stop().fadeIn(200))
        }, 150)
    }
    ,
    r.prototype.hideProfile = function() {
        if (this.timer && clearTimeout(this.timer),
        !this.isEenter) {
            void 0;
            this.$box.removeClass("toolbar-btn-login-action"),
            this.$tpl.stop().fadeOut(100)
        }
    }
    ,
    r.prototype.getData = function() {
        void 0;
        var t = this;
        if (!t.isRender) {
            var e = window.csdn.toolbar.profileData;
            if (e)
                return t.update(e),
                void t.showProfile();
            $.ajax({
                url: "https://www.csdn.net/community/toolbar-api/v1/get-user-info",
                type: "get",
                dataType: "JSON",
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                xhrFields: {
                    withCredentials: !0
                },
                success: function(e) {
                    200 === e.code && (t.update(e.data),
                    window.csdn.toolbar.profileData = e.data),
                    t.showProfile()
                },
                error: function(t) {}
            })
        }
    }
    ,
    $(document).on("toolbarReady", function(t) {
        void 0,
        setTimeout(function() {
            n() && new r
        }, 200)
    })
}(),
function() {
    function t(t) {
        for (var e = document.cookie.split("; "), n = 0; n < e.length; n++) {
            var o = e[n].split("=");
            if (o[0] == t && "UD" == t)
                return decodeURIComponent(o[1]);
            if (o[0] == t)
                return decodeURI(o[1])
        }
    }
    function e(t) {
        return t.some(function(t) {
            return "*" === t || !!~location.href.indexOf(t)
        })
    }
    function n() {
        this.el = null,
        this.host = "https://mp-luckydraw.csdn.net/",
        this.dev = !1,
        this.type = ["redPacket", "coupon", "common-coupon"],
        this.renderCss()
    }
    n.prototype.open = function(e) {
        if (e) {
            var n = this;
            $.ajax({
                url: n.host + "/luckydraw/api/timesWin",
                type: "post",
                data: JSON.stringify({
                    lotteryId: e,
                    username: t("UserName")
                }),
                contentType: "application/json",
                xhrFields: {
                    withCredentials: !0
                },
                dataType: "json",
                success: function(t) {
                    n.dev && (t = {
                        code: 200,
                        data: {
                            prizeId: "123",
                            name: n.type[parseInt(99 * Math.random()) % 3],
                            url: "",
                            money: (10 * Math.random()).toFixed(2)
                        }
                    }),
                    200 === t.code && t.data ? n.clear().render(t.data) : n.clear().render()
                }
            })
        }
    }
    ,
    n.prototype.render = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        void 0;
        var e = this
          , n = "csdn-redpack-sorry";
        t.prizeId && "common-coupon" === t.name ? n = "csdn-redpack-common-coupon" : t.prizeId && "coupon" === t.name ? n = "csdn-redpack-coupon" : !t.prizeId || "redPacket" !== t.name && "randomRedPacket" !== t.name || (n = "csdn-redpack-cash"),
        e.el = $('<div id="csdn-redpack-barrage" class="csdn-redpack-barrage csdn-redpack-container">\n                  <div class="csdn-redpack-result ' + n + '">\n                    <a class="csdn-redpack-result-link" href="' + (t.url ? t.url : "javascript:;") + '" ' + (t.url ? 'target="_blank"' : "") + '></a>\n                    <em class="csdn-redpack-result-close"></em>\n                    ' + ("csdn-redpack-sorry" !== n ? "<span>" + t.money + "</span>" : "") + "\n                    " + ("csdn-redpack-common-coupon" === n || "csdn-redpack-coupon" === n ? "<i>" + t.money + "</i>" : "") + "\n                  </div>\n              </div>"),
        e.el.find(".csdn-redpack-result-close").on("click", function(t) {
            e.clear()
        }),
        e.el.find(".csdn-redpack-result-link").on("click", function(t) {
            e.clear()
        }),
        $("body").append(e.el)
    }
    ,
    n.prototype.renderCss = function() {
        void 0;
        var t = $('<style type="text/css">\n                      #csdn-redpack-barrage {\n                        position: fixed;\n                        width: 100%;\n                        height: 100%;\n                        background: rgba(0, 0, 0, 0.74);\n                        overflow: hidden;\n                        top: 0;\n                        left: 0;\n                        z-index: 2147483647;\n                      }\n                      #csdn-redpack-barrage * {\n                        margin: 0;\n                        padding: 0;\n                        -webkit-box-sizing: border-box;\n                        box-sizing: border-box;\n                        -webkit-user-select: none;\n                        -moz-user-select: none;\n                        -ms-user-select: none;\n                        user-select: none;\n                      }\n                      #csdn-redpack-barrage a {\n                        text-decoration: none;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result {\n                        width: 950px;\n                        height: 720px;\n                        position: absolute;\n                        top: 50%;\n                        left: 50%;\n                        z-index: 999;\n                        -webkit-transform: translate(-50%, -45%);\n                        transform: translate(-50%, -45%);\n                        background-size: contain;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result .csdn-redpack-result-close {\n                        display: block;\n                        position: absolute;\n                        width: 50px;\n                        height: 50px;\n                        z-index: 99999;\n                        top: 18px;\n                        right: 300px;\n                        cursor: pointer;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result .csdn-redpack-result-link {\n                        display: block;\n                        position: absolute;\n                        width: 188px;\n                        height: 50px;\n                        z-index: 99999;\n                        left: 50%;\n                        bottom: 276px;\n                        cursor: pointer;\n                        margin-left: -84px;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-sorry {\n                        background: url("https://img-home.csdnimg.cn/images/20201110020632.png") no-repeat center center;\n                        background-size: contain;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-cash {\n                        background: url("https://img-home.csdnimg.cn/images/20201110020622.png") no-repeat center center;\n                        background-size: contain;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-cash span {\n                        position: absolute;\n                        display: block;\n                        text-align: center;\n                        min-width: 100px;\n                        font-size: 40px;\n                        font-weight: 900;\n                        height: 56px;\n                        line-height: 56px;\n                        font-family: Arial-Black, Arial;\n                        color: #FE1826;\n                        text-shadow: 0px 2px 12px rgba(234, 202, 105, 0.39);\n                        left: 50%;\n                        -webkit-transform: translate(-40%, 0);\n                        transform: translate(-40%, 0);\n                        top: 135px;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-cash .csdn-redpack-result-link {\n                        bottom: 316px;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-coupon {\n                        background: url("https://img-home.csdnimg.cn/images/20201110020628.png") no-repeat center center;\n                        background-size: contain;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-common-coupon {\n                        background: url("https://img-home.csdnimg.cn/images/20201110020625.png") no-repeat center center;\n                        background-size: contain;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-coupon span,\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-common-coupon span,\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-coupon i,\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-common-coupon i {\n                        min-width: 90px;\n                        font-size: 24px;\n                        font-weight: 900;\n                        font-family: Arial-Black, Arial;\n                        color: #FE1826;\n                        text-shadow: 0px 2px 12px rgba(234, 202, 105, 0.39);\n                        position: absolute;\n                        top: 318px;\n                        left: 346px;\n                        text-align: center;\n                        line-height: 34px;\n                        height: 34px;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-coupon i,\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-common-coupon i {\n                        top: 303px;\n                        left: 516px;\n                        text-align: center;\n                        font-style: normal;\n                      }\n                  </style>');
        document.head.insertBefore($(t)[0], document.head.getElementsByTagName("title")[0])
    }
    ,
    n.prototype.clear = function() {
        return void 0,
        this.el = null,
        this.dev = !1,
        $(".csdn-redpack-barrage").remove(),
        this
    }
    ,
    n.prototype.test = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 243
          , e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.dev = e,
        this.host = "https://test-luckydraw.csdn.net/",
        this.open(t)
    }
    ,
    $(document).on("toolbarReady", function(t) {
        var o = window.csdn.toolbarData || {}
          , a = o.barrageRedpackData;
        void 0,
        a && a.whiteList && e(a.whiteList) && (void 0,
        window.csdn.barrageRedpack = new n)
    })
}(),
function() {
    function t(t) {
        var e = document.createElement("link");
        e.rel = "stylesheet",
        e.type = "text/css",
        e.href = t,
        document.getElementsByTagName("head")[0].appendChild(e)
    }
    function e(t, e) {
        var n = document.createElement("script");
        n.type = "text/javascript",
        n.readyState ? n.onreadystatechange = function() {
            "loaded" != n.readyState && "complete" != n.readyState || (n.onreadystatechange = null,
            e && e())
        }
        : n.onload = function() {
            e && e()
        }
        ,
        n.src = t,
        document.getElementsByTagName("head")[0].appendChild(n)
    }
    function n() {
        t("https://g.csdnimg.cn/common/redpack/redpack.css"),
        e("https://g.csdnimg.cn/common/redpack/redpack.js")
    }
    function o(t) {
        return t.some(function(t) {
            return "*" === t || !!~location.href.indexOf(t)
        })
    }
    $(document).on("toolbarReady", function(t) {
        var e = window.csdn.toolbarData || {}
          , a = e.redpackData;
        void 0,
        a && a.whiteList && o(a.whiteList) && (void 0,
        n())
    })
}(),
function() {
    function t(t) {
        for (var e = document.cookie.split("; "), n = 0; n < e.length; n++) {
            var o = e[n].split("=");
            if (o[0] == t && "UD" == t)
                return decodeURIComponent(o[1]);
            if (o[0] == t)
                return decodeURI(o[1])
        }
    }
    function e() {
        return t("UserName")
    }
    function n() {
        this.isVip = !1,
        this.timer = null,
        this.box = null,
        this.isRender = !1,
        this.bindEvent()
    }
    n.prototype.getProfileData = function(t) {
        var e = this;
        $.ajax({
            url: "https://www.csdn.net/community/toolbar-api/v1/get-user-info",
            type: "get",
            dataType: "JSON",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            xhrFields: {
                withCredentials: !0
            },
            success: function(n) {
                200 === n.code && (t && t.call(e, n.data),
                window.csdn.toolbar.profileData = n.data)
            },
            error: function(t) {}
        })
    }
    ,
    n.prototype.renderVip = function(t) {
        void 0;
        var e = this
          , n = 1 === t.vip
          , o = "https://mall.csdn.net/vip"
          , a = "https://www.csdn.net/vip"
          , r = 1 === t.vip ? "3001.5402" : "3001.5400"
          , i = 1 === t.vip ? "3001.5403" : "3001.5401"
          , s = $('<div id="csdn-plugin-vip">\n                        <div class="csdn-plugin-vip-header">\n                            会员特权\n                        </div>\n                        <div class="csdn-plugin-vip-body">\n                            <span><i class="csdn-plugin-vip-icon csdn-plugin-vip-icon-download"></i><br/>资源下载</span>\n                            <span><i class="csdn-plugin-vip-icon csdn-plugin-vip-icon-class"></i><br/>千节精品课</span>\n                            <span><i class="csdn-plugin-vip-icon csdn-plugin-vip-icon-book"></i><br/>千本电子书</span>\n                            <span><i class="csdn-plugin-vip-icon csdn-plugin-vip-icon-pages"></i><br/>VIP技术文章</span>\n                        </div>\n                        <div class="csdn-plugin-vip-footer">\n                            <a data-report-click=\'{"spm": "' + r + '"}\' data-report-query="spm=' + r + '" class="csdn-plugin-vip-footer-btn" href="' + (n ? a : o) + '">\n                              ' + (n ? "续费8折" : "开通会员") + '\n                            </a>\n                            <a data-report-click=\'{"spm": "' + i + '"}\' data-report-query="spm=' + i + '" class="csdn-plugin-vip-footer-link" href="' + (n ? o : a) + '">\n                              ' + (n ? "前往会员购买页" : "查看完整会员权益") + "<i></i>\n                            </a>\n                        </div>\n                    </div>")
          , c = $(".toolbar-btn-vip").find(">a");
        $(".toolbar-btn-vip").append(s),
        n && (c.attr("href", a),
        c.attr("data-report-click", '{"spm": "3001.5399"}'),
        c.attr("data-report-query", "spm=3001.5399")),
        e.box = s,
        e.showVip(),
        e.isRender = !0
    }
    ,
    n.prototype.showVip = function() {
        var t = this;
        clearTimeout(t.timer),
        t.timer = setTimeout(function() {
            t.isEnter && t.box && t.box.stop().fadeIn(100)
        }, 150)
    }
    ,
    n.prototype.hideVip = function() {
        var t = this;
        clearTimeout(t.timer),
        t.isEnter || t.box && t.box.stop().fadeOut(100)
    }
    ,
    n.prototype.init = function() {
        var t = window.csdn.toolbar && window.csdn.toolbar.profileData;
        t ? this.renderVip(t) : this.getProfileData(this.renderVip)
    }
    ,
    n.prototype.bindEvent = function() {
        var t = this;
        $(".toolbar-btn-vip").on("mouseenter", function(e) {
            t.isEnter = !0,
            t.isRender ? t.showVip() : t.init()
        }).on("mouseleave", function(e) {
            t.isEnter = !1,
            t.hideVip()
        })
    }
    ,
    $(document).on("toolbarReady", function(t) {
        void 0,
        setTimeout(function() {
            e() && new n
        }, 200)
    })
}(),
function() {
    var t = !1
      , e = function() {
        function e() {
            _classCallCheck(this, e),
            this.container = $(".toolbar-btn.toolbar-btn-write"),
            this.activityList = [],
            this.init()
        }
        return _createClass(e, [{
            key: "init",
            value: function() {
                this.render(),
                this.getActivityList()
            }
        }, {
            key: "getActivityList",
            value: function() {
                var t = this;
                $.ajax({
                    url: "https://www.csdn.net/community/toolbar-api/v1/get-activity-list",
                    type: "get",
                    contentType: "application/x-www-form-urlencoded; charset=utf-8",
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: "json",
                    success: function(e) {
                        200 === e.code && (t.activityList = e.data.list,
                        t.activityList.length && t.insertActivity())
                    },
                    error: function(t) {
                        void 0
                    }
                })
            }
        }, {
            key: "render",
            value: function() {
                this.container.append('\n        <div id="csdn-toolbar-write" class="csdn-toolbar-plugin">\n          <div class="csdn-toolbar-plugin-triangle"></div>\n          <ul class="csdn-toolbar-write-box">\n            <li class="csdn-toolbar-write-box-blog">\n              <a href="https://mp.csdn.net/editor/html" target="_blank" data-report-click=\'{"spm":"3001.5352"}\' data-report-query="spm=3001.5352">\n                <i class="csdn-toolbar-write-icon"></i>\n                <span>写文章</span>\n              </a>\n            </li>\n            <li class="csdn-toolbar-write-box-blink">\n              <a href="https://blink.csdn.net" target="_blank" data-report-click=\'{"spm":"3001.5353"}\' data-report-query="spm=3001.5353">\n                <i class="csdn-toolbar-write-icon"></i>\n                <span>发Blink</span>\n              </a>\n            </li>\n            <li class="csdn-toolbar-write-box-ask">\n              <a href="https://ask.csdn.net/?word=" target="_blank" data-report-click=\'{"spm":"3001.5354"}\' data-report-query="spm=3001.5354">\n                <i class="csdn-toolbar-write-icon"></i>\n                <span>提问题</span>\n              </a>\n            </li>\n            <li class="csdn-toolbar-write-box-upload">\n              <a href="https://mp.csdn.net/console/uploadResources" target="_blank" data-report-click=\'{"spm":"3001.5355"}\' data-report-query="spm=3001.5355">\n                <i class="csdn-toolbar-write-icon"></i>\n                <span>传资源</span>\n              </a>\n            </li>\n            <li class="csdn-toolbar-write-box-code">\n              <a href="https://codechina.csdn.net/explore" target="_blank" data-report-click=\'{"spm":"3001.5356"}\' data-report-query="spm=3001.5356">\n                <i class="csdn-toolbar-write-icon"></i>\n                <span>建项目</span>\n              </a>\n            </li>\n          </ul>\n        </div>\n      ')
            }
        }, {
            key: "insertActivity",
            value: function() {
                for (var t = "", e = 0; e < this.activityList.length; e++)
                    t += '\n          <li>\n            <a href="' + this.activityList[e].url + '" target="_blank">#' + this.activityList[e].name + "</a>\n          </li>\n        ";
                this.container.find("#csdn-toolbar-write").append('\n        <div class="csdn-toolbar-write-activity">\n          <div class="csdn-toolbar-write-activity-head">创作活动</div>\n          <ul>' + t + '</ul>\n          <div class="toolbar-write-activity-more">\n            <a href="https://mp.csdn.net/console/creative" target="_blank" data-report-click=\'{"spm":"3001.5358"}\' data-report-query="spm=3001.5358">查看更多<i></i></a>\n          </div>\n        </div>\n      ')
            }
        }, {
            key: "show",
            value: function() {
                clearTimeout(this.timer),
                this.timer = setTimeout(function() {
                    t && $("#csdn-toolbar-write").stop().fadeIn(100)
                }, 150)
            }
        }, {
            key: "hide",
            value: function() {
                clearTimeout(this.timer),
                t || $("#csdn-toolbar-write").stop().fadeOut(100)
            }
        }]),
        e
    }();
    $(document).on("toolbarReady", function() {
        var n = null
          , o = $(".toolbar-btn.toolbar-btn-write");
        o.on("mouseenter", function() {
            t = !0,
            n ? n.show() : n = new e
        }),
        o.on("mouseleave", function() {
            t = !1,
            n.hide()
        })
    })
}();
