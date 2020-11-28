import React, { PropsWithChildren, Provider } from 'react';
import { ProviderContext, SnackbarProvider, useSnackbar } from 'notistack';

export const toasterContainer: { container: ProviderContext | null } = {
  container: null
};

const Inner = () => {
  toasterContainer.container = useSnackbar();
  return null;
};

export const ToasterContainer = (props: PropsWithChildren<any>) => {
  const { children } = props;

  return (
    <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} maxSnack={3}>
      <Inner />
      {children}
    </SnackbarProvider>
  );
};
export default ToasterContainer;
