export function applySocialProofVariant() {
  (function () {
    function T(t, e, n) {
      return (
        (e = ta(e)) in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    function ta(t) {
      const e = ua(t, 'string');
      return 'symbol' == typeof e ? e : String(e);
    }
    function ua(t, e) {
      if ('object' != typeof t || null === t) return t;
      const n = t[Symbol.toPrimitive];
      if (void 0 !== n) {
        const r = n.call(t, e || 'default');
        if ('object' != typeof r) return r;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return ('string' === e ? String : Number)(t);
    }
    class va {
      constructor() {
        T(this, 'loadCDN', async () => {
          const t = document.createElement('script');
          return (
            document.body.appendChild(t),
            (t.crossOrigin = 'anonymous'),
            t.setAttribute('data-lazy', 'no'),
            (t.src = 'https://js.sentry-cdn.com/'.concat(this.dsn, '.min.js')),
            new Promise((e, n) => {
              t.onload = () => {
                window.Sentry.onLoad(() => {
                  (this.instance = window.Sentry),
                    this.instance.setTag('account_name', this.account_name),
                    this.instance.setTag('test_name', this.test_name),
                    this.instance.setTag('variant', this.variant),
                    this.instance.setTag('url', window.location.href),
                    e(this.instance);
                });
              };
            })
          );
        }),
          T(this, 'initSentry', async () =>
            this.dsn
              ? (this.instance || (await this.loadCDN()),
                this.instance.init({
                  defaultIntegrations: !1,
                  integrations: [
                    new window.Sentry.Integrations.GlobalHandlers({
                      onerror: !1,
                      onunhandledrejection: !1,
                    }),
                  ],
                }))
              : (console.warn('No DSN found for Sentry'),
                (this.instance = { captureException: (t) => console.error(t) }))
          ),
          (this.dsn = 'f26ebec4db6a4959bb840e5d3a2c2ba4'),
          (this.account_name = 'KaChava'),
          (this.test_name = 'IngredientsSocialProof'),
          (this.variant = null),
          (this.handled = []),
          (this.instance = window.Sentry);
      }
      async captureException(t) {
        return (
          console.error(t),
          !(this.handled.length > 5) &&
            (this.handled.push(t),
            this.instance || (await this.initSentry()),
            this.instance.captureException(t))
        );
      }
      async execute(t) {
        try {
          await t();
        } catch (e) {
          this.captureException(e);
        }
        return !0;
      }
      async captureCallbackException() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        this.execute(e);
      }
    }
    const a = new va();
    const wa = function () {
      const t = window.document.createElement('style');
      t.type = 'text/css';
      for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
        n[o] = arguments[o];
      (t.textContent = n.join('\n')), document.head.appendChild(t);
    };
    let N,
      q,
      xa,
      b,
      A,
      ya,
      za,
      U,
      c,
      C = {},
      V = [],
      Aa = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
      F = Array.isArray;
    function z(e, t) {
      for (const $ in t) e[$] = t[$];
      return e;
    }
    function W(e) {
      const t = e.parentNode;
      t && t.removeChild(e);
    }
    function j(e, t, $) {
      let r,
        n,
        o,
        _ = {};
      for (o in t)
        'key' == o ? (r = t[o]) : 'ref' == o ? (n = t[o]) : (_[o] = t[o]);
      if (
        (arguments.length > 2 &&
          (_.children = arguments.length > 3 ? N.call(arguments, 2) : $),
        'function' == typeof e && null != e.defaultProps)
      )
        for (o in e.defaultProps) void 0 === _[o] && (_[o] = e.defaultProps[o]);
      return G(e, _, r, n, null);
    }
    function G(e, t, $, r, n) {
      const o = {
        type: e,
        props: t,
        key: $,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == n ? ++xa : n,
      };
      return null == n && null != q.vnode && q.vnode(o), o;
    }
    function H(e) {
      return e.children;
    }
    function I(e, t) {
      (this.props = e), (this.context = t);
    }
    function D(e, t) {
      if (null == t) return e.__ ? D(e.__, e.__.__k.indexOf(e) + 1) : null;
      for (var $; t < e.__k.length; t++)
        if (null != ($ = e.__k[t]) && null != $.__e) return $.__e;
      return 'function' == typeof e.type ? D(e) : null;
    }
    function X(e) {
      let t, $;
      if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
          if (null != ($ = e.__k[t]) && null != $.__e) {
            e.__e = e.__c.base = $.__e;
            break;
          }
        return X(e);
      }
    }
    function Y(e) {
      ((!e.__d && (e.__d = !0) && A.push(e) && !J.__r++) ||
        ya !== q.debounceRendering) &&
        ((ya = q.debounceRendering) || za)(J);
    }
    function J() {
      let e, t, $, r, n, o, _, l, i;
      for (A.sort(U); (e = A.shift()); )
        e.__d &&
          ((t = A.length),
          (r = void 0),
          (n = void 0),
          (o = void 0),
          (l = (_ = ($ = e).__v).__e),
          (i = $.__P) &&
            ((r = []),
            (n = []),
            ((o = z({}, _)).__v = _.__v + 1),
            O(
              i,
              _,
              o,
              $.__n,
              void 0 !== i.ownerSVGElement,
              null != _.__h ? [l] : null,
              r,
              null == l ? D(_) : l,
              _.__h,
              n
            ),
            fa(r, _, n),
            _.__e != l && X(_)),
          A.length > t && A.sort(U));
      J.__r = 0;
    }
    function Z(e, t, $, r, n, o, _, l, i, m, a) {
      let p,
        u,
        s,
        v,
        P,
        c,
        B,
        f,
        d,
        h = 0,
        x = (r && r.__k) || V,
        y = x.length,
        g = y,
        k = t.length;
      for ($.__k = [], p = 0; p < k; p++)
        null !=
        (v = $.__k[p] =
          null == (v = t[p]) || 'boolean' == typeof v || 'function' == typeof v
            ? null
            : 'string' == typeof v ||
              'number' == typeof v ||
              'bigint' == typeof v
            ? G(null, v, null, null, v)
            : F(v)
            ? G(H, { children: v }, null, null, null)
            : v.__b > 0
            ? G(v.type, v.props, v.key, v.ref ? v.ref : null, v.__v)
            : v)
          ? ((v.__ = $),
            (v.__b = $.__b + 1),
            -1 === (f = Ca(v, x, (B = p + h), g))
              ? (s = C)
              : ((s = x[f] || C), (x[f] = void 0), g--),
            O(e, v, s, n, o, _, l, i, m, a),
            (P = v.__e),
            (u = v.ref) &&
              s.ref != u &&
              (s.ref && Q(s.ref, null, v), a.push(u, v.__c || P, v)),
            null != P &&
              (null == c && (c = P),
              (d = s === C || null === s.__v)
                ? -1 == f && h--
                : f !== B &&
                  (f === B + 1
                    ? h++
                    : f > B
                    ? g > k - B
                      ? (h += f - B)
                      : h--
                    : (h = f < B && f == B - 1 ? f - B : 0)),
              (B = p + h),
              'function' != typeof v.type || (f === B && s.__k !== v.__k)
                ? 'function' == typeof v.type || (f === B && !d)
                  ? void 0 !== v.__d
                    ? ((i = v.__d), (v.__d = void 0))
                    : (i = P.nextSibling)
                  : (i = ba(e, P, i))
                : (i = aa(v, i, e)),
              'function' == typeof $.type && ($.__d = i)))
          : (s = x[p]) &&
            null == s.key &&
            s.__e &&
            (s.__e == i && (i = D(s)), R(s, s, !1));
      for ($.__e = c, p = y; p--; )
        null != x[p] &&
          ('function' == typeof $.type &&
            null != x[p].__e &&
            x[p].__e == $.__d &&
            ($.__d = x[p].__e.nextSibling),
          R(x[p], x[p]));
    }
    function aa(e, t, $) {
      for (var r, n = e.__k, o = 0; n && o < n.length; o++)
        (r = n[o]) &&
          ((r.__ = e),
          (t = 'function' == typeof r.type ? aa(r, t, $) : ba($, r.__e, t)));
      return t;
    }
    function Ba(e, t) {
      return (
        (t = t || []),
        null == e ||
          'boolean' == typeof e ||
          (F(e)
            ? e.some(function (e) {
                Ba(e, t);
              })
            : t.push(e)),
        t
      );
    }
    function ba(e, t, $) {
      return (
        null == $ || $.parentNode !== e
          ? e.insertBefore(t, null)
          : (t == $ && null != t.parentNode) || e.insertBefore(t, $),
        t.nextSibling
      );
    }
    function Ca(e, t, $, r) {
      let n = e.key,
        o = e.type,
        _ = $ - 1,
        l = $ + 1,
        i = t[$];
      if (null === i || (i && n == i.key && o === i.type)) return $;
      if (r > (null != i ? 1 : 0))
        for (; _ >= 0 || l < t.length; ) {
          if (_ >= 0) {
            if ((i = t[_]) && n == i.key && o === i.type) return _;
            _--;
          }
          if (l < t.length) {
            if ((i = t[l]) && n == i.key && o === i.type) return l;
            l++;
          }
        }
      return -1;
    }
    function Da(e, t, $, r, n) {
      let o;
      for (o in $)
        'children' === o || 'key' === o || o in t || K(e, o, null, $[o], r);
      for (o in t)
        (n && 'function' != typeof t[o]) ||
          'children' === o ||
          'key' === o ||
          'value' === o ||
          'checked' === o ||
          $[o] === t[o] ||
          K(e, o, t[o], $[o], r);
    }
    function ca(e, t, $) {
      '-' === t[0]
        ? e.setProperty(t, null == $ ? '' : $)
        : (e[t] =
            null == $ ? '' : 'number' != typeof $ || Aa.test(t) ? $ : $ + 'px');
    }
    function K(e, t, $, r, n) {
      let o;
      e: if ('style' === t) {
        if ('string' == typeof $) e.style.cssText = $;
        else {
          if (('string' == typeof r && (e.style.cssText = r = ''), r))
            for (t in r) ($ && t in $) || ca(e.style, t, '');
          if ($) for (t in $) (r && $[t] === r[t]) || ca(e.style, t, $[t]);
        }
      } else if ('o' === t[0] && 'n' === t[1])
        (o = t !== (t = t.replace(/Capture$/, ''))),
          (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
          e.l || (e.l = {}),
          (e.l[t + o] = $),
          $
            ? r || e.addEventListener(t, o ? ea : da, o)
            : e.removeEventListener(t, o ? ea : da, o);
      else if ('dangerouslySetInnerHTML' !== t) {
        if (n) t = t.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
        else if (
          'width' !== t &&
          'height' !== t &&
          'href' !== t &&
          'list' !== t &&
          'form' !== t &&
          'tabIndex' !== t &&
          'download' !== t &&
          'rowSpan' !== t &&
          'colSpan' !== t &&
          t in e
        )
          try {
            e[t] = null == $ ? '' : $;
            break e;
          } catch (e) {}
        'function' == typeof $ ||
          (null == $ || (!1 === $ && '-' !== t[4])
            ? e.removeAttribute(t)
            : e.setAttribute(t, $));
      }
    }
    function da(e) {
      return this.l[e.type + !1](q.event ? q.event(e) : e);
    }
    function ea(e) {
      return this.l[e.type + !0](q.event ? q.event(e) : e);
    }
    function O(e, t, $, r, n, o, _, l, i, m) {
      let a,
        p,
        u,
        s,
        v,
        P,
        c,
        B,
        f,
        d,
        h,
        x,
        y,
        g,
        k,
        b = t.type;
      if (void 0 !== t.constructor) return null;
      null != $.__h &&
        ((i = $.__h), (l = t.__e = $.__e), (t.__h = null), (o = [l])),
        (a = q.__b) && a(t);
      e: if ('function' == typeof b)
        try {
          if (
            ((B = t.props),
            (f = (a = b.contextType) && r[a.__c]),
            (d = a ? (f ? f.props.value : a.__) : r),
            $.__c
              ? (c = (p = t.__c = $.__c).__ = p.__E)
              : ('prototype' in b && b.prototype.render
                  ? (t.__c = p = new b(B, d))
                  : ((t.__c = p = new I(B, d)),
                    (p.constructor = b),
                    (p.render = Fa)),
                f && f.sub(p),
                (p.props = B),
                p.state || (p.state = {}),
                (p.context = d),
                (p.__n = r),
                (u = p.__d = !0),
                (p.__h = []),
                (p._sb = [])),
            null == p.__s && (p.__s = p.state),
            null != b.getDerivedStateFromProps &&
              (p.__s == p.state && (p.__s = z({}, p.__s)),
              z(p.__s, b.getDerivedStateFromProps(B, p.__s))),
            (s = p.props),
            (v = p.state),
            (p.__v = t),
            u)
          )
            null == b.getDerivedStateFromProps &&
              null != p.componentWillMount &&
              p.componentWillMount(),
              null != p.componentDidMount && p.__h.push(p.componentDidMount);
          else {
            if (
              (null == b.getDerivedStateFromProps &&
                B !== s &&
                null != p.componentWillReceiveProps &&
                p.componentWillReceiveProps(B, d),
              !p.__e &&
                ((null != p.shouldComponentUpdate &&
                  !1 === p.shouldComponentUpdate(B, p.__s, d)) ||
                  t.__v === $.__v))
            ) {
              for (
                t.__v !== $.__v &&
                  ((p.props = B), (p.state = p.__s), (p.__d = !1)),
                  t.__e = $.__e,
                  t.__k = $.__k,
                  t.__k.forEach(function (e) {
                    e && (e.__ = t);
                  }),
                  h = 0;
                h < p._sb.length;
                h++
              )
                p.__h.push(p._sb[h]);
              (p._sb = []), p.__h.length && _.push(p);
              break e;
            }
            null != p.componentWillUpdate && p.componentWillUpdate(B, p.__s, d),
              null != p.componentDidUpdate &&
                p.__h.push(function () {
                  p.componentDidUpdate(s, v, P);
                });
          }
          if (
            ((p.context = d),
            (p.props = B),
            (p.__P = e),
            (p.__e = !1),
            (x = q.__r),
            (y = 0),
            'prototype' in b && b.prototype.render)
          ) {
            for (
              p.state = p.__s,
                p.__d = !1,
                x && x(t),
                a = p.render(p.props, p.state, p.context),
                g = 0;
              g < p._sb.length;
              g++
            )
              p.__h.push(p._sb[g]);
            p._sb = [];
          } else
            do {
              (p.__d = !1),
                x && x(t),
                (a = p.render(p.props, p.state, p.context)),
                (p.state = p.__s);
            } while (p.__d && ++y < 25);
          (p.state = p.__s),
            null != p.getChildContext && (r = z(z({}, r), p.getChildContext())),
            u ||
              null == p.getSnapshotBeforeUpdate ||
              (P = p.getSnapshotBeforeUpdate(s, v)),
            Z(
              e,
              F(
                (k =
                  null != a && a.type === H && null == a.key
                    ? a.props.children
                    : a)
              )
                ? k
                : [k],
              t,
              $,
              r,
              n,
              o,
              _,
              l,
              i,
              m
            ),
            (p.base = t.__e),
            (t.__h = null),
            p.__h.length && _.push(p),
            c && (p.__E = p.__ = null);
        } catch (e) {
          (t.__v = null),
            (i || null != o) &&
              ((t.__e = l), (t.__h = !!i), (o[o.indexOf(l)] = null)),
            q.__e(e, t, $);
        }
      else
        null == o && t.__v === $.__v
          ? ((t.__k = $.__k), (t.__e = $.__e))
          : (t.__e = Ea($.__e, t, $, r, n, o, _, i, m));
      (a = q.diffed) && a(t);
    }
    function fa(e, t, $) {
      for (let r = 0; r < $.length; r++) Q($[r], $[++r], $[++r]);
      q.__c && q.__c(t, e),
        e.some(function (t) {
          try {
            (e = t.__h),
              (t.__h = []),
              e.some(function (e) {
                e.call(t);
              });
          } catch (e) {
            q.__e(e, t.__v);
          }
        });
    }
    function Ea(e, t, $, r, n, o, _, l, i) {
      let m,
        a,
        p,
        u = $.props,
        s = t.props,
        v = t.type,
        P = 0;
      if (('svg' === v && (n = !0), null != o))
        for (; P < o.length; P++)
          if (
            (m = o[P]) &&
            'setAttribute' in m == !!v &&
            (v ? m.localName === v : 3 === m.nodeType)
          ) {
            (e = m), (o[P] = null);
            break;
          }
      if (null == e) {
        if (null === v) return document.createTextNode(s);
        (e = n
          ? document.createElementNS('http://www.w3.org/2000/svg', v)
          : document.createElement(v, s.is && s)),
          (o = null),
          (l = !1);
      }
      if (null === v) u === s || (l && e.data === s) || (e.data = s);
      else {
        if (
          ((o = o && N.call(e.childNodes)),
          (a = (u = $.props || C).dangerouslySetInnerHTML),
          (p = s.dangerouslySetInnerHTML),
          !l)
        ) {
          if (null != o)
            for (u = {}, P = 0; P < e.attributes.length; P++)
              u[e.attributes[P].name] = e.attributes[P].value;
          (p || a) &&
            ((p && ((a && p.__html == a.__html) || p.__html === e.innerHTML)) ||
              (e.innerHTML = (p && p.__html) || ''));
        }
        if ((Da(e, s, u, n, l), p)) t.__k = [];
        else if (
          (Z(
            e,
            F((P = t.props.children)) ? P : [P],
            t,
            $,
            r,
            n && 'foreignObject' !== v,
            o,
            _,
            o ? o[0] : $.__k && D($, 0),
            l,
            i
          ),
          null != o)
        )
          for (P = o.length; P--; ) null != o[P] && W(o[P]);
        l ||
          ('value' in s &&
            void 0 !== (P = s.value) &&
            (P !== e.value ||
              ('progress' === v && !P) ||
              ('option' === v && P !== u.value)) &&
            K(e, 'value', P, u.value, !1),
          'checked' in s &&
            void 0 !== (P = s.checked) &&
            P !== e.checked &&
            K(e, 'checked', P, u.checked, !1));
      }
      return e;
    }
    function Q(e, t, $) {
      try {
        'function' == typeof e ? e(t) : (e.current = t);
      } catch (e) {
        q.__e(e, $);
      }
    }
    function R(e, t, $) {
      let r, n;
      if (
        (q.unmount && q.unmount(e),
        (r = e.ref) && ((r.current && r.current !== e.__e) || Q(r, null, t)),
        null != (r = e.__c))
      ) {
        if (r.componentWillUnmount)
          try {
            r.componentWillUnmount();
          } catch (e) {
            q.__e(e, t);
          }
        (r.base = r.__P = null), (e.__c = void 0);
      }
      if ((r = e.__k))
        for (n = 0; n < r.length; n++)
          r[n] && R(r[n], t, $ || 'function' != typeof e.type);
      $ || null == e.__e || W(e.__e), (e.__ = e.__e = e.__d = void 0);
    }
    function Fa(e, t, $) {
      return this.constructor(e, $);
    }
    function ga(e, t, $) {
      let r, n, o, _;
      q.__ && q.__(e, t),
        (n = (r = 'function' == typeof $) ? null : ($ && $.__k) || t.__k),
        (o = []),
        (_ = []),
        O(
          t,
          (e = ((!r && $) || t).__k = j(H, null, [e])),
          n || C,
          C,
          void 0 !== t.ownerSVGElement,
          !r && $ ? [$] : n ? null : t.firstChild ? N.call(t.childNodes) : null,
          o,
          !r && $ ? $ : n ? n.__e : t.firstChild,
          r,
          _
        ),
        fa(o, e, _);
    }
    function Ga(e, t) {
      ga(e, t, Ga);
    }
    (N = V.slice),
      (q = {
        __e: function (e, t, $, r) {
          for (var n, o, _; (t = t.__); )
            if ((n = t.__c) && !n.__)
              try {
                if (
                  ((o = n.constructor) &&
                    null != o.getDerivedStateFromError &&
                    (n.setState(o.getDerivedStateFromError(e)), (_ = n.__d)),
                  null != n.componentDidCatch &&
                    (n.componentDidCatch(e, r || {}), (_ = n.__d)),
                  _)
                )
                  return (n.__E = n);
              } catch (t) {
                e = t;
              }
          throw e;
        },
      }),
      (xa = 0),
      (b = function (e) {
        return null != e && void 0 === e.constructor;
      }),
      (I.prototype.setState = function (e, t) {
        let $;
        ($ =
          null != this.__s && this.__s !== this.state
            ? this.__s
            : (this.__s = z({}, this.state))),
          'function' == typeof e && (e = e(z({}, $), this.props)),
          e && z($, e),
          null != e && this.__v && (t && this._sb.push(t), Y(this));
      }),
      (I.prototype.forceUpdate = function (e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), Y(this));
      }),
      (I.prototype.render = H),
      (A = []),
      (za =
        'function' == typeof Promise
          ? Promise.prototype.then.bind(Promise.resolve())
          : setTimeout),
      (U = function (e, t) {
        return e.__v.__b - t.__v.__b;
      }),
      (J.__r = 0),
      (c = 0);
    function E() {
      const e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : document,
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const d = ['querySelector', 'querySelectorAll'];
      let i = 0;
      return new Promise((u, c) =>
        (function $() {
          i += 1;
          const s = e[d[n]](t);
          return s && (s instanceof HTMLElement || s.length >= o)
            ? u(s)
            : r && 100 * i > r
            ? u(void 0)
            : !l && i > 100
            ? c(new Error("Couldn't find ".concat(t, ' in 10 seconds')))
            : setTimeout(() => $(), 100);
        })()
      );
    }
    function Ha(e, r, t) {
      return new Promise((o, n) => {
        try {
          e || n(new Error('Problem with selector: '.concat(e)));
          let c = Array.from(document.querySelectorAll(e));
          if (c.length === r) return void o(c);
          let a = 0;
          const u = setInterval(() => {
            try {
              (a += 1),
                (c = Array.from(document.querySelectorAll(e))).length === r &&
                  (clearInterval(u), o(c)),
                !t &&
                  a > 170 &&
                  (clearInterval(u),
                  n(
                    new Error(
                      'Could not find '
                        .concat(r, ' elements corresponding to ')
                        .concat(e, ' in 10 sec.')
                    )
                  ));
            } catch (l) {
              n(l), clearInterval(u);
            }
          }, 60);
        } catch (l) {
          n(l);
        }
      });
    }
    function Ia(e, t) {
      let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        o = 0;
      return new Promise((s, i) => {
        const $ = async () => {
          o += 1;
          try {
            const a = await Promise.resolve(E(document, e, 0, r, n));
            if (
              ((e) => {
                if (t(e)) return e;
              })(a)
            )
              return s(a);
            if (n && 100 * o > n) return s(void 0);
            if (!r && o > 100)
              return i(
                new Error(
                  "Couldn't find ".concat(e, ' passing test in 10 seconds')
                )
              );
            setTimeout(() => $(), 100);
          } catch (u) {
            i(u);
          }
        };
        $();
      });
    }
    function Ja(e, t, r, n) {
      return new Promise((o, l) => {
        try {
          e || l(new Error('Problem with selector: '.concat(e)));
          let a = Array.from(document.querySelectorAll(e));
          if (a.length >= t && a.length <= r) return void o(a);
          let u = 0;
          const d = setInterval(() => {
            try {
              (u += 1),
                (a = Array.from(document.querySelectorAll(e))).length >= t &&
                  a.length <= r &&
                  (clearInterval(d), o(a)),
                !n &&
                  u > 170 &&
                  (clearInterval(d),
                  l(
                    new Error(
                      'Could not find between '
                        .concat(t, ' and ')
                        .concat(r, ' of elements corresponding to ')
                        .concat(e, ' in 10 sec.')
                    )
                  ));
            } catch (c) {
              l(c), clearInterval(d);
            }
          }, 60);
        } catch (c) {
          l(c);
        }
      });
    }
    const Ka = {
      element: async (e, t, $) => E(document, e, 0, t, $),
      many: Ha,
      if: Ia,
      range: Ja,
      child: async function (e, t) {
        const $ =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return E(e, t, 0, $, r);
      },
      children: async function (e, t) {
        const $ =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return E(e, t, 1, $, r);
      },
      all: async (e, t, $, r) => E(document, e, 1, t, $, r),
    };
    const La = (e) => {
      const t = e.parentElement;
      return {
        with: (r) => {
          let $ = r;
          r.forEach || ($ = [r]),
            $.forEach((r) => t.insertBefore(r, e)),
            t.removeChild(e);
        },
      };
    };
    const Ma = (e) => ({ html: 'innerHTML', text: 'textContent' }[e] || e),
      Na = (e) => ($) => ({
        of: (t) => ({
          as: (r) => {
            t[e($)] = r;
          },
        }),
      });
    const d = Na(Ma);
    let Oa,
      w,
      Pa,
      Qa,
      Ra = 0,
      ha = [],
      L = [],
      ia = q.__b,
      ja = q.__r,
      ka = q.diffed,
      la = q.__c,
      ma = q.unmount;
    function Sa($, e) {
      q.__h && q.__h(w, $, Ra || e), (Ra = 0);
      const o = w.__H || (w.__H = { __: [], __h: [] });
      return $ >= o.__.length && o.__.push({ __V: L }), o.__[$];
    }
    function na($) {
      return (Ra = 1), Ta(pa, $);
    }
    function Ta($, e, o) {
      const r = Sa(Oa++, 2);
      if (
        ((r.t = $),
        !r.__c &&
          ((r.__ = [
            o ? o(e) : pa(void 0, e),
            function ($) {
              const e = r.__N ? r.__N[0] : r.__[0],
                o = r.t(e, $);
              e !== o && ((r.__N = [o, r.__[1]]), r.__c.setState({}));
            },
          ]),
          (r.__c = w),
          !w.u))
      ) {
        const _ = function ($, e, o) {
          if (!r.__c.__H) return !0;
          const _ = r.__c.__H.__.filter(function ($) {
            return $.__c;
          });
          if (
            _.every(function ($) {
              return !$.__N;
            })
          )
            return !t || t.call(this, $, e, o);
          let a = !1;
          return (
            _.forEach(function ($) {
              if ($.__N) {
                const e = $.__[0];
                ($.__ = $.__N), ($.__N = void 0), e !== $.__[0] && (a = !0);
              }
            }),
            !(!a && r.__c.props === $) && (!t || t.call(this, $, e, o))
          );
        };
        w.u = !0;
        var t = w.shouldComponentUpdate,
          a = w.componentWillUpdate;
        (w.componentWillUpdate = function ($, e, o) {
          if (this.__e) {
            const r = t;
            (t = void 0), _($, e, o), (t = r);
          }
          a && a.call(this, $, e, o);
        }),
          (w.shouldComponentUpdate = _);
      }
      return r.__N || r.__;
    }
    function Ua() {
      for (var $; ($ = ha.shift()); )
        if ($.__P && $.__H)
          try {
            $.__H.__h.forEach(M), $.__H.__h.forEach(S), ($.__H.__h = []);
          } catch (e) {
            ($.__H.__h = []), q.__e(e, $.__v);
          }
    }
    (q.__b = function ($) {
      (w = null), ia && ia($);
    }),
      (q.__r = function ($) {
        ja && ja($), (Oa = 0);
        const e = (w = $.__c).__H;
        e &&
          (Pa === w
            ? ((e.__h = []),
              (w.__h = []),
              e.__.forEach(function ($) {
                $.__N && ($.__ = $.__N), ($.__V = L), ($.__N = $.i = void 0);
              }))
            : (e.__h.forEach(M), e.__h.forEach(S), (e.__h = []), (Oa = 0))),
          (Pa = w);
      }),
      (q.diffed = function ($) {
        ka && ka($);
        const e = $.__c;
        e &&
          e.__H &&
          (e.__H.__h.length &&
            ((1 !== ha.push(e) && Qa === q.requestAnimationFrame) ||
              ((Qa = q.requestAnimationFrame) || Va)(Ua)),
          e.__H.__.forEach(function ($) {
            $.i && ($.__H = $.i),
              $.__V !== L && ($.__ = $.__V),
              ($.i = void 0),
              ($.__V = L);
          })),
          (Pa = w = null);
      }),
      (q.__c = function ($, e) {
        e.some(function ($) {
          try {
            $.__h.forEach(M),
              ($.__h = $.__h.filter(function ($) {
                return !$.__ || S($);
              }));
          } catch (o) {
            e.some(function ($) {
              $.__h && ($.__h = []);
            }),
              (e = []),
              q.__e(o, $.__v);
          }
        }),
          la && la($, e);
      }),
      (q.unmount = function ($) {
        ma && ma($);
        let e,
          o = $.__c;
        o &&
          o.__H &&
          (o.__H.__.forEach(function ($) {
            try {
              M($);
            } catch ($) {
              e = $;
            }
          }),
          (o.__H = void 0),
          e && q.__e(e, o.__v));
      });
    const oa = 'function' == typeof requestAnimationFrame;
    function Va($) {
      var e,
        o = function () {
          clearTimeout(r), oa && cancelAnimationFrame(e), setTimeout($);
        },
        r = setTimeout(o, 100);
      oa && (e = requestAnimationFrame(o));
    }
    function M($) {
      const e = w,
        o = $.__c;
      'function' == typeof o && (($.__c = void 0), o()), (w = e);
    }
    function S($) {
      const e = w;
      ($.__c = $.__()), (w = e);
    }
    function pa($, e) {
      return 'function' == typeof e ? e($) : e;
    }
    const qa = () =>
      j(
        'span',
        {
          className: 'flex whitespace-nowrap tg-testimonials__stars',
          'aria-hidden': 'true',
        },
        j(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '12.2',
            height: '11.712',
            'aria-hidden': 'true',
            viewBox: '0 0 12.2 11.712',
            className: 'text-[#fd8b55] fill-[#fd8b55] scale-125',
          },
          j('path', {
            fill: '#fd8b55',
            d: 'm12.2 4.475-2.562-.327-1.708-.215L6.1 0 4.27 3.933l-1.708.215L0 4.475l1.625 1.537 1.5 1.425-.8 4.275L6.1 9.618l3.767 2.094-.444-2.367-.361-1.9 2.255-2.137Z',
          })
        ),
        j(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '12.2',
            height: '11.712',
            'aria-hidden': 'true',
            viewBox: '0 0 12.2 11.712',
            className: 'text-[#fd8b55] fill-[#fd8b55] scale-125',
          },
          j('path', {
            fill: '#fd8b55',
            d: 'm12.2 4.475-2.562-.327-1.708-.215L6.1 0 4.27 3.933l-1.708.215L0 4.475l1.625 1.537 1.5 1.425-.8 4.275L6.1 9.618l3.767 2.094-.444-2.367-.361-1.9 2.255-2.137Z',
          })
        ),
        j(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '12.2',
            height: '11.712',
            'aria-hidden': 'true',
            viewBox: '0 0 12.2 11.712',
            className: 'text-[#fd8b55] fill-[#fd8b55] scale-125',
          },
          j('path', {
            fill: '#fd8b55',
            d: 'm12.2 4.475-2.562-.327-1.708-.215L6.1 0 4.27 3.933l-1.708.215L0 4.475l1.625 1.537 1.5 1.425-.8 4.275L6.1 9.618l3.767 2.094-.444-2.367-.361-1.9 2.255-2.137Z',
          })
        ),
        j(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '12.2',
            height: '11.712',
            'aria-hidden': 'true',
            viewBox: '0 0 12.2 11.712',
            className: 'text-[#fd8b55] fill-[#fd8b55] scale-125',
          },
          j('path', {
            fill: '#fd8b55',
            d: 'm12.2 4.475-2.562-.327-1.708-.215L6.1 0 4.27 3.933l-1.708.215L0 4.475l1.625 1.537 1.5 1.425-.8 4.275L6.1 9.618l3.767 2.094-.444-2.367-.361-1.9 2.255-2.137Z',
          })
        ),
        j(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '12.2',
            height: '11.712',
            'aria-hidden': 'true',
            viewBox: '0 0 12.2 11.712',
            className: 'text-[#fd8b55] fill-[#fd8b55] scale-125',
          },
          j('path', {
            fill: '#fd8b55',
            d: 'm12.2 4.475-2.562-.327-1.708-.215L6.1 0 4.27 3.933l-1.708.215L0 4.475l1.625 1.537 1.5 1.425-.8 4.275L6.1 9.618l3.767 2.094-.444-2.367-.361-1.9 2.255-2.137Z',
          })
        )
      );
    const ra = {
      Ingredients: [
        {
          id: 1,
          title: 'I crave it every day!!!',
          text: 'I use 6 big ice cubes (3/4 cup) of my sweet homemade almond milk, a small Keurig cup of coffee (4-6 oz strong chilled coffee) and 2 scoops of Vanilla Ka\u2019Chava blended...and I feel upset every time I slurp down the last drink of it. Like truly I think my body knows how good it is for me. It reminds me of Beachbody shakes with way higher quality ingredients!!!',
          author: 'Robin H.',
        },
        {
          id: 2,
          title: 'Recommend Ka\u2019Chava to everyone!',
          text: 'I love my Ka\u2019Chava. I tried other protein shakes that were ok but Ka\u2019Chava has the best ingredients and taste in my opinion. I can\u2019t wait to get up and make my smoothie, it\u2019s the first thing that I do. I have the coconut acai, mix in some blueberries and almond milk, and I\u2019m good to go to work for 12 hrs. Highly recommend Ka\u2019Chava if you haven\u2019t tried it yet!',
          author: 'Laura M.',
        },
        {
          id: 3,
          title: 'Faithful Customer',
          text: "It's kind of embarrassing how much this stuff means to me. My day doesn't start until I've had my Ka\u2019Chava. It makes me feel full and like I've done something good for myself. It feels good coating my stomach, and I can take my medication without eating. I only drink one a day, but I could easily switch to drinking it twice a day. Thanks for gathering such great ingredients into one easy drink!",
          author: 'Karen S.',
        },
      ],
      Taste: [
        {
          id: 1,
          title: 'Can\u2019t imagine not having it!',
          text: 'I would drink it every day, twice a day, if I could. I plow through my bags because it makes me feel wonderful. Honestly, I dread running out. The taste is outstanding. It mixes so well with berries. Can\u2019t say enough positives about the product. Ka\u2019Chava is the best!',
          author: 'Michael W.',
        },
        {
          id: 2,
          title: 'A refreshing drink',
          text: "I enjoy mixing frozen blueberries and strawberries or a spoonful of peanut butter with water or oat milk. I mix it in my blend jet, and it is awesome. I like it cause it doesn't have a chalky taste. It's a natural taste, it's filling when you drink it, and you know it's good for you.",
          author: 'Dennis S.',
        },
        {
          id: 3,
          title: 'Chocolate shakes',
          text: 'Love the shakes! Not only is the taste very good but what they do for you healthwise is a big plus. I don\u2019t like to swallow pills, and the liquid form benefits you better. Adding a banana and peanut butter is the icing on the cake. Thanks so much for a great product!',
          author: 'Barbara R.',
        },
      ],
      Convenience: [
        {
          id: 1,
          title: 'Great protein shake',
          text: 'The chocolate flavor goes so well with blueberries and almond butter. I usually drink a shake after my morning workout or carry it to school or the hospital. It is so convenient and gives me a good source of energy, especially when I have a 12-hour shift at the hospital. I am a nursing student, so I need good nutrition for my busy lifestyle, and Ka\u2019Chava answers that need.',
          author: 'Suttapa M.',
        },
        {
          id: 2,
          title: 'Even my Chiropractor thinks it\u2019s great!',
          text: 'I am really impressed with the Ka\u2019Chava shakes! They blend well, they taste great, and they help me get good nutrition for a meal replacement! I\u2019m a 50-something empty nester tired of cooking meals, and this is an awesome way to get my nutrition for the day! You could add anything to this shake and it would be great!',
          author: 'Susan B.',
        },
        {
          id: 3,
          title: 'Best option for best results',
          text: 'I work out, get hungry, and need to focus my intake on one large meal a day while still maintaining performance and completely eliminating cravings. Success requires my energy level to stay consistent, and the smaller snacks in between the one large meal are sufficient. Ka\u2019Chava makes this possible. Morning and evening, I sleep better and I start the day better.',
          author: 'David L.',
        },
      ],
      Quality: [
        {
          id: 1,
          title: 'Hype is Valid',
          text: "I've tried a lot of meal replacement drinks. This is by far my favorite. Blends so well, and there is no chalky texture. I also love that I'm not hungry an hour later. It seems a bit pricey, but compared with a made meal or bought meal, it's even cheaper. I highly recommend.",
          author: 'Gabi L.',
        },
        {
          id: 2,
          title: 'The best ever',
          text: 'Loyal customer for years! No other protein powder compares not only in health benefits and quality ingredients that would otherwise be hard to source but also in taste, texture, and consistency. This stuff tastes like brownie batter! 10/10.',
          author: 'Jersey R.',
        },
        {
          id: 3,
          title: 'Yum',
          text: 'I\u2019ve tried nutritional drinks in the past. None have come close to Ka\u2019Chava. The chocolate is great. I also really like the chai. This drink is positively impacting my healthy eating and weight loss goals. I get to have a very satisfying non-milk \u201Cmilkshake\u201D to start my day. No feeling of deprivation here! Thank you, Ka\u2019Chava!',
          author: 'Terry H.',
        },
      ],
      Health: [
        {
          id: 1,
          title: 'Wow!',
          text: 'I am recovering from cancer, post-op, about one year. I needed something to help me get my energy back. My niece in Montana suggested Ka\u2019Chava. I am on my second bag! It is so full of vital nutrients that are all in one scoop. Thanks to taking steps toward good health. Delicious too. I put it into my coffee and have a delicious \u2018latte.\u2019',
          author: 'Shirley M.',
        },
        {
          id: 2,
          title: 'Amazing!',
          text: "I feel overall so much better. My energy levels are up, my skin looks better, and it keeps me full for hours, which is a significant help in my weight loss journey. Ka'Chava has allowed me to eat less and go longer between meals. I've been able to cut out other supplements and vitamins I was taking. Give it a try, My results so far are amazing.",
          author: 'Angie H.',
        },
        {
          id: 3,
          title: 'Great Energy and Overall Wellness',
          text: "It's obvious that after drinking Ka'Chava now for a couple of weeks, I have a sense of well-being that I have not had since in my 50's when I played a lot of tennis. I have a depth of stamina to spare and calm. Thanks Ka\u2019Chava Team. (P.S. Just turned 88 on the 16th of last month. Grateful, humbled, and ready to go.)",
          author: 'Richard H.',
        },
      ],
      Energy: [
        {
          id: 1,
          title: 'Increases Energy',
          text: 'I have CHF, which leaves me exhausted all the time. I was just barely getting through my day. After 10 days of using the shakes, I felt my energy come back. I am back in the gym and feeling almost back to normal. I love that Ka\u2019Chava is heart-healthy and loaded with nutrients. Down 15 lbs at my last checkup, which is a plus.',
          author: 'Shaunda D.',
        },
        {
          id: 2,
          title: 'Love Ka\u2019Chava!',
          text: 'At 64, I found myself not quite as energetic as I used to be. I have a good workout schedule and I eat clean most of the time, but my energy level has been waning. I decided to try Ka\u2019Chava to see if that would help. I find my energy is better throughout the day without adding more caffeine, and my snacking has gone way down. Thanks! I will continue to be a customer.',
          author: 'Gina B.',
        },
        {
          id: 3,
          title: 'Was skeptical, now a believer',
          text: 'Love this stuff. Love the taste especially. It\u2019s my daily morning starter. Can definitely tell a difference in my clarity, energy, and mood if I don\u2019t have it. It\u2019s not \u2018wired\u2019 energy, just calm and focused. I always add a scoop of peanut butter, sometimes a handful of dark chocolate chips, for an added treat.',
          author: 'Curtis H.',
        },
      ],
    };
    const Wa = () => {
      const [t, e] = na('Ingredients');
      return j(
        'div',
        null,
        j(
          'div',
          { className: 'tg-testimonials__buttons grid justify-center' },
          Object.keys(ra).map((a) =>
            j(
              'button',
              {
                id: a,
                onClick: () =>
                  ((t) => {
                    e(t);
                  })(a),
                className: ''.concat(
                  t === a ? 'active' : '',
                  ' inline-flex items-center gap-x-[5px] disabled:opacity-70 [&amp;_svg]:fill-current transition-all duration-[0.2s] rounded-[5px] disabled:pointer-events-none focus-visible:duration-0 focus-visible-2 p-0 justify-center relative max-h-[50px] max-w-[244px] w-full text-lg font-bold 3xl:text-[25px] 3xl:max-w-[342px] bg-neutral-700 hover:bg-neutral-600 border-neutral-700 text-white cursor-pointer px-11 py-[18px] !rounded-[50px] border text-center !text-lg font-primary !leading-[18px]'
                ),
              },
              j('div', { className: 'contents' }, a)
            )
          )
        ),
        j(
          'div',
          {
            className:
              'tg-testimonials__content grid justify-center max-w-screen-lg w-full justify-center m-auto',
          },
          ra[t].map((t) =>
            j(
              'div',
              { className: 'tg-testimonials__testimonial' },
              j(qa, null),
              j('h4', { className: 'tg-testimonials__title' }, t.title),
              j('p', { className: 'tg-testimonials__text' }, t.text),
              j('p', { className: 'tg-testimonials__author' }, t.author)
            )
          )
        )
      );
    };
    const Xa = {
      1: {
        imgSrc:
          'https://cdn.sanity.io/images/oe59ey5f/production/136e432e2e617db552d586f0bd68c0246db25bcd-513x761.png?auto=format&w=500',
        videoSrc:
          'https://cdn.shopify.com/s/files/1/0199/1938/files/Testimonials_BlondFemaleBlackTop.mp4?v=1651686597',
      },
      2: {
        imgSrc:
          'https://cdn.sanity.io/images/oe59ey5f/production/b8567b5a2567dda91df8a828e8923d0824397db5-509x776.png?auto=format&w=500',
        videoSrc:
          'https://cdn.shopify.com/s/files/1/0199/1938/files/Testimonials_MaleTruckDriver.mp4?v=1651685102',
      },
      3: {
        imgSrc:
          'https://cdn.sanity.io/images/oe59ey5f/production/50730cecadf88a019271ae60d7da01de2b9ada8e-512x794.png?auto=format&w=500',
        videoSrc:
          'https://cdn.shopify.com/s/files/1/0199/1938/files/Testimonials_WomanBlueTopOutsideChair.mp4?v=1651689006',
      },
      4: {
        imgSrc:
          'https://cdn.sanity.io/images/oe59ey5f/production/220ba30705763973d8ce62f5440a26d12a4b0508-510x784.png?auto=format&w=500',
        videoSrc:
          'https://cdn.shopify.com/s/files/1/0199/1938/files/GlassesL_Bag_Testimonial_March_Subs.mp4?v=1651671745',
      },
      5: {
        imgSrc:
          'https://cdn.sanity.io/images/oe59ey5f/production/8974d20e27ef26848847b7ad76a67c97a34bdd00-512x781.png?auto=format&w=500',
        videoSrc:
          'https://cdn.shopify.com/s/files/1/0199/1938/files/Testimonials_FemaleBrightRedTop.mp4?v=1651693458',
      },
    };
    const Ya = () =>
      j(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '48.31',
          height: '42.165',
          'aria-hidden': 'true',
          className: 'h-[28px] w-[28px]',
          viewBox: '0 0 48.31 42.165',
        },
        j('path', {
          d: 'M15.801 5.258h.005zM40.727 5.014h-.007l.025.018zM21.116 1.767l-.009.005.029-.014zM27.128 26.507a10.831 10.831 0 0 0 1.727-.872c.292-.183.578-.377.864-.569l.654-.434a11.495 11.495 0 0 1 1.179-.687l.3-.161a7.169 7.169 0 0 0 1.229-.868.928.928 0 0 0 .357-.855 1.015 1.015 0 0 0-.107-.327l-.08-.135a2.4 2.4 0 0 0-.253-.309 4.437 4.437 0 0 0-.4-.386c-.155-.144-.317-.29-.48-.428a9.762 9.762 0 0 0-1.375-1.007c-.322-.19-.64-.39-.946-.6s-.589-.448-.871-.683l-.356-.292a15.7 15.7 0 0 0-1.625-1.127c-.532-.335-1.057-.681-1.581-1.026-.678-.445-1.355-.891-2.045-1.312a12.596 12.596 0 0 0-.567-.324c-.21-.117-.422-.233-.628-.363-.512-.318-1.055-.59-1.6-.866-.711-.357-1.43-.7-2.15-1.041l-1.01-.482-.719-.346-.726-.349a1.52 1.52 0 0 0-.626-.2h-.011a.5.5 0 0 0-.42.269 1.308 1.308 0 0 0-.13.6c-.005.317.02.634.043.948l.023.3.027.468c.018.3.036.61.059.912l.016.24c.028.4.057.8.066 1.2a52.9 52.9 0 0 1 .005 2.031l-.009.436a62.344 62.344 0 0 0-.052 1.785 10.031 10.031 0 0 0 .061 1.057l.046.537.044.539c.036.4.068.747.089 1.1.02.247.027.5.032.751l.007.3c.023.636.028 1.271.005 1.912-.021.67-.045 1.346-.034 2.021l.009.519.009.626c0 .224.018.447.032.67l.023.4c.018.258.034.514.039.772a2.056 2.056 0 0 0 .029.323 1.3 1.3 0 0 0 .085.29.968.968 0 0 0 .185.283.6.6 0 0 0 .272.137 1.13 1.13 0 0 0 .173.014.805.805 0 0 0 .2-.025 2.746 2.746 0 0 0 .56-.237c.114-.057.224-.123.334-.19l.242-.148.3-.194.418-.281a13.4 13.4 0 0 1 1.5-.927c.167-.078.34-.156.518-.222.21-.078.427-.149.637-.217l.384-.121c.164-.05.325-.1.485-.155.212-.071.414-.162.621-.25l.151-.066c.272-.119.546-.235.809-.375.213-.117.414-.246.615-.374a15.811 15.811 0 0 1 1.578-.882c.585-.245 1.17-.486 1.76-.727zM44.535 29.396l.005-.009-.012.02zM33.718 40.294h-.03l-.148.03zM48.314 9.645l-.018-.037.007.016z',
        }),
        j('path', {
          d: 'M44.965 19.981a13.61 13.61 0 0 0-.044-1.519 17.112 17.112 0 0 0-.258-1.57l.007.032a19.86 19.86 0 0 1-.217-1.283c-.062-.475-.123-.944-.217-1.412a6.913 6.913 0 0 0-.415-1.177q-.213-.509-.453-1.014l.014.032c-.164-.35-.358-.678-.53-1.017l-.018-.039.012.029-.023-.05c-.014-.027-.027-.051-.039-.08l.032.064c-.1-.222-.187-.448-.283-.67a17.516 17.516 0 0 0-.377-.827 3.714 3.714 0 0 0-.356-.647 4.11 4.11 0 0 0-.6-.611c-.185-.169-.352-.347-.53-.52a5.058 5.058 0 0 0-.671-.553 4.037 4.037 0 0 1-.211-.166l-.094-.119a8.583 8.583 0 0 0-.893-.937c-.313-.3-.619-.613-.966-.885a7.971 7.971 0 0 0-1.446-.866q-.694-.352-1.4-.7c-.592-.29-1.2-.548-1.809-.81-.278-.125-.559-.251-.841-.368s-.576-.217-.861-.331c-.6-.228-1.2-.44-1.8-.658-.228-.078-.457-.155-.681-.24.062.023.117.046.179.067-.3-.1-.6-.206-.921-.285-.251-.068-.514-.117-.77-.167-.614-.128-1.216-.279-1.825-.407a7.786 7.786 0 0 0-1.49-.172h-.181a26.042 26.042 0 0 0-1.37-.037h-.1A16.994 16.994 0 0 0 21.15.002h-.174A10.781 10.781 0 0 0 19 .281c-.267.057-.534.114-.8.176-.626.1-1.249.215-1.871.343a8.157 8.157 0 0 0-.859.206c-.318.089-.624.207-.937.324s-.624.266-.937.4c-.34.145-.681.281-1.026.419-.642.266-1.295.5-1.926.8-.251.121-.5.249-.747.4a9.857 9.857 0 0 0-.825.557c-.6.43-1.167.893-1.725 1.371a19.261 19.261 0 0 0-1.394 1.369A25.26 25.26 0 0 0 4.48 8.304c-.213.267-.425.53-.626.8-.235.334-.446.676-.653 1.021-.342.587-.648 1.2-.953 1.8-.247.484-.509.968-.731 1.467v.005a18.171 18.171 0 0 0-.793 1.864 10.109 10.109 0 0 0-.474 2 8.994 8.994 0 0 0-.071 1.037c-.069.5-.1 1.009-.141 1.513a17.883 17.883 0 0 0-.029 1.948c.012.358.029.708.052 1.067s.066.685.089 1.032c.05.684.128 1.36.217 2.041a18.318 18.318 0 0 0 .658 3.874c.107.3.212.6.336.9s.272.6.418.9a18.118 18.118 0 0 0 .987 1.7 14.979 14.979 0 0 0 1.284 1.68 16.575 16.575 0 0 0 1.418 1.357c.457.413.92.825 1.394 1.214a14.063 14.063 0 0 0 1.713 1.146c.491.308.976.612 1.48.909.455.267.927.51 1.407.734.185.1.372.189.562.276q.427.21.87.38c.279.105.558.2.832.306s.525.2.788.3a6.942 6.942 0 0 0 1 .268 9.574 9.574 0 0 0 1.618.116c.162.005.322.012.484.02.125.02.247.041.37.058.352.052.7.083 1.049.107a13.531 13.531 0 0 0 1.919-.05c.018 0 .038 0 .055-.005.523.005 1.046.009 1.569.027.452.018.9.041 1.35.041.508 0 1.01-.057 1.513-.107.927-.1 1.853-.217 2.769-.393a17.88 17.88 0 0 0 2.012-.466 5.93 5.93 0 0 0 .955-.386c.29-.149.569-.329.848-.507s.552-.357.841-.519.6-.329.893-.5c.247-.146.493-.287.726-.443a9.462 9.462 0 0 0 .8-.606c.546-.452 1.078-.927 1.613-1.391s1.021-.953 1.512-1.444a19.165 19.165 0 0 0 1.323-1.519c.407-.5.786-1.016 1.149-1.545.032-.045.066-.089.1-.135l-.025.042c.018-.029.037-.057.055-.083l.05-.073-.032.044c.05-.073.1-.144.149-.219.384-.547.767-1.092 1.1-1.666.352-.6.647-1.242.96-1.866a16.822 16.822 0 0 0 .848-1.981 16.253 16.253 0 0 0 .514-1.946 17.026 17.026 0 0 0 .29-2.156c.016-.319.026-.637.033-.959v-.373c.021-.323.035-.65.041-.979zM25.046 39.995c-.167.036-.333.066-.5.1l.126-.025c-.759.139-1.524.217-2.283.363h.018l-.073.012c-.08.008-.157.025-.237.029-.542.028-1.09.035-1.634.019a22.04 22.04 0 0 1-1.9-.269c-.249-.055-.495-.114-.742-.169-.48-.1-.966-.188-1.446-.277a13.375 13.375 0 0 1-1.231-.315c-.071-.036-.14-.069-.21-.106-.324-.167-.653-.328-.976-.5a18.376 18.376 0 0 1-1.859-1.078l.007.005c-.377-.262-.751-.53-1.129-.786s-.793-.518-1.185-.779a9.858 9.858 0 0 1-.779-.626c-.318-.279-.635-.56-.937-.861-.285-.285-.574-.569-.87-.847s-.612-.58-.893-.888a8.275 8.275 0 0 1-.614-.85c-.117-.183-.229-.368-.341-.557s-.2-.384-.3-.574v.009l-.35-.745a7.984 7.984 0 0 0-.379-.765 17.182 17.182 0 0 0-.446-.718c-.016-.023-.028-.048-.044-.072a3.337 3.337 0 0 1-.1-.221 9.144 9.144 0 0 1-.535-1.494c-.13-.478-.224-.966-.317-1.451l-.064-.334.034.167c-.061-.331-.1-.667-.151-1-.026-.243-.051-.49-.078-.734-.05-.409-.128-.8-.172-1.212a6.786 6.786 0 0 1-.034-1.124c.028-.32.057-.642.094-.959s.1-.634.146-.948.1-.608.157-.911a8.856 8.856 0 0 1 .283-1.116c.253-.6.557-1.182.856-1.761q.451-.9.9-1.78c.29-.559.575-1.117.882-1.663.151-.263.3-.53.468-.793s.358-.541.541-.809c-.016.029-.032.052-.05.078a21.551 21.551 0 0 1 1.73-2.163c.3-.32.6-.621.9-.928a20.8 20.8 0 0 1 .987-.937l-.045.034.046-.037.027-.024-.023.023a19.84 19.84 0 0 1 1.441-1.088c.4-.268.8-.509 1.2-.769s.781-.531 1.177-.79a14.966 14.966 0 0 1 1.489-.834l-.028.011.037-.016.048-.025-.028.016c.3-.13.606-.246.909-.368l1.169-.271c.562-.129 1.111-.32 1.682-.443a8.581 8.581 0 0 1 .951-.1c.413-.02.82 0 1.233 0h.24c.221 0 .443-.005.663-.012h.272c.331.034.663.059 1 .093a7.443 7.443 0 0 1 1.217.2c.507.133 1 .316 1.5.451.464.118.926.2 1.4.274.123.02.245.057.368.08l.057.018c.349.142.681.313 1.024.458.528.21 1.074.372 1.608.548.267.1.534.206.791.332.363.169.715.363 1.068.548a21.7 21.7 0 0 1 1.988 1.147c.148.1.292.2.438.3l-.011-.009.018.012c.025.018.048.034.071.048-.02-.011-.036-.023-.053-.034a21.6 21.6 0 0 1 1.113.866 11.459 11.459 0 0 1 1.17 1.065c.238.3.459.616.694.914.256.341.525.668.8.992a7.178 7.178 0 0 1 .923 1.348c.249.561.457 1.142.68 1.718.121.328.245.653.35.993.073.244.123.5.174.747.071.388.133.776.206 1.161.083.463.183.922.272 1.384v-.009c.036.212.068.421.091.633.034.248.034.5.046.749.016.5-.023.994-.013 1.489.005.238.02.475.032.711v.118a27.776 27.776 0 0 1-1.306 6.79c-.066.177-.133.352-.2.526a21.24 21.24 0 0 1-.648 1.2l-.169.3c-.139.221-.277.443-.42.66l.041-.06-.046.068-.03.046.023-.035c-.119.173-.242.345-.368.516-.162.217-.334.425-.5.643-.336.441-.644.9-.983 1.339s-.679.841-1.021 1.261c-.123.147-.245.293-.372.437a11.346 11.346 0 0 1-1.536.969c-.569.3-1.154.567-1.7.907-.53.331-1.048.681-1.579 1-.578.347-1.175.665-1.785.957a12.528 12.528 0 0 1-1.238.468c-.413.133-.838.222-1.256.327-.166.045-.329.093-.491.141-.249.053-.5.11-.745.172a67.583 67.583 0 0 1-.423.08zM39.771 9.609c.009.019.02.039.029.061a.8.8 0 0 1-.041-.086zm-36.186.308c-.027.037-.053.08-.08.119l-.025.036c.034-.057.073-.107.105-.155zm-.69 20.71-.032-.072.041.089zm40.59-9.375c0 .025-.005.05-.007.075 0-.029 0-.055.007-.083z',
        })
      );
    const Za = (e) => {
      const { activeVideoSrc: t, setActiveVideoSrc: l } = e;
      return j(
        'div',
        {
          className:
            'tg-review-video fixed top-0 left-0 right-0 bottom-0 bg-[#00000000] overlay transition-colors z-20',
          style: 'background-color: rgba(0, 0, 0, 0.4);',
        },
        j(
          'div',
          {
            className:
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-auto h-full',
            role: 'dialog',
            'aria-modal': 'true',
          },
          j(
            'div',
            {
              className: 'relative flex flex-col justify-center h-full',
              style: 'opacity: 1; transform: translateY(0px) translateZ(0px);',
            },
            j(
              'div',
              {
                className:
                  'shadow-card rounded-[5px] relative flex flex-col min-w-[300px] min-h-[100px] max-h-[calc(100dvh-40px)] p-6 !p-0 bg-transparent max-w-[750px] w-auto m-auto py-7 px-10 shadow-none',
              },
              j(
                'header',
                {
                  className:
                    'relative focus:outline-none focus-visible:outline-offset-1 focus-visible:outline-2 focus-visible:outline-black',
                },
                j(
                  'button',
                  {
                    onClick: () => l(''),
                    className:
                      'inline-flex items-center gap-x-[5px] disabled:opacity-70 [&_svg]:fill-current text-center text-base font-semibold leading-none transition-all duration-[0.2s] cursor-pointer border-[none] disabled:pointer-events-none focus-visible:duration-0 focus-visible-2 bg-transparent decoration-2 underline-offset-[3px] text-[#fd8b55] rounded-none focus-visible:outline-offset-1 focus-visible:outline-2 hover:no-underline focus-visible:no-underline justify-center no-underline min-h-[auto] z-[2] absolute right-0 top-0 m-0 p-0 !top-[30px] !right-[10px] !w-6 !h-6 !text-kachavaOrange !p-0',
                    type: 'button',
                    'aria-label': 'Close (Esc)',
                    id: 'closeButton',
                  },
                  j(
                    'div',
                    { className: 'contents' },
                    j(
                      'svg',
                      {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '27.816',
                        height: '27.816',
                        viewBox: '0 0 27.816 27.816',
                      },
                      j('path', {
                        fill: 'currentColor',
                        d: 'm17.51 8.345-3.6 3.6-3.6-3.6-1.961 1.961 3.6 3.6-3.6 3.6 1.961 1.961 3.6-3.6 3.6 3.6 1.961-1.961-3.6-3.6 3.6-3.6zM13.908 0a13.908 13.908 0 1 0 13.908 13.908A13.9 13.9 0 0 0 13.908 0zm0 25.034a11.126 11.126 0 1 1 11.126-11.126 11.141 11.141 0 0 1-11.126 11.126z',
                      })
                    )
                  )
                )
              ),
              j(
                'div',
                {
                  className:
                    'scroll scrollable overflow-x-hidden overflow-y-auto scroll-auto',
                },
                j(
                  'section',
                  {
                    className:
                      'relative w-full mx-auto my-0 max-w-[100vw] [&_video]:block [&_video]:max-w-full [&_video]:max-h-[80vh]',
                  },
                  j(
                    'div',
                    { className: '' },
                    j(
                      'div',
                      {
                        className: 'flex w-full h-auto',
                        style: 'width: 100%; height: auto;',
                      },
                      j('video', {
                        src: t,
                        preload: 'auto',
                        controls: 'true',
                        id: 'video-card-:rm:',
                        'aria-label': 'Video player',
                        playsinline: 'true',
                        'webkit-playsinline': 'true',
                        'x5-playsinline': 'true',
                        style: 'width: 100%; height: auto;',
                        'aria-hidden': 'false',
                        tabindex: '0',
                        autoplay: 'true',
                      })
                    )
                  )
                )
              )
            )
          )
        )
      );
    };
    const $a = () => {
      const [e, r] = na('');
      return (
        (document.body.style.overflow = e ? 'hidden' : 'auto'),
        j(
          'div',
          {
            className:
              'tg-testimonials__videos grid justify-center tg-swiper swiper-container swiper',
          },
          j(
            'div',
            {
              className:
                'max-w-[1150px] mr-auto grid grid-cols-5 mt-5 md:grid-cols-5 swiper-wrapper',
            },
            Object.values(Xa).map((e, i) =>
              j(
                'div',
                {
                  className:
                    "video-button w-full [&_[role='dialog']]:w-full swiper-slide",
                },
                j(
                  'div',
                  {
                    className: 'tg-picture-wrapper relative w-full pt-[132.8%]',
                  },
                  j(
                    'picture',
                    null,
                    j('source', { srcset: e.imgSrc }),
                    j('img', {
                      src: e.imgSrc,
                      srcset: e.imgSrc,
                      className:
                        'absolute top-0 left-0 w-full h-full object-cover object-center',
                      loading: 'eager',
                      alt: '',
                    })
                  ),
                  j(
                    'button',
                    {
                      onClick: () =>
                        ((e) => {
                          r(e);
                        })(e.videoSrc),
                      className:
                        'inline-flex items-center gap-x-[5px] disabled:opacity-70 [&_svg]:fill-current text-center text-base font-semibold leading-none transition-all duration-[0.2s] cursor-pointer rounded-[5px] border-[none] disabled:pointer-events-none focus-visible:duration-0 focus-visible-2 p-0 justify-center absolute top-0 left-0 w-full h-full text-white',
                      id: 'Testimonials_BlondFemaleBlackTop',
                      'aria-label': 'Play video review 105',
                    },
                    j('div', { className: 'contents' }, j(Ya, null))
                  )
                )
              )
            )
          ),
          j('div', { class: 'swiper-pagination' }),
          j('div', { class: 'swiper-button-prev' }),
          j('div', { class: 'swiper-button-next' }),
          e ? j(Za, { activeVideoSrc: e, setActiveVideoSrc: r }) : null
        )
      );
    };
    const _a = () =>
      j(
        'section',
        { id: 'tg-testimonials', className: 'flex flex-wrap tg-testimonials' },
        j(
          'div',
          {
            className:
              'tg-testimonials__inner gap-6 w-full justify-center m-auto max-w-[1150px]',
          },
          j(
            'div',
            {
              className:
                'tg-testimonials__reviews-count flex justify-center align-baseline',
            },
            j(qa, null),
            ' ',
            j('span', null, '61k+ five-star reviews')
          ),
          j(
            'div',
            {
              className:
                'tg-testimonials__header grid gap-6 w-full justify-center m-auto px-4',
            },
            j(
              'h2',
              {
                className:
                  'align-baseline [&_a]:underline [&_a:hover]:no-underline text-[calc(1rem_*_1.5)] md:text-[calc(1rem_*_1.9375)] lg:text-[calc(1rem_*_2.125)] !text-[#2c2926] !text-[34px] md:!text-[44px] !font-bold md:!leading-[56px] text-center',
              },
              'The Whole Body Nutrition Shake'
            ),
            j(
              'h3',
              {
                className:
                  'align-baseline [&_a]:underline [&_a:hover]:no-underline text-[calc(1rem_*_1.25)] md:text-[calc(1rem_*_1.375)] lg:text-[calc(1rem_*_1.5)] !text-[#2c2926] !text-lg !font-bold md:!font-normal text-center',
              },
              "We\u2019re inspired every day by the thousands of Ka\u2019Chava drinkers sharing how our shakes help them live healthier lives. We'll raise a glass to that."
            )
          ),
          j(Wa, null),
          j($a, null)
        )
      );
    function ab(e) {
      ((e) => {
        const r = document.createElement('link');
        (r.rel = 'stylesheet'), (r.href = e), document.head.appendChild(r);
      })('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'),
        ((e, r) => {
          const n = document.createElement('script');
          (n.src = e), (n.onload = r), document.head.appendChild(n);
        })(
          'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
          () => {
            bb();
          }
        );
    }
    const bb = () => {
        new Swiper('.swiper-container', {
          slidesPerView: 1,
          spaceBetween: 40,
          breakpoints: { 767: { slidesPerView: 5, spaceBetween: 11 } },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: { el: '.swiper-pagination', clickable: !0 },
        });
      },
      sa = async () => {
        console.log('Social Proof Variant 1');
        const e = await Ka.element('#socialProofControl');
        console.log('ingredientsSection', e);
        const r = new DocumentFragment();
        ga(j(_a, null), r), La(e).with(...r.childNodes), ab();
      };
    const cb =
      '.tg-testimonials {\n  background-color: #fde8d5;\n  padding: 64px;\n  position: relative;\n  z-index: 2;\n  font-family: Arial, Helvetica, sans-serif !important;\n  color: #2c2926;\n}\n.tg-testimonials__reviews-count {\n  margin-bottom: 16px;\n}\n.tg-testimonials__stars {\n  align-items: center;\n  margin-right: 10px;\n}\n.tg-testimonials__header {\n  margin-bottom: 48px;\n}\n.tg-testimonials__header h3 {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 28px;\n}\n.tg-testimonials__buttons {\n  grid-auto-flow: column;\n  grid-gap: 11px;\n  margin-bottom: 48px;\n}\n.tg-testimonials__buttons button {\n  background-color: #fff0e3;\n  border: solid 2px #2c2926;\n  color: #2c2926;\n}\n.tg-testimonials__buttons button:hover,\n.tg-testimonials__buttons button.active {\n  background-color: #fd8b55;\n  color: #ffffff;\n  border: solid 2px #fd8b55;\n}\n.tg-testimonials__content {\n  grid-auto-flow: column;\n  grid-gap: 72px;\n}\n.tg-testimonials__content * {\n  margin-bottom: 8px;\n}\n.tg-testimonials__title {\n  font-size: 18px;\n  font-weight: 800;\n  line-height: 23px;\n}\n.tg-testimonials__text {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 21px;\n}\n.tg-testimonials__author {\n  font-size: 18px;\n  font-weight: 800;\n  line-height: 23px;\n}\n.tg-testimonials__author::after {\n  content: "";\n  display: inline-block;\n  width: 16.566px;\n  height: 16.566px;\n  background-image: url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><g clip-path="url(%23clip0_6_68)"><path d="M10.5 0L8.283 1.423L6.063 0L4.853 2.342L2.219 2.219L2.342 4.852L0 6.063L1.423 8.283L0 10.5L2.342 11.711L2.219 14.344L4.852 14.221L6.062 16.563L8.281 15.14L10.5 16.565L11.711 14.223L14.344 14.346L14.222 11.713L16.565 10.5L15.143 8.283L16.566 6.064L14.224 4.854L14.346 2.221L11.713 2.343L10.5 0Z" fill="%232E95E9"/><path d="M6.94802 11.066L4.49202 8.61201C4.42131 8.54114 4.38159 8.44512 4.38159 8.34501C4.38159 8.2449 4.42131 8.14887 4.49202 8.07801L5.02602 7.54401C5.09688 7.47329 5.19291 7.43358 5.29302 7.43358C5.39313 7.43358 5.48915 7.47329 5.56002 7.54401L7.21502 9.19801L10.759 5.65401C10.8299 5.58329 10.9259 5.54358 11.026 5.54358C11.1261 5.54358 11.2222 5.58329 11.293 5.65401L11.827 6.18801C11.8977 6.25887 11.9374 6.35489 11.9374 6.45501C11.9374 6.55512 11.8977 6.65114 11.827 6.72201L7.48102 11.066C7.4102 11.1364 7.31439 11.1759 7.21452 11.1759C7.11465 11.1759 7.01884 11.1364 6.94802 11.066Z" fill="white"/></g><defs><clipPath id="clip0_6_68"><rect width="16.566" height="16.566" fill="white"/></clipPath></defs></svg>\');\n  background-size: contain;\n  background-repeat: no-repeat;\n  vertical-align: middle;\n  margin-left: 8px;\n}\n.tg-testimonials__videos {\n  padding-bottom: 24px;\n}\n.tg-testimonials__videos .tg-picture-wrapper img {\n  border-radius: 8px;\n}\n.tg-testimonials__videos .tg-picture-wrapper svg {\n  width: 28px;\n  height: 28px;\n}\n\n.tg-review-video {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 20;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n}\n.tg-review-video > div {\n  position: absolute;\n  display: flex;\n  height: 100%;\n  max-width: 350px;\n  margin: 0 auto;\n}\n\n#tg-testimonials .swiper .swiper-pagination-bullet {\n  background-color: #fd8b55;\n}\n#tg-testimonials .swiper .swiper-button-next,\n#tg-testimonials .swiper .swiper-button-prev {\n  color: #fd8b55;\n}\n#tg-testimonials .swiper .swiper-button-next {\n  right: 0;\n}\n#tg-testimonials .swiper .swiper-button-prev {\n  left: 0;\n}\n#tg-testimonials .swiper .swiper-button-prev:after,\n#tg-testimonials .swiper .swiper-button-next:after {\n  font-size: 20px;\n  font-weight: 900;\n}\n\n@media (max-width: 1100px) {\n  .tg-testimonials {\n    padding: 64px 16px;\n  }\n  .tg-testimonials__buttons {\n    grid-template-rows: 1fr 1fr;\n    justify-items: center;\n  }\n  .tg-testimonials__buttons button {\n    font-size: 14px !important;\n    font-weight: 700;\n  }\n  .tg-testimonials__content {\n    grid-gap: 32px;\n  }\n}\n@media (max-width: 767px) {\n  .tg-testimonials {\n    padding: 64px 16px;\n  }\n  .tg-testimonials__buttons {\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-columns: 1fr 1fr;\n    max-width: 500px;\n    margin: 0 auto 48px;\n  }\n  .tg-testimonials__content {\n    grid-auto-flow: row;\n    grid-gap: 32px;\n  }\n  .tg-testimonials__videos {\n    padding: 0 40px 24px !important;\n  }\n}\n\n/*# sourceMappingURL=/v1.css.map */'.trim();
    function db() {
      new MutationObserver(() => {
        document.querySelector('.tg-testimonials') || sa();
      }).observe(document.body, { childList: !0, subtree: !0 }),
        document.querySelector('.tg-testimonials') || sa();
    }
    wa(cb), db();
  })();
}
