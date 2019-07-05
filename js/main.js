window.addEventListener("load", function(){
	/*
	var subArray=new Array();
	var menuH=35;
	var n;
	var depth1Li=document.querySelectorAll(".menu"); // .menu
	var depth1A=document.querySelectorAll(".main"); // .menu .main
	var depth2Ul=document.querySelectorAll(".sub"); // .main .sub

	for(var i=0; i<depth2Ul.length; i++){
		subArray.push(depth2Ul[i].offsetHeight+menuH);
		depth1A[i].index=i;

		depth1A[i].addEventListener("click", function(e){
			e.preventDefault();
			n=e.target.index;
			// console.log("n : "+n);

			if(e.target.classList.contains("on") == false){
				for(var j=0; j<depth1A.length; j++){
					if(j == n){
						depth1A[j].classList.add("on");
						depth1Li[j].style.height=subArray[n]+"px";
					}
					else{
						depth1A[j].classList.remove("on");
						depth1Li[j].style.height=menuH+"px";
					}
				}
			}
			else{
				e.target.classList.remove("on");
				e.target.parentElement.style.height=menuH+"px";
			}
		});
	}
	// console.log("sub height : "+subArray.join(", "));
	*/

	var depth1Ul=document.querySelector("nav > ul");
	var depth1Li=null;
	var depth1A=null;
	var depth2Ul=null;
	var subArray=new Array();
	var menuH=35;
	var n;
	var requestURL="../data/menu.json";
	var request=new XMLHttpRequest();
	var depth1HTML="";

	function init(){
		setTimeout(function(){
			request.open("GET", requestURL, true);
			request.responseType="json";
			request.send();
			request.addEventListener("load", function(){
				var data=request.response;
				// console.log(data);

				for(key1 in data){
					// console.log(key+" : "+data[key]);
					// <li class="menu">
					var level1Li=document.createElement("li");
					level1Li.setAttribute("class", "menu");

					// <a href="" class="main">CSS</a>
					level1Li.innerHTML='<a href="#" class="main">'+key1+'</a>';

					// <ul class="sub">
					var level2Ul=document.createElement("ul");
					level2Ul.setAttribute("class", "sub");
					depth1Ul.appendChild(level1Li);
					level1Li.appendChild(level2Ul);

					for(key2 in data[key1]){
						// <li><a href="#">HTML Tutorial</a></li>
						var level2Li=document.createElement("li");
						level2Li.innerHTML='<a href="#">'+data[key1][key2]+'</a>';
						level2Ul.appendChild(level2Li);
					}
				} // end for

				depth1Li=document.querySelectorAll(".menu");
				depth1A=document.querySelectorAll(".main");
				depth2Ul=document.querySelectorAll(".sub");

				for(var i=0; i<depth2Ul.length; i++){
					subArray.push(depth2Ul[i].offsetHeight+menuH);
					depth1A[i].index=i;

					depth1A[i].addEventListener("click", function(e){
						e.preventDefault();
						n=e.target.index;
						// console.log("n : "+n);

						if(e.target.classList.contains("on") == false){
							for(var j=0; j<depth1A.length; j++){
								if(j == n){
									depth1A[j].classList.add("on");
									depth1Li[j].style.height=subArray[n]+"px";
								}
								else{
									depth1A[j].classList.remove("on");
									depth1Li[j].style.height=menuH+"px";
								}
							}
						}
						else{
							e.target.classList.remove("on");
							e.target.parentElement.style.height=menuH+"px";
						}
					});
				}
				// console.log("sub height : "+subArray.join(", "));
			});
		}, 10);
	}
	init();
});