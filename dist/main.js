/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("\r\n\r\n\r\ndocument.getElementById('loadBtn').addEventListener('click', function () {\r\n\r\n    const fileInput = document.createElement('input')\r\n    fileInput.type = 'file'\r\n    fileInput.accept = 'text/csv'\r\n\r\n    fileInput.addEventListener('change', function (e) {\r\n        const file = e.target.files[0]\r\n        const reader = new FileReader()\r\n        reader.onload = function (e) {\r\n            const contents = e.target.result\r\n\r\n            const lines = contents.split('\\n')\r\n            const table = document.getElementById('table')\r\n\r\n            table.innerHTML = ''\r\n\r\n            for (let i = 0; i < lines.length; i++) {\r\n                const phrases = lines[i].split(';')\r\n                const row = document.createElement('tr')\r\n\r\n                for (let j = 0; j < phrases.length; j++) {\r\n                    const cell = document.createElement('td')\r\n                    const phrase = phrases[j].trim()\r\n                    const words = phrase.split(' ')\r\n                    console.log(words)\r\n                    for (let k = 0; k < words.length; k++) {\r\n                        const word = words[k]\r\n\r\n                        const span = document.createElement('span')\r\n                        span.textContent = word + ' '\r\n                        span.addEventListener('click', function () {\r\n                            if (this.classList.contains('selected')) {\r\n                                this.classList.remove('selected')\r\n                            } else {\r\n                                this.classList.add('selected')\r\n                            }\r\n                        })\r\n\r\n                        cell.appendChild(span)\r\n                    }\r\n\r\n                    row.appendChild(cell)\r\n                }\r\n\r\n                table.appendChild(row)\r\n            }\r\n        }\r\n\r\n        reader.readAsText(file)\r\n        const saveBtn = document.querySelector('.saveBtn')\r\n        saveBtn.classList.remove('hidden')\r\n    })\r\n\r\n    fileInput.click()\r\n})\r\n\r\nsaveBtn.addEventListener('click', function () {\r\n    const rows = document.querySelectorAll('#table tr')\r\n    let selectedPhrases = []\r\n\r\n    for (let i = 0; i < rows.length; i++) {\r\n        const cells = rows[i].querySelectorAll('td')\r\n        let selectedCellText = []\r\n\r\n        for (let j = 0; j < cells.length; j++) {\r\n            const spans = cells[j].querySelectorAll('span')\r\n            let selectedWordText = []\r\n\r\n            for (let k = 0; k < spans.length; k++) {\r\n                if (spans[k].classList.contains('selected')) {\r\n                    selectedWordText.push(spans[k].textContent.trim())\r\n                }\r\n            }\r\n\r\n            if (selectedWordText.length > 0) {\r\n                selectedCellText.push(selectedWordText.join('|'))\r\n            }\r\n        }\r\n\r\n        if (selectedCellText.length > 0) {\r\n            selectedPhrases.push(selectedCellText.join('|'))\r\n        }\r\n    }\r\n\r\n    let blob = new Blob([selectedPhrases.join('|')], { type: 'text/plain' })\r\n    const link = document.createElement('a')\r\n    link.href = URL.createObjectURL(blob)\r\n    link.download = 'selected_phrases.txt'\r\n    link.click()\r\n})\r\n\n\n//# sourceURL=webpack://kasperky/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;