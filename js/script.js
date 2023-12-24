//글자
document.addEventListener('DOMContentLoaded', function() {
    const textElements = document.querySelectorAll('.animated-text');

    textElements.forEach((textElement, index) => {
        setTimeout(() => {
            textElement.textContent = textElement.getAttribute('data-text');
            textElement.style.opacity = 1;
            textElement.style.transform = 'translateY(0)';
        }, index * 1000);
    });
});


//햄버거

const toggleBtn = document.querySelector('#nav_a');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

//흔들리는 사진
/*!
Swaying photo gallery - scroll event
Created on AUGUST 29, 2023
Copyright (c) 2023 by Wakana Y.K. (https://codepen.io/wakana-k/pen/WNLrWMm)
*/
/*
Related works : 
Portforio design @wakana-k - https://codepen.io/wakana-k/pen/BaxKKvE
Swaying photo gallery - hover event @wakana-k - https://codepen.io/wakana-k/pen/oNJxbPw
*/
"use strict";
(function () {
	window.onload = () => {
		const obj = document.querySelector("#gallery");
		const time = 10000;
		function animStart() {
			if (obj.classList.contains("active") == false) {
				obj.classList.add("active");
				setTimeout(() => {
					animEnd();
				}, time);
			}
		}
		function animEnd() {
			obj.classList.remove("active");
			obj.offsetWidth;
		}
		document.addEventListener("scroll", function () {
			// scroll or scrollend
			animStart();
		});
		window.addEventListener("resize", animStart);
		animStart();
	};
})();


//sidebar 스크립트
function toggleSidebar() {
	var sidebar = document.getElementById("sidebar");
	var main = document.getElementById("main");
	var openBtn = document.getElementById("openBtn");
	var closeBtn = document.getElementById("closeBtn");

	if (sidebar.classList.contains("open")) {
	  sidebar.classList.remove("open");
	  openBtn.style.display = "block";
	  closeBtn.style.display = "none";
	  main.style.marginLeft = "0";
	} else {
	  sidebar.classList.add("open");
	  openBtn.style.display = "none";
	  closeBtn.style.display = "block";
	  main.style.marginLeft = "250px";
	}
}

function closeSidebar() {
	var sidebar = document.getElementById("sidebar");
	var main = document.getElementById("main");
	var openBtn = document.getElementById("openBtn");
	var closeBtn = document.getElementById("closeBtn");

	sidebar.classList.remove("open");
	openBtn.style.display = "block";
	closeBtn.style.display = "none";
	main.style.marginLeft = "0";
}

