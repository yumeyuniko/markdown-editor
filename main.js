var simplemde = new SimpleMDE({
  element: document.getElementById('editor'),
  spellChecker: false,
  showIcons: ['code', 'table'],
});

//HTMLプレビューする関数
function drawPreview() {
  const html = SimpleMDE.prototype.markdown(simplemde.value());
  document.getElementById('preview').innerHTML = html;
}

document.addEventListener('input', () => {
  drawPreview();
  console.log(simplemde.value());
});
