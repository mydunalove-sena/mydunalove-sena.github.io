(() => {
  const header = document.querySelector('.site-header');
  const panels = [...document.querySelectorAll('main > [data-page]')];
  if (!header || !panels.length) return;
  const menu = [...header.querySelectorAll('nav a')];
  const updateHeaderOffset = () => {
    document.documentElement.style.setProperty(
      '--header-offset', `${header.getBoundingClientRect().height}px`
    );
  };

  const resolve = hash => {
    let id;
    try { id = decodeURIComponent(hash.slice(1)); } catch { id = ''; }
    const target = document.getElementById(id);
    const page = target?.closest('main > [data-page]')?.dataset.page || 'about';
    return { target, page };
  };
  const display = (hash, fromMenu = false) => {
    const { target, page } = resolve(hash);
    document.body.dataset.currentPage = page;
    panels.forEach(panel => { panel.hidden = panel.dataset.page !== page; });
    menu.forEach(link => {
      if (resolve(link.hash).page === page) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    if (fromMenu) {
      const heading = panels.find(panel => !panel.hidden)?.querySelector('h1,h2,h3');
      if (heading) {
        heading.setAttribute('tabindex', '-1');
        heading.focus({ preventScroll: true });
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (target) {
      target.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  };

  document.body.classList.add('section-pages');
  updateHeaderOffset();
  new ResizeObserver(updateHeaderOffset).observe(header);
  display(location.hash);

  // Keep normal anchor URLs, direct links and browser history usable.
  header.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (location.hash !== link.hash) history.pushState(null, '', link.hash);
    display(link.hash, true);
  });
  window.addEventListener('hashchange', () => display(location.hash));
  window.addEventListener('load', () => {
    updateHeaderOffset();
    display(location.hash);
  }, { once: true });
})();
