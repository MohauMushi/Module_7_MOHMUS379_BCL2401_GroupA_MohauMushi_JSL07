# [JSL07]: Progress Certificate Generator

## Project Overview: Certificate Generation Web Application

The project aims was to develop a web application that allows users to input their name, a personalized message, and the course name, and then dynamically generates a certificate to be displayed in a modal window. The application will also include validation which ensure that all required fields are completed before generating the certificate. Additionally, users have an option to download the certificate in PDF format.

## Project Features
- **Input Fields:** For user's name, personalized message, and course name.
- **Generate Certificate:** A button that when clicked, creates the certificate.
- **Modal Display:** The certificate is shown in a modal window.
- **Close Button:** For closing the modal.
- **Validation:** Checks that all fields are completed before certificate generation.
- **Download Certificate Button:** Download the certificate to be in a pdf format.

## Development Objectives
- **Dynamic Content:** Dynamically generate the certificate's content based on user input, ensuring it matches the reference solution.
- **Modal Implementation:** Show the certificate in a modal upon form submission; the modal should initially be hidden.
- **Interaction Handling:** Enable modal display with form submission and allow closing with a close button. Ensure form inputs are cleared post-submission.

## 🛠️ Improvement
To the Certificate Content Modal, I've add the download button, using the `html2pdf` library, which has been placed at the bottom of the page inside the `</body>` tags for converting the HTML to pdf format so that the user may be able to download the certificate after generating the certificate. Also coded the JavaScript for the download Certificate button using `classList.add` and then created a function for converting the `innerHTML` to pdf format. 

## 📚 What I learned
I've learnt to getElementById for the HTML to the JavaScript, and be able to validate the input values that the user enter when the button is pressed to generate the certificate. Then the other thing is to display the certificate in the modal window using the `innerHTML` then implemented the HTML code for the content of the certificate which will be displayed. 
I also learnt to use the html2pdf Library to be able to download the achievement certificate and have the certificate in a pdf format in you desktop and be able to share your achievement certificate with clients, employers, etc. 
