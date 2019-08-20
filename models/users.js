module.exports = function(sequelize,DataTypes){
	var Users = sequelize.define("Users",{
		userName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
	});
	return Users;
};