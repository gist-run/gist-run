const contentTypeMap: { [extension: string]: string } = {
  css: 'text/css',
  csv: 'text/csv',
  js: 'application/javascript',
  json: 'application/json',
  htm: 'text/html',
  html: 'text/html',
  svg: 'image/svg+xml',
  xml: 'application/xml'
};

function getExtension(name: string) {
  const parts = name.split('.');
  if (parts.length === 1) {
    return '';
  }
  return parts[parts.length - 1];
}

export function getContentType(name: string) {
  const extension = getExtension(name);
  if (extension === '') {
    return 'text/plain';
  }
  return contentTypeMap[extension] || 'text/plain';
}
