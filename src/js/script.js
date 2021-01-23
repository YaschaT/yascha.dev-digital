// hier komt je code
console.log("Welcome to Yascha-dev.digital!");

document.addEventListener('DOMContentLoaded', () => {

  anime({
  targets: 'h1',
  translateX: 60,
  direction: 'alternate',
  loop: true,
  delay: function(el, i, l) {
    return i * 70;
  },
  endDelay: function(el, i, l) {
    return (l - i) * 70;
  }
});


anime({
targets: 'a.morelink',
translateX: -10,
direction: 'alternate',
loop: true,
delay: function(el, i, l) {
  return i * 140;
},
endDelay: function(el, i, l) {
  return (l - i) * 200;
}
});


	anime({
		targets: 'p',
		translateY: [50, 0],
		easing: 'easeOutExpo',
		duration: 1000,
		delay: (el, i) => {
			return 1000 + 100 * i;
		},
		opacity: [0, 1],
	})

	anime({
		targets: 'nav a',
		translateY: [-50, 0],
		easing: 'easeOutExpo',
		duration: 1500,
		delay: (el, i) => {
			return 1500 + 100 * i;
		},
		opacity: [0, 1],
	})


  anime({
    targets: '.wallpaper',
    translatex: [200, 0],
    easing: 'easeOutExpo',
    duration: 500,
    delay: (el, i) => {
      return 1000 + 100 * i;
    },
    opacity: [0, 1],
  })


	anime({
		targets: 'img',
		translateY: [200, 0],
		easing: 'easeOutExpo',
		duration: 2000,
		delay: (el, i) => {
			return 2000 + 100 * i;
		},
		opacity: [0, 1],
	})

})
