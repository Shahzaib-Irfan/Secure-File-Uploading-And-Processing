const File = require("../models/file");


function sanitizePath(str) {
  const pathTraversalPattern = new RegExp('(\\.\\.)|(%2e%2e)|(%2e%2f)|(%2f%2e)|(%5c%2e%2e)|(%5c%2e%2f)|(%5c%2f%2e)|(\\/)', 'gi');
  return str.replace(pathTraversalPattern, '');
}

async function createFile(req, res) {
  try {
    const { fileLink, userEmail, fileName } = req.body;

    const fileData = {
      fileLink,
      userEmail,
      fileName,
    };
    const savedFile = await File.create(fileData);

    res.status(201).redirect("http://localhost:3000/");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

async function getFiles(req, res) {
  try {
    const files = await File.find({});
    res.send(files);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function getFilesByEmail(req, res) {
  try {
    const files = await File.find({ userEmail: req.params["email"] });
    console.log(files);
    res.send(files);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function getFile(req, res) {
  try {
    const id = req.params.id;
    const file = await File.findById(id);
    res.send(file);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function updateFile(req, res) {
  try {
    const file = await File.updateOne(
      { _id: req.params["id"] },
      {
        fileName: req.body["fileName"],
        fileLink: req.body["fileLink"],
        userEmail: req.body["userEmail"],
      }
    );
    res.status(201).json(file);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteFile(req, res) {
  try {
    const file = await File.deleteOne({ _id: req.params["id"] });
    res.status(201).json(file);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createFile,
  getFiles,
  getFilesByEmail,
  getFile,
  updateFile,
  deleteFile,
};
