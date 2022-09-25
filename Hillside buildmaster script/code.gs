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
  
    content+= "<form id='myForm' align='center' onsubmit='handleFormSubmit(this)'><header class=' id='heading'>"
    content+= "<image class='store-logo' src='https://westernitm.co.nz/wp-content/uploads/2014/10/ITM-Logo-square-200px-web.jpg'/>    <h2 class='title'>"
    content+= "Estimate request <br /> ITM Hillside</h2></header>  <div class='section' id='quote-info'>"
    content+= "<header>"
    content+= "Quote Information"
    content+= "</header>    <label for='quote-info-reference'>"
    content+= "Quote Ref"
    content+= "<input class='single-input' type='text' value="+form['quote-info-reference']+"  /></label>    <label for='quote-info-sales-rep'>"
    content+= "Sales Rep"
    content+= "<input class='single-input' type='text' value="+form['quote-info-sales-rep']+"  /></label>    <label for='quote-info-date-received'>"
    content+= "Date Received"
    content+= "<input class='single-input' type='text' value="+form['quote-info-date-received']+"  /></label>    <label for='template-selection'>Select Template"
    content+= "<select class=' value="+form['template-selection']+" id='template-selection'>"
    content+= "<option value='hillside'>Hillside</option>"
    content+= "<option value='mahia'>Mahia</option>"
    content+= "<option value='matakana'>Matakana</option>"
    content+= "</select></label>    <label for='tickbox-preliminary-plan'>"
    content+= "Preliminary plan"
    content+= "<input type='checkbox' value="+form['tickbox-preliminary-plan']+" ></label>    <label for='tickbox-preliminary-plan'>"
    content+= "Consented plan"
    content+= "<input type='checkbox' value="+form['tickbox-preliminary-plan']+" ></label>    <label for='quote-info-plan-version'>"
    content+= "Plan Version Number"
    content+= "<input class='single-input' type='text' value="+form['quote-info-plan-version']+"  /></label>    <label for='emailTo'>"
    content+= "Email to"
    content+= "<input class='single-input' type='text' value="+form['emailTo']+" id='emailTo'  /></label>"
    content+= "</div>"
    content+= "<div class='section split-box'>"
    content+= "<div class='half-section' id='customer-info'>"
    content+= "<header>Customer Information</header>"
    content+= "<label for='customer-info-value'>Customer Name"
    content+= "<input class='single-input' type='text' value="+form['customer-info-value']+" /></label><label for='customer-info-email'>"
    content+= "Contact Email"
    content+= "<input class='single-input' type='text' value="+form['customer-info-email']+"  /></label><label for='customer-info-phone'>"
    content+= "Phone Number"
    content+= "<input class='single-input' type='text' value="+form['customer-info-phone']+"  /></label>    </div>"
    content+= "<div class='half-section' id='job-info'>"
    content+= "<header>"
    content+= "Job Information"
    content+= "</header>"
    content+= "<label for='job-info-address'>"
    content+= "Site Address"
    content+= "<input class='textbox-input' type='text' value="+form['job-info-address']+"  /></label>    </div>"
    content+= "</div>"
    content+= "<div class='outsourcing-selection section'>"
    content+= "<header>Out Sourcing - send Plans for measure and quote <br />"
    content+= "Outsourcing not Required <input type='checkbox' class='checkbox' id='cancel-outsourcing' value="+form['cancel-outsourcing']+" onclick='toggleOutsourcing()'/>    </header>"
    content+= "<main class='outsourcing-selection-body' id='outsourcing-selection-body'>"
    content+= "<ul class='outsourcing-selection-ul prenail'>"
    content+= "<header>PreNail</header>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-prenail-turangi'>"
    content+= "Turangi ITM"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-prenail-turangi']+" id='outsourcing-selection-prenail-turangi' /></label>  </li>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-prenail-ntml'>"
    content+= "NTML"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-prenail-ntml']+"  /></label>  </li>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-prenail-dayles'>"
    content+= "Dayles"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-prenail-dayles']+"  id='outsourcePrenailDayleid' onclick='outsourcePrenailDayle()'/></label>"
    content+= "</li>"
    content+= "</ul>"
    content+= "<ul class='outsourcing-selection-ul reinforcing'>"
    content+= "<header>Reinforcing</header>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-reinforcing-united-steel'>"
    content+= "United Steel"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-reinforcing-united-steel']+"  /></label>  </li>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-reinforcing-Summit'>"
    content+= "Summit"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-reinforcing-Summit']+"  /></label>  </li>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-reinforcing-Wyatt'>"
    content+= "Wyatt"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-reinforcing-Wyatt']+"  /></label>  </li>"
    content+= "</ul><ul class='outsourcing-selection-ul ribraft'>"
    content+= "<header>Ribraft</header>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-ribraft-rfl'>"
    content+= "RFL"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-ribraft-rfl']+"  /></label>"
    content+= "</li>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-ribraft-russel-gordon'>"
    content+= "Russel Gordon"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-ribraft-russel-gordon']+"  /></label>"
    content+= "</li>"
    content+= "</ul><ul class='outsourcing-selection-ul joinery'>"
    content+= "<header>Joinery</header>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-joinery-vision'>"
    content+= "Vision"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-joinery-vision']+"  /></label>"
    content+= "</li>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-joinery-tbc'>"
    content+= "TBC"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-joinery-tbc']+"  /></label>"
    content+= "</li>"
    content+= "</ul><ul class='outsourcing-selection-ul garage-doors'>"
    content+= "<header>Garage Doors</header>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-garage-doors-dominator'>"
    content+= "dominator"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-garage-doors-dominator']+"  /></label>"
    content+= "</li>"
    content+= "</ul>"
    content+= "<ul class='outsourcing-selection-ul doors-internal'>"
    content+= "<header>Doors - Internal</header><li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-doors-internal-mahurangi'>Mahurangi"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-doors-internal-mahurangi']+"  /></label>"
    content+= "</li>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-doors-internal-doorways'>"
    content+= "Doorways"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-doors-internal-doorways']+"  /></label>"
    content+= "</li>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-doors-internal-elite'>"
    content+= "Elite"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-doors-internal-elite']+"  /></label>"
    content+= "</li>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-doors-internal-nationwide'>"
    content+= "Nationwide"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-doors-internal-nationwide']+"  /></label>"
    content+= "</li>"
    content+= "</ul><ul class='outsourcing-selection-ul outsourcing-insualtion'>"
    content+= "<header>Insulation</header>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-outsourcing-insualtion-pinkfit'>"
    content+= "Pinkfit"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-outsourcing-insualtion-pinkfit']+"  /></label>"
    content+= "</li>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-outsourcing-insualtion-natural'>"
    content+= "Natural"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-outsourcing-insualtion-natural']+"  /></label>"
    content+= "</li>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-outsourcing-insualtion-adl-insulation'>"
    content+= "ADL Insulation"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-outsourcing-insualtion-adl-insulation']+"  /></label>"
    content+= "</li>"
    content+= "</ul><ul class='outsourcing-selection-ul structural-steel'>"
    content+= "<header>Structural Steel</header>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-structural-steel-allwin'>"
    content+= "Allwin"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-structural-steel-allwin']+"  /></label>"
    content+= "</li>"
    content+= "</ul><ul class='outsourcing-selection-ul cladding'>"
    content+= "<header>Cladding</header>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-cladding-rosenfield'>"
    content+= "Rosenfield"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-cladding-rosenfield']+" /></label></li>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-cladding-abodo'>Abodo"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-cladding-abodo']+"  /></label></li>"
    content+= "<li class='outsourcing-selection-li'><label for='outsourcing-selection-cladding-jsc'>JSC"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-cladding-jsc']+"  /></label></li></ul>"
    content+= "<ul class='outsourcing-selection-ul roofing'>"
    content+= "<header>Roofing</header>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-roofing-new-era-sfi'>New Era SFI"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-roofing-new-era-sfi']+" /></label></li>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-roofing-johnson-roofing-sfi'>Johnson Roofing SFI"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-roofing-johnson-roofing-sfi']+"  /></label></li>"
    content+= "<li class='outsourcing-selection-li'>"
    content+= "<label for='outsourcing-selection-roofing-roofing-industries-material-only'>Roofing Industries Material Only"
    content+= "<input class='checkbox' type='checkbox' value="+form['outsourcing-selection-roofing-roofing-industries-material-only']+" /></label></li></ul></main></div>"
    content+= "<div class='section' >"
    content+= "<header class='toggle-section-header'>"
    content+= "TICK THE ALL ITEMS BOX OR INDIVIDUAL ITEMS AS REQUIRED <br/>"
    content+= "Estimation not Required <input type='checkbox' class='checkbox' id='cancel-estimation' value="+form['cancel-estimation']+" onclick='toggleEstimation()'/>"
    content+= "</header>"
    content+= "<div class='toggle-section-wrapper' id='toggle-section-wrapper'>"
    content+= "<div class='toggle-section foundations'>"
    content+= "<header id='toggle-section-header-foundations' class='toggle-section-header'>"
    content+= "Foundations"
    content+= "<label style='display: none;' id='label-status-foundations' class='all-items-toggle foundations' for='toggle-all-foundations'></label>"
    content+= "<label id='label-toggle-all-foundations' class='all-items-toggle foundations' for='toggle-all-foundations'>"
    content+= "All Items"
    content+= "<input type='checkbox'  id='toggle-all-foundations' value="+form['toggle-all-foundations']+" onclick='toggleAll('foundations')' /></label>"
    content+= "<label id='label-toggle-none-foundations' class='hide-section-toggle foundations' for='toggle-none-foundations'>"
    content+= "Not required"
    content+= "<input type='checkbox' id='toggle-none-foundations' value="+form['toggle-none-foundations']+" onclick='toggleNone('foundations')' /></label>"
    content+= "</header>"
    content+= "<main class='toggle-section-questions' id='toggle-section-questions-foundations'>"
    content+= "<label class='foundations reinforcing-steel'for='foundations-reinforcing-steel'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['foundations-reinforcing-steel']+"  />"
    content+= "Reinforcing Steel</label>"
    content+= "<label class='foundations blocks'for='foundations-blocks'>"
    content+= "<input class='checkbox' type='checkbox' checkbox='foundations-blocks'  />"
    content+= "Blocks</label>"
    content+= "<label class='foundations pod-system'for='foundations-pod-system'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['foundations-pod-system']+"  />"
    content+= "Pod System</label>"
    content+= "<label class='foundations piles'for='foundations-piles'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['foundations-piles']+"  />"
    content+= "Piles</label>"
    content+= "<label class='foundations other'for='foundations-other'>"
    content+= "Other"
    content+= "<input class='text' type='text' value="+form['foundations-other']+"  /></label>  </main>"
    content+= "</div><div class='toggle-section timber-floor'>"
    content+= "<header id='toggle-section-header-timber-floor' class='toggle-section-header'>"
    content+= "Timber Floor"
    content+= "<label style='display: none;' id='label-status-timber-floor' class='all-items-toggle timber-floor' for='toggle-all-timber-floor'></label>"
    content+= "<label id='label-toggle-all-timber-floor' class='all-items-toggle timber-floor' for='toggle-all-timber-floor'>"
    content+= "All Items"
    content+= "<input type='checkbox'  id='toggle-all-timber-floor' value="+form['toggle-all-timber-floor']+" onclick='toggleAll('timber-floor')'/></label>"
    content+= "<label id='label-toggle-none-timber-floor' class='hide-section-toggle timber-floor' for='toggle-none-timber-floor'>"
    content+= "Not required"
    content+= "<input type='checkbox' id='toggle-none-timber-floor' value="+form['toggle-none-timber-floor']+" onclick='toggleNone('timber-floor')'/></label>"
    content+= "</header>"
    content+= "<main class='toggle-section-questions' id='toggle-section-questions-timber-floor'>"
    content+= "<label class='timber-floor bearers'for='timber-floor-bearers'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['timber-floor-bearers']+"  />"
    content+= "Bearers"
    content+= "<input class='single-input' type='text' value="+form['timber-floor-bearers']+"  /></label>"
    content+= "<label class='timber-floor Joists'for='timber-floor-Joists'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['timber-floor-Joists']+"  />"
    content+= "Joists"
    content+= "<input class='single-input' type='text' value="+form['timber-floor-Joists']+"  /></label>"
    content+= "<label class='timber-floor flooring'for='timber-floor-flooring'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['timber-floor-flooring']+"  />"
    content+= "Flooring"
    content+= "<input class='single-input' type='text' value="+form['timber-floor-flooring']+"  /></label>"
    content+= "<label class='timber-floor wet-area-flooring'for='timber-floor-wet-area-flooring'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['timber-floor-wet-area-flooring']+"  />"
    content+= "Wet Area Flooring"
    content+= "<input class='single-input' type='text' value="+form['timber-floor-wet-area-flooring']+"  /></label>"
    content+= "<label class='timber-floor tile-slate-underlay'for='timber-floor-tile-slate-underlay'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['timber-floor-tile-slate-underlay']+"  />"
    content+= "Tile & Slate Underlay"
    content+= "<input class='single-input' type='text' value="+form['timber-floor-tile-slate-underlay']+"  /></label>"
    content+= "</main>"
    content+= "</div>"
    content+= "<div class='toggle-section wall-framing'>"
    content+= "<header class='toggle-section-header' id='toggle-section-header-wall-framing'>"
    content+= "Wall Framing"
    content+= "<label style='display: none;' id='label-status-wall-framing' class='all-items-toggle wall-framing' for='toggle-all-wall-framing'></label>"
    content+= "<label id='label-toggle-all-wall-framing' class='all-items-toggle wall-framing' for='toggle-all-wall-framing'>"
    content+= "All Items"
    content+= "<input type='checkbox' id='toggle-all-wall-framing' value="+form['toggle-all-wall-framing']+" onclick='toggleAll('wall-framing')'/></label>"
    content+= "<label id='label-toggle-none-wall-framing' class='hide-section-toggle wall-framing' for='toggle-none-wall-framing'>"
    content+= "Not required"
    content+= "<input type='checkbox' id='toggle-none-wall-framing' value="+form['toggle-none-wall-framing']+" onclick='toggleNone('wall-framing')'/></label>"
    content+= "</header>"
    content+= "<main class='toggle-section-questions' id='toggle-section-questions-wall-framing' >"
    content+= "<label class='wall-framing prenailer-supplied'for='wall-framing-prenailer-supplied'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['wall-framing-prenailer-supplied']+"  />"
    content+= "Supplied by Prenailer - Do not allow</label>"
    content+= "<label class='wall-framing random'for='wall-framing-random'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['wall-framing-random']+"  />"
    content+= "Random</label>"
    content+= "<label class='wall-framing capping'for='wall-framing-capping'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['wall-framing-capping']+"  />"
    content+= "Capping</label>"
    content+= "<label class='wall-framing strapping'for='wall-framing-strapping'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['wall-framing-strapping']+"  />"
    content+= "Strapping</label>"
    content+= "<label class='wall-framing h-one-two'for='wall-framing-h-one-two'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['wall-framing-h-one-two']+"  />"
    content+= "H1.2</label>"
    content+= "<label class='wall-framing h-three-two'for='wall-framing-h-three-two'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['wall-framing-h-three-two']+"  />"
    content+= "H3.2</label>"
    content+= "<label class='wall-framing h-three-plates'for='wall-framing-h-three-plates'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['wall-framing-h-three-plates']+"  />"
    content+= "H3 Plates</label>"
    content+= "<label class='wall-framing beams'for='wall-framing-beams'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['wall-framing-beams']+"  />"
    content+= "Beams</label>"
    content+= "<label class='wall-framing posts'for='wall-framing-posts'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['wall-framing-posts']+"  />"
    content+= "Posts</label>"
    content+= "<label class='wall-framing metal'for='wall-framing-metal'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['wall-framing-metal']+"  />"
    content+= "Metal</label>"
    content+= "<label class='wall-framing timber'for='wall-framing-timber'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['wall-framing-timber']+"  />"
    content+= "Timber</label>"
    content+= "</main>"
    content+= "</div><div class='toggle-section roof-framing'>"
    content+= "<header class='toggle-section-header' id='toggle-section-header-roof-framing'>"
    content+= "Roof Framing"
    content+= "<label style='display: none;' id='label-status-roof-framing' class='all-items-toggle roof-framing' for='toggle-all-roof-framing'></label>"
    content+= "<label id='label-toggle-all-roof-framing' class='all-items-toggle roof-framing' for='toggle-all-roof-framing'>"
    content+= "All Items"
    content+= "<input type='checkbox'  id='toggle-all-roof-framing' value="+form['toggle-all-roof-framing']+" onclick='toggleAll('roof-framing')'/></label>"
    content+= "<label id='label-toggle-none-roof-framing' class='hide-section-toggle roof-framing' for='toggle-none-roof-framing'>"
    content+= "Not required"
    content+= "<input type='checkbox' id='toggle-none-roof-framing' value="+form['toggle-none-roof-framing']+" onclick='toggleNone('roof-framing')'/></label>"
    content+= "</header>"
    content+= "<main class='toggle-section-questions' id='toggle-section-questions-roof-framing'>"
    content+= "<label class='roof-framing prenailer-supplied'for='roof-framing-prenailer-supplied'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['roof-framing-prenailer-supplied']+"  />"
    content+= "Supplied by Prenailer - Do not allow</label>"
    content+= "<label class='roof-framing bor-pack'for='roof-framing-bor-pack'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['roof-framing-bor-pack']+"  />"
    content+= "BOR Pack (as Agreed)</label>"
    content+= "<label class='roof-framing ply-membrane'for='roof-framing-ply-membrane'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['roof-framing-ply-membrane']+"  />"
    content+= "Ply to Membrane Roof</label>"
    content+= "<label class='roof-framing ply-shingle'for='roof-framing-ply-shingle'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['roof-framing-ply-shingle']+"  />"
    content+= "Ply to Shingle Roof</label>"
    content+= "<label class='roof-framing purlins-only'for='roof-framing-purlins-only'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['roof-framing-purlins-only']+"  />"
    content+= "Purlins only</label>"
    content+= "</main></div><div class='toggle-section exterior-finishing'>"
    content+= "<header id='toggle-section-header-exterior-finishing' class='toggle-section-header'>"
    content+= "Exterior Finishings"
    content+= "<label style='display: none;' id='label-status-exterior-finishing' class='all-items-toggle exterior-finishing' for='toggle-all-exterior-finishing'></label>"
    content+= "<label id='label-toggle-all-exterior-finishing' class='all-items-toggle exterior-finishing' for='toggle-all-exterior-finishing'>"
    content+= "All Items"
    content+= "<input type='checkbox'  id='toggle-all-exterior-finishing' value="+form['toggle-all-exterior-finishing']+" onclick='toggleAll('exterior-finishing')'/></label>"
    content+= "<label id='label-toggle-none-exterior-finishing' class='hide-section-toggle exterior-finishing' for='toggle-none-exterior-finishing'>"
    content+= "Not required"
    content+= "<input type='checkbox' id='toggle-none-exterior-finishing' value="+form['toggle-none-exterior-finishing']+" onclick='toggleNone('exterior-finishing')'/></label>"
    content+= "</header>"
    content+= "<main class='toggle-section-questions' id='toggle-section-questions-exterior-finishing'>"
    content+= "<label class='exterior-finishing building-wrap'for='exterior-finishing-building-wrap'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['exterior-finishing-building-wrap']+"  />"
    content+= "Building Wrap</label>"
    content+= "<label class='exterior-finishing timber-fascia'for='exterior-finishing-timber-fascia'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['exterior-finishing-timber-fascia']+"  />"
    content+= "Timber Fascia</label>"
    content+= "<label class='exterior-finishing rab'for='exterior-finishing-rab'>"
    content+= "RAB<input class='checkbox' type='checkbox' value="+form['exterior-finishing-rab']+"  />    </label>"
    content+= "<label class='exterior-finishing metal-fascia'for='exterior-finishing-metal-fascia'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['exterior-finishing-metal-fascia']+"  />"
    content+= "Metal Fascia by Others</label>"
    content+= "<label class='exterior-finishing pvc-spouting'for='exterior-finishing-pvc-spouting'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['exterior-finishing-pvc-spouting']+"  />"
    content+= "PVC Spouting</label>"
    content+= "<label class='exterior-finishing soffit'for='exterior-finishing-soffit'>"
    content+= "Soffit<input class='checkbox' type='checkbox' value="+form['exterior-finishing-soffit']+"  /></label>"
    content+= "<label class='exterior-finishing eaves-mould'for='exterior-finishing-eaves-mould'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['exterior-finishing-eaves-mould']+"  />"
    content+= "Eaves Mould</label></main></div>"
    content+= "<div class='toggle-section cladding'>"
    content+= "<header id='toggle-section-header-cladding' class='toggle-section-header'>"
    content+= "Cladding"
    content+= "<label style='display: none;' id='label-status-cladding' class='all-items-toggle cladding' for='toggle-all-cladding'></label>"
    content+= "<label id='label-toggle-all-cladding' class='all-items-toggle cladding' for='toggle-all-cladding'>"
    content+= "All Items<input type='checkbox'  id='toggle-all-cladding' value="+form['toggle-all-cladding']+" onclick='toggleAll('cladding')'/></label>"
    content+= "<label id='label-toggle-none-cladding' class='hide-section-toggle cladding' for='toggle-none-cladding'>"
    content+= "Not required<input type='checkbox' id='toggle-none-cladding' value="+form['toggle-none-cladding']+" onclick='toggleNone('cladding')'/></label>"
    content+= "</header>"
    content+= "<main class='toggle-section-questions' id='toggle-section-questions-cladding'>"
    content+= "<label class='cladding brick'for='cladding-brick'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['cladding-brick-check']+"  />"
    content+= "Brick<input class='number-input' type='number' value="+form['cladding-brick-number']+"  />  Quantity per M²</label>"
    content+= "<label class='cladding sheet'for='cladding-sheet'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['cladding-sheet-check']+"  />"
    content+= "Sheet<input class='single-input' type='text' value="+form['cladding-sheet-text']+"  /></label>"
    content+= "<label class='cladding w-board'for='cladding-w-board'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['cladding-w-board-check']+"  />"
    content+= "W/Board<input class='single-input' type='text' value="+form['cladding-w-board']+"  /></label>"
    content+= "<label class='cladding stone-cladding-substrate'for='cladding-stone-cladding-substrate'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['cladding-stone-cladding-substrate']+"  />"
    content+= "Stone Cladding Substrate</label></main></div>"
    content+= "<div class='toggle-section insulation'><header id='toggle-section-header-insulation' class='toggle-section-header'>"
    content+= "Insulation"
    content+= "<label style='display: none;' id='label-status-insulation' class='all-items-toggle insulation' for='toggle-all-insulation'></label>"
    content+= "<label id='label-toggle-all-insulation' class='all-items-toggle insulation' for='toggle-all-insulation'>"
    content+= "All Items"
    content+= "<input type='checkbox'  id='toggle-all-insulation' value="+form['toggle-all-insulation']+" onclick='toggleAll('insulation')'/></label>"
    content+= "<label id='label-toggle-none-insulation' class='hide-section-toggle insulation' for='toggle-none-insulation'>"
    content+= "Not required"
    content+= "<input type='checkbox' id='toggle-none-insulation' value="+form['toggle-none-insulation']+" onclick='toggleNone('insulation')'/></label></header>"
    content+= "<main class='toggle-section-questions' id='toggle-section-questions-insulation'><label class='insulation sub-floor'for='insulation-sub-floor'>"
    content+= "<input class='check' type='checkbox' value="+form['insulation-sub-floor-check']+"  />"
    content+= "Sub Floor<input class='single-input' type='text' value="+form['insulation-sub-floor-text']+"  /></label>"
    content+= "<label class='insulation mid-floor'for='insulation-mid-floor'>"
    content+= "<input class='check' type='checkbox' value="+form['insulation-mid-floor-check']+"  />"
    content+= "Mid Floor<input class='single-input' type='text' value="+form['insulation-mid-floor-text']+"  /></label>"
    content+= "<label class='insulation walls'for='insulation-walls'>"
    content+= "<input class='check' type='checkbox' value="+form['insulation-walls-check']+"  />"
    content+= "Walls<input class='single-input' type='text' value="+form['insulation-walls-text']+"  /></label>"
    content+= "<label class='insulation ceiling'for='insulation-ceiling'>"
    content+= "<input class='check' type='checkbox' value="+form['insulation-ceiling-check']+"  />"
    content+= "Ceiling<input class='single-input' type='text' value="+form['insulation-ceiling-text']+"  /></label>"
    content+= "<label class='insulation accoustic'for='insulation-accoustic'>"
    content+= "<input class='check' type='checkbox' value="+form['insulation-accoustic-check']+"  />"
    content+= "Accoustic<input class='single-input' type='text' value="+form['insulation-accoustic-text']+"  /></label>"
    content+= "<label class='insulation garage-walls-ceiling'for='insulation-garage-walls-ceiling'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['insulation-garage-walls-ceiling']+"  />Garage walls/Ceiling (included)</label>"
    content+= "<label class='insulation installation'for='insulation-installation'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['insulation-installation']+"  />Installation</label></main></div>"
    content+= "<div class='toggle-section interior-linings'>"
    content+= "<header id='toggle-section-header-interior-linings' class='toggle-section-header'>Interior Linings"
    content+= "<label style='display: none;' id='label-status-interior-linings' class='all-items-toggle interior-linings' for='toggle-all-interior-linings'></label>"
    content+= "<label id='label-toggle-all-interior-linings' value="+form['toggle-all-interior-linings']+" class='all-items-toggle interior-linings'>All Items"
    content+= "<input type='checkbox'  id='toggle-all-interior-linings' onclick='toggleAll('interior-linings')'/></label>"
    content+= "<label id='label-toggle-none-interior-linings' value="+form['toggle-none-interior-linings']+" class='hide-section-toggle interior-linings'>Not required"
    content+= "<input type='checkbox' id='toggle-none-interior-linings' onclick='toggleNone('interior-linings')'/></label></header>"
    content+= "<main class='toggle-section-questions' id='toggle-section-questions-interior-linings'><label class='interior-linings wall'for='interior-linings-wall'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-linings-wall']+"  />Wall</label>"
    content+= "<label class='interior-linings wet-wall'for='interior-linings-wet-wall'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-linings-wet-wall']+"  />Wet Wall</label>"
    content+= "<label class='interior-linings bathroom'for='interior-linings-bathroom'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-linings-bathroom']+"  />Bathroom</label>"
    content+= "<label class='interior-linings wc'for='interior-linings-wc'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-linings-wc']+"  />WC</label>"
    content+= "<label class='interior-linings ceiling'for='interior-linings-ceiling'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-linings-ceiling']+"  />Ceiling</label>"
    content+= "<label class='interior-linings wet-ceiling'for='interior-linings-wet-ceiling'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-linings-wet-ceiling']+"  />Wet Ceiling</label>"
    content+= "<label class='interior-linings ensuite'for='interior-linings-ensuite'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-linings-ensuite']+"  />Ensuite</label>"
    content+= "<label class='interior-linings laundry'for='interior-linings-laundry'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-linings-laundry']+"  />Laundry</label>"
    content+= "<label class='interior-linings other'for='interior-linings-other'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-linings-other']+"  />Other</label></main></div>"
    content+= "<div class='toggle-section interior-doors'>"
    content+= "<header id='toggle-section-header-interior-doors' class='toggle-section-header'>Interior Doors"
    content+= "<label style='display: none;'  id='label-status-interior-doors' class='all-items-toggle interior-doors' for='toggle-all-interior-doors'></label>"
    content+= "<label  id='label-toggle-all-interior-doors' class='all-items-toggle interior-doors' for='toggle-all-interior-doors'>All Items"
    content+= "<input type='checkbox'  id='toggle-all-interior-doors' value="+form['toggle-all-interior-doors']+" onclick='toggleAll('interior-doors')'/></label>"
    content+= "<label  id='label-toggle-none-interior-doors' class='hide-section-toggle interior-doors' for='toggle-none-interior-doors'>Not required"
    content+= "<input type='checkbox' id='toggle-none-interior-doors' value="+form['toggle-none-interior-doors']+" onclick='toggleNone('interior-doors')'/></label></header>"
    content+= "<main class='toggle-section-questions' id='toggle-section-questions-interior-doors'><label class='interior-doors door-type'for='interior-doors-door-type'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-doors-door-type']+"  />MDF HC PQ FJ FLAT JAMB</label>"
    content+= "<label class='interior-doors door-hardware'for='interior-doors-door-hardware'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-doors-door-hardware']+"  />Door Hardware</label>"
    content+= "</main>"
    content+= "</div><div class='toggle-section interior-finishings'>"
    content+= "<header id='toggle-section-header-interior-finishings' class='toggle-section-header'>Interior Finishings"
    content+= "<label style='display: none;'id='label-status-interior-finishings' class='all-items-toggle interior-finishings' for='toggle-all-interior-finishings'></label>"
    content+= "<label  id='label-toggle-all-interior-finishings' value="+form['toggle-all-interior-finishings']+" class='all-items-toggle interior-finishings'>All Items"
    content+= "<input type='checkbox'  id='toggle-all-interior-finishings' onclick='toggleAll('interior-finishings')'/></label>"
    content+= "<label id='label-toggle-none-interior-finishings' value="+form['toggle-none-interior-finishings']+" class='hide-section-toggle interior-finishings'>Not required"
    content+= "<input type='checkbox' id='toggle-none-interior-finishings' onclick='toggleNone('interior-finishings')'/></label></header>"
    content+= "<main class='toggle-section-questions' id='toggle-section-questions-interior-finishings'>"
    content+= "<label class='interior-finishings mdf'for='interior-finishings-mdf'>MDF"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-finishings-mdf']+"  /></label>"
    content+= "<label class='interior-finishings f-j'for='interior-finishings-f-j'>F/J"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-finishings-f-j']+"  /></label>"
    content+= "<label class='interior-finishings clears'for='interior-finishings-clears'>Clears"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-finishings-clears']+"  /></label>"
    content+= "<label class='interior-finishings timber-cornice'for='interior-finishings-timber-cornice'>Timber Cornice"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-finishings-timber-cornice']+"  /></label>"
    content+= "<label class='interior-finishings gib-cove'for='interior-finishings-gib-cove'>Gib Cove"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-finishings-gib-cove']+"  /></label>"
    content+= "<label class='interior-finishings skirting'for='interior-finishings-skirting'>Skirting"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-finishings-skirting']+"  /></label>"
    content+= "<label class='interior-finishings architrave'for='interior-finishings-architrave'>Architrave"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-finishings-architrave']+"  /></label>"
    content+= "<label class='interior-finishings wet-areas'for='interior-finishings-wet-areas'>Wet Areas"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-finishings-wet-areas']+"  /></label>"
    content+= "<label class='interior-finishings shelving'for='interior-finishings-shelving'>Shelving"
    content+= "<input class='checkbox' type='checkbox' value="+form['interior-finishings-shelving']+"  /></label>"
    content+= "</main></div><div class='toggle-section landscaping'>"
    content+= "<header id='toggle-section-header-landscaping' class='toggle-section-header'>Landscaping"
    content+= "<label style='display: none;' id='label-status-landscaping' class='all-items-toggle landscaping' for='toggle-all-landscaping'></label>"
    content+= "<label id='label-toggle-all-landscaping' class='all-items-toggle landscaping' for='toggle-all-landscaping'>All Items"
    content+= "<input type='checkbox'  id='toggle-all-landscaping' value="+form['toggle-all-landscaping']+" onclick='toggleAll('landscaping')'/></label>"
    content+= "<label id='label-toggle-none-landscaping' class='hide-section-toggle landscaping' for='toggle-none-landscaping'>Not required"
    content+= "<input type='checkbox' id='toggle-none-landscaping' value="+form['toggle-none-landscaping']+" onclick='toggleNone('landscaping')'/></label>"
    content+= "</header><main class='toggle-section-questions' id='toggle-section-questions-landscaping'>"
    content+= "<label class='landscaping concrete-patios'for='landscaping-concrete-patios'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['landscaping-concrete-patios']+"  />Concrete Patios</label>"
    content+= "<label class='landscaping ply-deck'for='landscaping-ply-deck'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['landscaping-ply-deck-check']+"  />Ply Deck"
    content+= "<input class='single-input' type='text' value="+form['landscaping-ply-deck-text']+"  /></label>"
    content+= "<label class='landscaping decking'for='landscaping-decking'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['landscaping-decking']+"  />Decking</label>"
    content+= "<label class='landscaping car-port'for='landscaping-car-port'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['landscaping-car-port']+"  />Carport</label>"
    content+= "<label class='landscaping pergola'for='landscaping-pergola'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['landscaping-pergola']+"  />Pergola</label>"
    content+= "<label class='landscaping timber-retaining-wall'for='landscaping-timber-retaining-wall'>"
    content+= "<input class='checkbox' type='checkbox' value="+form['landscaping-timber-retaining-wall']+"  />Timber Retaining Wall</label>"
    content+= "</main></div></div></div><div id='Dayles-prenail-questions' class=' style='display:none'>"
    content+= "<header><h1>Dayle Prenail questions</h1>"
    content+= "Dayle email test: <input type='email' value="+form['dayle-test-email']+"/></header>"
    content+= "<label>Prenail Frames<input class='single-input' type='text' value="+form['daylesPrenailFrames']+"  /></label>"
    content+= "<label>Bottom Plates<input class='single-input' type='text' value="+form['daylesBottomPlates']+" /></label>"
    content+= "<label>Trusses / Balance of Roof / Cut Roof<input class='single-input' type='text' value="+form['daylesTrusses']+"  /></label>"
    content+= "<label>Chimney framing<input class='single-input' type='checkbox' value="+form['daylesChimneyFraming']+"  /></label>"
    content+= "<label>LVL Beams<input class='single-input' type='checkbox' value="+form['daylesLVLBeams']+"  /></label>"
    content+= "<label>Glulam Beams<input class='single-input' type='checkbox' value="+form['daylesChimneyFraming']+"  /></label>"
    content+= "<label>Porch Posts<input class='single-input' type='checkbox' value="+form['daylesChimneyFraming']+"  /></label>"
    content+= "<label>Verandah Posts<input class='single-input' type='checkbox' value="+form['daylesChimneyFraming']+"  /></label>"
    content+= "<label>Enclosed balustrades interior<input class='single-input' type='checkbox' value="+form['daylesChimneyFraming']+"  /></label>"
    content+= "<label>Enclosed balustrades exterior<input class='single-input' type='checkbox' value="+form['daylesChimneyFraming']+"  /></label></div>"
    content+= "</form>"


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
      var dayleBlob = Utilities.newBlob(dayleContent, "text/html", "text.html");
      var daylePdf = dayleBlob.getAs("application/pdf");
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
