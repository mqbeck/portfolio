// Check for saved preference on page load
if(localStorage.getItem('dark_mode') === 'enabled')
{
	setDark();
}

let slideIndex = [1, 1];
let slideId = ["mySlides1", "mySlides2"]
let dotId = ["dot1", "dot2"]
let playId = ["play1", "play2"]
let autoPlayOn = [false, true];

showSlide(slideIndex[0], 0);
showSlide(slideIndex[1], 1);
setAutoPlayButtonState(0);
setAutoPlayButtonState(1);
autoPlay();

// delta is how many slides and direction to move from current slide
function changeSlide(delta, slideShow)
{
	showSlide(slideIndex[slideShow] += delta, slideShow);
}

// sets the current slide to index
function currentSlide(index, slideShow)
{
	showSlide(slideIndex[slideShow] = index, slideShow);
}


function showSlide(index, slideShow)
{
	// these return arrays
	let slides = document.getElementsByClassName(slideId[slideShow]);
	let dots = document.getElementsByClassName(dotId[slideShow]);
	
	if (index > slides.length)
	{
		slideIndex[slideShow] = 1;
	}
	if (index < 1)
	{
		slideIndex[slideShow] = slides.length;
	}
	for (let i = 0; i < slides.length; i++)
	{
		slides[i].style.display = "none";
	}
	for (let j = 0; j < dots.length; j++)
	{
		dots[j].className = dots[j].className.replace(" active", "");
	}
	slides[slideIndex[slideShow] - 1].style.display = "block";
	dots[slideIndex[slideShow] - 1].className += " active";
}

function autoPlay()
{
	if (autoPlayOn[0])
		changeSlide(1, 0)
	if (autoPlayOn[1])
		changeSlide(1, 1)
	
	setTimeout(autoPlay, 4000);
}

function setAutoPlay(slideShow)
{
	autoPlayOn[slideShow] = !autoPlayOn[slideShow];
	setAutoPlayButtonState(slideShow)
}

function setAutoPlayButtonState(slideShow)
{
	// returns an array
	let playIcons = document.getElementsByClassName(playId[slideShow]);
	
	if (autoPlayOn[slideShow])
		playIcons[0].className += " autoPlayOn";
	else
		playIcons[0].className = playIcons[0].className.replace(" autoPlayOn", "");
}

// add and removes the class " responsive" from the topNav element
function addResponsiveClassName()
{
	var topNav = document.getElementById("topNav");

	if (topNav.className === "topNav")
	{
		topNav.className += " responsive";
	}
	else
	{
		topNav.className = "topNav";
	}
}

function toggleDarkMode()
{
	if(localStorage.getItem('dark_mode') !== 'enabled')
	{
		setDark();
	}
	else
	{
		setLight();
	}
}

function setDark()
{
	var root = document.documentElement;
	root.style.setProperty("--text_color_top", "#66d176");
	root.style.setProperty("--bg_color_top", "black");
	
	root.style.setProperty("--bg_body", "#27282b");
	root.style.setProperty("--text_body", "#5ce65e");
	
	root.style.setProperty("--text_color_nav", "#66d176");
	root.style.setProperty("--bg_color_nav", "black");
	
	root.style.setProperty("--text_color_nav_highlight", "black");
	root.style.setProperty("--bg_color_nav_highlight", "#dddddd");
	
	root.style.setProperty("--bg_color_nav_main", "#66d176");
	root.style.setProperty("--text_color_nav_main", "black");
	
	root.style.setProperty("--bg_color_cardback", "#0E0707");
	root.style.setProperty("--text_color_cardback", "#5ce65e");
	
	root.style.setProperty("--image_border", "#cccccc");
	root.style.setProperty("--image_border_hover", "#777777");
	
	root.style.setProperty("--bg_border", "grey");
	
	root.style.setProperty("--prev_next_hover", "rgba(0,0,0,0.8)");
	root.style.setProperty("--prev_next", "yellow");
	root.style.setProperty("--text_slidShow", "#f2f2f2");
	root.style.setProperty("--slideShow_hover", "#eb2315");
	root.style.setProperty("--autoPlay_active", "#eb2315");
	root.style.setProperty("--bg_slideShow_text", "rgba(0, 0, 0, 0.75)");
	
	root.style.setProperty("--tab_border", "black");
	root.style.setProperty("--tab_border_focus_visible", "#ffd1fa");
	root.style.setProperty("--bg_tab", "black");
	root.style.setProperty("--text_tab", "#66d176");
	root.style.setProperty("--bg_tab_hover", "#27282b");
	root.style.setProperty("--text_tab_hover", "#7EDF8D");
	root.style.setProperty("--bg_tab_active", "#0E0707");
	root.style.setProperty("--bg_tab_focus", "#1f0907");
	root.style.setProperty("--text_tab_focus", "#67C975");
	
	root.style.setProperty("--a_link", "#21cbed");
	root.style.setProperty("--a_visited", "#3da8d1");
	root.style.setProperty("--a_hover", "#10c4a6");
	root.style.setProperty("--a_active", "#7a9e9f");
	
	
	localStorage.setItem('dark_mode', 'enabled');
}

function setLight()
{
	var root = document.documentElement;
	root.style.setProperty("--text_color_top", "");
	root.style.setProperty("--bg_color_top", "");
	
	root.style.setProperty("--bg_body", "");
	root.style.setProperty("--text_body", "");
	
	root.style.setProperty("--text_color_nav", "");
	root.style.setProperty("--bg_color_nav", "");
	
	root.style.setProperty("--text_color_nav_highlight", "");
	root.style.setProperty("--bg_color_nav_highlight", "");
	
	root.style.setProperty("--bg_color_nav_main", "");
	root.style.setProperty("--text_color_nav_main", "");
	
	root.style.setProperty("--bg_color_cardback", "");
	root.style.setProperty("--text_color_cardback", "");
	
	root.style.setProperty("--image_border", "");
	root.style.setProperty("--image_border_hover", "");
	
	root.style.setProperty("--bg_border", "");
	
	root.style.setProperty("--prev_next_hover", "");
	root.style.setProperty("--prev_next", "");
	root.style.setProperty("--text_slidShow", "");
	root.style.setProperty("--slideShow_hover", "");
	root.style.setProperty("--autoPlay_active", "");
	root.style.setProperty("--bg_slideShow_text", "");
	
	root.style.setProperty("--tab_border", "");
	root.style.setProperty("--tab_border_focus_visible", "");
	root.style.setProperty("--bg_tab", "");
	root.style.setProperty("--text_tab", "");
	root.style.setProperty("--bg_tab_hover", "");
	root.style.setProperty("--text_tab_hover", "");
	root.style.setProperty("--bg_tab_active", "");
	root.style.setProperty("--bg_tab_focus", "");
	root.style.setProperty("--text_tab_focus", "");
	
	root.style.setProperty("--a_link", "");
	root.style.setProperty("--a_visited", "");
	root.style.setProperty("--a_hover", "");
	root.style.setProperty("--a_active", "");
	
	localStorage.setItem('dark_mode', null);	
}

function openTab(event, tabName)
{
  // Get all elements with class="tabcontent" and hide them
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++)
  {
		tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  let tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++)
  {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();