// Gridset Overlay JS

gs = {

	init: function () {
		
		if (window.location.href.match('gridset=show')) gs.show();
	
		gs.bind(document, 'keydown', function (e) { 
		
			if (!e) var e = window.event;
		
			if(e.metaKey || e.ctrlKey) {
				
				switch (e.which || e.keyCode) {
					case 71:
					
						var gw = document.getElementById('gridsetoverlaywrap');
					
						if (!gw) gs.show();
						else gs.remove(gw);
						
						gs.prevent(e);
						break;
						
				}
				
			}
		
		
		});
	
	},
	
	remove: function (gw) {
	
		document.body.removeChild(gw);
		
		if(window.detachEvent) window.detachEvent('onresize', gs.width);
		else window.removeEventListener('resize', gs.width, false);
	
	},
	
	width: function () {
		
		var swv = document.getElementById('gridscreenwidthval');
		if (swv) swv.innerHTML = window.innerWidth + 'px';
		
	},

	show: function () {
	
		var p = ['l','d','s','t','m'],
			c = [15,15,15,8,1],
			w = [1600,1280,940,768,320],
			b = document.getElementsByTagName('body')[0],
			gw = '<div id="gridwrap"><div id="gridscreenwidthwrap"><p id="gridscreenwidth">Screen width: <strong id="gridscreenwidthval"></strong></p></div><div id="gridoverlay" class="row">',
		
			k = 0, breaks = '',
			
			styles = '<style id="gridsetoverlaystyles" type="text/css">#gridsetoverlaywrap{position:static;}#gridwrap{display:block;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;pointer-events:none;font-family:Helvetica, Arial, sans-serif !important;}#gridoverlay{position:relative;height:100%;overflow:hidden !important;background:none !important;}#gridoverlay div{display:block;position:static;height:100%;color:#bcbcff;}#gridoverlay .gridset{position:absolute;width:100%;height:100%;top:0;left:0;opacity:0.7;}#gridoverlay .gridset div{text-align:left;font-size:10px !important;border-right:1px solid #bcbcff;border-left:1px solid #bcbcff;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}#gridoverlay div small{width:100%;display:block;text-align:center;color:#7D80DB;font-weight:700 !important;border-bottom:1px solid #bcbcff;border-top:1px solid #bcbcff;padding-top:0 !important;background-color:rgb(240,240,255) !important;text-transform:none !important;height:22px !important;line-height:22px !important;text-style:normal !important;}#gridoverlay .gridset:nth-child(2) div{border-style:dashed;padding-top:23px;}#gridoverlay .gridset:nth-child(2) small{border-style:dashed;}#gridoverlay .gridset:nth-child(3) div{border-style:dotted;padding-top:45px;}#gridoverlay .gridset:nth-child(3) small{border-style:dotted;}#gridsetoverlaywrap .noshow{display:none;}#gridscreenwidthwrap{display:block !important;width:100% !important;position:absolute !important;bottom:0 !important;left:0 !important;height:30px !important;border-top:1px solid #7D80DB !important;opacity:0.7 !important;background-color:rgb(240,240,255) !important;}#gridscreenwidth{display:block !important;width:100% !important;text-align:center !important;font-size:12px !important;line-height:1 !important;padding-top:8px !important;font-family:Helvetica, Arial, sans-serif !important; margin: 0 !important;color:#7D80DB !important;}@media only screen and (max-width:767px) {#gridsetoverlaywrap [class*=m1],#gridsetoverlaywrap .m-all{display:block;float:left;width:100%;margin-right:-100%;}#gridsetoverlaywrap [class*=m1]{width:99.84375%;margin-left:0%;}#gridsetoverlaywrap .m-hide{display:none !important;}}@media only screen and (min-width:768px) and (max-width:939px) {#gridsetoverlaywrap [class*=t1],#gridsetoverlaywrap [class*=t2],#gridsetoverlaywrap [class*=t3],#gridsetoverlaywrap [class*=t4],#gridsetoverlaywrap [class*=t5],#gridsetoverlaywrap [class*=t6],#gridsetoverlaywrap [class*=t7],#gridsetoverlaywrap [class*=t8],#gridsetoverlaywrap .t-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=t1]{width:10.213216145833332%;margin-left:0%;}#gridsetoverlaywrap [class*=t2]{width:10.213216145833332%;margin-left:12.817382815833%;}#gridsetoverlaywrap [class*=t3]{width:10.213216145833332%;margin-left:25.634765631667%;}#gridsetoverlaywrap [class*=t4]{width:10.213216145833332%;margin-left:38.4521484475%;}#gridsetoverlaywrap [class*=t5]{width:10.213216145833332%;margin-left:51.269531263333%;}#gridsetoverlaywrap [class*=t6]{width:10.213216145833332%;margin-left:64.086914079167%;}#gridsetoverlaywrap [class*=t7]{width:10.213216145833332%;margin-left:76.904296895%;}#gridsetoverlaywrap [class*=t8]{width:10.213216145833332%;margin-left:89.721679710833%;}#gridsetoverlaywrap .t-hide{display:none !important;}}@media only screen and (min-width:940px) and (max-width:1279px) {#gridsetoverlaywrap [class*=s1],#gridsetoverlaywrap [class*=s2],#gridsetoverlaywrap [class*=s3],#gridsetoverlaywrap [class*=s4],#gridsetoverlaywrap [class*=s5],#gridsetoverlaywrap [class*=s6],#gridsetoverlaywrap [class*=s7],#gridsetoverlaywrap [class*=s8],#gridsetoverlaywrap [class*=s9],#gridsetoverlaywrap [class*=s10],#gridsetoverlaywrap [class*=s11],#gridsetoverlaywrap [class*=s12],#gridsetoverlaywrap [class*=s13],#gridsetoverlaywrap [class*=s14],#gridsetoverlaywrap [class*=s15],#gridsetoverlaywrap .s-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=s1]{width:4.677304964539008%;margin-left:0%;}#gridsetoverlaywrap [class*=s2]{width:4.677304964539008%;margin-left:6.804964534539%;}#gridsetoverlaywrap [class*=s3]{width:4.677304964539008%;margin-left:13.609929069078%;}#gridsetoverlaywrap [class*=s4]{width:4.677304964539008%;margin-left:20.414893603617%;}#gridsetoverlaywrap [class*=s5]{width:4.677304964539008%;margin-left:27.219858138156%;}#gridsetoverlaywrap [class*=s6]{width:4.677304964539008%;margin-left:34.024822672695%;}#gridsetoverlaywrap [class*=s7]{width:4.677304964539008%;margin-left:40.829787207234%;}#gridsetoverlaywrap [class*=s8]{width:4.677304964539008%;margin-left:47.634751741773%;}#gridsetoverlaywrap [class*=s9]{width:4.677304964539008%;margin-left:54.439716276312%;}#gridsetoverlaywrap [class*=s10]{width:4.677304964539008%;margin-left:61.244680810851%;}#gridsetoverlaywrap [class*=s11]{width:4.677304964539008%;margin-left:68.04964534539%;}#gridsetoverlaywrap [class*=s12]{width:4.677304964539008%;margin-left:74.854609879929%;}#gridsetoverlaywrap [class*=s13]{width:4.677304964539008%;margin-left:81.659574414468%;}#gridsetoverlaywrap [class*=s14]{width:4.677304964539008%;margin-left:88.464538949007%;}#gridsetoverlaywrap [class*=s15]{width:4.677304964539008%;margin-left:95.269503483546%;}#gridsetoverlaywrap .s-hide{display:none !important;}}@media only screen and (min-width:1280px) and (max-width:1599px) {#gridsetoverlaywrap [class*=d1],#gridsetoverlaywrap [class*=d2],#gridsetoverlaywrap [class*=d3],#gridsetoverlaywrap [class*=d4],#gridsetoverlaywrap [class*=d5],#gridsetoverlaywrap [class*=d6],#gridsetoverlaywrap [class*=d7],#gridsetoverlaywrap [class*=d8],#gridsetoverlaywrap [class*=d9],#gridsetoverlaywrap [class*=d10],#gridsetoverlaywrap [class*=d11],#gridsetoverlaywrap [class*=d12],#gridsetoverlaywrap [class*=d13],#gridsetoverlaywrap [class*=d14],#gridsetoverlaywrap [class*=d15],#gridsetoverlaywrap .d-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=d1]{width:5.20833333%;margin-left:0%;}#gridsetoverlaywrap [class*=d2]{width:5.20833333%;margin-left:6.77083333%;}#gridsetoverlaywrap [class*=d3]{width:5.20833333%;margin-left:13.54166666%;}#gridsetoverlaywrap [class*=d4]{width:5.20833333%;margin-left:20.31249999%;}#gridsetoverlaywrap [class*=d5]{width:5.20833333%;margin-left:27.08333332%;}#gridsetoverlaywrap [class*=d6]{width:5.20833333%;margin-left:33.85416665%;}#gridsetoverlaywrap [class*=d7]{width:5.20833333%;margin-left:40.62499998%;}#gridsetoverlaywrap [class*=d8]{width:5.20833333%;margin-left:47.39583331%;}#gridsetoverlaywrap [class*=d9]{width:5.20833333%;margin-left:54.16666664%;}#gridsetoverlaywrap [class*=d10]{width:5.20833333%;margin-left:60.93749997%;}#gridsetoverlaywrap [class*=d11]{width:5.20833333%;margin-left:67.7083333%;}#gridsetoverlaywrap [class*=d12]{width:5.20833333%;margin-left:74.47916663%;}#gridsetoverlaywrap [class*=d13]{width:5.20833333%;margin-left:81.24999996%;}#gridsetoverlaywrap [class*=d14]{width:5.20833333%;margin-left:88.02083329%;}#gridsetoverlaywrap [class*=d15]{width:5.20833333%;margin-left:94.79166662%;}#gridsetoverlaywrap .d-hide{display:none !important;}}@media only screen and (min-width:1600px) {#gridsetoverlaywrap [class*=l1],#gridsetoverlaywrap [class*=l2],#gridsetoverlaywrap [class*=l3],#gridsetoverlaywrap [class*=l4],#gridsetoverlaywrap [class*=l5],#gridsetoverlaywrap [class*=l6],#gridsetoverlaywrap [class*=l7],#gridsetoverlaywrap [class*=l8],#gridsetoverlaywrap [class*=l9],#gridsetoverlaywrap [class*=l10],#gridsetoverlaywrap [class*=l11],#gridsetoverlaywrap [class*=l12],#gridsetoverlaywrap [class*=l13],#gridsetoverlaywrap [class*=l14],#gridsetoverlaywrap [class*=l15],#gridsetoverlaywrap .l-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=l1]{width:4.91666666%;margin-left:0%;}#gridsetoverlaywrap [class*=l2]{width:4.91666666%;margin-left:6.79166666%;}#gridsetoverlaywrap [class*=l3]{width:4.91666666%;margin-left:13.58333332%;}#gridsetoverlaywrap [class*=l4]{width:4.91666666%;margin-left:20.37499998%;}#gridsetoverlaywrap [class*=l5]{width:4.91666666%;margin-left:27.16666664%;}#gridsetoverlaywrap [class*=l6]{width:4.91666666%;margin-left:33.9583333%;}#gridsetoverlaywrap [class*=l7]{width:4.91666666%;margin-left:40.74999996%;}#gridsetoverlaywrap [class*=l8]{width:4.91666666%;margin-left:47.54166662%;}#gridsetoverlaywrap [class*=l9]{width:4.91666666%;margin-left:54.33333328%;}#gridsetoverlaywrap [class*=l10]{width:4.91666666%;margin-left:61.12499994%;}#gridsetoverlaywrap [class*=l11]{width:4.91666666%;margin-left:67.9166666%;}#gridsetoverlaywrap [class*=l12]{width:4.91666666%;margin-left:74.70833326%;}#gridsetoverlaywrap [class*=l13]{width:4.91666666%;margin-left:81.49999992%;}#gridsetoverlaywrap [class*=l14]{width:4.91666666%;margin-left:88.29166658%;}#gridsetoverlaywrap [class*=l15]{width:4.91666666%;margin-left:95.08333324%;}#gridsetoverlaywrap .l-hide{display:none !important;}}</style>';
						
		while (p[k]) {
		
			var hides = '', 
				l = 0;
		
			if (w[k] != breaks && k == 0) gw += '<div>';
			else if (w[k] != breaks) gw += '</div><div>';
		
			while (p[l]) {
		
				if (l != k && w[l] != w[k]) hides += p[l] + '-hide ';
				l++;			
		
			}
		
			gw += '<div class="gridset ' + hides + '"><div class="'+p[k]+'1"><small>'+p[k]+'1</small></div>';
		
			var i = 1;
		
			while (i++ < c[k]) gw += '<div class="'+p[k]+i+'"><small>'+p[k]+i+'</small></div>';
		
			gw += '</div>';
		
			if (k == w.length - 1) gw += '</div>';
		
			breaks = w[k];
		
			k++;
		
		}
		
		gw += '</div></div>';
		
		var newgw = document.createElement('div');
		
		newgw.id = 'gridsetoverlaywrap';
		
		newgw.innerHTML = gw + styles;
		
		b.appendChild(newgw);
		
		gs.width();
		gs.bind(window, 'resize', gs.width);
	
	},
	
	bind : function (t, e, f) {
		
		if (t.attachEvent) t.attachEvent('on' + e, f);
		else t.addEventListener(e, f, false);
	
	},
	
	prevent : function (e) {
	
		if (e.preventDefault) e.preventDefault();
		else event.returnValue = false;
	
	}


};

gs.init();