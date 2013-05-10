/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-code' : '&#xe000;',
			'icon-file-xml' : '&#xe001;',
			'icon-file-css' : '&#xe002;',
			'icon-css3' : '&#xe003;',
			'icon-office' : '&#xe004;',
			'icon-newspaper' : '&#xe005;',
			'icon-pencil' : '&#xe006;',
			'icon-file' : '&#xe007;',
			'icon-file-2' : '&#xe008;',
			'icon-file-3' : '&#xe009;',
			'icon-file-4' : '&#xe00a;',
			'icon-copy' : '&#xe00b;',
			'icon-copy-2' : '&#xe00c;',
			'icon-copy-3' : '&#xe00d;',
			'icon-paste' : '&#xe00e;',
			'icon-stack' : '&#xe00f;',
			'icon-screen' : '&#xe010;',
			'icon-mobile' : '&#xe011;',
			'icon-laptop' : '&#xe012;',
			'icon-tablet' : '&#xe013;',
			'icon-mobile-2' : '&#xe014;',
			'icon-tv' : '&#xe015;',
			'icon-link' : '&#xe016;',
			'icon-attachment' : '&#xe017;',
			'icon-eye' : '&#xe018;',
			'icon-eye-blocked' : '&#xe019;',
			'icon-eye-2' : '&#xe01a;',
			'icon-grin' : '&#xe01b;',
			'icon-wink' : '&#xe01c;',
			'icon-warning' : '&#xe01d;',
			'icon-notification' : '&#xe01e;',
			'icon-question' : '&#xe01f;',
			'icon-info' : '&#xe020;',
			'icon-drawer' : '&#xe021;',
			'icon-wordpress' : '&#xe022;',
			'icon-embed' : '&#xe023;',
			'icon-console' : '&#xe024;',
			'icon-share' : '&#xe025;',
			'icon-html5' : '&#xe026;',
			'icon-html5-2' : '&#xe027;',
			'icon-firefox' : '&#xe028;',
			'icon-chrome' : '&#xe029;',
			'icon-opera' : '&#xe02a;',
			'icon-safari' : '&#xe02b;',
			'icon-IE' : '&#xe02c;',
			'icon-bug' : '&#xe02d;',
			'icon-pie' : '&#xe02e;',
			'icon-remove' : '&#xe02f;',
			'icon-settings' : '&#xe030;',
			'icon-dashboard' : '&#xe031;',
			'icon-meter' : '&#xe032;',
			'icon-rocket' : '&#xe033;',
			'icon-fire' : '&#xe034;',
			'icon-cloud-upload' : '&#xe035;',
			'icon-cloud-download' : '&#xe036;',
			'icon-tree' : '&#xe037;',
			'icon-numbered-list' : '&#xe038;',
			'icon-list' : '&#xe039;',
			'icon-map' : '&#xe03a;',
			'icon-download' : '&#xe03b;',
			'icon-upload' : '&#xe03c;',
			'icon-box-remove' : '&#xe03d;',
			'icon-box-add' : '&#xe03e;',
			'icon-drawer-2' : '&#xe03f;',
			'icon-location' : '&#xe040;',
			'icon-location-2' : '&#xe041;',
			'icon-phone-hang-up' : '&#xe042;',
			'icon-coin' : '&#xe043;',
			'icon-print' : '&#xe044;',
			'icon-qrcode' : '&#xe045;',
			'icon-podcast' : '&#xe046;',
			'icon-feed' : '&#xe047;',
			'icon-database' : '&#xe048;',
			'icon-github' : '&#xe049;',
			'icon-github-2' : '&#xe04a;',
			'icon-github-3' : '&#xe04b;',
			'icon-twitter' : '&#xe04c;',
			'icon-twitter-2' : '&#xe04d;',
			'icon-download-2' : '&#xe04e;',
			'icon-upload-2' : '&#xe04f;',
			'icon-cloud' : '&#xe050;',
			'icon-layers' : '&#xe051;',
			'icon-layers-alt' : '&#xe052;',
			'icon-earth' : '&#xe053;',
			'icon-folder' : '&#xe054;',
			'icon-folder-open' : '&#xe055;',
			'icon-checkmark' : '&#xe056;',
			'icon-checkmark-2' : '&#xe057;',
			'icon-close' : '&#xe058;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};