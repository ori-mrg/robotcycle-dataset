const fs = require("fs");
const path = require("path");

const toggleComment = ({ filepath, regex }) => {
  let updatedContent = fs.readFileSync(filepath, "utf8");
  const match = updatedContent.match(regex);

  if (filepath.endsWith("hugo.toml")) {
    updatedContent = updatedContent.replace(
      'baseURL = "https://example.org"',
      'baseURL = "/"',
    );
  }

  if (match) {
    const matchedContent = match[0];
    const hasComment = matchedContent.startsWith("# ");
    if (hasComment) {
      updatedContent = updatedContent.replace(
        regex,
        matchedContent.replace("# ", ""),
      );
      fs.writeFileSync(filepath, updatedContent, "utf8");
    } else {
      const hasLineBreak = matchedContent.includes("\n");
      if (hasLineBreak) {
        const content = matchedContent
          .split("\n")
          .map((line) => "# " + line)
          .join("\n");
        updatedContent = updatedContent.replace(regex, content);
        fs.writeFileSync(filepath, updatedContent, "utf8");
      }
    }
  }
};

const getFolderName = (rootFolder) => {
  const configPath = path.join(rootFolder, "hugo.toml");
  const getConfig = fs.readFileSync(configPath, "utf8");
  const match = getConfig.match(/theme\s*=\s*\[?"([^"\]]+)"\]?/);
  let selectedTheme = null;
  if (match && match[1]) {
    selectedTheme = match[1];
  }
  return selectedTheme;
};

const deleteFolder = (folderPath) => {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
  }
};

const createNewFolder = (rootFolder, folderName) => {
  const newFolder = path.join(rootFolder, folderName);
  fs.mkdirSync(newFolder, { recursive: true });
  return newFolder;
};

const iterateFilesAndFolders = (rootFolder, { destinationRoot }) => {
  const directory = path.join(rootFolder);
  const items = fs.readdirSync(directory, { withFileTypes: true });
  items.forEach((item) => {
    if (item.isDirectory()) {
      createNewFolder(destinationRoot, item.name);
      iterateFilesAndFolders(path.join(directory, item.name), {
        currentFolder: item.name,
        destinationRoot: path.join(destinationRoot, item.name),
      });
    } else {
      const sourceFile = path.join(directory, item.name);
      const destinationFile = path.join(destinationRoot, item.name);
      fs.renameSync(sourceFile, destinationFile);
    }
  });
};

const setupProject = () => {
  const rootFolder = path.join(__dirname, "../");
  // No exampleSite logic; operate directly on real site structure
  // Add any setup logic you need here, or leave empty if not needed
  console.log("Project setup script: No exampleSite logic. Site structure is ready.");
};

setupProject();
