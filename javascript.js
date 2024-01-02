function customTextGeneration(inPutText, parent) {
    for (var buchstabe of inPutText) {
        if (buchstabe === " ") {
            buchstabe = "&nbsp"
        }

        if (buchstabe === "<") {
            var el = document.createElement("br");
            parent.append(el);
        }
        else {
            var span = document.createElement("span");
            span.innerHTML = buchstabe;
            parent.append(span);
        }

    }
}



var title = document.getElementById("titletext");
customTextGeneration("The future <of< Filmmaking", title)




