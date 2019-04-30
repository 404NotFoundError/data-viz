
var flashMessage = {

    state: {},

    init: function init () {
        this.bindState();
        this.bindEvents();
    },

    bindState: function bindState() {
        this.state.flashMessages = document.querySelectorAll('#flash-message');
    },

    bindEvents: function bindEvents() {
        
    },

    deleteMessage: function deleteMessage() {
        this.state.flashMessages.forEach(element => element.style.display = "none" );
    }

}

module.exports = flashMessage;