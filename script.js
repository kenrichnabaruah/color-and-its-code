/* ============================================
     STEP 1: All the colors, grouped by family.
     Each family has 10 shades, from light to dark.
     ============================================ */
  const palette = {
    Gray:   ["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],
    Red:    ["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],
    Pink:   ["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],
    Grape:  ["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],
    Violet: ["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],
    Indigo: ["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],
    Blue:   ["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],
    Cyan:   ["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],
    Teal:   ["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],
    Green:  ["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],
    Lime:   ["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],
    Yellow: ["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f08c00","#e8590c","#e67700"],
    Orange: ["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]
  };

  /* ============================================
     STEP 2: Grab the empty containers from the HTML
     ============================================ */
  const familiesContainer = document.getElementById("families");
  const toast = document.getElementById("toast");

  /* ============================================
     STEP 3: A helper function that shows the
     "Copied!" message for a short moment
     ============================================ */
  function showToast(hexCode) {
    toast.textContent = "Copied " + hexCode;
    toast.classList.add("show");

    setTimeout(function () {
      toast.classList.remove("show");
    }, 1200);
  }

  /* ============================================
     STEP 4: A helper function that copies text
     to the clipboard when a swatch is clicked
     ============================================ */
  function copyToClipboard(hexCode) {
    navigator.clipboard.writeText(hexCode);
    showToast(hexCode);
  }

  /* ============================================
     STEP 5: Loop through every color family and
     build the HTML for it
     ============================================ */
  for (const familyName in palette) {

    const shades = palette[familyName];

    // Create the heading for this family, e.g. "Red"
    const heading = document.createElement("h2");
    heading.textContent = familyName;

    // Create a row to hold the 10 swatches
    const row = document.createElement("div");
    row.className = "swatch-row";

    // Loop through each shade in this family (0 to 9)
    shades.forEach(function (hexCode, index) {

      const box = document.createElement("div");
      box.className = "swatch";
      box.style.backgroundColor = hexCode;
      box.textContent = hexCode;

      // Make dark colors show white text, light colors show dark text
      box.style.color = index > 5 ? "white" : "#333";

      // When clicked, copy the hex code
      box.addEventListener("click", function () {
        copyToClipboard(hexCode);
      });

      row.appendChild(box);
    });

    // Put the heading and row inside a wrapper section
    const section = document.createElement("div");
    section.className = "family";
    section.appendChild(heading);
    section.appendChild(row);

    // Add this whole section to the page
    familiesContainer.appendChild(section);
  }
