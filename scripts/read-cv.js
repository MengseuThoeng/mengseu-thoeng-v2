const mammoth = require("mammoth");
const fs = require("fs");
const path = require("path");

const cvPath = path.join(__dirname, "..", "CV - Spring Microservices.docx");

mammoth.extractRawText({ path: cvPath })
  .then((result) => {
    console.log(result.value);
  })
  .catch((error) => {
    console.error("Error reading CV:", error);
  });
