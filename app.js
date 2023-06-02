


function validacia(){
    var x = document.getElementById("Email").value
    var c = document.getElementById("Password").value
    let y = document.getElementById("sworia");
    let v = document.getElementById("shecdoma");
    let k = document.getElementById("result");
    
    


    if(x == 0){
        document.getElementById("Email").style.border="red 2px solid";
        y.innerHTML="შეავსეთ ველი";
        y.style.color="red";
        y.style.textAlign="center";
        y.style.fontSize="22px"
        return false
    }else if(c==0){
        document.getElementById("Password").style.border="red 2px solid";
        document.getElementById("Email").style.border="green 2px solid";
        y.innerHTML=" ";
        v.innerHTML="შეავსეთ ველი";
        v.style.color="red";
        v.style.textAlign="center";
        v.style.fontSize="22px"
        return false
    }else{
        
        document.getElementById("Password").style.border="green 2px solid";
        document.getElementById("Email").style.border="green 2px solid";
        k.innerHTML="მონაცემები წარმატებით შეივსო გვერდი განახლდება 5 წამში ";
        v.innerHTML=" ";
        y.innerHTML=" ";
        k.style.textAlign="center";
        k.style.fontSize="30px";
        k.style.color="green";
        setTimeout(() => {
            document.location.reload();
          }, 5000)
        
        return false
    }
        
    
}