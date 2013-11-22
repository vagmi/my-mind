MM.Keyboard = function(app) {
	this._app = app;
	window.addEventListener("keydown", this);
	window.addEventListener("keypress", this);
}

MM.Keyboard.prototype.handleEvent = function(e) {
	if (e.type == "keydown") {
		this._handleKeyDown(e);
	} else if (e.type == "keypress") {
		this._handleKeyPress(e);
	}
}

MM.Keyboard.prototype._handleKeyDown = function(e) {
	switch (e.keyCode) {
		case 32:
			var selected = this._app.getSelection().getItems();
			if (selected.length != 1) { return; }
			var text = prompt();
			var action = new MM.Action.SetText(selected[0], text);
			this._app.action(action);
		break;

		case 13:
		break;
	}
}

MM.Keyboard.prototype._handleKeyPress = function(e) {
	switch (String.fromCharCode(e.charCode)) {
		case "z":
			if (e.ctrlKey) { this._app.undo(); }
		break;

		case "y":
			if (e.ctrlKey) { this._app.redo(); }
		break;
	}
}
