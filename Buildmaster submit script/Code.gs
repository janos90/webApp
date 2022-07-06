function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form');
}
function getIterator() {
  var id = "1lQeOvQ37idTJbYsL1atKgQdBF6gDhU36BayYBMt_3lA"
  var file = DriveApp.getFileById(id);
  var jobNumber = parseInt(file.getName(), 10);
  return jobNumber
}
function incrementIterator(jobNumber) {
  var id = "1lQeOvQ37idTJbYsL1atKgQdBF6gDhU36BayYBMt_3lA"
  var file = DriveApp.getFileById(id)
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
      form.variable0,
      form.variable1,
      form.variable2,
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
      // form.variable28,
      false,
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
      form.variable42,
      form.variable43,
      form.variable44,
      form.variable45
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

    // let emailSkipChecked = form.emailSkip? "checked" : ""
    // let emailVIPChecked = form.emailVIP? "checked" : ""
    if(form.emailSkip){
      var emailSkipChecked = 'checked'
    }
    if(form.emailVIP){
      var emailVIPChecked = 'checked'
    }

    var content


    content += "<head><style type='text/css'>"
    content += "body { text-align: -webkit-center; background-color: #FFfFFF; font-family: Sans-serif; }"
    content += ".firstCol { width: 20%; }"
    content += "form { width:800px; }"
    content += ".address { Height: 60px; width: 350px; margin-left:15px; word-break:break-all; }"
    content += ".wrapper { display: flex;      flex-flow: row wrap;      font-weight: bold;      text-align: center; }"
    content += ".header { flex:1;      text-align: center;      min-width: 600px; }"
    content += ".main { flex: 1; }"
    content += ".textbox {/* float: right;*/ }"
    content += ".row { display: flex; flex-flow: row wrap; text-align: center; font-weight: normal; font-size: 14; }"
    content += ".checkboxContainer { border: solid 3px black;      flex-flow: wrap;      width: 50%;      padding: 5px; }"
    content += ".checkboxContainer.extra { width: 60%; }"
    content += ".checkboxContainerheader { background-color: grey;      padding: 5px    }"
    content += ".fullWidthContainer { border: solid 3px black;      flex-flow: wrap;      width: 100%;      padding: 5px; }"
    content += ".pair { display: flex; }"
    content += ".right { float: right; }"
    content += ".uploadSection { text-align: left; }"
    content += ".large { height: 90px; width: 90%; }"
    content += ".imagePair { display: flex; }"
    content += ".imageContainer {flex-flow: wrap; width: 50%; padding: 5px; }"
    content += ".uploadRow {display: flex; text-align: center; font-weight: normal; font-size: 14; }"
    content += ".sub-box {border: 1px black solid; padding: 5px; margin: 5px; }"
    content += "</style></head>"

    content += "<form id='myForm' align='center' onsubmit='handleFormSubmit(this)'>"
      content += "<div class='wrapper'>"
        content += "<div class='main'>"
          content += "<div class='headingWrapper'>"
            content += "<div class='imagePair'>"
              content += "<p style='padding: 10px'>"
                content += "<img src='https://www.thomsonsitm.co.nz/themes/ThomsonsITM/images/logo.png' style='background-color: #000000; padding: 20px;'>"
                content += "<br><br>Thomsons Timbers Supplies Limited"
              content += "</p>"
              content += "<div class='checkboxContainer'>"
                content += "<p style='color: red; text-align: left; padding-left: 9px'>Office Use only:</p>"
                content += "<p>Frame/Trusses <span style='color: red'>MARGIN</span>: "
                content += "<input class='textbox right' value='" + form.officeFrames + "' type='text' placeholder='Frame/truss margin' style='width: 45%;'></p>"
                content += "<p>Discount Group:  <input class='textbox right' value='" + form.officeDiscount + "' type='text' placeholder='Office Discount' style='width: 45%;'></p>"
                content += "<p>Reason: <input class='textbox right' value='" + form.officeReason   + "' type='text' placeholder='Reason' style='width: 45%;'></p>"
              content += "</div>"
            content += "</div>"
          content += "</div>"
          content += "<header><h3>Estimate Request For Job Number " + jobNumber + "</h3></header>"
          content += "<div class='pair'>"
            content += "<div class='checkboxContainer'>"
              content += "<header>Client</header>"
              content += "<input class='textbox' required value='" + form.cClient + "' type='text' placeholder='Client'>"
              content += "<input class='textbox'          value='" + form.cPhone  + "' type='text' placeholder='Phone'>"
              content += "<input class='textbox'          value='" + form.cMobile + "' type='text' placeholder='Mobile'>"
              content += "<input class='textbox' required value='" + form.cRep    + "' type='text' placeholder='Rep'>"
              content += "<input class='textbox'          value='" + form.cDate   + "' type='text' placeholder='Date'>"
              content += "<p class='row'><textarea class='textbox address' name='cAddress' type='text' placeholder='Client Address'>" + form.cAddress+ "</textarea></p> "
              content += "<div class='sub-box'>"
              content += "<header>Contact info for detailers questions</header>"
                content += "<input class='textbox' name='contactName' type='text' placeholder='Name' value='" + form.contactName + "'>"
                content += "<input class='textbox' name='constactInfo' type='text' placeholder='Contact info'value='" + form.constactInfo + "'>"
              content += "</div>"
              content += "<div class='sub-box'><header>Job Location</header>"
                content += "<p class='row'><input " + location[0] + " type='checkbox'>Auckland Job</p>"
                content += "<p class='row'><input " + location[1] + " type='checkbox'>Waikato Job</p>"
              content += "</div>"
            content += "</div>"
            content += "<div class='checkboxContainer'> <header>Job</header> "
              content += "<input class='textbox' required value='" + form.jobName + "' type='text' placeholder='Job Name'> "
              content += "<input class='textbox' value='" + form.jobCompany + "' type='text' placeholder='Company/Branch Name'> "
              content += "<input class='textbox' value='" + form.jobPrenail + "' type='text' placeholder='Est. Pre-nail Date'>  "
              content += "<p class='row'><textarea class='textbox address' required name='jobAddress' type='text' placeholder='Site Address'>" + form.jobAddress + "</textarea></p>"
              content += "<div class='email-box'>"
                content += "<div class='row'><input name='emailSkip' " + emailSkipChecked + " type='checkbox' />Email to Skip</div>"
                content += "<div class='row'><input name='emailVIP' " + emailVIPChecked + " type='checkbox' />Email to VIP</div>"
              content += "</div>"




            content += "</div>"
          content += "</div>"
          content += "<header><h4>Tick the items below required to be estimated</h4></header>"
          content += "<div class='pair'>"
            content += "<div class='checkboxContainer extra'>"
              content += "<p class='row'><input " + checkedArray[0]  + " type='checkbox'>   Truss Layout, PS1 only                      </p>"
              content += "<p class='row'><input " + checkedArray[1]  + " type='checkbox'>   Full Buildable Layouts                      </p>"
              content += "<p class='row'><input " + checkedArray[2]  + " type='checkbox'>   Posi Struts                                 </p>"
              content += "<p style='border:solid 1px black;'>                                                                           </p>"
              content += "<p class='row'><input " + checkedArray[3]  + " type='checkbox'>   Steel Reinforcing                           </p>"
              content += "<p class='row'><input " + checkedArray[4]  + " type='checkbox'>   Pre-Bent R/Steel                            </p>"
              content += "<p class='row'><input " + checkedArray[5]  + " type='checkbox'>   Rib-raft                                    </p>"
              content += "<p class='row'><input " + checkedArray[6]  + " type='checkbox'>   Masonry                                     </p>"
              content += "<p class='row'><input " + checkedArray[7]  + " type='checkbox'>   Concrete                                    </p>"
            content += "</div>"
            content += "<div class='checkboxContainer'>"
              content += "<p class='row'><input " + checkedArray[8]  + " type='checkbox'>   Prenail                                     </p>"
              content += "<p class='row'><input " + checkedArray[9]  + " type='checkbox'>   Trusses                                     </p>"
              content += "<p class='row'><input " + checkedArray[45]  + " type='checkbox'>   Rafters                                    </p>"
              content += "<p class='row'><input " + checkedArray[10] + " type='checkbox'>   Roof Pack                                   </p>"
              content += "<p class='row'><input " + checkedArray[11] + " type='checkbox'>   Random                                      </p>"
              content += "<p class='row'><input " + checkedArray[12] + " type='checkbox'>   Sub-floor                                   </p>"
              content += "<p class='row'><input " + checkedArray[13] + " type='checkbox'>   Mid-floor                                   </p>"
              content += "<p class='row'><input " + checkedArray[14] + " type='checkbox'>   Deck                                        </p>"
              content += "<p class='row'><input " + checkedArray[38] + " type='checkbox'>   J-Frame                                     </p>"
            content += "</div>"
            content += "<div class='checkboxContainer'>"
              content += "<p class='row'><input " + checkedArray[15] + " type='checkbox'>   Cladding                                    </p>"
              content += "<p class='row'><input " + checkedArray[16] + " type='checkbox'>   Insulation Only                             </p>"
              content += "<p class='row'><input " + checkedArray[17] + " type='checkbox'>   Insulation Installed                        </p>"
              content += "<p class='row'><input " + checkedArray[18] + " type='checkbox'>   Plasterboard                                </p>"
              content += "<p class='row'><input " + checkedArray[19] + " type='checkbox'>   Plasterboard D.T.S                          </p>"
              content += "<p class='row'><input " + checkedArray[20] + " type='checkbox'>   Internal Linings                            </p>"
              content += "<p class='row'><input " + checkedArray[21] + " type='checkbox'>   Internal Doors                              </p>"
            content += "</div>"
            content += "<div class='checkboxContainer'>"
              content += "<p class='row'><input " + checkedArray[22] + " type='checkbox'>   Timber Fascia                               </p>"
              content += "<p class='row'><input " + checkedArray[23] + " type='checkbox'>   Marley Gutter / D.P                         </p>"
              content += "<p class='row'><input " + checkedArray[24] + " type='checkbox'>   Roofing                                     </p>"
              content += "<p class='row'><input " + checkedArray[25] + " type='checkbox'>   Aluminium Joinery                           </p>"
              content += "<p class='row'><input " + checkedArray[26] + " type='checkbox'>   Pergola                                     </p>"
              content += "<p class='row'><input " + checkedArray[27] + " type='checkbox'>   Retaining Wall                              </p>"
              // content += "<p class='row'><input " + checkedArray[28] + " type='checkbox'>                                            </p>"
            content += "</div>"
          content += "</div>"

          content += "<header> 	<h4 >Tick the building zones for this building</h4> </header>"
          content += "<div class='pair'>"
            content += "<div class='checkboxContainer'>Wind zone"
              content += "<p class='row'><input class='wind' " + checkedArray[30] + " type='checkbox'>Low Wind                          </p>"
              content += "<p class='row'><input class='wind' " + checkedArray[32] + " type='checkbox'>Medium Wind                       </p>"
              content += "<p class='row'><input class='wind' " + checkedArray[34] + " type='checkbox'>High Wind                         </p>"
              content += "<p class='row'><input class='wind' " + checkedArray[36] + " type='checkbox'>Very High Wind                    </p>"
              content += "<p class='row'><input class='wind' " + checkedArray[37] + " type='checkbox'>Extra High Wind                   </p>"
            content += "</div>"
            content +="<div class='checkboxContainer'> Corrosion zone"
              content += "<p class='row'><input class='corrosion' " + checkedArray[29] + " type='checkbox'>Corrosion Zone A: None       </p>"
              content += "<p class='row'><input class='corrosion' " + checkedArray[31] + " type='checkbox'>Corrosion Zone B: Low        </p>"
              content += "<p class='row'><input class='corrosion' " + checkedArray[33] + " type='checkbox'>Corrosion Zone C: Med        </p>"
              content += "<p class='row'><input class='corrosion' " + checkedArray[35] + " type='checkbox'>Corrosion Zone D: High       </p>"
            content += "</div>"
          content += "</div>"
          content += "<header><h4 >Note Products required for the following:</h4></header>"
          content += "<div class='pair'>"
            content += "<div class='fullWidthContainer'>"
              content += "<p>Interior Doors:    <input class='textbox right' value='" + form.intDoor +     "' type='text' placeholder='Product' style='width: 80%;'></p>"
              content += "<p>Door Hardware:     <input class='textbox right' value='" + form.doorH +       "' type='text' placeholder='Product' style='width: 80%;'></p>"
              content += "<p>Scotia:            <input class='textbox right' value='" + form.scotia +      "' type='text' placeholder='Product' style='width: 80%;'></p>"
              content += "<p>Skirting:          <input class='textbox right' value='" + form.skirting +    "' type='text' placeholder='Product' style='width: 80%;'></p>"
              content += "<p>Architraves:       <input class='textbox right' value='" + form.architraves +  "' type='text' placeholder='Product' style='width: 80%;'></p>"
              content+= "<p>Fascia type:        <input class='textbox right' value='" + form.fasciaType +        "' type='text' placeholder='Product' style='width: 80%;'></p>"
              content+= "<p>Ceiling batten:     <input class='textbox right' value='" + form.ceilingBatten +     "' type='text' placeholder='Product' style='width: 80%;'></p>"
              content+= "<p>Roof material:      <input class='textbox right' value='" + form.roofMaterial +      "' type='text' placeholder='Product' style='width: 80%;'></p>"
              content+= "<p>Truss penetrations: <input class='textbox right' value='" + form.trussPenetrations + "' type='text' placeholder='eg AC Unit, skylight' style='width: 80%;'></p>"
              content+= "<p>Special Trusses:    <input class='textbox right' value='" + form.specialTrusses +    "' type='text' placeholder='eg attic, scissor' style='width: 80%;'></p>"
              content+= "<p>Cladding:           <input class='textbox right' value='" + form.specialCladding +    "' type='text' placeholder='eg attic, scissor' style='width: 80%;'></p>"
            content += "</div>"
          content += "</div>"

          content += "<header><h4 >Note below alterations to plan supplied:</h4> </header> "
          content += "<div class='pair'>"
            content += "<div class='fullWidthContainer'> "
              content += "<p><textarea class='textbox large' type='text' placeholder='Alterations'>" + form.alterations + "</textarea></p>"
            content += "</div>"
          content += "</div>"
          content += "<footer> <h2> PLEASE NOTE: ALL INFORMATION GIVEN ON THIS FORM SUPERCEDES THAT ON THE PLAN.</H2></footer>"
        content += "</div>"
      content += " </div>"

      content += "<header><h3>Information available in plans</h3></header>"
      content += "<div class='pair'>"
        content += "<div class='checkboxContainer'>"
          content += "<p class='row'><input name='variable39' " + checkedArray[39] + " type='checkbox'>Dimensioned floor plan</p>"
          content += "<p class='row'><input name='variable40' " + checkedArray[40] + " type='checkbox'>Elevations</p>"
          content += "<p class='row'><input name='variable41' " + checkedArray[41] + " type='checkbox'>Cross-Section</p>"
        content += "</div>"
        content += "<div class='checkboxContainer'>"
          content += "<p class='row'><input name='variable42' " + checkedArray[42] + " type='checkbox'>Roof Pitch</p>"
          content += "<p class='row'><input name='variable43' " + checkedArray[43] + " type='checkbox'>Electrical plan</p>"
          content += "<p class='row'><input name='variable44' " + checkedArray[44] + " type='checkbox'>Rafters design and sizing</p>"
        content += "</div>"
      content += "</div>"
    content += "</form>"

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
    if(form.variable0)  {detailingSubject+= 'Truss Layout, PS1 only, '}
    if(form.variable1)  {detailingSubject+= 'Full Buildable Layouts, '}
    if(form.variable2) {detailingSubject+= 'Posi Struts, '}
    if(form.variable8)  {detailingSubject+= 'Prenail, '}
    if(form.variable9)  {detailingSubject+= 'Trusses, '}
    if(form.variable45)  {detailingSubject+= 'Rafters, '}

    detailingSubject+= 'Uploaded by: ' + form.cRep + ', '
    detailingSubject+= 'For Client: ' + form.cClient + ', '

    var quotesOutput = "<br>This email was sent to: <br><ul>"
    if(form.emailSkip) {
      sendEmail('colin@johanson.co.nz', output, detailingSubject) // email detailing
      sendEmail('skip@johanson.co.nz', output, detailingSubject) // email skip
      quotesOutput += "<li>Skip and Colin</li>"
    }
    if(form.emailArie) {
      sendEmail('arie.quantifier@gmail.com', output, detailingSubject) // email Arie
      quotesOutput += "<li>Arie</li>"
    }
    if(form.emailGavin) {
      sendEmail('gjquantifying@gmail.com', output, detailingSubject) // email Gavin
      quotesOutput += "<li>Gavin</li>"
    }
    if(form.emailVIP){
      sendEmail('plans@vftauckland.co.nz', output, detailingSubject) // email VIP
      quotesOutput += "<li>VIP</li>"
    }
    if(form.emailTo){
      sendEmail(form.emailTo, output, detailingSubject) // email the additional
      quotesOutput += "<li>Additional "+form.emailTo+"</li>"
    }

    quotesOutput += "</ul> <br>" + output

    sendEmail('quotes@thomsonsitm.co.nz', quotesOutput, detailingSubject) // email the quotes team
    incrementIterator(jobNumber);
    return output

  } catch (error) {
  Logger.log(error.toString())
  sendEmail("thekingliveson@gmail.com", error.toString()+' '+error ,'thomsons errors')
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
