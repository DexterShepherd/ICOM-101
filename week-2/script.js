$(document).ready(function() {
  const welcome = $('#welcome')
  welcome.html(welcome.text().replace(/./g, '<span>$&</span>'))

  anime({
    targets: '#welcome span',
    translateY: [
      { value: -20, duration: 300 },
      { value: 20, duration: 600 },
      { value: 0, duration: 300 },
    ],
    rotateX: -360,
    easing: 'easeInOutQuad',
    delay: (_, i) => i * 100,
    loop: true
  })

  Reveal.initialize({
    slideNumber: true,
    history: true
  })
})


