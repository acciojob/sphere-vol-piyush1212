function volume_sphere() {
    // Retrieve the radius value entered by the user
    const radiusInput = document.getElementById('radius').value;

    // Convert the input to a floating-point number
    const radius = parseFloat(radiusInput);

    // Validate the input: Check if the input is a non-negative number
    if (!isNaN(radius) && radius >= 0) {
        // Calculate the volume of the sphere
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Display the calculated volume in the designated output field
        document.getElementById('volume').value = volume.toFixed(4); // Round to four decimal places
    } else {
        // If input is invalid, display 'NaN' in the result field
        document.getElementById('volume').value = 'NaN';
    }
}
