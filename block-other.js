/*
  *  author:   Sak1sham
  *  @ sak1sham.github.io
*/


findString = function findText(text) {
    if(window.find(text)){
      document.documentElement.innerHTML = '';
      document.documentElement.innerHTML = '<body><h1>BLOCKED</h1></body>';
      document.documentElement.scrollTop = 0;
    };
  }
  
  findStringMulti = function findTextMulti(text1, text2, text3) {
    if(window.find(text1) && window.find(text2) && window.find(text3)){
      document.documentElement.innerHTML = '';
      document.documentElement.innerHTML = '<body><h1>BLOCKED</h1></body>';
      document.documentElement.scrollTop = 0;
    }
    else{
        if (window.getSelection) {window.getSelection().removeAllRanges();}
        else if (document.selection) {document.selection.empty();}
    }
  }
  
  findURL = function changeURL(text){
    var current = window.location.href;
    if(current === text){
      window.location.replace("https://www.google.co.in");
    }
  }
  
  findAllURL = function changeAllURL(text){
    var current = window.location.href;
    if(current.startsWith(text)){
      document.documentElement.innerHTML = '';
      document.documentElement.innerHTML = '<body><h1>BLOCKED</h1></body>';
      document.documentElement.scrollTop = 0;
    }
  }
  
  
  go = function main(){
        findString("xvideos");
        findString("xvideos2");
        findString("celebjihad");
        findString("sex chat");
        findString("Sex chat");
        findString("Sex positions");
        findString("sex positions");
        findString("sex Positions");
        findString("SEX POSITIONS");
        findString("positions for sex");
        findString("positions of sex");
        findString("Sex Chat");
        findString("SEX CHAT");
  
  
        findStringMulti("pussy","dick","boobs");
        findStringMulti("tits","pussy","facesit");
        findStringMulti("blowjob","cock","asshole");
        findStringMulti("shemale","boobs","gay");
        findStringMulti("breast","cock","slut");
        findStringMulti("porn","milf","bang");
        findStringMulti("dildo","naked","porn");
  
  
        findAllURL("https://www.xvideos.com");
        findAllURL("https://www.forhertube.com");
        findAllURL("https://niceporn.xxx");
        findAllURL("https://www.pornktube.porn");
        findAllURL("https://pornmilo.com");
        findAllURL("https://www.porntv.com");
        findAllURL("https://www.pornfuror.com");
        findAllURL("https://www.indianpornvideo.mobi");
        findAllURL("https://mydamplips.com");
        findAllURL("https://rajwap.xyz");
        findAllURL("https://xhamster.desi");
        findAllURL("https://www.xvideos.com");
        findAllURL("https://www.xvideos2.com");
        findAllURL("https://www.celebjihad.live");
        findAllURL("https://www.pornhub.com");
        findAllURL("https://xhamster.com");
        findAllURL("https://www.pornhdvideos.net");
        findAllURL("https://www.you-porn.com");
        findAllURL("https://ro89.com");
        findAllURL("https://kompoz.me.com");
        findAllURL("https://www.redwap.me.com");
        findAllURL("https://bongocams.com");
        findAllURL("https://chat18.webcam");
        findAllURL("https://porn-sex.cam");
        findAllURL("https://www.livejasmin.com");
        findAllURL("https://www.hotlivesexchat.com");
        findAllURL("https://realgirls.xxx/");
        findAllURL("http://in.originalcams.com");
        findAllURL("http://chaturbate.com");
        findAllURL("http://liveporn.fun");
  
  }

  
  function include(filename, onload) {
      var head = document.getElementsByTagName('head')[0];
      var script = document.createElement('script');
      script.src = filename;
      script.type = 'text/javascript';
      script.onload = script.onreadystatechange = function() {
          if (script.readyState) {
              if (script.readyState === 'complete' || script.readyState === 'loaded') {
                  script.onreadystatechange = null;
                  onload();
              }
          }
          else {
              onload();
          }
      };
      head.appendChild(script);
  }
  
  include('https://www.patrick-wied.at/static/nudejs/demo/nude.min.js', function(){
      var images = document.getElementsByTagName('img');
      var flag = 0;
      try{
            for(var i=0; i<images.length; i++){
                if(images[i].id.length!=0){
                  nude.load(images[i].id);
                  flag = 0;
                }
                else{
                  images[i].id = "TestByLaserFocus";
                  nude.load('TestByLaserFocus');
                  falg = 1;
                }
                nude.scan(function(result){
                      if(!result){
                        ;
                      }
                      else{
                          if(findString(" sex ") || findString(" naked ")){
                            document.documentElement.innerHTML = '';
                            document.documentElement.innerHTML = '<body><h1>BLOCKED</h1></body>';
                            document.documentElement.scrollTop = 0;
                            throw new Error("Sexually explicit content found");
                          }
                      }
                });
                if(flag != 0){
                  images[i].id = "";
                  flag = 0;
                }
            }
      }catch(err){
        console.log(err.message);
      }
  });