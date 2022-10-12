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
    var detailingSubject = 'New job, number ' + jobNumber + ', issued for: '

    detailingSubject+= 'Uploaded by: ' + form['quote-info-sales-rep'] + ', '
    detailingSubject+= 'For Client: ' + form['customer-info-name'] + ', '

    var content = ""
    var formHeader = ""
    var styles = ""
    var clientDetails = ''
    var outsourcingSelection = ''
    var estimationContent = ''
    var dayleContentSubmitted = ''
    styles+= "<style type='text/css'> body {  text-align: -webkit-center;  background-color: #FFfFFF;  font-family: Sans-serif;}"
    styles+= "form {  width:80em;}"
    styles+= "#heading {  display:flex;  height:100%;  padding: 0em 20em 2em 20em;}"
    styles+= ".store-logo {  width: 15em;}"
    styles+= "#heading .title {  color:red;  width: 15em;}"
    styles+= ".section {  width: 100%;  border: solid black 2px;  padding: 0em 0em 0em 0em;  margin: 1em 0 1em 0;}"
    styles+= ".split-box {  display: flex;}"
    styles+= ".split-box div {  border: solid black 1px;  margin: 1em;}"
    styles+= ".split-box .half-section {  width: 50%;}"
    styles+= ".split-box .third-section {  width: 33.33%;}"
    styles+= "label {min-width: 31%;  display: block;  margin: 2px;  padding: 5px;  text-align: justify;}"
    styles+= ".section header{background-color: gray;  font-weight: bold;  font-size: 20px;  padding-top: 2px;  padding-bottom: 2px;margin-bottom: 3px;}"
    styles+= ".toggle-section header{background-color: gray;font-weight:bold;font-size:20px;padding-top:2px;padding-bottom:2px;margin-bottom: 3px;display:flex;}"
    styles+= ".outsourcing-selection-ul {} .outsourcing-selection-li {}"
    styles+= ".toggle-section-wrapper {  display: flex;  flex-wrap: wrap;}"
    styles+= ".toggle-section {  width: 49.5%;  margin: 2px;  border: solid 1px black;}"
    styles+= ".outsourcing-selection-body { display: flex;  flex-wrap: wrap;}"
    styles+= ".outsourcing-selection-ul { list-style: none;  border: 2px solid black; margin: 4px; padding: 2px; width: 48%; border-radius: 5px; flex-grow: 1;}"
    styles+= ".toggle-section-questions { display: flex;  width: 100%;  flex-wrap: wrap;}</style>"
    content+=styles
    formHeader+= "<form id='myForm' align='center' onsubmit='handleFormSubmit(this)'><header class=' id='heading'>"
    formHeader+= "<image class='store-logo' src='https://westernitm.co.nz/wp-content/uploads/2014/10/ITM-Logo-square-200px-web.jpg'/>    <h2 class='title'>"
    formHeader+= "Estimate request <br /> ITM Hillside</h2></header>  <div class='section' id='quote-info'>"
    content+=formHeader
    clientDetails+= "<header>"
    clientDetails+= "Quote Information"
    clientDetails+= "</header>    <label for='quote-info-reference'>"
    clientDetails+= "Quote Ref"
    clientDetails+= "<input disabled class='single-input' type='text' value='"+form['quote-info-reference']+"'  /></label>    <label for='quote-info-sales-rep'>"
    clientDetails+= "Sales Rep"
    clientDetails+= "<input disabled class='single-input' type='text' value='"+form['quote-info-sales-rep']+"'  /></label>    <label for='quote-info-date-received'>"
    clientDetails+= "Date Received"
    clientDetails+= "<input disabled class='single-input' type='text' value='"+form['quote-info-date-received']+"'  /></label>    <label for='template-selection'>Select Template"
    clientDetails+= "<select class=' value='"+form['template-selection']+"' id='template-selection'>"
    clientDetails+= "<option value='hillside'>Hillside</option>"
    clientDetails+= "<option value='mahia'>Mahia</option>"
    clientDetails+= "<option value='matakana'>Matakana</option>"
    clientDetails+= "</select></label>    <label for='tickbox-preliminary-plan'>"
    clientDetails+= "Preliminary plan"
    clientDetails+= "<input disabled type='checkbox' "+(form['tickbox-preliminary-plan']?'checked':'')+" ></label>    <label for='tickbox-preliminary-plan'>"
    clientDetails+= "Consented plan"
    clientDetails+= "<input disabled type='checkbox' "+(form['tickbox-preliminary-plan']?'checked':'')+" ></label>    <label for='quote-info-plan-version'>"
    clientDetails+= "Plan Version Number"
    clientDetails+= "<input disabled class='single-input' type='text' value='"+form['quote-info-plan-version']+"'  /></label>    <label for='emailTo'>"
    clientDetails+= "Email to"
    clientDetails+= "<input disabled class='single-input' type='text' value='"+form['emailTo']+"' id='emailTo'  /></label>"
    clientDetails+= "</div>"
    clientDetails+= "<div class='section split-box'>"
    clientDetails+= "<div class='half-section' id='customer-info'>"
    clientDetails+= "<header>Customer Information</header>"
    clientDetails+= "<label for='customer-info-value'>Customer Name"
    clientDetails+= "<input disabled class='single-input' type='text' value='"+form['customer-info-name']+"' /></label><label for='customer-info-email'>"
    clientDetails+= "Contact Email"
    clientDetails+= "<input disabled class='single-input' type='text' value='"+form['customer-info-email']+"'  /></label><label for='customer-info-phone'>"
    clientDetails+= "Phone Number<input disabled class='single-input' type='text' value='"+form['customer-info-phone']+"'  /></label></div>"
    clientDetails+= "<div class='half-section' id='job-info'><header>Job Information</header>"
    clientDetails+= "<label for='job-info-address'>Site Address"
    clientDetails+= "<input disabled class='textbox-input' type='text' value='"+form['job-info-address']+"'  /></label></div></div>"
    content+=clientDetails

    outsourcingSelection+= "<div class='outsourcing-selection section'>"
    outsourcingSelection+= "<header>Out Sourcing - send Plans for measure and quote <br />"
    outsourcingSelection+= "Outsourcing not Required <input disabled type='checkbox' class='checkbox' id='cancel-outsourcing' value='"+form['cancel-outsourcing']+"' onclick='toggleOutsourcing()'/>    </header>"
    outsourcingSelection+= "<main class='outsourcing-selection-body' id='outsourcing-selection-body'>"
    outsourcingSelection+= "<ul class='outsourcing-selection-ul prenail'><header>PreNail</header>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'><label for='outsourcing-selection-prenail-turangi'>Turangi ITM"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-prenail-turangi']?'checked':'')+" id='outsourcing-selection-prenail-turangi' /></label>  </li>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'><label for='outsourcing-selection-prenail-ntml'>NTML"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-prenail-ntml']?'checked':'')+"  /></label>  </li>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'><label for='outsourcing-selection-prenail-dayles'>Dayles"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-prenail-dayles']?'checked':'')+"  id='outsourcePrenailDayleid' onclick='outsourcePrenailDayle()'/></label>"
    outsourcingSelection+= "</li></ul><ul class='outsourcing-selection-ul reinforcing'><header>Reinforcing</header>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'>"
    outsourcingSelection+= "<label for='outsourcing-selection-reinforcing-united-steel'>United Steel"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-reinforcing-united-steel']?'checked':'')+"  /></label>  </li>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'><label for='outsourcing-selection-reinforcing-Summit'>Summit"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-reinforcing-Summit']?'checked':'')+"  /></label>  </li>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'><label for='outsourcing-selection-reinforcing-Wyatt'>Wyatt"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-reinforcing-Wyatt']?'checked':'')+"  /></label>  </li>"
    outsourcingSelection+= "</ul><ul class='outsourcing-selection-ul ribraft'><header>Ribraft</header>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'><label for='outsourcing-selection-ribraft-rfl'>RFL"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-ribraft-rfl']?'checked':'')+"  /></label></li>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'>"
    outsourcingSelection+= "<label for='outsourcing-selection-ribraft-russel-gordon'>Russel Gordon"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-ribraft-russel-gordon']?'checked':'')+"  /></label></li>"
    outsourcingSelection+= "</ul><ul class='outsourcing-selection-ul joinery'><header>Joinery</header>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'>"
    outsourcingSelection+= "<label for='outsourcing-selection-joinery-vision'>Vision"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-joinery-vision']?'checked':'')+"  /></label></li>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'>"
    outsourcingSelection+= "<label for='outsourcing-selection-joinery-tbc'>TBC"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-joinery-tbc']?'checked':'')+"  /></label></li>"
    outsourcingSelection+= "</ul><ul class='outsourcing-selection-ul garage-doors'><header>Garage Doors</header>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'>"
    outsourcingSelection+= "<label for='outsourcing-selection-garage-doors-dominator'>dominator"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-garage-doors-dominator']?'checked':'')+"  /></label></li>"
    outsourcingSelection+= "</ul><ul class='outsourcing-selection-ul doors-internal'>"
    outsourcingSelection+= "<header>Doors - Internal</header><li class='outsourcing-selection-li'>"
    outsourcingSelection+= "<label for='outsourcing-selection-doors-internal-mahurangi'>Mahurangi"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-doors-internal-mahurangi']?'checked':'')+"  /></label></li>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'>"
    outsourcingSelection+= "<label for='outsourcing-selection-doors-internal-doorways'>Doorways"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-doors-internal-doorways']?'checked':'')+"  /></label></li>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'><label for='outsourcing-selection-doors-internal-elite'>Elite"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-doors-internal-elite']?'checked':'')+"  /></label></li>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'><label for='outsourcing-selection-doors-internal-nationwide'>Nationwide"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-doors-internal-nationwide']?'checked':'')+"  /></label></li>"
    outsourcingSelection+= "</ul><ul class='outsourcing-selection-ul outsourcing-insualtion'><header>Insulation</header>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'>"
    outsourcingSelection+= "<label for='outsourcing-selection-outsourcing-insualtion-pinkfit'>Pinkfit"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-outsourcing-insualtion-pinkfit']?'checked':'')+"  /></label></li>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'>"
    outsourcingSelection+= "<label for='outsourcing-selection-outsourcing-insualtion-natural'>Natural"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-outsourcing-insualtion-natural']?'checked':'')+"  /></label></li>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'>"
    outsourcingSelection+= "<label for='outsourcing-selection-outsourcing-insualtion-adl-insulation'>ADL Insulation"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-outsourcing-insualtion-adl-insulation']?'checked':'')+"  /></label></li>"
    outsourcingSelection+= "</ul><ul class='outsourcing-selection-ul structural-steel'>"
    outsourcingSelection+= "<header>Structural Steel</header><li class='outsourcing-selection-li'>"
    outsourcingSelection+= "<label for='outsourcing-selection-structural-steel-allwin'>Allwin"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-structural-steel-allwin']?'checked':'')+"  /></label></li>"
    outsourcingSelection+= "</ul><ul class='outsourcing-selection-ul cladding'><header>Cladding</header>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'><label for='outsourcing-selection-cladding-rosenfield'>Rosenfield"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-cladding-rosenfield']?'checked':'')+" /></label></li>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'><label for='outsourcing-selection-cladding-abodo'>Abodo"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-cladding-abodo']?'checked':'')+"  /></label></li>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'><label for='outsourcing-selection-cladding-jsc'>JSC"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-cladding-jsc']?'checked':'')+"  /></label></li></ul>"
    outsourcingSelection+= "<ul class='outsourcing-selection-ul roofing'>"
    outsourcingSelection+= "<header>Roofing</header>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'>"
    outsourcingSelection+= "<label for='outsourcing-selection-roofing-new-era-sfi'>New Era SFI"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-roofing-new-era-sfi']?'checked':'')+" /></label></li>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'>"
    outsourcingSelection+= "<label for='outsourcing-selection-roofing-johnson-roofing-sfi'>Johnson Roofing SFI"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-roofing-johnson-roofing-sfi']?'checked':'')+"  /></label></li>"
    outsourcingSelection+= "<li class='outsourcing-selection-li'>"
    outsourcingSelection+= "<label for='outsourcing-selection-roofing-roofing-industries-material-only'>Roofing Industries Material Only"
    outsourcingSelection+= "<input disabled class='checkbox' type='checkbox' "+(form['outsourcing-selection-roofing-roofing-industries-material-only']?'checked':'')+" /></label></li></ul></main></div>"
    content+= outsourcingSelection


    estimationContent+= "<div class='section' >"
    estimationContent+= "<header class='toggle-section-header'>TICK THE ALL ITEMS BOX OR INDIVIDUAL ITEMS AS REQUIRED <br/>"
    estimationContent+= "Estimation not Required <input disabled type='checkbox' class='checkbox' id='cancel-estimation' value='"+form['cancel-estimation']+"' onclick='toggleEstimation()'/>"
    estimationContent+= "</header>"
    estimationContent+= "<div class='toggle-section-wrapper' id='toggle-section-wrapper'><div class='toggle-section foundations'>"
    estimationContent+= "<header id='toggle-section-header-foundations' class='toggle-section-header'>Foundations"
    estimationContent+= "<label style='display: none;' id='label-status-foundations' class='all-items-toggle foundations' for='toggle-all-foundations'></label>"
    estimationContent+= "<label id='label-toggle-all-foundations' class='all-items-toggle foundations' for='toggle-all-foundations'>All Items"
    estimationContent+= "<input disabled type='checkbox'  id='toggle-all-foundations' value='"+form['toggle-all-foundations']+"' onclick='toggleAll('foundations')' /></label>"
    estimationContent+= "<label id='label-toggle-none-foundations' class='hide-section-toggle foundations' for='toggle-none-foundations'>Not required"
    estimationContent+= "<input disabled type='checkbox' id='toggle-none-foundations' value='"+form['toggle-none-foundations']+"' onclick='toggleNone('foundations')' /></label></header>"
    estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-foundations'>"
    estimationContent+= "<label class='foundations reinforcing-steel'for='foundations-reinforcing-steel'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['foundations-reinforcing-steel']?'checked':'')+" />Reinforcing Steel</label>"
    estimationContent+= "<label class='foundations blocks'for='foundations-blocks'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['foundations-blocks']?'checked':'')+"  />Blocks</label>"
    estimationContent+= "<label class='foundations pod-system'for='foundations-pod-system'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['foundations-pod-system']?'checked':'')+" />Pod System</label>"
    estimationContent+= "<label class='foundations piles'for='foundations-piles'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['foundations-piles']?'checked':'')+" />Piles</label>"

    estimationContent+= "<label class='foundations other'for='foundations-other'>Other"
    estimationContent+= "<input disabled class='text' type='text' value='"+form['foundations-other']+"' /></label>  </main>"

    estimationContent+= "</div><div class='toggle-section timber-floor'>"
    estimationContent+= "<header id='toggle-section-header-timber-floor' class='toggle-section-header'>Timber Floor"
    estimationContent+= "<label style='display: none;' id='label-status-timber-floor' class='all-items-toggle timber-floor' for='toggle-all-timber-floor'></label>"
    estimationContent+= "<label id='label-toggle-all-timber-floor' class='all-items-toggle timber-floor' for='toggle-all-timber-floor'>All Items"
    estimationContent+= "<input disabled type='checkbox'  id='toggle-all-timber-floor' value='"+form['toggle-all-timber-floor']+"' onclick='toggleAll('timber-floor')'/></label>"
    estimationContent+= "<label id='label-toggle-none-timber-floor' class='hide-section-toggle timber-floor' for='toggle-none-timber-floor'>Not required"
    estimationContent+= "<input disabled type='checkbox' id='toggle-none-timber-floor' value='"+form['toggle-none-timber-floor']+"' onclick='toggleNone('timber-floor')'/></label>"
    estimationContent+= "</header>"
    estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-timber-floor'>"
    estimationContent+= "<label class='timber-floor bearers'for='timber-floor-bearers'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['timber-floor-bearers-check']?'checked':'')+"  />Bearers"
    estimationContent+= "<input disabled class='single-input' type='text' value='"+form['timber-floor-bearers-text']+"'  /></label>"
    estimationContent+= "<label class='timber-floor Joists'for='timber-floor-Joists'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['timber-floor-Joists-check']?'checked':'')+"  />Joists"
    estimationContent+= "<input disabled class='single-input' type='text' value='"+form['timber-floor-Joists-text']+"'  /></label>"
    estimationContent+= "<label class='timber-floor flooring'for='timber-floor-flooring'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['timber-floor-flooring-check']?'checked':'')+"  />Flooring"
    estimationContent+= "<input disabled class='single-input' type='text' value='"+form['timber-floor-flooring-text']+"'  /></label>"
    estimationContent+= "<label class='timber-floor wet-area-flooring'for='timber-floor-wet-area-flooring'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['timber-floor-wet-area-flooring-check']?'checked':'')+"  />Wet Area Flooring"
    estimationContent+= "<input disabled class='single-input' type='text' value='"+form['timber-floor-wet-area-flooring-text']+"'  /></label>"
    estimationContent+= "<label class='timber-floor tile-slate-underlay'for='timber-floor-tile-slate-underlay'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['timber-floor-tile-slate-underlay-check']?'checked':'')+"  />Tile & Slate Underlay"
    estimationContent+= "<input disabled class='single-input' type='text' value='"+form['timber-floor-tile-slate-underlay-text']+"'  /></label>"
    estimationContent+= "</main></div>"
    estimationContent+= "<div class='toggle-section wall-framing'>"
    estimationContent+= "<header class='toggle-section-header' id='toggle-section-header-wall-framing'>"
    estimationContent+= "Wall Framing"
    estimationContent+= "<label style='display: none;' id='label-status-wall-framing' class='all-items-toggle wall-framing' for='toggle-all-wall-framing'></label>"
    estimationContent+= "<label id='label-toggle-all-wall-framing' class='all-items-toggle wall-framing' for='toggle-all-wall-framing'>"
    estimationContent+= "All Items"
    estimationContent+= "<input disabled type='checkbox' id='toggle-all-wall-framing' value='"+form['toggle-all-wall-framing']+"' onclick='toggleAll('wall-framing')'/></label>"
    estimationContent+= "<label id='label-toggle-none-wall-framing' class='hide-section-toggle wall-framing' for='toggle-none-wall-framing'>"
    estimationContent+= "Not required"
    estimationContent+= "<input disabled type='checkbox' id='toggle-none-wall-framing' value='"+form['toggle-none-wall-framing']+"' onclick='toggleNone('wall-framing')'/></label>"
    estimationContent+= "</header>"
    estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-wall-framing' >"
    estimationContent+= "<label class='wall-framing prenailer-supplied'for='wall-framing-prenailer-supplied'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['wall-framing-prenailer-supplied']?'checked':'')+" />Supplied by Prenailer - Do not allow</label>"
    estimationContent+= "<label class='wall-framing random'for='wall-framing-random'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['wall-framing-random']?'checked':'')+"  />Random</label>"
    estimationContent+= "<label class='wall-framing capping'for='wall-framing-capping'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['wall-framing-capping']?'checked':'')+"  />Capping</label>"
    estimationContent+= "<label class='wall-framing strapping'for='wall-framing-strapping'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['wall-framing-strapping']?'checked':'')+"  />Strapping</label>"
    estimationContent+= "<label class='wall-framing h-one-two'for='wall-framing-h-one-two'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['wall-framing-h-one-two']?'checked':'')+"  />H1.2</label>"
    estimationContent+= "<label class='wall-framing h-three-two'for='wall-framing-h-three-two'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['wall-framing-h-three-two']?'checked':'')+"  />H3.2</label>"
    estimationContent+= "<label class='wall-framing h-three-plates'for='wall-framing-h-three-plates'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['wall-framing-h-three-plates']?'checked':'')+"  />H3 Plates</label>"
    estimationContent+= "<label class='wall-framing beams'for='wall-framing-beams'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['wall-framing-beams']?'checked':'')+"  />Beams</label>"
    estimationContent+= "<label class='wall-framing posts'for='wall-framing-posts'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['wall-framing-posts']?'checked':'')+"  />Posts</label>"
    estimationContent+= "<label class='wall-framing metal'for='wall-framing-metal'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['wall-framing-metal']?'checked':'')+"  />Metal</label>"
    estimationContent+= "<label class='wall-framing timber'for='wall-framing-timber'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['wall-framing-timber']?'checked':'')+"  />"
    estimationContent+= "Timber</label>"
    estimationContent+= "</main>"
    estimationContent+= "</div><div class='toggle-section roof-framing'>"
    estimationContent+= "<header class='toggle-section-header' id='toggle-section-header-roof-framing'>"
    estimationContent+= "Roof Framing"
    estimationContent+= "<label style='display: none;' id='label-status-roof-framing' class='all-items-toggle roof-framing' for='toggle-all-roof-framing'></label>"
    estimationContent+= "<label id='label-toggle-all-roof-framing' class='all-items-toggle roof-framing' for='toggle-all-roof-framing'>"
    estimationContent+= "All Items"
    estimationContent+= "<input disabled type='checkbox'  id='toggle-all-roof-framing' value='"+form['toggle-all-roof-framing']+"' onclick='toggleAll('roof-framing')'/></label>"
    estimationContent+= "<label id='label-toggle-none-roof-framing' class='hide-section-toggle roof-framing' for='toggle-none-roof-framing'>"
    estimationContent+= "Not required"
    estimationContent+= "<input disabled type='checkbox' id='toggle-none-roof-framing' value='"+form['toggle-none-roof-framing']+"' onclick='toggleNone('roof-framing')'/></label>"
    estimationContent+= "</header>"
    estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-roof-framing'>"
    estimationContent+= "<label class='roof-framing prenailer-supplied'for='roof-framing-prenailer-supplied'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['roof-framing-prenailer-supplied']?'checked':'')+"  />"
    estimationContent+= "Supplied by Prenailer - Do not allow</label>"
    estimationContent+= "<label class='roof-framing bor-pack'for='roof-framing-bor-pack'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['roof-framing-bor-pack']?'checked':'')+"  />"
    estimationContent+= "BOR Pack (as Agreed)</label>"
    estimationContent+= "<label class='roof-framing ply-membrane'for='roof-framing-ply-membrane'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['roof-framing-ply-membrane']?'checked':'')+"  />"
    estimationContent+= "Ply to Membrane Roof</label>"
    estimationContent+= "<label class='roof-framing ply-shingle'for='roof-framing-ply-shingle'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['roof-framing-ply-shingle']?'checked':'')+"  />"
    estimationContent+= "Ply to Shingle Roof</label>"
    estimationContent+= "<label class='roof-framing purlins-only'for='roof-framing-purlins-only'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['roof-framing-purlins-only']?'checked':'')+"  />"
    estimationContent+= "Purlins only</label>"
    estimationContent+= "</main></div><div class='toggle-section exterior-finishing'>"
    estimationContent+= "<header id='toggle-section-header-exterior-finishing' class='toggle-section-header'>"
    estimationContent+= "Exterior Finishings"
    estimationContent+= "<label style='display: none;' id='label-status-exterior-finishing' class='all-items-toggle exterior-finishing' for='toggle-all-exterior-finishing'></label>"
    estimationContent+= "<label id='label-toggle-all-exterior-finishing' class='all-items-toggle exterior-finishing' for='toggle-all-exterior-finishing'>"
    estimationContent+= "All Items"
    estimationContent+= "<input disabled type='checkbox'  id='toggle-all-exterior-finishing' value='"+form['toggle-all-exterior-finishing']+"' onclick='toggleAll('exterior-finishing')'/></label>"
    estimationContent+= "<label id='label-toggle-none-exterior-finishing' class='hide-section-toggle exterior-finishing' for='toggle-none-exterior-finishing'>"
    estimationContent+= "Not required"
    estimationContent+= "<input disabled type='checkbox' id='toggle-none-exterior-finishing' value='"+form['toggle-none-exterior-finishing']+"' onclick='toggleNone('exterior-finishing')'/></label>"
    estimationContent+= "</header>"
    estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-exterior-finishing'>"
    estimationContent+= "<label class='exterior-finishing building-wrap'for='exterior-finishing-building-wrap'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['exterior-finishing-building-wrap']?'checked':'')+"  />"
    estimationContent+= "Building Wrap</label>"
    estimationContent+= "<label class='exterior-finishing timber-fascia'for='exterior-finishing-timber-fascia'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['exterior-finishing-timber-fascia']?'checked':'')+"  />"
    estimationContent+= "Timber Fascia</label>"
    estimationContent+= "<label class='exterior-finishing rab'for='exterior-finishing-rab'>"
    estimationContent+= "RAB<input disabled class='checkbox' type='checkbox' "+(form['exterior-finishing-rab']?'checked':'')+"  />    </label>"
    estimationContent+= "<label class='exterior-finishing metal-fascia'for='exterior-finishing-metal-fascia'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['exterior-finishing-metal-fascia']?'checked':'')+"  />"
    estimationContent+= "Metal Fascia by Others</label>"
    estimationContent+= "<label class='exterior-finishing pvc-spouting'for='exterior-finishing-pvc-spouting'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['exterior-finishing-pvc-spouting']?'checked':'')+"  />"
    estimationContent+= "PVC Spouting</label>"
    estimationContent+= "<label class='exterior-finishing soffit'for='exterior-finishing-soffit'>"
    estimationContent+= "Soffit<input disabled class='checkbox' type='checkbox' "+(form['exterior-finishing-soffit']?'checked':'')+"  /></label>"
    estimationContent+= "<label class='exterior-finishing eaves-mould'for='exterior-finishing-eaves-mould'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['exterior-finishing-eaves-mould']?'checked':'')+"  />"
    estimationContent+= "Eaves Mould</label></main></div>"
    estimationContent+= "<div class='toggle-section cladding'>"
    estimationContent+= "<header id='toggle-section-header-cladding' class='toggle-section-header'>Cladding"
    estimationContent+= "<label style='display: none;' id='label-status-cladding' class='all-items-toggle cladding' for='toggle-all-cladding'></label>"
    estimationContent+= "<label id='label-toggle-all-cladding' class='all-items-toggle cladding' for='toggle-all-cladding'>"
    estimationContent+= "All Items<input disabled type='checkbox'  id='toggle-all-cladding' value='"+form['toggle-all-cladding']+"' onclick='toggleAll('cladding')'/></label>"
    estimationContent+= "<label id='label-toggle-none-cladding' class='hide-section-toggle cladding' for='toggle-none-cladding'>"
    estimationContent+= "Not required<input disabled type='checkbox' id='toggle-none-cladding' value='"+form['toggle-none-cladding']+"' onclick='toggleNone('cladding')'/></label>"
    estimationContent+= "</header>"
    estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-cladding'>"
    estimationContent+= "<label class='cladding brick'for='cladding-brick'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['cladding-brick-check']?'checked':'')+"  />"
    estimationContent+= "Brick<input disabled class='number-input' type='number' value='"+form['cladding-brick-number']+"'  />  Quantity per M²</label>"
    estimationContent+= "<label class='cladding sheet'for='cladding-sheet'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['cladding-sheet-check']?'checked':'')+"  />"
    estimationContent+= "Sheet<input disabled class='single-input' type='text' value='"+form['cladding-sheet-text']+"'  /></label>"
    estimationContent+= "<label class='cladding w-board'for='cladding-w-board'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['cladding-w-board-check']?'checked':'')+"  />"
    estimationContent+= "W/Board<input disabled class='single-input' type='text' value='"+form['cladding-w-board']+"'  /></label>"
    estimationContent+= "<label class='cladding stone-cladding-substrate'for='cladding-stone-cladding-substrate'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['cladding-stone-cladding-substrate']?'checked':'')+"  />"
    estimationContent+= "Stone Cladding Substrate</label></main></div>"
    estimationContent+= "<div class='toggle-section insulation'><header id='toggle-section-header-insulation' class='toggle-section-header'>"
    estimationContent+= "Insulation"
    estimationContent+= "<label style='display: none;' id='label-status-insulation' class='all-items-toggle insulation' for='toggle-all-insulation'></label>"
    estimationContent+= "<label id='label-toggle-all-insulation' class='all-items-toggle insulation' for='toggle-all-insulation'>"
    estimationContent+= "All Items"
    estimationContent+= "<input disabled type='checkbox'  id='toggle-all-insulation' value='"+form['toggle-all-insulation']+"' onclick='toggleAll('insulation')'/></label>"
    estimationContent+= "<label id='label-toggle-none-insulation' class='hide-section-toggle insulation' for='toggle-none-insulation'>"
    estimationContent+= "Not required"
    estimationContent+= "<input disabled type='checkbox' id='toggle-none-insulation' value='"+form['toggle-none-insulation']+"' onclick='toggleNone('insulation')'/></label></header>"
    estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-insulation'><label class='insulation sub-floor'for='insulation-sub-floor'>"
    estimationContent+= "<input disabled class='check' type='checkbox' "+(form['insulation-sub-floor-check']?'checked':'')+"  />"
    estimationContent+= "Sub Floor<input disabled class='single-input' type='text' value='"+form['insulation-sub-floor-text']+"'  /></label>"
    estimationContent+= "<label class='insulation mid-floor'for='insulation-mid-floor'>"
    estimationContent+= "<input disabled class='check' type='checkbox' "+(form['insulation-mid-floor-check']?'checked':'')+"  />"
    estimationContent+= "Mid Floor<input disabled class='single-input' type='text' value='"+form['insulation-mid-floor-text']+"'  /></label>"

    estimationContent+= "<label class='insulation walls'for='insulation-walls'>"
    estimationContent+= "<input disabled class='check' type='checkbox' "+(form['insulation-walls-check']?'checked':'')+"  />"
    estimationContent+= "Walls<input disabled class='single-input' type='text' value='"+form['insulation-walls-text']+"'  /></label>"

    estimationContent+= "<label class='insulation ceiling'for='insulation-ceiling'>"
    estimationContent+= "<input disabled class='check' type='checkbox' "+(form['insulation-ceiling-check']?'checked':'')+"  />"
    estimationContent+= "Ceiling<input disabled class='single-input' type='text' value='"+form['insulation-ceiling-text']+"'  /></label>"
    estimationContent+= "<label class='insulation accoustic'for='insulation-accoustic'>"
    estimationContent+= "<input disabled class='check' type='checkbox' "+(form['insulation-accoustic-check']?'checked':'')+"  />"
    estimationContent+= "Accoustic<input disabled class='single-input' type='text' value='"+form['insulation-accoustic-text']+"'  /></label>"
    estimationContent+= "<label class='insulation garage-walls-ceiling'for='insulation-garage-walls-ceiling'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['insulation-garage-walls-ceiling']?'checked':'')+"  />Garage walls/Ceiling (included)</label>"
    estimationContent+= "<label class='insulation installation'for='insulation-installation'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['insulation-installation']?'checked':'')+"  />Installation</label></main></div>"
    estimationContent+= "<div class='toggle-section interior-linings'>"
    estimationContent+= "<header id='toggle-section-header-interior-linings' class='toggle-section-header'>Interior Linings"
    estimationContent+= "<label style='display: none;' id='label-status-interior-linings' class='all-items-toggle interior-linings' for='toggle-all-interior-linings'></label>"
    estimationContent+= "<label id='label-toggle-all-interior-linings' value='"+form['toggle-all-interior-linings']+"' class='all-items-toggle interior-linings'>All Items"
    estimationContent+= "<input disabled type='checkbox'  id='toggle-all-interior-linings' onclick='toggleAll('interior-linings')'/></label>"
    estimationContent+= "<label id='label-toggle-none-interior-linings' value='"+form['toggle-none-interior-linings']+"' class='hide-section-toggle interior-linings'>Not required"
    estimationContent+= "<input disabled type='checkbox' id='toggle-none-interior-linings' onclick='toggleNone('interior-linings')'/></label></header>"
    estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-interior-linings'><label class='interior-linings wall'for='interior-linings-wall'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-linings-wall']?'checked':'')+"  />Wall</label>"
    estimationContent+= "<label class='interior-linings wet-wall'for='interior-linings-wet-wall'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-linings-wet-wall']?'checked':'')+"  />Wet Wall</label>"
    estimationContent+= "<label class='interior-linings bathroom'for='interior-linings-bathroom'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-linings-bathroom']?'checked':'')+"  />Bathroom</label>"
    estimationContent+= "<label class='interior-linings wc'for='interior-linings-wc'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-linings-wc']?'checked':'')+"  />WC</label>"
    estimationContent+= "<label class='interior-linings ceiling'for='interior-linings-ceiling'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-linings-ceiling']?'checked':'')+"  />Ceiling</label>"
    estimationContent+= "<label class='interior-linings wet-ceiling'for='interior-linings-wet-ceiling'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-linings-wet-ceiling']?'checked':'')+"  />Wet Ceiling</label>"
    estimationContent+= "<label class='interior-linings ensuite'for='interior-linings-ensuite'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-linings-ensuite']?'checked':'')+"  />Ensuite</label>"
    estimationContent+= "<label class='interior-linings laundry'for='interior-linings-laundry'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-linings-laundry']?'checked':'')+"  />Laundry</label>"
    estimationContent+= "<label class='interior-linings other'for='interior-linings-other'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-linings-other']?'checked':'')+"  />Other</label></main></div>"
    estimationContent+= "<div class='toggle-section interior-doors'>"
    estimationContent+= "<header id='toggle-section-header-interior-doors' class='toggle-section-header'>Interior Doors"
    estimationContent+= "<label style='display: none;'  id='label-status-interior-doors' class='all-items-toggle interior-doors' for='toggle-all-interior-doors'></label>"
    estimationContent+= "<label  id='label-toggle-all-interior-doors' class='all-items-toggle interior-doors' for='toggle-all-interior-doors'>All Items"
    estimationContent+= "<input disabled type='checkbox'  id='toggle-all-interior-doors' value='"+form['toggle-all-interior-doors']+"' onclick='toggleAll('interior-doors')'/></label>"
    estimationContent+= "<label  id='label-toggle-none-interior-doors' class='hide-section-toggle interior-doors' for='toggle-none-interior-doors'>Not required"
    estimationContent+= "<input disabled type='checkbox' id='toggle-none-interior-doors' value='"+form['toggle-none-interior-doors']+"' onclick='toggleNone('interior-doors')'/></label></header>"
    estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-interior-doors'><label class='interior-doors door-type'for='interior-doors-door-type'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-doors-door-type']?'checked':'')+"  />MDF HC PQ FJ FLAT JAMB</label>"
    estimationContent+= "<label class='interior-doors door-hardware'for='interior-doors-door-hardware'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-doors-door-hardware']?'checked':'')+"  />Door Hardware</label>"
    estimationContent+= "</main>"
    estimationContent+= "</div><div class='toggle-section interior-finishings'>"
    estimationContent+= "<header id='toggle-section-header-interior-finishings' class='toggle-section-header'>Interior Finishings"
    estimationContent+= "<label style='display: none;'id='label-status-interior-finishings' class='all-items-toggle interior-finishings' for='toggle-all-interior-finishings'></label>"
    estimationContent+= "<label  id='label-toggle-all-interior-finishings' value='"+form['toggle-all-interior-finishings']+"' class='all-items-toggle interior-finishings'>All Items"
    estimationContent+= "<input disabled type='checkbox'  id='toggle-all-interior-finishings' onclick='toggleAll('interior-finishings')'/></label>"
    estimationContent+= "<label id='label-toggle-none-interior-finishings' value='"+form['toggle-none-interior-finishings']+"' class='hide-section-toggle interior-finishings'>Not required"
    estimationContent+= "<input disabled type='checkbox' id='toggle-none-interior-finishings' onclick='toggleNone('interior-finishings')'/></label></header>"
    estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-interior-finishings'>"
    estimationContent+= "<label class='interior-finishings mdf'for='interior-finishings-mdf'>MDF"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-finishings-mdf']?'checked':'')+"  /></label>"
    estimationContent+= "<label class='interior-finishings f-j'for='interior-finishings-f-j'>F/J"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-finishings-f-j']?'checked':'')+"  /></label>"
    estimationContent+= "<label class='interior-finishings clears'for='interior-finishings-clears'>Clears"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-finishings-clears']?'checked':'')+"  /></label>"
    estimationContent+= "<label class='interior-finishings timber-cornice'for='interior-finishings-timber-cornice'>Timber Cornice"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-finishings-timber-cornice']?'checked':'')+"  /></label>"
    estimationContent+= "<label class='interior-finishings gib-cove'for='interior-finishings-gib-cove'>Gib Cove"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-finishings-gib-cove']?'checked':'')+"  /></label>"
    estimationContent+= "<label class='interior-finishings skirting'for='interior-finishings-skirting'>Skirting"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-finishings-skirting']?'checked':'')+"  /></label>"
    estimationContent+= "<label class='interior-finishings architrave'for='interior-finishings-architrave'>Architrave"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-finishings-architrave']?'checked':'')+"  /></label>"
    estimationContent+= "<label class='interior-finishings wet-areas'for='interior-finishings-wet-areas'>Wet Areas"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-finishings-wet-areas']?'checked':'')+"  /></label>"
    estimationContent+= "<label class='interior-finishings shelving'for='interior-finishings-shelving'>Shelving"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['interior-finishings-shelving']?'checked':'')+"  /></label>"
    estimationContent+= "</main></div><div class='toggle-section landscaping'>"
    estimationContent+= "<header id='toggle-section-header-landscaping' class='toggle-section-header'>Landscaping"
    estimationContent+= "<label style='display: none;' id='label-status-landscaping' class='all-items-toggle landscaping' for='toggle-all-landscaping'></label>"
    estimationContent+= "<label id='label-toggle-all-landscaping' class='all-items-toggle landscaping' for='toggle-all-landscaping'>All Items"
    estimationContent+= "<input disabled type='checkbox'  id='toggle-all-landscaping' value='"+form['toggle-all-landscaping']+"' onclick='toggleAll('landscaping')'/></label>"
    estimationContent+= "<label id='label-toggle-none-landscaping' class='hide-section-toggle landscaping' for='toggle-none-landscaping'>Not required"
    estimationContent+= "<input disabled type='checkbox' id='toggle-none-landscaping' value='"+form['toggle-none-landscaping']+"' onclick='toggleNone('landscaping')'/></label>"
    estimationContent+= "</header><main class='toggle-section-questions' id='toggle-section-questions-landscaping'>"
    estimationContent+= "<label class='landscaping concrete-patios'for='landscaping-concrete-patios'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['landscaping-concrete-patios']?'checked':'')+"  />Concrete Patios</label>"
    estimationContent+= "<label class='landscaping ply-deck'for='landscaping-ply-deck'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['landscaping-ply-deck-check']?'checked':'')+"  />Ply Deck"
    estimationContent+= "<input disabled class='single-input' type='text' value='"+form['landscaping-ply-deck-text']+"'  /></label>"
    estimationContent+= "<label class='landscaping decking'for='landscaping-decking'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['landscaping-decking']?'checked':'')+"  />Decking</label>"
    estimationContent+= "<label class='landscaping car-port'for='landscaping-car-port'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['landscaping-car-port']?'checked':'')+"  />Carport</label>"
    estimationContent+= "<label class='landscaping pergola'for='landscaping-pergola'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['landscaping-pergola']?'checked':'')+"  />Pergola</label>"
    estimationContent+= "<label class='landscaping timber-retaining-wall'for='landscaping-timber-retaining-wall'>"
    estimationContent+= "<input disabled class='checkbox' type='checkbox' "+(form['landscaping-timber-retaining-wall']?'checked':'')+"  />Timber Retaining Wall</label>"
    estimationContent+= "</main></div></div></div>"
    content+= estimationContent

    dayleContentSubmitted+= "<div id='Dayles-prenail-questions' class=' style='display:none'><header><h1>Dayle Prenail questions</h1>"
    dayleContentSubmitted+= "Dayle email test: <input disabled type='email' value='"+form['dayle-test-email']+"' /></header>"
    dayleContentSubmitted+= "<label>Prenail Frames<input disabled class='single-input' type='text' value='"+form['daylesPrenailFrames']+"' /></label>"
    dayleContentSubmitted+= "<label>Bottom Plates<input disabled class='single-input' type='text' value='"+form['daylesBottomPlates']+"' /></label>"
    dayleContentSubmitted+= "<label>Trusses / Balance of Roof / Cut Roof<input disabled class='single-input' type='text' value='"+form['daylesTrusses']+"' /></label>"
    dayleContentSubmitted+= "<label>Chimney framing<input disabled class='single-input' type='checkbox' "+(form['daylesChimneyFraming']?'checked':'')+" /></label>"
    dayleContentSubmitted+= "<label>LVL Beams<input disabled class='single-input' type='checkbox' "+(form['daylesLVLBeams']?'checked':'')+" /></label>"
    dayleContentSubmitted+= "<label>Glulam Beams<input disabled class='single-input' type='checkbox' "+(form['daylesChimneyFraming']?'checked':'')+" /></label>"
    dayleContentSubmitted+= "<label>Porch Posts<input disabled class='single-input' type='checkbox' "+(form['daylesChimneyFraming']?'checked':'')+" /></label>"
    dayleContentSubmitted+= "<label>Verandah Posts<input disabled class='single-input' type='checkbox' "+(form['daylesChimneyFraming']?'checked':'')+" /></label>"
    dayleContentSubmitted+= "<label>Enclosed balustrades interior<input disabled class='single-input' type='checkbox' "+(form['daylesChimneyFraming']?'checked':'')+"/></label>"
    dayleContentSubmitted+= "<label>Enclosed balustrades exterior<input disabled class='single-input' type='checkbox' "+(form['daylesChimneyFraming']?'checked':'')+"/></label></div>"
    content+= dayleContentSubmitted
    content+= "</form>"


    var uploadedDaylePDF
    var uploadedDayleHTML
    var dayleOutput = "A new Job has been submitted by "+form['quote-info-sales-rep']+"' For "+form['template-selection']
    var dayleContent = "";

    if(form['outsourcing-selection-prenail-dayles']) {
      dayleContent+= "<style>.page-header {display:flex}"
      dayleContent+= ".wrapper {max-width: 900px;}"
      dayleContent+= ".quote-info-wrapper {display:flex;flex-wrap: wrap;}"
      dayleContent+= "label {margin: 5px;}</style>"
      dayleContent+= "<div class='wrapper'>"
      dayleContent+= "<header class='page-header' style = ''>"
      dayleContent+= "<img src='https://www.earthimpressions.co.nz/wp-content/uploads/2021/07/Logo_ITM.jpg' />"
      dayleContent+= "<h2>Prenail Estimate Request Sheet</h2></header>"
      dayleContent+= "<table class=''>"
      dayleContent+= "<tr><td>Client name:"+form['customer-info-name']+"</td><td>Job name:"+form['job-info-address']+"' </td></tr>"
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
      var dayleBlob = Utilities.newBlob(dayleContent, "text/html", "text.html");
      var daylePdf = dayleBlob.getAs("application/pdf");
      uploadedDaylePDF = JobFolder.createFile(daylePdf).setName("pdf Dayle request "+form['job-info-address']+".pdf");
      uploadedDayleHTML = JobFolder.createFile("html Dayle request "+form['job-info-address']+".html", dayleContent, MimeType.HTML);
      uploadedDaylePDF.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
      uploadedDaylePDF.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      uploadedDayleHTML.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
      uploadedDayleHTML.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);


    }

    var uploadedEstimationPDF
    var uploadedEstimationHTML
    var estimationOutput = "A new Job has been submitted by "+form['quote-info-sales-rep']+"' For "+form['template-selection']

    if(!form['cancel-estimation']) {
      var estCompleteContent = "" + styles+formHeader+clientDetails+estimationContent+'</form>'


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

    // output += "<br> <strong>PDF File is currently experiencing difficulties. Please download HTML file, open in new window, and print as PDF for pdf copy.</strong>"
    output += "<br> This is the job number "+ jobNumber;
    output += "<br> Job Client is "+ form.cClient;
    dayleOutput += "<br> This is the job number "+ jobNumber;
    dayleOutput += "<br> Job Client is "+ form.cClient;

    // email subjects
    var genericSubject = 'New job, number '+ jobNumber + ', has been submitted to the quotes portal by: ' + form.cRep + ' for client ' + form.cClient

    var quotesOutput = "<br>This email was sent to: <br><ul>"

    // PreNail
    if(form['outsourcing-selection-prenail-turangi'] ||form['outsourcing-selection-prenail-ntml'] ||form['outsourcing-selection-prenail-dayles'] ) {
      output += "<br> <h3>Prenail</h3>"
    }

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
       dayleOutput += "<br /> Please see attatched included link to Request Sheet"
       dayleOutput += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedDayleHTML.getId() + "'>Link to Dayle request as HTML </a>";
       dayleOutput += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedDaylePDF.getId() + "'>Link to Dayle request as PDF </a>";
       dayleOutput+= fileLinks
       sendEmail(form['dayle-test-email'], dayleOutput, detailingSubject) // email the additional

     }




     // Reinforcing
     if(form['outsourcing-selection-reinforcing-united-steel'] ||form['outsourcing-selection-reinforcing-Summit'] ||form['outsourcing-selection-reinforcing-Wyatt'] ) {

     output += "<br> <h3>Reinforcing</h3>"
   }
      if(form['outsourcing-selection-reinforcing-united-steel']) {
        output += "<br>Sent to united-steel for estimation"

      }
      if(form['outsourcing-selection-reinforcing-Summit']) {
        output += "<br>Sent to Summit for estimation"
      }
      if(form['outsourcing-selection-reinforcing-Wyatt']) {
        output += "<br>Sent to Wyatt for estimation"
      }

      if(!form['cancel-estimation']) {
        output += "<br/><h3>Sent to Quantifying</h3>"
        output += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedEstimationHTML.getId() + "'>Link to estimate request as HTML </a>";
        output += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedEstimationPDF.getId() + "'>Link to estimate request as PDF </a>";
        estimationOutput += "<br /> Please see attatched included link to Request Sheet"
        estimationOutput += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedEstimationHTML.getId() + "'>Link to estimate request as HTML </a>";
        estimationOutput += "<br> <a href='" + "http://drive.google.com/uc?export=download&id="+ uploadedEstimationPDF.getId() + "'>Link to estimate request as PDF </a>";
        estimationOutput+= fileLinks
        sendEmail(form['estimation-test-email'], estimationOutput, detailingSubject) // email the additional

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
