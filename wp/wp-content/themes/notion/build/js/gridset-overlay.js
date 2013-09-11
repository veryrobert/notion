// Gridset Overlay JS

gs = {

	init: function () {
		
		if (window.location.href.match('gridset=show')) gs.show();
	
		gs.bind(document, 'keydown', function (e) { 
		
			if (!e) var e = window.event;
		
			if(e.metaKey || e.ctrlKey) {
				
				switch (e.which || e.keyCode) {
					case 71:
					
						var gw = document.querySelectorAll('.gridsetoverlaywrap, #gridsetoverlaystyles, #gridscreenwidthwrap');
					
						if (gw.length == 0) gs.show();
						else { window.location.href = window.location.href.replace('?gridset=show', '') }
						
						gs.prevent(e);
						break;
						
				}
				
			}
		
		
		});
	
	},
	
	width: function () {
		
		var swv = document.getElementById('gridscreenwidthval');
		if (swv) swv.innerHTML = window.innerWidth + 'px';
		
	},

	show: function () {
	
		var b = document.getElementsByTagName('body')[0],
				gridareas = document.querySelectorAll('[class*=-showgrid]'),
				areacount = gridareas.length,
				wrapper = document.querySelectorAll('.wrapper'),
			
				styles = '.gridsetoverlaywrap{padding:0 !important;display:block;position:absolute;top:0;left:0;width:100%;height:100%;z-index:10000;pointer-events:none;}.gridsetnoareas .gridsetoverlaywrap{position:fixed;}.gridwrap{padding:0 !important;display:block;margin:0 auto;width:90%;height:100%;font-family:Helvetica, Arial, sans-serif !important;}.gridoverlay{padding:0 !important;position:relative;height:100%;overflow:hidden !important;background:none !important;}.gridoverlay .gridset{padding:0 !important;position:absolute;width:100%;height:100%;top:0;left:0;opacity:0.8; display:block;}.gridoverlay .gridset div{padding:0;text-align:left;font-size:10px !important;border:1px solid #FFD800 !important;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;}.gridoverlay .gridset > div{border:none !important;height:100%;position:absolute;top:0;left:0;width:100%;}.gridoverlay div small{width:100%;display:block;text-align:center;font-weight:400 !important;letter-spacing: 1px !important;padding-top:0 !important;text-transform:none !important;height:22px !important;line-height:22px !important;text-style:normal !important;border-bottom:1px solid #FFD800 !important;color:#333 !important;background-color:#FFF79F !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(2){padding-top:23px !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(2) small{border-bottom:1px dashed #FFD800 !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(2) > div{border:1px dashed #FFD800 !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(3){padding-top:45px !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(3) small{border-bottom:1px dotted #FFD800 !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(3) > div{border:1px dotted #FFD800 !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(4){padding-top:67px !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(4) small{border-bottom:1px double #FFD800 !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(4) > div{border:1px double #FFD800 !important;}.gridsetoverlaywrap .noshow{display:none;}#gridscreenwidthwrap{margin:0 !important;padding:0 !important;display:none;width:100%;position:fixed !important;z-index:10000 !important;bottom:0 !important;left:0 !important;height:30px !important;opacity:0.95;border-top:1px solid #FFD800 !important;color:#333;background-color:#FFF79F !important;font-family:Helvetica, Arial, sans-serif !important;}#gridscreenwidth{margin:0 !important;display:block;width:100% !important;max-width:none !important;text-align:center !important;font-size:12px;line-height:1;padding-top:8px !important;}#gridscreenwidth strong{text-transform:none;}',
				
				newstyles = document.createElement('style'),
				newwidth = document.createElement('div'),
				head = document.getElementsByTagName('head'),
				newfavicon = document.createElement('link'),
				newgsstyles = document.createElement('link');
		
		newstyles.id = 'gridsetoverlaystyles';
		newstyles.innerHTML = styles;
		newstyles.type = 'text/css';
		
		newwidth.id = 'gridscreenwidthwrap';
		newwidth.innerHTML = '<p id="gridscreenwidth">Screen width: <strong id="gridscreenwidthval"></strong></p>';
		
		b.appendChild(newstyles);
		b.appendChild(newwidth);
		
		var newwidthdisplay = (newwidth.currentStyle) ? newwidth.currentStyle.display : getComputedStyle(newwidth, null).display;
		
		newfavicon.rel = "shortcut icon";
		newfavicon.id = "gridsetfavicon";
		newfavicon.href = "http://dev.gridsetapp.com/app/img/favicon.ico";
		
		head[0].appendChild(newfavicon);
		
		if (newwidthdisplay != 'block') {
		
			newgsstyles.rel = "stylesheet";
			newgsstyles.id = "gridsetstyles";
			newgsstyles.href = "https://get.gridsetapp.com/19989/";
			head[0].appendChild(newgsstyles);
		
		}
		
		if (areacount) {
			
			var j = areacount;
			
			while (j-- > 0) {
			
				var area = gridareas[j];
			
				gs.buildgrid(area, j, areacount);
				
				if (window.getComputedStyle(area,null).getPropertyValue("position") == 'static') area.style.position = 'relative';
				
			}
			
		}
		else {
			
			if (!b.className.match('gridsetnoareas')) b.className += ' gridsetnoareas';
			
			gs.buildgrid(b, j, areacount);
		
		}
		
		gs.width();
		gs.bind(window, 'resize', gs.width);
	
	},
	
	buildgrid: function (area, j, showgrid) {
		
		var set = JSON.parse('{"id":"19989","name":"Notion 2","widths":{"1600":{"width":1600,"grids":{"l":{"name":"Large desktop","prefix":"l","width":1600,"columns":{"l1":{"name":"l1","unit":"%","percent":4.91666666,"px":78.67},"l2":{"name":"l2","unit":"%","percent":4.91666666,"px":78.67},"l3":{"name":"l3","unit":"%","percent":4.91666666,"px":78.67},"l4":{"name":"l4","unit":"%","percent":4.91666666,"px":78.67},"l5":{"name":"l5","unit":"%","percent":4.91666666,"px":78.67},"l6":{"name":"l6","unit":"%","percent":4.91666666,"px":78.67},"l7":{"name":"l7","unit":"%","percent":4.91666666,"px":78.67},"l8":{"name":"l8","unit":"%","percent":4.91666666,"px":78.67},"l9":{"name":"l9","unit":"%","percent":4.91666666,"px":78.67},"l10":{"name":"l10","unit":"%","percent":4.91666666,"px":78.67},"l11":{"name":"l11","unit":"%","percent":4.91666666,"px":78.67},"l12":{"name":"l12","unit":"%","percent":4.91666666,"px":78.67},"l13":{"name":"l13","unit":"%","percent":4.91666666,"px":78.67},"l14":{"name":"l14","unit":"%","percent":4.91666666,"px":78.67},"l15":{"name":"l15","unit":"%","percent":4.91666666,"px":78.67}},"gutter":{"unit":"px","px":30,"percent":1.875},"ratio":{"name":"even","value":1}}}},"1280":{"width":1280,"grids":{"d":{"name":"Desktop","prefix":"d","width":1280,"columns":{"d1":{"name":"d1","unit":"%","percent":5.20833333,"px":66.67},"d2":{"name":"d2","unit":"%","percent":5.20833333,"px":66.67},"d3":{"name":"d3","unit":"%","percent":5.20833333,"px":66.67},"d4":{"name":"d4","unit":"%","percent":5.20833333,"px":66.67},"d5":{"name":"d5","unit":"%","percent":5.20833333,"px":66.67},"d6":{"name":"d6","unit":"%","percent":5.20833333,"px":66.67},"d7":{"name":"d7","unit":"%","percent":5.20833333,"px":66.67},"d8":{"name":"d8","unit":"%","percent":5.20833333,"px":66.67},"d9":{"name":"d9","unit":"%","percent":5.20833333,"px":66.67},"d10":{"name":"d10","unit":"%","percent":5.20833333,"px":66.67},"d11":{"name":"d11","unit":"%","percent":5.20833333,"px":66.67},"d12":{"name":"d12","unit":"%","percent":5.20833333,"px":66.67},"d13":{"name":"d13","unit":"%","percent":5.20833333,"px":66.67},"d14":{"name":"d14","unit":"%","percent":5.20833333,"px":66.67},"d15":{"name":"d15","unit":"%","percent":5.20833333,"px":66.67}},"gutter":{"unit":"px","px":20,"percent":1.5625},"ratio":{"name":"even","value":1}}}},"940":{"width":940,"grids":{"s":{"name":"Small Desktop","prefix":"s","width":940,"columns":{"s1":{"name":"s1","unit":"%","percent":4.67730496,"px":43.97},"s2":{"name":"s2","unit":"%","percent":4.67730496,"px":43.97},"s3":{"name":"s3","unit":"%","percent":4.67730496,"px":43.97},"s4":{"name":"s4","unit":"%","percent":4.67730496,"px":43.97},"s5":{"name":"s5","unit":"%","percent":4.67730496,"px":43.97},"s6":{"name":"s6","unit":"%","percent":4.67730496,"px":43.97},"s7":{"name":"s7","unit":"%","percent":4.67730496,"px":43.97},"s8":{"name":"s8","unit":"%","percent":4.67730496,"px":43.97},"s9":{"name":"s9","unit":"%","percent":4.67730496,"px":43.97},"s10":{"name":"s10","unit":"%","percent":4.67730496,"px":43.97},"s11":{"name":"s11","unit":"%","percent":4.67730496,"px":43.97},"s12":{"name":"s12","unit":"%","percent":4.67730496,"px":43.97},"s13":{"name":"s13","unit":"%","percent":4.67730496,"px":43.97},"s14":{"name":"s14","unit":"%","percent":4.67730496,"px":43.97},"s15":{"name":"s15","unit":"%","percent":4.67730496,"px":43.97}},"gutter":{"unit":"px","px":20,"percent":2.12765957},"ratio":{"name":"even","value":1}}}},"768":{"width":768,"grids":{"t":{"name":"Tablet","prefix":"t","width":768,"columns":{"t1":{"name":"t1","unit":"%","percent":5.94075521,"px":45.63},"t2":{"name":"t2","unit":"%","percent":5.94075521,"px":45.63},"t3":{"name":"t3","unit":"%","percent":5.94075521,"px":45.63},"t4":{"name":"t4","unit":"%","percent":5.94075521,"px":45.63},"t5":{"name":"t5","unit":"%","percent":5.94075521,"px":45.63},"t6":{"name":"t6","unit":"%","percent":5.94075521,"px":45.63},"t7":{"name":"t7","unit":"%","percent":5.94075521,"px":45.63},"t8":{"name":"t8","unit":"%","percent":5.94075521,"px":45.63},"t9":{"name":"t9","unit":"%","percent":5.94075521,"px":45.62},"t10":{"name":"t10","unit":"%","percent":5.9407552,"px":45.62},"t11":{"name":"t11","unit":"%","percent":5.9407552,"px":45.62},"t12":{"name":"t12","unit":"%","percent":5.94075519,"px":45.62}},"gutter":{"unit":"px","px":20,"percent":2.60416667},"ratio":{"name":"even","value":1}}}},"320":{"width":320,"grids":{"m":{"name":"Mobile","prefix":"m","width":320,"columns":{"m1":{"name":"m1","unit":"%","percent":99.84375,"px":319.5}},"gutter":{"unit":"px","px":20,"percent":6.25},"ratio":{"name":"even","value":1}}}}},"prefixes":{"index":["l","d","s","t","m"],"1600":["l"],"1280":["d"],"940":["s"],"768":["t"],"320":["m"]}}'),
		
				gridwrap = document.createElement('div'),
				gridinner = (showgrid) ? '<div class="gridwrap"><div class="gridoverlay">' : '<div class="gridwrap"><div class="gridoverlay wrapper">',
				
				awidth = area.clientWidth,
				apadleft = (parseFloat(gs.getstyle(area, 'padding-left')) / awidth) * 100,
				apadright = (parseFloat(gs.getstyle(area, 'padding-right')) / awidth) * 100;
		
		if (showgrid) gridwrap.className = 'gridsetoverlaywrap';
		else gridwrap.className = 'gridsetoverlaywrap';
		
		for (w in set.widths) {
			
			var width = set.widths[w],
					hides = '';
			
			for (p in set.prefixes) {
				
				if (p != w && p != 'index') hides += set.prefixes[p][0] + "-hide ";
				
			}
			
			gridinner += '<div class="gridset ' + hides + '">';
			
			for (j in width.grids) {
			
				var grid = width.grids[j],
						showreg = new RegExp('(^| )' + grid.prefix + '-showgrid( |$)');
				
				if (!showgrid || area.className.match(showreg)) {
				
					gridinner += '<div style="padding-left:' + apadleft + '%;padding-right:' + apadright + '%;">';
					
					for (k in grid.columns) {
						
						var col = grid.columns[k];
						
						gridinner += '<div class="' + col.name + '"><small>' + col.name + '</small></div>';
					
					}
					
					gridinner += '</div>';
				
				}
			}
			
			gridinner += '</div>';
		
		}
		
		gridinner += '</div></div>';
		
		gridwrap.innerHTML = gridinner;
		
		area.appendChild(gridwrap);
		
	},
	
	bind : function (t, e, f) {
		
		if (t.attachEvent) t.attachEvent('on' + e, f);
		else t.addEventListener(e, f, false);
	
	},
	
	prevent : function (e) {
	
		if (e.preventDefault) e.preventDefault();
		else event.returnValue = false;
	
	},
	
	getstyle : function (t, p){
	
	 if (t.currentStyle) return t.currentStyle[p];
	 else if (document.defaultView && document.defaultView.getComputedStyle) return document.defaultView.getComputedStyle(t, "").getPropertyValue(p);
	 else return t.style[p];
	 
	}


};

gs.init();