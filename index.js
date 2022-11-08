function Reset() {
  document.getElementById("operation").innerHTML = "";
  document.getElementById("result").innerHTML = "";

}

function display(value) {
  let res = document.getElementById("result").innerHTML;

  if (res != "") {
    Reset();
    document.getElementById("operation").innerHTML += value;
  } else {
    document.getElementById("operation").innerHTML += value;
  }
}

function calculate() {
  let val1 = document.getElementById("operation").innerHTML;
  let evaluation = eval(val1);
  document.getElementById("result").innerHTML = evaluation;
}



function Del() {
  let display = document.getElementById("operation");
  let res = document.getElementById("result").innerHTML;
  display.innerHTML = display.innerHTML.slice(0, -1)

  if (res != "") {
    Reset();
  }

}


function Theme1() {
  let theme = document.getElementById('themePart');
  theme.innerHTML = `
  <div class="gh" id="themePart">
              <p class="nums"> 1 &nbsp; 2 &nbsp;  3</p>
                <h5 class="left"> theme
                    <div class="span1">
                    <span class="dot" id="dot1" onclick="Theme1()"></span>
                    <span class="disactive" id="dot2" onclick="Theme2()"></span>
                    <span class="disactive" id="dot3" onclick="Theme3()"></span>
            </div>
                    </span>
                </h5>
            </div>
  `
  let dot1 = document.getElementById('dot1').classList;
  let dot2 = document.getElementById('dot2').classList;
  let dot3 = document.getElementById('dot3').classList;

  dot1.add('dot')
  dot2.add('emptydot')
  dot3.add('emptydot')
  dot2.remove('disactive')
  dot3.remove('disactive')

  document.body.style.backgroundColor = "#3b4664";
  document.getElementById("num7").style.backgroundColor = "#e9e3dc";
  document.getElementById("num7").style.color = "#000";


  document.getElementById("num8").style.backgroundColor = "#e9e3dc";
  document.getElementById("num8").style.color = "#000";

  document.getElementById("num9").style.backgroundColor = "#e9e3dc";
  document.getElementById("num9").style.color = "#000";

  document.getElementById("num4").style.backgroundColor = "#e9e3dc";
  document.getElementById("num4").style.color = "#000";

  document.getElementById("num5").style.backgroundColor = "#e9e3dc";
  document.getElementById("num5").style.color = "#000";

  document.getElementById("num6").style.backgroundColor = "#e9e3dc";
  document.getElementById("num6").style.color = "#000";


  document.getElementById("add").style.backgroundColor = "#e9e3dc";
  document.getElementById("add").style.color = "#000";

  document.getElementById("num1").style.backgroundColor = "#e9e3dc";
  document.getElementById("num1").style.color = "#000";


  document.getElementById("num2").style.backgroundColor = "#e9e3dc";
  document.getElementById("num2").style.color = "#000";

  document.getElementById("num3").style.backgroundColor = "#e9e3dc";
  document.getElementById("num3").style.color = "#000";

  document.getElementById("minus").style.backgroundColor = "#e9e3dc";
  document.getElementById("minus").style.color = "#000";

  document.getElementById("dott").style.backgroundColor = "#e9e3dc";
  document.getElementById("dott").style.color = "#000";

  document.getElementById("num0").style.backgroundColor = "#e9e3dc";
  document.getElementById("num0").style.color = "#000";


  document.getElementById("mult").style.backgroundColor = "#e9e3dc";
  document.getElementById("mult").style.color = "#000";

  document.getElementById("division").style.backgroundColor = "#e9e3dc";
  document.getElementById("division").style.color = "#000";
  document.getElementById("screen").style.backgroundColor = "#191f30";
  document.getElementById("operation").style.color = "#efefef";
  document.getElementById("result").style.color = "#efefef";
  document.getElementById("buttonsDiv").style.backgroundColor = "#252d44";
  document.getElementById("Del").style.backgroundColor = "#657498";
  document.getElementById("Clear").style.backgroundColor = "#657498";
  document.getElementById("topPart").style.color = "white";
  document.getElementById("calcWord").style.color = "white";
  document.getElementById("switch").style.backgroundColor = "#262d42";



}


