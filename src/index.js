'use strict';

import phones from './modules/phones';
import sideMenu from './modules/menu';
import inputMasks from './modules/inputMasks';
import initForms from './modules/forms';
import tooltips from './modules/tooltips';
import formulaSlider from './modules/formulaSlider';
import carousel from './modules/carousel';
import modalHandler from './modules/modalHandler';
import consultation from './modules/modals/consultation';
import privacy from './modules/modals/privacy';
import types from './modules/modals/types';
import thanks from './modules/modals/thanks';
import transparency from './modules/modals/transparency';

phones();
modalHandler();
sideMenu();
types();
inputMasks();
privacy();
thanks();
initForms();
tooltips();
formulaSlider();
carousel();
consultation();
transparency();