document.getElementsByClassName("submit")[0].addEventListener("click",submit);

function submit(){
    let para = document.getElementsByClassName("textinput")[0].value;
    document.getElementsByClassName("Character")[0].innerHTML = characterCount(para);
    document.getElementsByClassName("Words")[0].innerHTML = WordCount(para);
}


function characterCount(text){
    let character=0;
    let no_of_space = 0;
    let no_of_commas = 0;
    let no_of_fullstop = 0;

    for(let i=0;i<text.length;i++){

        if(text.charAt(i)==' '){
            i++;
            character++;
            no_of_space++;
        }

        if(text.charAt(i)==','){
            i++;
            character++;
            no_of_commas++;
        }

        if(text.charAt(i)=='.'){
            i++;
            character++;
            no_of_fullstop++;
        }
        character++;
    }
    return "Character: " + character +" Number of spaces: " + no_of_space + " Number of commas: " + no_of_commas + " Number of fullstop: " + no_of_fullstop;
}

function WordCount(str) { 
    return "Number of Words: " + str.split(" ").length;
}
  