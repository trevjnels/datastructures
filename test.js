const expect = require('chai').expect;

console.log(`------------BEGIN TESTS---------${Date()}---------------`);

const bstFunc = require('./tree/bst/functional.js');
// const terneryFunc = require('./tree/terenry-tree/functional.js');

describe('binary tree - functional', function() {
	var tree = bstFunc();

	it('should have an add node method', () => {
		tree.addNode(1);
		tree.addNode(2);
		tree.addNode(42);
		tree.addNode(55);
		tree.addNode(199);
		tree.addNode(200);

		expect(tree.root.value).to.equal(1);
	});
	it('should have a delete method', () => {});
	it('should have a search method', () => {});
	it('should have a edit node method', () => {});
});
