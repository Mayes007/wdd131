document.addEventListener("DOMContentLoaded", function () {
    let participantCount = 1;
  
    document.getElementById("add").addEventListener("click", function () {
      participantCount++;
      const participantSection = participantTemplate(participantCount);
      const addBtn = document.getElementById("add");
      addBtn.insertAdjacentHTML("beforebegin", participantSection);
    });
  
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
      event.preventDefault();
  
      const totalFees = calculateTotalFees();
      const adultName = document.getElementById("adult_name").value;
  
      document.querySelector("form").style.display = "none";
      document.getElementById("summary").style.display = "block";
      document.getElementById("summary").innerHTML = successTemplate({
        name: adultName,
        participantCount: participantCount,
        totalFees: totalFees
      });
    });
  
    function calculateTotalFees() {
      let feeElements = document.querySelectorAll("[id^=fee]");
      feeElements = [...feeElements];
      const total = feeElements.reduce((sum, element) => sum + parseFloat(element.value || 0), 0);
      return total;
    }
  
    function successTemplate(info) {
      return `
        <h2>Thank you ${info.name} for registering.</h2>
        <p>You have registered ${info.participantCount} participants and owe $${
  