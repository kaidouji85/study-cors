window.addEventListener('load', () => {
  main();
});

/**
 * エントリポイント
 *
 * @return {Promise<void>}
 */
async function main() {
  try {
    const innerJSON = await fetchInnerJSON();
    const innerJsonOutput = document.querySelector('#inner-json');
    if (innerJsonOutput) {
      innerJsonOutput.textContent = JSON.stringify(innerJSON);
    }

    const outerJSON = await fetchOuterJSON();
    const outerJsonOutput = document.querySelector('#outer-json');
    if (outerJsonOutput) {
      outerJsonOutput.textContent = JSON.stringify(outerJSON);
    }
  } catch(e) {
    throw e;
  }
}

/**
 * 自身のサイトからJSONを取得する
 *
 * @return {Promise<Object>} 取得したJSON
 */
async function fetchInnerJSON() {
  try {
    const resp = await fetch('/inner.json');
    const json = await resp.json();
    return json;
  } catch(e) {
    throw e;
  }
}

/**
 * 外部サイトからJSONを取得する
 *
 * @return {Promise<Object>} 取得したJSON
 */
async function fetchOuterJSON() {
  try {
    const resp = await fetch('http://localhost:3001/outer.json', {
      mode: 'cors'
    });
    const json = await resp.json();
    return json;
  } catch(e) {
    throw e;
  }
}
