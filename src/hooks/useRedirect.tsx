function useRedirect(isTargetBlank: boolean, link: string): void {
  if (isTargetBlank) window.open(link);

  return location.replace(link);
}

export default useRedirect;
