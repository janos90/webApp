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

  estimationContent +="<main "+(form['toggle-as-selected-foundations']?"style='display:none;'":'')+"class='toggle-section-questions' id='toggle-section-questions-foundations'>"

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

estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-timber-floor'>"
estimationContent+= "<label class='timber-floor bearers'for='timber-floor-bearers'><input class='checkbox' type='checkbox' "+(form['timber-floor-bearers-check']?'checked':'')+" />"
estimationContent+= "Bearers<input class='single-input' type='text' value="+(form['timber-floor-bearers-text'])+" /></label>"
estimationContent+= "<label class='timber-floor Joists'for='timber-floor-Joists'><input class='checkbox' type='checkbox' "+(form['timber-floor-Joists-check']?'checked':'')+" />"
estimationContent+= "Joists<input class='single-input' type='text' value="+(form['timber-floor-Joists-text'])+" /></label>"
estimationContent+= "<label class='timber-floor flooring'for='timber-floor-flooring'><input class='checkbox' type='checkbox' "+(form['timber-floor-flooring-check']?'checked':'')+" />"
estimationContent+= "Flooring<input class='single-input' type='text' value="+(form['timber-floor-flooring-text'])+" /></label>"
estimationContent+= "<label class='timber-floor wet-area-flooring'for='timber-floor-wet-area-flooring'><input class='checkbox' type='checkbox' "+(form['timber-floor-wet-area-flooring-check']?'checked':'')+" />"
estimationContent+= "Wet Area Flooring<input class='single-input' type='text' value="+(form['timber-floor-wet-area-flooring-text'])+" /></label>"
estimationContent+= "<label class='timber-floor tile-slate-underlay'for='timber-floor-tile-slate-underlay'><input class='checkbox' type='checkbox' "+(form['timber-floor-tile-slate-underlay-check']?'checked':'')+" />"
estimationContent+= "Tile & Slate Underlay<input class='single-input' type='text' value="+(form['timber-floor-tile-slate-underlay-text'])+" /></label>"
estimationContent+= "<label class='timber-floor additional'for='timber-floor-additional'>Additional Information"
estimationContent+= "<textarea class='textbox estimationAdditional' type='textbox' name='timber-floor-additional' ></textarea></label>"
estimationContent+= "</main></div>"

    <div class='toggle-section wall-framing'>
      <header class='toggle-section-header' id='toggle-section-header-wall-framing'>
        Wall Framing
        <label id='label-as-plan-wall-framing' class='as-plan-toggle wall-framing' for='as-plan-wall-framing'>
          As per Plan
          <input type='checkbox' id='as-plan-wall-framing' name='as-plan-wall-framing' onclick='toggleAll('wall-framing')'/>
        </label>
        <label id='label-toggle-as-selected-wall-framing' class='hide-section-toggle wall-framing' for='toggle-as-selected-wall-framing'>
          As Selected
          <input type='checkbox' id='toggle-as-selected-wall-framing' name='toggle-as-selected-wall-framing' onclick='toggleAsSelected('wall-framing')'/>
        </label>
        <label id='label-toggle-none-wall-framing' class='hide-section-toggle wall-framing' for='toggle-none-wall-framing'>
          Not required
          <input type='checkbox' id='toggle-none-wall-framing' name='toggle-none-wall-framing' onclick='toggleNone('wall-framing')'/>
        </label>
      </header>
      <main class='toggle-section-questions' id='toggle-section-questions-wall-framing' >
        <label class='wall-framing prenailer-supplied'for='wall-framing-prenailer-supplied'>
          <input class='checkbox' type='checkbox' name='wall-framing-prenailer-supplied' />
          Supplied by Prenailer - Do not allow
        </label>
        <label class='wall-framing random'for='wall-framing-random'>
          <input class='checkbox' type='checkbox' name='wall-framing-random' />
          Random
        </label>
        <label class='wall-framing capping'for='wall-framing-capping'>
          <input class='checkbox' type='checkbox' name='wall-framing-capping' />
          Capping
        </label>
        <label class='wall-framing strapping'for='wall-framing-strapping'>
          <input class='checkbox' type='checkbox' name='wall-framing-strapping' />
          Strapping
        </label>

        <label class='wall-framing h-one-two'for='wall-framing-h-one-two'>
          <input class='checkbox' type='checkbox' name='wall-framing-h-one-two' />
          H1.2
        </label>
        <label class='wall-framing h-three-two'for='wall-framing-h-three-two'>
          <input class='checkbox' type='checkbox' name='wall-framing-h-three-two' />
          H3.2
        </label>
        <label class='wall-framing h-three-plates'for='wall-framing-h-three-plates'>
          <input class='checkbox' type='checkbox' name='wall-framing-h-three-plates' />
          H3 Plates
        </label>

        <label class='wall-framing beams'for='wall-framing-beams'>
          <input class='checkbox' type='checkbox' name='wall-framing-beams' />
          Beams
        </label>
        <label class='wall-framing posts'for='wall-framing-posts'>
          <input class='checkbox' type='checkbox' name='wall-framing-posts' />
          Posts
        </label>


        <label class='wall-framing metal'for='wall-framing-metal'>
          <input class='checkbox' type='checkbox' name='wall-framing-metal' />
          Metal
        </label>

        <label class='wall-framing timber'for='wall-framing-timber'>
          <input class='checkbox' type='checkbox' name='wall-framing-timber' />
          Timber
        </label>
        <label class='wall-framing additional'for='wall-framing-additional'>
          Additional Information
          <textarea class='textbox estimationAdditional' type='textbox' name='wall-framing-additional' ></textarea>
        </label>

      </main>
    </div>

    <div class='toggle-section roof-framing'>
      <header class='toggle-section-header' id='toggle-section-header-roof-framing'>
        Roof Framing
        <label id='label-as-plan-roof-framing' class='as-plan-toggle roof-framing' for='as-plan-roof-framing'>
          As per Plan
          <input type='checkbox'  id='as-plan-roof-framing' name='as-plan-roof-framing' onclick='toggleAll('roof-framing')'/>
        </label>
        <label id='label-toggle-as-selected-roof-framing' class='hide-section-toggle roof-framing' for='toggle-as-selected-roof-framing'>
          As Selected
          <input type='checkbox' id='toggle-as-selected-roof-framing' name='toggle-as-selected-roof-framing' onclick='toggleAsSelected('roof-framing')'/>
        </label>
        <label id='label-toggle-none-roof-framing' class='hide-section-toggle roof-framing' for='toggle-none-roof-framing'>
          Not required
          <input type='checkbox' id='toggle-none-roof-framing' name='toggle-none-roof-framing' onclick='toggleNone('roof-framing')'/>
        </label>
      </header>
      <main class='toggle-section-questions' id='toggle-section-questions-roof-framing'>
        <label class='roof-framing prenailer-supplied'for='roof-framing-prenailer-supplied'>
          <input class='checkbox' type='checkbox' name='roof-framing-prenailer-supplied' />
          Supplied by Prenailer - Do not allow
        </label>
        <label class='roof-framing bor-pack'for='roof-framing-bor-pack'>
          <input class='checkbox' type='checkbox' name='roof-framing-bor-pack' />
          BOR Pack (as Agreed)
        </label>
        <label class='roof-framing ply-membrane'for='roof-framing-ply-membrane'>
          <input class='checkbox' type='checkbox' name='roof-framing-ply-membrane' />
          Ply to Membrane Roof
        </label>
        <label class='roof-framing ply-shingle'for='roof-framing-ply-shingle'>
          <input class='checkbox' type='checkbox' name='roof-framing-ply-shingle' />
          Ply to Shingle Roof
        </label>
        <label class='roof-framing purlins-only'for='roof-framing-purlins-only'>
          <input class='checkbox' type='checkbox' name='roof-framing-purlins-only' />
          Purlins only
        </label>
        <label class='roof-framing additional'for='roof-framing-additional'>
          Additional Information
          <textarea class='textbox estimationAdditional' type='textbox' name='roof-framing-additional' ></textarea>
        </label>

      </main>

    </div>

    <div class='toggle-section exterior-finishing'>
      <header id='toggle-section-header-exterior-finishing' class='toggle-section-header'>
        Exterior Finishings
        <label id='label-as-plan-exterior-finishing' class='as-plan-toggle exterior-finishing' for='as-plan-exterior-finishing'>
          As per Plan
          <input type='checkbox'  id='as-plan-exterior-finishing' name='as-plan-exterior-finishing' onclick='toggleAll('exterior-finishing')'/>
        </label>
        <label id='label-toggle-as-selected-exterior-finishing' class='hide-section-toggle exterior-finishing' for='toggle-as-selected-exterior-finishing'>
          As Selected
          <input type='checkbox' id='toggle-as-selected-exterior-finishing' name='toggle-as-selected-exterior-finishing' onclick='toggleAsSelected('exterior-finishing')'/>
        </label>
        <label id='label-toggle-none-exterior-finishing' class='hide-section-toggle exterior-finishing' for='toggle-none-exterior-finishing'>
          Not required
          <input type='checkbox' id='toggle-none-exterior-finishing' name='toggle-none-exterior-finishing' onclick='toggleNone('exterior-finishing')'/>
        </label>
      </header>
      <main class='toggle-section-questions' id='toggle-section-questions-exterior-finishing'>

        <label class='exterior-finishing building-wrap'for='exterior-finishing-building-wrap'>
          <input class='checkbox' type='checkbox' name='exterior-finishing-building-wrap' />
          Building Wrap
        </label>

        <label class='exterior-finishing timber-fascia'for='exterior-finishing-timber-fascia'>
          <input class='checkbox' type='checkbox' name='exterior-finishing-timber-fascia' />
          Timber Fascia
        </label>

        <label class='exterior-finishing rab'for='exterior-finishing-rab'>
          RAB
          <input class='checkbox' type='checkbox' name='exterior-finishing-rab' />

        </label>

        <label class='exterior-finishing metal-fascia'for='exterior-finishing-metal-fascia'>
          <input class='checkbox' type='checkbox' name='exterior-finishing-metal-fascia' />
          Metal Fascia by Others
        </label>

        <label class='exterior-finishing pvc-spouting'for='exterior-finishing-pvc-spouting'>
          <input class='checkbox' type='checkbox' name='exterior-finishing-pvc-spouting' />
          PVC Spouting
        </label>

        <label class='exterior-finishing soffit'for='exterior-finishing-soffit'>
          Soffit
          <input class='checkbox' type='checkbox' name='exterior-finishing-soffit' />

        </label>

        <label class='exterior-finishing eaves-mould'for='exterior-finishing-eaves-mould'>
          <input class='checkbox' type='checkbox' name='exterior-finishing-eaves-mould' />
          Eaves Mould
        </label>

        <label class='exterior-finishing additional'for='exterior-finishing-additional'>
          Additional Information
          <textarea class='textbox estimationAdditional' type='textbox' name='exterior-finishing-additional' ></textarea>
        </label>

      </main>
    </div>

    <div class='toggle-section cladding'>
      <header id='toggle-section-header-cladding' class='toggle-section-header'>
        Cladding
        <label id='label-as-plan-cladding' class='as-plan-toggle cladding' for='as-plan-cladding'>
          As per Plan
          <input type='checkbox'  id='as-plan-cladding' name='as-plan-cladding' onclick='toggleAll('cladding')'/>
        </label>
        <label id='label-toggle-as-selected-cladding' class='hide-section-toggle cladding' for='toggle-as-selected-cladding'>
          As Selected
          <input type='checkbox' id='toggle-as-selected-cladding' name='toggle-as-selected-cladding' onclick='toggleAsSelected('cladding')'/>
        </label>
        <label id='label-toggle-none-cladding' class='hide-section-toggle cladding' for='toggle-none-cladding'>
          Not required
          <input type='checkbox' id='toggle-none-cladding' name='toggle-none-cladding' onclick='toggleNone('cladding')'/>
        </label>
      </header>
      <main class='toggle-section-questions' id='toggle-section-questions-cladding'>
        <label class='cladding brick'for='cladding-brick'>
          <input class='checkbox' type='checkbox' name='cladding-brick-check' />
          Brick
          <input class='number-input' type='number' name='cladding-brick-number' />  Quantity per M²
        </label>

        <label class='cladding sheet'for='cladding-sheet'>
          <input class='checkbox' type='checkbox' name='cladding-sheet-check' />
          Sheet
          <input class='single-input' type='text' name='cladding-sheet-text' />
        </label>

        <label class='cladding w-board'for='cladding-w-board'>
          <input class='checkbox' type='checkbox' name='cladding-w-board-check' />
          W/Board
          <input class='single-input' type='text' name='cladding-w-board' />
        </label>

        <label class='cladding stone-cladding-substrate'for='cladding-stone-cladding-substrate'>
          <input class='checkbox' type='checkbox' name='cladding-stone-cladding-substrate' />
          Stone Cladding Substrate
        </label>

        <label class='cladding additional'for='cladding-additional'>
          Additional Information
          <textarea class='textbox estimationAdditional' type='textbox' name='cladding-additional' ></textarea>
        </label>

      </main>
    </div>

    <div class='toggle-section insulation'>
      <header id='toggle-section-header-insulation' class='toggle-section-header'>
        Insulation
        <label id='label-as-plan-insulation' class='as-plan-toggle insulation' for='as-plan-insulation'>
          As per Plan
          <input type='checkbox'  id='as-plan-insulation' name='as-plan-insulation' onclick='toggleAll('insulation')'/>
        </label>
        <label id='label-toggle-as-selected-insulation' class='hide-section-toggle insulation' for='toggle-as-selected-insulation'>
          As Selected
          <input type='checkbox' id='toggle-as-selected-insulation' name='toggle-as-selected-insulation' onclick='toggleAsSelected('insulation')'/>
        </label>
        <label id='label-toggle-none-insulation' class='hide-section-toggle insulation' for='toggle-none-insulation'>
          Not required
          <input type='checkbox' id='toggle-none-insulation' name='toggle-none-insulation' onclick='toggleNone('insulation')'/>
        </label>
      </header>
      <main class='toggle-section-questions' id='toggle-section-questions-insulation'>

        <label class='insulation sub-floor'for='insulation-sub-floor'>
          <input class='check' type='checkbox' name='insulation-sub-floor-check' />
          Sub Floor
          <input class='single-input' type='text' name='insulation-sub-floor-text' />
        </label>

        <label class='insulation mid-floor'for='insulation-mid-floor'>
          <input class='check' type='checkbox' name='insulation-mid-floor-check' />
          Mid Floor
          <input class='single-input' type='text' name='insulation-mid-floor-text' />
        </label>

        <label class='insulation walls'for='insulation-walls'>
          <input class='check' type='checkbox' name='insulation-walls-check' />
          Walls
          <input class='single-input' type='text' name='insulation-walls-text' />
        </label>

        <label class='insulation ceiling'for='insulation-ceiling'>
          <input class='check' type='checkbox' name='insulation-ceiling-check' />
          Ceiling
          <input class='single-input' type='text' name='insulation-ceiling-text' />
        </label>

        <label class='insulation accoustic'for='insulation-accoustic'>
          <input class='check' type='checkbox' name='insulation-accoustic-check' />
          Accoustic
          <input class='single-input' type='text' name='insulation-accoustic-text' />
        </label>

        <label class='insulation garage-walls-ceiling'for='insulation-garage-walls-ceiling'>
          <input class='checkbox' type='checkbox' name='insulation-garage-walls-ceiling' />
          Garage walls/Ceiling (included)
        </label>

        <label class='insulation installation'for='insulation-installation'>
          <input class='checkbox' type='checkbox' name='insulation-installation' />
          Installation
        </label>
        <label class='insulation additional'for='insulation-additional'>
          Additional Information
          <textarea class='textbox estimationAdditional' type='textbox' name='insulation-additional' ></textarea>
        </label>

      </main>
    </div>

    <div class='toggle-section interior-linings'>
      <header id='toggle-section-header-interior-linings' class='toggle-section-header'>
        Interior Linings
        <label id='label-as-plan-interior-linings' class='as-plan-toggle interior-linings' for='as-plan-interior-linings'>
          As per Plan
          <input type='checkbox'  id='as-plan-interior-linings' name='as-plan-interior-linings' onclick='toggleAll('interior-linings')'/>
        </label>

        <label id='label-toggle-as-selected-interior-linings' class='toggle-as-selected interior-linings' for='toggle-as-selected-interior-linings'>
          As Selected
          <input type='checkbox' id='toggle-as-selected-interior-linings' name='toggle-as-selected-interior-linings' onclick='toggleAsSelected('interior-linings')'/>
        </label>

        <label id='label-toggle-none-interior-linings' class='hide-section-toggle interior-linings' for='toggle-none-interior-linings'>
          Not required
          <input type='checkbox' id='toggle-none-interior-linings' name='toggle-none-interior-linings' onclick='toggleNone('interior-linings')'/>
        </label>

      </header>
      <main class='toggle-section-questions' id='toggle-section-questions-interior-linings'>

        <label class='interior-linings wall'for='interior-linings-wall'>
          <input class='checkbox' type='checkbox' name='interior-linings-wall' />
          Wall
        </label>

        <label class='interior-linings wet-wall'for='interior-linings-wet-wall'>
          <input class='checkbox' type='checkbox' name='interior-linings-wet-wall' />
          Wet Wall
        </label>

        <label class='interior-linings bathroom'for='interior-linings-bathroom'>
          <input class='checkbox' type='checkbox' name='interior-linings-bathroom' />
          Bathroom
        </label>

        <label class='interior-linings wc'for='interior-linings-wc'>
          <input class='checkbox' type='checkbox' name='interior-linings-wc' />
          WC
        </label>

        <label class='interior-linings ceiling'for='interior-linings-ceiling'>
          <input class='checkbox' type='checkbox' name='interior-linings-ceiling' />
          Ceiling
        </label>

        <label class='interior-linings wet-ceiling'for='interior-linings-wet-ceiling'>
          <input class='checkbox' type='checkbox' name='interior-linings-wet-ceiling' />
          Wet Ceiling
        </label>

        <label class='interior-linings ensuite'for='interior-linings-ensuite'>
          <input class='checkbox' type='checkbox' name='interior-linings-ensuite' />
          Ensuite
        </label>

        <label class='interior-linings laundry'for='interior-linings-laundry'>
          <input class='checkbox' type='checkbox' name='interior-linings-laundry' />
          Laundry
        </label>

        <label class='interior-linings additional'for='interior-linings-additional'>
          Additional Information
          <textarea class='textbox estimationAdditional' type='textbox' name='interior-linings-additional' ></textarea>
        </label>

      </main>
    </div>

    <div class='toggle-section interior-doors'>
      <header id='toggle-section-header-interior-doors' class='toggle-section-header'>
        Interior Doors
        <label  id='label-as-plan-interior-doors' class='as-plan-toggle interior-doors' for='as-plan-interior-doors'>
          As per Plan
          <input type='checkbox'  id='as-plan-interior-doors' name='as-plan-interior-doors' onclick='toggleAll('interior-doors')'/>
        </label>
        <label  id='label-toggle-as-selected-interior-doors' class='hide-section-toggle interior-doors' for='toggle-as-selected-interior-doors'>
          As Selected
          <input type='checkbox' id='toggle-as-selected-interior-doors' name='toggle-as-selected-interior-doors' onclick='toggleAsSelected('interior-doors')'/>
        </label>
        <label  id='label-toggle-none-interior-doors' class='hide-section-toggle interior-doors' for='toggle-none-interior-doors'>
          Not required
          <input type='checkbox' id='toggle-none-interior-doors' name='toggle-none-interior-doors' onclick='toggleNone('interior-doors')'/>
        </label>
      </header>
      <main class='toggle-section-questions' id='toggle-section-questions-interior-doors'>

        <label class='interior-doors door-type'for='interior-doors-door-type'>
          <input class='checkbox' type='checkbox' name='interior-doors-door-type' />
          MDF HC PQ FJ FLAT JAMB
        </label>

        <label class='interior-doors door-hardware'for='interior-doors-door-hardware'>
          <input class='checkbox' type='checkbox' name='interior-doors-door-hardware' />
          Door Hardware
        </label>
        <label class='interior-doors additional'for='interior-doors-additional'>
          Additional Information
          <textarea class='textbox estimationAdditional' type='textbox' name='interior-doors-additional' ></textarea>
        </label>

      </main>
    </div>

    <div class='toggle-section interior-finishings'>
      <header id='toggle-section-header-interior-finishings' class='toggle-section-header'>
        Interior Finishings
        <label  id='label-as-plan-interior-finishings' class='as-plan-toggle interior-finishings' for='as-plan-interior-finishings'>
          As per Plan
          <input type='checkbox'  id='as-plan-interior-finishings' name='as-plan-interior-finishings' onclick='toggleAll('interior-finishings')'/>
        </label>
        <label  id='label-toggle-as-selected-interior-finishings' class='hide-section-toggle interior-finishings' for='toggle-as-selected-interior-finishings'>
          As Selected
          <input type='checkbox' id='toggle-as-selected-interior-finishings' name='toggle-as-selected-interior-finishings' onclick='toggleAsSelected('interior-finishings')'/>
        </label>
        <label  id='label-toggle-none-interior-finishings' class='hide-section-toggle interior-finishings' for='toggle-none-interior-finishings'>
          Not required
          <input type='checkbox' id='toggle-none-interior-finishings' name='toggle-none-interior-finishings' onclick='toggleNone('interior-finishings')'/>
        </label>
      </header>
      <main class='toggle-section-questions' id='toggle-section-questions-interior-finishings'>

        <label class='interior-finishings mdf'for='interior-finishings-mdf'>
          MDF
          <input class='checkbox' type='checkbox' name='interior-finishings-mdf' />
        </label>
        <label class='interior-finishings f-j'for='interior-finishings-f-j'>
          F/J
          <input class='checkbox' type='checkbox' name='interior-finishings-f-j' />
        </label>
        <label class='interior-finishings clears'for='interior-finishings-clears'>
          Clears
          <input class='checkbox' type='checkbox' name='interior-finishings-clears' />
        </label>
        <label class='interior-finishings timber-cornice'for='interior-finishings-timber-cornice'>
          Timber Cornice
          <input class='checkbox' type='checkbox' name='interior-finishings-timber-cornice' />
        </label>
        <label class='interior-finishings gib-cove'for='interior-finishings-gib-cove'>
          Gib Cove
          <input class='checkbox' type='checkbox' name='interior-finishings-gib-cove' />
        </label>
        <label class='interior-finishings skirting'for='interior-finishings-skirting'>
          Skirting
          <input class='checkbox' type='checkbox' name='interior-finishings-skirting' />
        </label>
        <label class='interior-finishings architrave'for='interior-finishings-architrave'>
          Architrave
          <input class='checkbox' type='checkbox' name='interior-finishings-architrave' />
        </label>
        <label class='interior-finishings wet-areas'for='interior-finishings-wet-areas'>
          Wet Areas
          <input class='checkbox' type='checkbox' name='interior-finishings-wet-areas' />
        </label>
        <label class='interior-finishings shelving'for='interior-finishings-shelving'>
          Shelving
          <input class='checkbox' type='checkbox' name='interior-finishings-shelving' />
        </label>
        <label class='interior-finishings additional'for='interior-finishings-additional'>
          Additional Information
          <textarea class='textbox estimationAdditional' type='textbox' name='interior-finishings-additional' ></textarea>
        </label>

      </main>

    </div>

    <div class='toggle-section landscaping'>
      <header id='toggle-section-header-landscaping' class='toggle-section-header'>
        Landscaping
      <label id='label-as-plan-landscaping' class='as-plan-toggle landscaping' for='as-plan-landscaping'>
        As per Plan
        <input type='checkbox'  id='as-plan-landscaping' name='as-plan-landscaping' onclick='toggleAll('landscaping')'/>
      </label>
      <label id='label-as-selected-landscaping' class='hide-section-toggle landscaping' for='toggle-as-selected-landscaping'>
        As Selected
        <input type='checkbox' id='toggle-as-selected-landscaping' name='toggle-as-selected-landscaping' onclick='toggleAsSelected('landscaping')'/>
      </label>
      <label id='label-toggle-none-landscaping' class='hide-section-toggle landscaping' for='toggle-none-landscaping'>
        Not required
        <input type='checkbox' id='toggle-none-landscaping' name='toggle-none-landscaping' onclick='toggleNone('landscaping')'/>
      </label>
    </header>
    <main class='toggle-section-questions' id='toggle-section-questions-landscaping'>
      <label class='landscaping concrete-patios'for='landscaping-concrete-patios'>
        <input class='checkbox' type='checkbox' name='landscaping-concrete-patios' />
        Concrete Patios
      </label>
      <label class='landscaping ply-deck'for='landscaping-ply-deck'>
        <input class='checkbox' type='checkbox' name='landscaping-ply-deck-check' />
        Ply Deck
        <input class='single-input' type='text' name='landscaping-ply-deck-text' />
      </label>
      <label class='landscaping decking'for='landscaping-decking'>
        <input class='checkbox' type='checkbox' name='landscaping-decking' />
        Decking
      </label>
      <label class='landscaping car-port'for='landscaping-car-port'>
        <input class='checkbox' type='checkbox' name='landscaping-car-port' />
        Carport
      </label>
      <label class='landscaping pergola'for='landscaping-pergola'>
        <input class='checkbox' type='checkbox' name='landscaping-pergola' />
        Pergola
      </label>
      <label class='landscaping timber-retaining-wall'for='landscaping-timber-retaining-wall'>
        <input class='checkbox' type='checkbox' name='landscaping-timber-retaining-wall' />
        Timber Retaining Wall
      </label>

      <label class='landscaping additional'for='landscaping-additional'>
        Additional Information
        <textarea class='textbox estimationAdditional' type='textbox' name='landscaping-additional' ></textarea>
      </label>

    </main>
  </div>
