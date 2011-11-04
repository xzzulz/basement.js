
# basement.js
v0.9

javascript testing lab


basament is a simple testing library for javascript, with an html view.

## Usage

Example:

basament.set( "a new set of tests" )

basament.new( "the first test" )
	.check( "check 1", a == b )
	.check( "check 2", c == a + b )
	.check( "check 3", d == a + b + c )

The results of the checks for each test is reported in the html. If all checks are passed, the test is passed.


### The basament module, provides two methods:

* basament.set( name )	start a new set of tests, and sets the title to name.

* basament.new( name )	create and return a new -basament test object-


### The -basament test object- has only one method:

* basament-test-object.check( name, check-boolean )	performs a check. if "check-boolean" is true, the check is passed.




