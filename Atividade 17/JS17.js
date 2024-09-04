function onlyOneCheckbox(checkbox) {
    var checkboxes = document.getElementsByName('exclusiveCheckbox');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
    transformText();
}

function transformText() {
    // Get the text input and checkboxes
    var textInput = document.getElementById('textInput');
    var checkboxes = document.getElementsByName('exclusiveCheckbox');
    
    // Check which checkbox is selected
    if (checkboxes[0].checked) {
        // Transform text to uppercase
        textInput.value = textInput.value.toUpperCase();
    } else if (checkboxes[1].checked) {
        // Transform text to lowercase
        textInput.value = textInput.value.toLowerCase();
    }
}