document.querySelectorAll('input[type=file]').forEach((v) => {
  v.addEventListener('change', () => {
    if (v.files.length === 0) {
      v.nextElementSibling.innerHTML = 'ファイルを選択してください';
    } else {
      v.nextElementSibling.innerHTML = v.files[0].name;
    }
  });
});
