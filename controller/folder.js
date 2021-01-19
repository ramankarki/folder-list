const Folders = require("./../model/Folders");

exports.postFolder = async (req, res) => {
  try {
    const { title, description, listData } = req.body;
    const folder = await Folders.create({
      // userID: req.user.id,
      userID: 15,
      title,
      description,
      updatedAt: Date.now(),
      listData,
    });

    res.status(201).json({
      status: "success",
      folder,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      error: err,
    });
  }
};

exports.getAllFolders = async (req, res) => {
  try {
    const folders = await Folders.find({ userID: 15 });

    res.status(200).json({
      status: "success",
      folders,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      err: err,
    });
  }
};

exports.getFolder = async (req, res) => {
  res.status(200).json({
    id: req.params.id,
  });
};
