export const THEME_LABELS = {
  auto: 'Auto',
  light: 'Light',
  dark: 'Dark',
};

export const THEME_ORDER = ['auto', 'light', 'dark'];

export function getEffectiveTheme() {
  return document.documentElement.getAttribute('data-theme') || 'auto';
}

export function setTheme(theme) {
  if (theme === 'auto') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem('theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}

export function cycleTheme() {
  const current = getEffectiveTheme();
  const next = THEME_ORDER[(THEME_ORDER.indexOf(current) + 1) % THEME_ORDER.length];
  setTheme(next);
  return next;
}

export function updateToggleLabel(toggle, theme) {
  if (!toggle) return;
  toggle.textContent = THEME_LABELS[theme] || THEME_LABELS.auto;
}

export function setupThemeToggle(toggle) {
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const next = cycleTheme();
    updateToggleLabel(toggle, next);
  });

  updateToggleLabel(toggle, getEffectiveTheme());
}
