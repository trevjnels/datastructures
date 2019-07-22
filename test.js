const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

console.log(`------------BEGIN TESTS---------${Date()}---------------`);

const bstFunc = require('./tree/bst/functional.js');
// const terneryFunc = require('./tree/terenry-tree/functional.js');

describe('binary tree - functional', function() {
	var tree = bstFunc();

	it('should have an add node method', () => {
		tree.addNode(10);
		tree.addNode(9);
		tree.addNode(11);
		tree.addNode(12);
		tree.addNode(13);
		tree.addNode(8);
		tree.addNode(7);

		// console.log(JSON.stringify(tree));

		expect(tree.root.value).to.equal(10);

		fs.writeFile(path.join(__dirname + '/tplay.json'), JSON.stringify(tree), (err, data) => {
			if (err) console.log('error in printing data to json file');
		});
	});

	it('should only have two childeren max per node', () => {
		// expect(tree.root.kids).to.have.lengthOf(2);
	});
	it('should have a delete method', () => {});
	it('should have a search method', () => {});
	it('should have a edit node method', () => {});
});
