function findSum (parm1, parm2) {
	return parm1 + parm2;
}

function findProduct(parm1,parm2) {
	return parm1 * parm2;
}

function threeOperation(x, operation) {
	return operation(3,x);
}

console.log(threeOperation(3,function(parm1, parm2){
	return parm1 ** parm2;
}));

console.log(threeOperation(4,findSum));
console.log(threeOperation(5,findSum));
console.log(threeOperation(4,findProduct));
console.log(threeOperation(5,findProduct));