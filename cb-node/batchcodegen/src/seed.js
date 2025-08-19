const { db, Batch, Center, Course, Season,Teacher  } = require('./model');

const seed = async () => {
  try {
    db.sync({alter:true});
    await Center.bulkCreate(
      [
        { id: 'PP', name: 'Pitampura', city: 'New Delhi' },
        { id: 'DW', name: 'Dwarka', city: 'New Delhi' },
        { id: 'NO', name: 'Noida', city: 'New Delhi' },
        { id: 'DD', name: 'Dehradun', city: 'Dehradun' },
        { id: 'OL', name: 'Online', city: 'New Delhi' },
      ],
      { ignoreDuplicates: true }
    );
    await Season.bulkCreate(
      [
        { id: 'S', name: 'Summer' },
        { id: 'F', name: 'Fall' },
        { id: 'W', name: 'Winter' },
        { id: 'P', name: 'Autumn' },
      ],
      { ignoreDuplicates: true }
    );
    await Course.bulkCreate(
      [
        { id: 'LP', name: 'LaunchPad' },
        { id: 'CX', name: 'Crux' },
        { id: 'IB', name: 'Interview Bootcamp' },
        { id: 'AD', name: 'Android Dev' },
        { id: 'WD', name: 'Web Dev' },
      ],
      { ignoreDuplicates: true }
    );
    await Batch.bulkCreate(
      [
        { code: 'BC204', start: new Date(), end:new Date() },
        { code: 'BC205', start: new Date(), end:new Date() },
        { code: 'BC206', start: new Date(), end:new Date() },
      ],
      { ignoreDuplicates: true }
    );
    await Teacher.bulkCreate(
      [
        { id: 'TL', name: 'Tillu' },
        { id: 'BL', name: 'Billu' },
        { id: 'GL', name: 'Gullu' },
        { id: 'AL', name: 'Allu' },
        { id: 'KL', name: 'Kallu' },
      ],
      { ignoreDuplicates: true }
    );
  } catch (e) {
    console.log(e);
  }
};
seed();
