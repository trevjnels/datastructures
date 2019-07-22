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

	tree.addNode = function(value) {
		var node = {};
		node.kids = [];
		node.value = value;

		if (tree.root === null || tree.root === undefined) {
			tree.root = node;
			node.root = true;
		} else {
			var recurser = (leaf) => {
				if (leaf.kids.length === 0 || leaf.kids.length === 1) {
					leaf.kids.push(node);
					leaf.kids.sort((a, b) => {
						return a.value - b.value;
					});
				} else {
					// check to see if value is less than or greater than leaf value
					var isGreater =

							leaf.value < value ? true :
							false;
					//if less run recurser on leaf.kids[0]

					if (isGreater && leaf.kids[1]) {
						recurser(leaf.kids[1]);
					} else {
						recurser(leaf.kids[0]);
					}
					// else run recurser on leaf.kids[1]

					// 				1
					// 			2   3
					// 	4
					// 5  6

					// 		1
					// 2       3
					// 			 4   5
				}
			};
			recurser(tree.root);
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
