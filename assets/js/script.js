
function city(e, cityname) {
  var i, tabcontent, tabbtn;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tabbtn = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tabbtn.length; i++) {
    tabbtn[i].className = tabbtn[i].className.replace(" active", "");
  }
  document.getElementById(cityname).style.display = "flex";
  e.currentTarget.className += " active";
}
