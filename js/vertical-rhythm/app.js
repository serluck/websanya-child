/*!
 * Establishing baseline for images, iframes & twitter embeds.
 * Uses jquery.keeptherhythm.js plugin.
 * Source: http://www.gayadesign.com/diy/keep-the-rhythm-vertical-rhythm-on-objects-having-dynamic-heights/
 *
 * package   Websanya Child Theme
 * author    Alexander Goncharov <http://websanya.ru/>
 * copyright Copyright (c) 2015, Alexander Goncharov
 * license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

(function($) {
	setTimeout(function() {
		if ($(window).width() >= 768) {
			$("img").keepTheRhythm({ baseLine: 14 });
			$("iframe").keepTheRhythm({ baseLine: 14, spacing: "margin" });
		} else {
			$("img").keepTheRhythm({ baseLine: 11 });
			$("iframe").keepTheRhythm({ baseLine: 11, spacing: "margin" });
		}
	}, 500);
	$("iframe").parent('p').addClass("iframe-container");
	setTimeout(function() {
		if ($(window).width() >= 768) {
			$("div[data-twttr-id]").keepTheRhythm({ baseLine: 14 });
			$(".twitter-tweet").keepTheRhythm({ baseLine: 14 });
			$("#disqus_thread").keepTheRhythm({ baseLine: 14 });
		} else {
			$("div[data-twttr-id]").keepTheRhythm({ baseLine: 11 });
			$(".twitter-tweet").keepTheRhythm({ baseLine: 11 });
			$("#disqus_thread").keepTheRhythm({ baseLine: 11 });
		}
	}, 2500);
	setTimeout(function() {
		$("iframe.twitter-tweet-rendered + p").remove();
	}, 1750);
})(jQuery);