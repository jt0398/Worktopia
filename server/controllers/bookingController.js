const db = require("../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  findAll: function(req, res) {
    db.Booking.findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllByUser: function(req, res) {
    db.Booking.findAll({
      where: { UserId: req.params.id },
      include: [
        {
          model: db.Workspace,
          include: [
            { model: db.WorkspacePic, limit: 1 },
            { model: db.WorkspaceLocation }
          ]
        }
      ],
      order: [["createdAt", "DESC"]]
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllByOwner: function(req, res) {
    db.Booking.findAll({
      include: [
        {
          model: db.Workspace,
          include: [
            {
              model: db.WorkspaceLocation,
              where: {
                [Op.and]: [
                  { id: Sequelize.col("Workspace.WorkspaceLocationId") },
                  { UserId: req.params.id }
                ]
              }
            },
            { model: db.WorkspacePic, limit: 1 }
          ]
        },
        { model: db.User }
      ],
      order: [["createdAt", "DESC"]]
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllByWorkSpaceId: function(req, res) {
    db.Booking.findAll({
      where: { WorkSpaceId: req.params.id }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const checkindate = moment(req.body.checkinDate)
      .subtract(1, "days")
      .format("YYYY-MM-DD");
    const checkoutdate = moment(req.body.checkoutDate).format("YYYY-MM-DD");
    const workspaceId = req.body.WorkspaceId;

    db.Booking.findAll({
      where: {
        WorkSpaceId: { [Op.eq]: workspaceId },
        [Op.or]: [
          { start_date: { [Op.between]: [checkindate, checkoutdate] } },
          { end_date: { [Op.between]: [checkindate, checkoutdate] } }
        ]
      }
    }).then(dbWorkspace => {
      console.log(dbWorkspaces);

      if (dbWorkspaces.length === 0) {
        db.Booking.create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      } else {
        done(new Error("Dates are booked"));
      }
    });
  }
};
