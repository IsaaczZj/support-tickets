export function parseRoutePath(path) {
  const routeParameteraRegex = /:([a-zA-Z]+)/g;
  const params = path.replaceAll(routeParameteraRegex, "(?<$1>[a-z0-9-_]+)");

  const pathRegex = new RegExp(`^${params}((?<query>\\?(.*))?$)`)
  return pathRegex
}
