//
// basement test.js
//
// this is a good place to put the basement tests
//
var test = {}



// executes all basement tests
test.do = function() {
			
	test.one()
	test.two()
	test.three()
	
}

// connect this previuos tests function, to the
// basement test button
basement.test_click = test.do
	
	
// sample tests
test.one = function() {

	this.a = 1	
	this.b = 2
	
	basement.new("test one", "a = 1, b = 2")
	.check( 'not equal', 	this.a != this.b,		 "a != b" )
	.check( 'sum', 			this.a + this.b == 3,	 "a + b == 3" )
	.check( 'less than',	this.a < this.b,		 "a < b" )

}

// sample tests
test.two = function() {

	this.a = 1	
	this.b = 2
	
	basement.new("test two")
	.check( 'two 1', 			this.a != this.b )
	.check( 'test two 2', 		this.a + this.b == 3 )
	.check( 'test two, step 3',	this.a < this.b )

}

// sample tests
test.three = function() {

	this.a = 1	
	this.b = 2
	
	basement.new("test three")
	.check( 'three 1', 				this.a != this.b )
	.check( 'test three 2', 		this.a + this.b == 3 )
	.check( 'test three, step 3',	this.a < this.b )

}
