// Method that handles selecting the rows
// if the row is already selected, unselects it
export function selectRow(selectedRow, id) {
    if (selectedRow === id) {
        return null;
    }
    else {
        return id;
    }
}

// Method to open the decks if selected
export function openDeck() {
    // If null, don't do anything and send an alert
    if (this.selectedRow === null) {
        alert("There is no row selected.");
    }

    else {
        console.log("OPENING: Selected ID: %s", this.selectedRow);
    }
}

export function deleteDeck() {
    // If null, don't do anything and send an alert
    if (this.selectedRow === null) {
        alert("There is no row selected.");
    }

    else {
        console.log("DELETION: Selected ID: %s", this.selectedRow);
    }
}