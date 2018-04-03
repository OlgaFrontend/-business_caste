//header
(function() {
	function scrollPage() {
		var head = document.getElementById('head');
		var wrap = document.getElementById('wrap');
		var windowPage = window.pageYOffset;
		if (windowPage) {
			
			wrap.style.position = 'relative';
			head.style.width = '100%';
			head.style.position = 'fixed';
			head.style.top = '0px';
		} else {
			
			wrap.style.position = 'relative';
			head.style.position = 'relative';
			
		}
	}
	window.addEventListener("scroll", scrollPage);
})();

//CountDown Timer
function timerFunc (day, hour, minute, second) {
	function countDown() {

		var time = new Date();

		var eventDate = new Date(2018, 05, 31);

		var currentTime = time.getTime();

		var eventTime = eventDate.getTime();

		var restTime = eventTime - currentTime;

		var s = Math.floor(restTime / 1000);
		var m = Math.floor(s / 60);
		var h = Math.floor(m / 60);
		var d = (Math.floor(h / 24)) - 30;

		h%=24;
		m%=60;
		s%=60;

		d = d < 10 ? '0' + d : d;
		h = h < 10 ? '0' + h : h;
		m = m < 10 ? '0' + m : m;
		s = s < 10 ? '0' + s : s;

		day.textContent = d;
		hour.textContent = h;
		minute.textContent = m;
		second.textContent = s;
	};

    countDown();
	setInterval(countDown, 1000);
};

var day = document.getElementById('day');
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

timerFunc (day, hour, minute, second);

var day2 = document.getElementById('day2');
var hour2 = document.getElementById('hour2');
var minute2 = document.getElementById('minute2');
var second2 = document.getElementById('second2');

timerFunc (day2, hour2, minute2, second2);

var day3 = document.getElementById('day3');
var hour3 = document.getElementById('hour3');
var minute3 = document.getElementById('minute3');
var second3 = document.getElementById('second3');

timerFunc (day3, hour3, minute3, second3);

// 	Accordion 

(function(){
	var acc = document.getElementsByClassName('accordion');

	for (var i = 0, max = acc.length; i < max; i++) {
		
		function toggle() {
			this.classList.toggle('active');
			this.nextElementSibling.classList.toggle('show');
		};
		
		acc[i].addEventListener('click', toggle);
	}
})();

// Slider 
(function() {

var carousels = document.getElementsByClassName('carousels');

[].forEach.call(carousels, function (c) {
    var next = c.getElementsByClassName('carousels__next')[0],
        prev = c.getElementsByClassName('carousels__prev')[0],
        bubblesContainer = c.getElementsByClassName('carousels__bubbles')[0],
        inner = c.getElementsByClassName('carousels__inner')[0],
        imgs = inner.getElementsByClassName('carousels__img'),
        currentImageIndex = 0,
        width = 100,
        bubbles = [];

    var _loop = function _loop(i) {
        var b = document.createElement('span');
        b.classList.add('carousels__bubble');
        bubblesContainer.appendChild(b);
        bubbles.push(b);

        b.addEventListener('click', function () {
            currentImageIndex = i;
            switchImg();
        });
    };

    for (var i = 0; i < imgs.length; i++) {
        _loop(i);
    }

    function switchImg() {
        inner.style.left = -width * currentImageIndex + '%';

        bubbles.forEach(function (b, i) {
            if (i === currentImageIndex) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });
    }

    next.addEventListener('click', function () {
        currentImageIndex++;

        if (currentImageIndex >= imgs.length) {
            currentImageIndex = 0;
        }

        switchImg();
    });

    prev.addEventListener('click', function () {
        currentImageIndex--;

        if (currentImageIndex < 0) {
            currentImageIndex = imgs.length - 1;
        }

        switchImg();
    });

    switchImg();
});

})();

// google map 

function initMap() {

	var mapOptions = {
	    center: new google.maps.LatLng(50.506576, 30.606209),
	    zoom: 12,
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	var markerOptions = {
    	position: new google.maps.LatLng(50.506576, 30.606209)
	};

	var marker = new google.maps.Marker(markerOptions);
	marker.setMap(map);

	var infoWindowOptions = {
    	content: 'Конференц-зал "Тати"'
	};

	var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
	google.maps.event.addListener(marker,'click',function(e){
  		infoWindow.open(map, marker);
  	});
}

//form of registration

var regForm = document.getElementById('reg-form');
var hideLayout = document.getElementById('hide-layout');
var btnJs = document.getElementsByClassName('btn-js');
var btnCloser = document.querySelector('.reg-form__closer');

function addEvent(btnJs) {
	for (var i = 0, max = btnJs.length; i < max; i++) {
		btnJs[i].addEventListener('click', getForm);
	}

	function getForm() {
		regForm.classList.add('show');
		hideLayout.classList.add('show');
	}
}

addEvent(btnJs);

btnCloser.addEventListener('click', hideForm);

function hideForm() {
	regForm.classList.remove('show');
	hideLayout.classList.remove('show');
	regForm.classList.add('hide');
	hideLayout.classList.add('hide');
}

