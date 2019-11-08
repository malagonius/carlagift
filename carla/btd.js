var isPlaying=false;
window.onload = function() {
        do{
            var x = prompt("Un giorno speciale", "");
        }while(x!="04novembre1971"){
        document.getElementById("cover").style.top="20000px";
        var anchors = document.getElementsByTagName('a');
        document.getElementById("content1").classList.add("active");
        for(var i = 0; i < 3; i++) {
            var anchor = anchors[i];
            anchor.onclick = function() {
                if("1"==this.id){
                    document.getElementById("star-wars-player").children[0].pause();
                }else if("3"==this.id){
                    document.getElementById("player").children[0].pause();
                }

                document.getElementsByClassName("active")[0].classList.remove("active");
                document.getElementsByClassName("active")[0].classList.remove("active");
                document.getElementById("content"+this.id).classList.add("active")
                document.getElementById(this.id).classList.add("active")
            }
        }
        document.getElementById("player").children[0].play();
        var listItems = document.getElementsByTagName('a');

        for(var k = 3; k < listItems.length; k++) {
            var listItems = listItems[k];
            listItems.onclick = function() {
                switch(this.id){
                    case "dart1": alert(this.id);break;
                    case "dart2": alert(this.id);break;
                    case "rang1": alert(this.id);break;
                    case "rang2": alert(this.id);break;
                    case "tack1": alert(this.id);break;
                    case "tack2": alert(this.id);break;
                    case "snip1": alert(this.id);break;
                    case "snip2": alert(this.id);break;
                    case "subb1": alert(this.id);break;
                    case "subb2": alert(this.id);break;
                    case "pilo1": alert(this.id);break;
                    case "pilo2": alert(this.id);break;
                    case "wizz1": alert(this.id);break;
                    case "wizz2": alert(this.id);break;
                    case "drud1": alert(this.id);break;
                    case "drud2": alert(this.id);break;
                    case "supm1": alert(this.id);break;
                    case "supm2": alert(this.id);break;
                    case "farm1": alert(this.id);break;
                    case "farm2": alert(this.id);break;
                    case "vill1": alert(this.id);break;
                    case "vill2": alert(this.id);break;
                }
            }
        }   
    }
    window.onscroll = function() {myFunction()};

    var header = document.getElementById("navigation");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    document.getElementById("star-wars-play-button").onclick = function(){
        if(isPlaying){
            document.getElementById("star-wars-player").children[0].pause();
            document.getElementById("crawler").classList.remove("crawl");
            isPlaying=false;
        }
        else{
            document.getElementById("star-wars-player").children[0].play();
            document.getElementById("crawler").classList.add("crawl");
            isPlaying=true;
        }
        
    }
}