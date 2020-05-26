import FirebaseService from './FirebaseService';

export const setEventStorageLink = (): void => {
  const firebaseService = new FirebaseService();
  const prefix = '/**storage**/';
  document.querySelectorAll(`a[href^="${prefix}"]`).forEach(el => {
    el.addEventListener('click', async e => {
      if (!(e.target instanceof HTMLAnchorElement)) {
        return;
      }
      if (e.target.getAttribute('data-storage-resolved') !== null) {
        return;
      }
      e.preventDefault();

      let url;
      const storagePath = e.target.getAttribute('href')?.split(prefix)[1];
      if (storagePath === undefined) {
        url = '/404';
      } else {
        url = await firebaseService.getStorageDownloadUrl(storagePath);
        url = url === null ? '/404' : url;
        e.target.setAttribute('data-storage-resolved', '');
        e.target.setAttribute('href', url);
        e.target.setAttribute('target', '_blank');
        e.target.click();
      }
    });
  });
};

export const addTableResponsive = (): void => {
  document.querySelectorAll('.main-content table').forEach(el => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('table-responsive');

    el.classList.add('table', 'table-bordered');
    el.querySelector('thead')?.classList.add('alert-secondary');

    el.parentNode?.replaceChild(wrapper, el);
    wrapper.appendChild(el);
  });
};
