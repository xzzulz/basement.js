//
// basement.js sample tests
//
// This file is where the custom tests are placed.
// This sample contains 4 tests
//



basement.set("sample")

// sample test 1

this.a = 1
this.b = 2

basement.test("test one", "a = 1, b = 2")
.check( 'not equal', 	this.a != this.b,		 "a != b" )
.check( 'sum', 			this.a + this.b == 3,	 "a + b == 3" )
.check( 'less than',	this.a < this.b,		 "a < b" )

// sample test 2

this.a = 1
this.b = 2

basement.test("test two")
.check( 'two 1', 			this.a != this.b )
.check( 'test two 2', 		this.a + this.b == 3 )
.check( 'test two, step 3',	this.a < this.b )

// sample test 3

this.a = 4
this.b = 8

basement.test("failed test example")
.check( 'equal', 		this.a == this.b, "a == b    failed test" )
.check( 'sum', 			this.a + this.b == 12, "a + b == 12" )
.check( 'failed tets',	this.a > this.b, "a > b")

// sample test 4

this.a = 2
this.b = 3

basement.test("test three", "a = 2, b = 3")
.check( 'less than', 		this.a < this.b , "a < b")
.check( 'product', 			this.a * this.b == 6, "a * b == 6" )
.check( 'sum',				this.a + this.b, "a + b == 5" )
