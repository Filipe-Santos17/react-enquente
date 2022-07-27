const { Model, DataTypes } = require('sequelize');

class enquentes extends Model {
    static init(sequelize) {
        super.init({
            titulo: DataTypes.STRING,
            op_one: DataTypes.STRING,
            op_two: DataTypes.STRING,
            op_three: DataTypes.STRING,
            op_four: DataTypes.STRING,
            start_date: DataTypes.DATE,
            finish_date: DataTypes.DATE,
        }, {
            sequelize
        });
    }
}

module.exports = enquentes