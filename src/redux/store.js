const TEXT_CHANGED = 'TEXT-CHANGED';

let store = {
  _state: {
    profilePage: {
      textarea: ""
    }
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  updateTextbox(text) {
    this._state.profilePage.textarea = text;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === TEXT_CHANGED) { 
      this.updateTextbox(action.value);
    }
  }
};

export const textChangedActionCreator = (text) => ({
  type: "TEXT-CHANGED",
   value: text
});

export default store;
window.store = store;
