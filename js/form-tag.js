const tagData = {
    "form": {
        title: "<form> Form Container",
        history: "Forms for user input",
        code: "<form><input type='text' placeholder='Name'><button>Submit</button></form>",
        quiz: "Which tag wraps form elements?",
        answer: "form"
    },
    "input": {
        title: "<input> Input Field",
        history: "For text, radio, checkbox, etc.",
        code: "<input type='text' placeholder='Name'>",
        quiz: "Which tag is used for input fields?",
        answer: "input"
    },
    "button": {
        title: "<button> Button Tag",
        history: "Used to create clickable buttons.",
        code: "<button>Click Me</button>",
        quiz: "Which tag creates a clickable button?",
        answer: "button"
    },
    "select": {
        title: "<select> Dropdown Tag",
        history: "Used to create a dropdown list.",
        code: "<select><option>Option 1</option><option>Option 2</option></select>",
        quiz: "Which tag creates a dropdown list?",
        answer: "select"
    },
    "textarea": {
        title: "<textarea> Text Area Tag",
        history: "Used for multi-line text input.",
        code: "<textarea rows='4' cols='50'>Enter text here...</textarea>",
        quiz: "Which tag is used for multi-line text input?",
        answer: "textarea"
    },
    "label": {
        title: "<label> Label Tag",
        history: "Used to define labels for input elements.",
        code: "<label for='name'>Name:</label><input type='text' id='name'>",
        quiz: "Which tag defines a label for an input element?",
        answer: "label"
    },
    "fieldset": {
        title: "<fieldset> Fieldset Tag",
        history: "Used to group related elements in a form.",
        code: "<fieldset><legend>Personal Info</legend><input type='text' placeholder='Name'></fieldset>",
        quiz: "Which tag groups related elements in a form?",
        answer: "fieldset"
    },
    "legend": {
        title: "<legend> Legend Tag",
        history: "Defines a caption for a <fieldset> element.",
        code: "<fieldset><legend>Personal Info</legend><input type='text' placeholder='Name'></fieldset>",
        quiz: "Which tag defines a caption for a fieldset?",
        answer: "legend"
    },
    "option": {
        title: "<option> Option Tag",
        history: "Defines an option in a <select> dropdown.",
        code: "<select><option>Option 1</option><option>Option 2</option></select>",
        quiz: "Which tag defines an option in a dropdown?",
        answer: "option"
    },
    "datalist": {
        title: "<datalist> Datalist Tag",
        history: "Provides a list of predefined options for an <input> element.",
        code: "<input list='browsers'><datalist id='browsers'><option value='Chrome'><option value='Firefox'><option value='Edge'></datalist>",
        quiz: "Which tag provides predefined options for input?",
        answer: "datalist"
    },
    "output": {
        title: "<output> Output Tag",
        history: "Displays the result of a calculation or user action.",
        code: "<form oninput='result.value=parseInt(a.value)+parseInt(b.value)'><input type='number' id='a'> + <input type='number' id='b'> = <output name='result'></output></form>",
        quiz: "Which tag displays the result of a calculation?",
        answer: "output"
    },
    "optgroup": {
        title: "<optgroup> Option Group Tag",
        history: "Used to group related options inside a <select> dropdown.",
        code: "<select><optgroup label='Fruits'><option>Apple</option><option>Banana</option></optgroup><optgroup label='Vegetables'><option>Carrot</option><option>Spinach</option></optgroup></select>",
        quiz: "Which tag groups related options inside a dropdown?",
        answer: "optgroup"
    },
    "progress": {
        title: "<progress> Progress Tag",
        history: "Shows the progress of a task, like downloads or uploads.",
        code: "<label for='file'>File upload progress:</label><progress id='file' value='70' max='100'>70%</progress>",
        quiz: "Which tag shows the progress of a task?",
        answer: "progress"
    },
    "meter": {
        title: "<meter> Meter Tag",
        history: "Represents a scalar measurement within a known range.",
        code: "<label for='disk'>Disk usage:</label><meter id='disk' value='0.6'>60%</meter>",
        quiz: "Which tag represents a measurement within a range?",
        answer: "meter"
    }
};


function openModal(tag) {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-title').innerHTML = tagData[tag].title;
    document.getElementById('modal-history').innerHTML = tagData[tag].history;
    document.getElementById('modal-editor').value = tagData[tag].code;
    document.getElementById('live-preview').srcdoc = tagData[tag].code;
    document.getElementById('quiz-question').innerHTML = tagData[tag].quiz;
    document.getElementById('quiz-answer').value = '';
    document.getElementById('quiz-feedback').innerHTML = '';
    document.getElementById('quiz').setAttribute('data-tag', tag);
    document.getElementById("modal-content").classList.remove("modal-dark");

}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function copyCode() {
    const code = document.getElementById('modal-editor').value;
    navigator.clipboard.writeText(code).then(() => {
        alert('🎉 Code Copied! 🎉');
    });
}

function runLiveCode() {
    const code = document.getElementById('modal-editor').value;
    document.getElementById('live-preview').srcdoc = code;
}

function checkAnswer() {
    const tag = document.getElementById('quiz').getAttribute('data-tag');
    const answer = document.getElementById('quiz-answer').value.trim().toLowerCase();
    const correct = tagData[tag].answer.toLowerCase();

    if (answer === correct) {
        document.getElementById('quiz-feedback').innerHTML = "<span style='color:#00FFFF;'>Correct!</span>";
    } else {
        document.getElementById('quiz-feedback').innerHTML = "<span style='color:#ffb703;'>Try again!</span>";
    }
}

function searchTag() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const cards = document.querySelectorAll('.tag-card');

    cards.forEach(card => {
        const tag = card.textContent.toLowerCase(); // card ka text
        if (tag.includes(input)) {
            card.style.display = "inline-block"; // show match
            card.classList.add("highlight");
        } else {
            card.style.display = "none"; // hide non-match
            card.classList.remove("highlight");
        }
    });


    if (input === "") {
        cards.forEach(card => {
            card.style.display = "inline-block";
            card.classList.remove("highlight");
        });
    }
}
function toggleModalTheme() {
    document.getElementById("modal-content")
        .classList.toggle("modal-dark");
}
