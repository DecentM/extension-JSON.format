(() => {
  const isJSONType = document.contentType === 'application/json'
  let isValidJSON = null
  let content = null

  if (isJSONType) {
    try {
      content = JSON.parse(document.documentElement.innerText)
      isValidJSON = true
    } catch (error) {
      isValidJSON = false
    }
  }
  
  if (isValidJSON) {
    const formatted = JSON.stringify(content, null, 4)
    
    if (formatted !== document.documentElement.innerText) {
      document.documentElement.innerHTML = `<pre>${formatted}</pre>`
      console.log(
        '%c JSON formatted %c https://github.com/DecentM/extension-JSON.format',
        [
          'color: white;',
          'padding: 5px;',
          'padding-left: 7px;',
          'padding-right: 7px;',
          'background: linear-gradient(130deg, #000FE5, #005FFF);',
          'border-radius: 3px;',
          'margin-right: 16px;',
        ].join(''),
        [
          'margin-bottom: 16px;',
          'margin-top: 16px;',
        ].join('')
      )
    }
  }
})()
