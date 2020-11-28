import { VariantType } from 'notistack';
import { toasterContainer } from './ToasterContainer';

const addToast = (message: string, variant: VariantType) => {
  if (!toasterContainer.container) {
    console.warn('toaster cannot be used without container');
    return;
  }
  toasterContainer.container.enqueueSnackbar(message, { variant });
};

export const toaster = {
  showSuccess: (message?: string) => {
    addToast(message || 'Success', 'success');
  },
  showInfo: (message?: string) => {
    addToast(message || 'Info', 'info');
  },
  showError: (message?: string) => {
    addToast(message || 'Error occurred', 'error');
  }
};

export default toaster;
