function BigBang() {
    let result = [];

for (let i = 1; i <= 100; i++) {
switch (true) {
case (i % 3 === 0 && i % 5 === 0):
    result.push("BIG BANG");
    break;
case (i % 3 === 0):
    result.push("BIG");
    break;
case (i % 5 === 0):
    result.push("BANG");
    break;
default:
    result.push(i);
}
}

console.log(result);


    // Convert the result array to a JSON string
    const jsonResult = JSON.stringify(result);

    // Create a Blob object containing the JSON data
    const blob = new Blob([jsonResult], { type: 'application/json' });

    // Create a link element to download the JSON file
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'output.json';

    // Programmatically click the link to trigger the download
    a.click();
}