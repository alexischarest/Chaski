document.querySelectorAll('.video-load').forEach(button => {
  button.addEventListener('click', () => {
    const player = button.closest('.video-player');
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${player.dataset.video}?autoplay=1`;
    frame.title = button.getAttribute('aria-label').replace('Load', 'Play');
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    player.replaceChildren(frame);
    frame.focus();
  });
});
