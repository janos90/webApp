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
      form.variable36
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

    content+= "<style type='text/css'> body {     text-align: -webkit-center; 	background-color: #FFfFFF;     font-family: Sans-serif; }  form { width:800px;  }  .wrapper { 	display: flex; 	flex-flow: row wrap; 	font-weight: bold; 	text-align: center;   } .header { 	flex:1; 	text-align: center; 	min-width: 600px; } .main { 	flex: 1; } .textbox { 	/* float: right; */ } .row { 	display: flex; 	flex-flow: row wrap; 	text-align: center; 	font-weight: normal; 	font-size: 14;  } .checkboxContainer { 	border: solid 3px black; 	flex-flow: wrap; 	width: 50%; 	padding: 5px;  }  .checkboxContainerheader { 	background-color: grey; 	padding: 5px }  .fullWidthContainer { 	border: solid 3px black; 	flex-flow: wrap; 	width: 100%; 	padding: 5px; }  .pair { 	display: flex;  }  .right { 	float: right;  }  .uploadSection { 	text-align: left; }  .large { 	height: 90px; 	width: 90%; }   </style> "
    content += "<div align='center'> 	<p><img src='https://www.thomsonsitm.co.nz/themes/ThomsonsITM/images/logo.png' style='background-color: #000000; padding: 30px;'></p> </div> <form id='myForm' align='center' onsubmit='handleFormSubmit(this)'> 	<div class='wrapper'> 		<div class='main'> 			<header> 				<h3>Estimate Request</h3> 			</header>  			<div class='pair'> 				<div class='checkboxContainer'> 					<header>Client</header> 				<input class='textbox' required value='"
    content += form.cClient + "' type='text' placeholder='Client' > 				<input class='textbox' value='"
    content += form.cAddress + "' type='text' placeholder='Address'> 				<input class='textbox' value='"
    content += form.cPhone + "' type='text' placeholder='Phone'> 				<input class='textbox' value='"
    content += form.cMobile + "' type='text' placeholder='Mobile'> 				<input class='textbox' required value='"
    content += form.cRep + "' type='text' placeholder='Rep'> 				<input class='textbox' value='"
    content += form.cDate + "' type='text' placeholder='Date'>                 <p class='row'><input "
    content += location[0] + " type='checkbox'>Auckland Job</p>                 <p class='row'><input "
    content += location[1] + " type='checkbox'>Waikato Job</p>  			</div> 			<div class='checkboxContainer'> 				<header>Job</header> 				<input class='textbox' required value='"
    content += form.jobName + "' type='text' placeholder='Job Name'> 				<input class='textbox' required value='"
    content += form.jobAddress + "' type='text' placeholder='Site Address'> 				<input class='textbox' value='"
    content += form.jobCompany + "' type='text' placeholder='Company/Branch Name'> 				<input class='textbox' value='"
    content += form.jobPrenail + "' type='text' placeholder='Est. Pre-nail Date'>  			</div> 		</div> 		<header> 			<h4 >Tick the items below required to be estimated</h4> 		</header> 		<div class='pair'>  			<div class='checkboxContainer'>  				<p class='row'><input "
    content += checkedArray[0] + " type='checkbox'>Truss Layout, PS1 only</p> 				<p class='row'><input "
    content += checkedArray[1] + " type='checkbox'>Full Buildable Layouts</p>         <p class='row'><input "
    content += checkedArray[2] + " type='checkbox'>Detailing</p>         <p style='border:solid 1px black;'></p> 				<p class='row'><input "
    content += checkedArray[3] + " type='checkbox'>Steel Reinforcing</p> 				<p class='row'><input "
    content += checkedArray[4] + " type='checkbox'>Pre-Bent R/Steel</p> 				<p class='row'><input "
    content += checkedArray[5] + " type='checkbox'>Rib-raft</p> 				<p class='row'><input "
    content += checkedArray[6] + " type='checkbox'>Masonary</p> 				<p class='row'><input "
    content += checkedArray[7] + " type='checkbox'>Concrete</p> 			</div> 			<div class='checkboxContainer'> 				<p class='row'><input "
    content += checkedArray[8] + " type='checkbox'>Prenail</p> 				<p class='row'><input "
    content += checkedArray[9] + " type='checkbox'>Trusses/Rafters</p> 				<p class='row'><input "
    content += checkedArray[10] + " type='checkbox'>Roof Pack</p> 				<p class='row'><input "
    content += checkedArray[11] + " type='checkbox'>Random</p> 				<p class='row'><input "
    content += checkedArray[12] + " type='checkbox'>Sub-floor</p> 				<p class='row'><input "
    content += checkedArray[13] + " type='checkbox'>Mid-floor</p> 				<p class='row'><input "
    content += checkedArray[14] + " type='checkbox'>Deck</p> 			</div> 			<div class='checkboxContainer'> 				<p class='row'><input "
    content += checkedArray[15] + " type='checkbox'>Cladding</p> 				<p class='row'><input "
    content += checkedArray[16] + " type='checkbox'>Insulation Only</p> 				<p class='row'><input "
    content += checkedArray[17] + " type='checkbox'>Insulation Installed</p> 				<p class='row'><input "
    content += checkedArray[18] + " type='checkbox'>Plasterboard</p> 				<p class='row'><input "
    content += checkedArray[19] + " type='checkbox'>Plasterboard D.T.S</p> 				<p class='row'><input "
    content += checkedArray[20] + " type='checkbox'>Internal Linings</p> 				<p class='row'><input "
    content += checkedArray[21] + " type='checkbox'>Internal Doors</p> 			</div> 			<div class='checkboxContainer'> 				<p class='row'><input "
    content += checkedArray[22] + " type='checkbox'>Timber Fascia</p> 				<p class='row'><input "
    content += checkedArray[23] + " type='checkbox'>Marley Gutter / D.P</p> 				<p class='row'><input "
    content += checkedArray[24] + " type='checkbox'>Roofing</p> 				<p class='row'><input "
    content += checkedArray[25] + " type='checkbox'>Aluminium Joinery</p> 				<p class='row'><input "
    content += checkedArray[26] + " type='checkbox'>Pergola</p> 				<p class='row'><input "
    content += checkedArray[27] + " type='checkbox'>Retaining Wall</p> 				<p class='row'><input "
    content += checkedArray[28] + " type='checkbox'></p> 			</div> 		</div> 		<header> 			<h4 >Tick the building zones for this building</h4> 		</header> 		<div class='pair'>  			<div class='checkboxContainer'>  				<p class='row'><input class='corrosion' "
    content += checkedArray[29] + " type='checkbox'>Corrosion Zone A: None</p> 				<p class='row'><input class='wind' "
    content += checkedArray[30] + " type='checkbox'>Low Wind</p>  			</div> 			<div class='checkboxContainer'> 				<p class='row'><input class='corrosion' "
    content += checkedArray[31] + " type='checkbox'>Corrosion Zone B: Low</p> 				<p class='row'><input class='wind' "
    content += checkedArray[32] + " type='checkbox'>Medium Wind</p>  			</div> 			<div class='checkboxContainer'> 				<p class='row'><input class='corrosion' "
    content += checkedArray[33] + " type='checkbox'>Corrosion Zone C: Med</p> 				<p class='row'><input class='wind' "
    content += checkedArray[34] + " type='checkbox'>High Wind</p>  			</div> 			<div class='checkboxContainer'> 				<p class='row'><input class='corrosion' "
    content += checkedArray[35] + " type='checkbox'>Corrosion Zone D: High</p> 				<p class='row'><input class='wind' "
    content += checkedArray[36] + " type='checkbox'>Very High Wind</p>  			</div> 		</div> 		<header> 			<h4 >Note Products required for the following:</h4> 		</header> 		<div class='pair'> 			<div class='fullWidthContainer'> 			<p>Interior Doors: <input class='textbox right' "
    content += form.intDoor + "' type='text' placeholder='Product' style='width: 80%;'></p> 			<p>Door Hardware:  <input class='textbox right' value='"
    content += form.doorH + "' type='text' placeholder='Product' style='width: 80%;'></p> 			<p>Scotia:         <input class='textbox right' value='"
    content += form.scotia + "' type='text' placeholder='Product' style='width: 80%;'></p> 			<p>Frames:         <input class='textbox right' value='"
    content += form.frames + "' type='text' placeholder='Product' style='width: 80%;'></p> 		</div> 		</div>       		<header> 			<h4 >Note below alterations to plan supplied:</h4> 		</header> 		<div class='pair'> 			<div class='fullWidthContainer'> 				<p><input class='textbox large' value='"
    content += form.alterations + "' type='text' placeholder='Product'></p> 			</div> 		</div> 			<footer> 				<h2> PLEASE NOTE: ALL INFORMATION GIVEN ON THIS FORM SUPERCEDES THAT ON THE PLAN.</H2> 			</footer> 		</div> 	</div>  	<div class='uploadSection'> 		<br> 		<h3>Upload your plan files here. If you're not uploading a file, tick the box.</h3> 		<p>Plans: <input type='file' value='"


    var blob = Utilities.newBlob(content, "text/html", "text.html");
    var pdf = blob.getAs("application/pdf");
    JobFolder.createFile("pdf"+form.jobName+".pdf", pdf, MimeType.PDF);
    JobFolder.createFile("html "+form.jobName+".html", content, MimeType.HTML);
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
    var output = "Job Submitted successfully, Bellow are your file Links"
    if(uploadedFiles.length) {
      for(var it = 0; it < uploadedFiles.length; it++) {
        output += "<br> <a href='" + uploadedFiles[it].getUrl() + "'>Link to "+ uploadedFiles[it].getName() + "</a>";
      }
    }
    incrementIterator(jobNumber)
    output += "<br> This is the job number "+ jobNumber;
    if(form.variable1 || form.variable2 || form.variable42 || form.variable9) { //email detailing
      sendEmail(content)
    } else { // email Arie

    }

    return output
  } catch (error) {
  Logger.log(error.toString())
    return error.toString();
  }
}
function sendEmail(output) {
  GmailApp.sendEmail(
    'thekingliveson@gmail.com',
    'A new job has been submitted',
    '',
    {
      htmlBody: output
    });
}
