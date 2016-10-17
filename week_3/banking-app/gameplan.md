###Gameplan compound interest
Goal: An app that calculates compound interest.

MVP of product:

Input variables:
+ Investment amount (start capital)
+ Investment amount (monthly amount)
+ Interest rate
+ Age (start)
+ Age (retire)

Workflow:
+ Make a folder 
+ Setup git
+ .gitignore setup
+ Make node app

Q1. How are we going to take input?
--> import data from JSON
+ Create customer JSON
+ Populate customer JSON
+ Read the customer JSON

Q2. Transform data
--> compound math
+ var start amount
+ little loop
	++ add money
	++ add interest
+ var start amount = var end amount
+ Output data to user

Nice to have features:
+ Detailed algorithm
	++ Monthly additions
	++ Monthly returns
+ Historical data