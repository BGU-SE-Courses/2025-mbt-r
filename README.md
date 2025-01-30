# Software Quality Engineering - System Testing

This is a repository for the system-testing assignment of the Software Quality Engineering course at Ben-Gurion University, Israel.

## Assignment Description
In this assignment, we tested an open-source software called [Moodle](https://moodle.org).

Moodle is a free and open-source learning management system written in PHP. It is used to create custom websites with online courses for online learning projects in schools, universities, workplaces, and other sectors.

## Installation

### Initial setup
1. Download the [Moodle packages for Windows](https://download.moodle.org/windows/?utm_source=chatgpt.com).
2. Extract the contents of the zip folder and run `Start Moodle.exe`.
3. Open your browser and navigate to `localhost`.
4. Follow the instructions to set up the project and database. Use the MySQL port configured on your machine (default is 3306).

### Adding Users
1. Log in as **admin** (with the details provided during setup).
2. Navigate to **Site Administration** from the top toolbar.
3. Click **Users**.
4. Inside **Accounts**, click **Browse list of users**.
5. Click **Add a new user**.
6. Create a user for the teacher:
   
```
 for Cucumber:

| Teacher_Username | Password   |
| ---------------- | ---------- |
| teacher          | Password1! |

 for Provengo:

| Teacher_Username | Password  |
| ---------------- | --------- |
| teacher          | Aa!123456 |

```
7. Create a user for the student:
```
 for Cucumber:

| Student_Username | Password   |
| ---------------- | ---------- |
| moodleuser       | Password1! |

 for Provengo:

| Student_Username | Password  |
| ---------------- | --------- |
| shavit           | Aa!123456 |

```

<br/>

### Add a course and a choice test

```
 for Cucumber:

| Course_Name | Test_Title | Choice_Option1 | Choice_Option2 |
| ----------- | ---------- | -------------- | -------------- |
| course1     | choice2    | choice_1       | choice_2       |

 for Provengo:

| Course_Name | Test_Title | Choice_Option1 | Choice_Option2 |
| ----------- | ---------- | -------------- | -------------- |
| test_course    | goodActivity    | coolOption1       | coolerOption2       |

```
Important:  
When creating goodActivity change to "Yes" in "Allow choice to be updated".  
After creating the course test_course, as the student, "shavit", login, enter goodActivity, select coolOption1, press "save my choice" then logout.

## What We Tested
We tested the **Choice Activity Module**, which allows students to make a selection and teachers to configure choice settings. We focused on the following user stories:

### **User Story 1: Student Tries to Change Their Choice in the Choice Activity**
#### **Preconditions:**
- A course exists with a teacher and a student enrolled.
- A choice activity exists and allows students to update their choice.

#### **Expected Outcome:**
- The student should be able to change their choice and save the new selection.

### **User Story 2: Teacher Disables Choice Updating**
#### **Preconditions:**
- A course exists with a teacher and a student enrolled.
- A choice activity exists and allows students to update their choice.

#### **Expected Outcome:**
- After the teacher changes the setting to **NOT Allow Choice to be Updated**, the student should no longer be able to change their selection.

## How We Tested
We used two different testing methods:
1. [Cucumber](https://cucumber.io/), a behavior-driven testing framework.
2. [Provengo](https://provengo.tech/), a story-based testing framework.

Each of the testing methods is elaborated in its own directory.

## Results
After executing the tests, we verified that:
- Students were initially able to change their choice in the activity.
- Once the teacher disabled choice updates, students could no longer modify their selection.
- The system behaved as expected, with no unexpected errors or inconsistencies.

## Detected Bugs
No critical bugs were detected during testing. All functionality performed as expected.

---
This report provides a structured approach to documenting the test cases and methodology, ensuring clarity and completeness in the testing process.
