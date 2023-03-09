type HookReturnType = Window | null | void;

function useRedirect(isTargetBlank: boolean, link: string): HookReturnType {
  if (isTargetBlank) return window.open(link);

  return location.replace(link);
}

export default useRedirect;
