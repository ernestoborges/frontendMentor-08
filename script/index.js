const chartItem = document.querySelectorAll(".chart-item");

async function foo() {
  const res = await fetch('./data.json')
  const data = await res.json();
  
  for(let i = 0; i< chartItem.length; i++){
    chartItem[i].getElementsByClassName("item-bar")[0].style.height = (data[i].amount) * 2 +"px";
    chartItem[i].getElementsByTagName("p")[0].innerHTML = data[i].day;
    chartItem[i].getElementsByTagName("span")[0].innerHTML = "$"+data[i].amount;
  }
}

foo();

for(let i=0; i<chartItem.length; i++){

  chartItem[i].addEventListener("mouseover", function(){
    this.getElementsByClassName("item-bar")[0].style.opacity = "0.7";
    this.getElementsByClassName("item-value")[0].style.visibility = "visible"; 
    this.style.cursor = "pointer";    
  });
  chartItem[i].addEventListener("mouseout", function(){
    this.getElementsByClassName("item-bar")[0].style.opacity = "1";
    this.getElementsByClassName("item-value")[0].style.visibility = "hidden"; 
  });
  chartItem[i].addEventListener("click", function(){
    for(let j = 0; j < chartItem.length; j++){
      chartItem[j].getElementsByClassName("item-bar")[0].style.background = "var(--soft-red)"
    };
    this.getElementsByClassName("item-bar")[0].style.background = "var(--cyan)";
  });
}
