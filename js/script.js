// Copyright (c) 2020 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-08-JS/sw.js", {
    scope: "/ICS2O-Unit-5-08-JS/",
  })
}

;("use strict")
/**
 * This function calculates area of a parrallelogram.
 */
/**
 * Input
 */
function myButtonClicked() {
  const counter1 = parseInt(document.getElementById("counter1").value);
  const counter2 = parseInt(document.getElementById("counter2").value);
  var addedNumber = 0;
  var answer = counter1;
  var remainder = 0;

  if (counter1 > 0 && counter2 > 0) {
    while (answer >= counter2) {
      addedNumber = addedNumber + 1;
      answer = answer - counter2;
    }
  }
    if (answer == 0) {
    remainder = 0;
  } else if (answer != 0) {
    remainder = answer;
  }
    
  document.getElementById("answer").innerHTML = 
      counter1 + " ÷ " + counter2 + " = " + addedNumber + " The remainder is " + remainder;
}
