function sprintf() {
    var a = /%%|%(\d+\$)?([\-+\'#0 ]*)(\*\d+\$|\*|\d+)?(?:\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g,
        b = arguments,
        c = 0,
        d = b[c++],
        e = function (a, b, c, d) {
            c || (c = " ");
            var e = a.length >= b ? "" : new Array(1 + b - a.length >>> 0).join(c);
            return d ? a + e : e + a
        },
        f = function (a, b, c, d, f, g) {
            var h = d - a.length;
            return h > 0 && (a = c || !f ? e(a, d, g, c) : a.slice(0, b.length) + e("", h, "0", !0) + a.slice(b.length)), a
        },
        g = function (a, b, c, d, g, h, i) {
            var j = a >>> 0;
            return c = c && j && {
                2: "0b",
                8: "0",
                16: "0x"
            } [b] || "", a = c + e(j.toString(b), h || 0, "0", !1), f(a, c, d, g, i)
        },
        h = function (a, b, c, d, e, g) {
            return null !== d && void 0 !== d && (a = a.slice(0, d)), f(a, "", b, c, e, g)
        },
        i = function (a, d, i, j, k, l) {
            var m, n, o, p, q;
            if ("%%" === a) return "%";
            var r, s = !1,
                t = "",
                u = !1,
                v = !1,
                w = " ",
                x = i.length;
            for (r = 0; i && x > r; r++) switch (i.charAt(r)) {
                case " ":
                    t = " ";
                    break;
                case "+":
                    t = "+";
                    break;
                case "-":
                    s = !0;
                    break;
                case "'":
                    w = i.charAt(r + 1);
                    break;
                case "0":
                    u = !0, w = "0";
                    break;
                case "#":
                    v = !0
            }
            if (j = j ? "*" === j ? +b[c++] : "*" === j.charAt(0) ? +b[j.slice(1, -1)] : +j : 0, 0 > j && (j = -j, s = !0), !isFinite(j)) throw new Error("sprintf: (minimum-)width must be finite");
            switch (k = k ? "*" === k ? +b[c++] : "*" === k.charAt(0) ? +b[k.slice(1, -1)] : +k : "fFeE".indexOf(l) > -1 ? 6 : "d" === l ? 0 : void 0, q = d ? b[d.slice(0, -1)] : b[c++], l) {
                case "s":
                    return h(String(q), s, j, k, u, w);
                case "c":
                    return h(String.fromCharCode(+q), s, j, k, u);
                case "b":
                    return g(q, 2, v, s, j, k, u);
                case "o":
                    return g(q, 8, v, s, j, k, u);
                case "x":
                    return g(q, 16, v, s, j, k, u);
                case "X":
                    return g(q, 16, v, s, j, k, u).toUpperCase();
                case "u":
                    return g(q, 10, v, s, j, k, u);
                case "i":
                case "d":
                    return m = +q || 0, m = Math.round(m - m % 1), n = 0 > m ? "-" : t, q = n + e(String(Math.abs(m)), k, "0", !1), f(q, n, s, j, u);
                case "e":
                case "E":
                case "f":
                case "F":
                case "g":
                case "G":
                    return m = +q, n = 0 > m ? "-" : t, o = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(l.toLowerCase())], p = ["toString", "toUpperCase"]["eEfFgG".indexOf(l) % 2], q = n + Math.abs(m)[o](k), f(q, n, s, j, u)[p]();
                default:
                    return a
            }
        };
    return d.replace(a, i)
}! function (a, b, c, d) {
    "use strict";

    function e(a) {
        return ("string" == typeof a || a instanceof String) && (a = a.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), a
    }
    var f = function (b) {
        for (var c = b.length, d = a("head"); c--;) 0 === d.has("." + b[c]).length && d.append('<meta class="' + b[c] + '" />')
    };
    f(["foundation-mq-small", "foundation-mq-medium", "foundation-mq-large", "foundation-mq-xlarge", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), a(function () {
        "undefined" != typeof FastClick && "undefined" != typeof c.body && FastClick.attach(c.body)
    });
    var g = function (b, d) {
            if ("string" == typeof b) {
                if (d) {
                    var e;
                    if (d.jquery) {
                        if (e = d[0], !e) return d
                    } else e = d;
                    return a(e.querySelectorAll(b))
                }
                return a(c.querySelectorAll(b))
            }
            return a(b, d)
        },
        h = function (a) {
            var b = [];
            return a || b.push("data"), this.namespace.length > 0 && b.push(this.namespace), b.push(this.name), b.join("-")
        },
        i = function (a) {
            for (var b = a.split("-"), c = b.length, d = []; c--;) 0 !== c ? d.push(b[c]) : this.namespace.length > 0 ? d.push(this.namespace, b[c]) : d.push(b[c]);
            return d.reverse().join("-")
        },
        j = function (b, c) {
            var d = this,
                e = !g(this).data(this.attr_name(!0));
            return "string" == typeof b ? this[b].call(this, c) : void(g(this.scope).is("[" + this.attr_name() + "]") ? (g(this.scope).data(this.attr_name(!0) + "-init", a.extend({}, this.settings, c || b, this.data_options(g(this.scope)))), e && this.events(this.scope)) : g("[" + this.attr_name() + "]", this.scope).each(function () {
                var e = !g(this).data(d.attr_name(!0) + "-init");
                g(this).data(d.attr_name(!0) + "-init", a.extend({}, d.settings, c || b, d.data_options(g(this)))), e && d.events(this)
            }))
        },
        k = function (a, b) {
            function c() {
                b(a[0])
            }

            function d() {
                if (this.one("load", c), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                    var a = this.attr("src"),
                        b = a.match(/\?/) ? "&" : "?";
                    b += "random=" + (new Date).getTime(), this.attr("src", a + b)
                }
            }
            return a.attr("src") ? void(a[0].complete || 4 === a[0].readyState ? c() : d.call(a)) : void c()
        };
    b.matchMedia = b.matchMedia || function (a) {
        var b, c = a.documentElement,
            d = c.firstElementChild || c.firstChild,
            e = a.createElement("body"),
            f = a.createElement("div");
        return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", e.appendChild(f),
            function (a) {
                return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
                    matches: b,
                    media: a
                }
            }
    }(c),
        function (a) {
            function c() {
                d && (g(c), i && jQuery.fx.tick())
            }
            for (var d, e = 0, f = ["webkit", "moz"], g = b.requestAnimationFrame, h = b.cancelAnimationFrame, i = "undefined" != typeof jQuery.fx; e < f.length && !g; e++) g = b[f[e] + "RequestAnimationFrame"], h = h || b[f[e] + "CancelAnimationFrame"] || b[f[e] + "CancelRequestAnimationFrame"];
            g ? (b.requestAnimationFrame = g, b.cancelAnimationFrame = h, i && (jQuery.fx.timer = function (a) {
                a() && jQuery.timers.push(a) && !d && (d = !0, c())
            }, jQuery.fx.stop = function () {
                d = !1
            })) : (b.requestAnimationFrame = function (a) {
                var c = (new Date).getTime(),
                    d = Math.max(0, 16 - (c - e)),
                    f = b.setTimeout(function () {
                        a(c + d)
                    }, d);
                return e = c + d, f
            }, b.cancelAnimationFrame = function (a) {
                clearTimeout(a)
            })
        }(jQuery), b.Foundation = {
        name: "Foundation",
        version: "5.2.2",
        media_queries: {
            small: g(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            medium: g(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            large: g(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xlarge: g(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xxlarge: g(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
        },
        stylesheet: a("<style></style>").appendTo("head")[0].sheet,
        global: {
            namespace: d
        },
        init: function (a, b, c, d, e) {
            var f = [a, c, d, e],
                h = [];
            if (this.rtl = /rtl/i.test(g("html").attr("dir")), this.scope = a || this.scope, this.set_namespace(), b && "string" == typeof b && !/reflow/i.test(b)) this.libs.hasOwnProperty(b) && h.push(this.init_lib(b, f));
            else
                for (var i in this.libs) h.push(this.init_lib(i, b));
            return a
        },
        init_lib: function (b, c) {
            return this.libs.hasOwnProperty(b) ? (this.patch(this.libs[b]), c && c.hasOwnProperty(b) ? ("undefined" != typeof this.libs[b].settings ? a.extend(!0, this.libs[b].settings, c[b]) : "undefined" != typeof this.libs[b].defaults && a.extend(!0, this.libs[b].defaults, c[b]), this.libs[b].init.apply(this.libs[b], [this.scope, c[b]])) : (c = c instanceof Array ? c : new Array(c), this.libs[b].init.apply(this.libs[b], c))) : function () {}
        },
        patch: function (a) {
            a.scope = this.scope, a.namespace = this.global.namespace, a.rtl = this.rtl, a.data_options = this.utils.data_options, a.attr_name = h, a.add_namespace = i, a.bindings = j, a.S = this.utils.S
        },
        inherit: function (a, b) {
            for (var c = b.split(" "), d = c.length; d--;) this.utils.hasOwnProperty(c[d]) && (a[c[d]] = this.utils[c[d]])
        },
        set_namespace: function () {
            var b = this.global.namespace === d ? a(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
            this.global.namespace = b === d || /false/i.test(b) ? "" : b
        },
        libs: {},
        utils: {
            S: g,
            throttle: function (a, b) {
                var c = null;
                return function () {
                    var d = this,
                        e = arguments;
                    null == c && (c = setTimeout(function () {
                        a.apply(d, e), c = null
                    }, b))
                }
            },
            debounce: function (a, b, c) {
                var d, e;
                return function () {
                    var f = this,
                        g = arguments,
                        h = function () {
                            d = null, c || (e = a.apply(f, g))
                        },
                        i = c && !d;
                    return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e
                }
            },
            data_options: function (b) {
                function c(a) {
                    return !isNaN(a - 0) && null !== a && "" !== a && a !== !1 && a !== !0
                }

                function d(b) {
                    return "string" == typeof b ? a.trim(b) : b
                }
                var e, f, g, h = {},
                    i = function (a) {
                        var b = Foundation.global.namespace;
                        return b.length > 0 ? a.data(b + "-options") : a.data("options")
                    },
                    j = i(b);
                if ("object" == typeof j) return j;
                for (g = (j || ":").split(";"), e = g.length; e--;) f = g[e].split(":"), /true/i.test(f[1]) && (f[1] = !0), /false/i.test(f[1]) && (f[1] = !1), c(f[1]) && (-1 === f[1].indexOf(".") ? f[1] = parseInt(f[1], 10) : f[1] = parseFloat(f[1])), 2 === f.length && f[0].length > 0 && (h[d(f[0])] = d(f[1]));
                return h
            },
            register_media: function (b, c) {
                Foundation.media_queries[b] === d && (a("head").append('<meta class="' + c + '">'), Foundation.media_queries[b] = e(a("." + c).css("font-family")))
            },
            add_custom_rule: function (a, b) {
                if (b === d) Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length);
                else {
                    var c = Foundation.media_queries[b];
                    c !== d && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[b] + "{ " + a + " }")
                }
            },
            image_loaded: function (a, b) {
                var c = this,
                    d = a.length;
                0 === d && b(a), a.each(function () {
                    k(c.S(this), function () {
                        d -= 1, 0 === d && b(a)
                    })
                })
            },
            random_str: function () {
                return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
            }
        }
    }, a.fn.foundation = function () {
        var a = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
            return Foundation.init.apply(Foundation, [this].concat(a)), this
        })
    }
}(jQuery, this, this.document),
    function (a, b, c, d) {
        "use strict";

        function e(a) {
            var b = /fade/i.test(a),
                c = /pop/i.test(a);
            return {
                animate: b || c,
                pop: c,
                fade: b
            }
        }
        Foundation.libs.reveal = {
            name: "reveal",
            version: "5.2.2",
            locked: !1,
            settings: {
                animation: "fadeAndPop",
                animation_speed: 250,
                close_on_background_click: !0,
                close_on_esc: !0,
                dismiss_modal_class: "close-reveal-modal",
                bg_class: "reveal-modal-bg",
                open: function () {},
                opened: function () {},
                close: function () {},
                closed: function () {},
                bg: a(".reveal-modal-bg"),
                css: {
                    open: {
                        opacity: 0,
                        visibility: "visible",
                        display: "block"
                    },
                    close: {
                        opacity: 1,
                        visibility: "hidden",
                        display: "none"
                    }
                }
            },
            init: function (b, c, d) {
                a.extend(!0, this.settings, c, d), this.bindings(c, d)
            },
            events: function (a) {
                var b = this,
                    d = b.S;
                return d(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]", function (a) {
                    if (a.preventDefault(), !b.locked) {
                        var c = d(this),
                            e = c.data(b.data_attr("reveal-ajax"));
                        if (b.locked = !0, "undefined" == typeof e) b.open.call(b, c);
                        else {
                            var f = e === !0 ? c.attr("href") : e;
                            b.open.call(b, c, {
                                url: f
                            })
                        }
                    }
                }), d(c).on("touchend.fndtn.reveal click.fndtn.reveal", this.close_targets(), function (a) {
                    if (a.preventDefault(), !b.locked) {
                        var c = d("[" + b.attr_name() + "].open").data(b.attr_name(!0) + "-init"),
                            e = d(a.target)[0] === d("." + c.bg_class)[0];
                        if (e) {
                            if (!c.close_on_background_click) return;
                            a.stopPropagation()
                        }
                        b.locked = !0, b.close.call(b, e ? d("[" + b.attr_name() + "].open") : d(this).closest("[" + b.attr_name() + "]"))
                    }
                }), d("[" + b.attr_name() + "]", this.scope).length > 0 ? d(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : d(this.scope).on("open.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + b.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + b.attr_name() + "]", this.close_video), !0
            },
            key_up_on: function (a) {
                var b = this;
                return b.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function (a) {
                    var c = b.S("[" + b.attr_name() + "].open"),
                        d = c.data(b.attr_name(!0) + "-init");
                    d && 27 === a.which && d.close_on_esc && !b.locked && b.close.call(b, c)
                }), !0
            },
            key_up_off: function (a) {
                return this.S("body").off("keyup.fndtn.reveal"), !0
            },
            open: function (b, c) {
                var d = this;
                if (b)
                    if ("undefined" != typeof b.selector) var e = d.S("#" + b.data(d.data_attr("reveal-id")));
                    else {
                        var e = d.S(this.scope);
                        c = b
                    }
                else var e = d.S(this.scope);
                var f = e.data(d.attr_name(!0) + "-init");
                if (!e.hasClass("open")) {
                    var g = d.S("[" + d.attr_name() + "].open");
                    if ("undefined" == typeof e.data("css-top") && e.data("css-top", parseInt(e.css("top"), 10)).data("offset", this.cache_offset(e)), this.key_up_on(e), e.trigger("open"), g.length < 1 && this.toggle_bg(e), "string" == typeof c && (c = {
                        url: c
                    }), "undefined" != typeof c && c.url) {
                        var h = "undefined" != typeof c.success ? c.success : null;
                        a.extend(c, {
                            success: function (b, c, i) {
                                a.isFunction(h) && h(b, c, i), e.html(b), d.S(e).foundation("section", "reflow"), g.length > 0 && d.hide(g, f.css.close), d.show(e, f.css.open)
                            }
                        }), a.ajax(c)
                    } else g.length > 0 && this.hide(g, f.css.close), this.show(e, f.css.open)
                }
            },
            close: function (a) {
                var a = a && a.length ? a : this.S(this.scope),
                    b = this.S("[" + this.attr_name() + "].open"),
                    c = a.data(this.attr_name(!0) + "-init");
                b.length > 0 && (this.locked = !0, this.key_up_off(a), a.trigger("close"), this.toggle_bg(a), this.hide(b, c.css.close, c))
            },
            close_targets: function () {
                var a = "." + this.settings.dismiss_modal_class;
                return this.settings.close_on_background_click ? a + ", ." + this.settings.bg_class : a
            },
            toggle_bg: function (b) {
                b.data(this.attr_name(!0));
                0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = a("<div />", {
                    "class": this.settings.bg_class
                }).appendTo("body").hide()), this.settings.bg.filter(":visible").length > 0 ? this.hide(this.settings.bg) : this.show(this.settings.bg)
            },
            show: function (c, d) {
                if (d) {
                    var f = c.data(this.attr_name(!0) + "-init");
                    if (0 === c.parent("body").length) {
                        var g = c.wrap('<div style="display: none;" />').parent(),
                            h = this.settings.rootElement || "body";
                        c.on("closed.fndtn.reveal.wrapped", function () {
                            c.detach().appendTo(g), c.unwrap().unbind("closed.fndtn.reveal.wrapped")
                        }), c.detach().appendTo(h)
                    }
                    var i = e(f.animation);
                    if (i.animate || (this.locked = !1), i.pop) {
                        d.top = a(b).scrollTop() - c.data("offset") + "px";
                        var j = {
                            top: a(b).scrollTop() + c.data("css-top") + "px",
                            opacity: 1
                        };
                        return setTimeout(function () {
                            return c.css(d).animate(j, f.animation_speed, "linear", function () {
                                this.locked = !1, c.trigger("opened")
                            }.bind(this)).addClass("open")
                        }.bind(this), f.animation_speed / 2)
                    }
                    if (i.fade) {
                        d.top = a(b).scrollTop() + c.data("css-top") + "px";
                        var j = {
                            opacity: 1
                        };
                        return setTimeout(function () {
                            return c.css(d).animate(j, f.animation_speed, "linear", function () {
                                this.locked = !1, c.trigger("opened")
                            }.bind(this)).addClass("open")
                        }.bind(this), f.animation_speed / 2)
                    }
                    return c.css(d).show().css({
                        opacity: 1
                    }).addClass("open").trigger("opened")
                }
                var f = this.settings;
                return e(f.animation).fade ? c.fadeIn(f.animation_speed / 2) : (this.locked = !1, c.show())
            },
            hide: function (c, d) {
                if (d) {
                    var f = c.data(this.attr_name(!0) + "-init"),
                        g = e(f.animation);
                    if (g.animate || (this.locked = !1), g.pop) {
                        var h = {
                            top: -a(b).scrollTop() - c.data("offset") + "px",
                            opacity: 0
                        };
                        return setTimeout(function () {
                            return c.animate(h, f.animation_speed, "linear", function () {
                                this.locked = !1, c.css(d).trigger("closed")
                            }.bind(this)).removeClass("open")
                        }.bind(this), f.animation_speed / 2)
                    }
                    if (g.fade) {
                        var h = {
                            opacity: 0
                        };
                        return setTimeout(function () {
                            return c.animate(h, f.animation_speed, "linear", function () {
                                this.locked = !1, c.css(d).trigger("closed")
                            }.bind(this)).removeClass("open")
                        }.bind(this), f.animation_speed / 2)
                    }
                    return c.hide().css(d).removeClass("open").trigger("closed")
                }
                var f = this.settings;
                return e(f.animation).fade ? c.fadeOut(f.animation_speed / 2) : c.hide()
            },
            close_video: function (b) {
                var c = a(".flex-video", b.target),
                    d = a("iframe", c);
                d.length > 0 && (d.attr("data-src", d[0].src), d.attr("src", "about:blank"), c.hide())
            },
            open_video: function (b) {
                var c = a(".flex-video", b.target),
                    e = c.find("iframe");
                if (e.length > 0) {
                    var f = e.attr("data-src");
                    if ("string" == typeof f) e[0].src = e.attr("data-src");
                    else {
                        var g = e[0].src;
                        e[0].src = d, e[0].src = g
                    }
                    c.show()
                }
            },
            data_attr: function (a) {
                return this.namespace.length > 0 ? this.namespace + "-" + a : a
            },
            cache_offset: function (a) {
                var b = a.show().height() + parseInt(a.css("top"), 10);
                return a.hide(), b
            },
            off: function () {
                a(this.scope).off(".fndtn.reveal")
            },
            reflow: function () {}
        }
    }(jQuery, this, this.document),
    function (a, b, c, d) {
        "use strict";
        Foundation.libs.abide = {
            name: "abide",
            version: "5.2.2",
            settings: {
                live_validate: !0,
                focus_on_invalid: !0,
                error_labels: !0,
                timeout: 1e3,
                patterns: {
                    alpha: /^[a-zA-Z]+$/,
                    alpha_numeric: /^[a-zA-Z0-9]+$/,
                    integer: /^[-+]?\d+$/,
                    number: /^[-+]?\d*(?:\.\d+)?$/,
                    card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                    cvv: /^([0-9]){3,4}$/,
                    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                    url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                    domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
                    datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                    date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                    time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                    dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                    month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d$/,
                    color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
                },
                validators: {
                    equalTo: function (a, b, d) {
                        var e = c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value,
                            f = a.value,
                            g = e === f;
                        return g
                    }
                }
            },
            timer: null,
            init: function (a, b, c) {
                this.bindings(b, c)
            },
            events: function (b) {
                var c = this,
                    d = c.S(b).attr("novalidate", "novalidate"),
                    e = d.data(this.attr_name(!0) + "-init") || {};
                this.invalid_attr = this.add_namespace("data-invalid"), d.off(".abide").on("submit.fndtn.abide validate.fndtn.abide", function (a) {
                    var b = /ajax/i.test(c.S(this).attr(c.attr_name()));
                    return c.validate(c.S(this).find("input, textarea, select").get(), a, b)
                }).on("reset", function () {
                    return c.reset(a(this))
                }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function (a) {
                    c.validate([this], a)
                }).on("keydown.fndtn.abide", function (a) {
                    e.live_validate === !0 && (clearTimeout(c.timer), c.timer = setTimeout(function () {
                        c.validate([this], a)
                    }.bind(this), e.timeout))
                })
            },
            reset: function (b) {
                b.removeAttr(this.invalid_attr), a(this.invalid_attr, b).removeAttr(this.invalid_attr), a(".error", b).not("small").removeClass("error")
            },
            validate: function (a, b, c) {
                var d = this.parse_patterns(a),
                    e = d.length,
                    f = this.S(a[0]).closest("[data-" + this.attr_name(!0) + "]"),
                    g = f.data(this.attr_name(!0) + "-init") || {},
                    h = /submit/.test(b.type);
                f.trigger("validated");
                for (var i = 0; e > i; i++)
                    if (!d[i] && (h || c)) return g.focus_on_invalid && a[i].focus(), f.trigger("invalid"), this.S(a[i]).closest("[data-" + this.attr_name(!0) + "]").attr(this.invalid_attr, ""), !1;
                return (h || c) && f.trigger("valid"), f.removeAttr(this.invalid_attr), !c
            },
            parse_patterns: function (a) {
                for (var b = a.length, c = []; b--;) c.push(this.pattern(a[b]));
                return this.check_validation_and_apply_styles(c)
            },
            pattern: function (a) {
                var b = a.getAttribute("type"),
                    c = "string" == typeof a.getAttribute("required"),
                    d = a.getAttribute("pattern") || "";
                return this.settings.patterns.hasOwnProperty(d) && d.length > 0 ? [a, this.settings.patterns[d], c] : d.length > 0 ? [a, new RegExp("^" + d + "$"), c] : this.settings.patterns.hasOwnProperty(b) ? [a, this.settings.patterns[b], c] : (d = /.*/, [a, d, c])
            },
            check_validation_and_apply_styles: function (b) {
                for (var c = b.length, d = [], e = this.S(b[0][0]).closest("[data-" + this.attr_name(!0) + "]"), f = e.data(this.attr_name(!0) + "-init") || {}; c--;) {
                    var g, h, i = b[c][0],
                        j = b[c][2],
                        k = i.value,
                        l = this.S(i).parent(),
                        m = i.getAttribute(this.add_namespace("data-abide-validator")),
                        n = "radio" === i.type,
                        o = "checkbox" === i.type,
                        p = this.S('label[for="' + i.getAttribute("id") + '"]'),
                        q = j ? i.value.length > 0 : !0;
                    i.getAttribute(this.add_namespace("data-equalto")) && (m = "equalTo"), g = l.is("label") ? l.parent() : l, n && j ? d.push(this.valid_radio(i, j)) : o && j ? d.push(this.valid_checkbox(i, j)) : m ? (h = this.settings.validators[m].apply(this, [i, j, g]), d.push(h), h ? (this.S(i).removeAttr(this.invalid_attr), g.removeClass("error")) : (this.S(i).attr(this.invalid_attr, ""), g.addClass("error"))) : b[c][1].test(k) && q || !j && i.value.length < 1 || a(i).attr("disabled") ? (this.S(i).removeAttr(this.invalid_attr), g.removeClass("error"), p.length > 0 && f.error_labels && p.removeClass("error"), d.push(!0), a(i).triggerHandler("valid")) : (this.S(i).attr(this.invalid_attr, ""), g.addClass("error"), p.length > 0 && f.error_labels && p.addClass("error"), d.push(!1), a(i).triggerHandler("invalid"))
                }
                return d
            },
            valid_checkbox: function (a, b) {
                var a = this.S(a),
                    c = a.is(":checked") || !b;
                return c ? a.removeAttr(this.invalid_attr).parent().removeClass("error") : a.attr(this.invalid_attr, "").parent().addClass("error"), c
            },
            valid_radio: function (a, b) {
                for (var c = a.getAttribute("name"), d = this.S(a).closest("[data-" + this.attr_name(!0) + "]").find("[name=" + c + "]"), e = d.length, f = !1, g = 0; e > g; g++) d[g].checked && (f = !0);
                for (var g = 0; e > g; g++) f ? this.S(d[g]).removeAttr(this.invalid_attr).parent().removeClass("error") : this.S(d[g]).attr(this.invalid_attr, "").parent().addClass("error");
                return f
            },
            valid_equal: function (a, b, d) {
                var e = c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value,
                    f = a.value,
                    g = e === f;
                return g ? (this.S(a).removeAttr(this.invalid_attr), d.removeClass("error")) : (this.S(a).attr(this.invalid_attr, ""), d.addClass("error")), g
            },
            valid_oneof: function (a, b, c, d) {
                var a = this.S(a),
                    e = this.S("[" + this.add_namespace("data-oneof") + "]"),
                    f = e.filter(":checked").length > 0;
                if (f ? a.removeAttr(this.invalid_attr).parent().removeClass("error") : a.attr(this.invalid_attr, "").parent().addClass("error"), !d) {
                    var g = this;
                    e.each(function () {
                        g.valid_oneof.call(g, this, null, null, !0)
                    })
                }
                return f
            }
        }
    }(jQuery, this, this.document),
    function (a, b, c, d) {
        "use strict";
        Foundation.libs.interchange = {
            name: "interchange",
            version: "5.2.2",
            cache: {},
            images_loaded: !1,
            nodes_loaded: !1,
            settings: {
                load_attr: "interchange",
                named_queries: {
                    "default": "only screen",
                    phone: Foundation.media_queries.small,
                    tablet: Foundation.media_queries.medium,
                    desktop: Foundation.media_queries.large,
                    xlarge: Foundation.media_queries.xlarge,
                    xxlarge: Foundation.media_queries.xxlarge,
                    landscape: "only screen and (orientation: landscape)",
                    portrait: "only screen and (orientation: portrait)",
                    retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
                },
                directives: {
                    replace: function (b, c, d) {
                        if (/IMG/.test(b[0].nodeName)) {
                            var e = b[0].src;
                            if (new RegExp(c, "i").test(e)) return;
                            return b[0].src = c, d(b[0].src)
                        }
                        var f = b.data(this.data_attr + "-last-path");
                        if (f != c) return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(c) ? (a(b).css("background-image", "url(" + c + ")"), b.data("interchange-last-path", c), d(c)) : a.get(c, function (a) {
                            b.html(a), b.data(this.data_attr + "-last-path", c), d()
                        })
                    }
                }
            },
            init: function (b, c, d) {
                Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), a.extend(!0, this.settings, c, d), this.bindings(c, d), this.load("images"), this.load("nodes")
            },
            get_media_hash: function () {
                var a = "";
                for (var b in this.settings.named_queries) a += matchMedia(this.settings.named_queries[b]).matches.toString();
                return a
            },
            events: function () {
                var c, d = this;
                return a(b).off(".interchange").on("resize.fndtn.interchange", d.throttle(function () {
                    var a = d.get_media_hash();
                    a !== c && d.resize(), c = a
                }, 50)), this
            },
            resize: function () {
                var b = this.cache;
                if (!this.images_loaded || !this.nodes_loaded) return void setTimeout(a.proxy(this.resize, this), 50);
                for (var c in b)
                    if (b.hasOwnProperty(c)) {
                        var d = this.results(c, b[c]);
                        d && this.settings.directives[d.scenario[1]].call(this, d.el, d.scenario[0], function () {
                            if (arguments[0] instanceof Array) var a = arguments[0];
                            else var a = Array.prototype.slice.call(arguments, 0);
                            d.el.trigger(d.scenario[1], a)
                        })
                    }
            },
            results: function (a, b) {
                var c = b.length;
                if (c > 0)
                    for (var d = this.S("[" + this.add_namespace("data-uuid") + '="' + a + '"]'); c--;) {
                        var e, f = b[c][2];
                        if (e = this.settings.named_queries.hasOwnProperty(f) ? matchMedia(this.settings.named_queries[f]) : matchMedia(f), e.matches) return {
                            el: d,
                            scenario: b[c]
                        }
                    }
                return !1
            },
            load: function (a, b) {
                return ("undefined" == typeof this["cached_" + a] || b) && this["update_" + a](), this["cached_" + a]
            },
            update_images: function () {
                var a = this.S("img[" + this.data_attr + "]"),
                    b = a.length,
                    c = b,
                    d = 0,
                    e = this.data_attr;
                for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === b; c--;) {
                    if (d++, a[c]) {
                        var f = a[c].getAttribute(e) || "";
                        f.length > 0 && this.cached_images.push(a[c])
                    }
                    d === b && (this.images_loaded = !0, this.enhance("images"))
                }
                return this
            },
            update_nodes: function () {
                var a = this.S("[" + this.data_attr + "]").not("img"),
                    b = a.length,
                    c = b,
                    d = 0,
                    e = this.data_attr;
                for (this.cached_nodes = [], this.nodes_loaded = 0 === b; c--;) {
                    d++;
                    var f = a[c].getAttribute(e) || "";
                    f.length > 0 && this.cached_nodes.push(a[c]), d === b && (this.nodes_loaded = !0, this.enhance("nodes"))
                }
                return this
            },
            enhance: function (b) {
                for (var c = this["cached_" + b].length; c--;) this.object(a(this["cached_" + b][c]));
                return this.resize()
            },
            parse_params: function (a, b, c) {
                return [this.trim(a), this.convert_directive(b), this.trim(c)]
            },
            convert_directive: function (a) {
                var b = this.trim(a);
                return b.length > 0 ? b : "replace"
            },
            object: function (a) {
                var b = this.parse_data_attr(a),
                    c = [],
                    d = b.length;
                if (d > 0)
                    for (; d--;) {
                        var e = b[d].split(/\((.*?)(\))$/);
                        if (e.length > 1) {
                            var f = e[0].split(","),
                                g = this.parse_params(f[0], f[1], e[1]);
                            c.push(g)
                        }
                    }
                return this.store(a, c)
            },
            store: function (a, b) {
                var c = this.random_str(),
                    d = a.data(this.add_namespace("uuid", !0));
                return this.cache[d] ? this.cache[d] : (a.attr(this.add_namespace("data-uuid"), c), this.cache[c] = b)
            },
            trim: function (b) {
                return "string" == typeof b ? a.trim(b) : b
            },
            set_data_attr: function (a) {
                return a ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
            },
            parse_data_attr: function (a) {
                for (var b = a.attr(this.attr_name()).split(/\[(.*?)\]/), c = b.length, d = []; c--;) b[c].replace(/[\W\d]+/, "").length > 4 && d.push(b[c]);
                return d
            },
            reflow: function () {
                this.load("images", !0), this.load("nodes", !0)
            }
        }
    }(jQuery, this, this.document),
    function (a, b, c, d) {
        "use strict";
        Foundation.libs.equalizer = {
            name: "equalizer",
            version: "5.2.2",
            settings: {
                use_tallest: !0,
                before_height_change: a.noop,
                after_height_change: a.noop
            },
            init: function (a, b, c) {
                Foundation.inherit(this, "image_loaded"), this.bindings(b, c), this.reflow()
            },
            events: function () {
                this.S(b).off(".equalizer").on("resize.fndtn.equalizer", function (a) {
                    this.reflow()
                }.bind(this))
            },
            equalize: function (b) {
                var c = !1,
                    d = b.find("[" + this.attr_name() + "-watch]:visible"),
                    e = d.length ? d.first().offset().top : 0,
                    f = b.data(this.attr_name(!0) + "-init");
                if (0 !== d.length && (f.before_height_change(), b.trigger("before-height-change"), d.height("inherit"), d.each(function () {
                    var b = a(this);
                    b.offset().top !== e && (c = !0)
                }), !c)) {
                    var g = d.map(function () {
                        return a(this).outerHeight()
                    }).get();
                    if (f.use_tallest) {
                        var h = Math.max.apply(null, g);
                        d.css("height", h)
                    } else {
                        var i = Math.min.apply(null, g);
                        d.css("height", i)
                    }
                    f.after_height_change(), b.trigger("after-height-change")
                }
            },
            reflow: function () {
                var b = this;
                this.S("[" + this.attr_name() + "]", this.scope).each(function () {
                    var c = a(this);
                    b.image_loaded(b.S("img", this), function () {
                        b.equalize(c)
                    })
                })
            }
        }
    }(jQuery, this, this.document),
    function () {
        var a, b, c, d, e, f = function (a, b) {
                return function () {
                    return a.apply(b, arguments)
                }
            },
            g = [].indexOf || function (a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (b in this && this[b] === a) return b;
                return -1
            };
        b = function () {
            function a() {}
            return a.prototype.extend = function (a, b) {
                var c, d;
                for (c in b) d = b[c], null == a[c] && (a[c] = d);
                return a
            }, a.prototype.isMobile = function (a) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
            }, a.prototype.addEvent = function (a, b, c) {
                return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
            }, a.prototype.removeEvent = function (a, b, c) {
                return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
            }, a.prototype.innerHeight = function () {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, a
        }(), c = this.WeakMap || this.MozWeakMap || (c = function () {
            function a() {
                this.keys = [], this.values = []
            }
            return a.prototype.get = function (a) {
                var b, c, d, e, f;
                for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                    if (c = f[b], c === a) return this.values[b]
            }, a.prototype.set = function (a, b) {
                var c, d, e, f, g;
                for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                    if (d = g[c], d === a) return void(this.values[c] = b);
                return this.keys.push(a), this.values.push(b)
            }, a
        }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
            function a() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return a.notSupported = !0, a.prototype.observe = function () {}, a
        }()), d = this.getComputedStyle || function (a, b) {
            return this.getPropertyValue = function (b) {
                var c;
                return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function (a, b) {
                    return b.toUpperCase()
                }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
            }, this
        }, e = /(\-([a-z]){1})/g, this.WOW = function () {
            function e(a) {
                null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c
            }
            return e.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0
            }, e.prototype.init = function () {
                var a;
                return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, e.prototype.start = function () {
                var b, c, d, e;
                if (this.stopped = !1, this.boxes = function () {
                    var a, c, d, e;
                    for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.all = function () {
                    var a, c, d, e;
                    for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
                return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function (a) {
                    return function (b) {
                        var c, d, e, f, g;
                        for (g = [], e = 0, f = b.length; f > e; e++) d = b[e], g.push(function () {
                            var a, b, e, f;
                            for (e = d.addedNodes || [], f = [], a = 0, b = e.length; b > a; a++) c = e[a], f.push(this.doSync(c));
                            return f
                        }.call(a));
                        return g
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, e.prototype.stop = function () {
                return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, e.prototype.sync = function (b) {
                return a.notSupported ? this.doSync(this.element) : void 0
            }, e.prototype.doSync = function (a) {
                var b, c, d, e, f;
                if (null == a && (a = this.element), 1 === a.nodeType) {
                    for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                    return f
                }
            }, e.prototype.show = function (a) {
                return this.applyStyle(a), a.className = "" + a.className + " " + this.config.animateClass
            }, e.prototype.applyStyle = function (a, b) {
                var c, d, e;
                return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
                    return function () {
                        return f.customStyle(a, b, d, c, e)
                    }
                }(this))
            }, e.prototype.animate = function () {
                return "requestAnimationFrame" in window ? function (a) {
                    return window.requestAnimationFrame(a)
                } : function (a) {
                    return a()
                }
            }(), e.prototype.resetStyle = function () {
                var a, b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
                return e
            }, e.prototype.customStyle = function (a, b, c, d, e) {
                return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                    animationDuration: c
                }), d && this.vendorSet(a.style, {
                    animationDelay: d
                }), e && this.vendorSet(a.style, {
                    animationIterationCount: e
                }), this.vendorSet(a.style, {
                    animationName: b ? "none" : this.cachedAnimationName(a)
                }), a
            }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function (a, b) {
                var c, d, e, f;
                f = [];
                for (c in b) d = b[c], a["" + c] = d, f.push(function () {
                    var b, f, g, h;
                    for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++) e = g[b], h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d);
                    return h
                }.call(this));
                return f
            }, e.prototype.vendorCSS = function (a, b) {
                var c, e, f, g, h, i;
                for (e = d(a), c = e.getPropertyCSSValue(b), i = this.vendors, g = 0, h = i.length; h > g; g++) f = i[g], c = c || e.getPropertyCSSValue("-" + f + "-" + b);
                return c
            }, e.prototype.animationName = function (a) {
                var b;
                try {
                    b = this.vendorCSS(a, "animation-name").cssText
                } catch (c) {
                    b = d(a).getPropertyValue("animation-name")
                }
                return "none" === b ? "" : b
            }, e.prototype.cacheAnimationName = function (a) {
                return this.animationNameCache.set(a, this.animationName(a))
            }, e.prototype.cachedAnimationName = function (a) {
                return this.animationNameCache.get(a)
            }, e.prototype.scrollHandler = function () {
                return this.scrolled = !0
            }, e.prototype.scrollCallback = function () {
                var a;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                    var b, c, d, e;
                    for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                    return e
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, e.prototype.offsetTop = function (a) {
                for (var b; void 0 === a.offsetTop;) a = a.parentNode;
                for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
                return b
            }, e.prototype.isVisible = function (a) {
                var b, c, d, e, f;
                return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
            }, e.prototype.util = function () {
                return null != this._util ? this._util : this._util = new b
            }, e.prototype.disabled = function () {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, e
        }()
    }.call(this),
    function (a) {
        "function" == typeof define && define.amd ? define(["js/jquery"], a) : a(jQuery)
    }(function (a, b) {
        function c(a) {
            function b(a) {
                d ? (c(), M(b), e = !0, d = !1) : e = !1
            }
            var c = a,
                d = !1,
                e = !1;
            this.kick = function (a) {
                d = !0, e || b()
            }, this.end = function (a) {
                var b = c;
                a && (e ? (c = d ? function () {
                    b(), a()
                } : a, d = !0) : a())
            }
        }

        function d() {
            return !0
        }

        function e() {
            return !1
        }

        function f(a) {
            a.preventDefault()
        }

        function g(a) {
            N[a.target.tagName.toLowerCase()] || a.preventDefault()
        }

        function h(a) {
            return 1 === a.which && !a.ctrlKey && !a.altKey
        }

        function i(a, b) {
            var c, d;
            if (a.identifiedTouch) return a.identifiedTouch(b);
            for (c = -1, d = a.length; ++c < d;)
                if (a[c].identifier === b) return a[c]
        }

        function j(a, b) {
            var c = i(a.changedTouches, b.identifier);
            if (c && (c.pageX !== b.pageX || c.pageY !== b.pageY)) return c
        }

        function k(a) {
            var b;
            h(a) && (b = {
                target: a.target,
                startX: a.pageX,
                startY: a.pageY,
                timeStamp: a.timeStamp
            }, J(document, O.move, l, b), J(document, O.cancel, m, b))
        }

        function l(a) {
            var b = a.data;
            s(a, b, a, n)
        }

        function m(a) {
            n()
        }

        function n() {
            K(document, O.move, l), K(document, O.cancel, m)
        }

        function o(a) {
            var b, c;
            N[a.target.tagName.toLowerCase()] || (b = a.changedTouches[0], c = {
                target: b.target,
                startX: b.pageX,
                startY: b.pageY,
                timeStamp: a.timeStamp,
                identifier: b.identifier
            }, J(document, P.move + "." + b.identifier, p, c), J(document, P.cancel + "." + b.identifier, q, c))
        }

        function p(a) {
            var b = a.data,
                c = j(a, b);
            c && s(a, b, c, r)
        }

        function q(a) {
            var b = a.data,
                c = i(a.changedTouches, b.identifier);
            c && r(b.identifier)
        }

        function r(a) {
            K(document, "." + a, p), K(document, "." + a, q)
        }

        function s(a, b, c, d) {
            var e = c.pageX - b.startX,
                f = c.pageY - b.startY;
            I * I > e * e + f * f || v(a, b, c, e, f, d)
        }

        function t() {
            return this._handled = d, !1
        }

        function u(a) {
            a._handled()
        }

        function v(a, b, c, d, e, f) {
            var g, h;
            b.target;
            g = a.targetTouches, h = a.timeStamp - b.timeStamp, b.type = "movestart", b.distX = d, b.distY = e, b.deltaX = d, b.deltaY = e, b.pageX = c.pageX, b.pageY = c.pageY, b.velocityX = d / h, b.velocityY = e / h, b.targetTouches = g, b.finger = g ? g.length : 1, b._handled = t, b._preventTouchmoveDefault = function () {
                a.preventDefault()
            }, L(b.target, b), f(b.identifier)
        }

        function w(a) {
            var b = a.data.timer;
            a.data.touch = a, a.data.timeStamp = a.timeStamp, b.kick()
        }

        function x(a) {
            var b = a.data.event,
                c = a.data.timer;
            y(), D(b, c, function () {
                setTimeout(function () {
                    K(b.target, "click", e)
                }, 0)
            })
        }

        function y(a) {
            K(document, O.move, w), K(document, O.end, x)
        }

        function z(a) {
            var b = a.data.event,
                c = a.data.timer,
                d = j(a, b);
            d && (a.preventDefault(), b.targetTouches = a.targetTouches, a.data.touch = d, a.data.timeStamp = a.timeStamp, c.kick())
        }

        function A(a) {
            var b = a.data.event,
                c = a.data.timer,
                d = i(a.changedTouches, b.identifier);
            d && (B(b), D(b, c))
        }

        function B(a) {
            K(document, "." + a.identifier, z), K(document, "." + a.identifier, A)
        }

        function C(a, b, c, d) {
            var e = c - a.timeStamp;
            a.type = "move", a.distX = b.pageX - a.startX, a.distY = b.pageY - a.startY, a.deltaX = b.pageX - a.pageX, a.deltaY = b.pageY - a.pageY, a.velocityX = .3 * a.velocityX + .7 * a.deltaX / e, a.velocityY = .3 * a.velocityY + .7 * a.deltaY / e, a.pageX = b.pageX, a.pageY = b.pageY
        }

        function D(a, b, c) {
            b.end(function () {
                return a.type = "moveend", L(a.target, a), c && c()
            })
        }

        function E(a, b, c) {
            return J(this, "movestart.move", u), !0
        }

        function F(a) {
            return K(this, "dragstart drag", f), K(this, "mousedown touchstart", g), K(this, "movestart", u), !0
        }

        function G(a) {
            "move" !== a.namespace && "moveend" !== a.namespace && (J(this, "dragstart." + a.guid + " drag." + a.guid, f, b, a.selector), J(this, "mousedown." + a.guid, g, b, a.selector))
        }

        function H(a) {
            "move" !== a.namespace && "moveend" !== a.namespace && (K(this, "dragstart." + a.guid + " drag." + a.guid), K(this, "mousedown." + a.guid))
        }
        var I = 6,
            J = a.event.add,
            K = a.event.remove,
            L = function (b, c, d) {
                a.event.trigger(c, d, b)
            },
            M = function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a, b) {
                    return window.setTimeout(function () {
                        a()
                    }, 25)
                }
            }(),

            O = {
                move: "mousemove",
                cancel: "mouseup dragstart",
                end: "mouseup"
            },
            P = {
                move: "touchmove",
                cancel: "touchend",
                end: "touchend"
            };
        a.event.special.movestart = {
            setup: E,
            teardown: F,
            add: G,
            remove: H,
            _default: function (a) {
                function d(b) {
                    C(f, g.touch, g.timeStamp), L(a.target, f)
                }
                var f, g;
                a._handled() && (f = {
                    target: a.target,
                    startX: a.startX,
                    startY: a.startY,
                    pageX: a.pageX,
                    pageY: a.pageY,
                    distX: a.distX,
                    distY: a.distY,
                    deltaX: a.deltaX,
                    deltaY: a.deltaY,
                    velocityX: a.velocityX,
                    velocityY: a.velocityY,
                    timeStamp: a.timeStamp,
                    identifier: a.identifier,
                    targetTouches: a.targetTouches,
                    finger: a.finger
                }, g = {
                    event: f,
                    timer: new c(d),
                    touch: b,
                    timeStamp: b
                }, a.identifier === b ? (J(a.target, "click", e), J(document, O.move, w, g), J(document, O.end, x, g)) : (a._preventTouchmoveDefault(), J(document, P.move + "." + a.identifier, z, g), J(document, P.end + "." + a.identifier, A, g)))
            }
        }, a.event.special.move = {
            setup: function () {
                J(this, "movestart.move", a.noop)
            },
            teardown: function () {
                K(this, "movestart.move", a.noop)
            }
        }, a.event.special.moveend = {
            setup: function () {
                J(this, "movestart.moveend", a.noop)
            },
            teardown: function () {
                K(this, "movestart.moveend", a.noop)
            }
        }, J(document, "mousedown.move", k), J(document, "touchstart.move", o), "function" == typeof Array.prototype.indexOf && ! function (a, b) {
            // for (var c = ["changedTouches", "targetTouches"], d = c.length; d--;) - 1 === a.event.props.indexOf(c[d]) && a.event.props.push(c[d])
        }(a)
    }),
    function (a) {
        "function" == typeof define && define.amd ? define(["js/jquery"], a) : a(jQuery)
    }(function (a, b) {
        function c(a) {
            var b, c, d;
            b = a.target.offsetWidth, c = a.target.offsetHeight, d = {
                distX: a.distX,
                distY: a.distY,
                velocityX: a.velocityX,
                velocityY: a.velocityY,
                finger: a.finger
            }, a.distX > a.distY ? a.distX > -a.distY ? (a.distX / b > h.threshold || a.velocityX * a.distX / b * h.sensitivity > 1) && (d.type = "swiperight", g(a.currentTarget, d)) : (-a.distY / c > h.threshold || a.velocityY * a.distY / b * h.sensitivity > 1) && (d.type = "swipeup", g(a.currentTarget, d)) : a.distX > -a.distY ? (a.distY / c > h.threshold || a.velocityY * a.distY / b * h.sensitivity > 1) && (d.type = "swipedown", g(a.currentTarget, d)) : (-a.distX / b > h.threshold || a.velocityX * a.distX / b * h.sensitivity > 1) && (d.type = "swipeleft", g(a.currentTarget, d))
        }

        function d(b) {
            var c = a.data(b, "event_swipe");
            return c || (c = {
                count: 0
            }, a.data(b, "event_swipe", c)), c
        }
        var e = a.event.add,
            f = a.event.remove,
            g = function (b, c, d) {
                a.event.trigger(c, d, b)
            },
            h = {
                threshold: .4,
                sensitivity: 6
            };
        a.event.special.swipe = a.event.special.swipeleft = a.event.special.swiperight = a.event.special.swipeup = a.event.special.swipedown = {
            setup: function (a, b, f) {
                var a = d(this);
                if (!(a.count++ > 0)) return e(this, "moveend", c), !0
            },
            teardown: function () {
                var a = d(this);
                if (!(--a.count > 0)) return f(this, "moveend", c), !0
            },
            settings: h
        }
    }),
    function (a, b, c) {
        function d(a) {
            var b = {},
                d = /^jQuery\d+$/;
            return c.each(a.attributes, function (a, c) {
                c.specified && !d.test(c.name) && (b[c.name] = c.value)
            }), b
        }

        function e(a, b) {
            var d = this,
                e = c(d);
            if (d.value == e.attr("placeholder") && e.hasClass("placeholder"))
                if (e.data("placeholder-password")) {
                    if (e = e.hide().next().show().attr("id", e.removeAttr("id").data("placeholder-id")), a === !0) return e[0].value = b;
                    e.focus()
                } else d.value = "", e.removeClass("placeholder"), d == g() && d.select()
        }

        function f() {
            var a, b = this,
                f = c(b),
                g = this.id;
            if ("" == b.value) {
                if ("password" == b.type) {
                    if (!f.data("placeholder-textinput")) {
                        try {
                            a = f.clone().attr({
                                type: "text"
                            })
                        } catch (h) {
                            a = c("<input>").attr(c.extend(d(this), {
                                type: "text"
                            }))
                        }
                        a.removeAttr("name").data({
                            "placeholder-password": f,
                            "placeholder-id": g
                        }).bind("focus.placeholder", e), f.data({
                            "placeholder-textinput": a,
                            "placeholder-id": g
                        }).before(a)
                    }
                    f = f.removeAttr("id").hide().prev().attr("id", g).show()
                }
                f.addClass("placeholder"), f[0].value = f.attr("placeholder")
            } else f.removeClass("placeholder")
        }

        function g() {
            try {
                return b.activeElement
            } catch (a) {}
        }
        var h, i, j = "[object OperaMini]" == Object.prototype.toString.call(a.operamini),
            k = "placeholder" in b.createElement("input") && !j,
            l = "placeholder" in b.createElement("textarea") && !j,
            m = c.fn,
            n = c.valHooks,
            o = c.propHooks;
        k && l ? (i = m.placeholder = function () {
            return this
        }, i.input = i.textarea = !0) : (i = m.placeholder = function () {
            var a = this;
            return a.filter((k ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": e,
                "blur.placeholder": f
            }).data("placeholder-enabled", !0).trigger("blur.placeholder"), a
        }, i.input = k, i.textarea = l, h = {
            get: function (a) {
                var b = c(a),
                    d = b.data("placeholder-password");
                return d ? d[0].value : b.data("placeholder-enabled") && b.hasClass("placeholder") ? "" : a.value
            },
            set: function (a, b) {
                var d = c(a),
                    h = d.data("placeholder-password");
                return h ? h[0].value = b : d.data("placeholder-enabled") ? ("" == b ? (a.value = b, a != g() && f.call(a)) : d.hasClass("placeholder") ? e.call(a, !0, b) || (a.value = b) : a.value = b, d) : a.value = b
            }
        }, k || (n.input = h, o.value = h), l || (n.textarea = h, o.value = h), c(function () {
            c(b).delegate("form", "submit.placeholder", function () {
                var a = c(".placeholder", this).each(e);
                setTimeout(function () {
                    a.each(f)
                }, 10)
            })
        }), c(a).bind("beforeunload.placeholder", function () {
            c(".placeholder").each(function () {
                this.value = ""
            })
        }))
    }(this, document, jQuery),
    function (a, b, c) {
        var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = [].slice,
            z = [].indexOf || function (a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (b in this && this[b] === a) return b;
                return -1
            };
        c.payment = {}, c.payment.fn = {}, c.fn.payment = function () {
            var a, b;
            return b = arguments[0], a = 2 <= arguments.length ? y.call(arguments, 1) : [], c.payment.fn[b].apply(this, a)
        }, g = /(\d{1,4})/g, c.payment.cards = f = [{
            type: "visaelectron",
            pattern: /^4(026|17500|405|508|844|91[37])/,
            format: g,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "maestro",
            pattern: /^(5(018|0[23]|[68])|6(39|7))/,
            format: g,
            length: [12, 13, 14, 15, 16, 17, 18, 19],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "forbrugsforeningen",
            pattern: /^600/,
            format: g,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "dankort",
            pattern: /^5019/,
            format: g,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "visa",
            pattern: /^4/,
            format: g,
            length: [13, 16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "mastercard",
            pattern: /^5[0-5]/,
            format: g,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "amex",
            pattern: /^3[47]/,
            format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
            length: [15],
            cvcLength: [3, 4],
            luhn: !0
        }, {
            type: "dinersclub",
            pattern: /^3[0689]/,
            format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
            length: [14],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "discover",
            pattern: /^6([045]|22)/,
            format: g,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "unionpay",
            pattern: /^(62|88)/,
            format: g,
            length: [16, 17, 18, 19],
            cvcLength: [3],
            luhn: !1
        }, {
            type: "jcb",
            pattern: /^35/,
            format: g,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }], d = function (a) {
            var b, c, d;
            for (a = (a + "").replace(/\D/g, ""), c = 0, d = f.length; d > c; c++)
                if (b = f[c], b.pattern.test(a)) return b
        }, e = function (a) {
            var b, c, d;
            for (c = 0, d = f.length; d > c; c++)
                if (b = f[c], b.type === a) return b
        }, o = function (a) {
            var b, c, d, e, f, g;
            for (d = !0, e = 0, c = (a + "").split("").reverse(), f = 0, g = c.length; g > f; f++) b = c[f], b = parseInt(b, 10), (d = !d) && (b *= 2), b > 9 && (b -= 9), e += b;
            return e % 10 === 0
        }, n = function (a) {
            var c;
            return null != a.prop("selectionStart") && a.prop("selectionStart") !== a.prop("selectionEnd") ? !0 : !(null == ("undefined" != typeof b && null !== b && null != (c = b.selection) ? c.createRange : void 0) || !b.selection.createRange().text)
        }, s = function (a) {
            return setTimeout(function () {
                var b, d;
                return b = c(a.currentTarget), d = b.val(), d = d.replace(/\D/g, ""), b.val(d)
            })
        }, q = function (a) {
            return setTimeout(function () {
                var b, d;
                return b = c(a.currentTarget), d = b.val(), d = c.payment.formatCardNumber(d), b.val(d)
            })
        }, j = function (a) {
            var b, e, f, g, h, i, j;
            return f = String.fromCharCode(a.which), !/^\d+$/.test(f) || (b = c(a.currentTarget), j = b.val(), e = d(j + f), g = (j.replace(/\D/g, "") + f).length, i = 16, e && (i = e.length[e.length.length - 1]), g >= i || null != b.prop("selectionStart") && b.prop("selectionStart") !== j.length) ? void 0 : (h = e && "amex" === e.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/, h.test(j) ? (a.preventDefault(), setTimeout(function () {
                return b.val(j + " " + f)
            })) : h.test(j + f) ? (a.preventDefault(), setTimeout(function () {
                return b.val(j + f + " ")
            })) : void 0)
        }, h = function (a) {
            var b, d;
            return b = c(a.currentTarget), d = b.val(), 8 !== a.which || null != b.prop("selectionStart") && b.prop("selectionStart") !== d.length ? void 0 : /\d\s$/.test(d) ? (a.preventDefault(), setTimeout(function () {
                return b.val(d.replace(/\d\s$/, ""))
            })) : /\s\d?$/.test(d) ? (a.preventDefault(), setTimeout(function () {
                return b.val(d.replace(/\d$/, ""))
            })) : void 0
        }, r = function (a) {
            return setTimeout(function () {
                var b, d;
                return b = c(a.currentTarget), d = b.val(), d = c.payment.formatExpiry(d), b.val(d)
            })
        }, k = function (a) {
            var b, d, e;
            return d = String.fromCharCode(a.which), /^\d+$/.test(d) ? (b = c(a.currentTarget), e = b.val() + d, /^\d$/.test(e) && "0" !== e && "1" !== e ? (a.preventDefault(), setTimeout(function () {
                return b.val("0" + e + " / ")
            })) : /^\d\d$/.test(e) ? (a.preventDefault(), setTimeout(function () {
                return b.val("" + e + " / ")
            })) : void 0) : void 0
        }, l = function (a) {
            var b, d, e;
            return d = String.fromCharCode(a.which), /^\d+$/.test(d) ? (b = c(a.currentTarget), e = b.val(), /^\d\d$/.test(e) ? b.val("" + e + " / ") : void 0) : void 0
        }, m = function (a) {
            var b, d, e;
            return e = String.fromCharCode(a.which), "/" === e || " " === e ? (b = c(a.currentTarget), d = b.val(), /^\d$/.test(d) && "0" !== d ? b.val("0" + d + " / ") : void 0) : void 0
        }, i = function (a) {
            var b, d;
            return b = c(a.currentTarget), d = b.val(), 8 !== a.which || null != b.prop("selectionStart") && b.prop("selectionStart") !== d.length ? void 0 : /\d\s\/\s$/.test(d) ? (a.preventDefault(), setTimeout(function () {
                return b.val(d.replace(/\d\s\/\s$/, ""))
            })) : void 0
        }, p = function (a) {
            return setTimeout(function () {
                var b, d;
                return b = c(a.currentTarget), d = b.val(), d = d.replace(/\D/g, "").slice(0, 4), b.val(d)
            })
        }, w = function (a) {
            var b;
            return a.metaKey || a.ctrlKey ? !0 : 32 === a.which ? !1 : 0 === a.which ? !0 : a.which < 33 ? !0 : (b = String.fromCharCode(a.which), !!/[\d\s]/.test(b))
        }, u = function (a) {
            var b, e, f, g;
            return b = c(a.currentTarget), f = String.fromCharCode(a.which), /^\d+$/.test(f) && !n(b) ? (g = (b.val() + f).replace(/\D/g, ""), e = d(g), e ? g.length <= e.length[e.length.length - 1] : g.length <= 16) : void 0
        }, v = function (a) {
            var b, d, e;
            return b = c(a.currentTarget), d = String.fromCharCode(a.which), /^\d+$/.test(d) && !n(b) ? (e = b.val() + d, e = e.replace(/\D/g, ""), e.length > 6 ? !1 : void 0) : void 0
        }, t = function (a) {
            var b, d, e;
            return b = c(a.currentTarget), d = String.fromCharCode(a.which), /^\d+$/.test(d) && !n(b) ? (e = b.val() + d, e.length <= 4) : void 0
        }, x = function (a) {
            var b, d, e, g, h;
            return b = c(a.currentTarget), h = b.val(), g = c.payment.cardType(h) || "unknown", b.hasClass(g) ? void 0 : (d = function () {
                var a, b, c;
                for (c = [], a = 0, b = f.length; b > a; a++) e = f[a], c.push(e.type);
                return c
            }(), b.removeClass("unknown"), b.removeClass(d.join(" ")), b.addClass(g), b.toggleClass("identified", "unknown" !== g), b.trigger("payment.cardType", g))
        }, c.payment.fn.formatCardCVC = function () {
            return this.on("keypress", w), this.on("keypress", t), this.on("paste", p), this.on("change", p), this.on("input", p), this
        }, c.payment.fn.formatCardExpiry = function () {
            return this.on("keypress", w), this.on("keypress", v), this.on("keypress", k), this.on("keypress", m), this.on("keypress", l), this.on("keydown", i), this.on("change", r), this.on("input", r), this
        }, c.payment.fn.formatCardNumber = function () {
            return this.on("keypress", w), this.on("keypress", u), this.on("keypress", j), this.on("keydown", h), this.on("keyup", x), this.on("paste", q), this.on("change", q), this.on("input", q), this.on("input", x), this
        }, c.payment.fn.restrictNumeric = function () {
            return this.on("keypress", w), this.on("paste", s), this.on("change", s), this.on("input", s), this
        }, c.payment.fn.cardExpiryVal = function () {
            return c.payment.cardExpiryVal(c(this).val())
        }, c.payment.cardExpiryVal = function (a) {
            var b, c, d, e;
            return a = a.replace(/\s/g, ""), e = a.split("/", 2), b = e[0], d = e[1], 2 === (null != d ? d.length : void 0) && /^\d+$/.test(d) && (c = (new Date).getFullYear(), c = c.toString().slice(0, 2), d = c + d), b = parseInt(b, 10), d = parseInt(d, 10), {
                month: b,
                year: d
            }
        }, c.payment.validateCardNumber = function (a) {
            var b, c;
            return a = (a + "").replace(/\s+|-/g, ""), /^\d+$/.test(a) ? (b = d(a), b ? (c = a.length, z.call(b.length, c) >= 0 && (b.luhn === !1 || o(a))) : !1) : !1
        }, c.payment.validateCardExpiry = function (a, b) {
            var d, e, f;
            return "object" == typeof a && "month" in a && (f = a, a = f.month, b = f.year), a && b ? (a = c.trim(a), b = c.trim(b), /^\d+$/.test(a) && /^\d+$/.test(b) && a >= 1 && 12 >= a ? (2 === b.length && (b = 70 > b ? "20" + b : "19" + b), 4 !== b.length ? !1 : (e = new Date(b, a), d = new Date, e.setMonth(e.getMonth() - 1), e.setMonth(e.getMonth() + 1, 1), e > d)) : !1) : !1
        }, c.payment.validateCardCVC = function (a, b) {
            var d, f;
            return a = c.trim(a), /^\d+$/.test(a) ? (d = e(b), null != d ? (f = a.length, z.call(d.cvcLength, f) >= 0) : a.length >= 3 && a.length <= 4) : !1
        }, c.payment.cardType = function (a) {
            var b;
            return a ? (null != (b = d(a)) ? b.type : void 0) || null : null
        }, c.payment.formatCardNumber = function (a) {
            var b, e, f, g;
            return a = a.replace(/\D/g, ""), (b = d(a)) ? (f = b.length[b.length.length - 1], a = a.slice(0, f), b.format.global ? null != (g = a.match(b.format)) ? g.join(" ") : void 0 : (e = b.format.exec(a), null != e ? (e.shift(), e = c.grep(e, function (a) {
                return a
            }), e.join(" ")) : void 0)) : a
        }, c.payment.formatExpiry = function (a) {
            var b, c, d, e;
            return (c = a.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/)) ? (b = c[1] || "", d = c[2] || "", e = c[3] || "", e.length > 0 ? d = " / " : " /" === d ? (b = b.substring(0, 1), d = "") : 2 === b.length || d.length > 0 ? d = " / " : 1 === b.length && "0" !== b && "1" !== b && (b = "0" + b, d = " / "), b + d + e) : ""
        }
    }(this, document, jQuery),
    function (a) {
        a.fn.serializeObject = function () {
            var b = this,
                c = {},
                d = {},
                e = {
                    validate: /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
                    key: /[a-zA-Z0-9_]+|(?=\[\])/g,
                    push: /^$/,
                    fixed: /^\d+$/,
                    named: /^[a-zA-Z0-9_]+$/
                };
            return this.build = function (a, b, c) {
                return a[b] = c, a
            }, this.push_counter = function (a) {
                return void 0 === d[a] && (d[a] = 0), d[a]++
            }, a.each(a(this).serializeArray(), function () {
                if (e.validate.test(this.name)) {
                    for (var d, f = this.name.match(e.key), g = this.value, h = this.name; void 0 !== (d = f.pop());) h = h.replace(new RegExp("\\[" + d + "\\]$"), ""), d.match(e.push) ? g = b.build([], b.push_counter(h), g) : d.match(e.fixed) ? g = b.build([], d, g) : d.match(e.named) && (g = b.build({}, d, g));
                    c = a.extend(!0, c, g)
                }
            }), c
        }
    }(jQuery),
    function (a) {
        function b(a, b, c) {
            switch (arguments.length) {
                case 2:
                    return null != a ? a : b;
                case 3:
                    return null != a ? a : null != b ? b : c;
                default:
                    throw new Error("Implement me")
            }
        }

        function c(a, b) {
            return za.call(a, b)
        }

        function d() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function e(a) {
            ta.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a)
        }

        function f(a, b) {
            var c = !0;
            return m(function () {
                return c && (e(a), c = !1), b.apply(this, arguments)
            }, b)
        }

        function g(a, b) {
            qb[a] || (e(b), qb[a] = !0)
        }

        function h(a, b) {
            return function (c) {
                return p(a.call(this, c), b)
            }
        }

        function i(a, b) {
            return function (c) {
                return this.localeData().ordinal(a.call(this, c), b)
            }
        }

        function j() {}

        function k(a, b) {
            b !== !1 && F(a), n(this, a), this._d = new Date(+a._d)
        }

        function l(a) {
            var b = y(a),
                c = b.year || 0,
                d = b.quarter || 0,
                e = b.month || 0,
                f = b.week || 0,
                g = b.day || 0,
                h = b.hour || 0,
                i = b.minute || 0,
                j = b.second || 0,
                k = b.millisecond || 0;
            this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = ta.localeData(), this._bubble()
        }

        function m(a, b) {
            for (var d in b) c(b, d) && (a[d] = b[d]);
            return c(b, "toString") && (a.toString = b.toString), c(b, "valueOf") && (a.valueOf = b.valueOf), a
        }

        function n(a, b) {
            var c, d, e;
            if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = b._pf), "undefined" != typeof b._locale && (a._locale = b._locale), Ia.length > 0)
                for (c in Ia) d = Ia[c], e = b[d], "undefined" != typeof e && (a[d] = e);
            return a
        }

        function o(a) {
            return 0 > a ? Math.ceil(a) : Math.floor(a)
        }

        function p(a, b, c) {
            for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;) d = "0" + d;
            return (e ? c ? "+" : "" : "-") + d
        }

        function q(a, b) {
            var c = {
                milliseconds: 0,
                months: 0
            };
            return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
        }

        function r(a, b) {
            var c;
            return b = K(b, a), a.isBefore(b) ? c = q(a, b) : (c = q(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c
        }

        function s(a, b) {
            return function (c, d) {
                var e, f;
                return null === d || isNaN(+d) || (g(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = ta.duration(c, d), t(this, e, a), this
            }
        }

        function t(a, b, c, d) {
            var e = b._milliseconds,
                f = b._days,
                g = b._months;
            d = null == d ? !0 : d, e && a._d.setTime(+a._d + e * c), f && na(a, "Date", ma(a, "Date") + f * c), g && la(a, ma(a, "Month") + g * c), d && ta.updateOffset(a, f || g)
        }

        function u(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }

        function v(a) {
            return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
        }

        function w(a, b, c) {
            var d, e = Math.min(a.length, b.length),
                f = Math.abs(a.length - b.length),
                g = 0;
            for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && A(a[d]) !== A(b[d])) && g++;
            return g + f
        }

        function x(a) {
            if (a) {
                var b = a.toLowerCase().replace(/(.)s$/, "$1");
                a = jb[a] || kb[b] || b
            }
            return a
        }

        function y(a) {
            var b, d, e = {};
            for (d in a) c(a, d) && (b = x(d), b && (e[b] = a[d]));
            return e
        }

        function z(b) {
            var c, d;
            if (0 === b.indexOf("week")) c = 7, d = "day";
            else {
                if (0 !== b.indexOf("month")) return;
                c = 12, d = "month"
            }
            ta[b] = function (e, f) {
                var g, h, i = ta._locale[b],
                    j = [];
                if ("number" == typeof e && (f = e, e = a), h = function (a) {
                    var b = ta().utc().set(d, a);
                    return i.call(ta._locale, b, e || "")
                }, null != f) return h(f);
                for (g = 0; c > g; g++) j.push(h(g));
                return j
            }
        }

        function A(a) {
            var b = +a,
                c = 0;
            return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
        }

        function B(a, b) {
            return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
        }

        function C(a, b, c) {
            return ha(ta([a, 11, 31 + b - c]), b, c).week
        }

        function D(a) {
            return E(a) ? 366 : 365
        }

        function E(a) {
            return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
        }

        function F(a) {
            var b;
            a._a && -2 === a._pf.overflow && (b = a._a[Ba] < 0 || a._a[Ba] > 11 ? Ba : a._a[Ca] < 1 || a._a[Ca] > B(a._a[Aa], a._a[Ba]) ? Ca : a._a[Da] < 0 || a._a[Da] > 23 ? Da : a._a[Ea] < 0 || a._a[Ea] > 59 ? Ea : a._a[Fa] < 0 || a._a[Fa] > 59 ? Fa : a._a[Ga] < 0 || a._a[Ga] > 999 ? Ga : -1, a._pf._overflowDayOfYear && (Aa > b || b > Ca) && (b = Ca), a._pf.overflow = b)
        }

        function G(a) {
            return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)), a._isValid
        }

        function H(a) {
            return a ? a.toLowerCase().replace("_", "-") : a
        }

        function I(a) {
            for (var b, c, d, e, f = 0; f < a.length;) {
                for (e = H(a[f]).split("-"), b = e.length, c = H(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                    if (d = J(e.slice(0, b).join("-"))) return d;
                    if (c && c.length >= b && w(e, c, !0) >= b - 1) break;
                    b--
                }
                f++
            }
            return null
        }

        function J(a) {
            var b = null;
            if (!Ha[a] && Ja) try {
                b = ta.locale(), require("./locale/" + a), ta.locale(b)
            } catch (c) {}
            return Ha[a]
        }

        function K(a, b) {
            return b._isUTC ? ta(a).zone(b._offset || 0) : ta(a).local()
        }

        function L(a) {
            return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
        }

        function M(a) {
            var b, c, d = a.match(Na);
            for (b = 0, c = d.length; c > b; b++) pb[d[b]] ? d[b] = pb[d[b]] : d[b] = L(d[b]);
            return function (e) {
                var f = "";
                for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
                return f
            }
        }

        function N(a, b) {
            return a.isValid() ? (b = O(b, a.localeData()), lb[b] || (lb[b] = M(b)), lb[b](a)) : a.localeData().invalidDate()
        }

        function O(a, b) {
            function c(a) {
                return b.longDateFormat(a) || a
            }
            var d = 5;
            for (Oa.lastIndex = 0; d >= 0 && Oa.test(a);) a = a.replace(Oa, c), Oa.lastIndex = 0, d -= 1;
            return a
        }

        function P(a, b) {
            var c, d = b._strict;
            switch (a) {
                case "Q":
                    return Za;
                case "DDDD":
                    return _a;
                case "YYYY":
                case "GGGG":
                case "gggg":
                    return d ? ab : Ra;
                case "Y":
                case "G":
                case "g":
                    return cb;
                case "YYYYYY":
                case "YYYYY":
                case "GGGGG":
                case "ggggg":
                    return d ? bb : Sa;
                case "S":
                    if (d) return Za;
                case "SS":
                    if (d) return $a;
                case "SSS":
                    if (d) return _a;
                case "DDD":
                    return Qa;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                    return Ua;
                case "a":
                case "A":
                    return b._locale._meridiemParse;
                case "X":
                    return Xa;
                case "Z":
                case "ZZ":
                    return Va;
                case "T":
                    return Wa;
                case "SSSS":
                    return Ta;
                case "MM":
                case "DD":
                case "YY":
                case "GG":
                case "gg":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "ww":
                case "WW":
                    return d ? $a : Pa;
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                case "w":
                case "W":
                case "e":
                case "E":
                    return Pa;
                case "Do":
                    return Ya;
                default:
                    return c = new RegExp(Y(X(a.replace("\\", "")), "i"))
            }
        }

        function Q(a) {
            a = a || "";
            var b = a.match(Va) || [],
                c = b[b.length - 1] || [],
                d = (c + "").match(hb) || ["-", 0, 0],
                e = +(60 * d[1]) + A(d[2]);
            return "+" === d[0] ? -e : e
        }

        function R(a, b, c) {
            var d, e = c._a;
            switch (a) {
                case "Q":
                    null != b && (e[Ba] = 3 * (A(b) - 1));
                    break;
                case "M":
                case "MM":
                    null != b && (e[Ba] = A(b) - 1);
                    break;
                case "MMM":
                case "MMMM":
                    d = c._locale.monthsParse(b), null != d ? e[Ba] = d : c._pf.invalidMonth = b;
                    break;
                case "D":
                case "DD":
                    null != b && (e[Ca] = A(b));
                    break;
                case "Do":
                    null != b && (e[Ca] = A(parseInt(b, 10)));
                    break;
                case "DDD":
                case "DDDD":
                    null != b && (c._dayOfYear = A(b));
                    break;
                case "YY":
                    e[Aa] = ta.parseTwoDigitYear(b);
                    break;
                case "YYYY":
                case "YYYYY":
                case "YYYYYY":
                    e[Aa] = A(b);
                    break;
                case "a":
                case "A":
                    c._isPm = c._locale.isPM(b);
                    break;
                case "H":
                case "HH":
                case "h":
                case "hh":
                    e[Da] = A(b);
                    break;
                case "m":
                case "mm":
                    e[Ea] = A(b);
                    break;
                case "s":
                case "ss":
                    e[Fa] = A(b);
                    break;
                case "S":
                case "SS":
                case "SSS":
                case "SSSS":
                    e[Ga] = A(1e3 * ("0." + b));
                    break;
                case "X":
                    c._d = new Date(1e3 * parseFloat(b));
                    break;
                case "Z":
                case "ZZ":
                    c._useUTC = !0, c._tzm = Q(b);
                    break;
                case "dd":
                case "ddd":
                case "dddd":
                    d = c._locale.weekdaysParse(b), null != d ? (c._w = c._w || {}, c._w.d = d) : c._pf.invalidWeekday = b;
                    break;
                case "w":
                case "ww":
                case "W":
                case "WW":
                case "d":
                case "e":
                case "E":
                    a = a.substr(0, 1);
                case "gggg":
                case "GGGG":
                case "GGGGG":
                    a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = A(b));
                    break;
                case "gg":
                case "GG":
                    c._w = c._w || {}, c._w[a] = ta.parseTwoDigitYear(b)
            }
        }

        function S(a) {
            var c, d, e, f, g, h, i;
            c = a._w, null != c.GG || null != c.W || null != c.E ? (g = 1, h = 4, d = b(c.GG, a._a[Aa], ha(ta(), 1, 4).year), e = b(c.W, 1), f = b(c.E, 1)) : (g = a._locale._week.dow, h = a._locale._week.doy, d = b(c.gg, a._a[Aa], ha(ta(), g, h).year), e = b(c.w, 1), null != c.d ? (f = c.d, g > f && ++e) : f = null != c.e ? c.e + g : g), i = ia(d, e, f, h, g), a._a[Aa] = i.year, a._dayOfYear = i.dayOfYear
        }

        function T(a) {
            var c, d, e, f, g = [];
            if (!a._d) {
                for (e = V(a), a._w && null == a._a[Ca] && null == a._a[Ba] && S(a), a._dayOfYear && (f = b(a._a[Aa], e[Aa]), a._dayOfYear > D(f) && (a._pf._overflowDayOfYear = !0), d = da(f, 0, a._dayOfYear), a._a[Ba] = d.getUTCMonth(), a._a[Ca] = d.getUTCDate()), c = 0; 3 > c && null == a._a[c]; ++c) a._a[c] = g[c] = e[c];
                for (; 7 > c; c++) a._a[c] = g[c] = null == a._a[c] ? 2 === c ? 1 : 0 : a._a[c];
                a._d = (a._useUTC ? da : ca).apply(null, g), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() + a._tzm)
            }
        }

        function U(a) {
            var b;
            a._d || (b = y(a._i), a._a = [b.year, b.month, b.day, b.hour, b.minute, b.second, b.millisecond], T(a))
        }

        function V(a) {
            var b = new Date;
            return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
        }

        function W(a) {
            if (a._f === ta.ISO_8601) return void $(a);
            a._a = [], a._pf.empty = !0;
            var b, c, d, e, f, g = "" + a._i,
                h = g.length,
                i = 0;
            for (d = O(a._f, a._locale).match(Na) || [], b = 0; b < d.length; b++) e = d[b], c = (g.match(P(e, a)) || [])[0], c && (f = g.substr(0, g.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), g = g.slice(g.indexOf(c) + c.length), i += c.length), pb[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), R(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e);
            a._pf.charsLeftOver = h - i, g.length > 0 && a._pf.unusedInput.push(g), a._isPm && a._a[Da] < 12 && (a._a[Da] += 12), a._isPm === !1 && 12 === a._a[Da] && (a._a[Da] = 0), T(a), F(a)
        }

        function X(a) {
            return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
                return b || c || d || e
            })
        }

        function Y(a) {
            return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function Z(a) {
            var b, c, e, f, g;
            if (0 === a._f.length) return a._pf.invalidFormat = !0, void(a._d = new Date(NaN));
            for (f = 0; f < a._f.length; f++) g = 0, b = n({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._pf = d(), b._f = a._f[f], W(b), G(b) && (g += b._pf.charsLeftOver, g += 10 * b._pf.unusedTokens.length, b._pf.score = g, (null == e || e > g) && (e = g, c = b));
            m(a, c || b)
        }

        function $(a) {
            var b, c, d = a._i,
                e = db.exec(d);
            if (e) {
                for (a._pf.iso = !0, b = 0, c = fb.length; c > b; b++)
                    if (fb[b][1].exec(d)) {
                        a._f = fb[b][0] + (e[6] || " ");
                        break
                    } for (b = 0, c = gb.length; c > b; b++)
                    if (gb[b][1].exec(d)) {
                        a._f += gb[b][0];
                        break
                    } d.match(Va) && (a._f += "Z"), W(a)
            } else a._isValid = !1
        }

        function _(a) {
            $(a), a._isValid === !1 && (delete a._isValid, ta.createFromInputFallback(a))
        }

        function aa(a, b) {
            var c, d = [];
            for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
            return d
        }

        function ba(b) {
            var c, d = b._i;
            d === a ? b._d = new Date : v(d) ? b._d = new Date(+d) : null !== (c = Ka.exec(d)) ? b._d = new Date(+c[1]) : "string" == typeof d ? _(b) : u(d) ? (b._a = aa(d.slice(0), function (a) {
                return parseInt(a, 10)
            }), T(b)) : "object" == typeof d ? U(b) : "number" == typeof d ? b._d = new Date(d) : ta.createFromInputFallback(b)
        }

        function ca(a, b, c, d, e, f, g) {
            var h = new Date(a, b, c, d, e, f, g);
            return 1970 > a && h.setFullYear(a), h
        }

        function da(a) {
            var b = new Date(Date.UTC.apply(null, arguments));
            return 1970 > a && b.setUTCFullYear(a), b
        }

        function ea(a, b) {
            if ("string" == typeof a)
                if (isNaN(a)) {
                    if (a = b.weekdaysParse(a), "number" != typeof a) return null
                } else a = parseInt(a, 10);
            return a
        }

        function fa(a, b, c, d, e) {
            return e.relativeTime(b || 1, !!c, a, d)
        }

        function ga(a, b, c) {
            var d = ta.duration(a).abs(),
                e = ya(d.as("s")),
                f = ya(d.as("m")),
                g = ya(d.as("h")),
                h = ya(d.as("d")),
                i = ya(d.as("M")),
                j = ya(d.as("y")),
                k = e < mb.s && ["s", e] || 1 === f && ["m"] || f < mb.m && ["mm", f] || 1 === g && ["h"] || g < mb.h && ["hh", g] || 1 === h && ["d"] || h < mb.d && ["dd", h] || 1 === i && ["M"] || i < mb.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
            return k[2] = b, k[3] = +a > 0, k[4] = c, fa.apply({}, k)
        }

        function ha(a, b, c) {
            var d, e = c - b,
                f = c - a.day();
            return f > e && (f -= 7), e - 7 > f && (f += 7), d = ta(a).add(f, "d"), {
                week: Math.ceil(d.dayOfYear() / 7),
                year: d.year()
            }
        }

        function ia(a, b, c, d, e) {
            var f, g, h = da(a, 0, 1).getUTCDay();
            return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
                year: g > 0 ? a : a - 1,
                dayOfYear: g > 0 ? g : D(a - 1) + g
            }
        }

        function ja(b) {
            var c = b._i,
                d = b._f;
            return b._locale = b._locale || ta.localeData(b._l), null === c || d === a && "" === c ? ta.invalid({
                nullInput: !0
            }) : ("string" == typeof c && (b._i = c = b._locale.preparse(c)), ta.isMoment(c) ? new k(c, !0) : (d ? u(d) ? Z(b) : W(b) : ba(b), new k(b)))
        }

        function ka(a, b) {
            var c, d;
            if (1 === b.length && u(b[0]) && (b = b[0]), !b.length) return ta();
            for (c = b[0], d = 1; d < b.length; ++d) b[d][a](c) && (c = b[d]);
            return c
        }

        function la(a, b) {
            var c;
            return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), B(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
        }

        function ma(a, b) {
            return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
        }

        function na(a, b, c) {
            return "Month" === b ? la(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
        }

        function oa(a, b) {
            return function (c) {
                return null != c ? (na(this, a, c), ta.updateOffset(this, b), this) : ma(this, a)
            }
        }

        function pa(a) {
            return 400 * a / 146097
        }

        function qa(a) {
            return 146097 * a / 400
        }

        function ra(a) {
            ta.duration.fn[a] = function () {
                return this._data[a]
            }
        }

        function sa(a) {
            "undefined" == typeof ender && (ua = xa.moment, a ? xa.moment = f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", ta) : xa.moment = ta)
        }
        for (var ta, ua, va, wa = "2.8.3", xa = "undefined" != typeof global ? global : this, ya = Math.round, za = Object.prototype.hasOwnProperty, Aa = 0, Ba = 1, Ca = 2, Da = 3, Ea = 4, Fa = 5, Ga = 6, Ha = {}, Ia = [], Ja = "undefined" != typeof module && module.exports, Ka = /^\/?Date\((\-?\d+)/i, La = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Ma = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Na = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Oa = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, Pa = /\d\d?/, Qa = /\d{1,3}/, Ra = /\d{1,4}/, Sa = /[+\-]?\d{1,6}/, Ta = /\d+/, Ua = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Va = /Z|[\+\-]\d\d:?\d\d/gi, Wa = /T/i, Xa = /[\+\-]?\d+(\.\d{1,3})?/, Ya = /\d{1,2}/, Za = /\d/, $a = /\d\d/, _a = /\d{3}/, ab = /\d{4}/, bb = /[+-]?\d{6}/, cb = /[+-]?\d+/, db = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, eb = "YYYY-MM-DDTHH:mm:ssZ", fb = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
            ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
            ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d{2}/],
            ["YYYY-DDD", /\d{4}-\d{3}/]
        ], gb = [
            ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ], hb = /([\+\-]|\d\d)/gi, ib = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        }), jb = {
            ms: "millisecond",
            s: "second",
            m: "minute",
            h: "hour",
            d: "day",
            D: "date",
            w: "week",
            W: "isoWeek",
            M: "month",
            Q: "quarter",
            y: "year",
            DDD: "dayOfYear",
            e: "weekday",
            E: "isoWeekday",
            gg: "weekYear",
            GG: "isoWeekYear"
        }, kb = {
            dayofyear: "dayOfYear",
            isoweekday: "isoWeekday",
            isoweek: "isoWeek",
            weekyear: "weekYear",
            isoweekyear: "isoWeekYear"
        }, lb = {}, mb = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        }, nb = "DDD w W M D d".split(" "), ob = "M D H h m s w W".split(" "), pb = {
            M: function () {
                return this.month() + 1
            },
            MMM: function (a) {
                return this.localeData().monthsShort(this, a)
            },
            MMMM: function (a) {
                return this.localeData().months(this, a)
            },
            D: function () {
                return this.date()
            },
            DDD: function () {
                return this.dayOfYear()
            },
            d: function () {
                return this.day()
            },
            dd: function (a) {
                return this.localeData().weekdaysMin(this, a)
            },
            ddd: function (a) {
                return this.localeData().weekdaysShort(this, a)
            },
            dddd: function (a) {
                return this.localeData().weekdays(this, a)
            },
            w: function () {
                return this.week()
            },
            W: function () {
                return this.isoWeek()
            },
            YY: function () {
                return p(this.year() % 100, 2)
            },
            YYYY: function () {
                return p(this.year(), 4)
            },
            YYYYY: function () {
                return p(this.year(), 5)
            },
            YYYYYY: function () {
                var a = this.year(),
                    b = a >= 0 ? "+" : "-";
                return b + p(Math.abs(a), 6)
            },
            gg: function () {
                return p(this.weekYear() % 100, 2)
            },
            gggg: function () {
                return p(this.weekYear(), 4)
            },
            ggggg: function () {
                return p(this.weekYear(), 5)
            },
            GG: function () {
                return p(this.isoWeekYear() % 100, 2)
            },
            GGGG: function () {
                return p(this.isoWeekYear(), 4)
            },
            GGGGG: function () {
                return p(this.isoWeekYear(), 5)
            },
            e: function () {
                return this.weekday()
            },
            E: function () {
                return this.isoWeekday()
            },
            a: function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), !0)
            },
            A: function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), !1)
            },
            H: function () {
                return this.hours()
            },
            h: function () {
                return this.hours() % 12 || 12
            },
            m: function () {
                return this.minutes()
            },
            s: function () {
                return this.seconds()
            },
            S: function () {
                return A(this.milliseconds() / 100)
            },
            SS: function () {
                return p(A(this.milliseconds() / 10), 2)
            },
            SSS: function () {
                return p(this.milliseconds(), 3)
            },
            SSSS: function () {
                return p(this.milliseconds(), 3)
            },
            Z: function () {
                var a = -this.zone(),
                    b = "+";
                return 0 > a && (a = -a, b = "-"), b + p(A(a / 60), 2) + ":" + p(A(a) % 60, 2)
            },
            ZZ: function () {
                var a = -this.zone(),
                    b = "+";
                return 0 > a && (a = -a, b = "-"), b + p(A(a / 60), 2) + p(A(a) % 60, 2)
            },
            z: function () {
                return this.zoneAbbr()
            },
            zz: function () {
                return this.zoneName()
            },
            X: function () {
                return this.unix()
            },
            Q: function () {
                return this.quarter()
            }
        }, qb = {}, rb = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; nb.length;) va = nb.pop(), pb[va + "o"] = i(pb[va], va);
        for (; ob.length;) va = ob.pop(), pb[va + va] = h(pb[va], 2);
        pb.DDDD = h(pb.DDD, 3), m(j.prototype, {
            set: function (a) {
                var b, c;
                for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b
            },
            _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            months: function (a) {
                return this._months[a.month()]
            },
            _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            monthsShort: function (a) {
                return this._monthsShort[a.month()]
            },
            monthsParse: function (a) {
                var b, c, d;
                for (this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++)
                    if (this._monthsParse[b] || (c = ta.utc([2e3, b]), d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), this._monthsParse[b].test(a)) return b
            },
            _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdays: function (a) {
                return this._weekdays[a.day()]
            },
            _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysShort: function (a) {
                return this._weekdaysShort[a.day()]
            },
            _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            weekdaysMin: function (a) {
                return this._weekdaysMin[a.day()]
            },
            weekdaysParse: function (a) {
                var b, c, d;
                for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
                    if (this._weekdaysParse[b] || (c = ta([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
            },
            _longDateFormat: {
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY LT",
                LLLL: "dddd, MMMM D, YYYY LT"
            },
            longDateFormat: function (a) {
                var b = this._longDateFormat[a];
                return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (a) {
                    return a.slice(1)
                }), this._longDateFormat[a] = b), b
            },
            isPM: function (a) {
                return "p" === (a + "").toLowerCase().charAt(0)
            },
            _meridiemParse: /[ap]\.?m?\.?/i,
            meridiem: function (a, b, c) {
                return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
            },
            _calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            calendar: function (a, b) {
                var c = this._calendar[a];
                return "function" == typeof c ? c.apply(b) : c
            },
            _relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            relativeTime: function (a, b, c, d) {
                var e = this._relativeTime[c];
                return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
            },
            pastFuture: function (a, b) {
                var c = this._relativeTime[a > 0 ? "future" : "past"];
                return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
            },
            ordinal: function (a) {
                return this._ordinal.replace("%d", a)
            },
            _ordinal: "%d",
            preparse: function (a) {
                return a
            },
            postformat: function (a) {
                return a
            },
            week: function (a) {
                return ha(a, this._week.dow, this._week.doy).week
            },
            _week: {
                dow: 0,
                doy: 6
            },
            _invalidDate: "Invalid date",
            invalidDate: function () {
                return this._invalidDate
            }
        }), ta = function (b, c, e, f) {
            var g;
            return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = b, g._f = c, g._l = e, g._strict = f, g._isUTC = !1, g._pf = d(), ja(g)
        }, ta.suppressDeprecationWarnings = !1, ta.createFromInputFallback = f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) {
            a._d = new Date(a._i)
        }), ta.min = function () {
            var a = [].slice.call(arguments, 0);
            return ka("isBefore", a)
        }, ta.max = function () {
            var a = [].slice.call(arguments, 0);
            return ka("isAfter", a)
        }, ta.utc = function (b, c, e, f) {
            var g;
            return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = b, g._f = c, g._strict = f, g._pf = d(), ja(g).utc()
        }, ta.unix = function (a) {
            return ta(1e3 * a)
        }, ta.duration = function (a, b) {
            var d, e, f, g, h = a,
                i = null;
            return ta.isDuration(a) ? h = {
                ms: a._milliseconds,
                d: a._days,
                M: a._months
            } : "number" == typeof a ? (h = {}, b ? h[b] = a : h.milliseconds = a) : (i = La.exec(a)) ? (d = "-" === i[1] ? -1 : 1, h = {
                y: 0,
                d: A(i[Ca]) * d,
                h: A(i[Da]) * d,
                m: A(i[Ea]) * d,
                s: A(i[Fa]) * d,
                ms: A(i[Ga]) * d
            }) : (i = Ma.exec(a)) ? (d = "-" === i[1] ? -1 : 1, f = function (a) {
                var b = a && parseFloat(a.replace(",", "."));
                return (isNaN(b) ? 0 : b) * d
            }, h = {
                y: f(i[2]),
                M: f(i[3]),
                d: f(i[4]),
                h: f(i[5]),
                m: f(i[6]),
                s: f(i[7]),
                w: f(i[8])
            }) : "object" == typeof h && ("from" in h || "to" in h) && (g = r(ta(h.from), ta(h.to)), h = {}, h.ms = g.milliseconds, h.M = g.months), e = new l(h), ta.isDuration(a) && c(a, "_locale") && (e._locale = a._locale), e
        }, ta.version = wa, ta.defaultFormat = eb, ta.ISO_8601 = function () {}, ta.momentProperties = Ia, ta.updateOffset = function () {}, ta.relativeTimeThreshold = function (b, c) {
            return mb[b] === a ? !1 : c === a ? mb[b] : (mb[b] = c, !0)
        }, ta.lang = f("moment.lang is deprecated. Use moment.locale instead.", function (a, b) {
            return ta.locale(a, b)
        }), ta.locale = function (a, b) {
            var c;
            return a && (c = "undefined" != typeof b ? ta.defineLocale(a, b) : ta.localeData(a), c && (ta.duration._locale = ta._locale = c)), ta._locale._abbr
        }, ta.defineLocale = function (a, b) {
            return null !== b ? (b.abbr = a, Ha[a] || (Ha[a] = new j), Ha[a].set(b), ta.locale(a), Ha[a]) : (delete Ha[a], null)
        }, ta.langData = f("moment.langData is deprecated. Use moment.localeData instead.", function (a) {
            return ta.localeData(a)
        }), ta.localeData = function (a) {
            var b;
            if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return ta._locale;
            if (!u(a)) {
                if (b = J(a)) return b;
                a = [a]
            }
            return I(a)
        }, ta.isMoment = function (a) {
            return a instanceof k || null != a && c(a, "_isAMomentObject")
        }, ta.isDuration = function (a) {
            return a instanceof l
        };
        for (va = rb.length - 1; va >= 0; --va) z(rb[va]);
        ta.normalizeUnits = function (a) {
            return x(a)
        }, ta.invalid = function (a) {
            var b = ta.utc(NaN);
            return null != a ? m(b._pf, a) : b._pf.userInvalidated = !0, b
        }, ta.parseZone = function () {
            return ta.apply(null, arguments).parseZone()
        }, ta.parseTwoDigitYear = function (a) {
            return A(a) + (A(a) > 68 ? 1900 : 2e3)
        }, m(ta.fn = k.prototype, {
            clone: function () {
                return ta(this)
            },
            valueOf: function () {
                return +this._d + 6e4 * (this._offset || 0)
            },
            unix: function () {
                return Math.floor(+this / 1e3)
            },
            toString: function () {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            },
            toDate: function () {
                return this._offset ? new Date(+this) : this._d
            },
            toISOString: function () {
                var a = ta(this).utc();
                return 0 < a.year() && a.year() <= 9999 ? N(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : N(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            },
            toArray: function () {
                var a = this;
                return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
            },
            isValid: function () {
                return G(this)
            },
            isDSTShifted: function () {
                return this._a ? this.isValid() && w(this._a, (this._isUTC ? ta.utc(this._a) : ta(this._a)).toArray()) > 0 : !1
            },
            parsingFlags: function () {
                return m({}, this._pf)
            },
            invalidAt: function () {
                return this._pf.overflow
            },
            utc: function (a) {
                return this.zone(0, a)
            },
            local: function (a) {
                return this._isUTC && (this.zone(0, a), this._isUTC = !1, a && this.add(this._dateTzOffset(), "m")), this
            },
            format: function (a) {
                var b = N(this, a || ta.defaultFormat);
                return this.localeData().postformat(b)
            },
            add: s(1, "add"),
            subtract: s(-1, "subtract"),
            diff: function (a, b, c) {
                var d, e, f, g = K(a, this),
                    h = 6e4 * (this.zone() - g.zone());
                return b = x(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + g.daysInMonth()), e = 12 * (this.year() - g.year()) + (this.month() - g.month()), f = this - ta(this).startOf("month") - (g - ta(g).startOf("month")), f -= 6e4 * (this.zone() - ta(this).startOf("month").zone() - (g.zone() - ta(g).startOf("month").zone())), e += f / d, "year" === b && (e /= 12)) : (d = this - g, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - h) / 864e5 : "week" === b ? (d - h) / 6048e5 : d), c ? e : o(e)
            },
            from: function (a, b) {
                return ta.duration({
                    to: this,
                    from: a
                }).locale(this.locale()).humanize(!b)
            },
            fromNow: function (a) {
                return this.from(ta(), a)
            },
            calendar: function (a) {
                var b = a || ta(),
                    c = K(b, this).startOf("day"),
                    d = this.diff(c, "days", !0),
                    e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse";
                return this.format(this.localeData().calendar(e, this))
            },
            isLeapYear: function () {
                return E(this.year())
            },
            isDST: function () {
                return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
            },
            day: function (a) {
                var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != a ? (a = ea(a, this.localeData()), this.add(a - b, "d")) : b
            },
            month: oa("Month", !0),
            startOf: function (a) {
                switch (a = x(a)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
            },
            endOf: function (a) {
                return a = x(a), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
            },
            isAfter: function (a, b) {
                return b = x("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = ta.isMoment(a) ? a : ta(a), +this > +a) : +this.clone().startOf(b) > +ta(a).startOf(b)
            },
            isBefore: function (a, b) {
                return b = x("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = ta.isMoment(a) ? a : ta(a), +a > +this) : +this.clone().startOf(b) < +ta(a).startOf(b)
            },
            isSame: function (a, b) {
                return b = x(b || "millisecond"), "millisecond" === b ? (a = ta.isMoment(a) ? a : ta(a), +this === +a) : +this.clone().startOf(b) === +K(a, this).startOf(b)
            },
            min: f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (a) {
                return a = ta.apply(null, arguments), this > a ? this : a
            }),
            max: f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (a) {
                return a = ta.apply(null, arguments), a > this ? this : a
            }),
            zone: function (a, b) {
                var c, d = this._offset || 0;
                return null == a ? this._isUTC ? d : this._dateTzOffset() : ("string" == typeof a && (a = Q(a)), Math.abs(a) < 16 && (a = 60 * a), !this._isUTC && b && (c = this._dateTzOffset()), this._offset = a, this._isUTC = !0, null != c && this.subtract(c, "m"), d !== a && (!b || this._changeInProgress ? t(this, ta.duration(d - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, ta.updateOffset(this, !0), this._changeInProgress = null)), this)
            },
            zoneAbbr: function () {
                return this._isUTC ? "UTC" : ""
            },
            zoneName: function () {
                return this._isUTC ? "Coordinated Universal Time" : ""
            },
            parseZone: function () {
                return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
            },
            hasAlignedHourOffset: function (a) {
                return a = a ? ta(a).zone() : 0, (this.zone() - a) % 60 === 0
            },
            daysInMonth: function () {
                return B(this.year(), this.month())
            },
            dayOfYear: function (a) {
                var b = ya((ta(this).startOf("day") - ta(this).startOf("year")) / 864e5) + 1;
                return null == a ? b : this.add(a - b, "d")
            },
            quarter: function (a) {
                return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
            },
            weekYear: function (a) {
                var b = ha(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                return null == a ? b : this.add(a - b, "y")
            },
            isoWeekYear: function (a) {
                var b = ha(this, 1, 4).year;
                return null == a ? b : this.add(a - b, "y")
            },
            week: function (a) {
                var b = this.localeData().week(this);
                return null == a ? b : this.add(7 * (a - b), "d")
            },
            isoWeek: function (a) {
                var b = ha(this, 1, 4).week;
                return null == a ? b : this.add(7 * (a - b), "d")
            },
            weekday: function (a) {
                var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == a ? b : this.add(a - b, "d")
            },
            isoWeekday: function (a) {
                return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
            },
            isoWeeksInYear: function () {
                return C(this.year(), 1, 4)
            },
            weeksInYear: function () {
                var a = this.localeData()._week;
                return C(this.year(), a.dow, a.doy)
            },
            get: function (a) {
                return a = x(a), this[a]()
            },
            set: function (a, b) {
                return a = x(a), "function" == typeof this[a] && this[a](b), this
            },
            locale: function (b) {
                var c;
                return b === a ? this._locale._abbr : (c = ta.localeData(b), null != c && (this._locale = c), this)
            },
            lang: f("moment().lang() is deprecated. Use moment().localeData() instead.", function (b) {
                return b === a ? this.localeData() : this.locale(b)
            }),
            localeData: function () {
                return this._locale
            },
            _dateTzOffset: function () {
                return 15 * Math.round(this._d.getTimezoneOffset() / 15)
            }
        }), ta.fn.millisecond = ta.fn.milliseconds = oa("Milliseconds", !1), ta.fn.second = ta.fn.seconds = oa("Seconds", !1), ta.fn.minute = ta.fn.minutes = oa("Minutes", !1), ta.fn.hour = ta.fn.hours = oa("Hours", !0), ta.fn.date = oa("Date", !0), ta.fn.dates = f("dates accessor is deprecated. Use date instead.", oa("Date", !0)), ta.fn.year = oa("FullYear", !0), ta.fn.years = f("years accessor is deprecated. Use year instead.", oa("FullYear", !0)), ta.fn.days = ta.fn.day, ta.fn.months = ta.fn.month, ta.fn.weeks = ta.fn.week, ta.fn.isoWeeks = ta.fn.isoWeek, ta.fn.quarters = ta.fn.quarter, ta.fn.toJSON = ta.fn.toISOString, m(ta.duration.fn = l.prototype, {
            _bubble: function () {
                var a, b, c, d = this._milliseconds,
                    e = this._days,
                    f = this._months,
                    g = this._data,
                    h = 0;
                g.milliseconds = d % 1e3, a = o(d / 1e3), g.seconds = a % 60, b = o(a / 60), g.minutes = b % 60, c = o(b / 60), g.hours = c % 24, e += o(c / 24), h = o(pa(e)), e -= o(qa(h)), f += o(e / 30), e %= 30, h += o(f / 12), f %= 12, g.days = e, g.months = f, g.years = h
            },
            abs: function () {
                return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
            },
            weeks: function () {
                return o(this.days() / 7)
            },
            valueOf: function () {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * A(this._months / 12)
            },
            humanize: function (a) {
                var b = ga(this, !a, this.localeData());
                return a && (b = this.localeData().pastFuture(+this, b)), this.localeData().postformat(b)
            },
            add: function (a, b) {
                var c = ta.duration(a, b);
                return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
            },
            subtract: function (a, b) {
                var c = ta.duration(a, b);
                return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
            },
            get: function (a) {
                return a = x(a), this[a.toLowerCase() + "s"]()
            },
            as: function (a) {
                var b, c;
                if (a = x(a), "month" === a || "year" === a) return b = this._days + this._milliseconds / 864e5, c = this._months + 12 * pa(b), "month" === a ? c : c / 12;
                switch (b = this._days + qa(this._months / 12), a) {
                    case "week":
                        return b / 7 + this._milliseconds / 6048e5;
                    case "day":
                        return b + this._milliseconds / 864e5;
                    case "hour":
                        return 24 * b + this._milliseconds / 36e5;
                    case "minute":
                        return 24 * b * 60 + this._milliseconds / 6e4;
                    case "second":
                        return 24 * b * 60 * 60 + this._milliseconds / 1e3;
                    case "millisecond":
                        return Math.floor(24 * b * 60 * 60 * 1e3) + this._milliseconds;
                    default:
                        throw new Error("Unknown unit " + a)
                }
            },
            lang: ta.fn.lang,
            locale: ta.fn.locale,
            toIsoString: f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function () {
                return this.toISOString()
            }),
            toISOString: function () {
                var a = Math.abs(this.years()),
                    b = Math.abs(this.months()),
                    c = Math.abs(this.days()),
                    d = Math.abs(this.hours()),
                    e = Math.abs(this.minutes()),
                    f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
            },
            localeData: function () {
                return this._locale
            }
        }), ta.duration.fn.toString = ta.duration.fn.toISOString;
        for (va in ib) c(ib, va) && ra(va.toLowerCase());
        ta.duration.fn.asMilliseconds = function () {
            return this.as("ms")
        }, ta.duration.fn.asSeconds = function () {
            return this.as("s")
        }, ta.duration.fn.asMinutes = function () {
            return this.as("m")
        }, ta.duration.fn.asHours = function () {
            return this.as("h")
        }, ta.duration.fn.asDays = function () {
            return this.as("d")
        }, ta.duration.fn.asWeeks = function () {
            return this.as("weeks")
        }, ta.duration.fn.asMonths = function () {
            return this.as("M")
        }, ta.duration.fn.asYears = function () {
            return this.as("y")
        }, ta.locale("en", {
            ordinal: function (a) {
                var b = a % 10,
                    c = 1 === A(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            }
        }), Ja ? module.exports = ta : "function" == typeof define && define.amd ? (define("moment", function (a, b, c) {
            return c.config && c.config() && c.config().noGlobal === !0 && (xa.moment = ua), ta
        }), sa(!0)) : sa()
    }.call(this),
    function (a) {
        "function" == typeof define && define.amd ? define(["moment"], a) : "object" == typeof exports ? module.exports = a(require("../moment")) : a(window.moment)
    }(function (a) {
        function b(a, b, d, e) {
            var f = "";
            switch (d) {
                case "s":
                    return e ? "muutaman sekunnin" : "muutama sekunti";
                case "m":
                    return e ? "minuutin" : "minuutti";
                case "mm":
                    f = e ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return e ? "tunnin" : "tunti";
                case "hh":
                    f = e ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return e ? "päivän" : "päivä";
                case "dd":
                    f = e ? "päivän" : "päivää";
                    break;
                case "M":
                    return e ? "kuukauden" : "kuukausi";
                case "MM":
                    f = e ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return e ? "vuoden" : "vuosi";
                case "yy":
                    f = e ? "vuoden" : "vuotta"
            }
            return f = c(a, e) + " " + f
        }

        function c(a, b) {
            return 10 > a ? b ? e[a] : d[a] : a
        }
        var d = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
            e = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", d[7], d[8], d[9]];
        return a.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] LT",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] LT",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] LT",
                llll: "ddd, Do MMM YYYY, [klo] LT"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: b,
                m: b,
                mm: b,
                h: b,
                hh: b,
                d: b,
                dd: b,
                M: b,
                MM: b,
                y: b,
                yy: b
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function (a) {
        "function" == typeof define && define.amd ? define(["moment"], a) : "object" == typeof exports ? module.exports = a(require("../moment")) : a(window.moment)
    }(function (a) {
        return a.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "dddd LT",
                lastWeek: "[Förra] dddd[en] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            ordinal: function (a) {
                var b = a % 10,
                    c = 1 === ~~(a % 100 / 10) ? "e" : 1 === b ? "a" : 2 === b ? "a" : "e";
                return a + c
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function (a) {
        "function" == typeof define && define.amd ? define(["moment"], a) : "object" == typeof exports ? module.exports = a(require("../moment")) : a(window.moment)
    }(function (a) {
        return a.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tirs_ons_tors_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "H.mm",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] LT",
                LLLL: "dddd D. MMMM YYYY [kl.] LT"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "for %s siden",
                s: "noen sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function (a) {
        "function" == typeof define && define.amd ? define(["moment"], a) : "object" == typeof exports ? module.exports = a(require("../moment")) : a(window.moment)
    }(function (a) {
        return a.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinal: function (a) {
                return a + (1 === a ? "er" : "")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function (a) {
        a.fn.unveil = function (b, c) {
            function d() {
                var b = i.filter(function () {
                    var b = a(this);
                    if (!b.is(":hidden")) {
                        var c = f.scrollTop(),
                            d = c + f.height(),
                            e = b.offset().top,
                            h = e + b.height();
                        return h >= c - g && d + g >= e
                    }
                });
                e = b.trigger("unveil"), i = i.not(e)
            }
            var e, f = a(window),
                g = b || 0,
                h = "data-unveil-interchange",
                i = this;
            return this.one("unveil", function () {
                var b = this.getAttribute(h),
                    d = "data-interchange";
                b || (b = this.getAttribute("data-src"), d = "src"), b && (this.setAttribute(d, b), "data-interchange" === d && a(document).foundation("interchange", "reflow"), a(this).removeClass("unveil"), "function" == typeof c && c.call(this))
            }), f.on("scroll.unveil resize.unveil lookup.unveil", d), d(), this
        }
    }(window.jQuery || window.Zepto),
    function (a, b) {
        function c(a) {
            return !!("" === a || a && a.charCodeAt && a.substr)
        }

        function d(a) {
            return l ? l(a) : "[object Array]" === m.call(a)
        }

        function e(a) {
            return a && "[object Object]" === m.call(a)
        }

        function f(a, b) {
            var c;
            a = a || {}, b = b || {};
            for (c in b) b.hasOwnProperty(c) && null == a[c] && (a[c] = b[c]);
            return a
        }

        function g(a, b, c) {
            var d, e, f = [];
            if (!a) return f;
            if (k && a.map === k) return a.map(b, c);
            for (d = 0, e = a.length; e > d; d++) f[d] = b.call(c, a[d], d, a);
            return f
        }

        function h(a, b) {
            return a = Math.round(Math.abs(a)), isNaN(a) ? b : a
        }

        function i(a) {
            var b = j.settings.currency.format;
            return "function" == typeof a && (a = a()), c(a) && a.match("%v") ? {
                pos: a,
                neg: a.replace("-", "").replace("%v", "-%v"),
                zero: a
            } : a && a.pos && a.pos.match("%v") ? a : c(b) ? j.settings.currency.format = {
                pos: b,
                neg: b.replace("%v", "-%v"),
                zero: b
            } : b
        }
        var j = {};
        j.version = "0.4.1", j.settings = {
            currency: {
                symbol: "$",
                format: "%s%v",
                decimal: ".",
                thousand: ",",
                precision: 2,
                grouping: 3
            },
            number: {
                precision: 0,
                grouping: 3,
                thousand: ",",
                decimal: "."
            }
        };
        var k = Array.prototype.map,
            l = Array.isArray,
            m = Object.prototype.toString,
            n = j.unformat = j.parse = function (a, b) {
                if (d(a)) return g(a, function (a) {
                    return n(a, b)
                });
                if (a = a || 0, "number" == typeof a) return a;
                b = b || j.settings.number.decimal;
                var c = new RegExp("[^0-9-" + b + "]", ["g"]),
                    e = parseFloat(("" + a).replace(/\((.*)\)/, "-$1").replace(c, "").replace(b, "."));
                return isNaN(e) ? 0 : e
            },
            o = j.toFixed = function (a, b) {
                b = h(b, j.settings.number.precision);
                var c = Math.pow(10, b);
                return (Math.round(j.unformat(a) * c) / c).toFixed(b)
            },
            p = j.formatNumber = j.format = function (a, b, c, i) {
                if (d(a)) return g(a, function (a) {
                    return p(a, b, c, i)
                });
                a = n(a);
                var k = f(e(b) ? b : {
                        precision: b,
                        thousand: c,
                        decimal: i
                    }, j.settings.number),
                    l = h(k.precision),
                    m = 0 > a ? "-" : "",
                    q = parseInt(o(Math.abs(a || 0), l), 10) + "",
                    r = q.length > 3 ? q.length % 3 : 0;
                return m + (r ? q.substr(0, r) + k.thousand : "") + q.substr(r).replace(/(\d{3})(?=\d)/g, "$1" + k.thousand) + (l ? k.decimal + o(Math.abs(a), l).split(".")[1] : "")
            },
            q = j.formatMoney = function (a, b, c, k, l, m) {
                if (d(a)) return g(a, function (a) {
                    return q(a, b, c, k, l, m)
                });
                a = n(a);
                var o = f(e(b) ? b : {
                        symbol: b,
                        precision: c,
                        thousand: k,
                        decimal: l,
                        format: m
                    }, j.settings.currency),
                    r = i(o.format),
                    s = a > 0 ? r.pos : 0 > a ? r.neg : r.zero;
                return s.replace("%s", o.symbol).replace("%v", p(Math.abs(a), h(o.precision), o.thousand, o.decimal))
            };
        j.formatColumn = function (a, b, k, l, m, o) {
            if (!a) return [];
            var q = f(e(b) ? b : {
                    symbol: b,
                    precision: k,
                    thousand: l,
                    decimal: m,
                    format: o
                }, j.settings.currency),
                r = i(q.format),
                s = r.pos.indexOf("%s") < r.pos.indexOf("%v"),
                t = 0,
                u = g(a, function (a, b) {
                    if (d(a)) return j.formatColumn(a, q);
                    a = n(a);
                    var c = a > 0 ? r.pos : 0 > a ? r.neg : r.zero,
                        e = c.replace("%s", q.symbol).replace("%v", p(Math.abs(a), h(q.precision), q.thousand, q.decimal));
                    return e.length > t && (t = e.length), e
                });
            return g(u, function (a, b) {
                return c(a) && a.length < t ? s ? a.replace(q.symbol, q.symbol + new Array(t - a.length + 1).join(" ")) : new Array(t - a.length + 1).join(" ") + a : a
            })
        }, "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j), exports.accounting = j) : "function" == typeof define && define.amd ? define([], function () {
            return j
        }) : (j.noConflict = function (c) {
            return function () {
                return a.accounting = c, j.noConflict = b, j
            }
        }(a.accounting), a.accounting = j)
    }(this),
    function (a, b, c, d) {
        "use strict";
        a.SITE = {}, a.SITE.hooks = {
            landing: [],
            checkout: [],
            upsell: [],
            confirm: [],
            policy: [],
            formsCallback: []
        }, a.SITE.hookRunner = function (b) {
            c.each(a.SITE.hooks[b], function (a, b) {
                b && b instanceof Function && b()
            })
        }
    }(window, document, jQuery),
    function (a, b, c, d) {
        "use strict";
        c.fn.dfoSlider = function (b) {
            var d = c(this),
                e = c.extend({
                    slidesClass: "product",
                    activeClass: "active",
                    inactiveClass: "inactive",
                    selectedClass: "selected",
                    dotClass: "dot-wrap",
                    arrowsClass: "slider-arrow",
                    leftArrowClass: "left-arrow",
                    rightArrowClass: "right-arrow",
                    productClass: "product",
                    endlessLoop: !1,
                    autoplay: !1,
                    autoPlayInterval: 5e3,
                    responsive: !1,
                    selectable: !1,
                    selectableClass: "",
                    onInit: function (a) {
                        a.find(".dotlist .active").length || a.find(".dotlist > li:first .dot").trigger("click")
                    },
                    onSelectedProduct: function (a) {}
                }, b),
                f = {
                    slides: d.find("." + e.slidesClass),
                    active: d.find("." + e.slidesClass).filter("." + e.activeClass),
                    dots: d.find("." + e.dotClass),
                    arrows: d.find("." + e.arrowsClass),
                    products: d.find("." + e.productClass)
                },
                g = f.slides.index(f.active),
                h = f.slides.length,
                i = d.width(),
                j = !1,
                k = function () {
                    f.arrows.eq(1).trigger("click")
                },
                l = function () {
                    var a;
                    e.selectable && (f.products = d.find("." + e.productClass), a = "" !== e.selectableClass ? f.products.find("." + e.selectableClass) : f.products, a.off("click"), a.on("click", function (a) {
                        a.preventDefault();
                        var b = c(this),
                            d = b.closest("." + e.slidesClass),
                            f = e.selectedClass;
                        d.hasClass(f) || d.toggleClass(f).siblings().removeClass(f), e.onSelectedProduct(d)
                    }))
                };
            if (d.length && (f.slides.on("swipeleft", function (a) {
                var b = -1;
                g === h - 1 ? e.endlessLoop && (b = 0) : b = g + 1, b > -1 && f.slides.eq(b).trigger("activate")
            }).on("swiperight", function (a) {
                var b = -1;
                0 === g ? e.endlessLoop && (b = h - 1) : b = g - 1, b > -1 && f.slides.eq(b).trigger("activate")
            }).on("activate", function (a) {
                var b = c(a.target);
                g = f.slides.index(b), b.addClass(e.activeClass).siblings().removeClass(e.activeClass), f.dots.eq(g).addClass(e.activeClass).siblings().removeClass(e.activeClass), b.trigger("update:arrows")
            }).on("update:arrows", function () {
                var a, b;
                if (a = b = "remove", !e.endlessLoop) {
                    switch (!0) {
                        case 0 === g:
                            a = "add";
                            break;
                        case g + 1 === h:
                            b = "add"
                    }
                    f.arrows.each(function () {
                        c(this).is("." + e.leftArrowClass) ? c(this)[a + "Class"](e.inactiveClass) : c(this).is("." + e.rightArrowClass) && c(this)[b + "Class"](e.inactiveClass)
                    })
                }
            }).on("movestart", function (a) {
                return a.distX > a.distY && a.distX < -a.distY || a.distX < a.distY && a.distX > -a.distY ? void a.preventDefault() : void d.addClass("notransition")
            }).on("move", function (a) {
                var b = 100 * a.distX / i;
                a.distX < 0 && (f.slides[g + 1] ? (f.slides[g].style.left = b + "%", f.slides[g + 1].style.left = b + 100 + "%") : e.endlessLoop ? f.slides[g].style.left = "" : f.slides[g].style.left = b / 4 + "%"), a.distX > 0 && (f.slides[g - 1] ? (f.slides[g].style.left = b + "%", f.slides[g - 1].style.left = b - 100 + "%") : e.endlessLoop ? f.slides[g].style.left = "" : f.slides[g].style.left = b / 5 + "%")
            }).on("moveend", function (a) {
                d.removeClass("notransition"), f.slides[g].style.left = "", f.slides[g + 1] && (f.slides[g + 1].style.left = ""), f.slides[g - 1] && (f.slides[g - 1].style.left = "")
            }), f.arrows.on("click", function (a) {
                var b = c(this),
                    d = f.slides.index(f.slides.filter("." + e.activeClass)),
                    g = "." + e.leftArrowClass,
                    i = "." + e.rightArrowClass,
                    j = -1;
                b.is(g) && d > 0 ? j = d - 1 : b.is(i) && h - 2 >= d ? j = d + 1 : e.endlessLoop && (0 === d ? j = h - 1 : d === h - 1 && (j = 0)), j > -1 && f.slides.eq(j).trigger("activate"), a.preventDefault()
            }), f.dots.find("a").on("click", function (a) {
                var b = a.currentTarget.hash;
                a.preventDefault(), c(b).trigger("activate")
            }), e.autoplay === !0 && (j = a.setInterval(k, e.autoPlayInterval), d.on("mouseover", function (a) {
                j = clearInterval(j)
            }), d.on("mouseout", function (b) {
                clearInterval(j), j = a.setInterval(k, e.autoPlayInterval)
            })), l(), e.onInit(d), e.responsive === !0)) {
                var m, n, o, p = c(a),
                    q = "",
                    r = -1;
                ! function (a) {
                    c.fn.attr = function () {
                        if (0 === arguments.length) {
                            if (0 === this.length) return null;
                            var b = {};
                            return c.each(this[0].attributes, function () {
                                this.specified && (b[this.name] = this.value)
                            }), b
                        }
                        return a.apply(this, arguments)
                    }
                }(c.fn.attr), c(a).on("load resize", function () {
                    p.width() <= 640 ? "phone" !== q && (r = d.find(".disabled-slider-content .product.selected").index(), r > -1 && (f.slides.eq(r).trigger("click"), f.slides.eq(r).trigger("activate")), d.removeClass("disable").find(".disabled-slider-content").remove(), q = "phone") : "not phone" !== q && (m = c("<div />").addClass("row disabled-slider-content"), d.find(".disabled-slider-content").remove(), f.slides.each(function (a, b) {
                        o = c(b).attr(), n = c(c(b).find(".row").html()), o["class"] && (n.addClass(o["class"]), delete o["class"]), o.id && delete o.id, n.attr(o), m.append(n)
                    }), d.prepend(m).addClass("disable"), a.setTimeout(l, 1), a.SITE.helpers.initUnveil && a.SITE.helpers.initUnveil(), q = "not phone")
                })
            }
        }
    }(window, document, jQuery),
    function (a, b, c) {
        "use strict";
        var d = {},
            e = a.SITE,
            f = {
                getDocHeight: function () {
                    return Math.max(b.body.scrollHeight, b.documentElement.scrollHeight, b.body.offsetHeight, b.documentElement.offsetHeight, b.body.clientHeight, b.documentElement.clientHeight)
                },
                getObjectSize: function (a) {
                    var b = 0;
                    if (Object.keys) b = Object.keys(a).length;
                    else
                        for (var c in a) a.hasOwnProperty(c) && b++;
                    return b
                },
                setScrollVars: function () {
                    d.$window = c(a), d.windowHeight = c(a).height(), d.docHeight = f.getDocHeight(), d.$bar = c("#bottom-floating-bar"), d.$topbar = c("#top-floating-bar"), d.$form = c("#index-form"),
                        d.formHeight = d.$form.outerHeight(), d.topbarHeight = d.$topbar.outerHeight()
                },
                trackScroll: function () {
                    c(a).on("load resize", f.setScrollVars), c(a).on("scroll resize", function () {
                        d.$bar.length && (d.$window.width() < 1024 && d.$window.scrollTop() >= 2 && d.$window.scrollTop() + d.windowHeight < d.docHeight - d.formHeight ? d.$bar.css("cssText", "display: block !important;") : d.$bar.css("cssText", "display: none !important;")), d.$topbar.length && (d.$window.width() >= 1025 && d.$window.scrollTop() + d.topbarHeight < d.docHeight - d.formHeight - d.topbarHeight ? d.$topbar.css("cssText", "display: block !important;") : d.$topbar.css("cssText", "display: block !important;"))
                    })
                },
                scrollToIndexForm: function () {
                    c("html, body").animate({
                        scrollTop: c("#index-form").offset().top - 120
                    }, 1e3)
                },
                bindScrollButtons: function () {
                    d.$bar || f.setScrollVars(), c(".order-now").click(function (a) {
                        f.scrollToIndexForm()
                    })
                },
                scrollToEl: function (a, b) {
                    b = b || 1e3, a.length ? c("html, body").stop().animate({
                        scrollTop: parseInt(a.offset().top, 10)
                    }, b) : console.warn("Cannot scroll to undefined element -", a.selector)
                },
                preventSliderHref: function () {
                    c("a.dot").click(function (a) {
                        a.preventDefault(), a.stopImmediatePropagation()
                    })
                },
                preventEmptyHref: function () {
                    c('a[href="#"]').click(function (a) {
                        a.preventDefault()
                    })
                },

                initUnveil: function () {
                    c.fn.unveil && c("img.unveil").unveil(300, function () {
                        c(this).on("load", function () {
                            c(b).foundation("reflow"), c(b).foundation("equalizer", "reflow"), c(a).trigger("resize")
                        })
                    })
                },
                updatePackageName: function (a, b) {
                    b.text(a).parent().removeClass("hide")
                },
                showLoading: function (b) {
                    var d, e, f, g;
                    b ? (d = c("<div />").addClass("loading-screen"), e = c("<div />").addClass("loading-wrap"), f = Modernizr.cssanimations ? c("<div />").addClass("loader").append([c("<i />"), c("<i />"), c("<i />"), c("<i />")]) : c("<img />").attr({
                        src: a.SITE.settings.loadingImg,
                        alt: "Loading"
                    }), g = d.append(e.append(f)), c("body").append(g).addClass("loading")) : c("body").remove(".loading-screen").removeClass("loading")
                },
                preloadImages: function (b) {
                    var d, e, f = c("<div />").attr("id", "preloader"),
                        g = 0;
                    if (b || (b = []), a.SITE.settings.loadingImg && !Modernizr.cssanimations && b.unshift(a.SITE.settings.loadingImg), b && b.length) {
                        for (f.css({
                            position: "absolute",
                            top: "-9999px",
                            left: "-9999px"
                        }), d = b.length; d > g; g++) e = c("<img />").attr("src", b[g]), f.append(e);
                        c("body").append(f)
                    }
                },
                getLongFormat: function (a) {
                    var b = "MMMM D, YYYY";
                    switch (a) {
                        case "de":
                            b = "D. MMMM YYYY";
                            break;
                        case "fr":
                            b = "D MMMM, YYYY";
                            break;
                        case "es":
                            b = "D MMMM, YYYY"
                    }
                    return b
                },
                setDatesInDOM: function () {
                    var b = c("body").attr("lang") || "ca";
                    "no" === b && (b = "nb"), "se" === b && (b = "sv"), moment.locale(b);
                    var d = f.getLongFormat(a.SITE.settings.lang),
                        e = moment().add(3, "days"),
                        g = moment();
                    c(a.SITE.settings.shippingDate).text(e.format(d)), c(".today").text(g.format(d))
                },
                policyLink: function () {
                    var b = ["mailto", "javascript"];
                    c(a.SITE.settings.policyLink).on("click", function (d) {
                        var e, f = c(this),
                            g = f.attr("href").toLowerCase(),
                            h = a.screen.width / 2 - 300,
                            i = a.screen.height / 2 - 225,
                            j = "toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,height=450,width=600, top=" + i + ", left=" + h;
                        return d.preventDefault(), 0 !== g.indexOf(b[0] + ":") && 0 !== g.indexOf(b[1] + ":") && (e = a.open(g, f.text(), j), a.focus && e.focus()), !1
                    })
                },
                initCcLogos: function (a, b) {
                    var d, e = ".credit-card-container",
                        g = ".direct-debit-container",
                        h = ".sofort-container",
                        i = ".order-form-type-container";
                    return a.length && b.length ? (b.on("change", function (j) {
                        switch (a.find("img").removeClass("active"), a.find('img[data-value="' + b.val() + '"]').addClass("active"), b.val()) {
                            case "DDebit":
                                d = g;
                                break;
                            case "SOFORT":
                                d = h;
                                break;
                            default:
                                d = e
                        }
                        c(i).find(d).length || (c(i).html(c(d).clone()), f.setCreditCardDate(c(i)))
                    }), a.find("img").on("click", function (a) {
                        c(this).attr("data-value") && b.val(c(this).attr("data-value").toLowerCase()).trigger("change")
                    }), void b.trigger("change")) : void console.warn("ccLogos not initialized")
                },
                setCreditCardDate: function (a) {
                    var b = a.find("#cardExpiryMonth"),
                        c = a.find("#cardExpiryYear"),
                        d = b.add(c);
                    d.on("change", function (d) {
                        a.find("#expirationDate").val(b.val() + c.val())
                    })
                },
                setClockStopwatch: function () {
                    var b = 6e3,
                        d = 100,
                        e = c("#stopwatch"),
                        f = function (a) {
                            return 10 > a ? "0" + a : a
                        },
                        g = a.setInterval(function () {
                            var a = Math.floor(b / 600),
                                c = Math.floor(b / 10 % 60);
                            e.text(f(a) + ":" + f(c) + ".0" + Math.floor(b % 10)), b--, -1 === b && clearInterval(g)
                        }, d)
                },
                checkSetClockStopwatch: function (a) {
                    c("body").hasClass(a) && f.setClockStopwatch()
                },
                updateCountry: function (a, b) {
                    var c;
                    switch (a) {
                        case "uk":
                            c = "United Kingdom";
                            break;
                        case "au":
                            c = "Australia";
                            break;
                        case "nz":
                            c = "New Zealand";
                            break;
                        case "ca":
                            c = "Canada";
                            break;
                        case "ie":
                            c = "Ireland";
                            break;
                        case "za":
                            c = "South Africa";
                            break;
                        default:
                            c = "Canada"
                    }
                    b.html(c)
                },
                addFlag: function (a, b) {
                    a = "" === a.trim().toLowerCase() ? "ca" : a.trim().toLowerCase(), b.attr("src", "../assets/images/flags/" + a + ".png")
                },
                validators: {
                    isIban: function (a, b, d) {
                        return IBAN.isValid(c(a).val())
                    },
                    isValidCreditCardDate: function (a, b, d) {
                        var e = c(a).val(),
                            f = moment(),
                            g = moment(e, "MM/YY");
                        return f.set("date", 1).set("hour", 0).set("minute", 0).set("second", 0).set("millisecond", 0), g.isAfter(f)
                    },
                    isValidCreditCardNo: function (b, d, e) {
                        if (!a.SITE.settings.isProduction) {
                            var f = c(b).val();
                            if ("4040" === f.substr(f.length - 4)) return !0
                        }
                        return c.payment.validateCardNumber(c(b).val())
                    }
                },
                queryString: function (a) {
                    var b = location.search.toLowerCase().match(new RegExp("[\\?\\&]" + a.toLowerCase() + "=([^\\&]*)(\\&?)", "i")),
                        c = b ? b[1] : b;
                    return null === c ? "" : c
                },
                setUpsellShippingId: function (b) {
                    var c = b.find("[name='shippingId']"),
                        d = 1 === a.SITE.settings.dontLeaveDiscount ? c.attr("data-shippingid1") : c.attr("data-shippingid0");
                    c.val(d)
                },
                setCCYear: function (a) {
                    for (var b = (new Date).getFullYear(), d = b + 10, e = b; d > e; e++) {
                        var f = e - 2e3;
                        a.append(c("<option>").text(e).attr("value", f))
                    }
                },
                addDiscount: function (a) {
                    SITE.settings.dontLeaveDiscount = a, c(".dont-leave-line").removeClass("hide"), c("body").addClass("discount-activated"), c(b).foundation("equalizer", "reflow"), f.scrollToIndexForm()
                },
                updateDiscountPrices: function () {
                    var a = c(".product-selection"),
                        b = a.find(".total-price"),
                        d = a.find(".shipping-price"),
                        e = a.find(".discount-activated"),
                        g = c("body");
                    "1" === f.queryString("dld") ? (d.find(".reduced").removeClass("hide"), b.find(".reduced").removeClass("hide"), e.removeClass("hide"), g.addClass("discount-activated")) : (d.find(".full").removeClass("hide"), b.find(".full").removeClass("hide"))
                },
                setCopyRightYear: function () {
                    c(".footer .copy-right-year").text((new Date).getFullYear() + " ")
                },
                loadStates: function () {
                    var a = c(e.settings.statelist),
                        b = c("body").attr("locale"),
                        d = SITE.settings.baseStates + b + ".json";
                    c.get(d, function (b) {
                        c.each(b, function (b, d) {
                            a.append(c("<option>").text(d).attr("value", b))
                        })
                    }).fail(function () {})
                },
                fillCanvasInfo: function () {
                    var d, e, g, h, i, j, k, l = "bottom",
                        m = a.devicePixelRatio || 1,
                        n = function (a, b) {
                            a.each(function (d) {
                                a = c(this), g = c("<span />").addClass("hide").text(k[b]), g.insertAfter(a), h = g.css("font-size"), i = parseInt(h, 10), j = a[0].getContext("2d"), j.canvas.width = parseInt(g.width(), 10) * m, j.canvas.height = i * m, j.font = j.canvas.height + "px " + g.css("font-family"), j.fillStyle = g.css("color"), j.textBaseline = l, j.fillText(k[b], 0, j.canvas.height), g.remove(), a.css({
                                    width: j.canvas.width / m,
                                    height: j.canvas.height / m
                                }).removeClass("hide")
                            })
                        };
                    k = a.canvasSettings, e = a.location.pathname.split("/"), d = e[e.length - 2], void 0 !== k && void 0 !== k["phone_" + d] && (k.phone = k["phone_" + d]);
                    for (var o in k) n(c(".canv-" + o), o), c(b).foundation("equalizer", "reflow");
                    c("a.email").each(function (a) {
                        var d = c(this),
                            e = d.text().trim(),
                            g = f.rot13(e + k.domain);
                        d.attr("href", "mailto:" + g), d.on("click", function (a) {
                            a.preventDefault();
                            var c = f.rot13(d.attr("href").replace("mailto:", ""));
                            return b.location.href = "mailto:" + c, !1
                        })
                    })
                },
                downArrow: function () {
                    c(".scroll-to").bind("click", function () {
                        var a = c(this).offset().top - d.topbarHeight + 15;
                        c("html, body").animate({
                            scrollTop: a
                        }, 1e3)
                    })
                }
            };
        a.SITE.helpers = f
    }(window, document, $),
    function (a, b, c) {
        "use strict";
        var d = a.SITE.helpers,
            e = {
                initForm: function (a, e, f, g) {
                    f || (f = function (b) {
                        return c.each(SITE.hooks.formsCallback, function (b, c) {
                            c(a, e)
                        }), !1
                    }), g || (g = function (a) {}), "orderForm" === e && (d.setCreditCardDate(a), a.find("#cardNo").payment("formatCardNumber"), a.find("#cardSecurityCode").payment("formatCardCVC")), a.on("submit", function (a) {
                        return a.preventDefault(), !1
                    }).on("invalid.fndtn.abide", function (a) {
                        g(a), c(b).foundation("equalizer", "reflow")
                    }).on("valid.fndtn.abide", function (a) {
                        return f(a), a.preventDefault(), !1
                    })
                }
            };
        a.SITE.forms = e
    }(window, document, $),
    function (a, b, c) {
        "use strict";
        var d = {
            fire: function (b, c, d) {
                var e = a.SITE.controllerPaths,
                    f = a.SITE.settings.controllerCallbacks;
                c = void 0 === c ? "init" : c, "" !== b && e[b] && "function" == typeof e[b][c] && e[b][c](d), "" !== b && f[b] && "function" == typeof f[b][c] && f[b][c](d)
            },
            loadEvents: function () {
                var a = b.body.id;
                d.fire("common"), c.each(b.body.className.split(/\s+/), function (b, c) {
                    d.fire(c), d.fire(c, a)
                }), d.fire("common", "finalize")
            }
        };
        a.SITE.controller = d
    }(window, document, $),
    function (a, b, c) {
        "use strict";
        var d = a.SITE.helpers,
            e = a.SITE.forms,
            f = (a.SITE.ajax, a.SITE.components, a.SITE),
            g = {
                common: {
                    init: function () {
                        c(b).foundation({
                            abide: {
                                live_validate: !1,
                                validators: d.validators
                            }
                        }), d.preloadImages(a.SITE.settings.preloadImages), c("input, textarea").placeholder(), d.policyLink()
                    },
                    finalize: function () {
                        c(b).on("replace", "img", function (a) {
                            c(b).foundation("equalizer", "reflow")
                        }), a.setTimeout(function () {
                            c(b).foundation("equalizer", "reflow"), c(a).trigger("resize")
                        }, 2e3), d.setCopyRightYear()
                    }
                },
                landing: {
                    init: function () {
                        d.initUnveil(), d.setDatesInDOM(), e.initForm(c("#register-form"), "registerForm"), d.fillCanvasInfo(), f.hookRunner("landing"), d.updateCountry(a.SITE.settings.locale, c(".country")), d.setClockStopwatch(), d.trackScroll(), d.preventEmptyHref(), d.bindScrollButtons(), new WOW({
                            offset: 20
                        }).init();
                        var g = {
                                endlessLoop: !0,
                                autoplay: !0,
                                autoPlayInterval: 4e3,
                                responsive: !0,
                                onInit: function (a) {
                                    a.find(".dotlist .active").length || (a.find(".dotlist > li:first .dot").trigger("click"), d.downArrow())
                                }
                            },
                            h = a.matchMedia(Foundation.media_queries.medium).matches,
                            i = c("#hero-index");
                        c("#steps-slider").dfoSlider(g), g.responsive = !1, c("#testimonials-slider").dfoSlider(g), h && i.addClass("loading"), c(a).load(function () {
                            c(b).foundation("equalizer", "reflow"), h && i.removeClass("loading").addClass("finished-loading").find(".loading-screen").remove()
                        })
                    }
                },
                checkout: {
                    init: function () {
                        d.fillCanvasInfo(), d.setDatesInDOM(), d.initCcLogos(c(".cc-logos"), c("select#paymentMethod")), d.bindScrollButtons(), d.setClockStopwatch(), d.setCCYear(c("#cardExpiryYear")), c(".try-risk-free").on("click", function () {
                            d.scrollToEl(c(".form-container"))
                        }), d.initUnveil(), new WOW({
                            offset: 20
                        }).init(), f.hookRunner("checkout"), c("#notSameAddress").on("click", function () {
                            c(".shipping-address").show()
                        }).trigger("click"), c("#yesSameAddress").on("click", function () {
                            c(".shipping-address").hide()
                        }), e.initForm(c("#order-form"), "orderForm"), d.updateDiscountPrices()
                    }
                },
                confirm: {
                    init: function () {
                        d.fillCanvasInfo(), d.initUnveil(), f.hookRunner("confirm")
                    }
                },
                upsell: {
                    init: function () {
                        d.fillCanvasInfo(), d.initUnveil(), new WOW({
                            offset: 20
                        }).init(), f.hookRunner("upsell"), d.setDatesInDOM(), d.setClockStopwatch(), e.initForm(c("#upsell-form"), "upsellForm")
                    }
                },
                policy: {
                    init: function () {
                        c.each(f.hooks.policy, function (a, b) {
                            b()
                        }), d.fillCanvasInfo()
                    }
                }
            };
        a.SITE.controllerPaths = g
    }(window, document, jQuery),
    function (a, b, c, d) {
        "use strict";
        var e = function (a) {
                var b = c.extend(!0, {
                    isProduction: !1,
                    baseStates: "../lib/states/",
                    lang: "en",
                    shippingDate: ".shipping-day",
                    sliderSelector: "#slider",
                    policyLink: ".policy-link",
                    statelist: "#statelist",
                    dontLeaveDiscount: 0,
                    controllerCallbacks: {},
                    timeOutSettings: {
                        upsellMinTimout: 15
                    },
                    noThankYouSelector: ".btn_nothankyou"
                }, a);
                return b
            },
            f = function (d) {
                a.SITE.settings = e(d), a.SITE.settings.locale = c("body").attr("locale") || "en", c(b).ready(a.SITE.controller.loadEvents)
            };
        a.SITE.init = f, a.SITE.init()
    }(window, document, jQuery);