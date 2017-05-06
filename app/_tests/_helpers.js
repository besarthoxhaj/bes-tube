export const btns = {
  openModal: (doc) => {
    return doc.querySelector(`[data-home-click="openModal"]`);
  },
  openAlert: (doc) => {
    return doc.querySelector(`[data-modal-click="openAlert"]`);
  },
  closeAlert: (doc) => {
    return doc.querySelector(`[data-alert-click="closeAlert"]`);
  },
  goToCounter: (doc) => {
    return doc.querySelector(`[data-home-click="goToCounter"]`);
  },
  insertSearch: (win,doc,txt) => {
    const input = document.querySelector(`[data-search-input="changeText"]`);
    input.value = txt;
    const inputEvt = new window.Event('input', { bubbles: true });
    input.dispatchEvent(inputEvt);
  },
  enterSearch: (win,doc) => {
    const input = document.querySelector(`[data-search-input="changeText"]`);
    const event = new win.KeyboardEvent('keydown',{keyCode:13,key:'Enter',bubbles:true});
    input.dispatchEvent(event);
  },
  downloadMessi: (doc) => {
    return doc.querySelector(`[data-video-click="_g-dyXWUov8"]`);
  },
};
