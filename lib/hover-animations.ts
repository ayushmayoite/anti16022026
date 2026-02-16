export function applyImageHover(element: HTMLElement, scale: number = 1.05) {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }
  element.style.transform = `scale(${scale})`;
}

export function resetImageHover(element: HTMLElement) {
  element.style.transform = 'scale(1)';
}