export const convertFromByteArrayToSrring = (item: ArrayBuffer) => {
  return 'data:image/jpeg;base64,' + btoa(new Uint8Array(item).reduce((data, byte) => data + String.fromCharCode(byte), ''));
}