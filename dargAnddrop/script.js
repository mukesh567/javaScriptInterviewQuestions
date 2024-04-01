let lists = document.getElementsByClassName("list");
let box1 = document.getElementById("box-1");
let box2 = document.getElementById("box-2");

for (list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selectedList = e.target;

    //From box1 to box2
    box2.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    box2.addEventListener("drop", function (e) {
      box2.appendChild(selectedList);
      selectedList = null;
    });

    //From box2 to box1
    box1.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    box1.addEventListener("drop", function (e) {
      box1.appendChild(selectedList);
      selectedList = null;
    });
  });
}
