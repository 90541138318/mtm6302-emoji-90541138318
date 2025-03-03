// Array of emoji objects with their decimal or hexadecimal references
const emojis = [
    { char: "😀", code: "128512" }, // Grinning Face
    { char: "🤩", code: "129321" }, // Star-Struck
    { char: "🥳", code: "129327" }, // Party Face
    { char: "🐶", code: "128054" }, // Dog Face
    { char: "🐱", code: "128049" }, // Cat Face
    { char: "🍕", code: "127829" }, // Pizza
    { char: "🍔", code: "127828" }, // Hamburger
    { char: "🚀", code: "128640" }, // Rocket
    { char: "🎉", code: "127881" }, // Party Popper
    { char: "❤️", code: "10084" },  // Red Heart
    { char: "🌟", code: "127775" }, // Glowing Star
    { char: "🌈", code: "127752" }  // Rainbow
  ];
  
  // Get the gallery section
  const gallery = document.getElementById("emoji-gallery");
  
  // Loop through the emojis array and add each emoji to the gallery
  emojis.forEach(emoji => {
    const emojiItem = document.createElement("div");
    emojiItem.classList.add("emoji-item");
  
    const emojiChar = document.createElement("div");
    emojiChar.classList.add("emoji");
    emojiChar.textContent = emoji.char;
  
    const emojiCode = document.createElement("div");
    emojiCode.classList.add("code");
    emojiCode.textContent = `Code: ${emoji.code}`;
  
    emojiItem.appendChild(emojiChar);
    emojiItem.appendChild(emojiCode);
    gallery.appendChild(emojiItem);
  });