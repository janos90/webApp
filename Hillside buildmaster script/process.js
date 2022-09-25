  <style type='text/css'>
  body {text-align: -webkit-center:background-color: #FFfFFF:font-family: Sans-serif;}
  form {width:80em;}
  #heading {display:flex:height:100%:padding: 0em 20em 2em 20em;}.store-logo {width: 15em;}#heading .title {color:red:width: 15em;}
  .section {width: 100%:border: solid black 2px:padding: 0em 0em 0em 0em:margin: 1em 0 1em 0;}.split-box {display: flex;}
  .split-box div {border: solid black 1px:margin: 1em;}
  .split-box .half-section {width: 50%;}
  .split-box .third-section {width: 33.33%;}label {min-width: 31%:display: block:margin: 2px:padding: 5px:text-align: justify;}
  .section header{background-color: gray:font-weight: bold:font-size: 20px:padding-top: 2px:padding-bottom: 2px:margin-bottom: 3px;}
  .toggle-section header{background-color: gray:font-weight: bold:font-size: 20px:padding-top: 2px:padding-bottom: 2px:margin-bottom: 3px:display: flex;}.outsourcing-selection-ul {}
  .outsourcing-selection-li {}.toggle-section-wrapper {display: flex:flex-wrap: wrap;}
  .toggle-section {width: 49.5%:margin: 2px:border: solid 1px black;}.outsourcing-selection-body {display: flex:flex-wrap: wrap;}.outsourcing-selection-ul {list-style: none:border: 2px solid black:margin: 4px:padding: 2px:width: 48%:border-radius: 5px:flex-grow: 1;}.toggle-section-questions {display: flex:width: 100%:flex-wrap: wrap;}</style><form id='myForm' align='center' onsubmit='handleFormSubmit(this)'>
    <header class=' id='heading'>
      <image class='store-logo' src='https://westernitm.co.nz/wp-content/uploads/2014/10/ITM-Logo-square-200px-web.jpg'/>    <h2 class='title'>
        Estimate request <br /> ITM Hillside
        Version 7
      </h2>
    </header>  <div class='section' id='quote-info'>
      <header>
        Quote Information
      </header>    <label for='quote-info-reference'>
        Quote Ref
        <input class='single-input' type='text' name='quote-info-reference'  />
      </label>    <label for='quote-info-sales-rep'>
        Sales Rep
        <input class='single-input' type='text' name='quote-info-sales-rep'  />
      </label>    <label for='quote-info-date-received'>
        Date Received
        <input class='single-input' type='text' name='quote-info-date-received'  />
      </label>    <label for='template-selection'>Select Template
        <select class=' name='template-selection' id='template-selection'>
          <option value='hillside'>Hillside</option>
          <option value='mahia'>Mahia</option>
          <option value='matakana'>Matakana</option>
        </select>
      </label>    <label for='tickbox-preliminary-plan'>
        Preliminary plan
        <input type='checkbox' name='tickbox-preliminary-plan' >
      </label>    <label for='tickbox-preliminary-plan'>
        Consented plan
        <input type='checkbox' name='tickbox-preliminary-plan' >
      </label>    <label for='quote-info-plan-version'>
        Plan Version Number
        <input class='single-input' type='text' name='quote-info-plan-version'  />
      </label>    <label for='emailTo'>
        Email to
        <input class='single-input' type='text' name='emailTo' id='emailTo'  />
      </label>
    </div>
    <div class='section split-box'>
      <div class='half-section' id='customer-info'>
        <header>
          Customer Information
        </header>
        <label for='customer-info-name'>
          Customer Name
          <input class='single-input' type='text' name='customer-info-name'  />
        </label>      <label for='customer-info-email'>
          Contact Email
          <input class='single-input' type='text' name='customer-info-email'  />
        </label>      <label for='customer-info-phone'>
          Phone Number
          <input class='single-input' type='text' name='customer-info-phone'  />
        </label>    </div>
      <div class='half-section' id='job-info'>
        <header>
          Job Information
        </header>
        <label for='job-info-address'>
          Site Address
          <input class='textbox-input' type='text' name='job-info-address'  />
        </label>    </div>
    </div>
    <div class='outsourcing-selection section'>
      <header>Out Sourcing - send Plans for measure and quote <br />
        Outsourcing not Required <input type='checkbox' class='checkbox' id='cancel-outsourcing' name='cancel-outsourcing' onclick='toggleOutsourcing()'/>    </header>
      <main class='outsourcing-selection-body' id='outsourcing-selection-body'>
        <ul class='outsourcing-selection-ul prenail'>
          <header>PreNail</header>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-prenail-turangi'>
              Turangi ITM
              <input class='checkbox' type='checkbox' name='outsourcing-selection-prenail-turangi' id='outsourcing-selection-prenail-turangi' />
            </label>        </li>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-prenail-ntml'>
              NTML
              <input class='checkbox' type='checkbox' name='outsourcing-selection-prenail-ntml'  />
            </label>        </li>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-prenail-dayles'>
              Dayles
              <input class='checkbox' type='checkbox' name='outsourcing-selection-prenail-dayles'  id='outsourcePrenailDayleid' onclick='outsourcePrenailDayle()'/>
            </label>
          </li>
        </ul>
        <ul class='outsourcing-selection-ul reinforcing'>
          <header>Reinforcing</header>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-reinforcing-united-steel'>
              United Steel
              <input class='checkbox' type='checkbox' name='outsourcing-selection-reinforcing-united-steel'  />
            </label>        </li>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-reinforcing-Summit'>
              Summit
              <input class='checkbox' type='checkbox' name='outsourcing-selection-reinforcing-Summit'  />
            </label>        </li>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-reinforcing-Wyatt'>
              Wyatt
              <input class='checkbox' type='checkbox' name='outsourcing-selection-reinforcing-Wyatt'  />
            </label>        </li>
        </ul>      <ul class='outsourcing-selection-ul ribraft'>
          <header>Ribraft</header>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-ribraft-rfl'>
              RFL
              <input class='checkbox' type='checkbox' name='outsourcing-selection-ribraft-rfl'  />
            </label>
          </li>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-ribraft-russel-gordon'>
              Russel Gordon
              <input class='checkbox' type='checkbox' name='outsourcing-selection-ribraft-russel-gordon'  />
            </label>
          </li>
        </ul>      <ul class='outsourcing-selection-ul joinery'>
          <header>Joinery</header>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-joinery-vision'>
              Vision
              <input class='checkbox' type='checkbox' name='outsourcing-selection-joinery-vision'  />
            </label>
          </li>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-joinery-tbc'>
              TBC
              <input class='checkbox' type='checkbox' name='outsourcing-selection-joinery-tbc'  />
            </label>
          </li>
        </ul>      <ul class='outsourcing-selection-ul garage-doors'>
          <header>Garage Doors</header>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-garage-doors-dominator'>
              dominator
              <input class='checkbox' type='checkbox' name='outsourcing-selection-garage-doors-dominator'  />
            </label>
          </li>
        </ul>
        <ul class='outsourcing-selection-ul doors-internal'>
          <header>Doors - Internal</header>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-doors-internal-mahurangi'>
              Mahurangi
              <input class='checkbox' type='checkbox' name='outsourcing-selection-doors-internal-mahurangi'  />
            </label>
          </li>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-doors-internal-doorways'>
              Doorways
              <input class='checkbox' type='checkbox' name='outsourcing-selection-doors-internal-doorways'  />
            </label>
          </li>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-doors-internal-elite'>
              Elite
              <input class='checkbox' type='checkbox' name='outsourcing-selection-doors-internal-elite'  />
            </label>
          </li>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-doors-internal-nationwide'>
              Nationwide
              <input class='checkbox' type='checkbox' name='outsourcing-selection-doors-internal-nationwide'  />
            </label>
          </li>
        </ul>      <ul class='outsourcing-selection-ul outsourcing-insualtion'>
          <header>Insulation</header>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-outsourcing-insualtion-pinkfit'>
              Pinkfit
              <input class='checkbox' type='checkbox' name='outsourcing-selection-outsourcing-insualtion-pinkfit'  />
            </label>
          </li>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-outsourcing-insualtion-natural'>
              Natural
              <input class='checkbox' type='checkbox' name='outsourcing-selection-outsourcing-insualtion-natural'  />
            </label>
          </li>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-outsourcing-insualtion-adl-insulation'>
              ADL Insulation
              <input class='checkbox' type='checkbox' name='outsourcing-selection-outsourcing-insualtion-adl-insulation'  />
            </label>
          </li>
        </ul>      <ul class='outsourcing-selection-ul structural-steel'>
          <header>Structural Steel</header>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-structural-steel-allwin'>
              Allwin
              <input class='checkbox' type='checkbox' name='outsourcing-selection-structural-steel-allwin'  />
            </label>
          </li>
        </ul>      <ul class='outsourcing-selection-ul cladding'>
          <header>Cladding</header>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-cladding-rosenfield'>
              Rosenfield
              <input class='checkbox' type='checkbox' name='outsourcing-selection-cladding-rosenfield'  />
            </label>
          </li>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-cladding-abodo'>
              Abodo
              <input class='checkbox' type='checkbox' name='outsourcing-selection-cladding-abodo'  />
            </label>
          </li>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-cladding-jsc'>
              JSC
              <input class='checkbox' type='checkbox' name='outsourcing-selection-cladding-jsc'  />
            </label>
          </li>
        </ul>
        <ul class='outsourcing-selection-ul roofing'>
          <header>Roofing</header>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-roofing-new-era-sfi'>
              New Era SFI
              <input class='checkbox' type='checkbox' name='outsourcing-selection-roofing-new-era-sfi'  />
            </label>
          </li>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-roofing-johnson-roofing-sfi'>
              Johnson Roofing SFI
              <input class='checkbox' type='checkbox' name='outsourcing-selection-roofing-johnson-roofing-sfi'  />
            </label>
          </li>
          <li class='outsourcing-selection-li'>
            <label for='outsourcing-selection-roofing-roofing-industries-material-only'>
              Roofing Industries Material Only
              <input class='checkbox' type='checkbox' name='outsourcing-selection-roofing-roofing-industries-material-only'  />
            </label>
          </li>
        </ul>
      </main>
    </div>
    <div class='section' >
      <header class='toggle-section-header'>
        TICK THE ALL ITEMS BOX OR INDIVIDUAL ITEMS AS REQUIRED <br/>
        Estimation not Required <input type='checkbox' class='checkbox' id='cancel-estimation' name='cancel-estimation' onclick='toggleEstimation()'/>
      </header>
      <div class='toggle-section-wrapper' id='toggle-section-wrapper'>
        <div class='toggle-section foundations'>
          <header id='toggle-section-header-foundations' class='toggle-section-header'>
            Foundations
            <label style='display: none;' id='label-status-foundations' class='all-items-toggle foundations' for='toggle-all-foundations'>
            </label>
            <label id='label-toggle-all-foundations' class='all-items-toggle foundations' for='toggle-all-foundations'>
              All Items
              <input type='checkbox'  id='toggle-all-foundations' name='toggle-all-foundations' onclick='toggleAll('foundations')' />
            </label>
            <label id='label-toggle-none-foundations' class='hide-section-toggle foundations' for='toggle-none-foundations'>
              Not required
              <input type='checkbox' id='toggle-none-foundations' name='toggle-none-foundations' onclick='toggleNone('foundations')' />
            </label>
          </header>
          <main class='toggle-section-questions' id='toggle-section-questions-foundations'>
            <label class='foundations reinforcing-steel'for='foundations-reinforcing-steel'>
              <input class='checkbox' type='checkbox' name='foundations-reinforcing-steel'  />
              Reinforcing Steel
            </label>
            <label class='foundations blocks'for='foundations-blocks'>
              <input class='checkbox' type='checkbox' checkbox='foundations-blocks'  />
              Blocks
            </label>
            <label class='foundations pod-system'for='foundations-pod-system'>
              <input class='checkbox' type='checkbox' name='foundations-pod-system'  />
              Pod System
            </label>
            <label class='foundations piles'for='foundations-piles'>
              <input class='checkbox' type='checkbox' name='foundations-piles'  />
              Piles
            </label>
            <label class='foundations other'for='foundations-other'>
              Other
              <input class='text' type='text' name='foundations-other'  />
            </label>        </main>
        </div><div class='toggle-section timber-floor'>
          <header id='toggle-section-header-timber-floor' class='toggle-section-header'>
            Timber Floor
            <label style='display: none;' id='label-status-timber-floor' class='all-items-toggle timber-floor' for='toggle-all-timber-floor'>
            </label>
            <label id='label-toggle-all-timber-floor' class='all-items-toggle timber-floor' for='toggle-all-timber-floor'>
              All Items
              <input type='checkbox'  id='toggle-all-timber-floor' name='toggle-all-timber-floor' onclick='toggleAll('timber-floor')'/>
            </label>
            <label id='label-toggle-none-timber-floor' class='hide-section-toggle timber-floor' for='toggle-none-timber-floor'>
              Not required
              <input type='checkbox' id='toggle-none-timber-floor' name='toggle-none-timber-floor' onclick='toggleNone('timber-floor')'/>
            </label>
          </header>
          <main class='toggle-section-questions' id='toggle-section-questions-timber-floor'>
            <label class='timber-floor bearers'for='timber-floor-bearers'>
              <input class='checkbox' type='checkbox' name='timber-floor-bearers'  />
              Bearers
              <input class='single-input' type='text' name='timber-floor-bearers'  /></label>
            <label class='timber-floor Joists'for='timber-floor-Joists'>
              <input class='checkbox' type='checkbox' name='timber-floor-Joists'  />
              Joists
              <input class='single-input' type='text' name='timber-floor-Joists'  /></label>
            <label class='timber-floor flooring'for='timber-floor-flooring'>
              <input class='checkbox' type='checkbox' name='timber-floor-flooring'  />
              Flooring
              <input class='single-input' type='text' name='timber-floor-flooring'  /></label>
            <label class='timber-floor wet-area-flooring'for='timber-floor-wet-area-flooring'>
              <input class='checkbox' type='checkbox' name='timber-floor-wet-area-flooring'  />
              Wet Area Flooring
              <input class='single-input' type='text' name='timber-floor-wet-area-flooring'  /></label>
            <label class='timber-floor tile-slate-underlay'for='timber-floor-tile-slate-underlay'>
              <input class='checkbox' type='checkbox' name='timber-floor-tile-slate-underlay'  />
              Tile & Slate Underlay
              <input class='single-input' type='text' name='timber-floor-tile-slate-underlay'  />
            </label>
          </main>
        </div>
        <div class='toggle-section wall-framing'>
          <header class='toggle-section-header' id='toggle-section-header-wall-framing'>
            Wall Framing
            <label style='display: none;' id='label-status-wall-framing' class='all-items-toggle wall-framing' for='toggle-all-wall-framing'>
            </label>
            <label id='label-toggle-all-wall-framing' class='all-items-toggle wall-framing' for='toggle-all-wall-framing'>
              All Items
              <input type='checkbox' id='toggle-all-wall-framing' name='toggle-all-wall-framing' onclick='toggleAll('wall-framing')'/>
            </label>
            <label id='label-toggle-none-wall-framing' class='hide-section-toggle wall-framing' for='toggle-none-wall-framing'>
              Not required
              <input type='checkbox' id='toggle-none-wall-framing' name='toggle-none-wall-framing' onclick='toggleNone('wall-framing')'/>
            </label>
          </header>
          <main class='toggle-section-questions' id='toggle-section-questions-wall-framing' >
            <label class='wall-framing prenailer-supplied'for='wall-framing-prenailer-supplied'>
              <input class='checkbox' type='checkbox' name='wall-framing-prenailer-supplied'  />
              Supplied by Prenailer - Do not allow
            </label>
            <label class='wall-framing random'for='wall-framing-random'>
              <input class='checkbox' type='checkbox' name='wall-framing-random'  />
              Random
            </label>
            <label class='wall-framing capping'for='wall-framing-capping'>
              <input class='checkbox' type='checkbox' name='wall-framing-capping'  />
              Capping
            </label>
            <label class='wall-framing strapping'for='wall-framing-strapping'>
              <input class='checkbox' type='checkbox' name='wall-framing-strapping'  />
              Strapping</label>
            <label class='wall-framing h-one-two'for='wall-framing-h-one-two'>
              <input class='checkbox' type='checkbox' name='wall-framing-h-one-two'  />
              H1.2
            </label>
            <label class='wall-framing h-three-two'for='wall-framing-h-three-two'>
              <input class='checkbox' type='checkbox' name='wall-framing-h-three-two'  />
              H3.2
            </label>
            <label class='wall-framing h-three-plates'for='wall-framing-h-three-plates'>
              <input class='checkbox' type='checkbox' name='wall-framing-h-three-plates'  />
              H3 Plates</label>
            <label class='wall-framing beams'for='wall-framing-beams'>
              <input class='checkbox' type='checkbox' name='wall-framing-beams'  />
              Beams
            </label>
            <label class='wall-framing posts'for='wall-framing-posts'>
              <input class='checkbox' type='checkbox' name='wall-framing-posts'  />
              Posts
            </label>
            <label class='wall-framing metal'for='wall-framing-metal'>
              <input class='checkbox' type='checkbox' name='wall-framing-metal'  />
              Metal</label>
            <label class='wall-framing timber'for='wall-framing-timber'>
              <input class='checkbox' type='checkbox' name='wall-framing-timber'  />
              Timber
            </label>
          </main>
        </div>      <div class='toggle-section roof-framing'>
          <header class='toggle-section-header' id='toggle-section-header-roof-framing'>
            Roof Framing
            <label style='display: none;' id='label-status-roof-framing' class='all-items-toggle roof-framing' for='toggle-all-roof-framing'>
            </label>
            <label id='label-toggle-all-roof-framing' class='all-items-toggle roof-framing' for='toggle-all-roof-framing'>
              All Items
              <input type='checkbox'  id='toggle-all-roof-framing' name='toggle-all-roof-framing' onclick='toggleAll('roof-framing')'/>
            </label>
            <label id='label-toggle-none-roof-framing' class='hide-section-toggle roof-framing' for='toggle-none-roof-framing'>
              Not required
              <input type='checkbox' id='toggle-none-roof-framing' name='toggle-none-roof-framing' onclick='toggleNone('roof-framing')'/>
            </label>
          </header>
          <main class='toggle-section-questions' id='toggle-section-questions-roof-framing'>
            <label class='roof-framing prenailer-supplied'for='roof-framing-prenailer-supplied'>
              <input class='checkbox' type='checkbox' name='roof-framing-prenailer-supplied'  />
              Supplied by Prenailer - Do not allow
            </label>
            <label class='roof-framing bor-pack'for='roof-framing-bor-pack'>
              <input class='checkbox' type='checkbox' name='roof-framing-bor-pack'  />
              BOR Pack (as Agreed)</label>
            <label class='roof-framing ply-membrane'for='roof-framing-ply-membrane'>
              <input class='checkbox' type='checkbox' name='roof-framing-ply-membrane'  />
              Ply to Membrane Roof</label>
            <label class='roof-framing ply-shingle'for='roof-framing-ply-shingle'>
              <input class='checkbox' type='checkbox' name='roof-framing-ply-shingle'  />
              Ply to Shingle Roof</label>
            <label class='roof-framing purlins-only'for='roof-framing-purlins-only'>
              <input class='checkbox' type='checkbox' name='roof-framing-purlins-only'  />
              Purlins only</label>
          </main>      </div>      <div class='toggle-section exterior-finishing'>
          <header id='toggle-section-header-exterior-finishing' class='toggle-section-header'>
            Exterior Finishings
            <label style='display: none;' id='label-status-exterior-finishing' class='all-items-toggle exterior-finishing' for='toggle-all-exterior-finishing'>
            </label>
            <label id='label-toggle-all-exterior-finishing' class='all-items-toggle exterior-finishing' for='toggle-all-exterior-finishing'>
              All Items
              <input type='checkbox'  id='toggle-all-exterior-finishing' name='toggle-all-exterior-finishing' onclick='toggleAll('exterior-finishing')'/>
            </label>
            <label id='label-toggle-none-exterior-finishing' class='hide-section-toggle exterior-finishing' for='toggle-none-exterior-finishing'>
              Not required
              <input type='checkbox' id='toggle-none-exterior-finishing' name='toggle-none-exterior-finishing' onclick='toggleNone('exterior-finishing')'/>
            </label>
          </header>
          <main class='toggle-section-questions' id='toggle-section-questions-exterior-finishing'>          <label class='exterior-finishing building-wrap'for='exterior-finishing-building-wrap'>
              <input class='checkbox' type='checkbox' name='exterior-finishing-building-wrap'  />
              Building Wrap</label>
            <label class='exterior-finishing timber-fascia'for='exterior-finishing-timber-fascia'>
              <input class='checkbox' type='checkbox' name='exterior-finishing-timber-fascia'  />
              Timber Fascia</label>
            <label class='exterior-finishing rab'for='exterior-finishing-rab'>
              RAB<input class='checkbox' type='checkbox' name='exterior-finishing-rab'  />          </label>
              <label class='exterior-finishing metal-fascia'for='exterior-finishing-metal-fascia'>
              <input class='checkbox' type='checkbox' name='exterior-finishing-metal-fascia'  />
              Metal Fascia by Others</label>
            <label class='exterior-finishing pvc-spouting'for='exterior-finishing-pvc-spouting'>
              <input class='checkbox' type='checkbox' name='exterior-finishing-pvc-spouting'  />
              PVC Spouting</label>
            <label class='exterior-finishing soffit'for='exterior-finishing-soffit'>
              Soffit<input class='checkbox' type='checkbox' name='exterior-finishing-soffit'  />          </label>
              <label class='exterior-finishing eaves-mould'for='exterior-finishing-eaves-mould'>
              <input class='checkbox' type='checkbox' name='exterior-finishing-eaves-mould'  />
              Eaves Mould
            </label>
          </main>
        </div>
        <div class='toggle-section cladding'>
          <header id='toggle-section-header-cladding' class='toggle-section-header'>
            Cladding
            <label style='display: none;' id='label-status-cladding' class='all-items-toggle cladding' for='toggle-all-cladding'>
            </label>
            <label id='label-toggle-all-cladding' class='all-items-toggle cladding' for='toggle-all-cladding'>
              All Items<input type='checkbox'  id='toggle-all-cladding' name='toggle-all-cladding' onclick='toggleAll('cladding')'/>
            </label>
            <label id='label-toggle-none-cladding' class='hide-section-toggle cladding' for='toggle-none-cladding'>
              Not required<input type='checkbox' id='toggle-none-cladding' name='toggle-none-cladding' onclick='toggleNone('cladding')'/>
            </label>
          </header>
          <main class='toggle-section-questions' id='toggle-section-questions-cladding'>
            <label class='cladding brick'for='cladding-brick'>
              <input class='checkbox' type='checkbox' name='cladding-brick-check'  />
              Brick<input class='number-input' type='number' name='cladding-brick-number'  />  Quantity per M²</label>
            <label class='cladding sheet'for='cladding-sheet'>
              <input class='checkbox' type='checkbox' name='cladding-sheet-check'  />
              Sheet<input class='single-input' type='text' name='cladding-sheet-text'  /></label>
            <label class='cladding w-board'for='cladding-w-board'>
              <input class='checkbox' type='checkbox' name='cladding-w-board-check'  />
              W/Board<input class='single-input' type='text' name='cladding-w-board'  /></label>
            <label class='cladding stone-cladding-substrate'for='cladding-stone-cladding-substrate'>
              <input class='checkbox' type='checkbox' name='cladding-stone-cladding-substrate'  />
              Stone Cladding Substrate
            </label>
          </main>
        </div>      <div class='toggle-section insulation'>
          <header id='toggle-section-header-insulation' class='toggle-section-header'>
            Insulation
            <label style='display: none;' id='label-status-insulation' class='all-items-toggle insulation' for='toggle-all-insulation'>
            </label>
            <label id='label-toggle-all-insulation' class='all-items-toggle insulation' for='toggle-all-insulation'>
              All Items
              <input type='checkbox'  id='toggle-all-insulation' name='toggle-all-insulation' onclick='toggleAll('insulation')'/>
            </label>
            <label id='label-toggle-none-insulation' class='hide-section-toggle insulation' for='toggle-none-insulation'>
              Not required
              <input type='checkbox' id='toggle-none-insulation' name='toggle-none-insulation' onclick='toggleNone('insulation')'/>
            </label>
          </header>
          <main class='toggle-section-questions' id='toggle-section-questions-insulation'>          <label class='insulation sub-floor'for='insulation-sub-floor'>
              <input class='check' type='checkbox' name='insulation-sub-floor-check'  />
              Sub Floor<input class='single-input' type='text' name='insulation-sub-floor-text'  /></label>
            <label class='insulation mid-floor'for='insulation-mid-floor'>
              <input class='check' type='checkbox' name='insulation-mid-floor-check'  />
              Mid Floor<input class='single-input' type='text' name='insulation-mid-floor-text'  /></label>
            <label class='insulation walls'for='insulation-walls'>
              <input class='check' type='checkbox' name='insulation-walls-check'  />
              Walls<input class='single-input' type='text' name='insulation-walls-text'  /></label>
            <label class='insulation ceiling'for='insulation-ceiling'>
              <input class='check' type='checkbox' name='insulation-ceiling-check'  />
              Ceiling<input class='single-input' type='text' name='insulation-ceiling-text'  /></label>
            <label class='insulation accoustic'for='insulation-accoustic'>
              <input class='check' type='checkbox' name='insulation-accoustic-check'  />
              Accoustic<input class='single-input' type='text' name='insulation-accoustic-text'  /></label>
            <label class='insulation garage-walls-ceiling'for='insulation-garage-walls-ceiling'>
              <input class='checkbox' type='checkbox' name='insulation-garage-walls-ceiling'  />
              Garage walls/Ceiling (included)</label>
            <label class='insulation installation'for='insulation-installation'>
              <input class='checkbox' type='checkbox' name='insulation-installation'  />
              Installation</label>
          </main>
        </div>
        <div class='toggle-section interior-linings'>
          <header id='toggle-section-header-interior-linings' class='toggle-section-header'>
            Interior Linings
            <label style='display: none;' id='label-status-interior-linings' class='all-items-toggle interior-linings' for='toggle-all-interior-linings'>
            </label>
            <label id='label-toggle-all-interior-linings' name='toggle-all-interior-linings' class='all-items-toggle interior-linings' for='toggle-all-interior-linings'>
              All Items
              <input type='checkbox'  id='toggle-all-interior-linings' onclick='toggleAll('interior-linings')'/>
            </label>
            <label id='label-toggle-none-interior-linings' name='toggle-none-interior-linings' class='hide-section-toggle interior-linings' for='toggle-none-interior-linings'>
              Not required
              <input type='checkbox' id='toggle-none-interior-linings' onclick='toggleNone('interior-linings')'/>
            </label>
          </header>
          <main class='toggle-section-questions' id='toggle-section-questions-interior-linings'>          <label class='interior-linings wall'for='interior-linings-wall'>
              <input class='checkbox' type='checkbox' name='interior-linings-wall'  />
              Wall</label>
            <label class='interior-linings wet-wall'for='interior-linings-wet-wall'>
              <input class='checkbox' type='checkbox' name='interior-linings-wet-wall'  />
              Wet Wall</label>
            <label class='interior-linings bathroom'for='interior-linings-bathroom'>
              <input class='checkbox' type='checkbox' name='interior-linings-bathroom'  />
              Bathroom</label>
            <label class='interior-linings wc'for='interior-linings-wc'>
              <input class='checkbox' type='checkbox' name='interior-linings-wc'  />
              WC</label>
            <label class='interior-linings ceiling'for='interior-linings-ceiling'>
              <input class='checkbox' type='checkbox' name='interior-linings-ceiling'  />
              Ceiling</label>
            <label class='interior-linings wet-ceiling'for='interior-linings-wet-ceiling'>
              <input class='checkbox' type='checkbox' name='interior-linings-wet-ceiling'  />
              Wet Ceiling</label>
            <label class='interior-linings ensuite'for='interior-linings-ensuite'>
              <input class='checkbox' type='checkbox' name='interior-linings-ensuite'  />
              Ensuite</label>
            <label class='interior-linings laundry'for='interior-linings-laundry'>
              <input class='checkbox' type='checkbox' name='interior-linings-laundry'  />
              Laundry</label>
            <label class='interior-linings other'for='interior-linings-other'>
              <input class='checkbox' type='checkbox' name='interior-linings-other'  />
              Other
            </label>
          </main>
        </div>
        <div class='toggle-section interior-doors'>
          <header id='toggle-section-header-interior-doors' class='toggle-section-header'>
            Interior Doors
            <label style='display: none;'  id='label-status-interior-doors' class='all-items-toggle interior-doors' for='toggle-all-interior-doors'>
            </label>
            <label  id='label-toggle-all-interior-doors' class='all-items-toggle interior-doors' for='toggle-all-interior-doors'>
              All Items
              <input type='checkbox'  id='toggle-all-interior-doors' name='toggle-all-interior-doors' onclick='toggleAll('interior-doors')'/>
            </label>
            <label  id='label-toggle-none-interior-doors' class='hide-section-toggle interior-doors' for='toggle-none-interior-doors'>
              Not required
              <input type='checkbox' id='toggle-none-interior-doors' name='toggle-none-interior-doors' onclick='toggleNone('interior-doors')'/>
            </label>
          </header>
          <main class='toggle-section-questions' id='toggle-section-questions-interior-doors'>          <label class='interior-doors door-type'for='interior-doors-door-type'>
              <input class='checkbox' type='checkbox' name='interior-doors-door-type'  />
              MDF HC PQ FJ FLAT JAMB</label>
            <label class='interior-doors door-hardware'for='interior-doors-door-hardware'>
              <input class='checkbox' type='checkbox' name='interior-doors-door-hardware'  />
              Door Hardware
            </label>
          </main>
        </div>      <div class='toggle-section interior-finishings'>
          <header id='toggle-section-header-interior-finishings' class='toggle-section-header'>
            Interior Finishings
          <label style='display: none;'id='label-status-interior-finishings' class='all-items-toggle interior-finishings' for='toggle-all-interior-finishings'>
            </label>
            <label  id='label-toggle-all-interior-finishings' name='toggle-all-interior-finishings' class='all-items-toggle interior-finishings' for='toggle-all-interior-finishings'>
              All Items
              <input type='checkbox'  id='toggle-all-interior-finishings' onclick='toggleAll('interior-finishings')'/>
            </label>
            <label  id='label-toggle-none-interior-finishings' name='toggle-none-interior-finishings' class='hide-section-toggle interior-finishings' for='toggle-none-interior-finishings'>
              Not required
              <input type='checkbox' id='toggle-none-interior-finishings' onclick='toggleNone('interior-finishings')'/>
            </label>
          </header>
          <main class='toggle-section-questions' id='toggle-section-questions-interior-finishings'>
          <label class='interior-finishings mdf'for='interior-finishings-mdf'>
              MDF
              <input class='checkbox' type='checkbox' name='interior-finishings-mdf'  />
            </label>
            <label class='interior-finishings f-j'for='interior-finishings-f-j'>
              F/J
              <input class='checkbox' type='checkbox' name='interior-finishings-f-j'  />
            </label>
            <label class='interior-finishings clears'for='interior-finishings-clears'>
              Clears
              <input class='checkbox' type='checkbox' name='interior-finishings-clears'  />
            </label>
            <label class='interior-finishings timber-cornice'for='interior-finishings-timber-cornice'>
              Timber Cornice
              <input class='checkbox' type='checkbox' name='interior-finishings-timber-cornice'  />
            </label>
            <label class='interior-finishings gib-cove'for='interior-finishings-gib-cove'>
              Gib Cove
              <input class='checkbox' type='checkbox' name='interior-finishings-gib-cove'  />
            </label>
            <label class='interior-finishings skirting'for='interior-finishings-skirting'>
              Skirting
              <input class='checkbox' type='checkbox' name='interior-finishings-skirting'  />
            </label>
            <label class='interior-finishings architrave'for='interior-finishings-architrave'>
              Architrave
              <input class='checkbox' type='checkbox' name='interior-finishings-architrave'  />
            </label>
            <label class='interior-finishings wet-areas'for='interior-finishings-wet-areas'>
              Wet Areas
              <input class='checkbox' type='checkbox' name='interior-finishings-wet-areas'  />
            </label>
            <label class='interior-finishings shelving'for='interior-finishings-shelving'>
              Shelving
              <input class='checkbox' type='checkbox' name='interior-finishings-shelving'  />
            </label>
          </main>      </div>      <div class='toggle-section landscaping'>
          <header id='toggle-section-header-landscaping' class='toggle-section-header'>
            Landscaping
            <label style='display: none;' id='label-status-landscaping' class='all-items-toggle landscaping' for='toggle-all-landscaping'>
            </label>
            <label id='label-toggle-all-landscaping' class='all-items-toggle landscaping' for='toggle-all-landscaping'>
              All Items
              <input type='checkbox'  id='toggle-all-landscaping' name='toggle-all-landscaping' onclick='toggleAll('landscaping')'/>
            </label>
            <label id='label-toggle-none-landscaping' class='hide-section-toggle landscaping' for='toggle-none-landscaping'>
              Not required
              <input type='checkbox' id='toggle-none-landscaping' name='toggle-none-landscaping' onclick='toggleNone('landscaping')'/>
            </label>
          </header>
          <main class='toggle-section-questions' id='toggle-section-questions-landscaping'>
            <label class='landscaping concrete-patios'for='landscaping-concrete-patios'>
              <input class='checkbox' type='checkbox' name='landscaping-concrete-patios'  />
              Concrete Patios
            </label>
            <label class='landscaping ply-deck'for='landscaping-ply-deck'>
              <input class='checkbox' type='checkbox' name='landscaping-ply-deck-check'  />
              Ply Deck
              <input class='single-input' type='text' name='landscaping-ply-deck-text'  />
            </label>
            <label class='landscaping decking'for='landscaping-decking'>
              <input class='checkbox' type='checkbox' name='landscaping-decking'  />
              Decking
            </label>
            <label class='landscaping car-port'for='landscaping-car-port'>
              <input class='checkbox' type='checkbox' name='landscaping-car-port'  />
              Carport
            </label>
            <label class='landscaping pergola'for='landscaping-pergola'>
              <input class='checkbox' type='checkbox' name='landscaping-pergola'  />
              Pergola
            </label>
            <label class='landscaping timber-retaining-wall'for='landscaping-timber-retaining-wall'>
              <input class='checkbox' type='checkbox' name='landscaping-timber-retaining-wall'  />
              Timber Retaining Wall
            </label>
          </main>
        </div>
      </div>  </div>
    <div id='Dayles-prenail-questions' class=' style='display:none'>
      <header>
        <h1>
          Dayle Prenail questions
        </h1>
        Dayle email test: <input type='email' name='dayle-test-email'/>
      </header>
      <label>
        Prenail Frames      <input class='single-input' type='text' name='daylesPrenailFrames'  />
      </label>
      <label>
        Bottom Plates
        <input class='single-input' type='text' name='daylesBottomPlates'  />
      </label>    <label>
        Trusses / Balance of Roof / Cut Roof      <input class='single-input' type='text' name='daylesTrusses'  />
      </label>    <label>
        Chimney framing
        <input class='single-input' type='checkbox' name='daylesChimneyFraming'  />
      </label>
      <label>
        LVL Beams
        <input class='single-input' type='checkbox' name='daylesLVLBeams'  />
      </label>
      <label>
        Glulam Beams      <input class='single-input' type='checkbox' name='daylesChimneyFraming'  />
      </label>
      <label>
        Porch Posts      <input class='single-input' type='checkbox' name='daylesChimneyFraming'  />
      </label>
      <label>
        Verandah Posts      <input class='single-input' type='checkbox' name='daylesChimneyFraming'  />
      </label>
      <label>
        Enclosed balustrades interior      <input class='single-input' type='checkbox' name='daylesChimneyFraming'  />
      </label>
      <label>
        Enclosed balustrades exterior
        <input class='single-input' type='checkbox' name='daylesChimneyFraming'  />
      </label>
    </div>
  </form>
