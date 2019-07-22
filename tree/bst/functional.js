////
//
//
////
//
//////
//
//

//add node

//remove node

// find node

//edit node

const Tree = () => {
	var tree = {};
	tree.nodes = {};

	tree.addNode = function(value, kids = []) {
		console.log('adding node');
		var node = {};
		node.value = value;
		node.kids = kids;
		tree.nodes[value] = node;

		if (tree.root === null || tree.root === undefined) {
			tree.root = node;
		}
		//
	};
	tree.searchNode = function(value) {
		//
	};
	tree.editNode = function(value) {
		//
	};
	tree.deleteNode = function(value) {
		//
	};

	console.log(JSON.stringify(tree));
	return tree;
};

////
//
//////
//
//////
//
//
////
//
//
////
//
//
////
//
//
////
//
//
module.exports = Tree;
