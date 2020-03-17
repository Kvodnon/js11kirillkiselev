'use strict';

import phones from './modules/phones';
import sideMenu from './modules/menu';
import inputMasks from './modules/inputMasks';
import initForms from './modules/forms';
import tooltips from './modules/tooltips';
import formulaSlider from './modules/formulaSlider';
import modalHandler from './modules/modalHandler';
import consultation from './modules/modals/consultation';
import privacy from './modules/modals/privacy';
import types from './modules/modals/types';
import thanks from './modules/modals/thanks';
import transparency from './modules/modals/transparency';
import reviews from './modules/sliders/reviews';
import partners from './modules/sliders/partners';
import scheme from './modules/sliders/scheme';
import FAQAccordion from './modules/accordion';
import prices from './modules/prices';
import portfolio from './modules/portfolio';
import design from './modules/design';

phones();
modalHandler();
sideMenu();
inputMasks();
privacy();
thanks();
initForms();
tooltips();
formulaSlider();
reviews();
partners();
types();
consultation();
transparency();
scheme();
FAQAccordion();
prices();
portfolio();
design();