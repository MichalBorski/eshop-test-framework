Key decisions:
Framework built based on Page Object Model patter. This requires more initial code structure
but makes maintenance better as well as hides locator details, validation method, action from test file code.
It's possibly to build BDD style framework on top of exist code. It will need new layer with Steps 
where those steps will call methods from 'Pages' and 'Components'.

Limitations:
Demo shop I have found is not a Single Page Application, thus the desired complexity mentioned is lower.
Code handles reloding of page after searching for a product correct, also hovering over elements 
which dynamically expand like 'Computers' category is working good.
Due to time constraints and the fact that this was my first code created in type script I did not implement 
all scenarios. However this shows a good structure for test framework.

Things not implemented:
Logger for tests. Configuration file is also very basic, production ready framework most likely need to be able
to run in multiple different environments. 