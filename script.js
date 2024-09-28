const list = document.querySelector(".list");
const inp = document.querySelector("#inp");
const bottomList = document.querySelector(".bottom-list");

const arr = [
  {
    name: "Giorgi",
    age: 18
  },
  {
    name: "James",
    age: 22
  },
  {
    name: "John",
    age: 30
  },
  {
    name: "Kate",
    age: 55
  },
  {
    name: "Messi",
    age: 29
  },
  {
    name: "Lana",
    age: 32
  },
];



inp.addEventListener("input", () => {
  list.innerHTML = "";

  const inpValue = inp.value;

  const filteredArr = arr.filter((item) => item.name.includes(inpValue));


  filteredArr.forEach((item) => {
    const newElem = document.createElement("li");
    newElem.textContent = item.name;
    list.appendChild(newElem);

    newElem.addEventListener("click", () => {
      const resultElem = document.createElement("li");
      resultElem.textContent = "";
      resultElem.textContent = "age: " + item.age;
      if (inp.value === "") {
        resultElem.style.display = "none";
        //აქ ვეცადე, როცა input-ს გავასუფთავებ ასაკი წაიშალოს, მაგრამ არ გამომივიდა :(
      }
      bottomList.appendChild(resultElem);
    });
  });
});
