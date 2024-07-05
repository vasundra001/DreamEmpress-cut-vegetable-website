function checkAvailability(dish) {
    const availabilityId = `availability-${dish.toLowerCase().replace(' ', '')}`;
    const availabilityElement = document.getElementById(availabilityId);
    // For simplicity, we'll just show a message. In a real application, this would involve an API call.
    availabilityElement.textContent = "All items are currently available!";
    availabilityElement.classList.remove('hidden');
}
