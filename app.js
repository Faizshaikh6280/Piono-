const keys = document.querySelectorAll("a");

keys.forEach((key, i) => {
  key.addEventListener("click", function () {
    const audio = new Audio(`audio/key-${i + 1}.mp3`);
    audio.play();
  });
});
