var ans=[];
var toggle=0;
const BIN=new Bin();
const HEX=new Hex();
const OCT=new Oct();
function alertDiv(id){
  document.getElementById(id).style.display="inline-flex";
  
  }
   
function Bin(){
this.base=2;
this.generate=function(){
  var a=Math.round(Math.random()*(7-3))+3;
  var bin="";
  for(var i=1;i<=a;i++){
    
  bin+=(i==1||Math.random()<0.5)? "1":"0";
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
      
      this.generate=function(){
        var a=Math.round(Math.random()*(5-3))+3;
        
        var oct="";
        for(var i=1;i<=a;i++){
          var digit=Math.round(Math.random()*7);
          oct+=digit;
          }
          return oct;
          }
      this.toDec=function(oct){
        return BIN.toDec.call(this,oct);
        
        }
        this.fromDec=function(num){
          return num.toString(this.base);
          }
          this.add=function(oct1,oct2){
            return BIN.add.call(this,oct1,oct2);
            }
      }
function Hex(){
    this.base=16;
    this.generate=function(){
        var a=Math.round(Math.random()*(5-3))+3;
        var hex="";
        
        for(var i=1;i<=a;i++){
      var digit=Math.round(Math.random()*9);
      var alpha=String.fromCharCode(Math.round(Math.random()*(70-65))+65);
      
      hex+=(Math.random()<=0.5)? digit:alpha;
      }
      return hex;
      }
      
    this.toDec=function(hex){
      return parseInt(hex,this.base);
          }
     this.fromDec=function(num){
       return (num.toString(this.base)).toUpperCase();
            }
      this.add=function(hex1,hex2){
             return BIN.add.call(this,hex1,hex2);
              }
        }
        
function Btn(){
  this.inp;
  this.num;
  this.div;
  this.butt=document.createElement("button");
  this.butt.innerHTML="check";
  this.butt.id="check";
  this.butt.className="btn btn-outline-info";
  
  this.butt.onclick=()=>{
    var a=this.inp.value;
    if(a.startsWith("0"))
    a=a.slice(a.search(/\B[1-9]|[A-Z]/));
    
    if(a.toUpperCase()==ans[this.num]){
    this.div.className="alert alert-success";
    this.div.innerHTML="correct";
    }
    else{
    this.div.className="alert alert-danger";
    this.div.innerHTML="wrong";
    
    }
    
    this.div.style.display="inline";
    }
    
  document.body.appendChild(this.butt);
  }
       function getType(){
         var url=new URL(window.location.href);
         var type=url.searchParams.get("Type");
         if(type==null || type=="Bin")
         return BIN;
         else if(type=="Oct")
         return OCT;
         else if(type=="Hex")
         return HEX;
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
             ans[i-1]=b.add(term1,term2);
             }
             })(getType());
             
           
              
              (function genAnsFields(){
                for(var i=0;i<5;i++){
                var input=document.createElement("input");
                document.body.appendChild(input);
                var btn=new Btn();
                btn.inp=input;
                btn.num=i;
                btn.div=document.createElement("div");
                btn.div.id="result";
                document.body.appendChild(btn.div);
                document.body.appendChild(document.createElement("br"));
                }
                })();
                
                $("i").click(()=>{
                 $("#options").slideToggle(1000);
                  if(toggle==0){
                  document.getElementsByTagName("i")[0].className="fas fa-times";
                  toggle++;
                  }
                  else{
                   document.getElementsByTagName("i")[0].className="fas fa-bars";
                 toggle--;
                 }
                  });