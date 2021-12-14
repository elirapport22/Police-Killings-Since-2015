function changeMe1() {
  // document.getElementById('currentSketchImage').src = "/wireframe1copy1blueborder.png";
  document.getElementById('currentSketchImage').outerHTML = "<div class='col-12 col-md-7 order-1' id='currentSketchImage'><img id='currentSketchImage' src='wireframe1copy1blueborder.png' style='--hl: 0; transform: scale(.8); filter: brightness(1.2); object-fit: contain;'></div>";
  document.getElementById('currentSketchText').outerHTML =
    "<div class='p-15' id='currentSketchText'><p style='text-align: center; color:#d6d6d6;'>Understandability:<br><br><b> Modeling</b>: It is easy to build a conceptual model of the system because it is based on a calendar, something a lot of people already have a strong mental map of.<br><br><b>Simplicity</b>: The system is easy to understand and interact with because it is based on a modern calendar.<br><br><b>Consistency</b>: Signifiers are used consistently across each month, with the help of the legend. Minimizes the knowledge the user needs to learn because they most likely already understand how a calendar works. The legend is the only thing the user needs to learn about.<br><br><b>Achievability</b>: The wireframe seems achievable given our time constraints. All we would have to consider would be the dates, which simplifies the process, and the calendar design is pretty straightforward and could be reused across different months and years.<br><br>Three additional perspectives not under the understandability umbrella:<br><br><b>Accessibility</b>: The calendar graphic is not accessible for blind individuals -- there is not a good way to turn the calendar visualization into an audible narration. The deaf would be able to see our infographic. While not disabled, the illiterate or anyone else who may not speak English perhaps would have a hard time reading the legend, but would be able to get the gist of the calendar due to the recognizability of a calendar diagram and the dates’ numbers which are constant across all languages.<br><br><b>Iterability</b>: Our design could not just mark days on which a fatal shooting occured, but mark more things like race or whether the victim was fleeing. Doing this would not require an overhauling of the system.’The effects of adding things like that to the calendar would be minimal. There would only be some new signifiers in the legend. Our users would not have to relearn the system.<br><br><b>Perceptibility</b>: Users would be able to perceive the current state of the system easily because the system is a calendar. Our system would have to be adjusted to accommodate colorblind users because color is used for the legend.</div>";

  document.getElementById('wf2').src="wireframe2copy1.png";
  document.getElementById('wf3').src="wireframe3copy1.png";
  document.getElementById('wf4').src="wireframe4copy1.png";
  document.getElementById('wf1').src='wireframe1copy1blueborder.png';
}

function changeMe2() {
  // document.getElementById('currentSketchImage').src = "/wireframe2copy1blueborder.png";
  document.getElementById('currentSketchImage').outerHTML = "<div class='col-12 col-md-7 order-1' id='currentSketchImage'><img id='currentSketchImage' src='wireframe2copy1blueborder.png' style='--hl: 0; transform: scale(.8); filter: brightness(1.2); object-fit: contain;'></div>";
  document.getElementById('currentSketchText').outerHTML =
    "<div class='p-15' id='currentSketchText'><p style='text-align: center; color:#d6d6d6;'>Understandability:<br><br><b> Modeling</b>: It is not difficult to build a conceptual model of this system because a lot of people have interacted with bar graphs before.<br><br><b> Simplicity</b>: The system is color-coded and easy to understand because it conveys data in a very visually clear manner. There are also signifiers to help with comprehension.<br><br><b> Consistency</b>: Signifiers are consistently used in the system. The user most likely has already been exposed to a bar graph. Minimal information for the user to learn.<br><br><b> Achievability</b>:The wireframe is very achievable. A bar graph is one of the simplest and most practical ways to display data. Given our time constraints, we can implement this system. The wireframe is very achievable. A bar graph is one of the simplest and most practical ways to display data. Given our time constraints, we can implement this system.<br><br>Three additional perspectives not under the understandability umbrella:<br><br><b> Mappings</b>: The mappings are clear and natural. Users will be able to intuitively connect the percentage benchmarks to the bars.<br><br><b> Political Intent</b>: The system prompts the user to examine the conclusions that the data reflects. If there is one racial group that is disproportionately killed in police shootings, it naturally begs the question why. That aspect of the design is intentional.<br><br><b> Privacy</b>: Our system does not rely on user information and uses publicly available data. There are no data concerns.<br><br><b> Privacy</b>: Our system does not rely on user information and uses publicly available data. There are no data concerns.</div>";

  document.getElementById('wf1').src="wireframe1copy1.png";
  document.getElementById('wf3').src="wireframe3copy1.png";
  document.getElementById('wf4').src="wireframe4copy1.png";
  document.getElementById('wf2').src='wireframe2copy1blueborder.png';
}

