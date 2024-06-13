   function func(a){
        let bc= document.getElementsByClassName('aadhar');
    let ab= document.getElementsByClassName('id');
        if(a==0){
         ab[0].disabled=true;  
         ab[1].disabled=true; 
         bc[0].disabled=false;  
         bc[1].disabled=false;   
        }
        else{
         ab[0].disabled=false;  
         ab[1].disabled=false;
         bc[0].disabled=true;  
         bc[1].disabled=true;   
        }
    }
   
function aadhar(){
  let adhar1=[document.getElementById('aadhar1').value];
  let adhar2=[document.getElementById('aadhar2').value];
   for(i=0;i<=adhar1.length;i++){
    if(adhar2[i]!=adhar1[i]){
      document.getElementById('p').innerHTML=("aadhar number is mismatch")
    }
    if(adhar2[0]==adhar1[0]){
        document.getElementById('p').innerHTML="";  
    }
   }
    
    }


    function verify(){
    let nm1=[document.getElementById('name1').value];
    let nm2=[document.getElementById('name2').value];
    // console.log(nm1);
    // console.log(nm2);
for(i=0;i<=nm1.length;i++){
if(nm2[0]!=nm1[0]){
    document.getElementById('p1').innerHTML=("name should be same");
}
if(nm2[0]==nm1[0]){
    document.getElementById('p1').innerHTML="";
}
}
}


let nm3=document.getElementById('name3');
function func1(a){
if(a==0){
    nm3.disabled=false
}
if(a==1){
    nm3.disabled=true;
}
}
    

function verify1(){
    let nm1=[document.getElementById('father1').value];
    let nm2=[document.getElementById('father2').value];
    // console.log(nm1);
    // console.log(nm2);
for(i=0;i<=nm1.length;i++){
if(nm2[0]!=nm1[0]){
    document.getElementById('p2').innerHTML=("name should be same");
}
if(nm2[0]==nm1[0]){
    document.getElementById('p2').innerHTML="";
}
}
}


function verify2(){
    let nm1=[document.getElementById('mother1').value];
    let nm2=[document.getElementById('mother2').value];
    // console.log(nm1);
    // console.log(nm2);
for(i=0;i<=nm1.length;i++){
if(nm2[0]!=nm1[0]){
    document.getElementById('p3').innerHTML=("name should be same");
}
if(nm2[0]==nm1[0]){
    document.getElementById('p3').innerHTML="";
}
}
}

function verify3(){
    let nm1=[document.getElementById('date1').value];
    let nm2=[document.getElementById('date2').value];
    for(i=0;i<=nm1.length;i++){
        if(nm2[0]!=nm1[0]){
            document.getElementById('p4').innerHTML=("DOB should be same");
        }
        if(nm2[0]==nm1[0]){
            document.getElementById('p4').innerHTML="";
        }
        }
}

function verify4(){
    let nm1=[document.getElementById('board1').value];
    let nm2=[document.getElementById('board2').value];
    for(i=0;i<=nm1.length;i++){
        if(nm2[0]!=nm1[0]){
            document.getElementById('p5').innerHTML=("Board should be same");
        }
        if(nm2[0]==nm1[0]){
            document.getElementById('p5').innerHTML="";
        }
        }
}

function verify5(){
    let nm1=[document.getElementById('roll1').value];
    let nm2=[document.getElementById('roll2').value];
    for(i=0;i<=nm1.length;i++){
        if(nm2[0]!=nm1[0]){
            document.getElementById('p6').innerHTML=("Roll No. should be same");
        }
        if(nm2[0]==nm1[0]){
            document.getElementById('p6').innerHTML="";
        }
        }
}

function verify6(){
    let nm1=[document.getElementById('year1').value];
    let nm2=[document.getElementById('year2').value];
    for(i=0;i<=nm1.length;i++){
        if(nm2[0]!=nm1[0]){
            document.getElementById('p7').innerHTML=("Passing Year should be same");
        }
        if(nm2[0]==nm1[0]){
            document.getElementById('p7').innerHTML="";
        }
        }
}

function verify7(){
    let nm1=[document.getElementById('gender1').checked];
    let nm4=[document.getElementById('gender4').checked];
    for(i=0;i<nm1.length;i++){
        if(nm4[i]==nm1[i]){
            document.getElementById('p8').innerHTML="";
        }
        if(nm4[i]!=nm1[i]){
            document.getElementById('p8').innerHTML=("Gender should be same");
        }
        }         
}

 function verify8(){
    let nm2=[document.getElementById('gender2').checked];
    let nm5=[document.getElementById('gender5').checked];
    for(i=0;i<nm2.length;i++){
        if(nm5[i]==nm2[i]){
            document.getElementById('p8').innerHTML="";
        }
        if(nm5[i]!=nm2[i]){
            document.getElementById('p8').innerHTML=("Gender should be same");
        }
        }
}
function verify9(){
    let nm3=[document.getElementById('gender3').checked];
    let nm6=[document.getElementById('gender6').checked];
    for(i=0;i<nm3.length;i++){
        if(nm6[i]==nm3[i]){
            document.getElementById('p8').innerHTML="";
        }
        if(nm6[i]!=nm3[i]){
            document.getElementById('p8').innerHTML=("Gender should be same");
        }
        }
}

function verify10(){
    let nm1=[document.getElementById('mobile1').value];
    let nm2=[document.getElementById('mobile2').value];
for(i=0;i<nm1.length;i++){
    if(nm1[i]!=nm2[i]){
        document.getElementById('p9').innerHTML=("mobile number should be same");
    }
    if(nm1[i]==nm2[i]){
        document.getElementById('p9').innerHTML="";
    }
}
}

function verify11(){
    let nm1=[document.getElementById('email1').value];
    let nm2=[document.getElementById('email2').value];
for(i=0;i<nm1.length;i++){
    if(nm1[i]!=nm2[i]){
        document.getElementById('p10').innerHTML=("email should be same");
    }
    if(nm1[i]==nm2[i]){
        document.getElementById('p10').innerHTML="";
    }
}
}