"use strict";

document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.mainNav ul li a');

    links.forEach(function (link, index) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var target = this.getAttribute('href');

            // 첫 번째 링크를 제외
            if (target !== '../index.html') {
                var targetElement = document.querySelector(target);
                if (targetElement) {
                    var targetOffset = targetElement.offsetTop - 100;
                    window.scrollTo({
                        top: targetOffset,
                    });
                }
            } else {
                window.location.href = target; 
            }
        });
    });
});
