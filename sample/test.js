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
	test.four()
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

	this.a = 4	
	this.b = 8
	
	basement.new("failed test example")
	.check( 'equal', 		this.a == this.b, "a == b    failed test" )
	.check( 'sum', 			this.a + this.b == 12, "a + b == 12" )
	.check( 'failed tets',	this.a > this.b, "a > b")

}

// sample tests
test.four = function() {

	this.a = 2	
	this.b = 3
	
	basement.new("test three", "a = 2, b = 3")
	.check( 'less than', 		this.a < this.b , "a < b")
	.check( 'product', 			this.a * this.b == 6, "a * b == 6" )
	.check( 'sum',				this.a + this.b, "a + b == 5" )

}
