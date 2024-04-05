document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');
  const downloadButton = document.createElement('button');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
    e.preventDefault();

  // Get input values
  const studentNameInput = document.getElementById('studentName');
  const personalMessageInput = document.getElementById('personalMessage');
  const courseNameInput = document.getElementById('courseName');  

  const studentName = studentNameInput.value;
  const personalMessage = personalMessageInput.value;
  const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

  if (studentName.trim() === '' || personalMessage.trim() === '') {
    alert('Please fill in all fields');
    return;
  }

  // Generate certificate content dynamically
  certificateContent.innerHTML = `
    <h2>Certificate of Achievement</h2>
    <p>This is to certify that</p>
    <h3>${studentName}</h3>
    <p>has almost completed the</p>
    <h4>${courseName}</h4>
    <p>with legendary perseverance and world-class bad-assery for not giving up 🏆</p>
    <img src="./logo.png" style="margin-top: 20px; height:100px; alt="Codespace barner">
    <p>${personalMessage} 😻</p>
  `;

  // Add a download button
  // const downloadButton = document.createElement('button');
  downloadButton.textContent = 'Download Certificate';
  downloadButton.addEventListener('click', function () {
  // const element = document.getElementById('certificateContent');
  const option = {
    margin: 0.5,
    filename: `${studentName}_certificate.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2},
    jsPDF: { unit: 'in', format: [10, 8], orientation: 'landscape'}
  };

  html2pdf().from(certificateContent).set(option).save();
});

  // Append the download button to the modal
  const modalContent = document.querySelector('.modal-content');
  modalContent.appendChild(downloadButton);
  
    //  Display the modal
    modal.style.display = 'block';

    // Clear the form inputs
    studentNameInput.value = '';
    personalMessageInput.value = '';
    if(courseNameInput) courseNameInput.value = '';
  });

  //  Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
    modal.removeChild(downloadButton);
  });
});