const Patches = require('Patches');
const Reactive = require('Reactive');
const Scene = require('Scene');

Promise.all([
	Scene.root.findFirst('nullObject0'),
   ]).then(function(results){
	const nullObject0 = results[0];
	//Patches.inputs.setPoint("nullpos", nullObject0.transform.position);
	// to get world position, thx https://rbkavin.in/
	Patches.inputs.setPoint("nullpos", nullObject0.worldTransform.position);
})
