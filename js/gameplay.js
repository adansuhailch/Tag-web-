
// Css flex game playground js 
function updateFlex(property, value, element) {
    const stage = document.getElementById('flexStage');
    if (!stage) return;

    // ⚡ Element structure toggle state dynamically trace karein
    stage.style[property] = value;

    // 🔄 Active button state update logic
    const siblings = element.parentNode.querySelectorAll('.flex-btn');
    siblings.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
}

// Css grid game playground js 
function updateGrid(property, value, buttonElement) {
    const gridStage = document.getElementById('gridStage');
    if (!gridStage) return;

    // ⚡ Execute layout mutation on viewport container
    gridStage.style[property] = value;

    // 🔄 Sync Active State UI elements
    const controllerRow = buttonElement.parentNode;
    const buttons = controllerRow.querySelectorAll('.flex-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');

    // 💻 Real-time Codebox text injector node mapping
    if (property === 'gridTemplateColumns') {
        document.getElementById('code-columns').innerText = value;
    } else if (property === 'gap') {
        document.getElementById('code-gap').innerText = value;
    } else if (property === 'justifyItems') {
        document.getElementById('code-justify').innerText = value;
    }
}

// Css box model playground game js code
// Global State Tracking Configuration Nodes
let currentBoxSizing = 'border-box';
let currentPadding = 20;
let currentBorder = 4;
let currentMargin = 15;

function updateBoxModel(property, value) {
    const boxCard = document.getElementById('mainBoxCard');
    if (!boxCard) return;

    // ⚡ Mutate specific rendering layers
    boxCard.style[property] = value;

    // Extract raw numeric dimension values for calculation matrix
    let intVal = parseInt(value);
    if (property === 'padding') {
        currentPadding = intVal;
        document.getElementById('val-padding').innerText = value;
        document.getElementById('code-padding').innerText = value;
    } else if (property === 'borderWidth') {
        currentBorder = intVal;
        document.getElementById('val-border').innerText = value;
        document.getElementById('code-border').innerText = value;
    } else if (property === 'margin') {
        currentMargin = intVal;
        document.getElementById('val-margin').innerText = value;
        document.getElementById('code-margin').innerText = value;
    }

    recalculateComputedDimensions();
}

function updateBoxSizing(sizingValue, buttonElement) {
    const boxCard = document.getElementById('mainBoxCard');
    if (!boxCard) return;

    currentBoxSizing = sizingValue;
    boxCard.style.boxSizing = sizingValue;

    // Toggle active state layout CSS classes
    const siblings = buttonElement.parentNode.querySelectorAll('.flex-btn');
    siblings.forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');

    // Sync elements across text layers
    document.getElementById('code-boxsizing').innerText = sizingValue;

    recalculateComputedDimensions();
}

function recalculateComputedDimensions() {
    let totalWidth = 250; // Base Content Width
    let explanationText = "";

    if (currentBoxSizing === 'content-box') {
        // In content-box, total width = explicit width + (padding * 2) + (border * 2)
        totalWidth = 250 + (currentPadding * 2) + (currentBorder * 2);
        explanationText = `(In content-box: 250px base width + ${currentPadding * 2}px padding + ${currentBorder * 2}px border = element breaks container layout to become ${totalWidth}px!)`;
    } else {
        // In border-box, total width remains equal to explicit layout width setting
        totalWidth = 250;
        explanationText = `(In border-box: Box stays strictly locked at 250px explicit width. Content automatically squeezes inside to make room for spacing!)`;
    }

    document.getElementById('math-display').innerText = totalWidth + "px";
    document.getElementById('math-explanation').innerText = explanationText;
}

// HTML form tag interactive game play js 
// Active Form Constraint Dictionary Management Tracker
let inputConstraints = {
    required: false,
    disabled: false,
    readOnly: false
};

function mutateInputType(newType, buttonElement) {
    const inputNode = document.getElementById('dynamicInput');
    const labelNode = document.getElementById('fieldLabel');
    if (!inputNode) return;

    // ⚡ Dynamically hot-swap the native HTML rendering layer attribute type
    inputNode.type = newType;

    // Adjust smart user label feedback strings based on selected matrices
    labelNode.innerText = `User Entry Node (type="${newType}"):`;
    document.getElementById('code-type').innerText = newType;

    // Handle quick dynamic placeholders overrides for a cleaner visual look
    if (newType === 'text') inputNode.placeholder = "Type something here...";
    else if (newType === 'password') inputNode.placeholder = "Enter hidden token...";
    else if (newType === 'file') inputNode.placeholder = "";

    // Toggle active state layout CSS classes
    const siblings = buttonElement.parentNode.querySelectorAll('.flex-btn');
    siblings.forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');
}

function toggleFormConstraint(constraintKey, isChecked) {
    const inputNode = document.getElementById('dynamicInput');
    if (!inputNode) return;

    // Update logical tracking system dictionary state
    inputConstraints[constraintKey] = isChecked;
    inputNode[constraintKey] = isChecked;

    // Trigger source code box generation update builder
    rebuildConstraintCodeboxHTML();
}

function rebuildConstraintCodeboxHTML() {
    let outputHTMLString = "";

    if (inputConstraints.required) outputHTMLString += " <span style='color: #ff5555;'>required</span>";
    if (inputConstraints.disabled) outputHTMLString += " <span style='color: #ff5555;'>disabled</span>";
    if (inputConstraints.readOnly) outputHTMLString += " <span style='color: #ff5555;'>readonly</span>";

    document.getElementById('code-constraints').innerHTML = outputHTMLString;
}

