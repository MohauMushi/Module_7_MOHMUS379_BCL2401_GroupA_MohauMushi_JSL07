document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');
  let studentName;


  // Add a download button
  const downloadButton = document.createElement('button');
  downloadButton.classList.add('download_certificate');
  downloadButton.textContent = 'Download Certificate';
  downloadButton.addEventListener('click', function () {
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

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
    e.preventDefault();

  // Get input values
  const studentNameInput = document.getElementById('studentName');
  const personalMessageInput = document.getElementById('personalMessage');
  const courseNameInput = document.getElementById('courseName');  

  studentName = studentNameInput.value;
  const personalMessage = personalMessageInput.value;
  const courseName = courseNameInput.value.trim() !== '' ? courseNameInput.value : '';

  //Checks that a valid student name was entered.
  if (/^[^a-zA-Z]*$/.test(studentName.trim())) {
    return alert(`Student's name must contain letters. \nPlease enter a valid name.`);
  } 
  
  if (studentName.trim() === '' || personalMessage.trim() === '') {
    alert('Please fill in all fields');
    return;
  }

  // Generate certificate content dynamically
  certificateContent.innerHTML = `
    <h1 style="font-weight:800;">Certificate of Achievement</h1>
    <p>This is to certify that</p>
    <h3 style="font-weight:700";>${studentName}</h3>
    <p>has almost completed the</p>
    <h4 style="font-weight:700">${courseName}</h4>
    <p>with legendary perseverance and world-class bad-assery for not giving up 🏆</p>
    <img src="./logo.png" style="max-width:50%"; alt="Codespace logo">
    <p>${personalMessage} 😻</p>
  `;

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
  });
});