</div>
</div>

























estimationContent+= "<div class='section' >"
estimationContent+= "<header class='toggle-section-header'>TICK THE ALL ITEMS BOX OR INDIVIDUAL ITEMS AS REQUIRED <br/>"
estimationContent+= "Estimation not Required <input type='checkbox' class='checkbox' id='cancel-estimation' value="+form['cancel-estimation']+" onclick='toggleEstimation()'/>"
estimationContent+= "</header>"
estimationContent+= "<div class='toggle-section-wrapper' id='toggle-section-wrapper'><div class='toggle-section foundations'>"
estimationContent+= "<header id='toggle-section-header-foundations' class='toggle-section-header'>Foundations"
estimationContent+= "<label style='display: none;' id='label-status-foundations' class='all-items-toggle foundations' for='toggle-all-foundations'></label>"
estimationContent+= "<label id='label-toggle-all-foundations' class='all-items-toggle foundations' for='toggle-all-foundations'>All Items"
estimationContent+= "<input type='checkbox'  id='toggle-all-foundations' value="+form['toggle-all-foundations']+" onclick='toggleAll('foundations')' /></label>"
estimationContent+= "<label id='label-toggle-none-foundations' class='hide-section-toggle foundations' for='toggle-none-foundations'>Not required"
estimationContent+= "<input type='checkbox' id='toggle-none-foundations' value="+form['toggle-none-foundations']+" onclick='toggleNone('foundations')' /></label></header>"
estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-foundations'>"
estimationContent+= "<label class='foundations reinforcing-steel'for='foundations-reinforcing-steel'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['foundations-reinforcing-steel']+" />Reinforcing Steel</label>"
estimationContent+= "<label class='foundations blocks'for='foundations-blocks'>"
estimationContent+= "<input class='checkbox' type='checkbox' checkbox='foundations-blocks' />Blocks</label>"
estimationContent+= "<label class='foundations pod-system'for='foundations-pod-system'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['foundations-pod-system']+" />Pod System</label>"
estimationContent+= "<label class='foundations piles'for='foundations-piles'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['foundations-piles']+" />Piles</label>"
estimationContent+= "<label class='foundations other'for='foundations-other'>Other"
estimationContent+= "<input class='text' type='text' value="+form['foundations-other']+" /></label>  </main>"
estimationContent+= "</div><div class='toggle-section timber-floor'>"
estimationContent+= "<header id='toggle-section-header-timber-floor' class='toggle-section-header'>Timber Floor"
estimationContent+= "<label style='display: none;' id='label-status-timber-floor' class='all-items-toggle timber-floor' for='toggle-all-timber-floor'></label>"
estimationContent+= "<label id='label-toggle-all-timber-floor' class='all-items-toggle timber-floor' for='toggle-all-timber-floor'>All Items"
estimationContent+= "<input type='checkbox'  id='toggle-all-timber-floor' value="+form['toggle-all-timber-floor']+" onclick='toggleAll('timber-floor')'/></label>"
estimationContent+= "<label id='label-toggle-none-timber-floor' class='hide-section-toggle timber-floor' for='toggle-none-timber-floor'>Not required"
estimationContent+= "<input type='checkbox' id='toggle-none-timber-floor' value="+form['toggle-none-timber-floor']+" onclick='toggleNone('timber-floor')'/></label>"
estimationContent+= "</header>"
estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-timber-floor'>"
estimationContent+= "<label class='timber-floor bearers'for='timber-floor-bearers'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['timber-floor-bearers']+" />Bearers"
estimationContent+= "<input class='single-input' type='text' value="+form['timber-floor-bearers']+" /></label>"
estimationContent+= "<label class='timber-floor Joists'for='timber-floor-Joists'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['timber-floor-Joists']+" />Joists"
estimationContent+= "<input class='single-input' type='text' value="+form['timber-floor-Joists']+" /></label>"
estimationContent+= "<label class='timber-floor flooring'for='timber-floor-flooring'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['timber-floor-flooring']+" />Flooring"
estimationContent+= "<input class='single-input' type='text' value="+form['timber-floor-flooring']+" /></label>"
estimationContent+= "<label class='timber-floor wet-area-flooring'for='timber-floor-wet-area-flooring'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['timber-floor-wet-area-flooring']+" />Wet Area Flooring"
estimationContent+= "<input class='single-input' type='text' value="+form['timber-floor-wet-area-flooring']+" /></label>"
estimationContent+= "<label class='timber-floor tile-slate-underlay'for='timber-floor-tile-slate-underlay'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['timber-floor-tile-slate-underlay']+" />Tile & Slate Underlay"
estimationContent+= "<input class='single-input' type='text' value="+form['timber-floor-tile-slate-underlay']+" /></label>"
estimationContent+= "</main>"
estimationContent+= "</div>"
estimationContent+= "<div class='toggle-section wall-framing'>"
estimationContent+= "<header class='toggle-section-header' id='toggle-section-header-wall-framing'>"
estimationContent+= "Wall Framing"
estimationContent+= "<label style='display: none;' id='label-status-wall-framing' class='all-items-toggle wall-framing' for='toggle-all-wall-framing'></label>"
estimationContent+= "<label id='label-toggle-all-wall-framing' class='all-items-toggle wall-framing' for='toggle-all-wall-framing'>"
estimationContent+= "All Items"
estimationContent+= "<input type='checkbox' id='toggle-all-wall-framing' value="+form['toggle-all-wall-framing']+" onclick='toggleAll('wall-framing')'/></label>"
estimationContent+= "<label id='label-toggle-none-wall-framing' class='hide-section-toggle wall-framing' for='toggle-none-wall-framing'>"
estimationContent+= "Not required"
estimationContent+= "<input type='checkbox' id='toggle-none-wall-framing' value="+form['toggle-none-wall-framing']+" onclick='toggleNone('wall-framing')'/></label>"
estimationContent+= "</header>"
estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-wall-framing' >"
estimationContent+= "<label class='wall-framing prenailer-supplied'for='wall-framing-prenailer-supplied'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['wall-framing-prenailer-supplied']+" />Supplied by Prenailer - Do not allow</label>"
estimationContent+= "<label class='wall-framing random'for='wall-framing-random'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['wall-framing-random']+" />Random</label>"
estimationContent+= "<label class='wall-framing capping'for='wall-framing-capping'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['wall-framing-capping']+" />Capping</label>"
estimationContent+= "<label class='wall-framing strapping'for='wall-framing-strapping'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['wall-framing-strapping']+" />Strapping</label>"
estimationContent+= "<label class='wall-framing h-one-two'for='wall-framing-h-one-two'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['wall-framing-h-one-two']+" />H1.2</label>"
estimationContent+= "<label class='wall-framing h-three-two'for='wall-framing-h-three-two'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['wall-framing-h-three-two']+" />H3.2</label>"
estimationContent+= "<label class='wall-framing h-three-plates'for='wall-framing-h-three-plates'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['wall-framing-h-three-plates']+" />H3 Plates</label>"
estimationContent+= "<label class='wall-framing beams'for='wall-framing-beams'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['wall-framing-beams']+" />Beams</label>"
estimationContent+= "<label class='wall-framing posts'for='wall-framing-posts'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['wall-framing-posts']+" />Posts</label>"
estimationContent+= "<label class='wall-framing metal'for='wall-framing-metal'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['wall-framing-metal']+" />Metal</label>"
estimationContent+= "<label class='wall-framing timber'for='wall-framing-timber'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['wall-framing-timber']+" />"
estimationContent+= "Timber</label>"
estimationContent+= "</main>"
estimationContent+= "</div><div class='toggle-section roof-framing'>"
estimationContent+= "<header class='toggle-section-header' id='toggle-section-header-roof-framing'>"
estimationContent+= "Roof Framing"
estimationContent+= "<label style='display: none;' id='label-status-roof-framing' class='all-items-toggle roof-framing' for='toggle-all-roof-framing'></label>"
estimationContent+= "<label id='label-toggle-all-roof-framing' class='all-items-toggle roof-framing' for='toggle-all-roof-framing'>"
estimationContent+= "All Items"
estimationContent+= "<input type='checkbox'  id='toggle-all-roof-framing' value="+form['toggle-all-roof-framing']+" onclick='toggleAll('roof-framing')'/></label>"
estimationContent+= "<label id='label-toggle-none-roof-framing' class='hide-section-toggle roof-framing' for='toggle-none-roof-framing'>"
estimationContent+= "Not required"
estimationContent+= "<input type='checkbox' id='toggle-none-roof-framing' value="+form['toggle-none-roof-framing']+" onclick='toggleNone('roof-framing')'/></label>"
estimationContent+= "</header>"
estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-roof-framing'>"
estimationContent+= "<label class='roof-framing prenailer-supplied'for='roof-framing-prenailer-supplied'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['roof-framing-prenailer-supplied']+" />"
estimationContent+= "Supplied by Prenailer - Do not allow</label>"
estimationContent+= "<label class='roof-framing bor-pack'for='roof-framing-bor-pack'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['roof-framing-bor-pack']+" />"
estimationContent+= "BOR Pack (as Agreed)</label>"
estimationContent+= "<label class='roof-framing ply-membrane'for='roof-framing-ply-membrane'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['roof-framing-ply-membrane']+" />"
estimationContent+= "Ply to Membrane Roof</label>"
estimationContent+= "<label class='roof-framing ply-shingle'for='roof-framing-ply-shingle'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['roof-framing-ply-shingle']+" />"
estimationContent+= "Ply to Shingle Roof</label>"
estimationContent+= "<label class='roof-framing purlins-only'for='roof-framing-purlins-only'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['roof-framing-purlins-only']+" />"
estimationContent+= "Purlins only</label>"
estimationContent+= "</main></div><div class='toggle-section exterior-finishing'>"
estimationContent+= "<header id='toggle-section-header-exterior-finishing' class='toggle-section-header'>"
estimationContent+= "Exterior Finishings"
estimationContent+= "<label style='display: none;' id='label-status-exterior-finishing' class='all-items-toggle exterior-finishing' for='toggle-all-exterior-finishing'></label>"
estimationContent+= "<label id='label-toggle-all-exterior-finishing' class='all-items-toggle exterior-finishing' for='toggle-all-exterior-finishing'>"
estimationContent+= "All Items"
estimationContent+= "<input type='checkbox'  id='toggle-all-exterior-finishing' value="+form['toggle-all-exterior-finishing']+" onclick='toggleAll('exterior-finishing')'/></label>"
estimationContent+= "<label id='label-toggle-none-exterior-finishing' class='hide-section-toggle exterior-finishing' for='toggle-none-exterior-finishing'>"
estimationContent+= "Not required"
estimationContent+= "<input type='checkbox' id='toggle-none-exterior-finishing' value="+form['toggle-none-exterior-finishing']+" onclick='toggleNone('exterior-finishing')'/></label>"
estimationContent+= "</header>"
estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-exterior-finishing'>"
estimationContent+= "<label class='exterior-finishing building-wrap'for='exterior-finishing-building-wrap'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['exterior-finishing-building-wrap']+" />"
estimationContent+= "Building Wrap</label>"
estimationContent+= "<label class='exterior-finishing timber-fascia'for='exterior-finishing-timber-fascia'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['exterior-finishing-timber-fascia']+" />"
estimationContent+= "Timber Fascia</label>"
estimationContent+= "<label class='exterior-finishing rab'for='exterior-finishing-rab'>"
estimationContent+= "RAB<input class='checkbox' type='checkbox' "+form['exterior-finishing-rab']+" />    </label>"
estimationContent+= "<label class='exterior-finishing metal-fascia'for='exterior-finishing-metal-fascia'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['exterior-finishing-metal-fascia']+" />"
estimationContent+= "Metal Fascia by Others</label>"
estimationContent+= "<label class='exterior-finishing pvc-spouting'for='exterior-finishing-pvc-spouting'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['exterior-finishing-pvc-spouting']+" />"
estimationContent+= "PVC Spouting</label>"
estimationContent+= "<label class='exterior-finishing soffit'for='exterior-finishing-soffit'>"
estimationContent+= "Soffit<input class='checkbox' type='checkbox' "+form['exterior-finishing-soffit']+" /></label>"
estimationContent+= "<label class='exterior-finishing eaves-mould'for='exterior-finishing-eaves-mould'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['exterior-finishing-eaves-mould']+" />"
estimationContent+= "Eaves Mould</label></main></div>"
estimationContent+= "<div class='toggle-section cladding'>"
estimationContent+= "<header id='toggle-section-header-cladding' class='toggle-section-header'>Cladding"
estimationContent+= "<label style='display: none;' id='label-status-cladding' class='all-items-toggle cladding' for='toggle-all-cladding'></label>"
estimationContent+= "<label id='label-toggle-all-cladding' class='all-items-toggle cladding' for='toggle-all-cladding'>"
estimationContent+= "All Items<input type='checkbox'  id='toggle-all-cladding' value="+form['toggle-all-cladding']+" onclick='toggleAll('cladding')'/></label>"
estimationContent+= "<label id='label-toggle-none-cladding' class='hide-section-toggle cladding' for='toggle-none-cladding'>"
estimationContent+= "Not required<input type='checkbox' id='toggle-none-cladding' value="+form['toggle-none-cladding']+" onclick='toggleNone('cladding')'/></label>"
estimationContent+= "</header>"
estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-cladding'>"
estimationContent+= "<label class='cladding brick'for='cladding-brick'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['cladding-brick-check']+" />"
estimationContent+= "Brick<input class='number-input' type='number' value="+form['cladding-brick-number']+" />  Quantity per M²</label>"
estimationContent+= "<label class='cladding sheet'for='cladding-sheet'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['cladding-sheet-check']+" />"
estimationContent+= "Sheet<input class='single-input' type='text' value="+form['cladding-sheet-text']+" /></label>"
estimationContent+= "<label class='cladding w-board'for='cladding-w-board'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['cladding-w-board-check']+" />"
estimationContent+= "W/Board<input class='single-input' type='text' value="+form['cladding-w-board']+" /></label>"
estimationContent+= "<label class='cladding stone-cladding-substrate'for='cladding-stone-cladding-substrate'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['cladding-stone-cladding-substrate']+" />"
estimationContent+= "Stone Cladding Substrate</label></main></div>"
estimationContent+= "<div class='toggle-section insulation'><header id='toggle-section-header-insulation' class='toggle-section-header'>"
estimationContent+= "Insulation"
estimationContent+= "<label style='display: none;' id='label-status-insulation' class='all-items-toggle insulation' for='toggle-all-insulation'></label>"
estimationContent+= "<label id='label-toggle-all-insulation' class='all-items-toggle insulation' for='toggle-all-insulation'>"
estimationContent+= "All Items"
estimationContent+= "<input type='checkbox'  id='toggle-all-insulation' value="+form['toggle-all-insulation']+" onclick='toggleAll('insulation')'/></label>"
estimationContent+= "<label id='label-toggle-none-insulation' class='hide-section-toggle insulation' for='toggle-none-insulation'>"
estimationContent+= "Not required"
estimationContent+= "<input type='checkbox' id='toggle-none-insulation' value="+form['toggle-none-insulation']+" onclick='toggleNone('insulation')'/></label></header>"
estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-insulation'><label class='insulation sub-floor'for='insulation-sub-floor'>"
estimationContent+= "<input class='check' type='checkbox' "+form['insulation-sub-floor-check']+" />"
estimationContent+= "Sub Floor<input class='single-input' type='text' value="+form['insulation-sub-floor-text']+" /></label>"
estimationContent+= "<label class='insulation mid-floor'for='insulation-mid-floor'>"
estimationContent+= "<input class='check' type='checkbox' "+form['insulation-mid-floor-check']+" />"
estimationContent+= "Mid Floor<input class='single-input' type='text' value="+form['insulation-mid-floor-text']+" /></label>"
estimationContent+= "<label class='insulation walls'for='insulation-walls'>"
estimationContent+= "<input class='check' type='checkbox' "+form['insulation-walls-check']+" />"
estimationContent+= "Walls<input class='single-input' type='text' value="+form['insulation-walls-text']+" /></label>"
estimationContent+= "<label class='insulation ceiling'for='insulation-ceiling'>"
estimationContent+= "<input class='check' type='checkbox' "+form['insulation-ceiling-check']+" />"
estimationContent+= "Ceiling<input class='single-input' type='text' value="+form['insulation-ceiling-text']+" /></label>"
estimationContent+= "<label class='insulation accoustic'for='insulation-accoustic'>"
estimationContent+= "<input class='check' type='checkbox' "+form['insulation-accoustic-check']+" />"
estimationContent+= "Accoustic<input class='single-input' type='text' value="+form['insulation-accoustic-text']+" /></label>"
estimationContent+= "<label class='insulation garage-walls-ceiling'for='insulation-garage-walls-ceiling'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['insulation-garage-walls-ceiling']+" />Garage walls/Ceiling (included)</label>"
estimationContent+= "<label class='insulation installation'for='insulation-installation'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['insulation-installation']+" />Installation</label></main></div>"
estimationContent+= "<div class='toggle-section interior-linings'>"
estimationContent+= "<header id='toggle-section-header-interior-linings' class='toggle-section-header'>Interior Linings"
estimationContent+= "<label style='display: none;' id='label-status-interior-linings' class='all-items-toggle interior-linings' for='toggle-all-interior-linings'></label>"
estimationContent+= "<label id='label-toggle-all-interior-linings' value="+form['toggle-all-interior-linings']+" class='all-items-toggle interior-linings'>All Items"
estimationContent+= "<input type='checkbox'  id='toggle-all-interior-linings' onclick='toggleAll('interior-linings')'/></label>"
estimationContent+= "<label id='label-toggle-none-interior-linings' value="+form['toggle-none-interior-linings']+" class='hide-section-toggle interior-linings'>Not required"
estimationContent+= "<input type='checkbox' id='toggle-none-interior-linings' onclick='toggleNone('interior-linings')'/></label></header>"
estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-interior-linings'><label class='interior-linings wall'for='interior-linings-wall'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-linings-wall']+" />Wall</label>"
estimationContent+= "<label class='interior-linings wet-wall'for='interior-linings-wet-wall'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-linings-wet-wall']+" />Wet Wall</label>"
estimationContent+= "<label class='interior-linings bathroom'for='interior-linings-bathroom'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-linings-bathroom']+" />Bathroom</label>"
estimationContent+= "<label class='interior-linings wc'for='interior-linings-wc'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-linings-wc']+" />WC</label>"
estimationContent+= "<label class='interior-linings ceiling'for='interior-linings-ceiling'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-linings-ceiling']+" />Ceiling</label>"
estimationContent+= "<label class='interior-linings wet-ceiling'for='interior-linings-wet-ceiling'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-linings-wet-ceiling']+" />Wet Ceiling</label>"
estimationContent+= "<label class='interior-linings ensuite'for='interior-linings-ensuite'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-linings-ensuite']+" />Ensuite</label>"
estimationContent+= "<label class='interior-linings laundry'for='interior-linings-laundry'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-linings-laundry']+" />Laundry</label>"
estimationContent+= "<label class='interior-linings other'for='interior-linings-other'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-linings-other']+" />Other</label></main></div>"
estimationContent+= "<div class='toggle-section interior-doors'>"
estimationContent+= "<header id='toggle-section-header-interior-doors' class='toggle-section-header'>Interior Doors"
estimationContent+= "<label style='display: none;'  id='label-status-interior-doors' class='all-items-toggle interior-doors' for='toggle-all-interior-doors'></label>"
estimationContent+= "<label  id='label-toggle-all-interior-doors' class='all-items-toggle interior-doors' for='toggle-all-interior-doors'>All Items"
estimationContent+= "<input type='checkbox'  id='toggle-all-interior-doors' value="+form['toggle-all-interior-doors']+" onclick='toggleAll('interior-doors')'/></label>"
estimationContent+= "<label  id='label-toggle-none-interior-doors' class='hide-section-toggle interior-doors' for='toggle-none-interior-doors'>Not required"
estimationContent+= "<input type='checkbox' id='toggle-none-interior-doors' value="+form['toggle-none-interior-doors']+" onclick='toggleNone('interior-doors')'/></label></header>"
estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-interior-doors'><label class='interior-doors door-type'for='interior-doors-door-type'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-doors-door-type']+" />MDF HC PQ FJ FLAT JAMB</label>"
estimationContent+= "<label class='interior-doors door-hardware'for='interior-doors-door-hardware'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-doors-door-hardware']+" />Door Hardware</label>"
estimationContent+= "</main>"
estimationContent+= "</div><div class='toggle-section interior-finishings'>"
estimationContent+= "<header id='toggle-section-header-interior-finishings' class='toggle-section-header'>Interior Finishings"
estimationContent+= "<label style='display: none;'id='label-status-interior-finishings' class='all-items-toggle interior-finishings' for='toggle-all-interior-finishings'></label>"
estimationContent+= "<label  id='label-toggle-all-interior-finishings' value="+form['toggle-all-interior-finishings']+" class='all-items-toggle interior-finishings'>All Items"
estimationContent+= "<input type='checkbox'  id='toggle-all-interior-finishings' onclick='toggleAll('interior-finishings')'/></label>"
estimationContent+= "<label id='label-toggle-none-interior-finishings' value="+form['toggle-none-interior-finishings']+" class='hide-section-toggle interior-finishings'>Not required"
estimationContent+= "<input type='checkbox' id='toggle-none-interior-finishings' onclick='toggleNone('interior-finishings')'/></label></header>"
estimationContent+= "<main class='toggle-section-questions' id='toggle-section-questions-interior-finishings'>"
estimationContent+= "<label class='interior-finishings mdf'for='interior-finishings-mdf'>MDF"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-finishings-mdf']+" /></label>"
estimationContent+= "<label class='interior-finishings f-j'for='interior-finishings-f-j'>F/J"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-finishings-f-j']+" /></label>"
estimationContent+= "<label class='interior-finishings clears'for='interior-finishings-clears'>Clears"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-finishings-clears']+" /></label>"
estimationContent+= "<label class='interior-finishings timber-cornice'for='interior-finishings-timber-cornice'>Timber Cornice"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-finishings-timber-cornice']+" /></label>"
estimationContent+= "<label class='interior-finishings gib-cove'for='interior-finishings-gib-cove'>Gib Cove"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-finishings-gib-cove']+" /></label>"
estimationContent+= "<label class='interior-finishings skirting'for='interior-finishings-skirting'>Skirting"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-finishings-skirting']+" /></label>"
estimationContent+= "<label class='interior-finishings architrave'for='interior-finishings-architrave'>Architrave"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-finishings-architrave']+" /></label>"
estimationContent+= "<label class='interior-finishings wet-areas'for='interior-finishings-wet-areas'>Wet Areas"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-finishings-wet-areas']+" /></label>"
estimationContent+= "<label class='interior-finishings shelving'for='interior-finishings-shelving'>Shelving"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['interior-finishings-shelving']+" /></label>"
estimationContent+= "</main></div><div class='toggle-section landscaping'>"
estimationContent+= "<header id='toggle-section-header-landscaping' class='toggle-section-header'>Landscaping"
estimationContent+= "<label style='display: none;' id='label-status-landscaping' class='all-items-toggle landscaping' for='toggle-all-landscaping'></label>"
estimationContent+= "<label id='label-toggle-all-landscaping' class='all-items-toggle landscaping' for='toggle-all-landscaping'>All Items"
estimationContent+= "<input type='checkbox'  id='toggle-all-landscaping' value="+form['toggle-all-landscaping']+" onclick='toggleAll('landscaping')'/></label>"
estimationContent+= "<label id='label-toggle-none-landscaping' class='hide-section-toggle landscaping' for='toggle-none-landscaping'>Not required"
estimationContent+= "<input type='checkbox' id='toggle-none-landscaping' value="+form['toggle-none-landscaping']+" onclick='toggleNone('landscaping')'/></label>"
estimationContent+= "</header><main class='toggle-section-questions' id='toggle-section-questions-landscaping'>"
estimationContent+= "<label class='landscaping concrete-patios'for='landscaping-concrete-patios'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['landscaping-concrete-patios']+" />Concrete Patios</label>"
estimationContent+= "<label class='landscaping ply-deck'for='landscaping-ply-deck'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['landscaping-ply-deck-check']+" />Ply Deck"
estimationContent+= "<input class='single-input' type='text' value="+form['landscaping-ply-deck-text']+" /></label>"
estimationContent+= "<label class='landscaping decking'for='landscaping-decking'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['landscaping-decking']+" />Decking</label>"
estimationContent+= "<label class='landscaping car-port'for='landscaping-car-port'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['landscaping-car-port']+" />Carport</label>"
estimationContent+= "<label class='landscaping pergola'for='landscaping-pergola'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['landscaping-pergola']+" />Pergola</label>"
estimationContent+= "<label class='landscaping timber-retaining-wall'for='landscaping-timber-retaining-wall'>"
estimationContent+= "<input class='checkbox' type='checkbox' "+form['landscaping-timber-retaining-wall']+" />Timber Retaining Wall</label>"
estimationContent+= "</main></div></div></div>"

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
