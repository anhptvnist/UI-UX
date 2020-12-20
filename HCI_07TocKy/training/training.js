function add(){
    var text = document.getElementById("text_input").value
    var row = document.getElementById("row1")
    row.innerHTML = ''
    text.trim()
    var array_word = text.split(' ')
    var i = 0
    array_word.forEach(word => {
       let span = document.createElement('span')
       span.setAttribute('wordnr', i)
       if(i==0) {span.setAttribute('class','highlight')}
       let text = document.createTextNode(word)
       span.appendChild(text)
       row.appendChild(span)
       i++
    });
}

function next(){
        var text = "Sống không giận không hờn không oán trách"
        var row = document.getElementById("typing")
        row.innerHTML = ''
        text.trim()
        var array_word = text.split(' ')
        var i = 0
        array_word.forEach(word => {
           let span = document.createElement('h4')
           span.setAttribute('wordnr', i)
           span.setAttribute('class','needed-type-word')
           if(i==0) {span.setAttribute('id','typing-word')}
           let text = document.createTextNode(word)
           span.appendChild(text)
           row.appendChild(span)
           i++
        });
        document.getElementById("text-current").value=''
   var keys = document.getElementsByClassName("needed-type-key")
   for(var i = 0; i < keys.length; i++){
      keys[i].removeAttribute("class")
   }
    document.getElementById("Q").setAttribute("class","needed-type-key")
    document.getElementById("G").setAttribute("class","needed-type-key")
    document.getElementById("V").setAttribute("class","needed-type-key")
    document.getElementById("I").setAttribute("class","needed-type-key")
    document.getElementById(";").setAttribute("class","needed-type-key")
    
    document.getElementsByClassName("Q")[0].setAttribute("class","needed-type-key")
    document.getElementsByClassName("G")[0].setAttribute("class","needed-type-key")
    document.getElementsByClassName("V")[0].setAttribute("class","needed-type-key")
    document.getElementsByClassName("I")[0].setAttribute("class","needed-type-key")
    document.getElementsByClassName(":")[0].setAttribute("class","needed-type-key")
      //   var keys = document.getElementsByClassName()
    }

