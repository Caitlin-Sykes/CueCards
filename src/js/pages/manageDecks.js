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
//
// Open deck function
// emits a warning if not selected
// export function openDeck() {
//     // If null, don't do anything and send an alert
//     if (this.selectedRow === null) {
//         this.$emit('show-warning', "There is no deck selected for opening");
//     }
//
//     else {
//         console.log("OPENING: Selected ID: %s", this.selectedRow);
//     }
// }
// // do something data with data
//send entire row object to external function
// component handles rendering that

// // Delete deck function
// // emits a warning if not selected
// export function deleteDeck() {
//     // If null, don't do anything and send an alert
//     if (this.selectedRow === null) {
//         this.$emit('show-warning', "There is no deck selected for deletion");
//     }
//
//     else {
//         console.log("DELETION: Selected ID: %s", this.selectedRow);
//     }
// }
//
// // Delete deck function
// export function filterDeck() {
//     console.log("does nowt.")
// }