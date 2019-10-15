import React from 'react'
import AppTitle from './AppTitle'
import {render} from "react-dom";

const MyApp = () => (
  <>
    <h1>Minimal React blackisher</h1>
    <p>Bundle size: 57 bytes (first 40,7 KB), Load time of the bundle: 48 ms (first 211 ms), Last commit SHA1: 0a647f01730022190f9588c241a93900569203a5</p>
    <AppTitle />
    <h2>GenerateArray for 20 ==> {generateArray(20)}</h2>
    <h2>GenerateRandomArray for 5 ==> {generateRandomArray(5)}</h2>
    <h2>Task 4.Declare const containing array: [2, 56, 23, 88, 17, 4]. Print all array elements that are larger than 15.</h2>
    <p>{printLargerThen(myArrayForTask4,15)}</p>
    <h2>Task 5.Declare const containing array: [2, 5, 8, 10]. Create method that returns an array with the square root values of each number.</h2>
    <p>{printSquareRoots(myArrayForTask5).toString()}</p>

  </>
)

const generateArray = (n) => {
    return "[" + (Array.from(Array(n).keys(), (v) => v+1)) +"]";
}

const generateRandomArray = (n) => {
    return "[" + (Array.from(Array(n).keys(), (v) => Math.floor(1+Math.random()*25))) +"]";
}

const myArrayForTask4 = [2, 56, 23, 88, 17, 4]

const printLargerThen = (A,n) => {
    return (Array.from(A, (v) => v > n ? v + " " : ""));
}

const myArrayForTask5 = [2, 5, 8, 10]

const printSquareRoots = (A) => {
    return Array.from(A, (v) => Math.sqrt(v));
}

export default MyApp