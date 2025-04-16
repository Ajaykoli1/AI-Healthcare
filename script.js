function updateDay() {
    document.getElementById("dayCounter").innerText = document.getElementById("treatmentDay").value;
}

function generateTreatmentPlan() {
    let day = document.getElementById("treatmentDay").value;
    let symptoms = document.getElementById("currentSymptoms").value.toLowerCase();
    let treatments = {
        "Day 1": "General rest, hydration, and mild medication.",
        "Day 2": "Monitor symptoms, continue hydration, and take prescribed medication.",
        "Day 3": "Symptoms persist? Possible serious illness, suggest seeing a doctor.",
        "Day 4": "Urgent consultation required. Locate nearest doctor."
    };
    document.getElementById("treatmentResult").innerHTML = `<div class='alert alert-info'>${treatments[day]}</div>`;
}

function analyzeSymptoms() {
    let text = document.getElementById('symptoms').value;
    if (text.trim() === "") {
        alert("Please enter symptoms to analyze.");
        return;
    }
    alert("Analyzing symptoms and image... (Simulation)");
}
