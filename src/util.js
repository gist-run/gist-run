export function deparam(query) {
  let match,
      plus = /\+/g,
      search = /([^&=]+)=?([^&]*)/g,
      decode = s => decodeURIComponent(s.replace(plus, ' ')),
      params = {};
  while (match = search.exec(query)) {
    params[decode(match[1])] = decode(match[2]);
  }
  return params;
}

export function param(obj) {
  let parts = [];
  for (var name in obj) {
    if (obj.hasOwnProperty(name)) {
      parts.push(`${encodeURIComponent(name)}=${encodeURIComponent(obj[name])}`);
    }
  }
  return parts.join('&');
}

const contentTypeMap = {
  css: 'text/css',
  js: 'application/javascript',
  json: 'application/json',
  html: 'text/html'
};

export function getContentType(name) {
  let parts = name.split('.');
  let extension;
  if (parts.length === 1 || (extension = parts[parts.length - 1]) === '') {
    return 'text/plain';
  }
  return contentTypeMap[extension] || 'text/plain';
}
