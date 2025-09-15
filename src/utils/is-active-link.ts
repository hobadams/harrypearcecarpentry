export default function isActiveLink(currentPath: string, link: { href: string, exactMatch: boolean }): boolean {
    let isActive = false;
    let pathName = currentPath;

    if (typeof window !== "undefined") {
      pathName = window.location.pathname;
    }

    if (link.exactMatch) {
      isActive = pathName === link.href;
    } else {
      isActive = pathName.includes(link.href);
    }

    return isActive;
}