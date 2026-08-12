var Bl = Object.defineProperty;
var El = (l, e, t) => e in l ? Bl(l, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : l[e] = t;
var Pt = (l, e, t) => El(l, typeof e != "symbol" ? e + "" : e, t);
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        i(s);
    new MutationObserver(s => {
        for (const o of s)
            if (o.type === "childList")
                for (const c of o.addedNodes)
                    c.tagName === "LINK" && c.rel === "modulepreload" && i(c)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(s) {
        const o = {};
        return s.integrity && (o.integrity = s.integrity),
        s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function i(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const o = t(s);
        fetch(s.href, o)
    }
}
)();
function R() {}
function ml(l) {
    return l()
}
function Vt() {
    return Object.create(null)
}
function ze(l) {
    l.forEach(ml)
}
function Yt(l) {
    return typeof l == "function"
}
function gl(l, e) {
    return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function"
}
let Bt;
function se(l, e) {
    return l === e ? !0 : (Bt || (Bt = document.createElement("a")),
    Bt.href = e,
    l === Bt.href)
}
function Al(l) {
    return Object.keys(l).length === 0
}
function ql(l) {
    return l && Yt(l.destroy) ? l.destroy : R
}
const Il = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function r(l, e) {
    l.appendChild(e)
}
function C(l, e, t) {
    l.insertBefore(e, t || null)
}
function M(l) {
    l.parentNode && l.parentNode.removeChild(l)
}
function It(l, e) {
    for (let t = 0; t < l.length; t += 1)
        l[t] && l[t].d(e)
}
function h(l) {
    return document.createElement(l)
}
function q(l) {
    return document.createElementNS("http://www.w3.org/2000/svg", l)
}
function me(l) {
    return document.createTextNode(l)
}
function A() {
    return me(" ")
}
function _l() {
    return me("")
}
function G(l, e, t, i) {
    return l.addEventListener(e, t, i),
    () => l.removeEventListener(e, t, i)
}
function vl(l) {
    return function(e) {
        return e.stopPropagation(),
        l.call(this, e)
    }
}
function n(l, e, t) {
    t == null ? l.removeAttribute(e) : l.getAttribute(e) !== t && l.setAttribute(e, t)
}
function Pl(l) {
    return Array.from(l.childNodes)
}
function Be(l, e) {
    e = "" + e,
    l.data !== e && (l.data = e)
}
function Gt(l, e) {
    l.value = e ?? ""
}
function X(l, e, t, i) {
    t == null ? l.style.removeProperty(e) : l.style.setProperty(e, t, "")
}
function V(l, e, t) {
    l.classList.toggle(e, !!t)
}
function Dl(l, e, {bubbles: t=!1, cancelable: i=!1}={}) {
    return new CustomEvent(l,{
        detail: e,
        bubbles: t,
        cancelable: i
    })
}
let pt;
function dt(l) {
    pt = l
}
function Nt() {
    if (!pt)
        throw new Error("Function called outside component initialization");
    return pt
}
function bl(l) {
    Nt().$$.on_mount.push(l)
}
function Xl(l) {
    Nt().$$.on_destroy.push(l)
}
function Rl() {
    const l = Nt();
    return (e, t, {cancelable: i=!1}={}) => {
        const s = l.$$.callbacks[e];
        if (s) {
            const o = Dl(e, t, {
                cancelable: i
            });
            return s.slice().forEach(c => {
                c.call(l, o)
            }
            ),
            !o.defaultPrevented
        }
        return !0
    }
}
function Ht(l, e) {
    const t = l.$$.callbacks[e.type];
    t && t.slice().forEach(i => i.call(this, e))
}
const et = []
  , He = [];
let tt = [];
const Ft = []
  , zl = Promise.resolve();
let Rt = !1;
function Yl() {
    Rt || (Rt = !0,
    zl.then(wl))
}
function zt(l) {
    tt.push(l)
}
const Dt = new Set;
let $e = 0;
function wl() {
    if ($e !== 0)
        return;
    const l = pt;
    do {
        try {
            for (; $e < et.length; ) {
                const e = et[$e];
                $e++,
                dt(e),
                Nl(e.$$)
            }
        } catch (e) {
            throw et.length = 0,
            $e = 0,
            e
        }
        for (dt(null),
        et.length = 0,
        $e = 0; He.length; )
            He.pop()();
        for (let e = 0; e < tt.length; e += 1) {
            const t = tt[e];
            Dt.has(t) || (Dt.add(t),
            t())
        }
        tt.length = 0
    } while (et.length);
    for (; Ft.length; )
        Ft.pop()();
    Rt = !1,
    Dt.clear(),
    dt(l)
}
function Nl(l) {
    if (l.fragment !== null) {
        l.update(),
        ze(l.before_update);
        const e = l.dirty;
        l.dirty = [-1],
        l.fragment && l.fragment.p(l.ctx, e),
        l.after_update.forEach(zt)
    }
}
function Ol(l) {
    const e = []
      , t = [];
    tt.forEach(i => l.indexOf(i) === -1 ? e.push(i) : t.push(i)),
    t.forEach(i => i()),
    tt = e
}
const qt = new Set;
let Vl;
function Ot(l, e) {
    l && l.i && (qt.delete(l),
    l.i(e))
}
function Gl(l, e, t, i) {
    if (l && l.o) {
        if (qt.has(l))
            return;
        qt.add(l),
        Vl.c.push( () => {
            qt.delete(l)
        }
        ),
        l.o(e)
    }
}
function we(l) {
    return (l == null ? void 0 : l.length) !== void 0 ? l : Array.from(l)
}
function jt(l, e) {
    l.d(1),
    e.delete(l.key)
}
function Kt(l, e, t, i, s, o, c, p, d, f, w, _) {
    let y = l.length
      , B = o.length
      , m = y;
    const T = {};
    for (; m--; )
        T[l[m].key] = m;
    const g = []
      , k = new Map
      , S = new Map
      , L = [];
    for (m = B; m--; ) {
        const P = _(s, o, m)
          , D = t(P);
        let z = c.get(D);
        z ? L.push( () => z.p(P, e)) : (z = f(D, P),
        z.c()),
        k.set(D, g[m] = z),
        D in T && S.set(D, Math.abs(m - T[D]))
    }
    const Y = new Set
      , b = new Set;
    function H(P) {
        Ot(P, 1),
        P.m(p, w),
        c.set(P.key, P),
        w = P.first,
        B--
    }
    for (; y && B; ) {
        const P = g[B - 1]
          , D = l[y - 1]
          , z = P.key
          , J = D.key;
        P === D ? (w = P.first,
        y--,
        B--) : k.has(J) ? !c.has(z) || Y.has(z) ? H(P) : b.has(J) ? y-- : S.get(z) > S.get(J) ? (b.add(z),
        H(P)) : (Y.add(J),
        y--) : (d(D, c),
        y--)
    }
    for (; y--; ) {
        const P = l[y];
        k.has(P.key) || d(P, c)
    }
    for (; B; )
        H(g[B - 1]);
    return ze(L),
    g
}
function Hl(l) {
    l && l.c()
}
function kl(l, e, t) {
    const {fragment: i, after_update: s} = l.$$;
    i && i.m(e, t),
    zt( () => {
        const o = l.$$.on_mount.map(ml).filter(Yt);
        l.$$.on_destroy ? l.$$.on_destroy.push(...o) : ze(o),
        l.$$.on_mount = []
    }
    ),
    s.forEach(zt)
}
function yl(l, e) {
    const t = l.$$;
    t.fragment !== null && (Ol(t.after_update),
    ze(t.on_destroy),
    t.fragment && t.fragment.d(e),
    t.on_destroy = t.fragment = null,
    t.ctx = [])
}
function Fl(l, e) {
    l.$$.dirty[0] === -1 && (et.push(l),
    Yl(),
    l.$$.dirty.fill(0)),
    l.$$.dirty[e / 31 | 0] |= 1 << e % 31
}
function Ml(l, e, t, i, s, o, c=null, p=[-1]) {
    const d = pt;
    dt(l);
    const f = l.$$ = {
        fragment: null,
        ctx: [],
        props: o,
        update: R,
        not_equal: s,
        bound: Vt(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (d ? d.$$.context : [])),
        callbacks: Vt(),
        dirty: p,
        skip_bound: !1,
        root: e.target || d.$$.root
    };
    c && c(f.root);
    let w = !1;
    if (f.ctx = t ? t(l, e.props || {}, (_, y, ...B) => {
        const m = B.length ? B[0] : y;
        return f.ctx && s(f.ctx[_], f.ctx[_] = m) && (!f.skip_bound && f.bound[_] && f.bound[_](m),
        w && Fl(l, _)),
        y
    }
    ) : [],
    f.update(),
    w = !0,
    ze(f.before_update),
    f.fragment = i ? i(f.ctx) : !1,
    e.target) {
        if (e.hydrate) {
            const _ = Pl(e.target);
            f.fragment && f.fragment.l(_),
            _.forEach(M)
        } else
            f.fragment && f.fragment.c();
        e.intro && Ot(l.$$.fragment),
        kl(l, e.target, e.anchor),
        wl()
    }
    dt(d)
}
class Cl {
    constructor() {
        Pt(this, "$$");
        Pt(this, "$$set")
    }
    $destroy() {
        yl(this, 1),
        this.$destroy = R
    }
    $on(e, t) {
        if (!Yt(t))
            return R;
        const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return i.push(t),
        () => {
            const s = i.indexOf(t);
            s !== -1 && i.splice(s, 1)
        }
    }
    $set(e) {
        this.$$set && !Al(e) && (this.$$.skip_bound = !0,
        this.$$set(e),
        this.$$.skip_bound = !1)
    }
}
const jl = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(jl);
function Kl(l, e, t) {
    const i = l.slice();
    return i[10] = e[t],
    i
}
function Ut(l) {
    let e, t, i, s, o = !l[2] && Wt(l), c = l[2] && Zt(l);
    return {
        c() {
            e = h("div"),
            o && o.c(),
            t = A(),
            c && c.c(),
            n(e, "class", "loader svelte-cblm91"),
            V(e, "fadeOut", l[1]),
            V(e, "ready", l[2])
        },
        m(p, d) {
            C(p, e, d),
            o && o.m(e, null),
            r(e, t),
            c && c.m(e, null),
            i || (s = [G(e, "mousemove", l[6]), G(e, "click", l[7]), G(e, "touchend", l[7])],
            i = !0)
        },
        p(p, d) {
            p[2] ? o && (o.d(1),
            o = null) : o ? o.p(p, d) : (o = Wt(p),
            o.c(),
            o.m(e, t)),
            p[2] ? c ? c.p(p, d) : (c = Zt(p),
            c.c(),
            c.m(e, null)) : c && (c.d(1),
            c = null),
            d & 2 && V(e, "fadeOut", p[1]),
            d & 4 && V(e, "ready", p[2])
        },
        d(p) {
            p && M(e),
            o && o.d(),
            c && c.d(),
            i = !1,
            ze(s)
        }
    }
}
function Wt(l) {
    let e, t = we(Array(8)), i = [];
    for (let s = 0; s < t.length; s += 1)
        i[s] = Ul(Kl(l, t, s));
    return {
        c() {
            e = h("div");
            for (let s = 0; s < i.length; s += 1)
                i[s].c();
            n(e, "class", "ispinner svelte-cblm91")
        },
        m(s, o) {
            C(s, e, o);
            for (let c = 0; c < i.length; c += 1)
                i[c] && i[c].m(e, null)
        },
        p: R,
        d(s) {
            s && M(e),
            It(i, s)
        }
    }
}
function Ul(l) {
    let e;
    return {
        c() {
            e = h("div"),
            n(e, "class", "ispinner-blade svelte-cblm91")
        },
        m(t, i) {
            C(t, e, i)
        },
        p: R,
        d(t) {
            t && M(e)
        }
    }
}
function Zt(l) {
    let e, t, i = l[5] ? "tap" : "enter", s;
    return {
        c() {
            e = h("div"),
            t = h("span"),
            s = me(i),
            n(t, "class", "svelte-cblm91"),
            n(e, "class", "cursor-hint svelte-cblm91"),
            X(e, "left", l[3] + "px"),
            X(e, "top", l[4] + "px")
        },
        m(o, c) {
            C(o, e, c),
            r(e, t),
            r(t, s)
        },
        p(o, c) {
            c & 32 && i !== (i = o[5] ? "tap" : "enter") && Be(s, i),
            c & 8 && X(e, "left", o[3] + "px"),
            c & 16 && X(e, "top", o[4] + "px")
        },
        d(o) {
            o && M(e)
        }
    }
}
function Wl(l) {
    let e, t = l[0] && Ut(l);
    return {
        c() {
            t && t.c(),
            e = _l()
        },
        m(i, s) {
            t && t.m(i, s),
            C(i, e, s)
        },
        p(i, [s]) {
            i[0] ? t ? t.p(i, s) : (t = Ut(i),
            t.c(),
            t.m(e.parentNode, e)) : t && (t.d(1),
            t = null)
        },
        i: R,
        o: R,
        d(i) {
            i && M(e),
            t && t.d(i)
        }
    }
}
function Zl(l, e, t) {
    let i = !0
      , s = !1
      , o = !1
      , c = 0
      , p = 0
      , d = !1
      , f = !1;
    const w = Rl();
    bl( () => {
        t(3, c = window.innerWidth / 2),
        t(4, p = window.innerHeight / 2),
        t(5, d = window.matchMedia("(pointer: coarse)").matches)
    }
    ),
    setTimeout( () => {
        t(2, o = !0)
    }
    , 1e3);
    function _(B) {
        t(3, c = B.clientX),
        t(4, p = B.clientY)
    }
    function y(B) {
        !o || f || (f = !0,
        t(1, s = !0),
        w("enter"),
        setTimeout( () => {
            t(0, i = !1)
        }
        , 600))
    }
    return [i, s, o, c, p, d, _, y]
}
class Ql extends Cl {
    constructor(e) {
        super(),
        Ml(this, e, Zl, Wl, gl, {})
    }
}
const Qt = "http://www.w3.org/2000/svg"
  , Jt = {
    convex_squircle: l => Math.pow(1 - Math.pow(1 - l, 4), .25),
    convex_circle: l => Math.sqrt(1 - (1 - l) * (1 - l)),
    concave: l => 1 - Math.sqrt(1 - (1 - l) * (1 - l)),
    lip: l => {
        const e = Math.pow(1 - Math.pow(1 - Math.min(l * 2, 1), 4), .25)
          , t = 1 - Math.sqrt(1 - (1 - l) * (1 - l)) + .1
          , i = 6 * l ** 5 - 15 * l ** 4 + 10 * l ** 3;
        return e * (1 - i) + t * i
    }
};
function Jl(l, e, t, i, s=128) {
    const o = 1 / i;
    function c(d, f) {
        const w = f
          , _ = 1 - o * o * (1 - w * w);
        if (_ < 0)
            return null;
        const y = Math.sqrt(_);
        return [-(o * w + y) * d, o - (o * w + y) * f]
    }
    const p = new Float64Array(s);
    for (let d = 0; d < s; d++) {
        const f = d / s
          , w = t(f)
          , _ = f < 1 ? 1e-4 : -1e-4
          , B = (t(f + _) - w) / _
          , m = Math.sqrt(B * B + 1)
          , T = c(-B / m, -1 / m);
        if (!T) {
            p[d] = 0;
            continue
        }
        p[d] = T[0] * ((w * e + l) / T[1])
    }
    return p
}
function xl(l, e, t, i, s, o) {
    const c = document.createElement("canvas");
    c.width = l,
    c.height = e;
    const p = c.getContext("2d")
      , d = p.createImageData(l, e)
      , f = d.data;
    for (let k = 0; k < f.length; k += 4)
        f[k] = 128,
        f[k + 1] = 128,
        f[k + 2] = 0,
        f[k + 3] = 255;
    const w = t
      , _ = w * w
      , y = (w + 1) ** 2
      , B = Math.max(w - i, 0) ** 2
      , m = l - w * 2
      , T = e - w * 2
      , g = s.length;
    for (let k = 0; k < e; k++)
        for (let S = 0; S < l; S++) {
            const L = S < w ? S - w : S >= l - w ? S - w - m : 0
              , Y = k < w ? k - w : k >= e - w ? k - w - T : 0
              , b = L * L + Y * Y;
            if (b > y || b < B)
                continue;
            const H = Math.sqrt(b)
              , P = w - H
              , D = b < _ ? 1 : 1 - (H - Math.sqrt(_)) / (Math.sqrt(y) - Math.sqrt(_));
            if (D <= 0 || H === 0)
                continue;
            const z = L / H
              , J = Y / H
              , ne = Math.min(P / i * g | 0, g - 1)
              , W = s[ne] || 0
              , Q = -z * W / o
              , ue = -J * W / o
              , F = (k * l + S) * 4;
            f[F] = 128 + Q * 127 * D + .5 | 0,
            f[F + 1] = 128 + ue * 127 * D + .5 | 0
        }
    return p.putImageData(d, 0, 0),
    c.toDataURL()
}
function $l(l, e, t, i, s=Math.PI / 3) {
    const o = document.createElement("canvas");
    o.width = l,
    o.height = e;
    const c = o.getContext("2d")
      , p = c.createImageData(l, e)
      , d = p.data;
    d.fill(0);
    const f = t
      , w = f * f
      , _ = (f + 1) ** 2
      , y = Math.max(f - i, 0) ** 2
      , B = l - f * 2
      , m = e - f * 2
      , T = [Math.cos(s), Math.sin(s)];
    for (let g = 0; g < e; g++)
        for (let k = 0; k < l; k++) {
            const S = k < f ? k - f : k >= l - f ? k - f - B : 0
              , L = g < f ? g - f : g >= e - f ? g - f - m : 0
              , Y = S * S + L * L;
            if (Y > _ || Y < y)
                continue;
            const b = Math.sqrt(Y)
              , H = f - b
              , P = Y < w ? 1 : 1 - (b - Math.sqrt(w)) / (Math.sqrt(_) - Math.sqrt(w));
            if (P <= 0 || b === 0)
                continue;
            const D = S / b
              , z = -L / b
              , J = Math.abs(D * T[0] + z * T[1])
              , ne = Math.sqrt(Math.max(0, 1 - (1 - H) ** 2))
              , W = J * ne
              , Q = 255 * W | 0
              , ue = Q * W * P | 0
              , F = (g * l + k) * 4;
            d[F] = Q,
            d[F + 1] = Q,
            d[F + 2] = Q,
            d[F + 3] = ue
        }
    return c.putImageData(p, 0, 0),
    o.toDataURL()
}
const xt = {
    surface: "convex_squircle",
    radius: 20,
    glassThickness: 60,
    bezelWidth: 18,
    refractiveIndex: 1.5,
    scaleRatio: 1,
    blurAmount: 0,
    cssBlur: 20,
    specularOpacity: .4,
    specularSaturation: 4,
    cssVar: "--liquid-backdrop",
    disableMatchMedia: "(max-width: 700px), (pointer: coarse)"
};
let en = 0;
function tn() {
    const l = navigator.userAgent;
    return !(!/Chrome|Chromium|Edg\//.test(l) || /OPR\b|Opera|Firefox/.test(l))
}
function ln(l, e={}) {
    let t = {
        ...xt,
        ...e
    };
    const i = `liquid-glass-${++en}`
      , s = document.createElementNS(Qt, "svg");
    s.setAttribute("width", "0"),
    s.setAttribute("height", "0"),
    s.setAttribute("color-interpolation-filters", "sRGB"),
    s.setAttribute("aria-hidden", "true"),
    s.style.cssText = "position:absolute;width:0;height:0;overflow:hidden;pointer-events:none;";
    const o = document.createElementNS(Qt, "defs");
    s.appendChild(o),
    document.body.appendChild(s);
    const c = tn()
      , p = t.disableMatchMedia ? window.matchMedia(t.disableMatchMedia) : null;
    let d, f = {
        w: 0,
        h: 0
    };
    function w() {
        return !c || p && p.matches
    }
    function _() {
        if (w()) {
            o.innerHTML = "",
            l.style.removeProperty(t.cssVar);
            return
        }
        const T = l.offsetWidth
          , g = l.offsetHeight;
        if (T < 2 || g < 2 || T === f.w && g === f.h && o.children.length)
            return;
        f = {
            w: T,
            h: g
        };
        const k = Jt[t.surface] || Jt.convex_squircle
          , S = Math.min(t.radius, Math.min(T, g) / 2 - 1)
          , L = Math.min(t.bezelWidth, S - 1, Math.min(T, g) / 2 - 1);
        if (S < 2 || L < 1)
            return;
        const Y = Jl(t.glassThickness, L, k, t.refractiveIndex, 96)
          , b = Math.max(...Array.from(Y).map(Math.abs)) || 1
          , H = xl(T, g, S, L, Y, b)
          , P = $l(T, g, S, L * 2.5)
          , D = b * t.scaleRatio
          , z = t.blurAmount > 0
          , J = z ? `<feGaussianBlur in="SourceGraphic" stdDeviation="${t.blurAmount}" result="blurred_source" />` : ""
          , ne = z ? "blurred_source" : "SourceGraphic";
        o.innerHTML = `
      <filter id="${i}" x="0%" y="0%" width="100%" height="100%">
        ${J}
        <feImage href="${H}" x="0" y="0" width="${T}" height="${g}" result="disp_map" />
        <feDisplacementMap in="${ne}" in2="disp_map"
          scale="${D}" xChannelSelector="R" yChannelSelector="G"
          result="displaced" />
        <feColorMatrix in="displaced" type="saturate" values="${t.specularSaturation}" result="displaced_sat" />
        <feImage href="${P}" x="0" y="0" width="${T}" height="${g}" result="spec_layer" />
        <feComposite in="displaced_sat" in2="spec_layer" operator="in" result="spec_masked" />
        <feComponentTransfer in="spec_layer" result="spec_faded">
          <feFuncA type="linear" slope="${t.specularOpacity}" />
        </feComponentTransfer>
        <feBlend in="spec_masked" in2="displaced" mode="normal" result="with_sat" />
        <feBlend in="spec_faded" in2="with_sat" mode="normal" />
      </filter>
    `;
        const W = t.cssBlur > 0 ? `blur(${t.cssBlur}px) url(#${i})` : `url(#${i})`;
        l.style.setProperty(t.cssVar, W)
    }
    function y() {
        clearTimeout(d),
        d = setTimeout(_, 30)
    }
    const B = new ResizeObserver(y);
    B.observe(l);
    const m = () => {
        f = {
            w: 0,
            h: 0
        },
        y()
    }
    ;
    return p == null || p.addEventListener("change", m),
    requestAnimationFrame( () => requestAnimationFrame(_)),
    {
        update(T) {
            t = {
                ...xt,
                ...T
            },
            f = {
                w: 0,
                h: 0
            },
            y()
        },
        destroy() {
            clearTimeout(d),
            B.disconnect(),
            p == null || p.removeEventListener("change", m),
            s.remove(),
            l.style.removeProperty(t.cssVar)
        }
    }
}
const {window: Et} = Il;
function $t(l, e, t) {
    const i = l.slice();
    return i[105] = e[t],
    i
}
function el(l, e, t) {
    const i = l.slice();
    return i[108] = e[t],
    i
}
function tl(l, e, t) {
    const i = l.slice();
    return i[111] = e[t],
    i
}
function ll(l, e, t) {
    const i = l.slice();
    return i[111] = e[t],
    i
}
function nl(l, e, t) {
    const i = l.slice();
    return i[116] = e[t],
    i
}
function nn(l) {
    let e, t, i;
    return {
        c() {
            e = q("svg"),
            t = q("circle"),
            i = q("path"),
            n(t, "cx", "12"),
            n(t, "cy", "12"),
            n(t, "r", "10"),
            n(i, "d", "M12 16v-4M12 8h.01"),
            n(e, "width", "24"),
            n(e, "height", "24"),
            n(e, "viewBox", "0 0 24 24"),
            n(e, "fill", "none"),
            n(e, "stroke", "currentColor"),
            n(e, "stroke-width", "1.5")
        },
        m(s, o) {
            C(s, e, o),
            r(e, t),
            r(e, i)
        },
        p: R,
        d(s) {
            s && M(e)
        }
    }
}
function sn(l) {
    let e, t;
    return {
        c() {
            e = q("svg"),
            t = q("path"),
            n(t, "d", "M20 6L9 17l-5-5"),
            n(e, "width", "24"),
            n(e, "height", "24"),
            n(e, "viewBox", "0 0 24 24"),
            n(e, "fill", "none"),
            n(e, "stroke", "#34C759"),
            n(e, "stroke-width", "2")
        },
        m(i, s) {
            C(i, e, s),
            r(e, t)
        },
        p: R,
        d(i) {
            i && M(e)
        }
    }
}
function on(l) {
    let e, t;
    return {
        c() {
            e = h("img"),
            se(e.src, t = l[35] + "telegram.svg") || n(e, "src", t),
            n(e, "alt", ""),
            n(e, "width", "24"),
            n(e, "height", "24"),
            n(e, "class", "svelte-mupbg4")
        },
        m(i, s) {
            C(i, e, s)
        },
        p: R,
        d(i) {
            i && M(e)
        }
    }
}
function rn(l) {
    let e, t, i, s;
    return {
        c() {
            e = q("svg"),
            t = q("path"),
            i = q("path"),
            s = q("path"),
            n(t, "d", "M18.5 8c.5-1.5 0-3-1.5-3.5s-3 .5-3.5 2l-1 3"),
            n(i, "d", "M14.5 9.5c.5-1.5 0-3-1.5-3.5s-3 .5-3.5 2l-.5 2"),
            n(s, "d", "M10.5 11c.5-1.5 0-3-1.5-3.5s-3 .5-3.5 2l-1 4c-1 4 1 7 5 8s7-1 8-5l2-6c.5-1.5 0-3-1.5-3.5s-3 .5-3.5 2l-1 3"),
            n(e, "width", "24"),
            n(e, "height", "24"),
            n(e, "viewBox", "0 0 24 24"),
            n(e, "fill", "none"),
            n(e, "stroke", "currentColor"),
            n(e, "stroke-width", "1.5"),
            n(e, "stroke-linecap", "round"),
            n(e, "stroke-linejoin", "round")
        },
        m(o, c) {
            C(o, e, c),
            r(e, t),
            r(e, i),
            r(e, s)
        },
        p: R,
        d(o) {
            o && M(e)
        }
    }
}
function cn(l) {
    let e, t = l[116].title + "", i, s, o, c = l[116].message + "", p;
    return {
        c() {
            e = h("span"),
            i = me(t),
            s = A(),
            o = h("span"),
            p = me(c),
            n(e, "class", "notification-title svelte-mupbg4"),
            n(o, "class", "notification-message svelte-mupbg4")
        },
        m(d, f) {
            C(d, e, f),
            r(e, i),
            C(d, s, f),
            C(d, o, f),
            r(o, p)
        },
        p(d, f) {
            f[0] & 524288 && t !== (t = d[116].title + "") && Be(i, t),
            f[0] & 524288 && c !== (c = d[116].message + "") && Be(p, c)
        },
        d(d) {
            d && (M(e),
            M(s),
            M(o))
        }
    }
}
function an(l) {
    let e, t = l[116].title + "", i, s, o;
    return {
        c() {
            e = h("span"),
            i = me(t),
            s = A(),
            o = h("span"),
            o.innerHTML = 'Нажми <span class="notif-key svelte-mupbg4">⌘</span><span class="notif-key svelte-mupbg4">K</span> для поиска',
            n(e, "class", "notification-title svelte-mupbg4"),
            n(o, "class", "notification-message svelte-mupbg4")
        },
        m(c, p) {
            C(c, e, p),
            r(e, i),
            C(c, s, p),
            C(c, o, p)
        },
        p(c, p) {
            p[0] & 524288 && t !== (t = c[116].title + "") && Be(i, t)
        },
        d(c) {
            c && (M(e),
            M(s),
            M(o))
        }
    }
}
function il(l, e) {
    let t, i, s, o, c, p, d;
    function f(g, k) {
        return g[116].icon === "wave" ? rn : g[116].icon === "telegram" ? on : g[116].icon === "check" ? sn : nn
    }
    let w = f(e)
      , _ = w(e);
    function y(g, k) {
        return g[116].message === "shortcut" ? an : cn
    }
    let B = y(e)
      , m = B(e);
    function T() {
        return e[63](e[116])
    }
    return {
        key: l,
        first: null,
        c() {
            t = h("div"),
            i = h("div"),
            _.c(),
            s = A(),
            o = h("div"),
            m.c(),
            c = A(),
            n(i, "class", "notification-icon svelte-mupbg4"),
            n(o, "class", "notification-content svelte-mupbg4"),
            n(t, "class", "notification svelte-mupbg4"),
            V(t, "hiding", !e[116].visible),
            this.first = t
        },
        m(g, k) {
            C(g, t, k),
            r(t, i),
            _.m(i, null),
            r(t, s),
            r(t, o),
            m.m(o, null),
            r(t, c),
            p || (d = G(t, "click", T),
            p = !0)
        },
        p(g, k) {
            e = g,
            w === (w = f(e)) && _ ? _.p(e, k) : (_.d(1),
            _ = w(e),
            _ && (_.c(),
            _.m(i, null))),
            B === (B = y(e)) && m ? m.p(e, k) : (m.d(1),
            m = B(e),
            m && (m.c(),
            m.m(o, null))),
            k[0] & 524288 && V(t, "hiding", !e[116].visible)
        },
        d(g) {
            g && M(t),
            _.d(),
            m.d(),
            p = !1,
            d()
        }
    }
}
function un(l) {
    let e, t;
    return {
        c() {
            e = h("img"),
            se(e.src, t = l[35] + "cursor-default.svg") || n(e, "src", t),
            n(e, "alt", ""),
            n(e, "draggable", "false"),
            n(e, "class", "svelte-mupbg4")
        },
        m(i, s) {
            C(i, e, s)
        },
        p: R,
        d(i) {
            i && M(e)
        }
    }
}
function fn(l) {
    let e, t;
    return {
        c() {
            e = h("img"),
            se(e.src, t = l[35] + "cursor-pointer.svg") || n(e, "src", t),
            n(e, "alt", ""),
            n(e, "draggable", "false"),
            n(e, "class", "svelte-mupbg4")
        },
        m(i, s) {
            C(i, e, s)
        },
        p: R,
        d(i) {
            i && M(e)
        }
    }
}
function sl(l) {
    let e, t, i, s, o, c, p, d, f, w, _, y, B, m, T, g = we(l[34]), k = [];
    for (let L = 0; L < g.length; L += 1)
        k[L] = ol(ll(l, g, L));
    let S = l[34].length === 0 && rl();
    return {
        c() {
            e = h("div"),
            t = h("div"),
            i = h("div"),
            s = q("svg"),
            o = q("circle"),
            c = q("path"),
            p = A(),
            d = h("input"),
            f = A(),
            w = h("span"),
            w.textContent = "esc",
            _ = A(),
            y = h("div");
            for (let L = 0; L < k.length; L += 1)
                k[L].c();
            B = A(),
            S && S.c(),
            n(o, "cx", "11"),
            n(o, "cy", "11"),
            n(o, "r", "8"),
            n(c, "d", "m21 21-4.35-4.35"),
            n(s, "class", "spotlight-icon svelte-mupbg4"),
            n(s, "width", "20"),
            n(s, "height", "20"),
            n(s, "viewBox", "0 0 24 24"),
            n(s, "fill", "none"),
            n(s, "stroke", "currentColor"),
            n(s, "stroke-width", "2"),
            n(d, "type", "text"),
            n(d, "class", "spotlight-input svelte-mupbg4"),
            n(d, "placeholder", "Поиск..."),
            n(w, "class", "spotlight-shortcut svelte-mupbg4"),
            n(i, "class", "spotlight-input-wrapper svelte-mupbg4"),
            n(y, "class", "spotlight-results svelte-mupbg4"),
            n(t, "class", "spotlight svelte-mupbg4"),
            n(e, "class", "spotlight-overlay svelte-mupbg4")
        },
        m(L, Y) {
            C(L, e, Y),
            r(e, t),
            r(t, i),
            r(i, s),
            r(s, o),
            r(s, c),
            r(i, p),
            r(i, d),
            Gt(d, l[0]),
            l[67](d),
            r(i, f),
            r(i, w),
            r(t, _),
            r(t, y);
            for (let b = 0; b < k.length; b += 1)
                k[b] && k[b].m(y, null);
            r(y, B),
            S && S.m(y, null),
            m || (T = [G(d, "input", l[66]), G(t, "click", vl(l[60])), G(e, "click", l[43])],
            m = !0)
        },
        p(L, Y) {
            if (Y[0] & 1 && d.value !== L[0] && Gt(d, L[0]),
            Y[1] & 2072) {
                g = we(L[34]);
                let b;
                for (b = 0; b < g.length; b += 1) {
                    const H = ll(L, g, b);
                    k[b] ? k[b].p(H, Y) : (k[b] = ol(H),
                    k[b].c(),
                    k[b].m(y, B))
                }
                for (; b < k.length; b += 1)
                    k[b].d(1);
                k.length = g.length
            }
            L[34].length === 0 ? S || (S = rl(),
            S.c(),
            S.m(y, null)) : S && (S.d(1),
            S = null)
        },
        d(L) {
            L && M(e),
            l[67](null),
            It(k, L),
            S && S.d(),
            m = !1,
            ze(T)
        }
    }
}
function dn(l) {
    let e, t;
    return {
        c() {
            e = q("svg"),
            t = q("path"),
            n(t, "d", "M4 4l7.07 17 2.51-7.39L21 11.07 4 4z"),
            n(e, "width", "20"),
            n(e, "height", "20"),
            n(e, "viewBox", "0 0 24 24"),
            n(e, "fill", "none"),
            n(e, "stroke", "currentColor"),
            n(e, "stroke-width", "1.5"),
            n(e, "class", "svelte-mupbg4")
        },
        m(i, s) {
            C(i, e, s),
            r(e, t)
        },
        p: R,
        d(i) {
            i && M(e)
        }
    }
}
function pn(l) {
    let e, t, i;
    return {
        c() {
            e = q("svg"),
            t = q("rect"),
            i = q("path"),
            n(t, "x", "2"),
            n(t, "y", "4"),
            n(t, "width", "20"),
            n(t, "height", "16"),
            n(t, "rx", "2"),
            n(i, "d", "M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M8 16h8"),
            n(e, "width", "20"),
            n(e, "height", "20"),
            n(e, "viewBox", "0 0 24 24"),
            n(e, "fill", "none"),
            n(e, "stroke", "currentColor"),
            n(e, "stroke-width", "1.5"),
            n(e, "class", "svelte-mupbg4")
        },
        m(s, o) {
            C(s, e, o),
            r(e, t),
            r(e, i)
        },
        p: R,
        d(s) {
            s && M(e)
        }
    }
}
function hn(l) {
    let e, t;
    return {
        c() {
            e = q("svg"),
            t = q("path"),
            n(t, "d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"),
            n(e, "width", "20"),
            n(e, "height", "20"),
            n(e, "viewBox", "0 0 24 24"),
            n(e, "fill", "none"),
            n(e, "stroke", "currentColor"),
            n(e, "stroke-width", "1.5"),
            n(e, "class", "svelte-mupbg4")
        },
        m(i, s) {
            C(i, e, s),
            r(e, t)
        },
        p: R,
        d(i) {
            i && M(e)
        }
    }
}
function mn(l) {
    let e, t;
    return {
        c() {
            e = h("img"),
            se(e.src, t = l[35] + "gitlab.svg") || n(e, "src", t),
            n(e, "alt", ""),
            n(e, "width", "20"),
            n(e, "height", "20"),
            n(e, "class", "svelte-mupbg4")
        },
        m(i, s) {
            C(i, e, s)
        },
        p: R,
        d(i) {
            i && M(e)
        }
    }
}
function gn(l) {
    let e, t;
    return {
        c() {
            e = h("img"),
            se(e.src, t = l[35] + "spotify.svg") || n(e, "src", t),
            n(e, "alt", ""),
            n(e, "width", "20"),
            n(e, "height", "20"),
            n(e, "class", "svelte-mupbg4")
        },
        m(i, s) {
            C(i, e, s)
        },
        p: R,
        d(i) {
            i && M(e)
        }
    }
}
function _n(l) {
    let e, t;
    return {
        c() {
            e = h("img"),
            se(e.src, t = l[35] + "telegram.svg") || n(e, "src", t),
            n(e, "alt", ""),
            n(e, "width", "20"),
            n(e, "height", "20"),
            n(e, "class", "svelte-mupbg4")
        },
        m(i, s) {
            C(i, e, s)
        },
        p: R,
        d(i) {
            i && M(e)
        }
    }
}
function vn(l) {
    let e, t, i;
    return {
        c() {
            e = q("svg"),
            t = q("circle"),
            i = q("path"),
            n(t, "cx", "12"),
            n(t, "cy", "8"),
            n(t, "r", "4"),
            n(i, "d", "M4 20c0-4 4-6 8-6s8 2 8 6"),
            n(e, "width", "20"),
            n(e, "height", "20"),
            n(e, "viewBox", "0 0 24 24"),
            n(e, "fill", "none"),
            n(e, "stroke", "currentColor"),
            n(e, "stroke-width", "1.5"),
            n(e, "class", "svelte-mupbg4")
        },
        m(s, o) {
            C(s, e, o),
            r(e, t),
            r(e, i)
        },
        p: R,
        d(s) {
            s && M(e)
        }
    }
}
function ol(l) {
    let e, t, i, s, o, c = l[111].title + "", p, d, f, w = l[111].desc + "", _, y, B;
    function m(S, L) {
        if (S[111].icon === "person")
            return vn;
        if (S[111].icon === "telegram")
            return _n;
        if (S[111].icon === "spotify")
            return gn;
        if (S[111].icon === "gitlab")
            return mn;
        if (S[111].icon === "star")
            return hn;
        if (S[111].icon === "keyboard")
            return pn;
        if (S[111].icon === "cursor")
            return dn
    }
    let T = m(l)
      , g = T && T(l);
    function k() {
        return l[68](l[111])
    }
    return {
        c() {
            e = h("div"),
            t = h("div"),
            g && g.c(),
            i = A(),
            s = h("div"),
            o = h("span"),
            p = me(c),
            d = A(),
            f = h("span"),
            _ = me(w),
            n(t, "class", "spotlight-item-icon svelte-mupbg4"),
            n(o, "class", "spotlight-item-title svelte-mupbg4"),
            n(f, "class", "spotlight-item-desc svelte-mupbg4"),
            n(s, "class", "spotlight-item-content svelte-mupbg4"),
            n(e, "class", "spotlight-item svelte-mupbg4")
        },
        m(S, L) {
            C(S, e, L),
            r(e, t),
            g && g.m(t, null),
            r(e, i),
            r(e, s),
            r(s, o),
            r(o, p),
            r(s, d),
            r(s, f),
            r(f, _),
            y || (B = G(e, "click", k),
            y = !0)
        },
        p(S, L) {
            l = S,
            T === (T = m(l)) && g ? g.p(l, L) : (g && g.d(1),
            g = T && T(l),
            g && (g.c(),
            g.m(t, null))),
            L[1] & 8 && c !== (c = l[111].title + "") && Be(p, c),
            L[1] & 8 && w !== (w = l[111].desc + "") && Be(_, w)
        },
        d(S) {
            S && M(e),
            g && g.d(),
            y = !1,
            B()
        }
    }
}
function rl(l) {
    let e;
    return {
        c() {
            e = h("div"),
            e.textContent = "Ничего не найдено",
            n(e, "class", "spotlight-empty svelte-mupbg4")
        },
        m(t, i) {
            C(t, e, i)
        },
        d(t) {
            t && M(e)
        }
    }
}
function cl(l) {
    let e, t, i, s = we(l[38]), o = [];
    for (let c = 0; c < s.length; c += 1)
        o[c] = al(tl(l, s, c));
    return {
        c() {
            e = h("div");
            for (let c = 0; c < o.length; c += 1)
                o[c].c();
            n(e, "class", "context-menu svelte-mupbg4"),
            X(e, "left", l[30] + "px"),
            X(e, "top", l[31] + "px")
        },
        m(c, p) {
            C(c, e, p);
            for (let d = 0; d < o.length; d += 1)
                o[d] && o[d].m(e, null);
            t || (i = G(e, "click", vl(l[59])),
            t = !0)
        },
        p(c, p) {
            if (p[1] & 32912) {
                s = we(c[38]);
                let d;
                for (d = 0; d < s.length; d += 1) {
                    const f = tl(c, s, d);
                    o[d] ? o[d].p(f, p) : (o[d] = al(f),
                    o[d].c(),
                    o[d].m(e, null))
                }
                for (; d < o.length; d += 1)
                    o[d].d(1);
                o.length = s.length
            }
            p[0] & 1073741824 && X(e, "left", c[30] + "px"),
            p[1] & 1 && X(e, "top", c[31] + "px")
        },
        d(c) {
            c && M(e),
            It(o, c),
            t = !1,
            i()
        }
    }
}
function bn(l) {
    let e, t, i, s, o, c, p, d;
    function f(m, T) {
        if (m[111].icon === "copy")
            return Tn;
        if (m[111].icon === "share")
            return Sn;
        if (m[111].icon === "telegram")
            return Cn;
        if (m[111].icon === "spotify")
            return Mn;
        if (m[111].icon === "gitlab")
            return yn;
        if (m[111].icon === "search")
            return kn
    }
    let w = f(l)
      , _ = w && w(l)
      , y = l[111].shortcut && Ln(l);
    function B() {
        return l[69](l[111])
    }
    return {
        c() {
            e = h("div"),
            t = h("div"),
            _ && _.c(),
            i = A(),
            s = h("span"),
            s.textContent = `${l[111].label}`,
            o = A(),
            y && y.c(),
            c = A(),
            n(t, "class", "context-menu-icon svelte-mupbg4"),
            n(s, "class", "context-menu-label svelte-mupbg4"),
            n(e, "class", "context-menu-item svelte-mupbg4")
        },
        m(m, T) {
            C(m, e, T),
            r(e, t),
            _ && _.m(t, null),
            r(e, i),
            r(e, s),
            r(e, o),
            y && y.m(e, null),
            r(e, c),
            p || (d = G(e, "click", B),
            p = !0)
        },
        p(m, T) {
            l = m,
            _ && _.p(l, T),
            l[111].shortcut && y.p(l, T)
        },
        d(m) {
            m && M(e),
            _ && _.d(),
            y && y.d(),
            p = !1,
            d()
        }
    }
}
function wn(l) {
    let e;
    return {
        c() {
            e = h("div"),
            n(e, "class", "context-menu-separator svelte-mupbg4")
        },
        m(t, i) {
            C(t, e, i)
        },
        p: R,
        d(t) {
            t && M(e)
        }
    }
}
function kn(l) {
    let e, t, i;
    return {
        c() {
            e = q("svg"),
            t = q("circle"),
            i = q("path"),
            n(t, "cx", "11"),
            n(t, "cy", "11"),
            n(t, "r", "8"),
            n(i, "d", "m21 21-4.35-4.35"),
            n(e, "width", "16"),
            n(e, "height", "16"),
            n(e, "viewBox", "0 0 24 24"),
            n(e, "fill", "none"),
            n(e, "stroke", "currentColor"),
            n(e, "stroke-width", "1.5")
        },
        m(s, o) {
            C(s, e, o),
            r(e, t),
            r(e, i)
        },
        p: R,
        d(s) {
            s && M(e)
        }
    }
}
function yn(l) {
    let e, t;
    return {
        c() {
            e = h("img"),
            se(e.src, t = l[35] + "gitlab.svg") || n(e, "src", t),
            n(e, "alt", ""),
            n(e, "width", "16"),
            n(e, "height", "16"),
            n(e, "class", "svelte-mupbg4")
        },
        m(i, s) {
            C(i, e, s)
        },
        p: R,
        d(i) {
            i && M(e)
        }
    }
}
function Mn(l) {
    let e, t;
    return {
        c() {
            e = h("img"),
            se(e.src, t = l[35] + "spotify.svg") || n(e, "src", t),
            n(e, "alt", ""),
            n(e, "width", "16"),
            n(e, "height", "16"),
            n(e, "class", "svelte-mupbg4")
        },
        m(i, s) {
            C(i, e, s)
        },
        p: R,
        d(i) {
            i && M(e)
        }
    }
}
function Cn(l) {
    let e, t;
    return {
        c() {
            e = h("img"),
            se(e.src, t = l[35] + "telegram.svg") || n(e, "src", t),
            n(e, "alt", ""),
            n(e, "width", "16"),
            n(e, "height", "16"),
            n(e, "class", "svelte-mupbg4")
        },
        m(i, s) {
            C(i, e, s)
        },
        p: R,
        d(i) {
            i && M(e)
        }
    }
}
function Sn(l) {
    let e, t, i, s;
    return {
        c() {
            e = q("svg"),
            t = q("path"),
            i = q("polyline"),
            s = q("line"),
            n(t, "d", "M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"),
            n(i, "points", "16,6 12,2 8,6"),
            n(s, "x1", "12"),
            n(s, "y1", "2"),
            n(s, "x2", "12"),
            n(s, "y2", "15"),
            n(e, "width", "16"),
            n(e, "height", "16"),
            n(e, "viewBox", "0 0 24 24"),
            n(e, "fill", "none"),
            n(e, "stroke", "currentColor"),
            n(e, "stroke-width", "1.5")
        },
        m(o, c) {
            C(o, e, c),
            r(e, t),
            r(e, i),
            r(e, s)
        },
        p: R,
        d(o) {
            o && M(e)
        }
    }
}
function Tn(l) {
    let e, t, i;
    return {
        c() {
            e = q("svg"),
            t = q("rect"),
            i = q("path"),
            n(t, "x", "9"),
            n(t, "y", "9"),
            n(t, "width", "13"),
            n(t, "height", "13"),
            n(t, "rx", "2"),
            n(i, "d", "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"),
            n(e, "width", "16"),
            n(e, "height", "16"),
            n(e, "viewBox", "0 0 24 24"),
            n(e, "fill", "none"),
            n(e, "stroke", "currentColor"),
            n(e, "stroke-width", "1.5")
        },
        m(s, o) {
            C(s, e, o),
            r(e, t),
            r(e, i)
        },
        p: R,
        d(s) {
            s && M(e)
        }
    }
}
function Ln(l) {
    let e;
    return {
        c() {
            e = h("span"),
            e.textContent = `${l[111].shortcut}`,
            n(e, "class", "context-menu-shortcut svelte-mupbg4")
        },
        m(t, i) {
            C(t, e, i)
        },
        p: R,
        d(t) {
            t && M(e)
        }
    }
}
function al(l) {
    let e;
    function t(o, c) {
        return o[111].type === "separator" ? wn : bn
    }
    let s = t(l)(l);
    return {
        c() {
            s.c(),
            e = _l()
        },
        m(o, c) {
            s.m(o, c),
            C(o, e, c)
        },
        p(o, c) {
            s.p(o, c)
        },
        d(o) {
            o && M(e),
            s.d(o)
        }
    }
}
function ul(l) {
    let e;
    return {
        c() {
            e = h("div"),
            e.innerHTML = '<span class="svelte-mupbg4"></span><span class="svelte-mupbg4"></span><span class="svelte-mupbg4"></span>',
            n(e, "class", "audio-bars svelte-mupbg4")
        },
        m(t, i) {
            C(t, e, i)
        },
        d(t) {
            t && M(e)
        }
    }
}
function Bn(l) {
    let e, t;
    return {
        c() {
            e = q("svg"),
            t = q("path"),
            n(t, "d", "M8 5v14l11-7z"),
            n(e, "width", "18"),
            n(e, "height", "18"),
            n(e, "viewBox", "0 0 24 24"),
            n(e, "fill", "currentColor")
        },
        m(i, s) {
            C(i, e, s),
            r(e, t)
        },
        d(i) {
            i && M(e)
        }
    }
}
function En(l) {
    let e, t, i;
    return {
        c() {
            e = q("svg"),
            t = q("rect"),
            i = q("rect"),
            n(t, "x", "6"),
            n(t, "y", "4"),
            n(t, "width", "4"),
            n(t, "height", "16"),
            n(t, "rx", "1"),
            n(i, "x", "14"),
            n(i, "y", "4"),
            n(i, "width", "4"),
            n(i, "height", "16"),
            n(i, "rx", "1"),
            n(e, "width", "18"),
            n(e, "height", "18"),
            n(e, "viewBox", "0 0 24 24"),
            n(e, "fill", "currentColor")
        },
        m(s, o) {
            C(s, e, o),
            r(e, t),
            r(e, i)
        },
        d(s) {
            s && M(e)
        }
    }
}
function fl(l, e) {
    let t;
    return {
        key: l,
        first: null,
        c() {
            t = h("div"),
            n(t, "class", "particle svelte-mupbg4"),
            X(t, "left", e[108].x + "px"),
            X(t, "top", e[108].y + "px"),
            X(t, "opacity", e[108].life),
            X(t, "transform", "scale(" + e[108].life + ")"),
            this.first = t
        },
        m(i, s) {
            C(i, t, s)
        },
        p(i, s) {
            e = i,
            s[0] & 512 && X(t, "left", e[108].x + "px"),
            s[0] & 512 && X(t, "top", e[108].y + "px"),
            s[0] & 512 && X(t, "opacity", e[108].life),
            s[0] & 512 && X(t, "transform", "scale(" + e[108].life + ")")
        },
        d(i) {
            i && M(t)
        }
    }
}
function dl(l) {
    let e;
    return {
        c() {
            e = h("span"),
            e.textContent = `${qn}`,
            n(e, "class", "badge svelte-mupbg4")
        },
        m(t, i) {
            C(t, e, i)
        },
        p: R,
        d(t) {
            t && M(e)
        }
    }
}
function pl(l) {
    let e, t, i, s, o, c, p, d = l[105].tooltip + "", f, w, _, y, B, m = l[105].icon === "telegram" && l[12] && dl();
    return {
        c() {
            e = h("a"),
            t = h("img"),
            s = A(),
            o = h("span"),
            o.textContent = `${l[105].title}`,
            c = A(),
            p = h("span"),
            f = me(d),
            w = A(),
            m && m.c(),
            _ = A(),
            se(t.src, i = l[35] + l[105].icon + ".svg") || n(t, "src", i),
            n(t, "alt", ""),
            n(t, "class", "icon svelte-mupbg4"),
            n(o, "class", "btn-text svelte-mupbg4"),
            n(p, "class", "tooltip " + l[105].tooltipPos + " svelte-mupbg4"),
            n(e, "href", l[105].url),
            n(e, "target", "_blank"),
            n(e, "rel", "noopener noreferrer"),
            n(e, "class", "link-btn svelte-mupbg4")
        },
        m(T, g) {
            C(T, e, g),
            r(e, t),
            r(e, s),
            r(e, o),
            r(e, c),
            r(e, p),
            r(p, f),
            r(e, w),
            m && m.m(e, null),
            r(e, _),
            y || (B = G(e, "click", l[56]),
            y = !0)
        },
        p(T, g) {
            T[105].icon === "telegram" && T[12] ? m ? m.p(T, g) : (m = dl(),
            m.c(),
            m.m(e, _)) : m && (m.d(1),
            m = null)
        },
        d(T) {
            T && M(e),
            m && m.d(),
            y = !1,
            B()
        }
    }
}
function An(l) {
    let e, t = [], i = new Map, s, o, c, p, d, f, w, _, y, B, m, T, g, k, S, L, Y, b, H, P, D, z, J, ne, W, Q, ue, F, fe, Fe = At(l[17]) + "", je, Ke, Me, Ee, Ue, Ae, lt, qe, Ie = At(l[16]) + "", Ce, nt, de, oe, Se, it, K, ge, st, Pe, ht, U, re, x, We, ce = [], mt = new Map, De, ke, Ze, _e, Xe, ot, gt, O, ve, ye, Re, rt, ae, _t, Te, Ye, Qe, vt, ct, bt, pe, Ne, ie, at, wt, Oe, kt, Ve, ut, Le, yt, Ge, N, ft, Mt, Je = we(l[19]);
    const Ct = a => a[116].id;
    for (let a = 0; a < Je.length; a += 1) {
        let v = nl(l, Je, a)
          , I = Ct(v);
        i.set(I, t[a] = il(I, v))
    }
    function St(a, v) {
        return a[26] ? fn : un
    }
    let xe = St(l)
      , he = xe(l);
    p = new Ql({}),
    p.$on("enter", l[48]);
    let $ = l[32] && sl(l)
      , ee = l[29] && cl(l)
      , le = l[14] && ul();
    function Tt(a, v) {
        return a[14] ? En : Bn
    }
    let u = Tt(l)
      , E = u(l)
      , j = we(l[9]);
    const te = a => a[108].id;
    for (let a = 0; a < j.length; a += 1) {
        let v = el(l, j, a)
          , I = te(v);
        mt.set(I, ce[a] = fl(I, v))
    }
    let be = we(l[36])
      , Z = [];
    for (let a = 0; a < be.length; a += 1)
        Z[a] = pl($t(l, be, a));
    return {
        c() {
            e = h("div");
            for (let a = 0; a < t.length; a += 1)
                t[a].c();
            s = A(),
            o = h("div"),
            he.c(),
            c = A(),
            Hl(p.$$.fragment),
            d = A(),
            f = h("audio"),
            _ = A(),
            $ && $.c(),
            y = A(),
            ee && ee.c(),
            B = A(),
            m = h("div"),
            m.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-mupbg4"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg> <span class="hint-text svelte-mupbg4">поиск</span> <div class="hint-keys svelte-mupbg4"><span class="key svelte-mupbg4">⌘</span><span class="key svelte-mupbg4">K</span></div>',
            T = A(),
            g = h("div"),
            k = h("div"),
            S = h("div"),
            L = h("img"),
            b = A(),
            H = h("div"),
            le && le.c(),
            P = A(),
            D = h("div"),
            z = h("span"),
            z.textContent = `${In}`,
            J = A(),
            ne = h("span"),
            ne.textContent = `${Pn}`,
            W = A(),
            Q = h("button"),
            E.c(),
            ue = A(),
            F = h("div"),
            fe = h("div"),
            je = me(Fe),
            Ke = A(),
            Me = h("div"),
            Ee = h("div"),
            Ue = A(),
            Ae = h("div"),
            lt = A(),
            qe = h("div"),
            Ce = me(Ie),
            nt = A(),
            de = h("div"),
            oe = q("svg"),
            Se = q("path"),
            it = A(),
            K = h("div"),
            ge = h("div"),
            st = A(),
            Pe = h("div"),
            ht = A(),
            U = q("svg"),
            re = q("path"),
            x = q("path"),
            We = A();
            for (let a = 0; a < ce.length; a += 1)
                ce[a].c();
            De = A(),
            ke = h("main"),
            Ze = h("div"),
            _e = h("video"),
            Xe = h("source"),
            gt = A(),
            O = h("div"),
            ve = h("div"),
            ye = h("div"),
            Re = h("button"),
            rt = A(),
            ae = h("button"),
            _t = A(),
            Te = h("button"),
            Ye = A(),
            Qe = h("div"),
            Qe.innerHTML = '<span class="window-title svelte-mupbg4">bio.app</span>',
            vt = A(),
            ct = h("div"),
            bt = A(),
            pe = h("div"),
            Ne = h("div"),
            ie = h("img"),
            wt = A(),
            Oe = h("h1"),
            Oe.textContent = "koutarou",
            kt = A(),
            Ve = h("p"),
            ut = me(l[7]),
            Le = h("span"),
            Le.textContent = "|",
            yt = A(),
            Ge = h("div");
            for (let a = 0; a < Z.length; a += 1)
                Z[a].c();
            n(e, "class", "notifications svelte-mupbg4"),
            n(o, "class", "custom-cursor svelte-mupbg4"),
            X(o, "transform", "translate3d(" + l[23] + "px, " + l[24] + "px, 0) translate(-20%, -15%) scale(" + l[25] + ")"),
            V(o, "pointer", l[26]),
            V(o, "ready", l[27]),
            se(f.src, w = l[35] + "track.mp3") || n(f, "src", w),
            n(f, "preload", "auto"),
            f.loop = !0,
            n(m, "class", "keyboard-hint svelte-mupbg4"),
            V(m, "hidden", l[32]),
            se(L.src, Y = l[35] + "track.webp") || n(L, "src", Y),
            n(L, "alt", ""),
            n(L, "class", "svelte-mupbg4"),
            n(H, "class", "audio-artwork-overlay svelte-mupbg4"),
            n(S, "class", "audio-artwork svelte-mupbg4"),
            n(z, "class", "audio-track svelte-mupbg4"),
            n(ne, "class", "audio-artist svelte-mupbg4"),
            n(D, "class", "audio-info svelte-mupbg4"),
            n(Q, "class", "audio-btn play-btn svelte-mupbg4"),
            n(k, "class", "audio-top svelte-mupbg4"),
            n(fe, "class", "audio-time svelte-mupbg4"),
            n(Ee, "class", "audio-progress-bar svelte-mupbg4"),
            X(Ee, "width", l[15] + "%"),
            n(Ae, "class", "progress-knob svelte-mupbg4"),
            X(Ae, "left", l[15] + "%"),
            n(Me, "class", "audio-progress svelte-mupbg4"),
            n(qe, "class", "audio-time svelte-mupbg4"),
            n(F, "class", "audio-progress-container svelte-mupbg4"),
            n(Se, "d", "M11 5L6 9H2v6h4l5 4V5z"),
            n(oe, "width", "14"),
            n(oe, "height", "14"),
            n(oe, "viewBox", "0 0 24 24"),
            n(oe, "fill", "none"),
            n(oe, "stroke", "currentColor"),
            n(oe, "stroke-width", "2"),
            n(ge, "class", "volume-fill svelte-mupbg4"),
            X(ge, "width", l[18] * 100 + "%"),
            n(Pe, "class", "volume-knob svelte-mupbg4"),
            X(Pe, "left", l[18] * 100 + "%"),
            n(K, "class", "volume-slider svelte-mupbg4"),
            n(re, "d", "M11 5L6 9H2v6h4l5 4V5z"),
            n(x, "d", "M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"),
            n(U, "width", "14"),
            n(U, "height", "14"),
            n(U, "viewBox", "0 0 24 24"),
            n(U, "fill", "none"),
            n(U, "stroke", "currentColor"),
            n(U, "stroke-width", "2"),
            n(de, "class", "audio-volume-row svelte-mupbg4"),
            n(g, "class", "audio-player svelte-mupbg4"),
            V(g, "playing", l[14]),
            se(Xe.src, ot = l[35] + "bg.mp4") || n(Xe, "src", ot),
            n(Xe, "type", "video/mp4"),
            _e.autoplay = !0,
            _e.muted = !0,
            _e.loop = !0,
            _e.playsInline = !0,
            n(_e, "class", "bg-video svelte-mupbg4"),
            n(Ze, "class", "background svelte-mupbg4"),
            n(Re, "class", "dot red svelte-mupbg4"),
            n(Re, "aria-label", "Close"),
            n(ae, "class", "dot yellow svelte-mupbg4"),
            n(ae, "aria-label", "Minimize"),
            n(Te, "class", "dot green svelte-mupbg4"),
            n(Te, "aria-label", "Zoom"),
            n(ye, "class", "traffic-lights svelte-mupbg4"),
            n(Qe, "class", "title-container svelte-mupbg4"),
            n(ve, "class", "title-bar svelte-mupbg4"),
            n(ct, "class", "title-bar-line svelte-mupbg4"),
            se(ie.src, at = l[35] + "avatar.webp") || n(ie, "src", at),
            n(ie, "alt", "Avatar"),
            n(ie, "class", "avatar svelte-mupbg4"),
            n(ie, "draggable", "false"),
            X(ie, "transform", "rotate(" + l[10].x + "deg) translateY(" + l[10].y + "px)"),
            V(ie, "glitch", l[11]),
            n(Ne, "class", "avatar-container svelte-mupbg4"),
            n(Oe, "class", "animated-gradient svelte-mupbg4"),
            n(Le, "class", "text-cursor svelte-mupbg4"),
            V(Le, "hidden", !l[8]),
            n(Ve, "class", "subtitle svelte-mupbg4"),
            n(Ge, "class", "links svelte-mupbg4"),
            n(pe, "class", "content svelte-mupbg4"),
            n(O, "class", "window-card svelte-mupbg4"),
            X(O, "transform", "translate(" + l[6].x + "px, " + l[6].y + "px) " + (l[2] ? "scale(0.01) translateY(500px)" : l[3] ? "scale(0.8)" : l[1] ? "" : "translateY(20px)")),
            X(O, "box-shadow", l[20] + "px " + (l[21] + 20) + "px 60px rgba(0, 0, 0, 0.4), " + l[20] * .5 + "px " + (l[21] * .5 + 10) + "px 30px rgba(0, 0, 0, 0.3)"),
            V(O, "show", l[1]),
            V(O, "minimized", l[2]),
            V(O, "closed", l[3]),
            V(O, "dragging", l[5]),
            n(ke, "class", "svelte-mupbg4")
        },
        m(a, v) {
            C(a, e, v);
            for (let I = 0; I < t.length; I += 1)
                t[I] && t[I].m(e, null);
            C(a, s, v),
            C(a, o, v),
            he.m(o, null),
            l[64](o),
            C(a, c, v),
            kl(p, a, v),
            C(a, d, v),
            C(a, f, v),
            l[65](f),
            C(a, _, v),
            $ && $.m(a, v),
            C(a, y, v),
            ee && ee.m(a, v),
            C(a, B, v),
            C(a, m, v),
            C(a, T, v),
            C(a, g, v),
            r(g, k),
            r(k, S),
            r(S, L),
            r(S, b),
            r(S, H),
            le && le.m(H, null),
            r(k, P),
            r(k, D),
            r(D, z),
            r(D, J),
            r(D, ne),
            r(k, W),
            r(k, Q),
            E.m(Q, null),
            r(g, ue),
            r(g, F),
            r(F, fe),
            r(fe, je),
            r(F, Ke),
            r(F, Me),
            r(Me, Ee),
            r(Me, Ue),
            r(Me, Ae),
            r(F, lt),
            r(F, qe),
            r(qe, Ce),
            r(g, nt),
            r(g, de),
            r(de, oe),
            r(oe, Se),
            r(de, it),
            r(de, K),
            r(K, ge),
            r(K, st),
            r(K, Pe),
            r(de, ht),
            r(de, U),
            r(U, re),
            r(U, x),
            C(a, We, v);
            for (let I = 0; I < ce.length; I += 1)
                ce[I] && ce[I].m(a, v);
            C(a, De, v),
            C(a, ke, v),
            r(ke, Ze),
            r(Ze, _e),
            r(_e, Xe),
            l[71](_e),
            r(ke, gt),
            r(ke, O),
            r(O, ve),
            r(ve, ye),
            r(ye, Re),
            r(ye, rt),
            r(ye, ae),
            r(ye, _t),
            r(ye, Te),
            r(ve, Ye),
            r(ve, Qe),
            r(O, vt),
            r(O, ct),
            r(O, bt),
            r(O, pe),
            r(pe, Ne),
            r(Ne, ie),
            r(pe, wt),
            r(pe, Oe),
            r(pe, kt),
            r(pe, Ve),
            r(Ve, ut),
            r(Ve, Le),
            r(pe, yt),
            r(pe, Ge);
            for (let I = 0; I < Z.length; I += 1)
                Z[I] && Z[I].m(Ge, null);
            l[72](O),
            N = !0,
            ft || (Mt = [G(Et, "pointermove", l[61]), G(Et, "pointerup", l[62]), G(Et, "keydown", l[41]), G(Et, "click", l[45]), G(m, "click", l[70]), G(Q, "click", l[49]), G(F, "pointerdown", l[50]), G(K, "pointerdown", l[51]), G(Re, "click", l[54]), G(ae, "click", l[55]), G(Te, "click", Dn), G(ve, "pointerdown", l[57]), G(ve, "dblclick", l[47]), G(Ne, "click", l[39]), G(O, "contextmenu", l[44]), ql(ln.call(null, O, {
                radius: 20,
                glassThickness: 70,
                bezelWidth: 18,
                refractiveIndex: 1.55,
                scaleRatio: 1,
                blurAmount: 0,
                cssBlur: 8,
                specularOpacity: .5,
                specularSaturation: 4
            }))],
            ft = !0)
        },
        p(a, v) {
            if (v[0] & 524288 | v[1] & 80 && (Je = we(a[19]),
            t = Kt(t, v, Ct, 1, a, Je, i, e, jt, il, null, nl)),
            xe === (xe = St(a)) && he ? he.p(a, v) : (he.d(1),
            he = xe(a),
            he && (he.c(),
            he.m(o, null))),
            (!N || v[0] & 58720256) && X(o, "transform", "translate3d(" + a[23] + "px, " + a[24] + "px, 0) translate(-20%, -15%) scale(" + a[25] + ")"),
            (!N || v[0] & 67108864) && V(o, "pointer", a[26]),
            (!N || v[0] & 134217728) && V(o, "ready", a[27]),
            a[32] ? $ ? $.p(a, v) : ($ = sl(a),
            $.c(),
            $.m(y.parentNode, y)) : $ && ($.d(1),
            $ = null),
            a[29] ? ee ? ee.p(a, v) : (ee = cl(a),
            ee.c(),
            ee.m(B.parentNode, B)) : ee && (ee.d(1),
            ee = null),
            (!N || v[1] & 2) && V(m, "hidden", a[32]),
            a[14] ? le || (le = ul(),
            le.c(),
            le.m(H, null)) : le && (le.d(1),
            le = null),
            u !== (u = Tt(a)) && (E.d(1),
            E = u(a),
            E && (E.c(),
            E.m(Q, null))),
            (!N || v[0] & 131072) && Fe !== (Fe = At(a[17]) + "") && Be(je, Fe),
            (!N || v[0] & 32768) && X(Ee, "width", a[15] + "%"),
            (!N || v[0] & 32768) && X(Ae, "left", a[15] + "%"),
            (!N || v[0] & 65536) && Ie !== (Ie = At(a[16]) + "") && Be(Ce, Ie),
            (!N || v[0] & 262144) && X(ge, "width", a[18] * 100 + "%"),
            (!N || v[0] & 262144) && X(Pe, "left", a[18] * 100 + "%"),
            (!N || v[0] & 16384) && V(g, "playing", a[14]),
            v[0] & 512 && (j = we(a[9]),
            ce = Kt(ce, v, te, 1, a, j, mt, De.parentNode, jt, fl, De, el)),
            (!N || v[0] & 1024) && X(ie, "transform", "rotate(" + a[10].x + "deg) translateY(" + a[10].y + "px)"),
            (!N || v[0] & 2048) && V(ie, "glitch", a[11]),
            (!N || v[0] & 128) && Be(ut, a[7]),
            (!N || v[0] & 256) && V(Le, "hidden", !a[8]),
            v[0] & 4096 | v[1] & 33554480) {
                be = we(a[36]);
                let I;
                for (I = 0; I < be.length; I += 1) {
                    const Lt = $t(a, be, I);
                    Z[I] ? Z[I].p(Lt, v) : (Z[I] = pl(Lt),
                    Z[I].c(),
                    Z[I].m(Ge, null))
                }
                for (; I < Z.length; I += 1)
                    Z[I].d(1);
                Z.length = be.length
            }
            (!N || v[0] & 78) && X(O, "transform", "translate(" + a[6].x + "px, " + a[6].y + "px) " + (a[2] ? "scale(0.01) translateY(500px)" : a[3] ? "scale(0.8)" : a[1] ? "" : "translateY(20px)")),
            (!N || v[0] & 3145728) && X(O, "box-shadow", a[20] + "px " + (a[21] + 20) + "px 60px rgba(0, 0, 0, 0.4), " + a[20] * .5 + "px " + (a[21] * .5 + 10) + "px 30px rgba(0, 0, 0, 0.3)"),
            (!N || v[0] & 2) && V(O, "show", a[1]),
            (!N || v[0] & 4) && V(O, "minimized", a[2]),
            (!N || v[0] & 8) && V(O, "closed", a[3]),
            (!N || v[0] & 32) && V(O, "dragging", a[5])
        },
        i(a) {
            N || (Ot(p.$$.fragment, a),
            N = !0)
        },
        o(a) {
            Gl(p.$$.fragment, a),
            N = !1
        },
        d(a) {
            a && (M(e),
            M(s),
            M(o),
            M(c),
            M(d),
            M(f),
            M(_),
            M(y),
            M(B),
            M(m),
            M(T),
            M(g),
            M(We),
            M(De),
            M(ke));
            for (let v = 0; v < t.length; v += 1)
                t[v].d();
            he.d(),
            l[64](null),
            yl(p, a),
            l[65](null),
            $ && $.d(a),
            ee && ee.d(a),
            le && le.d(),
            E.d();
            for (let v = 0; v < ce.length; v += 1)
                ce[v].d(a);
            l[71](null),
            It(Z, a),
            l[72](null),
            ft = !1,
            ze(Mt)
        }
    }
}
const hl = "я люблю котекофф";
let qn = 1;
const In = "faustian bargain"
  , Pn = "королевский XVII"
  , Xt = .5;
function At(l) {
    if (!l || isNaN(l))
        return "0:00";
    const e = Math.floor(l / 60)
      , t = Math.floor(l % 60);
    return `${e}:${t.toString().padStart(2, "0")}`
}
function Dn() {
    window.open("https://t.me/waititreally", "_blank")
}
function Xn(l, e, t) {
    let i;
    const s = "/";
    let o = !1, c = !1, p = !1, d, f = !1, w = {
        x: 0,
        y: 0
    }, _ = {
        x: 0,
        y: 0
    }, y = !1, B = "", m = !0, T = [];
    const g = [{
        id: 1,
        title: "my tg ",
        icon: "telegram",
        url: "https://t.me/waititreally",
        tooltip: "Открыть Telegram",
        tooltipPos: "top"
    }, {
        id: 2,
        title: "spotify profile",
        icon: "spotify",
        url: "https://open.spotify.com/user/31bctxr5vqo2bejvdqburwsy3cdu?si=518b458ab0984628",
        tooltip: "Открыть Spotify",
        tooltipPos: "bottom"
    }, {
        id: 3,
        title: "my gitlab",
        icon: "gitlab",
        url: "https://about.gitlab.com//",
        tooltip: "Открыть GitLab",
        tooltipPos: "top"
    }];
    let k = {
        x: 0,
        y: 0
    }, S = 0, L = !1, Y = !1, b, H = !1, P = !1, D = !1, z = 0, J = 0, ne = 0, W = .3, Q = !1, ue = !1, F, fe = [], Fe = 0;
    function je(u, E, j="info") {
        const te = Fe++;
        t(19, fe = [...fe, {
            id: te,
            title: u,
            message: E,
            icon: j,
            visible: !0
        }]),
        setTimeout( () => {
            Ke(te)
        }
        , 4e3)
    }
    function Ke(u) {
        t(19, fe = fe.map(E => E.id === u ? {
            ...E,
            visible: !1
        } : E)),
        setTimeout( () => {
            t(19, fe = fe.filter(E => E.id !== u))
        }
        , 300)
    }
    let Me = 0, Ee = 0, Ue, Ae = -100, lt = -100, qe = 1, Ie = 0, Ce = [], nt = !1, de = !1, oe = null, Se = null, it = 0, K, ge = !1, st = 0, Pe = 0;
    const ht = [{
        icon: "copy",
        label: "Копировать ссылку",
        action: () => navigator.clipboard.writeText("koutarou.xsph.ru")
    }, {
        icon: "share",
        label: "Поделиться",
        action: () => {
            var u;
            return (u = navigator.share) == null ? void 0 : u.call(navigator, {
                url: "koutarou.xsph.ru",
                title: "koutarou"
            })
        }
    }, {
        type: "separator"
    }, {
        icon: "telegram",
        label: "Telegram",
        action: () => window.open("https://t.me/waititreally", "_blank")
    }, {
        icon: "spotify",
        label: "Spotify",
        action: () => window.open("https://open.spotify.com/user/31bctxr5vqo2bejvdqburwsy3cdu?si=518b458ab0984628", "_blank")
    }, {
        icon: "gitlab",
        label: "GitLab",
        action: () => window.open("https://about.gitlab.com//", "_blank")
    }, {
        type: "separator"
    }, {
        icon: "search",
        label: "Поиск",
        shortcut: "⌘K",
        action: () => {
            t(32, U = !0),
            setTimeout( () => x == null ? void 0 : x.focus(), 100)
        }
    }];
    let U = !1, re = "", x;
    const We = [{
        icon: "person",
        title: "О мне",
        desc: "koutarou, люблю котекоф:3",
        action: () => {}
    }, {
        icon: "telegram",
        title: "Telegram",
        desc: "Открыть мой профильь",
        action: () => window.open("https://t.me/waititreally", "_blank")
    }, {
        icon: "spotify",
        title: "Spotify",
        desc: "Открыть Spotify",
        action: () => window.open("https://open.spotify.com/user/31bctxr5vqo2bejvdqburwsy3cdu?si=430400559bfd45fc", "_blank")
    }, {
        icon: "gitlab",
        title: "GitLab",
        desc: "Открыть GitLab",
        action: () => window.open("https://about.gitlab.com/", "_blank")
    }, {
        icon: "star",
        title: "Пасхалка",
        desc: "Кликни 5 раз на аватар",
        action: () => {
            t(32, U = !1),
            De()
        }
    }, {
        icon: "keyboard",
        title: "Горячие клавиши",
        desc: "⌘K — поиск, Esc — закрыть",
        action: () => {}
    }, {
        icon: "cursor",
        title: "Shake to find",
        desc: "Потряси мышкой чтобы найти курсор",
        action: () => {}
    }];
    function ce() {
        let u = 0;
        const E = setInterval( () => {
            u < hl.length ? (t(7, B = hl.slice(0, u + 1)),
            u++) : (clearInterval(E),
            setTimeout( () => t(8, m = !1), 1e3))
        }
        , 80)
    }
    function mt() {
        S++,
        S >= 5 && (De(),
        S = 0)
    }
    function De() {
        t(11, L = !0),
        setTimeout( () => {
            t(11, L = !1)
        }
        , 1500)
    }
    function ke(u) {
        t(23, Ae = u.clientX),
        t(24, lt = u.clientY),
        ut(u),
        oe = u,
        Se === null && (Se = requestAnimationFrame(Ze))
    }
    function Ze() {
        Se = null;
        const u = oe;
        if (oe = null,
        !u)
            return;
        if (!de) {
            t(27, de = !0),
            Ie = u.clientX;
            return
        }
        const E = performance.now();
        if (E - it > 32) {
            it = E;
            const a = u.target;
            t(26, nt = a.closest('a, button, [role="button"], .avatar-container, .spotlight-item, .context-menu-item, .keyboard-hint, .notification') !== null)
        }
        const j = Math.abs(u.clientX - Ie);
        Ce.push(j),
        Ce.length > 8 && Ce.shift();
        const te = Ce.reduce( (a, v) => a + v, 0) / Ce.length;
        t(25, qe = te > 30 ? Math.min(5, 1 + te / 30) : Math.max(1, qe - .1)),
        Ie = u.clientX;
        const be = window.innerWidth / 2
          , Z = window.innerHeight / 2;
        t(20, Me = (u.clientX - be) / 30),
        t(21, Ee = (u.clientY - Z) / 30)
    }
    function _e(u) {
        (u.metaKey || u.ctrlKey) && u.key === "k" && (u.preventDefault(),
        t(32, U = !U),
        t(0, re = ""),
        U && setTimeout( () => x == null ? void 0 : x.focus(), 100)),
        u.key === "Escape" && (U && ot(),
        ge && O())
    }
    function Xe(u) {
        u.action(),
        u.action.toString() !== "() => {}" && (t(32, U = !1),
        t(0, re = ""))
    }
    function ot() {
        const u = document.querySelector(".spotlight-overlay")
          , E = document.querySelector(".spotlight");
        u && u.classList.add("closing"),
        E && E.classList.add("closing"),
        setTimeout( () => {
            t(32, U = !1),
            t(0, re = "")
        }
        , 200)
    }
    function gt(u) {
        u.preventDefault(),
        t(30, st = u.clientX),
        t(31, Pe = u.clientY),
        t(29, ge = !0)
    }
    function O() {
        t(29, ge = !1)
    }
    function ve(u) {
        u.action(),
        t(29, ge = !1)
    }
    function ye(u) {
        u.target.closest(".traffic-lights") || Oe()
    }
    bl( () => {
        requestAnimationFrame( () => {
            t(1, o = !0),
            setTimeout(ce, 800)
        }
        ),
        setTimeout( () => {
            je("Добро пожаловать", "shortcut", "wave")
        }
        , 2e3),
        setTimeout( () => {
            t(12, Y = !0),
            je("Telegram (koutarou)", "пощол нахуй", "telegram")
        }
        , 6e3),
        rt(),
        window.addEventListener("touchend", Ye, {
            passive: !0
        }),
        window.addEventListener("click", Ye),
        K && (t(28, K.playbackRate = Xt, K),
        K.addEventListener("loadedmetadata", () => {
            t(28, K.playbackRate = Xt, K)
        }
        )),
        document.addEventListener("visibilitychange", Re)
    }
    ),
    Xl( () => {
        window.removeEventListener("touchend", Ye),
        window.removeEventListener("click", Ye),
        document.removeEventListener("visibilitychange", Re),
        clearInterval(F),
        Se !== null && cancelAnimationFrame(Se)
    }
    );
    function Re() {
        K && (document.hidden ? K.pause() : (K.play().catch( () => {}
        ),
        t(28, K.playbackRate = Xt, K)))
    }
    function rt() {
        !b || H || (H = !0,
        t(13, b.loop = !0, b),
        t(13, b.volume = 0, b),
        b.addEventListener("timeupdate", () => {
            ue || (t(15, z = b.currentTime / b.duration * 100 || 0),
            t(17, ne = b.currentTime))
        }
        ),
        b.addEventListener("loadedmetadata", () => {
            t(16, J = b.duration)
        }
        ),
        b.addEventListener("play", () => {
            t(14, D = !0)
        }
        ),
        b.addEventListener("pause", () => {
            t(14, D = !1)
        }
        ),
        b.load())
    }
    function ae(u) {
        b && t(13, b.volume = Math.max(0, Math.min(1, u)), b)
    }
    function _t() {
        clearInterval(F);
        let u = 0;
        ae(u),
        F = setInterval( () => {
            u += .015,
            u >= W ? (ae(W),
            clearInterval(F)) : ae(u)
        }
        , 50)
    }
    function Te({fade: u=!1}={}) {
        return b ? b.play().then( () => {
            u ? _t() : ae(W)
        }
        ).catch(E => {
            throw console.error("Audio play failed:", E),
            t(14, D = !1),
            E
        }
        ) : (console.error("Audio element not ready"),
        Promise.reject(new Error("Audio element not ready")))
    }
    function Ye() {
        !P || D || Te().catch( () => {}
        )
    }
    function Qe() {
        if (P = !0,
        !b) {
            console.error("Audio element not ready");
            return
        }
        ae(0),
        Te({
            fade: !0
        }).catch( () => {}
        )
    }
    function vt() {
        b || rt(),
        D ? (clearInterval(F),
        P = !1,
        b.pause()) : (P = !0,
        Te().catch( () => {}
        ))
    }
    function ct(u) {
        const E = u.currentTarget.getBoundingClientRect()
          , j = Math.max(0, Math.min(1, (u.clientX - E.left) / E.width));
        t(13, b.currentTime = j * b.duration, b),
        t(15, z = j * 100)
    }
    function bt(u) {
        u.preventDefault(),
        ue = !0,
        ct(u)
    }
    function pe(u) {
        const E = u.currentTarget.getBoundingClientRect()
          , j = Math.max(0, Math.min(1, (u.clientX - E.left) / E.width));
        t(18, W = j),
        ae(W)
    }
    function Ne(u) {
        u.preventDefault(),
        Q = !0,
        pe(u)
    }
    function ie(u) {
        if (Q) {
            const E = document.querySelector(".volume-slider");
            if (E) {
                const j = E.getBoundingClientRect()
                  , te = Math.max(0, Math.min(1, (u.clientX - j.left) / j.width));
                t(18, W = te),
                ae(W)
            }
        }
        if (ue) {
            const E = document.querySelector(".audio-progress");
            if (E) {
                const j = E.getBoundingClientRect()
                  , te = Math.max(0, Math.min(1, (u.clientX - j.left) / j.width));
                t(15, z = te * 100),
                t(17, ne = te * b.duration)
            }
        }
    }
    function at() {
        ue && b && t(13, b.currentTime = z / 100 * b.duration, b),
        Q = !1,
        ue = !1
    }
    function wt() {
        t(3, p = !0),
        setTimeout( () => {
            t(3, p = !1),
            t(1, o = !1),
            t(7, B = ""),
            t(8, m = !0),
            setTimeout( () => {
                t(1, o = !0),
                setTimeout(ce, 500)
            }
            , 300)
        }
        , 500)
    }
    function Oe() {
        t(2, c = !0),
        setTimeout( () => {
            t(2, c = !1)
        }
        , 600)
    }
    function kt(u) {
        u.currentTarget.href.includes("t.me") && t(12, Y = !1)
    }
    function Ve(u) {
        if (u.target.closest(".traffic-lights"))
            return;
        u.preventDefault(),
        t(5, f = !0);
        const E = d.getBoundingClientRect();
        w.x = u.clientX - E.left - E.width / 2,
        w.y = u.clientY - E.top - E.height / 2,
        y || (t(6, _.x = 0, _),
        t(6, _.y = 0, _))
    }
    function ut(u) {
        if (!f)
            return;
        y = !0;
        const E = window.innerWidth / 2
          , j = window.innerHeight / 2;
        let te = u.clientX - E - w.x
          , be = u.clientY - j - w.y;
        const Z = te - _.x
          , a = be - _.y;
        t(10, k = {
            x: Math.max(-15, Math.min(15, Z * 2)),
            y: Math.max(-15, Math.min(15, a * 2))
        });
        const {width: v, height: I} = d.getBoundingClientRect()
          , Lt = -E + v / 2
          , Sl = E - v / 2
          , Tl = -j + I / 2
          , Ll = j - I / 2;
        t(6, _.x = Math.max(Lt, Math.min(Sl, te)), _),
        t(6, _.y = Math.max(Tl, Math.min(Ll, be)), _)
    }
    function Le() {
        t(5, f = !1),
        t(10, k = {
            x: 0,
            y: 0
        })
    }
    function yt(u) {
        Ht.call(this, l, u)
    }
    function Ge(u) {
        Ht.call(this, l, u)
    }
    const N = u => {
        ke(u),
        ie(u)
    }
      , ft = () => {
        Le(),
        at()
    }
      , Mt = u => Ke(u.id);
    function Je(u) {
        He[u ? "unshift" : "push"]( () => {
            Ue = u,
            t(22, Ue)
        }
        )
    }
    function Ct(u) {
        He[u ? "unshift" : "push"]( () => {
            b = u,
            t(13, b)
        }
        )
    }
    function St() {
        re = this.value,
        t(0, re)
    }
    function xe(u) {
        He[u ? "unshift" : "push"]( () => {
            x = u,
            t(33, x)
        }
        )
    }
    const he = u => Xe(u)
      , $ = u => ve(u)
      , ee = () => {
        t(32, U = !0),
        setTimeout( () => x == null ? void 0 : x.focus(), 100)
    }
    ;
    function le(u) {
        He[u ? "unshift" : "push"]( () => {
            K = u,
            t(28, K)
        }
        )
    }
    function Tt(u) {
        He[u ? "unshift" : "push"]( () => {
            d = u,
            t(4, d)
        }
        )
    }
    return l.$$.update = () => {
        l.$$.dirty[0] & 1 && t(34, i = re ? We.filter(u => u.title.toLowerCase().includes(re.toLowerCase()) || u.desc.toLowerCase().includes(re.toLowerCase())) : We)
    }
    ,
    [re, o, c, p, d, f, _, B, m, T, k, L, Y, b, D, z, J, ne, W, fe, Me, Ee, Ue, Ae, lt, qe, nt, de, K, ge, st, Pe, U, x, i, s, g, Ke, ht, mt, ke, _e, Xe, ot, gt, O, ve, ye, Qe, vt, bt, Ne, ie, at, wt, Oe, kt, Ve, Le, yt, Ge, N, ft, Mt, Je, Ct, St, xe, he, $, ee, le, Tt]
}
class Rn extends Cl {
    constructor(e) {
        super(),
        Ml(this, e, Xn, An, gl, {}, null, [-1, -1, -1, -1])
    }
}
new Rn({
    target: document.getElementById("app")
});
