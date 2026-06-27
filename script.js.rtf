{\rtf1\ansi\ansicpg1252\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const checkboxes = document.querySelectorAll(".task");\
const scoreText = document.getElementById("score");\
\
function updateScore() \{\
  const total = checkboxes.length;\
  let checked = 0;\
\
  checkboxes.forEach(box => \{\
    if (box.checked) checked++;\
  \});\
\
  let score = Math.round((checked / total) * 100);\
  scoreText.textContent = score + "%";\
\
  localStorage.setItem("blueprint-progress", JSON.stringify(\
    Array.from(checkboxes).map(box => box.checked)\
  ));\
\}\
\
function loadProgress() \{\
  const saved = JSON.parse(localStorage.getItem("blueprint-progress"));\
\
  if (saved) \{\
    checkboxes.forEach((box, i) => \{\
      box.checked = saved[i];\
    \});\
  \}\
\
  updateScore();\
\}\
\
checkboxes.forEach(box => \{\
  box.addEventListener("change", updateScore);\
\});\
\
loadProgress();}