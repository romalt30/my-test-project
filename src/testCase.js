'use strict';

class testCase {
	constructor(json) {
		this.json = json;
	}

	getJson(){
		return this.json;
	}

	getRequirement(){
		var obj = JSON.parse(this.json);
		if (undefined !== obj.requirement) {
			return obj.requirement;
		}
		return false;
	}

	// TODO but not like this : https://www.monkeyuser.com/2017/todo/
	getExecutions(){
		var obj = JSON.parse(this.json);

		if (Array.isArray(obj.executions)) {
			return obj.executions;
		}

		else {
			return false;
		}
		
		return null;
	}
}

module.exports = testCase;
