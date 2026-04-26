import { toast } from 'react-toastify';

export function showError(v, opts) {
  const msg = v?.message || v;
  if (v instanceof Error) console.error(v);
  return toast.error(msg, opts);
}

export function showInfo(v, opts) {
  const msg = v?.message || v;
  return toast.info(msg, opts);
}

export function showSuccess(v, opts) {
  const msg = v?.message || v;
  return toast.success(msg, opts);
}

export function showWarn(v, opts) {
  const msg = v?.message || v;
  return toast.warn(msg, opts);
}
