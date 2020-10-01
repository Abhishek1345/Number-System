function alertDiv(id){
  document.getElementById(id).style.display="block";
  
  }
  function Bin(){
this.base=2;
this.generate=function(){
  var a=Math.round(Math.random()*9)+3;
  var bin="";
  for(var i=1;i<=a;i++){
  bin+=(Math.random()<0.5)? "1":"0";
  }
  return bin;
  }
  
 
 this.toDec=function(bin){
    var num=0;
    var p=bin.length-1;
    
    for(var i=0;i<bin.length;i++){
      num=num+ (Number)(bin.charAt(i))*Math.pow(this.base,p);
      p--;
      }
      return num;
      }
      
 this.fromDec=function(num){
   return num.toString(this.base);
   }
   this.add=function(bin1,bin2){
    var a=this.toDec(bin1);
    var b=this.toDec(bin2);
    var sum=a+b;
    return this.fromDec(sum);
    }
    }
    
    function Oct(){
      this.base=8;
      }
      function Hex(){
        this.base=16;
        }
    
    function checkAns(){
     
          
       }
       function getType(){
         var url=new URL(window.location.href);
         var type=url.searchParams.get("Type");
         if(type==null || type.equalsIgnoreCase("Bin"))
         return new Bin();
         else if(type.equalsIgnoreCase("Oct"))
         return new Oct();
         else if(type.equalsIgnoreCase("Hex"))
         return new Hex();
         }
       
       (function generateSums(Type){
         var b=Type;
         for(var i=1;i<=5;i++){
             var ul=document.getElementsByTagName("ul")[0];
             var li=document.createElement("li");
             var term1=b.generate();
             var term2=b.generate();
             
             var ques=term1+"+"+term2+"\n";
             ques=document.createTextNode(ques);
             li.appendChild(ques);
             ul.appendChild(li);
             }
             })(getType());