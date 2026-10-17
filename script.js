function prikazi(zavihek) {
	document.body.classList.toggle('vrtci', zavihek === 'vrtci');
	document.title =
		zavihek === 'vrtci'
			? 'VRTCI – Prijava – eAsistent'
			: 'eAsistent – Celovita informacijska rešitev za vzgojno-izobraževalna okolja';
	var logo = document.querySelector('.logo img');
	logo.src = zavihek === 'vrtci' ? 'img/logoRumen.webp' : 'img/logo.webp';
	document.querySelectorAll('.zavihki button').forEach(function (gumb) {
		gumb.classList.toggle('aktiven', gumb.dataset.zavihek === zavihek);
	});
}

document.querySelectorAll('[data-zavihek]').forEach(function (element) {
	element.addEventListener('click', function (e) {
		e.preventDefault();
		prikazi(element.dataset.zavihek);
	});
});

document.querySelectorAll('.prijava form').forEach(function (obrazec) {
	obrazec.addEventListener('submit', function (e) {
		e.preventDefault();
		Swal.fire({
			icon: 'success',
			title: 'Prijava uspešna!',
			text: 'Uspešno ste se prijavili.',
			confirmButtonText: 'V redu',
		});
	});
});
