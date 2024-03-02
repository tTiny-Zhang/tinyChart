(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [3],
  {
    'Ng2+': function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'default', function () {
          return m;
        });
      a('+L6B');
      var n = a('2/Rp'),
        c = (a('lUTK'), a('BvKs')),
        s = a('tJVT'),
        l = (a('B9cy'), a('Ol7k')),
        r = a('q1tI'),
        i = [
          { key: '/overview', label: 'Overview' },
          { key: '/echarts', label: 'Echarts' },
          { key: '/antv/g2', label: 'antv/G2' },
          { key: '/antv/g6', label: 'antv/G6' },
          { key: '/antv/x6', label: 'antv/x6' },
          { key: '/todo', label: 'todo' },
        ],
        o = a('Ty5D'),
        d = a('9kvl'),
        b = a('k6Dc'),
        h = a.n(b),
        v = a('HsIn'),
        j = a('oN5p'),
        u = a('nKUr'),
        y = l['a'].Header,
        k = l['a'].Content,
        p = l['a'].Footer,
        O = (e) => {
          var t = e.children,
            a = Object(o['k'])(),
            b = a.query,
            O = void 0 === b ? {} : b,
            m = a.pathname,
            x = void 0 === m ? '' : m,
            w = Object(r['useState'])(['/overview']),
            g = Object(s['a'])(w, 2),
            N = g[0],
            T = g[1],
            _ = Object(r['useCallback'])((e) => {
              var t = e.key;
              d['a'].push({ pathname: t, query: O });
            }, []);
          return (
            Object(v['a'])(
              () => {
                x || (d['a'].push('/overview'), T([x])), x && T([x]);
              },
              [x],
              { wait: 1 },
            ),
            Object(u['jsxs'])(l['a'], {
              className: 'layout',
              children: [
                Object(u['jsxs'])(y, {
                  className: h.a.header,
                  children: [
                    Object(u['jsx'])(c['a'], {
                      onClick: _,
                      selectedKeys: N,
                      theme: 'dark',
                      mode: 'horizontal',
                      items: i,
                      className: h.a.menu,
                    }),
                    Object(u['jsx'])(n['a'], {
                      type: 'dashed',
                      icon: Object(u['jsx'])(j['a'], {}),
                      href: 'https://github.com/tTiny-Zhang',
                    }),
                  ],
                }),
                Object(u['jsx'])(k, {
                  style: { padding: '0 50px' },
                  children: Object(u['jsx'])('div', {
                    className: 'site-layout-content',
                    children: t,
                  }),
                }),
                Object(u['jsx'])(p, {
                  style: { textAlign: 'center' },
                  children: 'Made with by tTiny',
                }),
              ],
            })
          );
        },
        m = O;
    },
    k6Dc: function (e, t, a) {
      e.exports = { header: 'header___3dRnT', menu: 'menu___3bmRC' };
    },
  },
]);
