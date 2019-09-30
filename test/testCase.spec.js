
const assert = require('assert');
const TestCase = require('../src/testCase.js');

describe('TestCase app', function() {
	describe('#getJson', function() {
		it('should return the json when we ask for it', function() {
			json ='{"result": true}';
			testCase = new TestCase(json);
			assert.equal(testCase.getJson(json), json);
		});
	});
	describe('#getRequirements', function() {
		it('should return false if we provide a json without requirement', function() {
			json ='{"result": true}';
			testCase = new TestCase(json);
			assert.equal(testCase.getRequirement(), false);
		});

		it('should return the requirement if we provide the good requirement', function() {
			json ='{"result": true, "requirement": 123456}';
			testCase = new TestCase(json);
			assert.equal(testCase.getRequirement(), 123456);
		});
	});

	describe('#getExecutions', function() {
		it('should return false if we provide a json without executions', function() {
			json ='{"result": true}';
			testCase = new TestCase(json);
			assert.equal(testCase.getExecutions(), false);
		});

		it('should return false if we provide a json where executions is not an array', function() {
			json ='{"result": true, "executions": 123456}';
			testCase = new TestCase(json);
			assert.equal(testCase.getExecutions(), false);
		});

		it('should return the executions array', function() {
			expected = [1,2,3,4,5];
			json ='{"result": true, "executions": [1,2,3,4,5]}';
			testCase = new TestCase(json);
			assert.deepEqual(testCase.getExecutions(), expected);
		});
	});
});

