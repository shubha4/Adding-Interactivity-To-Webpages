//Log out a message to show you've got JavaScript running

console.log("Script running smoothly!");

//Define a variable `myName` and log it out

let myName = "Shubha Tripathi";
console.log(myName);

//Define a function `getVowelCount()`

function getVowelCount(aString) {
    let lowerCaseString = aString.toLowerCase();
    let modifiedString = lowerCaseString.replaceAll("a", "");
    modifiedString = modifiedString.replaceAll("e", "");
    modifiedString = modifiedString.replaceAll("i", "");
    modifiedString = modifiedString.replaceAll("o", "");
    modifiedString = modifiedString.replaceAll("u", "");
    modifiedString = modifiedString.replaceAll("y", "");
    let stringDiff = lowerCaseString.length - modifiedString.length;
    return stringDiff;
}

//Define a variable `numVowelsInName` and log it out

let numVowelsInName = getVowelCount(myName);
console.log(numVowelsInName);

//Create a variable `h1Elememt` that refers to the `<h1>` element in the DOM.
//Then change the text of that element

let h1Element = $('h1');
h1Element.text("Interactive Pet Viewer");

//Create a variable `footerElement` that refers to the `<footer>`, then
//change the HTML content of that element

let footerElement = $('footer');
footerElement.html('<small>All images from <a href="https://unsplash.com/">unsplash.com</a></small>');

//Change the CSS `display` property of the `#cats` element
//Add the `active` class to the `#btnShowDogs` element

$('#cats').css('display','none');
$('#btnShowDogs').addClass('active');

//Add an event listener to the buttons to respond to click events.
//The listener's function will toggle the `#dogs` and `#cats` divs,
//and toggle which button has the `active` class

let buttonEvent = $('.btn-group');
buttonEvent.on('click', function(event) {
    $('#cats, #dogs').toggle("fast");
    $('#btnShowDogs, #btnShowCats').toggleClass('active');
})

//Change the `cursor` CSS property of the images

$('img').css({'cursor': 'pointer'});

//Add the `data-bs-toggle` and `data-bs-target` attributes to the images

$('img').attr('data-bs-toggle', 'modal');
$('img').attr('data-bs-target', '#exeModal');

//Ad an event listener to the modal for `show.bs.modal` events.
//The listener's function will replace the modal's image `src` and
//`alt` attributes with the values from the clicked image.

$('#exeModal').on("show.bs.modal", function(event){
    var clickedimg = $(event.relatedTarget);
    var src_var = clickedimg.attr('src');
    var alt_var = clickedimg.attr('alt');
    $('#modalImage').attr('src', src_var);
    $('#modalImage').attr('alt', alt_var);
});