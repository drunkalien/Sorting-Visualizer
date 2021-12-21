import { useEffect, useRef, useState } from "react";
import "./App.css";

import Bar from "./components/Bar";

import selectionSortAnimations from "./algorithms/selectionSort";
import insertionSortAnimations from "./algorithms/insertionSort";
import bubbleSortAnimations from "./algorithms/bubbleSort";

function App() {
  const [arr, setArr] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const containerRef = useRef(null);
  const DELAY = 50;

  useEffect(generateRandomArray, []);
  useEffect(() => {
    if (isSorted) {
      animateSorted();
    }
  }, [isSorted]);

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function generateRandomArray() {
    const tmpArr = [];
    for (let i = 0; i < 25; i++) {
      tmpArr.push(generateRandomNumber(0, 100));
    }
    setArr(tmpArr);
    setIsSorted(false);
  }

  function selectionSort() {
    const animations = selectionSortAnimations(arr);
    animate(animations);
  }

  function insertionSort() {
    const animations = insertionSortAnimations(arr);
    animate(animations);
  }

  function bubbleSort() {
    const animations = bubbleSortAnimations(arr);
    animate(animations);
  }

  function animate(animations) {
    setIsSorting(true);
    const newArr = animations.map((arr) => arr);

    let counter = 0;
    let interval;
    interval = setInterval(() => {
      if (counter === newArr.length - 1) {
        clearInterval(interval);
        setIsSorted(true);
      }

      if (isSorted) return;

      const [arr, i, j] = newArr[counter];

      if (counter !== newArr.length - 1) {
        animateSelection(i, j);
      }

      setArr(arr);
      counter++;
    }, DELAY);
    setIsSorting(false);
  }

  function animateSelection(i, j) {
    const bars = containerRef.current.children[1];
    const barStyleRed = bars.children[j].style;
    const barStyleGreen = bars.children[i].style;
    setTimeout(() => {
      barStyleRed.backgroundColor = "red";
      barStyleGreen.backgroundColor = "green";
    }, DELAY / 2);
    setTimeout(() => {
      barStyleRed.backgroundColor = "";
      barStyleGreen.backgroundColor = "";
    }, DELAY);
  }

  function animateSorted() {
    const bars = containerRef.current.children[1];
    for (let bar of bars.children) {
      setTimeout(() => {
        bar.backgroundColor = "green";
      }, DELAY / 2);
    }
  }

  return (
    <div className="container" ref={containerRef}>
      <div>
        <button className="button" onClick={bubbleSort}>
          Bubble Sort
        </button>
        <button className="button" onClick={selectionSort}>
          Selection Sort
        </button>
        <button className="button" onClick={insertionSort}>
          Insertion Sort
        </button>
        <button
          className="button arr-btn"
          onClick={() => {
            if (!isSorting) {
              generateRandomArray();
            }
          }}
        >
          Generate new array
        </button>
      </div>
      <Bar arr={arr} />
    </div>
  );
}

export default App;
