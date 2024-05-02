window.onload = function() {
	
	let BodyCount = 0;
	let FinishBool = false;
	let DebounceBool = true;
	
	const HeroSections = [document.getElementById("GilgameshDiv"), document.getElementById("TheseusDiv"), document.getElementById("SigurdDiv"), document.getElementById("YamatoDiv")];
	const Trigger = document.getElementById("Trigger");
	const Combination = document.getElementById("ComparisonDiv");
	const TitleText = document.getElementById("TitleText");

	function SmoothFadeIn(FadeElement, FadeTime) {
		DebounceBool = false;
		var i = 0;
		function OpacitySetter () {
			let Transparency = i / 100;
			FadeElement.style.opacity = Transparency;
			if (i++ < 100) setTimeout(OpacitySetter, FadeTime / 100);
			if (i == 100) {
				DebounceBool = true;
			}
		}
		OpacitySetter();
	}
	
	function RandiRange(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	function SpawnBody() {
		if (FinishBool == false) {
			let RandChoice = RandiRange(0,3);
			let RandChosen = HeroSections[RandChoice];
			
			if (RandChosen.style.opacity == 1) {
				SpawnBody.call();
				return;
			} else if (DebounceBool == false) {
				return;
			} else {
				SmoothFadeIn(RandChosen, 1000);
				RandChosen.style.order = 4 - BodyCount;
				BodyCount += 1;
				if (BodyCount >= 4) {
					FinishBool = true;
					setTimeout(function() {
						Combination.style.order = 0;
						SmoothFadeIn(Combination, 1000);
					}, 2000);
				}
			}
		} else {
			return;
		}
	}
	
	Trigger.onclick = SpawnBody;
}