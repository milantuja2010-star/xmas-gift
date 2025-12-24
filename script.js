document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const startBtn = document.getElementById("startBtn");
  const main = document.getElementById("main");

  const music = document.getElementById("music");
  const musicBtn = document.getElementById("musicBtn");

  const openGiftBtn = document.getElementById("openGift");
  const giftMsg = document.getElementById("giftMsg");

  let isPlaying = false;

  // 🚀 Start Experience
  startBtn.addEventListener("click", () => {
    intro.style.display = "none";
    main.classList.remove("hidden");
  });

  // 🎵 Play / Pause Music
  musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
      music.play()
        .then(() => {
          musicBtn.textContent = "⏸ Pause Music";
          isPlaying = true;
        })
        .catch(() => {
          alert("Click Play Music again 🎵");
        });
    } else {
      music.pause();
      musicBtn.textContent = "🎵 Play Music";
      isPlaying = false;
    }
  });

  // 🎁 Open Gift
  openGiftBtn.addEventListener("click", (e) => {
  giftMsg.classList.remove("hidden");

  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.textContent = "✨";

    sparkle.style.left = e.clientX + Math.random() * 100 - 50 + "px";
    sparkle.style.top = e.clientY + Math.random() * 100 - 50 + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
  }

  });
  // ❄️ Snow Effect
  const snowContainer = document.getElementById("snow");

  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.textContent = "❄";

    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = (3 + Math.random() * 5) + "s";
    snowflake.style.fontSize = (10 + Math.random() * 14) + "px";

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
      snowflake.remove();
    }, 8000);
  }

  setInterval(createSnowflake, 200);

});
