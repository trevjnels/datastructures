var List = function() {
	this.head = null;
	this.tail = null;
};

var Node = function(value) {
	this.value = value;
	this.past = null;
	this.next = null;
};

List.prototype.addNode = function(value) {
	var node = new Node(value);

	if (!this.head) {
		this.head = node;
		this.tail = node;
	} else {
		var currentTail = this.tail;
		currentTail.next = node;
		node.past = currentTail;
		this.tail = node;
	}
};

List.prototype.addHead = function(value) {
	var node = new Node(value);

	var currentHead = this.head;
	this.head = node;
	node.next = currentHead;
	currentHead.past = node;
};

List.prototype.removeHead = function() {
	var head = this.head;
	var next = head.next;

	this.head = next;

	if (next) {
		next.past = null;
	}
	return head.value;
};

List.prototype.removeTail = function() {
	var tail = this.tail;
	var prev = tail.past;
	if (prev) {
		prev.next = null;
	}
	this.tail = prev;
	return tail.value;
};

List.prototype.find = function(value) {
	var last = this.tail;
	var first = this.head;
	var num = 0;

	while (last !== first) {
		// console.log(num++);
		if (last) {
			if (last.value === value) {
				return true;
			}
			last = last.past;
		}
		if (first) {
			if (first.value === value) {
				return true;
			}
			first = first.next;
		}

		// first = first.prev;
	}
	if (last && last.value === value) {
		return true;
	}

	if (first && first.value === value) {
		return true;
	}
	return false;
};

var double = new List();

double.addNode('Trevor');
double.addNode('John');
double.addNode('Nelson');
double.addHead('Brandy');
// double.removeTail();
double.removeHead();
// console.log(double.head);
