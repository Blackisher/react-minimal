import React from 'react'
import AppTitle from './AppTitle'
import {render} from "react-dom";

const MyApp = () => (
  <>
    <h1>Minimal React blackisher</h1>
    <p>Bundle size: 57 bytes (first 40,7 KB), Load time of the bundle: 48 ms (first 211 ms), Last commit SHA1: 0a647f01730022190f9588c241a93900569203a5</p>
    <AppTitle />
    <h2>GenerateArray for 20 ==> {generateArray(20)}</h2>
  </>
)

const generateArray = (n) => {
    return "[" + (Array.from(Array(n).keys(), (v) => v+1)) +"]";
}

export default MyApp