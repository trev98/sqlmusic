// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')


// MODEL
class Band extends Model{}

// EXPORT

module.exports = Band
ClassName.init({
    //column configuration here
    Band.init({
        band_id: { 
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        },
        name: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        genre: { 
            type: DataTypes.TEXT, 
            allowNull: false 
        },
        available_start_time: { 
            type: DataTypes.DATE, 
            allowNull: false 
        },
        end_time: { 
            type: DataTypes.DATE, 
            allowNull: false 
        },
    }, {}) 
    
}, {
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamps: false
})
    column_name: DataTypes.TEXT,
    column_name_two: {
        type: DataTypes.STRING,
        allowNull: false
    } 

