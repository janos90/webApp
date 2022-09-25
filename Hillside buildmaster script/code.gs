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


    var uploadedDaylePDF
    var uploadedDayleHTML
    if(form['outsourcing-selection-prenail-dayles']) {
      var dayleContent = "";
      dayleContent+= "<style>.page-header {display:flex}"
      dayleContent+= ".wrapper {max-width: 900px;}"
      dayleContent+= ".quote-info-wrapper {display:flex;flex-wrap: wrap;}"
      dayleContent+= "label {margin: 5px;}</style>"
      dayleContent+= "<div class='wrapper'>"
      dayleContent+= "<header class='page-header' style = ''>"
      dayleContent+= "<img src='https://www.earthimpressions.co.nz/wp-content/uploads/2021/07/Logo_ITM.jpg' />"
      dayleContent+= "<h2>Prenail Estimate Request Sheet</h2></header>"
      dayleContent+= "<table class=''>"
      dayleContent+= "<tr><td>Client name:"+form['customer-info-name']+"</td><td>Job name:"+form['job-info-address']+" </td></tr>"
      dayleContent+= "<tr><td>Site Address: </td><td>Branch: </td></tr>"
      dayleContent+= "<tr><td>Received By:</td><td>Sales Person/Rep</td></tr>"
      dayleContent+= "<tr><td>Date Received:</td><td>Date Required:</td></tr>"
      dayleContent+= "<tr><td>Builder:</td><td>Email:</td></tr>"
      dayleContent+= "<tr><td>Quote reference:</td></tr></table>"
      dayleContent+= "<div><label>Prenail Frames</label> <br />"
      dayleContent+= "<label>Bottom Plates</label> <br />"
      dayleContent+= "<label>Trusses / Balance of Roof / Cut Roof</label> <br />"
      dayleContent+= "<label>Chimney framing</label> <br />"
      dayleContent+= "<label>LVL Beams</label> <br />"
      dayleContent+= "<label>Glulam Beams </label> <br />"
      dayleContent+= "<label>Porch Posts</label> <br />"
      dayleContent+= "<label>Verandah Posts </label> <br />"
      dayleContent+= "<label>Enclosed balustrades interior</label> <br />"
      dayleContent+= "<label>Enclosed balustrades exterior</label> <br />"
      dayleContent+= "<label>Hip Boards</label> <br />"
      dayleContent+= "<label>Verandah/Porch Beams - Exposed				</label> <br />"
      dayleContent+= "<label>Beams in Soffit space</label> <br />"
      dayleContent+= "<label>Metal Strap Bracing</label> <br />"
      dayleContent+= "<label>Truss Bottom Chord Bracing - (Rondo) </label> <br />"
      dayleContent+= "<label>Sub Floors</label> <br />"
      dayleContent+= "<label>Flitch Beams </label> <br />"
      dayleContent+= "<label>Mid Floors</label> <br />"
      dayleContent+= "<label>Flitch Beams </label> <br />"
      dayleContent+= "</div></div>"
      var dayelBlob = Utilities.newBlob(dayleContent, "text/html", "text.html");
      var daylePdf = dayelBlob.getAs("application/pdf");
      uploadedDaylePDF = JobFolder.createFile(daylePdf).setName("pdf "+form['job-info-address']+".pdf");
      uploadedDayleHTML = JobFolder.createFile("html "+form['job-info-address']+".html", dayleContent, MimeType.HTML);
      uploadedDaylePDF.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
      uploadedDaylePDF.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      uploadedDayleHTML.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
      uploadedDayleHTML.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);


      var dayleOutput = "A new Job has been submitted by "+form['quote-info-sales-rep']+" For "+form['template-selection']
      dayleOutput += "<br /> Please see attatched included link to Request Sheet"
      dayleOutput += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedDayleHTML.getId() + "'>Link to form as HTML </a>";
      dayleOutput += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedDaylePDF.getId() + "'>Link to form as PDF </a>";
      sendEmail(form['dayle-test-email'], dayleOutput, detailingSubject) // email the additional
    }

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

    // Dayle output

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
       output += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedDayleHTML.getId() + "'>Link to Dayle Prenail as HTML </a>";
       output += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedDaylePDF.getId() + "'>Link to Dayle Prenail as PDF </a>";
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
