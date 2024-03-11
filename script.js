// document.addEventListener('DOMContentLoaded', function() {
//     var typingElement = document.getElementById('typing');
//     var textToType = "//Mohamed Abdelmagid = () =>";
//     var typingDelay = 100; // milliseconds
//     var index = 0;

//     function typeLetter() {
//         if (index < textToType.length) {
//             typingElement.textContent += textToType.charAt(index);
//             index++;
//             setTimeout(typeLetter, typingDelay);
//         }
//     }

//     typeLetter(); // Start typing
// });

document.addEventListener("DOMContentLoaded", function () {
  var typingElement = document.getElementById("typing");
  var typingElement2 = document.getElementById("typing2");
  var wrapperElement = document.getElementById("typing-wrapper");
  var portfolioContent = document.getElementById("portfolio-content");
  var portfolioContent2 = document.getElementById("portfolio-content2");
  var closingBracket = document.getElementById("closing-bracket");
  var textToType = "//Mohamed Abdelmagid = () => {";
  var textToType2 = "function frontEnd = () =>";
  var cursorimg = document.getElementById("text_cursor");
  var typingDelay = 90; // milliseconds
  var index = 0;

  // Center the typing-wrapper initially for a smooth start
  wrapperElement.style.position = "absolute";
  wrapperElement.style.top = "50%";
  wrapperElement.style.left = "50%";
  wrapperElement.style.transform = "translate(-50%, -50%)";

  function typeLetter() {
    if (index < textToType.length) {
      typingElement.textContent += textToType.charAt(index);
      index++;

      setTimeout(typeLetter, typingDelay);
    } else {
      // After typing, start the moving effect
      index = 0;
      setTimeout(() => {
        moveTextAndShowContent();
        setTimeout(() => {
          cursorimg.classList.remove("hidden");
          cursorimg.classList.add("show");
        }, 1900);
      }, 500); // Wait a bit before starting
    }
  }

  function typeLetter2() {
    if (index < textToType.length) {
      typingElement2.textContent += textToType2.charAt(index);
      index++;

      setTimeout(typeLetter2, typingDelay);
    } else {
      // After typing, start the moving effect
      index = 0;
      setTimeout(() => {
        setTimeout(() => {
          portfolioContent2.classList.remove("hidden");
          portfolioContent2.classList.add("show");
        }, 0);
      }, 500); // Wait a bit before starting
    }
  }

  function moveTextAndShowContent() {
    // Adjust these styles to move the text to the top left smoothly
    wrapperElement.style.top = "35%";
    wrapperElement.style.left = "35%";
    wrapperElement.style.transform = "translate(0, 0)"; // Reset transform for the movement

    // After moving text, reveal the portfolio content
    setTimeout(() => {
      portfolioContent.classList.remove("hidden");
      portfolioContent.classList.add("show");
      closingBracket.classList.remove("hidden");
      closingBracket.classList.add("show");
    }, 1900);
  }

  var sound = document.getElementById("typewriterSound");
  sound.play().catch((error) => console.error("Sound playback failed", error));
  typeLetter(); // Start typing animation

  setTimeout(() => {
    cursorimg.classList.remove("show");
    cursorimg.classList.add("hidden");
    setTimeout(() => {
      typeLetter2();
    }, 200);
  }, 7000);
});
