const { Medicine } = require('../models');

// const { HttpError } = require('../helpers');

const getAllMedicines = async () => {
  const result = await Medicine.find({}, '-createdAt -updatedAt');
  return result;
};

const getMedicinesByType = async type => {
  const result = await Medicine.find(
    { typeOfMedicine: type },
    '-createdAt -updatedAt'
  );
  return result;
};

const getMedicinesByPrice = async sortOrder => {
  const sortDirection = sortOrder === 'low' ? 1 : -1;
  return await Medicine.find().sort({ price: sortDirection });
};

const getMedicinesByName = async medicineName => {
  return await Medicine.find({
    name: { $regex: medicineName, $options: 'i' },
  });
};

// const createService = async (user, body) => {
//   const id = user.id;

//   const existingReview = await Review.findOne({ owner: id }).exec();

//   if (existingReview) {
//     throw new HttpError(403, 'You have already made a review.');
//   }

//   const newReview = {
//     owner: user.id,
//     rating: body.rating,
//     comment: body.comment,
//   };

//   const result = await Review.create(newReview);

//   return result;
// };

// const updateService = async (user, body) => {
//   const id = user.id;

//   const existingReview = await Review.findOne({ owner: id }).exec();

//   if (!existingReview) {
//     throw new HttpError(404, 'You do not have any review to update.');
//   }

//   const result = await Review.findByIdAndUpdate(existingReview._id, body, {
//     new: true,
//   }).exec();

//   return result;
// };

// const deleteService = async user => {
//   const id = user.id;

//   const existingReview = await Review.findOne({ owner: id }).exec();

//   if (!existingReview) {
//     throw new HttpError(404, 'You do not have any review to remove.');
//   }

//   const result = await Review.findByIdAndRemove(existingReview._id);

//   return result;
// };

module.exports = {
  getAllMedicines,
  getMedicinesByType,
  getMedicinesByPrice,
  getMedicinesByName,

  //   getUserReviewService,
  //   createService,
  //   updateService,
  //   deleteService,
};
