window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const elem = document.querySelector(selector)
    if (elem) elem.innerText = text
  }

  for (const dependancy of ['chrome', 'node', 'electron']) {
    replaceText(`#${dependancy}-version`, process.versions[dependancy])
  }
})