function changeMe3() {
  // document.getElementById('currentSketchImage').src = "/wireframe3copy1blueborder.png";
  document.getElementById('currentSketchImage').outerHTML = "<div class='col-12 col-md-7 order-1' id='currentSketchImage'><img id='currentSketchImage' src='wireframe3copy1blueborder.png' style='--hl: 0; transform: scale(.8); filter: brightness(1.2); object-fit: contain;'></div>";
  document.getElementById('currentSketchText').outerHTML =
    "<div class='p-15' id='currentSketchText'><p style='text-align: center; color:#d6d6d6;'>Understandability:<br><br><b> Modeling</b>: The system is based on a map of the United States, so the conceptual model should be very easy to build.<br><br><b>Structure</b>:The system groups data points by state and is very structured since it relies on that map of the US. Each state will have its own set of information that will be available by clicking on the specific state.<br><br><b>Visibility</b>: All important elements of the system are included in the design. There may be some difficulty constructing an accurate model of the system image without some signifiers. Some of the affordances of the system(like the hovering) may not be intuitive.<br><br><b>Achievability</b>: This wireframe is achievable, but it may not be plausible for us to achieve every single affordance in this wireframe, given our time constraints.<br><br>Three additional perspectives not under the understandability umbrella:<br><br><b>Accessibility</b>: This infographic would not be accessible to the blind, but those who can see would be able to gauge what is going on from the map. However, if a person does not speak English or can not read, they may not be able to discern what the ‘popup’ info tab means when you hover over a point in the map. The deaf would be able to use this system.<br><br><b>Signifier</b>: An individual may not know that they need to hover over a point in order to get the information about that individual -- there is no signifier for that feature. Additionally, there is no signifier indicating that you need to click to zoom in on a state.<br><br><b>Simplicity</b>: there is a lot of information thrown at a user and the cluster of dots might make it overwhelming.<br><br><b>Feedback</b>: feedback needed for when you select a time range and the data updates -- could just have text momentarily appear stating “time period updated.”</div>";

  document.getElementById('wf1').src="wireframe1copy1.png";
  document.getElementById('wf2').src="wireframe2copy1.png";
  document.getElementById('wf4').src="wireframe4copy1.png";
  document.getElementById('wf3').src='wireframe3copy1blueborder.png';
}

function changeMe4() {
  // document.getElementById('currentSketchImage').src = "/wireframe4copy1blueborder.png";
  document.getElementById('currentSketchImage').outerHTML = "<div class='col-12 col-md-7 order-1' id='currentSketchImage'><img id='currentSketchImage' src='wireframe4copy1blueborder.png' style='--hl: 0; transform: scale(.8); filter: brightness(1.2); object-fit: contain;'></div>";

  document.getElementById('currentSketchText').outerHTML =
    "<div class='p-15' id='currentSketchText'><p style='text-align: center; color:#d6d6d6;'>Understandability:<br><br><b>Modeling</b>: It is not difficult to build a conceptual model of this system because a lot of people have interacted with bar graphs before.<br><br><b>Simplicility</b>: The system is color-coded and easy to understand because it conveys data in a very visually clear manner. There are also signifiers to help with comprehension -- the different colors and bar headers.<br><br><b>Consistency</b>: Signifiers are consistently used in the system. The user most likely has already been exposed to a bar graph. Minimal information for the user to learn.<br><br><b>Achievability</b>: The wireframe is very achievable. A bar graph is one of the simplest and most practical ways to display data. Given our time constraints, we can implement this system.<br><br<br><br>Three additional perspectives not under the understandability umbrella:<br><br><b>Mappings</b>: The mappings are clear and natural. Users will be able to intuitively connect the percentage benchmarks to the bars because the percentages are within the bars that are above each category’s text name.<br><br><b>Political Intent</b>: The system prompts the user to examine the conclusions that the data reflects. If there is one racial group that is disproportionately killed in police shootings, it naturally begs the question why. That aspect of the design is intentional. Additionally, because the filled bar graphs out of the 100% graph all the way to the right tend to cast the killed individual in an innocent light.<br><br><b>Privacy</b>: Our system does not rely on user information and uses publicly available data. There are no data concerns.</div>";

  document.getElementById('wf1').src="wireframe1copy1.png";
  document.getElementById('wf2').src="wireframe2copy1.png";
  document.getElementById('wf3').src="wireframe3copy1.png";
  document.getElementById('wf4').src='wireframe4copy1blueborder.png';
}


