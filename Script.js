function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form');
}
function getIterator() {
  var id = "1fY-mHXQIxqW9l4sqFp2rogfd_-xD8WJNsHh7jc_phYc"
  var file = DriveApp.getFileById(id);
  return parseInt(file.getName(), 10)
}
function incrementIterator(jobNumber) {
  var id = "1fY-mHXQIxqW9l4sqFp2rogfd_-xD8WJNsHh7jc_phYc"
  var file = DriveApp.getFileById(id)
  var current = jobNumber
  file.setName(jobNumber + 1)
}
function processForm(form) {
  try {
    var jobNumber = getIterator()
    var parentFolderId = "164tjlvUV_j_70zOorp9schQER60r767M"
    var clientFolderName = form.cRep;
    var parentFolder = DriveApp.getFolderById(parentFolderId)
    var folder, folders = parentFolder.getFoldersByName(clientFolderName);
    if (folders.hasNext()) {folder = folders.next();} else {folder = parentFolder.createFolder(clientFolderName);}
    var JobFolder = folder.createFolder("jobNumber: " + jobNumber)
    var valuesArray = [
      form.variable1, // Truss Layout, PS1 only
      form.variable2, // Full Buildable Layouts
      form.variable3, // Steel Reinforcing
      form.variable4, // Pre-Bent R/Steel
      form.variable5, // Rib-raft
      form.variable6, // Masonary
      form.variable7, // Concrete
      form.variable8, // Prenail
      form.variable9, // Trusses/Rafters
      form.variable10, // Roof Pack
      form.variable11, // Random
      form.variable12, // Sub-floor
      form.variable13, // Mid-floor
      form.variable14, // Deck
      form.variable15, // Cladding
      form.variable16, // Insulation Only
      form.variable17, // Insulation Installed
      form.variable18, // Plasterboard
      form.variable19, // Plasterboard D.T.S
      form.variable20, // Internal Linings
      form.variable21, // Internal Doors
      form.variable22, // Timber Fascia
      form.variable23, // Marley Gutter / D.P
      form.variable24, // Roofing
      form.variable25, // Aluminium Joinery
      form.variable26, // Pergola
      form.variable27, // Retaining Wall
      form.variable28, // empty
      form.variable29,
      form.variable30,
      form.variable31,
      form.variable32,
      form.variable33,
      form.variable34,
      form.variable35,
      form.variable36,
      form.variable37,
      form.variable38,
      form.variable39,
      form.variable40,
      form.variable41,
      form.variable42,  // detailing
    ]
    var checkedArray = []
    for(var i = 0; i < valuesArray.length; i++) {
      if(valuesArray[i]) {
        checkedArray.push("checked")
      } else {
        checkedArray.push("")
      }
    }
    var content = "<!doctype html><style type='text/css'>body { background-color: #FFfFFF;    font-family: Sans-serif;}.wrapper { display: flex; flex-flow: row wrap; font-weight: bold; text-align: center;}.header { flex:1; text-align: center; min-width: 600px;}.main { flex: 1;}.textbox { /* float: right; */}.row { display: flex; flex-flow: row wrap; text-align: center; font-weight: normal; font-size: 14;}.checkboxContainer { border: solid 3px black; flex-flow: wrap; width: 50%; padding: 5px;}.checkboxContainerheader { background-color: grey; padding: 5px}.fullWidthContainer { border: solid 3px black; flex-flow: wrap; width: 100%; padding: 5px;}.pair { display: flex;}.right { float: right;}.uploadSection { text-align: left;}.large { height: 90px; width: 90%;}</style>"
    content += "<div align='center'> <p><img src='http://www.thebuildingsoftwareco.com/images/TBSC-cropped.png'></p> <table width='800' border='0'>  <tbody> <tr> <td width='462'><div align='center'> <hr> </div> <form id='myForm' align='center'> <div class='wrapper'>  <div class='main'>   <header>  <h3>Estimate Request</h3>   </header>   <div class='pair'>  <div class='checkboxContainer'>  <header>Client</header>  <input class='textbox' name='cClient' value='" + form.cClient +"' type='text' placeholder='Client'>  <input class='textbox' name='cAddress'  value='" + form.cAddress +"'  type='text' placeholder='Address'>  <input class='textbox' name='cPhone' value='" + form.cPhone
    content += "' type='text' placeholder='Phone'>  <input class='textbox' name='cMobile' value='" + form.cMobile +"' type='text' placeholder='Mobile'>  <input class='textbox' name='cRep' value='" + form.cRep +"' type='text' placeholder='Rep'>  <input class='textbox' name='cDate' value='" + form.cDate +"' type='text' placeholder='Date'>   </div>   <div class='checkboxContainer'>  <header>Job</header>  <input class='textbox' name='jobName'  value='" + form.jobName +"' type='text' placeholder='Job Name'>  <input class='textbox' name='jobAddress'  value='" + form.jobAddress +"'  type='text' placeholder='Site Address'>  <input class='textbox' name='jobCompany'  value='" + form.jobCompany +"'  type='text' placeholder='Company/Branch Name'>  <input class='textbox' name='jobPrenail'  value='" + form.jobPrenail +"'  type='text' placeholder='Est. Pre-nail Date'><input class='textbox' value='"+ jobNumber +"' disabled name='jobNumber' type='text'></div>  </div>"
    content += "<header><h4 >Tick the items below required to be estimated</h4>  </header>  <div class='pair'>   <div class='checkboxContainer'>  <p class='row'><input " + checkedArray[1] + " type='checkbox'>Truss Layout, PS1 only</p>  <p class='row'><input " + checkedArray[2] + " type='checkbox'>Full Buildable Layouts</p>  <p class='row'><input " + checkedArray[3] + " type='checkbox'>Steel Reinforcing</p>  <p class='row'><input " + checkedArray[4] + " type='checkbox'>Pre-Bent R/Steel</p>  <p class='row'><input " + checkedArray[5] + " type='checkbox'>Rib-raft</p>  <p class='row'><input " + checkedArray[6] + " type='checkbox'>Masonary</p>  <p class='row'><input " + checkedArray[7] + " type='checkbox'>Concrete</p>   </div>   <div class='checkboxContainer'>  <p class='row'><input " + checkedArray[8] + " type='checkbox'>Prenail</p>  <p class='row'><input " + checkedArray[9] + " type='checkbox'>Trusses/Rafters</p>  <p class='row'><input " + checkedArray[10] + " type='checkbox'>Roof Pack</p>  <p class='row'><input " + checkedArray[11] + " type='checkbox'>Random</p>  <p class='row'><input " + checkedArray[12] + " type='checkbox'>Sub-floor</p>  <p class='row'><input " + checkedArray[13] + " type='checkbox'>Mid-floor</p>  <p class='row'><input " + checkedArray[14] + " type='checkbox'>Deck</p>   </div>   <div class='checkboxContainer'>  <p class='row'><input " + checkedArray[15] + " type='checkbox'>Cladding</p>  <p class='row'><input " + checkedArray[16] + " type='checkbox'>Insulation Only</p>  <p class='row'><input " + checkedArray[17] + " type='checkbox'>Insulation Installed</p>  <p class='row'><input " + checkedArray[18] + " type='checkbox'>Plasterboard</p>  <p class='row'><input " + checkedArray[19] + " type='checkbox'>Plasterboard D.T.S</p>  <p class='row'><input " + checkedArray[20] + " type='checkbox'>Internal Linings</p>  <p class='row'><input " + checkedArray[21] + " type='checkbox'>Internal Doors</p>   </div>   <div class='checkboxContainer'>  <p class='row'><input " + checkedArray[22] + " type='checkbox'>Timber Fascia</p>  <p class='row'><input " + checkedArray[23] + " type='checkbox'>Marley Gutter / D.P</p>  <p class='row'><input " + checkedArray[24] + " type='checkbox'>Roofing</p>  <p class='row'><input " + checkedArray[25] + " type='checkbox'>Aluminium Joinery</p>  <p class='row'><input " + checkedArray[26] + " type='checkbox'>Pergola</p>  <p class='row'><input " + checkedArray[27] + " type='checkbox'>Retaining Wall</p>  <p class='row'><input " + checkedArray[28] + " type='checkbox'></p>   </div>  </div>"
    content += "<header><h4 >Tick the building zones for this building</h4>  </header>  <div class='pair'>       <div class='checkboxContainer'>  <p class='row'><input " + checkedArray[29] + "type='checkbox'>Corrosion Zone A: None</p>  <p class='row'><input " + checkedArray[30] + " type='checkbox'>Low Wind</p>   </div>       <div class='checkboxContainer'>  <p class='row'><input " + checkedArray[31] + " type='checkbox'>Corrosion Zone B: Low</p>  <p class='row'><input " + checkedArray[32] + " type='checkbox'>Medium Wind</p>   </div>       <div class='checkboxContainer'>  <p class='row'><input " + checkedArray[33] + " type='checkbox'>Corrosion Zone C: Med</p>  <p class='row'><input " + checkedArray[34] + " type='checkbox'>High Wind</p>   </div>       <div class='checkboxContainer'>  <p class='row'><input " + checkedArray[35] + " type='checkbox'>Corrosion Zone D: High</p>  <p class='row'><input " + checkedArray[36] + " type='checkbox'>Very High Wind</p>   </div>  </div>"
    content += "<header><h4 >Note Products required for the following:</h4>  </header>  <div class='pair'>   <div class='fullWidthContainer'>   <p>Interior Doors: <input class='textbox right' value='" + form.intDoor + "' type='text' placeholder='Product' style='width: 80%;'></p>   <p>Door Hardware:  <input class='textbox right' value='" + form.doorH + "' type='text' placeholder='Product' style='width: 80%;'></p><p>Scotia: <input class='textbox right' value='" + form.scotia + "' type='text' placeholder='Product' style='width: 80%;'></p>   <p>Frames: <input class='textbox right' value='" + form.frames + form.emailBen + "' type='text' placeholder='Product' style='width: 80%;'></p>  </div>  </div>"
    content += "<header><h4 >Note below alterations to plan supplied:</h4>  </header>  <div class='pair'>   <div class='fullWidthContainer'>  <p><input class='textbox large' value='" + form.alterations + "' type='text' placeholder='Product'></p>   </div>  </div>   <footer>  <h2> PLEASE NOTE: ALL INFORMATION GIVEN ON THIS FORM SUPERCEDES THAT ON THE PLAN.</H2>   </footer>  </div> </div>"
    content += "<div class='uploadSection'>  <br>  <h3>Upload your plan files here</h3>  <input name='' type='file' name='myFile4'><br> </div> <br> <input name='' type='submit' value='Submit form and uplaod' onclick='this.value='Uploading..'; google.script.run.withSuccessHandler(fileUploaded) .uploadFiles(this.parentNode); return false;'> </form> <div id='output'></div> <script> function fileUploaded(status) { .getElementById('myForm').style.display = 'none'; document.getElementById('output').innerHTML = status; } </script> <hr></td> </tr>  </tbody> </table> <h3>&nbsp;</h3> <p>&nbsp;</p></div>"
    var blob = Utilities.newBlob(content, "text/html", "text.html");
    var pdf = blob.getAs("application/pdf");
    JobFolder.createFile("pdf " + form.jobName+".pdf",pdf, MimeType.PDF);
    JobFolder.createFile("html "+form.jobName+".html", content, MimeType.HTML);
    var uploadableFiles = []
    var uploadedFiles = []
    if(form.myFile1.value != 0){uploadableFiles.push(form.myFile1)}
    if(form.myFile2.value != 0){uploadableFiles.push(form.myFile2)}
    if(form.myFile3.value != 0){uploadableFiles.push(form.myFile3)}
    if(form.myFile4.value != 0){uploadableFiles.push(form.myFile4)}
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
    return output + "<br> This is the job number "+ jobNumber;
  } catch (error) {
  Logger.log(error.toString())
    return error.toString();
  }
}
