function getInput() {
    let names = document.getElementById("input").value;
    let separate = names.split("\n");
    let name_family_pairs = new Map();

    for (let i = 0; i < separate.length; i++) {
        alert(separate[i]);
    }
}
