let con = document.getElementsByClassName("cardWrapper")[0];

let data = [];

const fetchData = async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let finalRes = await res.json();

    if (finalRes) {
      data.push(finalRes);
      addCards();
    }
  } catch (err) {
    console.log(err);
  }
};

fetchData();

const addCards = () => {
  if (data.length > 0) {
    data[0]?.map((user, i) => {
      let div = document.createElement("div");
      div.classList.add("card");

      let h1 = document.createElement("h1");
      h1.textContent = user.name;

      let h2 = document.createElement("h2");
      h2.textContent = user.email;

      let p = document.createElement("p");
      p.textContent = user.phone;

      div.append(h1, h2, p);
      con.appendChild(div);
    });
  }
};
