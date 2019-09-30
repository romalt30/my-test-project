'use strict';
/** permet de décomposer un Json */
class testCase {
/**
 * Créer un décomposeur de Json
 * @param {json} Json à décomposer
 */
	constructor(json) {
		this.json = json;
	}
/**
 * Retourne le Json
 * @returns {json} Json à décomposer
 */
	getJson(){
		return this.json;
	}
/**
 * Récupère les requirements du Json
 * @returns {(Object|boolean)} Les requirements ou false s'il y en a pas
 */
	getRequirement(){
		var obj = JSON.parse(this.json);
		if (undefined !== obj.requirement) {
			return obj.requirement;
		}
		return false;
	}

	// TODO but not like this : https://www.monkeyuser.com/2017/todo/
/**
 * Récupère les executions du Json
 * @returns {(json|boolean)} Les executions ou false s'il y en a pas ou si le format est invalide
 */
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
