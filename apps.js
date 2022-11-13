document.querySelectorAll('.drum').forEach( (button) => {
	button.addEventListener('mousedown', function (e) {
		makeSound(button.id);
	});
});
	
document.addEventListener('keydown', function (e) {
	makeSound(e.key);
	padColorChange(e.key, 'rgba(255, 85, 0, 0.827)');
});

document.addEventListener('keyup', function (e) {
	padColorChange(e.key, 'white');
});



function makeSound(key) {
	let sample = '';
	switch(key) {

		case '1':
			sample = 'samples/musicradar-drum-samples/Assorted Hits/Hi Hats/Zildjian K Hats/KHats Open-01.wav';
			break;
		case '2':
			sample = 'samples/musicradar-drum-samples/Assorted Hits/Hi Hats/Zildjian K Hats/KHats Open-05.wav';
			break;
		case '3':
			sample = 'samples/musicradar-drum-samples/Assorted Hits/Hi Hats/Zildjian K Hats/KHats Open-04.wav';
			break;
		case '4':
			sample = 'samples/musicradar-drum-samples/Assorted Hits/Hi Hats/Zildjian K Hats/KHats Open-02.wav';
			break;
		case 'q':
			sample = 'samples/musicradar-drum-samples/Assorted Hits/Hi Hats/Zildjian K Hats/KHats Clsd-02.wav';
			break;
		case 'w':
			sample = 'samples/musicradar-drum-samples/Assorted Hits/Hi Hats/Zildjian K Hats/KHats Clsd-03.wav';
			break;
		case 'e':
			sample = 'samples/musicradar-drum-samples/Assorted Hits/Hi Hats/Zildjian K Hats/KHats Clsd-05.wav';
			break;
		case 'r':
			sample = 'samples/musicradar-drum-samples/Assorted Hits/Hi Hats/Zildjian K Hats/KHats Clsd-07.wav';
			break;
		case 'a':
			sample = 'samples/musicradar-drum-samples/Assorted Hits/Snares/Sonor Force 3000/CYCdh_SonFlam-01.wav';
			break;
		case 's':
			sample = 'samples/musicradar-drum-samples/Assorted Hits/Snares/Sonor Force 3000/CYCdh_SonFlam-03.wav';
			break;
		case 'd':
			sample = 'samples/musicradar-drum-samples/Assorted Hits/Snares/Sonor Force 3000/CYCdh_Sonrim-01.wav';
			break;
		case 'f':
			sample = 'samples/musicradar-drum-samples/Assorted Hits/Snares/Sonor Force 3000/CYCdh_SonsdSt-05.wav';
			break;
		case 'z':
			sample = 'samples/musicradar-drum-samples/Assorted Hits/Kicks/Acoustic/CYCdh_AcouKick-01.wav';
			break;
		case 'x':
			sample = 'samples/musicradar-drum-samples/Assorted Hits/Kicks/Acoustic/CYCdh_AcouKick-08.wav';
			break;
		case 'c':
			sample = 'samples/musicradar-drum-samples/Assorted Hits/Kicks/Acoustic/CYCdh_AcouKick-12.wav';
			break;
		case 'v':
			sample = 'samples/musicradar-drum-samples/Assorted Hits/Kicks/Acoustic/CYCdh_AcouKick-20.wav';
			break;

		default:
			return;
	}
	if (sample != '') {
		let audio = new Audio(sample);
		audio.play();
	}
}

function padColorChange(id, color) {
	document.getElementById(id).style.backgroundColor = color;
}
