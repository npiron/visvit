(function() {

	pannellum.viewer('myvirtualtour', {   
		"default": {
			"firstScene": "circle",
			"author": "Nicolas PIRON",
			"sceneFadeDuration": 1000
		},
		"mapTour" : true,
		"compass" : true,
		"scenes": {
			"circle": {
				"title": "Moulin du Four",
				"hfov": 110,
				"pitch": -3,
				"yaw": 117,
				"type": "equirectangular",
				"panorama": "assets/images/moulin-1.jpg",
				"hotSpots": [
				{
					"pitch": -2.1,
					"yaw": 132.9,
					"type": "scene",
					"text": "Deusieme photo",
					"sceneId": "house"
				}
				]
			},

			"house": {
				"title": "Moulin 2",
				"hfov": 110,
				"yaw": 5,
				"type": "equirectangular",
				"panorama": "assets/images/moulin-2.jpg",
				"hotSpots": [
				{
					"pitch": -0.6,
					"yaw": 37.1,
					"type": "scene",
					"text": "Mason Circle",
					"sceneId": "circle",
					"targetYaw": -23,
					"targetPitch": 2
				}
				]
			}
		}});

})();