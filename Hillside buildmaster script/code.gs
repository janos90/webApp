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

    var quantifierConstEmail = form['estimateEmailTest']
    var outsourceConstEmail = form['outsourceEmailTest']
    // Temporary constants
    var turangiConstEmail = outsourceConstEmail
    var ntmlConstEmail = outsourceConstEmail
    var dayleConstEmail = outsourceConstEmail
    var vipConstEmail = outsourceConstEmail
    var iftConstEmail = outsourceConstEmail

    var  unitedSteelConstEmail = outsourceConstEmail		//		akl.cutandbend@unitedsteel.co.nz
    var 	summitConstEmail = outsourceConstEmail			//	QS@summitsteel.co.nz
    var 	freoConstEmail = outsourceConstEmail			//	TBC

    // Ribraft
    var 	rFLConstEmail = outsourceConstEmail		//		TBC
    var 	russelGordonConstEmail = outsourceConstEmail		//		TBC

    // Joinery
    var 	visionConstEmail = outsourceConstEmail		//		ash@visionwindows.co.nz
    var		tBC = outsourceConstEmail;

    // Garage Doors
    var 	dominatorConstEmail = outsourceConstEmail		//		sales@domnorthshore.co.nz
    //
    // Doors - Internal
    var 	mahurangiConstEmail = outsourceConstEmail		//		info@mahurangijoinery.co.nz
    var 	doorwaysConstEmail = outsourceConstEmail		//		trish.shirley@doorways.co.nz
    var 	eliteConstEmail = outsourceConstEmail			//	sales@elitedoors.net.nz
    var 	nationwideConstEmail = outsourceConstEmail		//		jo@nationwideprehung.co.nz
    var 	bennettDoorsConstEmail = outsourceConstEmail 		//		craig@bennettdoors.co.nz

    // Insulation
    var 	pinkfitConstEmail = outsourceConstEmail		//		John.Coogan@pinkfit.co.nz
    var 	naturalConstEmail = outsourceConstEmail 	//			jon@naturalinsulation.co.nz
    var 	aDLInsulationConstEmail = outsourceConstEmail	//			David.morris@adlgroup.co.nz
    var 	smartEnergyConstEmail = outsourceConstEmail		//		scarter@brightr.co.nz

    // Structural SteelConstEmail
    var 	allwinConstEmail = outsourceConstEmail	//			sales@allwin.co.nz
    var 	eCBConstEmail = outsourceConstEmail			//	thomas@ecbeng.co.nz

    // Cladding
    var 	rosenfieldConstEmail = outsourceConstEmail		//		dan@rosenfeldkidson.co.nz
    var 	abodoConstEmail = outsourceConstEmail		//		lewis.marshall@abodo.co.nz
    var 	jSCConstEmail = outsourceConstEmail			//	seanh@jsctimber.co.nz
    var 	iTITimspecConstEmail = outsourceConstEmail			//	davidh@ititimspec.co.nz

    // Roofing
    var 	newEraSFIConstEmail = outsourceConstEmail						//		nikhil@neweraroofing.co.nz
    var 	johnsonRoofingSFIConstEmail = outsourceConstEmail			//					info@johnsonroofingltd.co.nz
    var 	roofingIndustriesSupplyOnlyConstEmail = outsourceConstEmail		//						marcust@roof.co.nz
    var 	sPSShinglesConstEmail = outsourceConstEmail						//		info@spsbuilding.co.nz
    var 	metalcraftConstEmail = outsourceConstEmail						//



    var jobNumerical = getIterator()
    var jobNumber =  jobNumerical
    if(form['template-selection'] === 'Hillside') {
      jobNumber = '524-' + jobNumerical
    } else if (form['template-selection'] === 'Matakana') {
      jobNumber = '489' + jobNumerical
    } else if (form['template-selection'] === 'Mahia') {
      jobNumber = '537' + jobNumerical
    } else if (form['template-selection'] === 'Turangi') {
      jobNumber = '507' + jobNumerical
    } else if (form['template-selection'] === 'Taupo') {
      jobNumber = '539' + jobNumerical
    } else {
      console.log("form['template-selection']", form['template-selection']);
      console.log(form['template-selection'] === 'Taupo');
      console.log(form['template-selection'] == 'Taupo');
      console.log(form['template-selection'] == 'Turangi');
      jobNumber = '000' + jobNumerical
    }
    var parentFolderId = "1ZrbjfZe6Iol1yOmFPeDEwt53CscY4hOk"
    var clientFolderName = form['quote-info-sales-rep'];
    var parentFolder = DriveApp.getFolderById(parentFolderId)
    var folder, folders = parentFolder.getFoldersByName(clientFolderName);
    if (folders.hasNext()) {folder = folders.next();} else {folder = parentFolder.createFolder(clientFolderName);}
    var JobFolder = folder.createFolder("jobNumber: " + jobNumber)
    var detailingSubject = 'New job, number ' + jobNumber + ','
    detailingSubject += 'from ITM Estimations Coop ' + form['template-selection'] + ', '
    detailingSubject+= 'Uploaded by: ' + form['quote-info-sales-rep'] + ', '
    detailingSubject+= 'For Client: ' + form['customer-info-name'] + '.'
    var generalOutsourcingContent

    var content = ""
    var formFoot = "</form>"
    var styles = ""
    var head = ""
    var headEnd = ""
    var clientDetails = ''
    var outsourcingSelection = ''
    var estimationContent = ''
    var prenailContentSubmitted = ''
    var textContent = ""

    textContent+="Quote Reference;" + form['quote-info-reference'] + ";\n"
    textContent+="Sales Rep;" + form['quote-info-sales-rep'] + ";\n"
    textContent+="Date Received;" + form['quote-info-date-received'] + ";\n"
    textContent+="Template;" + form['template-selection'] + ";\n"
    textContent+="Preliminary plan;" + form['tickbox-preliminary-plan'] + ";\n"
    textContent+="Consented plan;" + form['tickbox-consented-plan'] + ";\n"
    textContent+="Plan Version Number;" + form['quote-info-plan-version'] + ";\n"
    textContent+="Email to;" + form['emailTo'] + ";\n"
    textContent+="Customer Name;" + form['customer-info-name'] + ";\n"
    textContent+="Contact Email;" + form['customer-info-email'] + ";\n"
    textContent+="Phone Number;" + form['customer-info-phone'] + ";\n"
    textContent+="Site Address;" + form['job-info-address'] + ";\n"
    textContent+="DropBox Links;" + form['job-info-dropbox-links'] + ";\n"
    textContent+="Turangi ITM;" + form['outsourcing-selection-prenail-turangi'] + ";\n"
    textContent+="NTML;" + form['outsourcing-selection-prenail-ntml'] + ";\n"
    textContent+="Dayles;" + form['outsourcing-selection-prenail-dayles'] + ";\n"
    textContent+="VIP;" + form['outsourcing-selection-prenail-vip'] + ";\n"

    head+="<!doctype html><head>"
    styles+="<style type='text/css'>"
    styles+="body { text-align: -webkit-center; background-color: #FFfFFF; font-family: Sans-serif;  }"
    styles+="form { width:850px; }  .plate {width: 30%;}"
    styles+=".checkboxContainer { width: 45%; margin-top: 2%; border: black solid 1px;"
    styles+="border-radius: 5px; margin-left: auto; margin-right: auto; padding: 20px;  }"
    styles+="#prenail-questions { flex-wrap: wrap;  }"
    styles+=".fullWidthContainer { width: 100%;  }"
    styles+="#heading { display:flex; height:100%; padding: 0em 20em 2em 20em;  }"
    styles+=".store-logo { width: 15em;  }"
    styles+="#heading .title { color:red; width: 15em; padding-left: 50px; }"
    styles+=".section { width: 100%; border: solid black 2px; padding: 0em 0em 0em 0em; margin: 1em 0 1em 0;  }"
    styles+=".split-box { display: flex;  }"
    styles+=".split-box div { border: solid black 1px; margin: 1em;  }"
    styles+=".split-box .half-section { width: 50%;  }"
    styles+=".split-box .third-section { width: 33.33%;  }"
    styles+=".prenail-table, .prenail-table-headers, .prenail-table-cells { border: solid black 1px;  }"
    styles+=".prenail-table { border-collapse: collapse; margin: 5px;  }"
    styles+="label { display: block; margin: 2px; padding: 5px; text-align: justify;  }"
    styles+=".section header{ background-color: gray; font-weight: bold; font-size: 20px;"
    styles+="padding-top: 2px; padding-bottom: 2px; margin-bottom: 3px;  }"
    styles+=".toggle-section header{ background-color: gray; font-weight: bold; font-size: 15px;"
    styles+="padding-top: 2px; padding-bottom: 2px; margin-bottom: 3px; display: flex;  }"
    styles+=".toggle-section-wrapper { display: flex; flex-wrap: wrap;  }"
    styles+=".toggle-section { width: 49.5%; margin: 2px; border: solid 1px black; margin-right:auto; margin-left:auto;}"
    styles+=".outsourcing-selection-body { display: flex; flex-wrap: wrap;  }"
    styles+=".outsourcing-selection-ul { list-style: none; border: 2px solid black;"
    styles+="margin: 4px; padding: 2px; width: 48%; border-radius: 5px; flex-grow: 1;  }"
    styles+=".toggle-section-questions { display: none; width: 100%; flex-wrap: wrap;  }"
    styles+="</style>"
    headEnd+="</head>"




    content+=head
    content+=styles
    content+=headEnd

    clientDetails+= "<body><form id='myForm' align='center'><header class='' id='heading'>"
    clientDetails+= "<image class='store-logo' src='https://westernitm.co.nz/wp-content/uploads/2014/10/ITM-Logo-square-200px-web.jpg'/>"
    clientDetails+= "<h2 class='title'> Estimate request <br /> ITM "+form['template-selection']+"</h2> </header>"
    clientDetails+= "<div class='section' id='quote-info'>   <header>Quote Information   </header>"
    clientDetails+= "<label for='quote-info-reference'>Quote Reference<input class='single-input' type='text' value='"+form['quote-info-reference']+"' /></label>"
    clientDetails+= "<label for='quote-info-sales-rep'>Sales Rep<input class='single-input' type='text' value='"+form['quote-info-sales-rep']+"' /></label>"
    clientDetails+= "<label for='quote-info-date-received'>Date Received<input class='single-input' type='text' value='"+form['quote-info-date-received']+"' /></label>"
    clientDetails+= "<label for='template-selection'>Select Template<select value='"+form['template-selection']+"' id='template-selection'>"
    switch(form['template-selection']) {
      case 'Hillside':
      clientDetails+= "<option value='Hillside' selected>Hillside</option>"
      break;
      case 'Matakana':
      clientDetails+= "<option value='Matakana' selected>Matakana</option>"
      break;
      case 'Mahia':
      clientDetails+= "<option value='Mahia' selected>Mahia</option>"
      break;
      case 'Turangi':
      clientDetails+= "<option value='Turangi' selected>Turangi</option>"
      break;
      case 'Taupo':
      clientDetails+= "<option value='Taupo' selected>Taupo</option>"
      break;

    }
    clientDetails+= "</select></label>"
    clientDetails+= "<label for='tickbox-preliminary-plan'>Preliminary plan<input class='planType' type='checkbox' "+(form['tickbox-preliminary-plan']?'checked':'')+" ></label>"
    clientDetails+= "<label for='tickbox-consented-plan'>Consented plan<input class='planType' type='checkbox' "+(form['tickbox-consented-plan']?'checked':'')+" ></label>"
    clientDetails+= "<label for='quote-info-plan-version'>Plan Version Number<input class='single-input' type='text' value='"+form['quote-info-plan-version']+"' /></label>"
    clientDetails+= "</div>"

    clientDetails+= "<div class='section split-box'>"
    clientDetails+= "<div class='half-section' id='customer-info'>"
    clientDetails+= "<header>Customer Information</header>"
    clientDetails+= "<label for='customer-info-name'>Customer Name<input type='text' value='"+form['customer-info-name']+"' class='single-input' /> </label>"
    clientDetails+= "<label for='customer-info-email'>Contact Email<input type='text' value='"+form['customer-info-email']+"' class='single-input' /> </label>"
    clientDetails+= "<label for='customer-info-phone'>Phone Number<input type='text' value='"+form['customer-info-phone']+"' class='single-input' /> </label>"
    clientDetails+= "</div>"
    clientDetails+= "<div class='half-section' id='job-info'>"
    clientDetails+= "<header>Job Information</header>"
    clientDetails+= "<label for='job-info-address'>Site Address<input class='textbox-input' type='text' value='"+form['job-info-address']+"' /></label>   "
    clientDetails+= "</div></div>"


    content+=clientDetails


    outsourcingSelection+="<div class='outsourcing-selection section'>"
    outsourcingSelection+="<header>Out Sourcing"+ (form['cancel-outsourcing']?'- not Required':'- send Plans for measure and quote') +"</header>"
    outsourcingSelection+="<main class='outsourcing-selection-body' id='outsourcing-selection-body' style='"+ (form['cancel-outsourcing']?'display:none;':'') +"'> "
    outsourcingSelection+="<ul class='outsourcing-selection-ul prenail'><header>PreNail</header>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-prenail-turangi'>Turangi ITM"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-prenail-turangi']?'checked':'')+" id='outsourcing-selection-prenail-turangi' /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-prenail-ntml'>NTML"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-prenail-ntml']?'checked':'')+"  id='outsourcePrenailNTMLid' /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-prenail-dayles'>Dayles"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-prenail-dayles']?'checked':'')+"  id='outsourcePrenailDayleid' /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-prenail-vip'>VIP"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-prenail-vip']?'checked':'')+"  id='outsourcePrenailVipid' /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-prenail-ift'>IFT"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-prenail-ift']?'checked':'')+"  id='outsourcePrenailIftid' /></label></li>"


    outsourcingSelection+="</ul>"
    outsourcingSelection+="<ul class='outsourcing-selection-ul reinforcing'>  <header>Reinforcing</header>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-reinforcing-united-steel'>United Steel"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-reinforcing-united-steel']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-reinforcing-Summit'>Summit"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-reinforcing-Summit']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-reinforcing-Freo'>FREO"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-reinforcing-Freo']?'checked':'')+" /></label></li>"
    outsourcingSelection+="</ul>"
    outsourcingSelection+="<ul class='outsourcing-selection-ul ribraft'>  <header>Ribraft</header>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-ribraft-rfl'>RFL"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-ribraft-rfl']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-ribraft-russel-gordon'>Russel Gordon"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-ribraft-russel-gordon']?'checked':'')+" /></label></li>"
    outsourcingSelection+="</ul>"
    outsourcingSelection+="<ul class='outsourcing-selection-ul joinery'>  <header>Joinery</header>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-joinery-vision'>Vision"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-joinery-vision']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-joinery-tbc'>TBC"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-joinery-tbc']?'checked':'')+" /></label></li>"
    outsourcingSelection+="</ul>"
    outsourcingSelection+="<ul class='outsourcing-selection-ul garage-doors'>  <header>Garage Doors</header>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-garage-doors-dominator'>Dominator"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-garage-doors-dominator']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-garage-doors-dominator-rodney'>Dominator Rodney"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-garage-doors-dominator-rodney']?'checked':'')+" /></label></li>"
    outsourcingSelection+="</ul>"
    outsourcingSelection+="<ul class='outsourcing-selection-ul doors-internal'>  <header>Doors - Internal</header>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-doors-internal-mahurangi'>Mahurangi"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-doors-internal-mahurangi']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-doors-internal-doorways'>Doorways"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-doors-internal-doorways']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-doors-internal-elite'>Elite"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-doors-internal-elite']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-doors-internal-nationwide'>Nationwide"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-doors-internal-nationwide']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-doors-internal-bennett-doors'>Bennett Doors"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-doors-internal-bennett-doors']?'checked':'')+" /></label></li>"
    outsourcingSelection+="</ul>"
    outsourcingSelection+="<ul class='outsourcing-selection-ul outsourcing-insualtion'>  <header>Insulation</header>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-outsourcing-insualtion-pinkfit'>Pinkfit"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-outsourcing-insualtion-pinkfit']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-outsourcing-insualtion-natural'>Natural"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-outsourcing-insualtion-natural']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-outsourcing-insualtion-adl-insulation'>ADL Insulation"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-outsourcing-insualtion-adl-insulation']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-outsourcing-insualtion-smart-energy'>Smart Energy"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-outsourcing-insualtion-smart-energy']?'checked':'')+" />  </label></li>"
    outsourcingSelection+="</ul>"
    outsourcingSelection+="<ul class='outsourcing-selection-ul structural-steel'>  <header>Structural Steel</header>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-structural-steel-allwin'>Allwin"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-structural-steel-allwin']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-structural-steel-Ecb'>ECB"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-structural-steel-Ecb']?'checked':'')+" /></label></li></ul>"
    outsourcingSelection+="<ul class='outsourcing-selection-ul cladding'>  <header>Cladding</header>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-cladding-rosenfield'>Rosenfield"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-cladding-rosenfield']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-cladding-abodo'>Abodo"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-cladding-abodo']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-cladding-jsc'>JSC"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-cladding-jsc']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-cladding-iti-timspec'>ITI Timspec"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-cladding-iti-timspec']?'checked':'')+" /></label></li></ul>"
    outsourcingSelection+="<ul class='outsourcing-selection-ul roofing'><header>Roofing</header>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-roofing-new-era-sfi'>New Era SFI"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-roofing-new-era-sfi']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-roofing-johnson-roofing-sfi'>Johnson Roofing SFI"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-roofing-johnson-roofing-sfi']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-roofing-roofing-industries-supply-only'>Roofing Industries Supply Only"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-roofing-roofing-industries-supply-only']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-roofing-sps-shingles'>SPS Shingles"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-roofing-sps-shingles']?'checked':'')+" /></label></li>"
    outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-roofing-metalcraft'>Metalcraft"
    outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-roofing-metalcraft']?'checked':'')+" /></label></li>"
    outsourcingSelection+="</ul>"
    outsourcingSelection+="</main></div>"

    content+= outsourcingSelection


    outsourcingSelection+="<div class='outsourcing-selection section'>"
    outsourcingSelection+="<header>Out Sourcing"+ (form['cancel-outsourcing']?'- not Required':'- send Plans for measure and quote') +"</header>"
    outsourcingSelection+="<main class='outsourcing-selection-body' id='outsourcing-selection-body' style='"+ (form['cancel-outsourcing']?'display:none;':'') +"'> "


    estimationContent += "<div class='section' >"
    estimationContent += "<header class='toggle-section-header'> Estimation - "
    estimationContent += (form['cancel-estimation']?'not Required':'Tick sections or Items') +"</header>"


    estimationContent +="<div class='toggle-section-wrapper' id='toggle-section-wrapper'>"
    estimationContent +="<div class='toggle-section foundations'><header id='toggle-section-header-foundations' class='toggle-section-header'>Foundations"
    estimationContent +="<label id='label-as-plan-foundations' class='as-plan-toggle foundations' "+(form['as-plan-foundations']?'':"style='visibility:hidden;'")+"> As per Plan"
    estimationContent +="<input type='checkbox' id='as-plan-foundations' "+(form['as-plan-foundations']?'checked':'')+" /></label>"
    estimationContent +="<label id='label-toggle-as-selected-foundations' class='hide-section-toggle foundations' "+(form['toggle-as-selected-foundations']?'':"style='visibility:hidden;'")+"> As Selected"
    estimationContent +="<input type='checkbox' id='toggle-as-selected-foundations' "+(form['toggle-as-selected-foundations']?'checked':'')+" /></label>"
    estimationContent +="<label id='label-toggle-none-foundations' class='hide-section-toggle foundations' "+(form['toggle-none-foundations']?'':"style='visibility:hidden;'")+"> Not required"
    estimationContent +="<input type='checkbox' id='toggle-none-foundations' "+(form['toggle-none-foundations']?'checked':'')+" /></label>"
    estimationContent +="</header>"

    estimationContent +="<main "+(form['toggle-as-selected-foundations']?"style='display:flex;'":"style='display:none;'")+"  class='toggle-section-questions' id='toggle-section-questions-foundations'>"
    estimationContent+="<label class='foundations reinforcing-steel' for='foundations-reinforcing-steel'>"
    estimationContent+= "<input class='checkbox' type='checkbox' "+(form['foundations-reinforcing-steel']?'checked':'')+" />Reinforcing Steel</label>"
    estimationContent+= "<label class='foundations blocks'for='foundations-blocks'>"
    estimationContent += "<input class='checkbox' type='checkbox' "+(form['foundations-blocks']?'checked':'')+" />Blocks</label>"
    estimationContent+= "<label class='foundations pod-system'for='foundations-pod-system'>"
    estimationContent += "<input class='checkbox' type='checkbox' "+(form['foundations-pod-system']?'checked':'')+" />Pod System</label>"
    estimationContent+= "<label class='foundations piles'for='foundations-piles'>"
    estimationContent += "<input class='checkbox' type='checkbox' "+(form['foundations-piles']?'checked':'')+" />Piles</label>"
    estimationContent+= "<label class='foundations additional'for='foundations-additional'>Additional Information"
    estimationContent+= "<textarea class='textbox estimationAdditional' type='textbox' > "+(form['foundations-additional'])+" </textarea></label></main></div>"


    estimationContent+= "<div class='toggle-section timber-floor'><header id='toggle-section-header-timber-floor' class='toggle-section-header'>Timber Floor"
    estimationContent+= "<label id='label-as-plan-timber-floor' class='as-plan-toggle timber-floor' "+(form['as-plan-timber-floor']?'':"style='visibility:hidden;'")+">As per Plan"
    estimationContent+= "<input type='checkbox'  id='as-plan-timber-floor' "+(form['as-plan-timber-floor']?'checked':'')+"/></label>"
    estimationContent+= "<label id='label-toggle-as-selected-timber-floor' class='hide-section-toggle timber-floor'"+(form['toggle-as-selected-timber-floor']?'':"style='visibility:hidden;'")+">As Selected"
    estimationContent+= "<input type='checkbox' id='toggle-as-selected-timber-floor' "+(form['toggle-as-selected-timber-floor']?'checked':'')+"/></label>"
    estimationContent+= "<label id='label-toggle-none-timber-floor' class='hide-section-toggle timber-floor' "+(form['toggle-none-timber-floor']?'':"style='visibility:hidden;'")+">Not required"
    estimationContent+= "<input type='checkbox' id='toggle-none-timber-floor' "+(form['toggle-none-timber-floor']?'checked':'')+"/></label>"
    estimationContent+= "</header>"

    estimationContent+= "<main "+(form['toggle-as-selected-timber-floor']?"style='display:flex;'":"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-timber-floor'>"
    estimationContent+= "<label class='timber-floor bearers'for='timber-floor-bearers'>"
    estimationContent+= "<input class='checkbox' type='checkbox' "+(form['timber-floor-bearers-check']?'checked':'')+" />Bearers </label>"
    estimationContent+= "<label class='timber-floor Joists'for='timber-floor-Joists'>"
    estimationContent+= "<input class='checkbox' type='checkbox' "+(form['timber-floor-Joists-check']?'checked':'')+" />Joists </label>"
    estimationContent+= "<label class='timber-floor flooring'for='timber-floor-flooring'>"
    estimationContent+= "<input class='checkbox' type='checkbox' "+(form['timber-floor-flooring-check']?'checked':'')+" />Flooring </label>"
    estimationContent+= "<label class='timber-floor wet-area-flooring'for='timber-floor-wet-area-flooring'>"
    estimationContent+= "<input class='checkbox' type='checkbox' "+(form['timber-floor-wet-area-flooring-check']?'checked':'')+" />Wet Area Flooring </label>"
    estimationContent+= "<label class='timber-floor tile-slate-underlay'for='timber-floor-tile-slate-underlay'>"
    estimationContent+= "<input class='checkbox' type='checkbox' "+(form['timber-floor-tile-slate-underlay-check']?'checked':'')+" />Tile & Slate Underlay </label>"
    estimationContent+= "<label class='timber-floor additional'for='timber-floor-additional'>Additional Information"
    estimationContent+= "<textarea class='textbox estimationAdditional' type='textbox' > "+(form['timber-floor-additional'])+" </textarea></label>"
    estimationContent+= "</main></div>"

    estimationContent+="<div class='toggle-section wall-framing'>"
    estimationContent+="<header class='toggle-section-header' id='toggle-section-header-wall-framing'>Wall Framing"
    estimationContent+="<label id='label-as-plan-wall-framing' class='as-plan-toggle wall-framing' "+(form['as-plan-wall-framing']?'':"style='visibility:hidden;'")+">As per Plan"
    estimationContent+="<input type='checkbox' id='as-plan-wall-framing' "+(form['as-plan-wall-framing']?'checked':'')+" onclick='toggleAll('wall-framing')'/></label>"
    estimationContent+="<label id='label-toggle-as-selected-wall-framing' class='hide-section-toggle wall-framing' "+(form['toggle-as-selected-wall-framing']?'':"style='visibility:hidden;'")+">As Selected"
    estimationContent+="<input type='checkbox' id='toggle-as-selected-wall-framing' "+(form['toggle-as-selected-wall-framing']?'checked':'')+" onclick='toggleAsSelected('wall-framing')'/></label>"
    estimationContent+="<label id='label-toggle-none-wall-framing' class='hide-section-toggle wall-framing' "+(form['toggle-none-wall-framing']?'':"style='visibility:hidden;'")+">Not required"
    estimationContent+="<input type='checkbox' id='toggle-none-wall-framing' "+(form['toggle-none-wall-framing']?'checked':'')+" onclick='toggleNone('wall-framing')'/></label></header>"

    estimationContent+="<main "+(form['toggle-as-selected-wall-framing']?"style='display:flex;'":"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-wall-framing' >"
    estimationContent+="<label class='wall-framing prenailer-supplied'for='wall-framing-prenailer-supplied'>"
    estimationContent+="<input class='checkbox' type='checkbox' "+(form['wall-framing-prenailer-supplied']?'checked':'')+" />"
    estimationContent+="Supplied by Prenailer - Do not allow</label>"
    estimationContent+="<label class='wall-framing random'for='wall-framing-random'><input class='checkbox' type='checkbox' "+(form['wall-framing-random']?'checked':'')+" />Random</label>"
    estimationContent+="<label class='wall-framing capping'for='wall-framing-capping'><input class='checkbox' type='checkbox' "+(form['wall-framing-capping']?'checked':'')+" />Capping</label>"
    estimationContent+="<label class='wall-framing beams'for='wall-framing-beams'><input class='checkbox' type='checkbox' "+(form['wall-framing-beams']?'checked':'')+" />External Beams</label>"
    estimationContent+="<label class='wall-framing posts'for='wall-framing-posts'><input class='checkbox' type='checkbox' "+(form['wall-framing-posts']?'checked':'')+" />External Posts</label>"
    estimationContent+="<label class='plate wall-framing h-one-two'for='wall-framing-h-one-two'><input class='checkbox' type='checkbox' "+(form['wall-framing-h-one-two']?'checked':'')+" />H1.2</label>"
    estimationContent+="<label class='plate wall-framing h-three-two'for='wall-framing-h-three-two'><input class='checkbox' type='checkbox' "+(form['wall-framing-h-three-two']?'checked':'')+" />H3.2</label>"
    estimationContent+="<label class='plate wall-framing h-three-plates'for='wall-framing-h-three-plates'><input class='checkbox' type='checkbox' "+(form['wall-framing-h-three-plates']?'checked':'')+" />H3 Plates</label>"
    estimationContent+="<label class='wall-framing strapping'for='wall-framing-strapping'><input class='checkbox' type='checkbox' "+(form['wall-framing-strapping']?'checked':'')+" />Strapping</label>"
    estimationContent+="<label class='wall-framing metal'for='wall-framing-metal'><input class='checkbox' type='checkbox' "+(form['wall-framing-metal']?'checked':'')+" />Metal</label>"
    estimationContent+="<label class='wall-framing timber'for='wall-framing-timber'><input class='checkbox' type='checkbox' "+(form['wall-framing-timber']?'checked':'')+" />Timber</label>"
    estimationContent+="<label class='wall-framing additional'for='wall-framing-additional'>Additional Information"
    estimationContent+="<textarea class='textbox estimationAdditional' type='textbox' >"+(form['wall-framing-additional'])+"</textarea></label>"

    estimationContent+="</main></div>"

    estimationContent+="<div class='toggle-section roof-framing'><header class='toggle-section-header' id='toggle-section-header-roof-framing'>Roof Framing"
    estimationContent+="<label id='label-as-plan-roof-framing' class='as-plan-toggle roof-framing' "+(form['as-plan-roof-framing']?'':"style='visibility:hidden;'")+">As per Plan"
    estimationContent+="<input type='checkbox'  id='as-plan-roof-framing' "+(form['as-plan-roof-framing']?'checked':'')+" onclick='toggleAll('roof-framing')'/></label>"
    estimationContent+="<label id='label-toggle-as-selected-roof-framing' class='hide-section-toggle roof-framing' "+(form['toggle-as-selected-roof-framing']?'':"style='visibility:hidden;'")+">As Selected"
    estimationContent+="<input type='checkbox' id='toggle-as-selected-roof-framing' "+(form['toggle-as-selected-roof-framing']?'checked':'')+" onclick='toggleAsSelected('roof-framing')'/></label>"
    estimationContent+="<label id='label-toggle-none-roof-framing' class='hide-section-toggle roof-framing' "+(form['toggle-none-roof-framing']?'':"style='visibility:hidden;'")+">Not required"
    estimationContent+="<input type='checkbox' id='toggle-none-roof-framing' "+(form['toggle-none-roof-framing']?'checked':'')+" onclick='toggleNone('roof-framing')'/></label>"
    estimationContent+="</header>"

    estimationContent+="<main "+(form['toggle-as-selected-roof-framing']?"style='display:flex;'":"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-roof-framing'>"
    estimationContent+="<label class='roof-framing prenailer-supplied'for='roof-framing-prenailer-supplied'>"
    estimationContent+="<input class='checkbox' type='checkbox' "+(form['roof-framing-prenailer-supplied']?'checked':'')+"Supplied by Prenailer - Do not allow</label>"
    estimationContent+="<label class='roof-framing bor-pack'for='roof-framing-bor-pack'>"
    estimationContent+="<input class='checkbox' type='checkbox' "+(form['roof-framing-bor-pack']?'checked':'')+" />BOR Pack (as Agreed)</label>"
    estimationContent+="<label class='roof-framing ply-membrane'for='roof-framing-ply-membrane'>"
    estimationContent+="<input class='checkbox' type='checkbox' "+(form['roof-framing-ply-membrane']?'checked':'')+" />Ply to Membrane Roof</label>"
    estimationContent+="<label class='roof-framing ply-shingle'for='roof-framing-ply-shingle'>"
    estimationContent+="<input class='checkbox' type='checkbox' "+(form['roof-framing-ply-shingle']?'checked':'')+" />Ply to Shingle Roof</label>"
    estimationContent+="<label class='roof-framing purlins-only'for='roof-framing-purlins-only'>"
    estimationContent+="<input class='checkbox' type='checkbox' "+(form['roof-framing-purlins-only']?'checked':'')+" />Purlins only</label>"
    estimationContent+="<label class='roof-framing additional'for='roof-framing-additional'>Additional Information"
    estimationContent+="<textarea class='textbox estimationAdditional' type='textbox'>"+(form['roof-framing-additional'])+"</textarea></label>"
    estimationContent+="</main> </div>"

    estimationContent+="<div class='toggle-section exterior-finishing'>"
    estimationContent+="<header id='toggle-section-header-exterior-finishing' class='toggle-section-header'>Exterior Finishings"
    estimationContent+="<label id='label-as-plan-exterior-finishing' class='as-plan-toggle exterior-finishing'"+(form['as-plan-exterior-finishing']?'':"style='visibility:hidden;'")+">As per Plan"
    estimationContent+="<input type='checkbox'  id='as-plan-exterior-finishing' "+(form['as-plan-exterior-finishing']?'checked':'')+" onclick='toggleAll('exterior-finishing')'/></label>"
    estimationContent+="<label id='label-toggle-as-selected-exterior-finishing' class='hide-section-toggle exterior-finishing'"+(form['toggle-as-selected-exterior-finishing']?'':"style='visibility:hidden;'")+">As Selected"
    estimationContent+="<input type='checkbox' id='toggle-as-selected-exterior-finishing' "+(form['toggle-as-selected-exterior-finishing']?'checked':'')+" onclick='toggleAsSelected('exterior-finishing')'/></label>"
    estimationContent+="<label id='label-toggle-none-exterior-finishing' class='hide-section-toggle exterior-finishing'"+(form['toggle-none-exterior-finishing']?'':"style='visibility:hidden;'")+">Not required"
    estimationContent+="<input type='checkbox' id='toggle-none-exterior-finishing' "+(form['toggle-none-exterior-finishing']?'checked':'')+" onclick='toggleNone('exterior-finishing')'/></label>"
    estimationContent+="</header>"

    estimationContent+="<main "+(form['toggle-as-selected-exterior-finishing']?"style='display:flex;'":"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-exterior-finishing'>"
    estimationContent+="<label class='exterior-finishing building-wrap'for='exterior-finishing-building-wrap'>"
    estimationContent+="<input class='checkbox' type='checkbox' "+(form['exterior-finishing-building-wrap']?'checked':'')+" />Building Wrap</label>"
    estimationContent+="<label class='exterior-finishing timber-fascia'for='exterior-finishing-timber-fascia'>"
    estimationContent+="<input class='checkbox' type='checkbox' "+(form['exterior-finishing-timber-fascia']?'checked':'')+" />Timber Fascia</label>"
    estimationContent+="<label class='exterior-finishing rab'for='exterior-finishing-rab'>"
    estimationContent+="<input class='checkbox' type='checkbox' "+(form['exterior-finishing-rab']?'checked':'')+" />RAB</label>"
    estimationContent+="<label class='exterior-finishing metal-fascia'for='exterior-finishing-metal-fascia'>"
    estimationContent+="<input class='checkbox' type='checkbox' "+(form['exterior-finishing-metal-fascia']?'checked':'')+" />Metal Fascia by Others</label>"
    estimationContent+="<label class='exterior-finishing pvc-spouting'for='exterior-finishing-pvc-spouting'>"
    estimationContent+="<input class='checkbox' type='checkbox' "+(form['exterior-finishing-pvc-spouting']?'checked':'')+" />PVC Spouting</label>"
    estimationContent+="<label class='exterior-finishing soffit'for='exterior-finishing-soffit'>"
    estimationContent+="<input class='checkbox' type='checkbox' "+(form['exterior-finishing-soffit']?'checked':'')+" />Soffit</label>"
    estimationContent+="<label class='exterior-finishing eaves-mould'for='exterior-finishing-eaves-mould'>"
    estimationContent+="<input class='checkbox' type='checkbox' "+(form['exterior-finishing-eaves-mould']?'checked':'')+" />Eaves Mould</label>"
    estimationContent+="<label class='exterior-finishing additional'for='exterior-finishing-additional'>Additional Information"
    estimationContent+="<textarea class='textbox estimationAdditional' type='textbox' >"+(form['exterior-finishing-additional'])+"</textarea></label>"

    estimationContent+="</main></div>"

    estimationContent+="<div class='toggle-section cladding'>"
    estimationContent+="<header id='toggle-section-header-cladding' class='toggle-section-header'>Cladding"
    estimationContent+="<label id='label-as-plan-cladding' class='as-plan-toggle cladding' "+(form['as-plan-cladding']?'':"style='visibility:hidden;'")+">As per Plan"
    estimationContent+="<input type='checkbox'  id='as-plan-cladding' "+(form['as-plan-cladding']?'checked':'')+" onclick='toggleAll('cladding')'/></label>"
    estimationContent+="<label id='label-toggle-as-selected-cladding' class='hide-section-toggle cladding' "+(form['toggle-as-selected-cladding']?'':"style='visibility:hidden;'")+">As Selected"
    estimationContent+="<input type='checkbox' id='toggle-as-selected-cladding' "+(form['toggle-as-selected-cladding']?'checked':'')+" onclick='toggleAsSelected('cladding')'/></label>"
    estimationContent+="<label id='label-toggle-none-cladding' class='hide-section-toggle cladding' "+(form['toggle-none-cladding']?'':"style='visibility:hidden;'")+">Not required"
    estimationContent+="<input type='checkbox' id='toggle-none-cladding' "+(form['toggle-none-cladding']?'checked':'')+" onclick='toggleNone('cladding')'/></label>"
    estimationContent+="</header>"

    estimationContent+="<main "+(form['toggle-as-selected-cladding']?"style='display:flex;'":"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-cladding'><label class='cladding brick'for='cladding-brick'>"
    estimationContent+="<input class='checkbox' type='checkbox' "+(form['cladding-brick-check']?'checked':'')+" />Brick</label>"
    estimationContent+="<label class='cladding sheet'for='cladding-sheet'><input class='checkbox' type='checkbox' "+(form['cladding-sheet-check']?'checked':'')+" />Sheet</label>"
    estimationContent+="<label class='cladding w-board'for='cladding-w-board'><input class='checkbox' type='checkbox' "+(form['cladding-w-board-check']?'checked':'')+" />W/Board</label>"
    estimationContent+="<label class='cladding stone-cladding-substrate'for='cladding-stone-cladding-substrate'>"
    estimationContent+="<input class='checkbox' type='checkbox' "+(form['cladding-stone-cladding-substrate']?'checked':'')+" />Stone Cladding Substrate</label>"
    estimationContent+="<label class='cladding additional'for='cladding-additional'>Additional Information"
    estimationContent+="<textarea class='textbox estimationAdditional' type='textbox' name='cladding-additional' >"+(form['cladding-additional'])+"</textarea></label>"
    estimationContent+="</main></div>"

    estimationContent+="<div class='toggle-section insulation'>"
    estimationContent+="<header id='toggle-section-header-insulation' class='toggle-section-header'>Insulation"
    estimationContent+="<label id='label-as-plan-insulation' class='as-plan-toggle insulation' "+(form['as-plan-insulation']?'':"style='visibility:hidden;'")+">As per Plan"
    estimationContent+="<input type='checkbox'  id='as-plan-insulation' "+(form['as-plan-insulation']?'checked':'')+" onclick='toggleAll('insulation')'/></label>"
    estimationContent+="<label id='label-toggle-as-selected-insulation' class='hide-section-toggle insulation' "+(form['toggle-as-selected-insulation']?'':"style='visibility:hidden;'")+">As Selected"
    estimationContent+="<input type='checkbox' id='toggle-as-selected-insulation' "+(form['toggle-as-selected-insulation']?'checked':'')+" onclick='toggleAsSelected('insulation')'/></label>"
    estimationContent+="<label id='label-toggle-none-insulation' class='hide-section-toggle insulation' "+(form['toggle-none-insulation']?'':"style='visibility:hidden;'")+">Not required"
    estimationContent+="<input type='checkbox' id='toggle-none-insulation' "+(form['toggle-none-insulation']?'checked':'')+" onclick='toggleNone('insulation')'/></label>"
    estimationContent+="</header>"

    estimationContent+="<main "+(form['toggle-as-selected-insulation']?"style='display:flex;'":"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-insulation'>"
    estimationContent+="<label class='insulation sub-floor'for='insulation-sub-floor'><input class='check' type='checkbox' "+(form['insulation-sub-floor-check']?'checked':'')+" />Sub Floor</label>"
    estimationContent+="<label class='insulation mid-floor'for='insulation-mid-floor'><input class='check' type='checkbox' "+(form['insulation-mid-floor-check']?'checked':'')+" />Mid Floor</label>"
    estimationContent+="<label class='insulation walls'for='insulation-walls'><input class='check' type='checkbox' "+(form['insulation-walls-check']?'checked':'')+" />Walls</label>"
    estimationContent+="<label class='insulation ceiling'for='insulation-ceiling'><input class='check' type='checkbox' "+(form['insulation-ceiling-check']?'checked':'')+" />Ceiling</label>"
    estimationContent+="<label class='insulation accoustic'for='insulation-accoustic'><input class='check' type='checkbox' "+(form['insulation-accoustic-check']?'checked':'')+" />Accoustic</label>"
    estimationContent+="<label class='insulation garage-walls-ceiling'for='insulation-garage-walls-ceiling'>"
    estimationContent+="<input class='checkbox' type='checkbox' "+(form['insulation-garage-walls-ceiling']?'checked':'')+" />Garage walls/Ceiling (included)</label>"
    estimationContent+="<label class='insulation installation'for='insulation-installation'><input class='checkbox' type='checkbox' "+(form['insulation-installation']?'checked':'')+" />Installation</label>"
    estimationContent+="<label class='insulation additional'for='insulation-additional'>Additional Information"
    estimationContent+="<textarea class='textbox estimationAdditional' type='textbox' name='insulation-additional' >"+(form['insulation-additional'])+"</textarea></label>"
    estimationContent+="</main></div>"

    estimationContent+="<div class='toggle-section interior-linings'>"
    estimationContent+="<header id='toggle-section-header-interior-linings' class='toggle-section-header'>Interior Linings"
    estimationContent+="<label id='label-as-plan-interior-linings' class='as-plan-toggle interior-linings' "+(form['as-plan-interior-linings']?'':"style='visibility:hidden;'")+">As per Plan"
    estimationContent+="<input type='checkbox'  id='as-plan-interior-linings' "+(form['as-plan-interior-linings']?'checked':'')+" onclick='toggleAll('interior-linings')'/></label>"
    estimationContent+="<label id='label-toggle-as-selected-interior-linings' class='toggle-as-selected interior-linings' "+(form['toggle-as-selected-interior-linings']?'':"style='visibility:hidden;'")+">As Selected"
    estimationContent+="<input type='checkbox' id='toggle-as-selected-interior-linings' "+(form['toggle-as-selected-interior-linings']?'checked':'')+" onclick='toggleAsSelected('interior-linings')'/></label>"
    estimationContent+="<label id='label-toggle-none-interior-linings' class='hide-section-toggle interior-linings' "+(form['toggle-none-interior-linings']?'':"style='visibility:hidden;'")+">Not required"
    estimationContent+="<input type='checkbox' id='toggle-none-interior-linings' "+(form['toggle-none-interior-linings']?'checked':'')+" onclick='toggleNone('interior-linings')'/></label>"
    estimationContent+="</header>"

    estimationContent+="<main "+(form['toggle-as-selected-interior-linings']?"style='display:flex;'":"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-interior-linings'>"
    estimationContent+="<label class='interior-linings wall'for='interior-linings-wall'><input class='checkbox' type='checkbox' "+(form['interior-linings-wall']?'checked':'')+" />Wall</label>"
    estimationContent+="<label class='interior-linings wet-wall'for='interior-linings-wet-wall'><input class='checkbox' type='checkbox' "+(form['interior-linings-wet-wall']?'checked':'')+" />Wet Wall</label>"
    estimationContent+="<label class='interior-linings bathroom'for='interior-linings-bathroom'><input class='checkbox' type='checkbox' "+(form['interior-linings-bathroom']?'checked':'')+" />Bathroom</label>"
    estimationContent+="<label class='interior-linings wc'for='interior-linings-wc'><input class='checkbox' type='checkbox' "+(form['interior-linings-wc']?'checked':'')+" />WC</label>"
    estimationContent+="<label class='interior-linings ceiling'for='interior-linings-ceiling'><input class='checkbox' type='checkbox' "+(form['interior-linings-ceiling']?'checked':'')+" />Ceiling</label>"
    estimationContent+="<label class='interior-linings wet-ceiling'for='interior-linings-wet-ceiling'><input class='checkbox' type='checkbox' "+(form['interior-linings-wet-ceiling']?'checked':'')+" />Wet Ceiling</label>"
    estimationContent+="<label class='interior-linings ensuite'for='interior-linings-ensuite'><input class='checkbox' type='checkbox' "+(form['interior-linings-ensuite']?'checked':'')+" />Ensuite</label>"
    estimationContent+="<label class='interior-linings laundry'for='interior-linings-laundry'><input class='checkbox' type='checkbox' "+(form['interior-linings-laundry']?'checked':'')+" />Laundry</label>"
    estimationContent+="<label class='interior-linings additional'for='interior-linings-additional'>Additional Information"
    estimationContent+="<textarea class='textbox estimationAdditional' type='textbox' name='interior-linings-additional' >"+(form['interior-linings-additional'])+"</textarea></label>"
    estimationContent+="</main></div>"

    estimationContent+="<div class='toggle-section interior-doors'>"
    estimationContent+="<header id='toggle-section-header-interior-doors' class='toggle-section-header'>Interior Doors"
    estimationContent+="<label  id='label-as-plan-interior-doors' class='as-plan-toggle interior-doors' "+(form['as-plan-interior-doors']?'':"style='visibility:hidden;'")+">As per Plan"
    estimationContent+="<input type='checkbox'  id='as-plan-interior-doors' "+(form['as-plan-interior-doors']?'checked':'')+" onclick='toggleAll('interior-doors')'/></label>"
    estimationContent+="<label  id='label-toggle-as-selected-interior-doors' class='hide-section-toggle interior-doors' "+(form['toggle-as-selected-interior-doors']?'':"style='visibility:hidden;'")+">As Selected"
    estimationContent+="<input type='checkbox' id='toggle-as-selected-interior-doors' "+(form['toggle-as-selected-interior-doors']?'checked':'')+" onclick='toggleAsSelected('interior-doors')'/></label>"
    estimationContent+="<label  id='label-toggle-none-interior-doors' class='hide-section-toggle interior-doors' "+(form['toggle-none-interior-doors']?'':"style='visibility:hidden;'")+">Not required"
    estimationContent+="<input type='checkbox' id='toggle-none-interior-doors' "+(form['toggle-none-interior-doors']?'checked':'')+" onclick='toggleNone('interior-doors')'/></label>"
    estimationContent+="</header>"

    estimationContent+="<main "+(form['toggle-as-selected-interior-doors']?"style='display:flex;'":"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-interior-doors'>"
    estimationContent+="<label class='interior-doors door-type'for='interior-doors-door-type'><input class='checkbox' type='checkbox' "+(form['interior-doors-door-type']?'checked':'')+" />MDF HC PQ FJ FLAT JAMB</label>"
    estimationContent+="<label class='interior-doors door-hardware'for='interior-doors-door-hardware'><input class='checkbox' type='checkbox' "+(form['interior-doors-door-hardware']?'checked':'')+" />Door Hardware</label>"
    estimationContent+="<label class='interior-doors additional'for='interior-doors-additional'>Additional Information"
    estimationContent+="<textarea class='textbox estimationAdditional' type='textbox' name='interior-doors-additional' >"+(form['interior-doors-additional'])+"</textarea></label>"
    estimationContent+="</main></div>"

    estimationContent+="<div class='toggle-section interior-finishings'>"
    estimationContent+="<header id='toggle-section-header-interior-finishings' class='toggle-section-header'>Interior Finishings"
    estimationContent+="<label  id='label-as-plan-interior-finishings' class='as-plan-toggle interior-finishings' "+(form['as-plan-interior-finishings']?'':"style='visibility:hidden;'")+">As per Plan"
    estimationContent+="<input type='checkbox'  id='as-plan-interior-finishings' "+(form['as-plan-interior-finishings']?'checked':'')+" /></label>"
    estimationContent+="<label  id='label-toggle-as-selected-interior-finishings' class='hide-section-toggle interior-finishings' "+(form['toggle-as-selected-interior-finishings']?'':"style='visibility:hidden;'")+">As Selected"
    estimationContent+="<input type='checkbox' id='toggle-as-selected-interior-finishings' "+(form['toggle-as-selected-interior-finishings']?'checked':'')+" /></label>"
    estimationContent+="<label  id='label-toggle-none-interior-finishings' class='hide-section-toggle interior-finishings' "+(form['toggle-none-interior-finishings']?'':"style='visibility:hidden;'")+">Not required"
    estimationContent+="<input type='checkbox' id='toggle-none-interior-finishings' "+(form['toggle-none-interior-finishings']?'checked':'')+" /></label>"
    estimationContent+="</header>"

    estimationContent+="<main "+(form['toggle-as-selected-interior-finishings']?"style='display:flex;'":"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-interior-finishings'>"
    estimationContent+="<label class='interior-finishings mdf'for='interior-finishings-mdf'>MDF<input class='checkbox' type='checkbox' "+(form['interior-finishings-mdf']?'checked':'')+" /></label>"
    estimationContent+="<label class='interior-finishings f-j'for='interior-finishings-f-j'>F/J<input class='checkbox' type='checkbox' "+(form['interior-finishings-f-j']?'checked':'')+" /></label>"
    estimationContent+="<label class='interior-finishings clears'for='interior-finishings-clears'>Clears<input class='checkbox' type='checkbox' "+(form['interior-finishings-clears']?'checked':'')+" /></label>"
    estimationContent+="<label class='interior-finishings timber-cornice'for='interior-finishings-timber-cornice'>Timber Cornice<input class='checkbox' type='checkbox' "+(form['interior-finishings-timber-cornice']?'checked':'')+" /></label>"
    estimationContent+="<label class='interior-finishings gib-cove'for='interior-finishings-gib-cove'>Gib Cove<input class='checkbox' type='checkbox' "+(form['interior-finishings-gib-cove']?'checked':'')+" /></label>"
    estimationContent+="<label class='interior-finishings skirting'for='interior-finishings-skirting'>Skirting<input class='checkbox' type='checkbox' "+(form['interior-finishings-skirting']?'checked':'')+" /></label>"
    estimationContent+="<label class='interior-finishings architrave'for='interior-finishings-architrave'>Architrave<input class='checkbox' type='checkbox' "+(form['interior-finishings-architrave']?'checked':'')+" /></label>"
    estimationContent+="<label class='interior-finishings wet-areas'for='interior-finishings-wet-areas'>Wet Areas<input class='checkbox' type='checkbox' "+(form['interior-finishings-wet-areas']?'checked':'')+" /></label>"
    estimationContent+="<label class='interior-finishings shelving'for='interior-finishings-shelving'>Shelving<input class='checkbox' type='checkbox' "+(form['interior-finishings-shelving']?'checked':'')+" /></label>"
    estimationContent+="<label class='interior-finishings additional'for='interior-finishings-additional'>Additional Information"
    estimationContent+="<textarea class='textbox estimationAdditional' type='textbox' name='interior-finishings-additional' >"+(form['interior-finishings-additional'])+"</textarea></label>"
    estimationContent+="</main></div>"

    estimationContent+="<div class='toggle-section landscaping'>"
    estimationContent+="<header id='toggle-section-header-landscaping' class='toggle-section-header'>Landscaping"
    estimationContent+="<label id='label-as-plan-landscaping' class='as-plan-toggle landscaping' "+(form['as-plan-landscaping']?'':"style='visibility:hidden;'")+">As per Plan"
    estimationContent+="<input type='checkbox'  id='as-plan-landscaping' "+(form['as-plan-landscaping']?'checked':'')+" /></label>"
    estimationContent+="<label id='label-toggle-as-selected-landscaping' class='hide-section-toggle landscaping' "+(form['toggle-as-selected-landscaping']?'':"style='visibility:hidden;'")+">As Selected"
    estimationContent+="<input type='checkbox' id='toggle-as-selected-landscaping' "+(form['toggle-as-selected-landscaping']?'checked':'')+" /></label>"
    estimationContent+="<label id='label-toggle-none-landscaping' class='hide-section-toggle landscaping' "+(form['toggle-none-landscaping']?'':"style='visibility:hidden;'")+">Not required"
    estimationContent+="<input type='checkbox' id='toggle-none-landscaping' "+(form['toggle-none-landscaping']?'checked':'')+" /></label>"
    estimationContent+="</header>"

    estimationContent+="<main "+(form['toggle-as-selected-landscaping']?"style='display:flex;'":"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-landscaping'>"
    estimationContent+="<label class='landscaping concrete-patios'for='landscaping-concrete-patios'><input class='checkbox' type='checkbox' "+(form['landscaping-concrete-patios']?'checked':'')+" />Concrete Patios</label>"
    estimationContent+="<label class='landscaping ply-deck'for='landscaping-ply-deck'><input class='checkbox' type='checkbox' "+(form['landscaping-ply-deck-check']?'checked':'')+" />Ply Deck</label>"
    estimationContent+="<label class='landscaping decking'for='landscaping-decking'><input class='checkbox' type='checkbox' "+(form['landscaping-decking']?'checked':'')+" />Decking</label>"
    estimationContent+="<label class='landscaping car-port'for='landscaping-car-port'><input class='checkbox' type='checkbox' "+(form['landscaping-car-port']?'checked':'')+" />Carport</label>"
    estimationContent+="<label class='landscaping pergola'for='landscaping-pergola'><input class='checkbox' type='checkbox' "+(form['landscaping-pergola']?'checked':'')+" />Pergola</label>"
    estimationContent+="<label class='landscaping timber-retaining-wall'for='landscaping-timber-retaining-wall'><input class='checkbox' type='checkbox' "+(form['landscaping-timber-retaining-wall']?'checked':'')+" />Timber Retaining Wall</label>"
    estimationContent+="<label class='landscaping additional'for='landscaping-additional'>Additional Information"
    estimationContent+="<textarea class='textbox estimationAdditional' type='textbox' name='landscaping-additional' >"+(form['landscaping-additional'])+"</textarea></label>"
    estimationContent+="</main></div></div></div>"
    if(!form['cancel-estimation']) {
      content += estimationContent
    }

    prenailContentSubmitted+= "<div id='prenail-questions' class=''>"
    prenailContentSubmitted+= "<header class='fullWidthContainer'><h1>Prenail questions</h1></header>"
    prenailContentSubmitted+= "<div class='checkboxContainer'><h3>Wind zone</h3>"
    prenailContentSubmitted+= "<p class='row'><input class='wind' "+(form['prenailMediumWind']?'checked':'')+" type='checkbox'>Medium Wind</p>"
    prenailContentSubmitted+= "<p class='row'><input class='wind' "+(form['prenailHighWind']?'checked':'')+" type='checkbox'>High Wind</p>"
    prenailContentSubmitted+= "<p class='row'><input class='wind' "+(form['prenailVeryWind']?'checked':'')+" type='checkbox'>Very High Wind</p>"
    prenailContentSubmitted+= "<p class='row'><input class='wind' "+(form['prenailExtraWind']?'checked':'')+" type='checkbox'>Extra High Wind</p>"
    prenailContentSubmitted+= "</div><div class='checkboxContainer'><h3>Framing Treatment</h3>"
    prenailContentSubmitted+= "<table class='prenail-table'><caption>Wall Framing Treatment</caption>"
    prenailContentSubmitted+= "<tr><th class='prenail-table-headers'></th><th class='prenail-table-headers'>H1.2</th>"
    prenailContentSubmitted+= "<th class='prenail-table-headers'>H3.2</th><th class='prenail-table-headers'>H3.2 B/Plate</th></tr>"
    prenailContentSubmitted+= "<tr><td class='prenail-table-cells'>Interior</td>"
    prenailContentSubmitted+= "<td class='prenail-table-cells'><input type='checkbox' "+(form['daylePrenailInteriorH1']?'checked':'')+" /></td>"
    prenailContentSubmitted+= "<td class='prenail-table-cells'><input type='checkbox' "+(form['daylePrenailInteriorH3']?'checked':'')+" /></td>"
    prenailContentSubmitted+= "<td class='prenail-table-cells'><input type='checkbox' "+(form['daylePrenailInteriorBPlate']?'checked':'')+" /></td></tr>"
    prenailContentSubmitted+= "<tr><td class='prenail-table-cells'>Exterior</td>"
    prenailContentSubmitted+= "<td class='prenail-table-cells'><input type='checkbox' "+(form['daylePrenailExteriorH1']?'checked':'')+" /></td>"
    prenailContentSubmitted+= "<td class='prenail-table-cells'><input type='checkbox' "+(form['daylePrenailExteriorH3']?'checked':'')+" /></td>"
    prenailContentSubmitted+= "<td class='prenail-table-cells'><input type='checkbox' "+(form['daylePrenailExteriorBPlate']?'checked':'')+" /></td></tr>"
    prenailContentSubmitted+= "<tr><td class='prenail-table-cells'>Wet Areas</td>"
    prenailContentSubmitted+= "<td class='prenail-table-cells'><input type='checkbox' "+(form['daylePrenailWetH1']?'checked':'')+" /></td>"
    prenailContentSubmitted+= "<td class='prenail-table-cells'><input type='checkbox' "+(form['daylePrenailWetH3']?'checked':'')+" /></td>"
    prenailContentSubmitted+= "<td class='prenail-table-cells'><input type='checkbox' "+(form['daylePrenailWetBPlate']?'checked':'')+" /></td></tr>"
    prenailContentSubmitted+= "</table><br />"
    prenailContentSubmitted+= "<table class='prenail-table'><caption>Roof Framing Treatment</caption>"
    prenailContentSubmitted+= "<tr><th class='prenail-table-headers'></th><th class='prenail-table-headers'>H1.2</th><th class='prenail-table-headers'>H3.2</th></tr>"
    prenailContentSubmitted+= "<tr><td class='prenail-table-cells'>Trusses</td>"
    prenailContentSubmitted+= "<td class='prenail-table-cells'><input type='checkbox' "+(form['daylePrenailTrussesH1']?'checked':'')+" /></td>"
    prenailContentSubmitted+= "<td class='prenail-table-cells'><input type='checkbox' "+(form['daylePrenailTrussesH3']?'checked':'')+" /></td></tr>"
    prenailContentSubmitted+= "<tr><td class='prenail-table-cells'>Rafters</td>"
    prenailContentSubmitted+= "<td class='prenail-table-cells'><input type='checkbox' "+(form['daylePrenailRaftersH1']?'checked':'')+" /></td>"
    prenailContentSubmitted+= "<td class='prenail-table-cells'><input type='checkbox' "+(form['daylePrenailRaftersH3']?'checked':'')+" /></td></tr>"
    prenailContentSubmitted+= "</table></div>"
    prenailContentSubmitted+= "<div class='checkboxContainer'><h3>Prenail Extras</h3>"
    prenailContentSubmitted+= "<label><input class='checkbox' type='checkbox' "+(form['prenailFramesCheck']?'checked':'')+"  />"
    prenailContentSubmitted+= "Prenail Wall Frames<input type='text' value='"+(form['prenailFramesText'])+"' class='single-input' /></label>"
    prenailContentSubmitted+= "<label><input class='checkbox' type='checkbox' "+(form['prenailTrussesCheck']?'checked':'')+"  />"
    prenailContentSubmitted+= "Trusses<input type='text' value='"+(form['prenailTrussesText'])+"' class='single-input' /></label>"
    prenailContentSubmitted+= "<label><input class='checkbox' type='checkbox' "+(form['prenailPrecutRaftersCheck']?'checked':'')+"  />"
    prenailContentSubmitted+= "Precut Rafters<input type='text' value='"+(form['prenailPrecutRaftersText'])+"' class='single-input' /></label>"
    prenailContentSubmitted+= "<label><input class='checkbox' type='checkbox' "+(form['prenailPrecutRoofCheck']?'checked':'')+"  />"
    prenailContentSubmitted+= "Precut balance of Roof<input type='text' value='"+(form['prenailPrecutRoofText'])+"' class='single-input' /></label>"
    prenailContentSubmitted+= "</div>"
    prenailContentSubmitted+= "<div class='checkboxContainer'><header><h4>Other : TBC by Prenail Supplier, must be detailed</h4></header>"
    prenailContentSubmitted+= "<label>LVL Beams<input class='single-input' type='checkbox' "+(form['daylesPrenailLVLBeams']?'checked':'')+"  />"
    prenailContentSubmitted+= "eg in Mid floor / roof, lintels as per prenail/ engineer</label>"
    prenailContentSubmitted+= "<label>Glulam Beams<input class='single-input' type='checkbox' "+(form['daylesPrenailGulamBeams']?'checked':'')+"  />"
    prenailContentSubmitted+= "eg in Mid floor / roof, lintels as per prenail/ engineer</label>"
    prenailContentSubmitted+= "<label>Flitch Beams<input class='single-input' type='checkbox' "+(form['daylesPrenailFlitchBeams']?'checked':'')+"  />"
    prenailContentSubmitted+= "eg in Mid floor / roof, lintels as per prenail/ engineer</label>"
    prenailContentSubmitted+= "<label>Double top plate loose<input class='single-input' type='checkbox' "+(form['daylesPrenailDoubleTop']?'checked':'')+"  />"
    prenailContentSubmitted+= "double top plates will come nailed by default</label>"
    prenailContentSubmitted+= "<label>Studlok / lintel lok<input class='single-input' type='checkbox' "+(form['daylesPrenailStudlok']?'checked':'')+"  />"
    prenailContentSubmitted+= "premium service, additional charges apply</label>"
    prenailContentSubmitted+= "</div></div>"
    content += prenailContentSubmitted

    content += formFoot
    generalOutsourcingContent+= head + styles + headEnd + clientDetails + formFoot
    var prenailContent = ''+head+styles+headEnd+clientDetails+prenailContentSubmitted+formFoot
    var estCompleteContent = "" + head+styles+headEnd+clientDetails+estimationContent+formFoot

    var generalOutsourcingBody = ""
    generalOutsourcingBody += "A new Job has been submitted by " +form['quote-info-sales-rep']
    generalOutsourcingBody += " from ITM " +form['template-selection']
    generalOutsourcingBody += ".<br>This job requires some estimation, When you receive this email, please Click this"
    generalOutsourcingBody += "<a href='"
    generalOutsourcingBody += "mailto:shaun@hillsideitm.co.nz?subject=Recepient%20Received%20Job%20"
    generalOutsourcingBody += jobNumber+"&body=Just%20letting%20you%20know%20we%20receivedVthe%20job'>link</a>"
    generalOutsourcingBody += "to confirm you have received the job. Jobs that haven't been confirmed will expire in 3 Business Days. "

    generalOutsourcingBody+= "<br>Please see the bellow links to the plan files uploaded for this job"


    var uploadedPrenailPDF
    var uploadedPrenailHTML
    var prenailOutput = "A new Job has been submitted by "+form['quote-info-sales-rep']+"' For "+form['template-selection']

    if(!form['cancel-outsourcing']) {
      var outsourcedBlob = Utilities.newBlob(generalOutsourcingContent, "text/html", "text.html");
      var outsourcedPdf = outsourcedBlob.getAs("application/pdf");
      uploadedOutsourcedPDF = JobFolder.createFile(outsourcedPdf).setName("pdf Outsource request "+form['job-info-address']+".pdf");
      uploadedOutsourcedHTML = JobFolder.createFile("html Outsource request "+form['job-info-address']+".html", generalOutsourcingContent, MimeType.HTML);
      uploadedOutsourcedPDF.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
      uploadedOutsourcedPDF.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      uploadedOutsourcedHTML.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
      uploadedOutsourcedHTML.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    }



    if(form['outsourcing-selection-prenail-turangi'] ||form['outsourcing-selection-prenail-ntml'] ||form['outsourcing-selection-prenail-dayles'] || form['outsourcing-selection-prenail-vip'] || form['outsourcing-selection-prenail-ift']) {
      var prenailBlob = Utilities.newBlob(prenailContent, "text/html", "text.html");
      var prenailPdf = prenailBlob.getAs("application/pdf");
      uploadedPrenailPDF = JobFolder.createFile(prenailPdf).setName("pdf Prenail request "+form['job-info-address']+".pdf");
      uploadedPrenailHTML = JobFolder.createFile("html Prenail request "+form['job-info-address']+".html", prenailContent, MimeType.HTML);
      uploadedPrenailPDF.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
      uploadedPrenailPDF.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      uploadedPrenailHTML.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
      uploadedPrenailHTML.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    }

    var uploadedEstimationPDF
    var uploadedEstimationHTML
    var estimationOutput = "A new Job has been submitted by "+form['quote-info-sales-rep']+"' For "+form['template-selection']

    if(!form['cancel-estimation']) {
      var estimationBlob = Utilities.newBlob(estCompleteContent, "text/html", "text.html");
      var estimationPdf = estimationBlob.getAs("application/pdf");
      uploadedEstimationPDF = JobFolder.createFile(estimationPdf).setName("pdf Estimation request "+form['job-info-address']+".pdf");
      uploadedEstimationHTML = JobFolder.createFile("html Estimation request "+form['job-info-address']+".html", estCompleteContent, MimeType.HTML);

      uploadedEstimationPDF.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
      uploadedEstimationPDF.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      uploadedEstimationHTML.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
      uploadedEstimationHTML.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    }

    var blob = Utilities.newBlob(content, "text/html", "text.html");
    var pdf = blob.getAs("application/pdf");
    var uploadedPDF = JobFolder.createFile(pdf).setName("pdf "+form['job-info-address']+".pdf");
    var uploadedHTML = JobFolder.createFile("html "+form['job-info-address']+".html", content, MimeType.HTML);

    var jobInfoTextFile = JobFolder.createFile("csv "+form['job-info-address']+".csv", textContent);

    uploadedHTML.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
    uploadedHTML.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    uploadedPDF.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
    uploadedPDF.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    jobInfoTextFile.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
    jobInfoTextFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

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
    var output = "Job Submitted successfully, "
    var fileLinks = "<br>Below are your file Links"
    if(uploadedFiles.length) {
      for(var it = 0; it < uploadedFiles.length; it++) {
        fileLinks += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedFiles[it].getId() + "'>Link to "+ uploadedFiles[it].getName() + "</a>";
      }
    }
    output +=fileLinks
    output += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedHTML.getId() + "'>Link to form as HTML </a>";
    output += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedPDF.getId() + "'>Link to form as PDF </a>";
    output += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ jobInfoTextFile.getId() + "'>Link to CSV </a>";
    if(form['job-info-dropbox-links']) {
      output += "<br>DropBox Links <br> " + form['job-info-dropbox-links']
    }


    // output += "<br> <strong>PDF File is currently experiencing difficulties. Please download HTML file, open in new window, and print as PDF for pdf copy.</strong>"
    output += "<br> This is the job number "+ jobNumber;
    output += "<br> Job Client is "+ form['customer-info-name'];
    prenailOutput += "<br> This is the job number "+ jobNumber;
    prenailOutput += "<br> Job Client is "+ form['customer-info-name'];

    // email subjects
    var genericSubject = 'New job, number '+ jobNumber + ', has been submitted to the quotes portal by: ' + form['quote-info-sales-rep'] + ' for client ' + form['customer-info-name']

    var quotesOutput = "<br>This email was sent to: <br><ul>"

    if(!form['cancel-outsourcing']) {
      output += "<br> <h2>Outsourcing</h2>"

      output += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedOutsourcedHTML.getId() + "'>Link to General Outsourcing file as HTML </a>";
      output += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedOutsourcedPDF.getId() + "'>Link to General Outsourcing file as PDF </a>";

      generalOutsourcingBody += fileLinks
      generalOutsourcingBody += "<br /> Please see included link to Original Quote request information"
      generalOutsourcingBody += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedOutsourcedHTML.getId() + "'>Link to quote request as HTML </a>";
      generalOutsourcingBody += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedOutsourcedPDF.getId() + "'>Link to quote request as PDF </a>";
      if(form['job-info-dropbox-links']) {
        generalOutsourcingBody += "<br>DropBox Links <br> " + form['job-info-dropbox-links']
      }


      // PreNail
      if(form['outsourcing-selection-prenail-turangi'] ||form['outsourcing-selection-prenail-ntml'] ||form['outsourcing-selection-prenail-dayles'] || form['outsourcing-selection-prenail-vip'] || form['outsourcing-selection-prenail-ift']) {
        output += "<br> <h3>Prenail</h3>"
        output += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedPrenailHTML.getId() + "'>Link to Prenail file as HTML </a>";
        output += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedPrenailPDF.getId() + "'>Link to Prenail file as PDF </a>";
        prenailOutput += "<br /> Please see included link to Request Sheet"
        prenailOutput += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedPrenailHTML.getId() + "'>Link to Prenail request as HTML </a>";
        prenailOutput += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedPrenailPDF.getId() + "'>Link to Prenail request as PDF </a>";
        prenailOutput+= fileLinks
        if(form['job-info-dropbox-links']) {
          prenailOutput += "<br>DropBox Links <br> " + form['job-info-dropbox-links']
        }

      }


      if(form['outsourcing-selection-prenail-turangi']) {
        output += "<br>Sent to turangi for estimation"
        sendEmail(turangiConstEmail, prenailOutput+"turangi", detailingSubject) // email the additional
      }
      if(form['outsourcing-selection-prenail-ntml']) {
        output += "<br>Sent to ntml for estimation"
        sendEmail(ntmlConstEmail, prenailOutput+"ntml", detailingSubject) // email the additional
      }
      if(form['outsourcing-selection-prenail-dayles']) {
        output += "<br>Sent to dayles for estimation"
        sendEmail(dayleConstEmail, prenailOutput+"dayles", detailingSubject) // email the additional
      }

      if(form['outsourcing-selection-prenail-vip']) {
        output += "<br>Sent to VIP for estimation"
        sendEmail(vipConstEmail, prenailOutput+"VIP", detailingSubject) // email the additional
      }

      if(form['outsourcing-selection-prenail-ift']) {
        output += "<br>Sent to IFT for estimation"
        sendEmail(iftConstEmail, prenailOutput+"IFT", detailingSubject) // email the additional
      }


      if(form['outsourcing-selection-reinforcing-united-steel']||form['outsourcing-selection-reinforcing-Summit'] ||form['outsourcing-selection-reinforcing-Freo'] ) {
        output += "<br> <h3>Reinforcing</h3>"
      }

      if(form['outsourcing-selection-reinforcing-united-steel']) {
        output += "<br>Sent to United Steel for estimation"
        sendEmail(unitedSteelConstEmail, "Hi there United steel, <br>" + generalOutsourcingBody, detailingSubject+' United steel') // email the additional
      }

      if(form['outsourcing-selection-reinforcing-Summit']) {
        output += "<br>Sent to Summit for estimation"
        sendEmail(summitConstEmail, "Hi there Summit, <br>" + generalOutsourcingBody, detailingSubject+' Summit') // email the additional
      }

      if(form['outsourcing-selection-reinforcing-Freo']) {
        output += "<br>Sent to FREO for estimation"
        sendEmail(freoConstEmail, "Hi there Freo, <br>" + generalOutsourcingBody, detailingSubject+' Freo') // email the additional
      }

      // Ribraft
      if(form['outsourcing-selection-ribraft-rfl'] || form['outsourcing-selection-ribraft-russel-gordon']) {
        output += "<br> <h3>Ribraft</h3>"
      }

      if(form['outsourcing-selection-ribraft-rfl']) {
        output += "<br>Sent to RFL for estimation"
        sendEmail(rFLConstEmail, "Hi there RFL, <br>" + generalOutsourcingBody, detailingSubject+' RFL') // email the additional
      }

      if(form['outsourcing-selection-ribraft-russel-gordon']) {
        output += "<br>Sent to Russel Gordon for estimation"
        sendEmail(russelGordonConstEmail, "Hi there Russel Gordon, <br>" + generalOutsourcingBody, detailingSubject+' Russel Gordon') // email the additional
      }

      // Joinery
      if(form['outsourcing-selection-joinery-vision'] || form['outsourcing-selection-joinery-tbc']) {
        output += "<br> <h3>Joinery</h3>"
      }

      if(form['outsourcing-selection-joinery-vision']) {
        output += "<br>Sent to Vision for estimation"
        sendEmail(visionConstEmail, "Hi there Vision, <br>" + generalOutsourcingBody, detailingSubject+' Vision') // email the additional
      }

      if(form['outsourcing-selection-joinery-tbc']) {
        output += "<br>Sent to TBC for estimation"
        sendEmail(tBC, "Hi there TBC, <br>" + generalOutsourcingBody, detailingSubject+' TBC') // email the additional
      }

      // Garage Doors
      if(form['outsourcing-selection-garage-doors-dominator']) {
        output += "<br> <h3>Garage Doors</h3>"
      }
      if(form['outsourcing-selection-garage-doors-dominator']) {
        output += "<br>Sent to Dominator for estimation"
        sendEmail(dominatorConstEmail, "Hi there Dominator, <br>" + generalOutsourcingBody, detailingSubject+' Dominator') // email the additional
      }

      //
      // Doors - Internal
      let dia = (form['outsourcing-selection-doors-internal-mahurangi'] || form['outsourcing-selection-doors-internal-doorways'])
      let dib = (form['outsourcing-selection-doors-internal-elite'] || form['outsourcing-selection-doors-internal-nationwide'])
      let dic = (form['outsourcing-selection-doors-internal-bennett-doors'])
      if(dia || dib || dic) {
        output += "<br> <h3>Doors - Internal</h3>"
      }
      if(form['outsourcing-selection-doors-internal-mahurangi']) {
        output += "<br>Sent to Mahurangi for estimation"
        sendEmail(mahurangiConstEmail, "Hi there Mahurangi, <br>" + generalOutsourcingBody, detailingSubject+' Mahurangi') // email the additional
      }

      if(form['outsourcing-selection-doors-internal-doorways']) {
        output += "<br>Sent to Doorways for estimation"
        sendEmail(doorwaysConstEmail, "Hi there Doorways, <br>" + generalOutsourcingBody, detailingSubject+' Doorways') // email the additional
      }

      if(form['outsourcing-selection-doors-internal-elite']) {
        output += "<br>Sent to Elite for estimation"
        sendEmail(eliteConstEmail, "Hi there Elite, <br>" + generalOutsourcingBody, detailingSubject+' Elite') // email the additional
      }

      if(form['outsourcing-selection-doors-internal-nationwide']) {
        output += "<br>Sent to Nationwide for estimation"
        sendEmail(nationwideConstEmail, "Hi there Nationwide, <br>" + generalOutsourcingBody, detailingSubject+' Nationwide') // email the additional
      }

      if(form['outsourcing-selection-doors-internal-bennett-doors']) {
        output += "<br>Sent to Bennett Doors for estimation"
        sendEmail(bennettDoorsConstEmail, "Hi there Bennett Doors, <br>" + generalOutsourcingBody, detailingSubject+' Bennett Doors') // email the additional
      }

      // Insulation
      let insa = form['outsourcing-selection-outsourcing-insualtion-pinkfit'] || form['outsourcing-selection-outsourcing-insualtion-natural']
      let insb = form['outsourcing-selection-outsourcing-insualtion-adl-insulation'] || form['outsourcing-selection-outsourcing-insualtion-smart-energy']
      if(insa || insb) {
        output += "<br> <h3>Insulation</h3>"
      }

      if(form['outsourcing-selection-outsourcing-insualtion-pinkfit']) {
        output += "<br>Sent to Pinkfit for estimation"
        sendEmail(pinkfitConstEmail, "Hi there Pinkfit, <br>" + generalOutsourcingBody, detailingSubject+' Pinkfit') // email the additional
      }

      if(form['outsourcing-selection-outsourcing-insualtion-natural']) {
        output += "<br>Sent to Natural for estimation"
        sendEmail(naturalConstEmail, "Hi there Natural, <br>" + generalOutsourcingBody, detailingSubject+' Natural') // email the additional
      }

      if(form['outsourcing-selection-outsourcing-insualtion-adl-insulation']) {
        output += "<br>Sent to ADL Insulation for estimation"
        sendEmail(aDLInsulationConstEmail, "Hi there ADL Insulation, <br>" + generalOutsourcingBody, detailingSubject+' ADL Insulation') // email the additional
      }

      if(form['outsourcing-selection-outsourcing-insualtion-smart-energy']) {
        output += "<br>Sent to Smart Energy for estimation"
        sendEmail(smartEnergyConstEmail, "Hi there Smart Energy, <br>" + generalOutsourcingBody, detailingSubject+' Smart Energy') // email the additional
      }


      // Structural Steel
      if(form['outsourcing-selection-structural-steel-allwin'] || form['outsourcing-selection-structural-steel-Ecb']) {
        output += "<br> <h3>Structural Steel</h3>"
      }
      if(form['outsourcing-selection-structural-steel-allwin']) {
        output += "<br>Sent to Allwin for estimation"
        sendEmail(allwinConstEmail, "Hi there Allwin, <br>" + generalOutsourcingBody, detailingSubject+' Allwin') // email the additional
      }

      if(form['outsourcing-selection-structural-steel-Ecb']) {
        output += "<br>Sent to ECB for estimation"
        sendEmail(eCBConstEmail, "Hi there ECB, <br>" + generalOutsourcingBody, detailingSubject+' ECB') // email the additional
      }


      // Cladding
      if(form['outsourcing-selection-cladding-rosenfield'] || form['outsourcing-selection-cladding-abodo'] || form['outsourcing-selection-cladding-jsc'] || form['outsourcing-selection-cladding-iti-timspec']) {
        output += "<br> <h3>Cladding</h3>"
      }

      if(form['outsourcing-selection-cladding-rosenfield']) {
        output += "<br>Sent to Rosenfield for estimation"
        sendEmail(rosenfieldConstEmail, "Hi there Rosenfield, <br>" + generalOutsourcingBody, detailingSubject+' Rosenfield') // email the additional
      }

      if(form['outsourcing-selection-cladding-abodo']) {
        output += "<br>Sent to Abodo for estimation"
        sendEmail(abodoConstEmail, "Hi there Abodo, <br>" + generalOutsourcingBody, detailingSubject+' Abodo') // email the additional
      }

      if(form['outsourcing-selection-cladding-jsc']) {
        output += "<br>Sent to JSC for estimation"
        sendEmail(jSCConstEmail, "Hi there JSC, <br>" + generalOutsourcingBody, detailingSubject+' JSC') // email the additional
      }

      if(form['outsourcing-selection-cladding-iti-timspec']) {
        output += "<br>Sent to ITI Timspec for estimation"
        sendEmail(iTITimspecConstEmail, "Hi there ITI Timspec, <br>" + generalOutsourcingBody, detailingSubject+' ITI Timspec') // email the additional
      }


      // Roofing
      let roofa = (form['outsourcing-selection-roofing-new-era-sfi'] || form['outsourcing-selection-roofing-johnson-roofing-sfi'])
      let roofb = (form['outsourcing-selection-roofing-roofing-industries-supply-only'] || form['outsourcing-selection-roofing-sps-shingles'])

      if(roofa || roofb || form['outsourcing-selection-roofing-metalcraft']) {
        output += "<br> <h3>Roofing</h3>"
      }
      if(form['outsourcing-selection-roofing-new-era-sfi']) {
        output += "<br>Sent to New Era SFI for estimation"
        sendEmail(newEraSFIConstEmail, "Hi there New Era SFI, <br>" + generalOutsourcingBody, detailingSubject+' New Era SFI') // email the additional
      }

      if(form['outsourcing-selection-roofing-johnson-roofing-sfi']) {
        output += "<br>Sent to Johnson Roofing SFI for estimation"
        sendEmail(johnsonRoofingSFIConstEmail, "Hi there Johnson Roofing, <br>" + generalOutsourcingBody, detailingSubject+' Johnson Roofing') // email the additional
      }

      if(form['outsourcing-selection-roofing-roofing-industries-supply-only']) {
        output += "<br>Sent to Roofing Industries Supply Only for estimation"
        sendEmail(roofingIndustriesSupplyOnlyConstEmail, "Hi there Roofing Industries, <br>" + generalOutsourcingBody, detailingSubject+' Roofing Industries') // email the additional
      }

      if(form['outsourcing-selection-roofing-sps-shingles']) {
        output += "<br>Sent to SPS Shingles for estimation"
        sendEmail(sPSShinglesConstEmail, "Hi there SPS Shingles, <br>" + generalOutsourcingBody, detailingSubject+' SPS Shingles') // email the additional
      }

      if(form['outsourcing-selection-roofing-metalcraft']) {
        output += "<br>Sent to Metalcraft for estimation"
        sendEmail(metalcraftConstEmail, "Hi there Metalcraft, <br>" + generalOutsourcingBody, detailingSubject+' Metalcraft') // email the additional
      }
    }


    if(!form['cancel-estimation']) {
      output += "<br/><h3>Sent to Quantifying</h3>"
      output += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedEstimationHTML.getId() + "'>Link to estimate request as HTML </a>";
      output += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedEstimationPDF.getId() + "'>Link to estimate request as PDF </a>";
      estimationOutput += "<br /> Please see attatched included link to Request Sheet"
      estimationOutput += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedEstimationHTML.getId() + "'>Link to estimate request as HTML </a>";
      estimationOutput += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedEstimationPDF.getId() + "'>Link to estimate request as PDF </a>";
      estimationOutput+= fileLinks
      sendEmail(quantifierConstEmail, estimationOutput, detailingSubject) // email the additional

    }



    if(form.emailTo){
      sendEmail(form.emailTo, output, detailingSubject) // email the additional
      quotesOutput += "<li>Additional "+form.emailTo+"</li>"
    }

    quotesOutput += "</ul> <br>" + output

    incrementIterator(jobNumerical);
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
