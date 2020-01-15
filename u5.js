var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("timer").innerHTML =d+d.toLocaleTimeString();
}
setInterval(myTimer(), 1000);

function save9() {
  var input9 = document.getElementById("9input");
  localStorage.setItem("9", input9.value);
  document.getElementById("9input").style.backgroundColor = "#cccccc";
  }
function save10() {
    var input10 = document.getElementById("10input");
    localStorage.setItem("10", input10.value);
    document.getElementById("10input").style.backgroundColor = "#cccccc";
    }
 function save11() {
      var input11 = document.getElementById("11input");
      localStorage.setItem("11", input11.value);
      document.getElementById("11input").style.backgroundColor = "#cccccc";
      }
 function save12() {
        var input12 = document.getElementById("12input");
        localStorage.setItem("12", input12.value);
        document.getElementById("12input").style.backgroundColor = "#cccccc";
        }
 function save13() {
          var input13 = document.getElementById("13input");
          localStorage.setItem("13", input13.value);
          document.getElementById("13input").style.backgroundColor = "#cccccc";
          }
function save14() {
            var input14 = document.getElementById("14input");
            localStorage.setItem("14", input14.value);
            document.getElementById("14input").style.backgroundColor = "#cccccc";
            }
function save15() {
              var input15 = document.getElementById("15input");
              localStorage.setItem("15", input15.value);
              document.getElementById("15input").style.backgroundColor = "#cccccc";
              }
function save16() {
                var input16 = document.getElementById("16input");
                localStorage.setItem("16", input16.value);
                document.getElementById("16input").style.backgroundColor = "#cccccc";
                }
function save17() {
                  var input17 = document.getElementById("17input");
                  localStorage.setItem("17", input17.value);
                  document.getElementById("17input").style.backgroundColor = "#cccccc";
                  }