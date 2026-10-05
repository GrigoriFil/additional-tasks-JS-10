const refs = {
  toggleCheckbox: document.querySelector('.js-toggle-checkbox'),
};

const setPageColorTheme = () => {
  const colorThemeFromLS = localStorage.getItem('page-color-theme');

  // console.log(colorThemeFromLS);

  // console.log(colorThemeFromLS);
  if (colorThemeFromLS === 'dark') {
    document.body.dataset.colorScheme = 'dark';

    refs.toggleCheckbox.checked = true;
  } else {
    document.body.dataset.colorScheme = 'light';

    refs.toggleCheckbox.checked = false;
  }
};

setPageColorTheme();

const onToggleCheckboxChange = event => {
  // console.dir(refs.toggleCheckbox)
  // console.log(event.target);

  const isToggleThemeActive = event.target.checked;

  if (isToggleThemeActive) {
    document.body.dataset.colorScheme = 'dark';
    localStorage.setItem('page-color-theme', 'dark');
  } else {
    document.body.dataset.colorScheme = 'light';
    localStorage.setItem('page-color-theme', 'light');
  }
};

refs.toggleCheckbox.addEventListener('change', onToggleCheckboxChange);
