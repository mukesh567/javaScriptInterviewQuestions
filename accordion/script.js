let heading_section = document.querySelectorAll(".first-section");

for (let i = 0; i < heading_section.length; i++) {
  //Add click event on every heading section
  heading_section[i].addEventListener("click", () => {
    let next_node = heading_section[i].nextElementSibling;

    if (next_node.classList.contains("visible")) {
      heading_section[i].children[1].textContent = "+";
      next_node.classList.remove("visible");
    } else {
      heading_section[i].children[1].textContent = "-";
      next_node.classList.add("visible");
    }

    //It is responsible for only one open at a time
    for (let j = 0; j < heading_section.length; j++) {
      if (i != j) {
        let next_node = heading_section[j].nextElementSibling;
        heading_section[j].children[1].textContent = "+";
        next_node.classList.remove("visible");
      }
    }
  });
}
