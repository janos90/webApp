function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form');
}
function getIterator() {
  var id = "1lQeOvQ37idTJbYsL1atKgQdBF6gDhU36BayYBMt_3lA"
  var file = DriveApp.getFileById(id);
  return parseInt(file.getName(), 10)
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
    var valuesArray = [
      form.variable1,
      form.variable2,
      form.variable42,
      form.variable3,
      form.variable4,
      form.variable5,
      form.variable6,
      form.variable7,
      form.variable8,
      form.variable9,
      form.variable10,
      form.variable11,
      form.variable12,
      form.variable13,
      form.variable14,
      form.variable15,
      form.variable16,
      form.variable17,
      form.variable18,
      form.variable19,
      form.variable20,
      form.variable21,
      form.variable22,
      form.variable23,
      form.variable24,
      form.variable25,
      form.variable26,
      form.variable27,
      form.variable28,
      form.variable29,
      form.variable30,
      form.variable31,
      form.variable32,
      form.variable33,
      form.variable34,
      form.variable35,
      form.variable36,
      form.variable37
    ]
    var checkedArray = []
    for(var i = 0; i < valuesArray.length; i++) {
      if(valuesArray[i]) {
        checkedArray.push("checked")
      } else {
        checkedArray.push("")
      }
    }
    var location = []
    if(form.jobLocAuckland) {
        location.push("checked")
        location.push("")
    } else {
        location.push("")
        location.push("checked")
    }
    var content


    content += "<style type='text/css'>"
    content += "body {   text-align: -webkit-center;   background-color: #FFfFFF;   font-family: Sans-serif; }  form {   width:800px;  } .address {   Height: 60px;   width: 350px;   margin-left:15px;   word-break:break-all    } .wrapper {   display: flex;   flex-flow: row wrap;   font-weight: bold;   text-align: center;   } .header {   flex:1;   text-align: center;   min-width: 600px; } .main {   flex: 1; } .textbox {   /* float: right; */ } .row {   display: flex;   flex-flow: row wrap;   text-align: center;  "
    content +=" font-weight: normal;   font-size: 14;  } .checkboxContainer {   border: solid 3px black;   flex-flow: wrap;   width: 50%;   padding: 5px;  }  .checkboxContainerheader {   background-color: grey;   padding: 5px }  .fullWidthContainer {   border: solid 3px black;   flex-flow: wrap;   width: 100%;   padding: 5px; }  .pair {   display: flex;  }  .right {   float: right;  }  .uploadSection {   text-align: left; }  .large {   height: 90px;   width: 90%; }  .imagePair {   display: flex;  "
    content += "}  .imageContainer {   flex-flow: wrap;   width: 50%;   padding: 5px; } .uploadRow {   display: flex;   text-align: center;   font-weight: normal;   font-size: 14;  } </style> "



    content += "<form id='myForm' align='center' onsubmit='handleFormSubmit(this)'>  <div class='wrapper'><div class='main'>"
    content += "<div class='headingWrapper'><div class='imagePair'>  <p style='padding: 10px'><img src='https://www.thomsonsitm.co.nz/themes/ThomsonsITM/images/logo.png' style='background-color: #000000; padding: 20px;'><br><br>Thomsons Timbers Supplies Limited  </p>  <div class='checkboxContainer'>"
    content += "<p style='color: red; text-align: left; padding-left: 9px'>Office Use only:</p>"
    content += "<p>Frames/Trusses: <input class='textbox right' value='" + form.officeFrames + "' type='text' placeholder='Product' style='width: 60%;'></p>"
    content += "<p>Discount Group: <input class='textbox right' value='" + form.officeDiscount + "' type='text' placeholder='Product' style='width: 60%;'></p>"
    content += "<p>Reason: <input class='textbox right' value='" + form.officeReason + "' type='text' placeholder='Product' style='width: 60%;'></p>  </div></div>  </div>  <header><h3>Estimate Request</h3>  </header>  <div class='pair'><div class='checkboxContainer'>"

    content += "<header>Client</header><input class='textbox' required value='" + form.cClient + "' type='text' placeholder='Client' > <input class='textbox' value='"
    content += form.cPhone + "' type='text' placeholder='Phone'> <input class='textbox' value='"
    content += form.cMobile + "' type='text' placeholder='Mobile'> <input class='textbox' required value='"
    content += form.cRep + "' type='text' placeholder='Rep'> <input class='textbox' value='"
    content += form.cDate + "' type='text' placeholder='Date'>   <p class='row'><textarea class='textbox address' name='cAddress' type='text' placeholder='Client Address'>"
    content += form.cAddress+ "</textarea></p> <p class='row'><input "
    content += location[0] + " type='checkbox'>Auckland Job</p>                 <p class='row'><input "
    content += location[1] + " type='checkbox'>Waikato Job</p>  			</div> 			<div class='checkboxContainer'> <header>Job</header> <input class='textbox' required value='"
    content += form.jobName + "' type='text' placeholder='Job Name'> <input class='textbox' value='"
    content += form.jobCompany + "' type='text' placeholder='Company/Branch Name'> <input class='textbox' value='"
    content += form.jobPrenail + "' type='text' placeholder='Est. Pre-nail Date'>  <p class='row'><textarea class='textbox address' required name='jobAddress' type='text' placeholder='Site Address'>"
    content += form.jobAddress + "</textarea></p>	</div> 		</div> 		<header> 			<h4 >Tick the items below required to be estimated</h4> 		</header> 		<div class='pair'>  			<div class='checkboxContainer'>  <p class='row'><input "
    content += checkedArray[0] + " type='checkbox'>Truss Layout, PS1 only</p> <p class='row'><input "
    content += checkedArray[1] + " type='checkbox'>Full Buildable Layouts</p>         <p class='row'><input "
    content += checkedArray[2] + " type='checkbox'>Detailing</p>         <p style='border:solid 1px black;'></p> <p class='row'><input "
    content += checkedArray[3] + " type='checkbox'>Steel Reinforcing</p> <p class='row'><input "
    content += checkedArray[4] + " type='checkbox'>Pre-Bent R/Steel</p> <p class='row'><input "
    content += checkedArray[5] + " type='checkbox'>Rib-raft</p> <p class='row'><input "
    content += checkedArray[6] + " type='checkbox'>Masonry</p> <p class='row'><input "
    content += checkedArray[7] + " type='checkbox'>Concrete</p> 			</div> 			<div class='checkboxContainer'> <p class='row'><input "
    content += checkedArray[8] + " type='checkbox'>Prenail</p> <p class='row'><input "
    content += checkedArray[9] + " type='checkbox'>Trusses/Rafters</p> <p class='row'><input "
    content += checkedArray[10] + " type='checkbox'>Roof Pack</p> <p class='row'><input "
    content += checkedArray[11] + " type='checkbox'>Random</p> <p class='row'><input "
    content += checkedArray[12] + " type='checkbox'>Sub-floor</p> <p class='row'><input "
    content += checkedArray[13] + " type='checkbox'>Mid-floor</p> <p class='row'><input "
    content += checkedArray[14] + " type='checkbox'>Deck</p> 			</div> 			<div class='checkboxContainer'> <p class='row'><input "
    content += checkedArray[15] + " type='checkbox'>Cladding</p> <p class='row'><input "
    content += checkedArray[16] + " type='checkbox'>Insulation Only</p> <p class='row'><input "
    content += checkedArray[17] + " type='checkbox'>Insulation Installed</p> <p class='row'><input "
    content += checkedArray[18] + " type='checkbox'>Plasterboard</p> <p class='row'><input "
    content += checkedArray[19] + " type='checkbox'>Plasterboard D.T.S</p> <p class='row'><input "
    content += checkedArray[20] + " type='checkbox'>Internal Linings</p> <p class='row'><input "
    content += checkedArray[21] + " type='checkbox'>Internal Doors</p> 			</div> 			<div class='checkboxContainer'> <p class='row'><input "
    content += checkedArray[22] + " type='checkbox'>Timber Fascia</p> 				<p class='row'><input "
    content += checkedArray[23] + " type='checkbox'>Marley Gutter / D.P</p> 				<p class='row'><input "
    content += checkedArray[24] + " type='checkbox'>Roofing</p> 				<p class='row'><input "
    content += checkedArray[25] + " type='checkbox'>Aluminium Joinery</p> 				<p class='row'><input "
    content += checkedArray[26] + " type='checkbox'>Pergola</p> 				<p class='row'><input "
    content += checkedArray[27] + " type='checkbox'>Retaining Wall</p> 				<p class='row'><input "
    content += checkedArray[28] + " type='checkbox'></p> 			</div> 		</div> 		<header> 			<h4 >Tick the building zones for this building</h4> 		</header>"

    content += "<div class='pair'>	<div class='checkboxContainer'>		Wind zone"

    content += "		<p class='row'><input class='wind' " + checkedArray[30] + " ' type='checkbox'>Low Wind</p>"
    content += "		<p class='row'><input class='wind' " + checkedArray[32] + " ' type='checkbox'>Medium Wind</p>"
    content += "		<p class='row'><input class='wind' " + checkedArray[34] + " ' type='checkbox'>High Wind</p>"
    content += "		<p class='row'><input class='wind' " + checkedArray[36] + " ' type='checkbox'>Very High Wind</p>"
    content += "		<p class='row'><input class='wind' " + checkedArray[37] + " ' type='checkbox'>Extra High Wind</p>"

    content += "	</div>	<div class='checkboxContainer'> 		Corrosion zone"

    content += "		<p class='row'><input class='corrosion' " + checkedArray[29] + " ' type='checkbox'>Corrosion Zone A: None</p>"
    content += "		<p class='row'><input class='corrosion' " + checkedArray[31] + " ' type='checkbox'>Corrosion Zone B: Low</p>"
    content += "		<p class='row'><input class='corrosion' " + checkedArray[33] + " ' type='checkbox'>Corrosion Zone C: Med</p>"
    content += "		<p class='row'><input class='corrosion' " + checkedArray[35] + " ' type='checkbox'>Corrosion Zone D: High</p>"

    content += "	</div></div>"

    content += "<header><h4 >Note Products required for the following:</h4> 		</header> 		<div class='pair'> 			<div class='fullWidthContainer'>"

    content += "<p>Interior Doors: <input class='textbox right' value='" + form.intDoor +     "' type='text' placeholder='Product' style='width: 80%;'></p>"
    content += "<p>Door Hardware:  <input class='textbox right' value='" + form.doorH +       "' type='text' placeholder='Product' style='width: 80%;'></p>"
    content += "<p>Scotia:         <input class='textbox right' value='" + form.scotia +      "' type='text' placeholder='Product' style='width: 80%;'></p>"
    content += "<p>Skirting:       <input class='textbox right' value='" + form.skirting +    "' type='text' placeholder='Product' style='width: 80%;'></p>"
    content += 	"<p>Architraves:   <input class='textbox right' value='" + form.architraves + "' type='text' placeholder='Product' style='width: 80%;'></p> 		</div> 		</div>"


    content += "<header><h4 >Note below alterations to plan supplied:</h4> 		</header> 		<div class='pair'> 			<div class='fullWidthContainer'> 				<p><textarea class='textbox large' type='text' placeholder='Alterations'>"
    content += form.alterations + "</textarea></p> 			</div> 		</div> 			<footer> 				<h2> PLEASE NOTE: ALL INFORMATION GIVEN ON THIS FORM SUPERCEDES THAT ON THE PLAN.</H2> 			</footer> 		</div> 	</div>  	<div class='uploadSection'> 		<br> 		<h3>Upload your plan files here. If you're not uploading a file, tick the box.</h3>"


    var blob = Utilities.newBlob(content, "text/html", "text.html");
    var pdf = blob.getAs("application/pdf");
    JobFolder.createFile("pdf"+form.jobName+".pdf", pdf, MimeType.PDF);
    var uploadedHTML = JobFolder.createFile("html "+form.jobName+".html", content, MimeType.HTML);
    uploadedHTML.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
    uploadedHTML.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    var uploadableFiles = []
    var uploadedFiles = []
    if(!form.myFile1checkbox){uploadableFiles.push(form.myFile1)}
    if(!form.myFile2checkbox){uploadableFiles.push(form.myFile2)}
    if(!form.myFile3checkbox){uploadableFiles.push(form.myFile3)}
    if(!form.myFile4checkbox){uploadableFiles.push(form.myFile4)}
    if(uploadableFiles.length) {
      for( var iter = 0; iter < uploadableFiles.length; iter++) {
        var file = uploadableFiles[iter]
        var uploadedFile = JobFolder.createFile(file);
        uploadedFile.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
        uploadedFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        uploadedFiles.push(uploadedFile);
      }
    }
    var output = "Job Submitted successfully, Below are your file Links"
    if(uploadedFiles.length) {
      for(var it = 0; it < uploadedFiles.length; it++) {
        output += "<br> <a href='" + uploadedFiles[it].getUrl() + "'>Link to "+ uploadedFiles[it].getName() + "</a>";
      }
    }
    output += "<br> <a href='" + uploadedHTML.getUrl() + "'>Link to form as HTML </a>";

    incrementIterator(jobNumber)
    output += "<br> This is the job number "+ jobNumber;

    var genericSubject = 'New job, number '+ jobNumber + ', has been submitted to the quotes portal by: ' + form.cRep + ' for client ' + form.cClient

    var detailingSubject = 'New job, number ' + jobNumber + ', issued for: '
    if(form.variable1){detailingSubject+= 'Truss Layout, PS1 only, '}
    if(form.variable2){detailingSubject+= 'Full Buildable Layouts, '}
    if(form.variable42){detailingSubject+= 'Detailing, '}
    if(form.variable9){detailingSubject+= 'Trusses/Rafters, '}
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
  GmailApp.sendEmail(
    email,
    subject,
    '',
    {
      htmlBody: output
    });
}
