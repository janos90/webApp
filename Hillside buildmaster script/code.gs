function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form');
}
function getIterator() {
  var id = "1_eZ_VWcwVbo3wCjL2UJiXjQRxyR8z4sZ06mwCZiNCLc"
  var file = DriveApp.getFileById(id);
  var jobNumber = parseInt(file.getName(), 10);
  return jobNumber
}
function incrementIterator(jobNumber) {
  var id = "1_eZ_VWcwVbo3wCjL2UJiXjQRxyR8z4sZ06mwCZiNCLc"
  var file = DriveApp.getFileById(id)
  file.setName(jobNumber + 1)
}
function processForm(form) {
  try {
    var jobNumber = getIterator()
    var parentFolderId = "1ZrbjfZe6Iol1yOmFPeDEwt53CscY4hOk"
    var clientFolderName = form['quote-info-sales-rep'];
    var parentFolder = DriveApp.getFolderById(parentFolderId)
    var folder, folders = parentFolder.getFoldersByName(clientFolderName);
    if (folders.hasNext()) {folder = folders.next();} else {folder = parentFolder.createFolder(clientFolderName);}
    var JobFolder = folder.createFolder("jobNumber: " + jobNumber)

    var content = "<p> this is just a test </p>"


    var blob = Utilities.newBlob(content, "text/html", "text.html");
    var pdf = blob.getAs("application/pdf");
    var uploadedPDF = JobFolder.createFile(pdf).setName("pdf "+form['job-info-address']+".pdf");
    var uploadedHTML = JobFolder.createFile("html "+form['job-info-address']+".html", content, MimeType.HTML);

    uploadedHTML.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
    uploadedHTML.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    uploadedPDF.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
    uploadedPDF.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    var uploadableFiles = []
    var uploadedFiles = []

    if(form.myFile1.name) {uploadableFiles.push(form.myFile1)}
    if(form.myFile2.name) {uploadableFiles.push(form.myFile2)}
    if(form.myFile3.name) {uploadableFiles.push(form.myFile3)}
    if(form.myFile4.name) {uploadableFiles.push(form.myFile4)}
    if(form.dwgFile.name) {uploadableFiles.push(form.dwgFile)}

    if(uploadableFiles.length) {
      for( var iter = 0; iter < uploadableFiles.length; iter++) {
        var file = uploadableFiles[iter]
        var uploadedFile = JobFolder.createFile(file);
        uploadedFile.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
        uploadedFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        uploadedFiles.push(uploadedFile);
      }
    }

    // Email body (output)
    var output = "Job Submitted successfully, Below are your file Links"
    if(uploadedFiles.length) {
      for(var it = 0; it < uploadedFiles.length; it++) {
        output += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedFiles[it].getId() + "'>Link to "+ uploadedFiles[it].getName() + "</a>";
      }
    }
    output += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedHTML.getId() + "'>Link to form as HTML </a>";
    output += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedPDF.getId() + "'>Link to form as PDF </a>";
    // output += "<br> <strong>PDF File is currently experiencing difficulties. Please download HTML file, open in new window, and print as PDF for pdf copy.</strong>"
    output += "<br> This is the job number "+ jobNumber;
    output += "<br> Job Client is "+ form.cClient;

    // email subjects
    var genericSubject = 'New job, number '+ jobNumber + ', has been submitted to the quotes portal by: ' + form.cRep + ' for client ' + form.cClient
    var detailingSubject = 'New job, number ' + jobNumber + ', issued for: '

    detailingSubject+= 'Uploaded by: ' + form['quote-info-sales-rep'] + ', '
    detailingSubject+= 'For Client: ' + form['customer-info-name'] + ', '

    var quotesOutput = "<br>This email was sent to: <br><ul>"

    // PreNail
    output += "<br> <h3>Prenail</h3>"

     if(form['outsourcing-selection-prenail-turangi']) {
       output += "<br>Sent to turangi for estimation"

     }
     if(form['outsourcing-selection-prenail-ntml']) {
       output += "<br>Sent to ntml for estimation"
     }
     if(form['outsourcing-selection-prenail-dayles']) {
       output += "<br>Sent to dayles for estimation"
     }


     // Reinforcing
     output += "<br> <h3>Reinforcing</h3>"
      if(form['outsourcing-selection-reinforcing-united-steel']) {
        output += "<br>Sent to united-steel for estimation"

      }
      if(form['outsourcing-selection-reinforcing-Summit']) {
        output += "<br>Sent to Summit for estimation"
      }
      if(form['outsourcing-selection-reinforcing-Wyatt']) {
        output += "<br>Sent to Wyatt for estimation"
      }


    if(form.emailTo){
      sendEmail(form.emailTo, output, detailingSubject) // email the additional
      quotesOutput += "<li>Additional "+form.emailTo+"</li>"
    }

    quotesOutput += "</ul> <br>" + output

    incrementIterator(jobNumber);
    return output

  } catch (error) {
    Logger.log(error.toString())
    sendEmail("thekingliveson@gmail.com", error.toString()+' '+error ,'hillside errors')
    return error.toString();
  }
}

function sendEmail(email, output, subject) {
  GmailApp.sendEmail(
    email,
    subject,
    '',
    {
      htmlBody: output
    });
}
