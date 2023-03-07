type HookType = Window | null | void;

function useRedirect(isTargetBlank: boolean, link: string): HookType {
  if (isTargetBlank) return window.open(link);

  return location.replace(link);
}

export default useRedirect;
