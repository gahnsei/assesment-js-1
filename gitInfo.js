/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = `Git bash is a user interface that allows for the navigation of a computer through command lines via a terminal. Git also allows for the creation of repositories where a user can maintain multiple iterations of a file in an orderly manner.`;

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = `GitHub is a website that allows a user to store their local repositories in a cloud-like website. Users can also share and display their GitHub repositories for other users to view.`;

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

let gitInitDefinition = `git init is a command for git bash that creates an empty repository within the present working directory (pwd) for which it is ran. This repository allows users to save multiple iterations of files that are within the pwd.`;

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

let gitCloneDefinition = `git clone is a command that allows user to make an identical copy of a remote repository (usually from GitHub) and save it onto a local device.`;

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

let gitStatusDefinition = `git status is a command that allows a user to view the status of the repository for which they are in. The status will contain information about whether the repository is up to date on all changes made on the files that are within the repository.`;

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

let gitAddDefinition = `git add is a command that allows for users to add existing files that are within the pwd to an already established repository`;

let gitAddCode = `git add .`;

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

let gitCommitDefinition = `git commit is a command that saves all files within the repository. These files will now be viewed as a version of the repository at the time of the command. git commit essentially takes a screenshot of all the users files at that point in time.`;

let gitCommitCode = `git commit -m "initial commit"`;

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

let gitPushDefinition = `git push is a command that allows users to send a copy of their local repository to a remote location (usually GitHub).`;
