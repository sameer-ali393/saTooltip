(function($){
	$.fn.saTooltip = function(o){
		var d = {
			animation : 'bounce',
		}
		o = $.extend(d,o);
		function i(){
			var sa = {
				self : $(this)
			}
			c = 'sa_'+o.animation+'_animation';
			var h = '<div class="saTooltip"> <div class="saTooltip_text"></div></div>';
			if ( $('.saTooltip').length==0 ) {
				$('body').append(h);
			}
			sa.self.attr('saTitle',sa.self.attr('title')).removeAttr('title');
			sa.saTooltip = $('.saTooltip');
			sa.saTooltip_text = $('.saTooltip_text',sa.saTooltip);
			sa.self.mouseover(function(){
				sa.saTooltip_text.text($(this).attr('saTitle'));
				if ( $(this).attr('saTitle').length==0 )
				 	return false;
				var t = sa.self.offset().top-sa.saTooltip.outerHeight()-10;
				var l = (sa.self.offset().left)+(sa.self.outerWidth()/2)-(sa.saTooltip.outerWidth()/2);
				sa.saTooltip.css({left : l,top : t}).show();
				sa.saTooltip_text.addClass(c);
			})
			sa.self.mouseout( function(){
				sa.saTooltip.hide();
				sa.saTooltip_text.removeClass(c);
			});
		}
		this.each(i);
	};
}(jQuery));
