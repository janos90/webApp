var content = ""
var formHeader = ""
var styles = ""
var head = ""
var headEnd = ""
var clientDetails = ''
var outsourcingSelection = ''
var estimationContent = ''

  head+="<!doctype html><head>"
  styles+="<style type='text/css'>"
  styles+="body { text-align: -webkit-center; background-color: #FFfFFF; font-family: Sans-serif;  }"
  styles+="form { width:80em;  }"
  styles+=".checkboxContainer { width: 45%; margin-top: 2%; border: black solid 1px;"
  styles+="border-radius: 5px; margin-left: auto; margin-right: auto; padding: 20px;  }"
  styles+="#prenail-questions { flex-wrap: wrap;  }"
  styles+=".fullWidthContainer { width: 100%;  }"
  styles+="#heading { display:flex; height:100%; padding: 0em 20em 2em 20em;  }"
  styles+=".store-logo { width: 15em;  }"
  styles+="#heading .title { color:red; width: 15em;  }"
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
  styles+=".toggle-section header{ background-color: gray; font-weight: bold; font-size: 16px;"
  styles+="padding-top: 2px; padding-bottom: 2px; margin-bottom: 3px; display: flex;  }"
  styles+=".toggle-section-wrapper { display: flex; flex-wrap: wrap;  }"
  styles+=".toggle-section { width: 49.5%; margin: 2px; border: solid 1px black;  }"
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
  clientDetails+= "<h2 class='title'> Estimate request <br /> ITM "+form['']+"</h2> </header>"
  clientDetails+= "<div class='section' id='quote-info'>   <header>Quote Information   </header>"
  clientDetails+= "<label for='quote-info-reference'>Quote Reference<input class='single-input' type='text' value="+form['quote-info-reference']+" /></label>"
  clientDetails+= "<label for='quote-info-sales-rep'>Sales Rep<input class='single-input' type='text' value="+form['quote-info-sales-rep']+" /></label>"
  clientDetails+= "<label for='quote-info-date-received'>Date Received<input class='single-input' type='text' value="+form['quote-info-date-received']+" /></label>"
  clientDetails+= "<label for='template-selection'>Select Template<select value="+form['template-selection']+" id='template-selection'>"
  clientDetails+= "<option value='Hillside'>Hillside</option><option value='Matakana'>Matakana</option><option value='Mahia'>Mahia</option>"
  clientDetails+= "<option value='Turangi'>Turangi</option><option value='Taupo'>Taupo</option></select></label>"
  clientDetails+= "<label for='tickbox-preliminary-plan'>Preliminary plan<input class='planType' type='checkbox' "+(form['tickbox-preliminary-plan']?'checked':'')+" ></label>"
  clientDetails+= "<label for='tickbox-preliminary-plan'>Consented plan<input class='planType' type='checkbox' "+(form['tickbox-preliminary-plan']?'checked':'')+" ></label>"
  clientDetails+= "<label for='quote-info-plan-version'>Plan Version Number<input class='single-input' type='text' "+(form['quote-info-plan-version']?'checked':'')+" /></label>"
  clientDetails+= "</div>"

  clientDetails+= "<div class='section split-box'>"
  clientDetails+= "<div class='half-section' id='customer-info'>"
  clientDetails+= "<header>Customer Information</header>"
  clientDetails+= "<label for='customer-info-name'>Customer Name<input class='single-input' type='text' value="+form['customer-info-name']+" /></label>"
  clientDetails+= "<label for='customer-info-email'>Contact Email<input class='single-input' type='text' value="+form['customer-info-email']+" /></label>"
  clientDetails+= "<label for='customer-info-phone'>Phone Number<input class='single-input' type='text' value="+form['customer-info-phone']+" /></label>"
  clientDetails+= "</div>"
  clientDetails+= "<div class='half-section' id='job-info'>"
  clientDetails+= "<header>Job Information</header>"
  clientDetails+= "<label for='job-info-address'>Site Address<input class='textbox-input' type='text' value="+form['job-info-address']+" /></label>   "
  clientDetails+= "</div></div>"

  content+=clientDetails


  outsourcingSelection+="<div class='outsourcing-selection section'>"
  outsourcingSelection+="<header>Out Sourcing"+ (form['cancel-outsourcing']?'- not Required':'- send Plans for measure and quote') +"</header>"
  outsourcingSelection+="<main class='outsourcing-selection-body' id='outsourcing-selection-body' style='"+ (form['cancel-outsourcing']?'display:none;':'') +"'> "
  outsourcingSelection+="<ul class='outsourcing-selection-ul prenail'><header>PreNail</header>"
  outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-prenail-turangi'>Turangi ITM"
  outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-prenail-turangi'']?'checked':'')+" id='outsourcing-selection-prenail-turangi' /></label></li>"
  outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-prenail-ntml'>NTML"
  outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-prenail-ntml'']?'checked':'')+"  id='outsourcePrenailNTMLid' /></label></li>"
  outsourcingSelection+="<li class='outsourcing-selection-li'><label for='outsourcing-selection-prenail-dayles'>Dayles"
  outsourcingSelection+="<input class='checkbox' type='checkbox' "+(form['outsourcing-selection-prenail-dayles'']?'checked':'')+"  id='outsourcePrenailDayleid' /></label></li>"
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
  estimationContent +="<label id='label-as-plan-foundations' class='as-plan-toggle foundations' "+(form['as-plan-foundations']?'':"style='visibility:none;'")+"> As per Plan"
 estimationContent +="<input type='checkbox' id='as-plan-foundations' "+(form['as-plan-foundations']?'checked':'')+" /></label>"
 estimationContent +="<label id='label-toggle-as-selected-foundations' class='hide-section-toggle foundations' "+(form['toggle-as-selected-foundations']?'':"style='visibility:none;'")+"> As Selected"
 estimationContent +="<input type='checkbox' id='toggle-as-selected-foundations' "+(form['toggle-as-selected-foundations']?'checked':'')+" /></label>"
 estimationContent +="<label id='label-toggle-none-foundations' class='hide-section-toggle foundations' "+(form['toggle-none-foundations']?'':"style='visibility:none;'")+"> Not required"
 estimationContent +="<input type='checkbox' id='toggle-none-foundations' "+(form['toggle-none-foundations']?'checked':'')+" /></label>"
  estimationContent +="</header>"

  estimationContent +="<main "+(form['toggle-as-selected-foundations']?'':"style='display:none;'")+"  class='toggle-section-questions' id='toggle-section-questions-foundations'>"

  estimationContent+= "<label class='foundations reinforcing-steel'for='foundations-reinforcing-steel'><input class='checkbox' type='checkbox' "+(form['foundations-reinforcing-steel']?'checked':'')+"/>Reinforcing Steel</label>"
  estimationContent+= "<label class='foundations blocks'for='foundations-blocks'><input class='checkbox' type='checkbox' "+(form['foundations-blocks']?'checked':'')+" />Blocks</label>"
  estimationContent+= "<label class='foundations pod-system'for='foundations-pod-system'><input class='checkbox' type='checkbox' "+(form['foundations-pod-system']?'checked':'')+" />Pod System</label>"
  estimationContent+= "<label class='foundations piles'for='foundations-piles'><input class='checkbox' type='checkbox' "+(form['foundations-piles']?'checked':'')+" />Piles</label>"
  estimationContent+= "<label class='foundations additional'for='foundations-additional'>Additional Information<textarea class='textbox estimationAdditional' type='textbox' value="+(form['foundations-additional']+" >"
  estimationContent+= "</textarea></label></main></div>"


estimationContent+= "<div class='toggle-section timber-floor'><header id='toggle-section-header-timber-floor' class='toggle-section-header'>Timber Floor"
estimationContent+= "<label id='label-as-plan-timber-floor' class='as-plan-toggle timber-floor' "+(form['as-plan-timber-floor']?'':"style='visibility:none;'")+">As per Plan"
estimationContent+= "<input type='checkbox'  id='as-plan-timber-floor' "+(form['as-plan-timber-floor']?'checked':'')+"/></label>"
estimationContent+= "<label id='label-toggle-as-selected-timber-floor' class='hide-section-toggle timber-floor'"+(form['toggle-as-selected-timber-floor']?'':"style='visibility:none;'")+">As Selected"
estimationContent+= "<input type='checkbox' id='toggle-as-selected-timber-floor' "+(form['toggle-as-selected-timber-floor']?'checked':'')+"/></label>"
estimationContent+= "<label id='label-toggle-none-timber-floor' class='hide-section-toggle timber-floor' "+(form['toggle-none-timber-floor']?'':"style='visibility:none;'")+">Not required"
estimationContent+= "<input type='checkbox' id='toggle-none-timber-floor' "+(form['toggle-none-timber-floor']?'checked':'')+"/></label>"
estimationContent+= "</header>"

estimationContent+= "<main "+(form['toggle-as-selected-timber-floor']?'':"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-timber-floor'>"
estimationContent+= "<label class='timber-floor bearers'for='timber-floor-bearers'><input class='checkbox' type='checkbox' "+(form['timber-floor-bearers-check']?'checked':'')+" />"
estimationContent+= "Bearers /></label>"
estimationContent+= "<label class='timber-floor Joists'for='timber-floor-Joists'><input class='checkbox' type='checkbox' "+(form['timber-floor-Joists-check']?'checked':'')+" />"
estimationContent+= "Joists /></label>"
estimationContent+= "<label class='timber-floor flooring'for='timber-floor-flooring'><input class='checkbox' type='checkbox' "+(form['timber-floor-flooring-check']?'checked':'')+" />"
estimationContent+= "Flooring /></label>"
estimationContent+= "<label class='timber-floor wet-area-flooring'for='timber-floor-wet-area-flooring'><input class='checkbox' type='checkbox' "+(form['timber-floor-wet-area-flooring-check']?'checked':'')+" />"
estimationContent+= "Wet Area Flooring /></label>"
estimationContent+= "<label class='timber-floor tile-slate-underlay'for='timber-floor-tile-slate-underlay'><input class='checkbox' type='checkbox' "+(form['timber-floor-tile-slate-underlay-check']?'checked':'')+" />"
estimationContent+= "Tile & Slate Underlay /></label>"
estimationContent+= "<label class='timber-floor additional'for='timber-floor-additional'>Additional Information"
estimationContent+= "<textarea class='textbox estimationAdditional' type='textbox' name='timber-floor-additional' ></textarea></label>"
estimationContent+= "</main></div>"

        estimationContent+="<div class='toggle-section wall-framing'>"
        estimationContent+="<header class='toggle-section-header' id='toggle-section-header-wall-framing'>Wall Framing"
        estimationContent+="<label id='label-as-plan-wall-framing' class='as-plan-toggle wall-framing' "+(form['as-plan-wall-framing']?'':"style='visibility:none;'")+">As per Plan"
        estimationContent+="<input type='checkbox' id='as-plan-wall-framing' "+(form['as-plan-wall-framing']?'checked':'')+" onclick='toggleAll('wall-framing')'/></label>"
        estimationContent+="<label id='label-toggle-as-selected-wall-framing' class='hide-section-toggle wall-framing' "+(form['toggle-as-selected-wall-framing']?'':"style='visibility:none;'")+">As Selected"
        estimationContent+="<input type='checkbox' id='toggle-as-selected-wall-framing' "+(form['toggle-as-selected-wall-framing']?'checked':'')+" onclick='toggleAsSelected('wall-framing')'/></label>"
        estimationContent+="<label id='label-toggle-none-wall-framing' class='hide-section-toggle wall-framing' "+(form['toggle-none-wall-framing']?'':"style='visibility:none;'")+">Not required"
        estimationContent+="<input type='checkbox' id='toggle-none-wall-framing' "+(form['toggle-none-wall-framing']?'checked':'')+" onclick='toggleNone('wall-framing')'/></label></header>"

        estimationContent+="<main "+(form['toggle-as-selected-wall-framing']?'':"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-wall-framing' >"
        estimationContent+="<label class='wall-framing prenailer-supplied'for='wall-framing-prenailer-supplied'>"
        estimationContent+="<input class='checkbox' type='checkbox' name='wall-framing-prenailer-supplied' />Supplied by Prenailer - Do not allow</label>"
        estimationContent+="<label class='wall-framing random'for='wall-framing-random'><input class='checkbox' type='checkbox' "+(form['wall-framing-random']?'checked':'')+" />Random</label>"
        estimationContent+="<label class='wall-framing capping'for='wall-framing-capping'><input class='checkbox' type='checkbox' "+(form['wall-framing-capping']?'checked':'')+" />Capping</label>"
        estimationContent+="<label class='wall-framing strapping'for='wall-framing-strapping'><input class='checkbox' type='checkbox' "+(form['wall-framing-strapping']?'checked':'')+" />Strapping</label>"
        estimationContent+="<label class='wall-framing h-one-two'for='wall-framing-h-one-two'><input class='checkbox' type='checkbox' "+(form['wall-framing-h-one-two']?'checked':'')+" />H1.2</label>"
        estimationContent+="<label class='wall-framing h-three-two'for='wall-framing-h-three-two'><input class='checkbox' type='checkbox' "+(form['wall-framing-h-three-two']?'checked':'')+" />H3.2</label>"
        estimationContent+="<label class='wall-framing h-three-plates'for='wall-framing-h-three-plates'><input class='checkbox' type='checkbox' "+(form['wall-framing-h-three-plates']?'checked':'')+" />H3 Plates</label>"
        estimationContent+="<label class='wall-framing beams'for='wall-framing-beams'><input class='checkbox' type='checkbox' "+(form['wall-framing-beams']?'checked':'')+" />Beams</label>"
        estimationContent+="<label class='wall-framing posts'for='wall-framing-posts'><input class='checkbox' type='checkbox' "+(form['wall-framing-posts']?'checked':'')+" />Posts</label>"
        estimationContent+="<label class='wall-framing metal'for='wall-framing-metal'><input class='checkbox' type='checkbox' "+(form['wall-framing-metal']?'checked':'')+" />Metal</label>"
        estimationContent+="<label class='wall-framing timber'for='wall-framing-timber'><input class='checkbox' type='checkbox' "+(form['wall-framing-timber']?'checked':'')+" />Timber</label>"
        estimationContent+="<label class='wall-framing additional'for='wall-framing-additional'>Additional Information"
        estimationContent+="<textarea class='textbox estimationAdditional' type='textbox' name='wall-framing-additional' ></textarea></label>"
        estimationContent+="</main></div>"

        estimationContent+="<div class='toggle-section roof-framing'><header class='toggle-section-header' id='toggle-section-header-roof-framing'>Roof Framing"
        estimationContent+="<label id='label-as-plan-roof-framing' class='as-plan-toggle roof-framing' "+(form['as-plan-roof-framing']?'':"style='visibility:none;'")+">As per Plan"
        estimationContent+="<input type='checkbox'  id='as-plan-roof-framing' "+(form['as-plan-roof-framing']?'checked':'')+" onclick='toggleAll('roof-framing')'/></label>"
        estimationContent+="<label id='label-toggle-as-selected-roof-framing' class='hide-section-toggle roof-framing' "+(form['toggle-as-selected-roof-framing']?'':"style='visibility:none;'")+">As Selected"
        estimationContent+="<input type='checkbox' id='toggle-as-selected-roof-framing' "+(form['toggle-as-selected-roof-framing']?'checked':'')+" onclick='toggleAsSelected('roof-framing')'/></label>"
        estimationContent+="<label id='label-toggle-none-roof-framing' class='hide-section-toggle roof-framing' "+(form['toggle-none-roof-framing']?'':"style='visibility:none;'")+">Not required"
        estimationContent+="<input type='checkbox' id='toggle-none-roof-framing' "+(form['toggle-none-roof-framing']?'checked':'')+" onclick='toggleNone('roof-framing')'/></label>"
        estimationContent+="</header>"

        estimationContent+="<main "+(form['toggle-as-selected-roof-framing']?'':"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-roof-framing'>"
        estimationContent+="<label class='roof-framing prenailer-supplied'for='roof-framing-prenailer-supplied'>"
        estimationContent+="<input class='checkbox' type='checkbox' "+(form['roof-framing-prenailer-supplied']?'checked':'')+"Supplied by Prenailer - Do not allow</label>"
        estimationContent+="<label class='roof-framing bor-pack'for='roof-framing-bor-pack'>"
        estimationContent+="<input class='checkbox' type='checkbox' "+(form['roof-framing-bor-pack']?'checked':'')+"BOR Pack (as Agreed)</label>"
        estimationContent+="<label class='roof-framing ply-membrane'for='roof-framing-ply-membrane'>"
        estimationContent+="<input class='checkbox' type='checkbox' "+(form['roof-framing-ply-membrane']?'checked':'')+"Ply to Membrane Roof</label>"
        estimationContent+="<label class='roof-framing ply-shingle'for='roof-framing-ply-shingle'>"
        estimationContent+="<input class='checkbox' type='checkbox' "+(form['roof-framing-ply-shingle']?'checked':'')+"Ply to Shingle Roof</label>"
        estimationContent+="<label class='roof-framing purlins-only'for='roof-framing-purlins-only'>"
        estimationContent+="<input class='checkbox' type='checkbox' "+(form['roof-framing-purlins-only']?'checked':'')+"Purlins only</label>"
        estimationContent+="<label class='roof-framing additional'for='roof-framing-additional'>Additional Information"
        estimationContent+="<textarea class='textbox estimationAdditional' type='textbox' name='roof-framing-additional' ></textarea></label>"
        estimationContent+="</main> </div>"

        estimationContent+="<div class='toggle-section exterior-finishing'>"
        estimationContent+="<header id='toggle-section-header-exterior-finishing' class='toggle-section-header'>Exterior Finishings"
        estimationContent+="<label id='label-as-plan-exterior-finishing' class='as-plan-toggle exterior-finishing'"+(form['as-plan-exterior-finishing']?'':"style='visibility:none;'")+">As per Plan"
        estimationContent+="<input type='checkbox'  id='as-plan-exterior-finishing' "+(form['as-plan-exterior-finishing']?'checked':'')+" onclick='toggleAll('exterior-finishing')'/></label>"
        estimationContent+="<label id='label-toggle-as-selected-exterior-finishing' class='hide-section-toggle exterior-finishing'"+(form['toggle-as-selected-exterior-finishing']?'':"style='visibility:none;'")+">As Selected"
        estimationContent+="<input type='checkbox' id='toggle-as-selected-exterior-finishing' "+(form['toggle-as-selected-exterior-finishing']?'checked':'')+" onclick='toggleAsSelected('exterior-finishing')'/></label>"
        estimationContent+="<label id='label-toggle-none-exterior-finishing' class='hide-section-toggle exterior-finishing'"+(form['toggle-none-exterior-finishing']?'':"style='visibility:none;'")+">Not required"
        estimationContent+="<input type='checkbox' id='toggle-none-exterior-finishing' "+(form['toggle-none-exterior-finishing']?'checked':'')+" onclick='toggleNone('exterior-finishing')'/></label>"
        estimationContent+="</header>"

        estimationContent+="<main "+(form['toggle-as-selected-exterior-finishing']?'':"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-exterior-finishing'>"
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
        estimationContent+="<textarea class='textbox estimationAdditional' type='textbox' name='exterior-finishing-additional' ></textarea></label>"
        estimationContent+="</main></div>"

        estimationContent+="<div class='toggle-section cladding'>"
        estimationContent+="<header id='toggle-section-header-cladding' class='toggle-section-header'>Cladding"
        estimationContent+="<label id='label-as-plan-cladding' class='as-plan-toggle cladding' "+(form['as-plan-cladding']?'':"style='visibility:none;'")+">As per Plan"
        estimationContent+="<input type='checkbox'  id='as-plan-cladding' "+(form['as-plan-cladding']?'checked':'')+" onclick='toggleAll('cladding')'/></label>"
        estimationContent+="<label id='label-toggle-as-selected-cladding' class='hide-section-toggle cladding' "+(form['toggle-as-selected-cladding']?'':"style='visibility:none;'")+">As Selected"
        estimationContent+="<input type='checkbox' id='toggle-as-selected-cladding' "+(form['toggle-as-selected-cladding']?'checked':'')+" onclick='toggleAsSelected('cladding')'/></label>"
        estimationContent+="<label id='label-toggle-none-cladding' class='hide-section-toggle cladding' "+(form['toggle-none-cladding']?'':"style='visibility:none;'")+">Not required"
        estimationContent+="<input type='checkbox' id='toggle-none-cladding' "+(form['toggle-none-cladding']?'checked':'')+" onclick='toggleNone('cladding')'/></label>"
        estimationContent+="</header>"

        estimationContent+="<main "+(form['toggle-as-selected-cladding']?'':"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-cladding'><label class='cladding brick'for='cladding-brick'>"
        estimationContent+="<input class='checkbox' type='checkbox' "+(form['cladding-brick-check']?'checked':'')+" />Brick</label>"
        estimationContent+="<label class='cladding sheet'for='cladding-sheet'><input class='checkbox' type='checkbox' "+(form['cladding-sheet-check']?'checked':'')+" />Sheet</label>"
        estimationContent+="<label class='cladding w-board'for='cladding-w-board'><input class='checkbox' type='checkbox' "+(form['cladding-w-board-check']?'checked':'')+" />W/Board</label>"
        estimationContent+="<label class='cladding stone-cladding-substrate'for='cladding-stone-cladding-substrate'>"
        estimationContent+="<input class='checkbox' type='checkbox' "+(form['cladding-stone-cladding-substrate']?'checked':'')+" />Stone Cladding Substrate</label>"
        estimationContent+="<label class='cladding additional'for='cladding-additional'>Additional Information"
        estimationContent+="<textarea class='textbox estimationAdditional' type='textbox' name='cladding-additional' ></textarea></label>"
        estimationContent+="</main></div>"

        estimationContent+="<div class='toggle-section insulation'>"
        estimationContent+="<header id='toggle-section-header-insulation' class='toggle-section-header'>Insulation"
        estimationContent+="<label id='label-as-plan-insulation' class='as-plan-toggle insulation' "+(form['as-plan-insulation']?'':"style='visibility:none;'")+">As per Plan"
        estimationContent+="<input type='checkbox'  id='as-plan-insulation' "+(form['as-plan-insulation']?'checked':'')+" onclick='toggleAll('insulation')'/></label>"
        estimationContent+="<label id='label-toggle-as-selected-insulation' class='hide-section-toggle insulation' "+(form['toggle-as-selected-insulation']?'':"style='visibility:none;'")+">As Selected"
        estimationContent+="<input type='checkbox' id='toggle-as-selected-insulation' "+(form['toggle-as-selected-insulation']?'checked':'')+" onclick='toggleAsSelected('insulation')'/></label>"
        estimationContent+="<label id='label-toggle-none-insulation' class='hide-section-toggle insulation' "+(form['toggle-none-insulation']?'':"style='visibility:none;'")+">Not required"
        estimationContent+="<input type='checkbox' id='toggle-none-insulation' "+(form['toggle-none-insulation']?'checked':'')+" onclick='toggleNone('insulation')'/></label>"
        estimationContent+="</header>"

        estimationContent+="<main "+(form['toggle-as-selected-insulation']?'':"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-insulation'>"
        estimationContent+="<label class='insulation sub-floor'for='insulation-sub-floor'><input class='check' type='checkbox' "+(form['insulation-sub-floor-check']?'checked':'')+" />Sub Floor</label>"
        estimationContent+="<label class='insulation mid-floor'for='insulation-mid-floor'><input class='check' type='checkbox' "+(form['insulation-mid-floor-check']?'checked':'')+" />Mid Floor</label>"
        estimationContent+="<label class='insulation walls'for='insulation-walls'><input class='check' type='checkbox' "+(form['insulation-walls-check']?'checked':'')+" />Walls</label>"
        estimationContent+="<label class='insulation ceiling'for='insulation-ceiling'><input class='check' type='checkbox' "+(form['insulation-ceiling-check']?'checked':'')+" />Ceiling</label>"
        estimationContent+="<label class='insulation accoustic'for='insulation-accoustic'><input class='check' type='checkbox' "+(form['insulation-accoustic-check']?'checked':'')+" />Accoustic</label>"
        estimationContent+="<label class='insulation garage-walls-ceiling'for='insulation-garage-walls-ceiling'>"
        estimationContent+="<input class='checkbox' type='checkbox' "+(form['insulation-garage-walls-ceiling']?'checked':'')+" />Garage walls/Ceiling (included)</label>"
        estimationContent+="<label class='insulation installation'for='insulation-installation'><input class='checkbox' type='checkbox' "+(form['insulation-installation']?'checked':'')+" />Installation</label>"
        estimationContent+="<label class='insulation additional'for='insulation-additional'>Additional Information"
        estimationContent+="<textarea class='textbox estimationAdditional' type='textbox' name='insulation-additional' ></textarea></label>"
        estimationContent+="</main></div>"

        estimationContent+="<div class='toggle-section interior-linings'>"
        estimationContent+="<header id='toggle-section-header-interior-linings' class='toggle-section-header'>Interior Linings"
        estimationContent+="<label id='label-as-plan-interior-linings' class='as-plan-toggle interior-linings' "+(form['as-plan-interior-linings']?'':"style='visibility:none;'")+">As per Plan"
        estimationContent+="<input type='checkbox'  id='as-plan-interior-linings' "+(form['as-plan-interior-linings']?'checked':'')+" onclick='toggleAll('interior-linings')'/></label>"
        estimationContent+="<label id='label-toggle-as-selected-interior-linings' class='toggle-as-selected interior-linings' "+(form['toggle-as-selected-interior-linings']?'':"style='visibility:none;'")+">As Selected"
        estimationContent+="<input type='checkbox' id='toggle-as-selected-interior-linings' "+(form['toggle-as-selected-interior-linings']?'checked':'')+" onclick='toggleAsSelected('interior-linings')'/></label>"
        estimationContent+="<label id='label-toggle-none-interior-linings' class='hide-section-toggle interior-linings' "+(form['toggle-none-interior-linings']?'':"style='visibility:none;'")+">Not required"
        estimationContent+="<input type='checkbox' id='toggle-none-interior-linings' "+(form['toggle-none-interior-linings']?'checked':'')+" onclick='toggleNone('interior-linings')'/></label>"
        estimationContent+="</header>"

        estimationContent+="<main "+(form['toggle-as-selected-interior-linings']?'':"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-interior-linings'>"
        estimationContent+="<label class='interior-linings wall'for='interior-linings-wall'><input class='checkbox' type='checkbox' "+(form['interior-linings-wall']?'checked':'')+" />Wall</label>"
        estimationContent+="<label class='interior-linings wet-wall'for='interior-linings-wet-wall'><input class='checkbox' type='checkbox' "+(form['interior-linings-wet-wall']?'checked':'')+" />Wet Wall</label>"
        estimationContent+="<label class='interior-linings bathroom'for='interior-linings-bathroom'><input class='checkbox' type='checkbox' "+(form['interior-linings-bathroom']?'checked':'')+" />Bathroom</label>"
        estimationContent+="<label class='interior-linings wc'for='interior-linings-wc'><input class='checkbox' type='checkbox' "+(form['interior-linings-wc']?'checked':'')+" />WC</label>"
        estimationContent+="<label class='interior-linings ceiling'for='interior-linings-ceiling'><input class='checkbox' type='checkbox' "+(form['interior-linings-ceiling']?'checked':'')+" />Ceiling</label>"
        estimationContent+="<label class='interior-linings wet-ceiling'for='interior-linings-wet-ceiling'><input class='checkbox' type='checkbox' "+(form['interior-linings-wet-ceiling']?'checked':'')+" />Wet Ceiling</label>"
        estimationContent+="<label class='interior-linings ensuite'for='interior-linings-ensuite'><input class='checkbox' type='checkbox' "+(form['interior-linings-ensuite']?'checked':'')+" />Ensuite</label>"
        estimationContent+="<label class='interior-linings laundry'for='interior-linings-laundry'><input class='checkbox' type='checkbox' "+(form['interior-linings-laundry']?'checked':'')+" />Laundry</label>"
        estimationContent+="<label class='interior-linings additional'for='interior-linings-additional'>Additional Information"
        estimationContent+="<textarea class='textbox estimationAdditional' type='textbox' name='interior-linings-additional' ></textarea></label>"
        estimationContent+="</main></div>"

        estimationContent+="<div class='toggle-section interior-doors'>"
        estimationContent+="<header id='toggle-section-header-interior-doors' class='toggle-section-header'>Interior Doors"
        estimationContent+="<label  id='label-as-plan-interior-doors' class='as-plan-toggle interior-doors' "+(form['as-plan-interior-doors']?'':"style='visibility:none;'")+">As per Plan"
        estimationContent+="<input type='checkbox'  id='as-plan-interior-doors' "+(form['as-plan-interior-doors']?'checked':'')+" onclick='toggleAll('interior-doors')'/></label>"
        estimationContent+="<label  id='label-toggle-as-selected-interior-doors' class='hide-section-toggle interior-doors' "+(form['toggle-as-selected-interior-doors']?'':"style='visibility:none;'")+">As Selected"
        estimationContent+="<input type='checkbox' id='toggle-as-selected-interior-doors' "+(form['toggle-as-selected-interior-doors']?'checked':'')+" onclick='toggleAsSelected('interior-doors')'/></label>"
        estimationContent+="<label  id='label-toggle-none-interior-doors' class='hide-section-toggle interior-doors' "+(form['toggle-none-interior-doors']?'':"style='visibility:none;'")+">Not required"
        estimationContent+="<input type='checkbox' id='toggle-none-interior-doors' "+(form['toggle-none-interior-doors']?'checked':'')+" onclick='toggleNone('interior-doors')'/></label>"
        estimationContent+="</header>"

        estimationContent+="<main "+(form['toggle-as-selected-interior-doors']?'':"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-interior-doors'>"
        estimationContent+="<label class='interior-doors door-type'for='interior-doors-door-type'><input class='checkbox' type='checkbox' "+(form['interior-doors-door-type']?'checked':'')+" />MDF HC PQ FJ FLAT JAMB</label>"
        estimationContent+="<label class='interior-doors door-hardware'for='interior-doors-door-hardware'><input class='checkbox' type='checkbox' "+(form['interior-doors-door-hardware']?'checked':'')+" />Door Hardware</label>"
        estimationContent+="<label class='interior-doors additional'for='interior-doors-additional'>Additional Information"
        estimationContent+="<textarea class='textbox estimationAdditional' type='textbox' name='interior-doors-additional' ></textarea></label>"
        estimationContent+="</main></div>"

        estimationContent+="<div class='toggle-section interior-finishings'>"
        estimationContent+="<header id='toggle-section-header-interior-finishings' class='toggle-section-header'>Interior Finishings"
        estimationContent+="<label  id='label-as-plan-interior-finishings' class='as-plan-toggle interior-finishings' "+(form['as-plan-interior-finishings']?'':"style='visibility:none;'")+">As per Plan"
        estimationContent+="<input type='checkbox'  id='as-plan-interior-finishings' "+(form['as-plan-interior-finishings']?'checked':'')+" /></label>"
        estimationContent+="<label  id='label-toggle-as-selected-interior-finishings' class='hide-section-toggle interior-finishings' "+(form['toggle-as-selected-interior-finishings']?'':"style='visibility:none;'")+">As Selected"
        estimationContent+="<input type='checkbox' id='toggle-as-selected-interior-finishings' "+(form['toggle-as-selected-interior-finishings']?'checked':'')+" /></label>"
        estimationContent+="<label  id='label-toggle-none-interior-finishings' class='hide-section-toggle interior-finishings' "+(form['toggle-none-interior-finishings']?'':"style='visibility:none;'")+">Not required"
        estimationContent+="<input type='checkbox' id='toggle-none-interior-finishings' "+(form['toggle-none-interior-finishings']?'checked':'')+" /></label>"
        estimationContent+="</header>"

        estimationContent+="<main "+(form['toggle-as-selected-interior-finishings']?'':"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-interior-finishings'>"
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
        estimationContent+="<textarea class='textbox estimationAdditional' type='textbox' name='interior-finishings-additional' ></textarea></label>"
        estimationContent+="</main></div>"

        estimationContent+="<div class='toggle-section landscaping'>"
        estimationContent+="<header id='toggle-section-header-landscaping' class='toggle-section-header'>Landscaping"
        estimationContent+="<label id='label-as-plan-landscaping' class='as-plan-toggle landscaping' "+(form['as-plan-landscaping']?'':"style='visibility:none;'")+">As per Plan"
        estimationContent+="<input type='checkbox'  id='as-plan-landscaping' "+(form['as-plan-landscaping']?'checked':'')+" /></label>"
        estimationContent+="<label id='label-as-selected-landscaping' class='hide-section-toggle landscaping' "+(form['toggle-as-selected-landscaping']?'':"style='visibility:none;'")+">As Selected"
        estimationContent+="<input type='checkbox' id='toggle-as-selected-landscaping' "+(form['toggle-as-selected-landscaping']?'checked':'')+" /></label>"
        estimationContent+="<label id='label-toggle-none-landscaping' class='hide-section-toggle landscaping' "+(form['toggle-none-landscaping']?'':"style='visibility:none;'")+">Not required"
        estimationContent+="<input type='checkbox' id='toggle-none-landscaping' "+(form['toggle-none-landscaping']?'checked':'')+" /></label>"
        estimationContent+="</header>"

        estimationContent+="<main "+(form['toggle-as-selected-landscaping']?'':"style='display:none;'")+" class='toggle-section-questions' id='toggle-section-questions-landscaping'>"
        estimationContent+="<label class='landscaping concrete-patios'for='landscaping-concrete-patios'><input class='checkbox' type='checkbox' "+(form['landscaping-concrete-patios']?'checked':'')+" />Concrete Patios</label>"
        estimationContent+="<label class='landscaping ply-deck'for='landscaping-ply-deck'><input class='checkbox' type='checkbox' "+(form['landscaping-ply-deck-check']?'checked':'')+" />Ply Deck</label>"
        estimationContent+="<label class='landscaping decking'for='landscaping-decking'><input class='checkbox' type='checkbox' "+(form['landscaping-decking']?'checked':'')+" />Decking</label>"
        estimationContent+="<label class='landscaping car-port'for='landscaping-car-port'><input class='checkbox' type='checkbox' "+(form['landscaping-car-port']?'checked':'')+" />Carport</label>"
        estimationContent+="<label class='landscaping pergola'for='landscaping-pergola'><input class='checkbox' type='checkbox' "+(form['landscaping-pergola']?'checked':'')+" />Pergola</label>"
        estimationContent+="<label class='landscaping timber-retaining-wall'for='landscaping-timber-retaining-wall'><input class='checkbox' type='checkbox' "+(form['landscaping-timber-retaining-wall']?'checked':'')+" />Timber Retaining Wall</label>"
        estimationContent+="<label class='landscaping additional'for='landscaping-additional'>Additional Information"
        estimationContent+="<textarea class='textbox estimationAdditional' type='textbox' name='landscaping-additional' ></textarea></label>"
        estimationContent+="</main></div></div></div>"


  <div id='prenail-questions' class='' style='display:none'>
    <header class='fullWidthContainer'>
      <h1>
        Dayle Prenail questions
      </h1>
    </header>
    <div class='checkboxContainer'>
      <h3>Wind zone</h3>
      <p class='row'><input class='wind' name='prenailMediumWind' type='checkbox'>Medium Wind</p>
      <p class='row'><input class='wind' name='prenailHighWind' type='checkbox'>High Wind</p>
      <p class='row'><input class='wind' name='prenailVeryWind' type='checkbox'>Very High Wind</p>
      <p class='row'><input class='wind' name='prenailExtraWind' type='checkbox'>Extra High Wind</p>
    </div>
    <div class='checkboxContainer'>
      <h3>Framing Treatment</h3>

      <table class='prenail-table'>
        <caption>Wall Framing Treatment</caption>
        <tr>
          <th class='prenail-table-headers'></th>
          <th class='prenail-table-headers'>H1.2</th>
          <th class='prenail-table-headers'>H3.2</th>
          <th class='prenail-table-headers'>H3.2 B/Plate</th>
        </tr>
        <tr>
          <td class='prenail-table-cells'>
            Interior
          </td>
          <td class='prenail-table-cells'>
            <input type='checkbox' name='daylePrenailInteriorH1' />
          </td>
          <td class='prenail-table-cells'>
            <input type='checkbox' name='daylePrenailInteriorH3' />
          </td>
          <td class='prenail-table-cells'>
            <input type='checkbox' name='daylePrenailInteriorBPlate' />
          </td>
        </tr>
        <tr>
          <td class='prenail-table-cells'>
            Exterior
          </td>
          <td class='prenail-table-cells'>
            <input type='checkbox' name='daylePrenailExteriorH1' />
          </td>
          <td class='prenail-table-cells'>
            <input type='checkbox' name='daylePrenailExteriorH3' />
          </td>
          <td class='prenail-table-cells'>
            <input type='checkbox' name='daylePrenailExteriorBPlate' />
          </td>

        </tr>

        <tr>
          <td class='prenail-table-cells'>
            Wet Areas
          </td>
          <td class='prenail-table-cells'>
            <input type='checkbox' name='daylePrenailWetH1' />
          </td>
          <td class='prenail-table-cells'>
            <input type='checkbox' name='daylePrenailWetH3' />
          </td>
          <td class='prenail-table-cells'>
            <input type='checkbox' name='daylePrenailWetBPlate' />
          </td>

        </tr>
      </table>
      <br />
      <table class='prenail-table'>
        <caption>Roof Framing Treatment</caption>
        <tr>
          <th class='prenail-table-headers'></th>
          <th class='prenail-table-headers'>H1.2</th>
          <th class='prenail-table-headers'>H3.2</th>
        </tr>
        <tr>
          <td class='prenail-table-cells'>Trusses</td>
          <td class='prenail-table-cells'>
            <input type='checkbox' name='daylePrenailTrussesH1' />
          </td>
          <td class='prenail-table-cells'>
            <input type='checkbox' name='daylePrenailTrussesH3' />
          </td>

        </tr>
        <tr>
          <td class='prenail-table-cells'>Rafters</td>
          <td class='prenail-table-cells'>
            <input type='checkbox' name='daylePrenailRaftersH1' />
          </td>
          <td class='prenail-table-cells'>
            <input type='checkbox' name='daylePrenailRaftersH3' />
          </td>

        </tr>
      </table>
    </div>




    <div class='checkboxContainer'>
      <h3>Prenail Extras</h3>
      <label>
        <input class='checkbox' type='checkbox' name='prenailFramesCheck'  />
        Prenail Wall Frames
        <input class='single-input' type='text' name='prenailFramesText'  />
      </label>

      <label>
        <input class='checkbox' type='checkbox' name='prenailTrussesCheck'  />
        Trusses
        <input class='single-input' type='text' name='prenailTrussesText'  />
      </label>
      <label>
        <input class='checkbox' type='checkbox' name='prenailPrecutRaftersCheck'  />
        Precut Rafters
        <input class='single-input' type='text' name='prenailPrecutRaftersText'  />
      </label>
      <label>
        <input class='checkbox' type='checkbox' name='prenailPrecutRoofCheck'  />
        Precut balance of Roof
        <input class='single-input' type='text' name='prenailPrecutRoofText'  />
      </label>
    </div>
    <div class='checkboxContainer'>
      <header>
        <h4>Other : TBC by Prenail Supplier, must be detailed</h4>
      </header>
      <label>
        LVL Beams
        <input class='single-input' type='checkbox' name='daylesPrenailLVLBeams'  />
        eg in Mid floor / roof, lintels as per prenail/ engineer
      </label>
      <label>
        Glulam Beams
        <input class='single-input' type='checkbox' name='daylesPrenailGulamBeams'  />
        eg in Mid floor / roof, lintels as per prenail/ engineer
      </label>
      <label>
        Flitch Beams
        <input class='single-input' type='checkbox' name='daylesPrenailFlitchBeams'  />
        eg in Mid floor / roof, lintels as per prenail/ engineer
      </label>

      <label>
        Double top plate loose
        <input class='single-input' type='checkbox' name='daylesPrenailDoubleTop'  />
        double top plates will come nailed by default
      </label>

      <label>
        Studlok / lintel lok
        <input class='single-input' type='checkbox' name='daylesPrenailStudlok'  />
        premium service, additional charges apply
      </label>



    </div>
  </div>








dayleContentSubmitted+= "<div id='Dayles-prenail-questions' class=' style='display:none'><header><h1>Dayle Prenail questions</h1>"
dayleContentSubmitted+= "Dayle email test: <input type='email' value="+form['dayle-test-email']+"/></header>"
dayleContentSubmitted+= "<label>Prenail Frames<input class='single-input' type='text' value="+form['daylesPrenailFrames']+" /></label>"
dayleContentSubmitted+= "<label>Bottom Plates<input class='single-input' type='text' value="+form['daylesBottomPlates']+" /></label>"
dayleContentSubmitted+= "<label>Trusses / Balance of Roof / Cut Roof<input class='single-input' type='text' value="+form['daylesTrusses']+" /></label>"
dayleContentSubmitted+= "<label>Chimney framing<input class='single-input' type='checkbox' "+form['daylesChimneyFraming']+" /></label>"
dayleContentSubmitted+= "<label>LVL Beams<input class='single-input' type='checkbox' "+form['daylesLVLBeams']+" /></label>"
dayleContentSubmitted+= "<label>Glulam Beams<input class='single-input' type='checkbox' "+form['daylesChimneyFraming']+" /></label>"
dayleContentSubmitted+= "<label>Porch Posts<input class='single-input' type='checkbox' "+form['daylesChimneyFraming']+" /></label>"
dayleContentSubmitted+= "<label>Verandah Posts<input class='single-input' type='checkbox' "+form['daylesChimneyFraming']+" /></label>"
dayleContentSubmitted+= "<label>Enclosed balustrades interior<input class='single-input' type='checkbox' "+form['daylesChimneyFraming']+"/></label>"
dayleContentSubmitted+= "<label>Enclosed balustrades exterior<input class='single-input' type='checkbox' "+form['daylesChimneyFraming']+"/></label></div>"
content+= dayleContentSubmitted
content+= "</form>"
