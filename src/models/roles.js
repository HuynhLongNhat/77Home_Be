const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const roles = sequelize.define(
    "roles",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "roles",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );

  roles.associate = (models) => {
    roles.hasMany(models.user_roles, {
      as: "user_roles",
      foreignKey: "roles_id",
    });
  };

  return roles;
};
