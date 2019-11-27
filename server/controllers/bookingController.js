const db = require("../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;
const moment = require("moment");

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
  checkAvailability: function(req, res) {
    const start_date = moment(req.body.start_date).format("YYYY-MM-DD");
    const end_date = moment(req.body.end_date).format("YYYY-MM-DD");
    const workspaceId = parseInt(req.body.WorkspaceId);
    const people = parseInt(req.body.people);
    const room = parseInt(req.body.room);
    const occupancy = Math.floor(people / room);

    const dateDiff =
      Math.abs(moment(start_date).diff(moment(end_date), "days")) + 1;

    db.Workspace.findOne({
      where: {
        [Op.and]: [
          { id: { [Op.eq]: workspaceId } },
          { isActive: true },
          { no_occupants: { [Op.gte]: occupancy } },
          {
            id: {
              [Op.notIn]: Sequelize.literal(
                "(SELECT DISTINCT WorkspaceId " +
                  " FROM Bookings " +
                  " WHERE WorkspaceId = " +
                  workspaceId +
                  " AND ((start_date >= '" +
                  start_date +
                  "' AND start_date <= '" +
                  end_date +
                  " 23:59:59') " +
                  " OR (end_date >= '" +
                  start_date +
                  "' AND end_date <= '" +
                  end_date +
                  " 23:59:59')))"
              )
            }
          },
          {
            id: {
              [Op.in]: Sequelize.literal(
                "(SELECT WorkspaceId " +
                  " FROM ( " +
                  "  SELECT COUNT(*) AS countdays, WorkspaceId " +
                  "  FROM WorkspaceAvailabilities " +
                  "  WHERE date BETWEEN '" +
                  start_date +
                  "' AND '" +
                  end_date +
                  " 23:59:59' " +
                  "  GROUP BY WorkspaceId " +
                  ") AS T " +
                  "WHERE countdays = " +
                  dateDiff +
                  ")"
              )
            }
          }
        ]
      }
    }).then(dbWorkspace => {
      if (dbWorkspace) {
        res.sendStatus(200);
      } else {
        res.status(422).json(new Error("Dates are booked"));
      }
    });
  },
  create: function(req, res) {
    //Create booking in the database
    console.log(req.body);
    db.Booking.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