function pipe1(){
  document.getElementById('pipelineimage').src="Pipeline1.jpeg";
  document.getElementById("pipelinetext").outerHTML = "<p id='pipelinetext' class='text-red p-15' style='font-size: 145%;'>-To start the project in earnest, we have to first process the data. This includes formatting and storing it in an easily accessible manner, like JSON./p>";
}
function pipe2(){
  document.getElementById('pipelineimage').src="Pipeline2.jpeg";
  document.getElementById("pipelinetext").outerHTML = "<p id='pipelinetext' class='text-red p-15' style='font-size: 145%;'>-To start the project in earnest, we have to first process the data. This includes formatting and storing it in an easily accessible manner, like JSON.</p>";
}
function pipe3(){
  document.getElementById('pipelineimage').src="Pipeline3.jpeg";
  document.getElementById("pipelinetext").outerHTML = "<p id='pipelinetext' class='text-red p-15' style='font-size: 145%;'>- Then we will use that data to create the ‘Walking Skeleton’ needed to fulfill Milestone 4 by using the D3 and Plotly library.</p>";
}
function pipe4(){
  document.getElementById('pipelineimage').src="Pipeline4.jpeg";
  document.getElementById("pipelinetext").outerHTML = "<p id='pipelinetext' class='text-red p-15' style='font-size: 145%;'> - After that, we can polish our graphics and ‘flesh out’ the skeleton with the infographics generated with Plotly by embedding those infographics into our html pages.</p>";
}
function pipe5(){
  document.getElementById('pipelineimage').src="Pipeline5.jpeg";
  document.getElementById("pipelinetext").outerHTML = "<p id='pipelinetext' class='text-red p-15' style='font-size: 145%;'> - After that, we can polish our graphics and ‘flesh out’ the skeleton with the infographics generated with Plotly by embedding those infographics into our html pages.</p>";
}
function pipe6(){
  document.getElementById('pipelineimage').src="Pipeline6.jpeg";
  document.getElementById("pipelinetext").outerHTML = "<p id='pipelinetext' class='text-red p-15' style='font-size: 145%;'> - After that, we can polish our graphics and ‘flesh out’ the skeleton with the infographics generated with Plotly by embedding those infographics into our html pages.</p>";
}
function pipe7(){
  document.getElementById('pipelineimage').src="Pipeline7.jpeg";
  document.getElementById("pipelinetext").outerHTML = "<p id='pipelinetext' class='text-red p-15' style='font-size: 145%;'>-Then, we revise those pages and refine the website one more time.</p>";
}
function pipe8(){
  document.getElementById('pipelineimage').src="Pipeline8.jpeg";
  document.getElementById("pipelinetext").outerHTML = "<p id='pipelinetext' class='text-red p-15' style='font-size: 145%;'>-Then, we revise those pages and refine the website one more time.</p>";
}
function macromap(){
  document.getElementById('macrotext').outerHTML="<p id='macrotext' class='text-red p-15' style='font-size: 145%;''>We think wireframe three takes more advantage of the data we are offered when comparing it to wireframe one. Wireframe one only focuses on the dates of those police shootings, whereas wireframe three has the potential to show that in addition to data like race, location, and what the victim was doing when they were killed.</p>";
  document.getElementById('timeslider').src="selecttimerange.png";
  document.getElementById('usoverall').src="usoverall.png";
  document.getElementById('themap').src="mapblueborder.png";

  }
