window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});
window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2200,
	reset: true
})


sr.reveal('.Hero-text, .billing-left, .cardDeal-right', {delay:350,origin:'left'})
sr.reveal('.Hero-img , .cardDeal-left, .features', {delay:350,origin:'right'})

sr.reveal('.Stats,.billing-right', {delay:350,origin:'bottom'})
sr.reveal('.footer', {delay:350,origin:'slide-right'})