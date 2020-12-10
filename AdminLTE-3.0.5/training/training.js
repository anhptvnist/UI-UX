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