!(function (e) {
	var t,
		n,
		o,
		i,
		c,
		s =
			'<svg><symbol id="icon-shouqicaidan" viewBox="0 0 1024 1024"><path d="M192.037 287.953h640.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H192.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 479.169H438.553c-17.673 0-32 14.327-32 32s14.327 32 32 32h393.608c17.673 0 32-14.327 32-32s-14.327-32-32-32zM832.161 735.802H192.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h640.124c17.673 0 32-14.327 32-32s-14.327-32-32-32zM319.028 351.594l-160 160 160 160z" fill="" ></path></symbol><symbol id="icon-zhankaicaidan" viewBox="0 0 1024 1024"><path d="M192.037 287.953h640.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H192.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM192.028 543.17h393.608c17.673 0 32-14.327 32-32s-14.327-32-32-32H192.028c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 735.802H192.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h640.124c17.673 0 32-14.327 32-32s-14.327-32-32-32zM705.162 671.594l160-160-160-160z" fill="" ></path></symbol><symbol id="icon-vue" viewBox="0 0 1024 1024"><path d="M76.416 164.309333L512 916.096 947.584 167.936v-3.626667H778.24L514.56 617.258667 251.989333 164.352z" fill="#41B883" ></path><path d="M252.032 164.309333l262.485333 452.992L778.24 164.309333h-158.848L515.584 342.613333 412.16 164.266667z" fill="#35495E" ></path></symbol></svg>',
		l = (l = document.getElementsByTagName('script'))[l.length - 1].getAttribute('data-injectcss'),
		d = function (e, t) {
			t.parentNode.insertBefore(e, t);
		};
	if (l && !e.__iconfont__svg__cssinject__) {
		e.__iconfont__svg__cssinject__ = !0;
		try {
			document.write('<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>');
		} catch (e) {
			console && console.log(e);
		}
	}
	function a() {
		c || ((c = !0), o());
	}
	function h() {
		try {
			i.documentElement.doScroll('left');
		} catch (e) {
			return void setTimeout(h, 50);
		}
		a();
	}
	(t = function () {
		var e,
			t = document.createElement('div');
		(t.innerHTML = s),
			(s = null),
			(t = t.getElementsByTagName('svg')[0]) &&
				(t.setAttribute('aria-hidden', 'true'),
				(t.style.position = 'absolute'),
				(t.style.width = 0),
				(t.style.height = 0),
				(t.style.overflow = 'hidden'),
				(t = t),
				(e = document.body).firstChild ? d(t, e.firstChild) : e.appendChild(t));
	}),
		document.addEventListener
			? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
				? setTimeout(t, 0)
				: ((n = function () {
						document.removeEventListener('DOMContentLoaded', n, !1), t();
				  }),
				  document.addEventListener('DOMContentLoaded', n, !1))
			: document.attachEvent &&
			  ((o = t),
			  (i = e.document),
			  (c = !1),
			  h(),
			  (i.onreadystatechange = function () {
					'complete' == i.readyState && ((i.onreadystatechange = null), a());
			  }));
})(window);
