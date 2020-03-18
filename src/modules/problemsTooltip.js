const wrapper = document.querySelector('.problems .wrapper_small');

const tooltipOver = (tooltip) => {
  const clientTopBegin = 0;
  
  if (tooltip.getBoundingClientRect().y < clientTopBegin) {
    const problemsItem = tooltip.closest('.problems-item');

    tooltip.classList.add('tooltip_reverse');
    problemsItem.classList.add('problems-item_cover');
  }
};

const tooltipOut = (tooltip) => {
  const problemsItem = tooltip.closest('.problems-item');
  
  tooltip.classList.remove('tooltip_reverse');
  problemsItem.classList.remove('problems-item_cover');
};

const tooltipHandler = (event) => {
  const target = event.target;
  
  if (!target.matches('.problems-item__icon-inner-text')) return;
  
  const tooltip = target.previousElementSibling.previousElementSibling;

  if (event.type === 'mouseout') {
    tooltipOut(tooltip);
  } else {
    tooltipOver(tooltip);
  }
};

const problemsTooltip = () => {
  wrapper.addEventListener('mouseover', tooltipHandler);
  wrapper.addEventListener('mouseout', tooltipHandler);
};

export default problemsTooltip;