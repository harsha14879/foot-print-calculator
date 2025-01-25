document.getElementById('carbonForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get input values
  const transportation = document.getElementById('transportation').value;
  const energy = document.getElementById('energy').value;
  const diet = document.getElementById('diet').value;

  if (transportation && energy && diet) {
    const carbonFootprint = calculateCarbonFootprint(transportation, energy, diet);
    document.getElementById('result').innerHTML = `
      <h3>Your estimated carbon footprint is:</h3>
      <p><strong>${carbonFootprint} kg CO2 per week</strong></p>
    `;
  } else {
    document.getElementById('result').innerHTML = `
      <p>Please fill in all fields.</p>
    `;
  }
});

// Function to calculate carbon footprint
function calculateCarbonFootprint(transportation, energy, diet) {
  const transportationEmission = transportation * 0.125; // Example: 0.125 kg CO2 per km
  const energyEmission = energy * 0.233; // Example: 0.233 kg CO2 per kWh
  const dietEmission = getDietEmission(diet);

  // Total carbon footprint
  const totalFootprint = transportationEmission + energyEmission + dietEmission;
  return totalFootprint.toFixed(2);
}

// Function to calculate emission based on diet
function getDietEmission(diet) {
  switch (diet) {
    case '1': // Low impact diet
      return 5; // Example: 5 kg CO2 per week
    case '2': // Medium impact diet
      return 10; // Example: 10 kg CO2 per week
    case '3': // High impact diet
      return 15; // Example: 15 kg CO2 per week
    default:
      return 0;
  }
}