function macroselecttimerange(){
  document.getElementById('macrotext').outerHTML="<p id='macrotext' class='text-red p-15' style='font-size: 145%;''>We think wireframe three takes more advantage of the data we are offered when comparing it to wireframe one. Wireframe one only focuses on the dates of those police shootings, whereas wireframe three has the potential to show that in addition to data like race, location, and what the victim was doing when they were killed.</p>";
  document.getElementById('usoverall').src="usoverall.png";
  document.getElementById('themap').src="map.png";
  document.getElementById('timeslider').src="selecttimerangeblueborder.png";
}

function macrousoverall(){
  document.getElementById('macrotext').outerHTML="<p id='macrotext' class='text-red p-15' style='font-size: 145%;''>We think wireframe three takes more advantage of the data we are offered when comparing it to wireframe one. Wireframe one only focuses on the dates of those police shootings, whereas wireframe three has the potential to show that in addition to data like race, location, and what the victim was doing when they were killed.</p>";
  document.getElementById('themap').src="map.png";
  document.getElementById('timeslider').src="selecttimerange.png";
  document.getElementById('usoverall').src="usoverallblueborder.png";
}

function microbarG(){
  document.getElementById('microtext').outerHTML="<p id='microtext' class='text-red p-15' style='font-size: 145%;''>We are taking the idea of comparing the different races from wireframe two, and placing them into one bar graph. We thought that it was important to get a sense of the racial breakdown of this population, but we are revamping it to do it in a more efficient manner. We are taking the extra bar graphs from wireframe four because it gives insight as to the other aspects of our data beyond race which provide a more developed and compelling understanding of police killings.</p>";

  document.getElementById('timesliderM').src="selecttimerange.png";
  document.getElementById('macrobarG').src="macrobarG.png";
  document.getElementById('overall').src="usoverall.png";

  document.getElementById('microbarG').src="microbargraphblueborder.png";
}

function macrobarG(){
  document.getElementById('microtext').outerHTML="<p id='microtext' class='text-red p-15' style='font-size: 145%;''>We are taking the idea of comparing the different races from wireframe two, and placing them into one bar graph. We thought that it was important to get a sense of the racial breakdown of this population, but we are revamping it to do it in a more efficient manner. We are taking the extra bar graphs from wireframe four because it gives insight as to the other aspects of our data beyond race which provide a more developed and compelling understanding of police killings.</p>";

  document.getElementById('timesliderM').src="selecttimerange.png";
  document.getElementById('overall').src="usoverall.png";
  document.getElementById('microbarG').src="microbargraph.png";
  document.getElementById('macrobarG').src="macrobarGblueborder.png";

}

function microoverall(){
  document.getElementById('microtext').outerHTML="<p id='microtext' class='text-red p-15' style='font-size: 145%;''>We are taking the idea of comparing the different races from wireframe two, and placing them into one bar graph. We thought that it was important to get a sense of the racial breakdown of this population, but we are revamping it to do it in a more efficient manner. We are taking the extra bar graphs from wireframe four because it gives insight as to the other aspects of our data beyond race which provide a more developed and compelling understanding of police killings.</p>";

  document.getElementById('timesliderM').src="selecttimerange.png";
  document.getElementById('macrobarG').src="macrobarG.png";
  document.getElementById('microbarG').src="microbargraph.png";
  document.getElementById('overall').src="usoverallblueborder.png";
}

function timesliderM(){
  document.getElementById('microtext').outerHTML="<p id='microtext' class='text-red p-15' style='font-size: 145%;''>We are taking the idea of comparing the different races from wireframe two, and placing them into one bar graph. We thought that it was important to get a sense of the racial breakdown of this population, but we are revamping it to do it in a more efficient manner. We are taking the extra bar graphs from wireframe four because it gives insight as to the other aspects of our data beyond race which provide a more developed and compelling understanding of police killings.</p>";

  document.getElementById('macrobarG').src="macrobarG.png";
  document.getElementById('overall').src="usoverall.png";
  document.getElementById('microbarG').src="microbargraph.png";
  document.getElementById('timesliderM').src="selecttimerangedarkblueborder.png";
}
