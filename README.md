# BasicWeather
Basic weather app that calls out to a weather API and returns conditions based on zipcode

# Group Do: Designing your MVP

## Instructions
* With your group, answer each of the following questions:
  1. Who is your target audience?
	- Person interesting in knowing the weather.

  2. What is the problem that the product will address?
	- Better prepare people before leaving their house.

  3. What is the primary goal of the product?
	- Provide information to users.

  4. Identify and prioritize essential user stories (limit this to 3 or fewer)?
	- 1:  As a user I should be able to open this project and know what time it is. Display time on project load.
	- 2: As a user I should be able to enter my zipcode and learn the current day: temp, chance of rain, wind speed, sunset & sunrise times.
	- 3: As a user I should be able to see the forcast for the next 7 days (each day displayed as an item, with highs/lows).
	- 4: As a user I should be able to click on advanced days forcasts and learn Temp, Chance of rain, wind speed, sunrise & sunset.
	- 5: As a user I should be able to close the browser and reopen it and see the data I entered last time I came to this form.

Requirements: 
- Must use at least 2 APIs
- Must use AJAX to pull data
- Must utilize at least one new library or technology that we haven't discussed
- Must have a polished frontend / UI
- Must meet good quality coding standards (indentation, scoping, naming)
- Must NOT use alerts, confirms, or prompts (look into modals!)
- Must have some sort of repeating element (table, columns, etc)
- Must use Bootstrap or Alternative CSS Framework
- Must be deployed to github pages
- Must have user input validation


#### Collaboration notes
###### Github branching/pull request process

*Starting in on work:*
- In your terminal, cd into the project directory. 
- Make sure you're on the master branch by running: git branch
- Make sure you don't have any local changes by running: git status
- If you're on master AND don't have any local changes run: git pull (this will pull in the latest code from the master branch on your computer, syncing your computer's code with the latest github changes.)


*Creating a branch*
- Make sure you don't have any local changes by running: git status
- Create a new branch by running 'git checkout -b BRANCH-NAME'
- Make the changes in your local branch and commit them there. (git add . & git commit process, git git push origin BRANCH-NAME process)

*Creating a pull request*
- Go to https://github.com/BoulderBrains/BasicWeather
- Click on the 'Create Pull Request' button
- Make sure Master is the Base branch and your branch is the second one.
- Review the pull request, if it looks good click the "Create Pull Request" button