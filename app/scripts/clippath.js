(function($){$.fn.ClipPath=function(options){var settings=$.extend({path:null},options),getUniqueID=function(){return Math.random().toString(36).substring(7)},hasSupportToPolygon=function(){var testEl=$('<div></div>')[0],propValue='polygon(0 0, 0 0, 0 0, 0 0)';testEl.style.clipPath=propValue;return testEl.style.clipPath===propValue}();return this.each(function(){var $this=$(this),path=$this.data('clip')||settings.path,element=$this[0],clipPathID=getUniqueID();if(path){if(typeof element.style.webkitClipPath!=='undefined'){element.style.webkitClipPath='polygon('+path+')'}else if(hasSupportToPolygon){element.style.clipPath='polygon('+path+')'}else{$('body').append('<svg width="0" height="0"><clipPath id="'+clipPathID+'"><polygon points="'+path.replace(/px|%|em/g,'')+'"></polygon></clipPath></svg>');setTimeout(function(){element.style.clipPath='url(#'+clipPathID+')'},0)}}else{console.error('Clip path not defined.')}})}})(jQuery);