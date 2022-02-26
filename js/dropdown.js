$(".folder").click(function () {

	 $folder = $(this);
	 $content = $folder.next();

	 $content.slideToggle(500, function () {

	 });

});
