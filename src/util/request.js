function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
  
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  
  /**
   * Requests a URL, returning a promise.
   *
   * @param  {string} url       The URL we want to request
   * @param  {object} [options] The options we want to pass to "fetch"
   * @return {object}           An object containing either "data" or "err"
   */
  export default async function request(url, options) { // async 函数就是 Generator 函数的语法糖，async 函数就是将 Generator 函数的星号（*）替换成 async，将 yield 替换成 await
    const response = await fetch(url, options);
    checkStatus(response);
    return await response.json();
  }