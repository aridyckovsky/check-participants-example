/**
 * Contants
 */

var PROLIFIC_ID_REGEX = /([A-z0-9])\w/;
var PROFLIIC_ID_LENGTH = 24;

/**
 * isValidProlificId checks a string id.
 * Returns true if id is of correct length and character pattern,
 *   and false otherwise.
 */
var isValidProlificId = function(id) {
	return (id.length == PROFLIIC_ID_LENGTH) && (PROLIFIC_ID_REGEX.test(id));
};

var isPreviousParticipant = function(id, taskId, dynamoDB, callback) {
	var params = {
		TableName: "Prolific",
		Key: {
			"taskId": {"S": taskId},
			"prolificId": {"S": id}
		}
	};
	dynamoDB.getItem(params, callback);
};