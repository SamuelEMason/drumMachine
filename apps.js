document.querySelectorAll('.drum').forEach( (button) => {
	button.addEventListener('mousedown', function (e) {
		makeSound(button.id);
	});
});
	
document.addEventListener('keydown', function (e) {
	makeSound(e.key);
	buttonAnimation(e.key, 'rgba(255, 85, 0, 0.827)');
	
});

document.addEventListener('keyup', function (e) {
	buttonAnimation(e.key, 'white');
});



function makeSound(key) {
	let sample = '';
	switch(key) {

		case '1':
			sample = 'samples/Cymatics - Orchid Sample Pack/Drum One Shots/Cymatics - Orchid Crash - Perfect.wav';
			break;
		case '2':
			sample = 'samples/Cymatics - Orchid Sample Pack/Drum One Shots/Cymatics - Orchid Ride - Mysterious.wav';
			break;
		case '3':
			sample = 'samples/Cymatics - Orchid Sample Pack/Drum One Shots/Cymatics - Orchid Percussion - Wet 1 (C).wav';
			break;
		case '4':
			sample = 'samples/Cymatics - Orchid Sample Pack/One Shots/Cymatics - Orchid KEYS Swirl (C).wav';
			break;
		case 'q':
			sample = 'samples/Cymatics - Orchid Sample Pack/Drum One Shots/Cymatics - Orchid Hihat - Closed 3.wav';
			break;
		case 'w':
			sample = 'samples/Cymatics - Orchid Sample Pack/Drum One Shots/Cymatics - Orchid Hihat - Roll 3.wav';
			break;
		case 'e':
			sample = 'samples/Cymatics - Orchid Sample Pack/Drum One Shots/Cymatics - Orchid Hihat - Flam.wav';
			break;
		case 'r':
			sample = 'samples/Cymatics - Orchid Sample Pack/Drum One Shots/Cymatics - Orchid Hihat - Open 2.wav';
			break;
		case 'a':
			sample = 'samples/Cymatics - Orchid Sample Pack/Drum One Shots/Cymatics - Orchid Snare - Lustbug (C).wav';
			break;
		case 's':
			sample = 'samples/Cymatics - Orchid Sample Pack/Drum One Shots/Cymatics - Orchid Snare - Breeze (E).wav';
			break;
		case 'd':
			sample = 'samples/Cymatics - Orchid Sample Pack/Drum One Shots/Cymatics - Orchid Clap - Basic.wav';
			break;
		case 'f':
			sample = 'samples/Cymatics - Orchid Sample Pack/Drum One Shots/Cymatics - Orchid Rimshot - Underwater.wav';
			break;
		case 'z':
			sample = 'samples/Cymatics - Orchid Sample Pack/808s & Basses/Cymatics - Orchid 808 Cyclical (C).wav';
			break;
		case 'x':
			sample = 'samples/Cymatics - Orchid Sample Pack/808s & Basses/Cymatics - Orchid 808 Rum (C).wav';
			break;
		case 'c':
			sample = 'samples/Cymatics - Orchid Sample Pack/Drum One Shots/Cymatics - Orchid Kick - Clean (F).wav';
			break;
		case 'v':
			sample = 'samples/Cymatics - Orchid Sample Pack/Drum One Shots/Cymatics - Orchid Kick - Tight (G).wav';
			break;

		default:
			return;
	}
	if (sample != '') {
		let audio = new Audio(sample);
		audio.play();
	}
}

function buttonAnimation(id, color) {
	document.getElementById(id).style.backgroundColor = color;
}
