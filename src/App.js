import { useState, useEffect } from "react";

function App() {
  const arr = [20, 10, 100, 30, 15, 5];
  const [newArray, setNewArray] = useState();
  const text = "AKU SUKA MAKAN NASI PADANG";

  const handleSort = (arr, type) => {
    if (type == "asc") {
      setNewArray(arr.sort((a, b) => a - b));
    } else if (type == "desc") {
      setNewArray(arr.sort((a, b) => b - a));
    }
  };

  const addNumber = () => {
    arr.push(180);
    console.log(arr);
  };

  const deleteNumber = (num) => {
    const index = arr.indexOf(num);
    if (index > -1) {
      arr.splice(index, 1);
    }

    console.log(arr);
  };

  const loopingText = (str) => {
    const textArray = str.split(" ");
    let newTxt = [];
    for (let i = 0; i <= textArray.length; i++) {
      if (i === 0) {
        newTxt[i] = textArray[0];
      } else if (i > 0) {
        newTxt[i] = newTxt[i - 1] + " " + textArray[i];
      }
    }
    console.log(textArray);
    console.log(newTxt);
  };

  return (
    <div className="App">
      <h1>
        {newArray != undefined
          ? newArray.map((x) => {
              return <p> {x} </p>;
            })
          : arr.map((x) => {
              return <p> {x} </p>;
            })}
      </h1>
      <button onClick={() => handleSort(arr, "asc")}>Sort By ASC</button>
      <button onClick={() => handleSort(arr, "desc")}>Sort By DESC</button>
      <button onClick={() => addNumber()}>add 180 to array</button>
      <button onClick={() => deleteNumber(30)}>delete 30 from array</button>
      <button onClick={() => loopingText(text)}>Looping Text Algorithm</button>
    </div>
  );
}

export default App;