function Theme2() {

  let theme = document.getElementById('themePart');
  theme.innerHTML = `
  <div class="gh" id="themePart">
                <p class="nums"> 1 &nbsp; 2 &nbsp;  3</p>
                <h5 class="left"> theme
                    <div class="span1">
                    <span class="dot" id="dot1" onclick="Theme1()"></span>
                    <span  id="dot2" onclick="Theme2()"></span>
                    <span  id="dot3" onclick="Theme3()"></span>
            </div>
                    </span>
                </h5>
            </div>
  `

  let dot1 = document.getElementById('dot1').classList;
  let dot2 = document.getElementById('dot2').classList;
  let dot3 = document.getElementById('dot3').classList;

  dot2.add('dot')
  dot1.add('emptydot')
  dot3.add('emptydot')
  dot3.remove('disactive')

  document.body.style.backgroundColor = "#e7e7e7";

  document.getElementById("num7").style.backgroundColor = "#e9e3dc";
  document.getElementById("num7").style.color = "#000";


  document.getElementById("num8").style.backgroundColor = "#e9e3dc";
  document.getElementById("num8").style.color = "#000";

  document.getElementById("num9").style.backgroundColor = "#e9e3dc";
  document.getElementById("num9").style.color = "#000";

  document.getElementById("num4").style.backgroundColor = "#e9e3dc";
  document.getElementById("num4").style.color = "#000";

  document.getElementById("num5").style.backgroundColor = "#e9e3dc";
  document.getElementById("num5").style.color = "#000";

  document.getElementById("num6").style.backgroundColor = "#e9e3dc";
  document.getElementById("num6").style.color = "#000";


  document.getElementById("add").style.backgroundColor = "#e9e3dc";
  document.getElementById("add").style.color = "#000";

  document.getElementById("num1").style.backgroundColor = "#e9e3dc";
  document.getElementById("num1").style.color = "#000";


  document.getElementById("num2").style.backgroundColor = "#e9e3dc";
  document.getElementById("num2").style.color = "#000";

  document.getElementById("num3").style.backgroundColor = "#e9e3dc";
  document.getElementById("num3").style.color = "#000";

  document.getElementById("minus").style.backgroundColor = "#e9e3dc";
  document.getElementById("minus").style.color = "#000";

  document.getElementById("dott").style.backgroundColor = "#e9e3dc";
  document.getElementById("dott").style.color = "#000";

  document.getElementById("num0").style.backgroundColor = "#e9e3dc";
  document.getElementById("num0").style.color = "#000";


  document.getElementById("mult").style.backgroundColor = "#e9e3dc";
  document.getElementById("mult").style.color = "#000";

  document.getElementById("division").style.backgroundColor = "#e9e3dc";
  document.getElementById("division").style.color = "#000";

  document.getElementById("screen").style.backgroundColor = "#efefef";
  document.getElementById("operation").style.color = "#383a30";
  document.getElementById("result").style.color = "#383a30";
  document.getElementById("buttonsDiv").style.backgroundColor = "#d3cdcc";
  document.getElementById("Del").style.backgroundColor = "#3a8087";
  document.getElementById("Clear").style.backgroundColor = "#3a8087";
  document.getElementById("topPart").style.color = "#383a30";
  document.getElementById("calcWord").style.color = "#383a30";
  document.getElementById("switch").style.backgroundColor = "#d3cdcc";


}

function Theme3() {
  let theme = document.getElementById('themePart');
  theme.innerHTML = `
  <div class="gh" id="themePart">
                <p class="nums"> 1 &nbsp; 2 &nbsp;  3</p>
                <h5 class="left"> theme
                    <div class="span1">
                    <span class="dot" id="dot1" onclick="Theme1()"></span>
                    <span id="dot2" onclick="Theme2()"></span>
                    <span id="dot3" onclick="Theme3()"></span>
            </div>
                    </span>
                </h5>
            </div>
  `
  let dot1 = document.getElementById('dot1').classList;
  let dot2 = document.getElementById('dot2').classList;
  let dot3 = document.getElementById('dot3').classList;

  dot2.add('emptydot')
  dot1.add('emptydot')
  dot3.add('dot')


  document.body.style.backgroundColor = "#170629";

  document.getElementById("num7").style.backgroundColor = "#331a4d";
  document.getElementById("num7").style.color = "#e5d362";


  document.getElementById("num8").style.backgroundColor = "#331a4d";
  document.getElementById("num8").style.color = "#e5d362";

  document.getElementById("num9").style.backgroundColor = "#331a4d";
  document.getElementById("num9").style.color = "#e5d362";

  document.getElementById("num4").style.backgroundColor = "#331a4d";
  document.getElementById("num4").style.color = "#e5d362";

  document.getElementById("num5").style.backgroundColor = "#331a4d";
  document.getElementById("num5").style.color = "#e5d362";

  document.getElementById("num6").style.backgroundColor = "#331a4d";
  document.getElementById("num6").style.color = "#e5d362";


  document.getElementById("add").style.backgroundColor = "#331a4d";
  document.getElementById("add").style.color = "#e5d362";

  document.getElementById("num1").style.backgroundColor = "#331a4d";
  document.getElementById("num1").style.color = "#e5d362";


  document.getElementById("num2").style.backgroundColor = "#331a4d";
  document.getElementById("num2").style.color = "#e5d362";

  document.getElementById("num3").style.backgroundColor = "#331a4d";
  document.getElementById("num3").style.color = "#e5d362";

  document.getElementById("minus").style.backgroundColor = "#331a4d";
  document.getElementById("minus").style.color = "#e5d362";

  document.getElementById("dott").style.backgroundColor = "#331a4d";
  document.getElementById("dott").style.color = "#e5d362";

  document.getElementById("num0").style.backgroundColor = "#331a4d";
  document.getElementById("num0").style.color = "#e5d362";


  document.getElementById("mult").style.backgroundColor = "#331a4d";
  document.getElementById("mult").style.color = "#e5d362";

  document.getElementById("division").style.backgroundColor = "#331a4d";
  document.getElementById("division").style.color = "#e5d362";

  document.getElementById("screen").style.backgroundColor = "#1d0836";
  document.getElementById("operation").style.color = "#dfce4c";
  document.getElementById("result").style.color = "#dfce4c";
  document.getElementById("buttonsDiv").style.backgroundColor = "#1d0836";
  document.getElementById("Del").style.backgroundColor = "#56087b";
  document.getElementById("Clear").style.backgroundColor = "#56087b";
  document.getElementById("topPart").style.color = "#dfce4c";
  document.getElementById("calcWord").style.color = "#dfce4c";
  document.getElementById("switch").style.backgroundColor = "#d3cdcc";

}; 