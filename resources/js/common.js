/**
 * ページ遷移時に警告を表示する
 */
const beforeUnloadEvent = function () {
  const handler = function (e) {
    e.returnValue = '';
    return null;
  }
  window.addEventListener('beforeunload', handler, false);
  document.querySelectorAll('a,[type="submit"]').forEach(function (el) {
    el.addEventListener('click', function () {
      window.removeEventListener('beforeunload', handler, false);
    });
  })
}
