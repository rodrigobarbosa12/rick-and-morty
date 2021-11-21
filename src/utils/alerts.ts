/* eslint-disable import/prefer-default-export */
import SweetAlerts, { SweetAlertResult } from 'sweetalert2';
import get from 'lodash/get';

const swal = SweetAlerts.mixin({
  confirmButtonColor: '#af5bf1',
  cancelButtonText: 'Cancelar',
  reverseButtons: true,
  heightAuto: false,
});

const error = swal.mixin({
  icon: 'error',
  toast: true,
  timer: 5000,
  showConfirmButton: false,
  position: 'top-end',
});

export const errorCatch = error.mixin({
  position: 'bottom',
  timer: 10000,
});

export const showErrorCatch = (
  err: unknown,
): Promise<SweetAlertResult> => errorCatch
  .fire(get(err, 'response.data.message', 'Algo deu errado, tente mais tarde'));
