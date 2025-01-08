function check(){
    let a=document.getElementById("inp").value;
    if(a%2==0){
        document.getElementById("out").innerText="Even"
    }
    else{
        document.getElementById("out").innerText="ODD";
    }

}
function t2(){
    var op=document.getElementById("ou")
    for(let i=1;i<=10;i++){
        let para=document.createElement("p");
        para.innerText=i;
        op.appendChild(para);
    }    
}
//Pending3
function t3(){
    const resu=[];
    for(let i=1;i<30;i++){
        let res=res*i;
    resu.push("res");
    }
    console.log(resu);
}

function prime(){
    let t4in=document.getElementById("t4in").value;
    let t4ou=document.getElementById("t4ou");
    let count=0;
    if(t4in<=1){
        document.getElementById("t4ou").innerText="Not a Prime"
    }
    for(let i=1;i<=t4in;i++){
        if(t4in%i==0){
            count++;
        }
    }
    if(count==2){
        t4ou.innerHTML="Prime"  
      }
    else{
        t4ou.innerHTML="Not A Prime" 
       }
}
function t5(){
    var t5in=document.getElementById("t5in").value;
    var t5ou=document.getElementById("t5ou");
    let ou=0;
    for(let i=1;i<=t5in;i++){
        ou+=i;
    }
    t5ou.innerText=ou;
}

function t6(){
    var t6in=document.getElementById("t6in").value;
    var t6ou=document.getElementById("t6ou");
    let max=Math.max(...t6in);
    t6ou.innerText=max;
}

function t7(){
    let t7in=document.getElementById("t7in").value.toLowerCase();
    let t7ou=document.getElementById("t7ou");
    let c=0;
    for(let i=0;i<t7in.length;i++){
        if(t7in[i]=='a'||t7in[i]=='e'||t7in[i]=='i'||t7in[i]=='o'||t7in[i]=='u'){
            c++;
        }
    }
    t7ou.innerHTML=c;
}

function t8(){
var t8in=document.getElementById("t8in").value;
var t8ou=document.getElementById("t8ou");
let op= "";
for(let i=1;i<=t8in;i++){
    let pa=document.createElement("p");
    op+="* ";
    pa.innerHTML=op;
    t8ou.appendChild(pa);
}
}

function t9(){
    var t9in=document.getElementById("t9in").value;
    var t9ou=document.getElementById("t9ou");
    for(let i=1;i<=t9in;i++){
        if(i%3==0&&i%5==0){
            t9ou.innerText="FizzBuzz";
        }
        else if(i%3==0){
            t9ou.innerText="Fizz";
        }
        else if(i%5==0){
            t9ou.innerText="Bizz";
        }
        else{
            t9ou.innerText=i;
        }
    }

}

function t10(){
    let a=document.getElementById("t10in").value;
    let s="";
    for(let i=a.length;i>=0;i--){
        s+=a.charAt(i);
    }
    document.getElementById("t10ou").innerHTML=s;

}
