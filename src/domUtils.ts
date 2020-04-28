import FirebaseService from './FirebaseService';

export const setEventStorageLink = (): void => {
  const firebaseService = new FirebaseService();
  document.querySelectorAll('[data-storage]').forEach(el => {
    el.addEventListener('click', async e => {
      if (!(e.target instanceof HTMLAnchorElement)) {
        return;
      }
      if (e.target.getAttribute('data-storage-resolved') !== null) {
        return;
      }
      e.preventDefault();

      let url;
      const storagePath = e.target.getAttribute('data-storage');
      if (storagePath === null) {
        url = '/404';
      } else {
        url = await firebaseService.getStorageDownloadUrl(storagePath);
        url = url === null ? '/404' : url;
        e.target.setAttribute('data-storage-resolved', '');
        e.target.setAttribute('href', url);
        e.target.click();
      }
    });
  });
};
