const Folders = require("./../model/Folders");
const OperationalError = require("./../utils/OperationalError");
const catchAsync = require("./../utils/catchAsync");

exports.postFolder = catchAsync(async (req, res, next) => {
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
});

exports.getAllFolders = catchAsync(async (req, res, next) => {
  const folders = await Folders.find({ userID: 15 });

  res.status(200).json({
    status: "success",
    folders,
  });
});

exports.getFolder = catchAsync(async (req, res, next) => {
  const folder = await Folders.findById(req.params.id);
  res.status(200).json({
    status: "success",
    folder,
  });
});
