(function() {
	$("#myvirtualtour").ipanorama({
		theme: "ipnrm-theme-modern",
		hotSpotSetup: true,
		sceneId: "entrance",
		scenes: {
			entrance: {
				type: "sphere", // specifies the scene type ("box", "sphere", "cylinder")
				image: "assets/images/pano.jpg",
				title: "The entrance to the house",
			},
		}
	});
})();