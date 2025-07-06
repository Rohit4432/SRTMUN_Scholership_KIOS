const qnaDB = {
  "aaple sarkar dbt": "Aaple Sarkar DBT is a portal by Maharashtra government for direct transfer of scheme benefits to bank accounts.",
  "who can apply": "Any Indian citizen who meets the scheme criteria can apply.",
  "otp validity": "OTP is usually valid for 10 minutes.",
  "deadline": "The application deadline varies for each scheme. Check the portal regularly.",
  "eligibility": "Eligibility depends on the scheme. Use the eligibility checker on the portal.",
  "apply": "Visit the official portal, log in, and fill the online application form.",
  "contact": "You can contact the scholarship office via their helpline or email provided on the website.",
  "fees": "There is no fee to apply for most government scholarships.",
  "documents": "Usually Aadhaar card, income certificate, caste certificate, mark sheets, etc. are required.",
  "aadhaar based dbt benefit": "It ensures quick and direct benefit transfer to your bank account.",
  "uidai rejection": "Update your details at the nearest Aadhaar center if rejected.",
  "aadhaar letter time": "Usually within 90 days after enrollment.",
  "register change mobile": "Visit Aadhaar center or use the mAadhaar app.",
  "aadhaar for dbt": "Yes, it is mandatory for DBT in most cases.",
  "multiple accounts": "Only one bank account should be linked with Aadhaar for DBT.",
  "offshore banking": "Offshore banking means banking services outside your home country.",
  "aadhaar schemes": "Aadhaar links multiple schemes and helps prevent duplication.",
  "correction aadhaar details": "Update via UIDAI portal or Aadhaar center.",
  "aadhaar bank account consent": "Consent is required to link Aadhaar with bank account.",
  "aadhaar vs normal bank account": "Aadhaar-linked accounts get DBT benefits directly.",
  "aadhaar linked multiple payments": "Only one payment per scheme is allowed per Aadhaar.",
  "aadhaar vs other id": "Aadhaar is biometric-based and more secure.",
  "check eligibility": "Check on the official portal under 'Check Eligibility'.",
  "accepted formats": "JPEG, PNG, and PDF are commonly accepted formats.",
  "max file size": "Usually 200KB–1MB depending on the portal.",
  "merit scholarships": "Students with high academic performance are eligible.",
  "check status": "Log in to your portal dashboard and click 'Check Status'.",
  "edit after submission": "Most portals do not allow edit after final submission.",
  "store draft": "Yes, you can save your form as draft before submission.",
  "funds credited": "Check your bank account or application status.",
  "second post graduate course": "No.",
  "ssc hsc dropdown missing": "Contact your college or portal admin.",
  "college course missing": "Select 'Others' or contact the helpdesk.",
  "forgot username": "Use 'Forgot Username' option on login page.",
  "partially completed courses": "You may need to provide valid discontinuation proof.",
  "change mobile number": "Before taking admission in a new college, the student should request the principal of the previous college (from where they completed their earlier education) to log in through the principal login. Then, using the Reset Mobile Number option, the mobile number can be updated.",
  "non professional after professional": "Some schemes don’t allow this transition."
};

document.querySelectorAll(".kiosk-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type.toLowerCase().trim();
    const answer = qnaDB[type] || "Answer not found.";
    const answerBox = btn.nextElementSibling;

    const isAlreadyVisible = answerBox.style.display === "block";

    // Hide all answers first
    document.querySelectorAll(".answer-box").forEach((box) => {
      box.style.display = "none";
      box.innerHTML = "";
    });

    // Show clicked one only if it wasn't already open
    if (!isAlreadyVisible) {
      answerBox.innerHTML = `<p>${answer}</p>`;
      answerBox.style.display = "block";
    }
  });
});
