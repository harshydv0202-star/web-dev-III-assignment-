const { writeFile, readFile, appendFile, unlink } = require('fs').promises;

async function manageFile() {
    const filename = 'sample.txt';
    try {
        console.log("Creating File...");
        await writeFile(filename, "Hello Node.js");
        console.log("File Created");

        console.log("Reading File");
        const content = await readFile(filename, "utf8");
        console.log(content);

        await appendFile(filename, "\nLearning FS Module");
        console.log("File Updated");

        const updatedContent = await readFile(filename, "utf8");
        console.log(updatedContent);

        await unlink(filename);
        console.log("File Deleted");
    } catch (err) {
        console.error("Error:", err.message);
    }
}

manageFile();
