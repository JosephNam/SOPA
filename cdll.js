;(function(exports)) {
	"use strict";

	function CDLL() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	CDLL.prototype.createNode = function(data) {
		var node = {
			data: data,
			next: null,
			prev: null,
		};
		return node;
	};

	CDLL.prototype.append = function(data) {
		var node = this.createNode(data);
		if(this.length== 0) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = this.tail.next;
		} 
		this.length++;
		return node;
	}

	CDLL.prototype.prepend = function(data) {
		var node = this.createNode(data);
		if (this.length == 0){
			this.head = node;
			this.tail=node;
		} else {
			this.head.prev = node;
			this.node.next = this.head;
			this.tail.next = node;
			this.head = this.head.prev;
		}
	}
}