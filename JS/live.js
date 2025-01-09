function asc(){
let st=document.getElementById("in").value;
let s=0;
for(let i=0;i<st.length;i++){
    s+=st.charCodeAt(i);
}
document.getElementById("ou").innerHTML=s;
}

function l2(){
    let in1=document.getElementById("in1").value;
    let in2=document.getElementById("in2").value;
    in1[0]=in1.toUpperCase();
    in2[0]=in2.toUpperCase();
    document.getElementById("ou2").innerHTML=in1;
    document.getElementById("ou2").innerHTML=in2;
}