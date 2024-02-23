// import { atom } from 'nanostores';
// export const oDNumbers = atom([]);

import {  persistentAtom } from '@nanostores/persistent'

export const oDNumbers =  persistentAtom('oficios',[],{
  encode: JSON.stringify,
  decode: JSON.parse
})

export function addODNumbers(selecteds) {
  oDNumbers.set(selecteds);
}