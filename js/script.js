// Copyright (c) 2020 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
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

  if (counter1 > 0 && counter2 > 0) {
    while (answer >= counter2) {
      addedNumber = addedNumber + 1;
      answer = answer - counter2;
    }
  }

  document.getElementById("answer").innerHTML = 
      counter1 + " ÷ " + counter2 + " = " + addedNumber;
}
