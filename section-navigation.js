(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;

  // 메뉴 줄바꿈과 브라우저 확대에 따른 실제 헤더 높이를 반영합니다.
  const updateHeaderOffset = () => {
    document.documentElement.style.setProperty(
      '--header-offset', `${header.getBoundingClientRect().height}px`
    );
  };

  updateHeaderOffset();
  new ResizeObserver(updateHeaderOffset).observe(header);

  // 직접 해시 진입·새로고침 시에도 초기 레이아웃이 확정된 위치로 맞춥니다.
  window.addEventListener('load', () => {
    updateHeaderOffset();
    const target = document.getElementById(location.hash.slice(1));
    if (target?.matches('main > section')) {
      target.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  }, { once: true });
})();
