function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form');
}
function getIterator() {
  var id = "1lQeOvQ37idTJbYsL1atKgQdBF6gDhU36BayYBMt_3lA"
  var file = DriveApp.getFileById(id);
  var jobNumber = parseInt(file.getName(), 10);
  incrementIterator(jobNumber);
  return jobNumber
}
function incrementIterator(jobNumber) {
  var id = "1lQeOvQ37idTJbYsL1atKgQdBF6gDhU36BayYBMt_3lA"
  var file = DriveApp.getFileById(id)
  var current = jobNumber
  file.setName(jobNumber + 1)
}
function processForm(form) {
  try {
    var jobNumber = getIterator()
    var parentFolderId = "1RGijkmgEiyjAlZOnuEjtpO2HGC42Ut0M"
    var clientFolderName = form.cRep;
    var parentFolder = DriveApp.getFolderById(parentFolderId)
    var folder, folders = parentFolder.getFoldersByName(clientFolderName);
    if (folders.hasNext()) {folder = folders.next();} else {folder = parentFolder.createFolder(clientFolderName);}
    var JobFolder = folder.createFolder("jobNumber: " + jobNumber)

    var content = form.alterations;



    var blob = Utilities.newBlob(content, "text/html", "text.html");
    var pdf = blob.getAs("application/pdf");
    var uploadedPDF = JobFolder.createFile(pdf).setName("pdf "+form.jobName+".pdf");
    var uploadedHTML = JobFolder.createFile("html "+form.jobName+".html", content, MimeType.HTML);

    uploadedHTML.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
    uploadedHTML.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    uploadedPDF.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
    uploadedPDF.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);


    var uploadableFiles = []
    var uploadedFiles = []

    if(form.myFile1.name) {uploadableFiles.push(form.myFile1)}
    if(form.myFile2.name) {uploadableFiles.push(form.myFile2)}
    if(form.myFile2extra1.name) {uploadableFiles.push(form.myFile2extra1)}
    if(form.myFile2extra2.name) {uploadableFiles.push(form.myFile2extra2)}
    if(form.myFile2extra3.name) {uploadableFiles.push(form.myFile2extra3)}
    if(form.myFile2extra4.name) {uploadableFiles.push(form.myFile2extra4)}
    if(form.myFile3.name) {uploadableFiles.push(form.myFile3)}
    if(form.myFile4.name) {uploadableFiles.push(form.myFile4)}

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
        output += "<br> <a href='" + uploadedFiles[it].getUrl() + "'>Link to "+ uploadedFiles[it].getName() + "</a>";
      }
    }
    output += "<br> <a href='" + uploadedHTML.getUrl() + "'>Link to form as HTML </a>";
    output += "<br> <a href='" + uploadedPDF.getUrl() + "'>Link to form as PDF </a>";
    output += "<br> This is the job number "+ jobNumber;
    output += "<br> Job Client is "+ form.cClient;

    // email subjects
    var genericSubject = 'New job, number '+ jobNumber + ', has been submitted to the quotes portal by: ' + form.cRep + ' for client ' + form.cClient
    var detailingSubject = 'New job, number ' + jobNumber + ', issued for: '
    if(form.variable1)  {detailingSubject+= 'Truss Layout, PS1 only, '}
    if(form.variable2)  {detailingSubject+= 'Full Buildable Layouts, '}
    if(form.variable42) {detailingSubject+= 'Detailing, '}
    if(form.variable9)  {detailingSubject+= 'Trusses/Rafters, '}
    detailingSubject+= 'Uploaded by: ' + form.cRep + ', '
    detailingSubject+= 'For Client: ' + form.cClient + ', '

    if(form.variable1 || form.variable2 || form.variable42 || form.variable9) {
      sendEmail('colin@johanson.co.nz', content, output, detailingSubject) // email detailing
      sendEmail('skip@johanson.co.nz', content, output, detailingSubject) // email skip
    }
    if(form.emailTo){
      sendEmail(form.emailTo, content, output, detailingSubject) // email the additional
    }
    if(form.emailArie){
      sendEmail('arie.quantifier@gmail.com', content, output, detailingSubject) // email Arie
    }
    if(form.emailSkip){
      sendEmail('skip@johanson.co.nz', content, output, detailingSubject) // email Skip
    }


    sendEmail('Quotes@thomsonsitm.co.nz', content, output, detailingSubject) // email the quotes team


    return output
  } catch (error) {
  Logger.log(error.toString())
    return error.toString();
  }
}
function sendEmail(email, content, output, subject) {
  // GmailApp.sendEmail(
  //   email,
  //   subject,
  //   '',
  //   {
  //     htmlBody: output
  //   });
}
