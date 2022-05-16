let textbox=document.getElementById("textbook");

textbox.addEventListener('input',function(){
    var text =this.value;
    let char=text.length;
    document.getElementById('char').innerHTML=char;



    text=text.trim()
    let words=text.split(" ");
    let cleanlist=words.filter(function(elm){
        return elm !="";

    });
    console.log(cleanlist);
    document.getElementById('word').innerHTML=cleanlist.length;
})

