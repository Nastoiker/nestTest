'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getMongoConfig = void 0;
const getMongoConfig = async (configService) => {
	return Object.assign({ uri: getMongostring(configService) }, getMongoOptions());
};
exports.getMongoConfig = getMongoConfig;
const getMongostring = (configService) => 'mongodb://' + 'localhost:27017';
const getMongoOptions = () => ({
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
//# sourceMappingURL=mongo.config.js.map
