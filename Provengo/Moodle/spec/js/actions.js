function login(session, username, password) {
    session.click("/html/body/div[2]/nav/div/div[2]/div/div/span/a");
    session.clear("//*[@id=\"username\"]");
    session.writeText("//*[@id=\"username\"]", username);
    session.writeText("//*[@id=\"password\"]", password);
    session.click( "//*[@id=\"loginbtn\"]");
}

function loginStudent(session) {
    login(session, "shavit", "Aa!123456");
}

function loginTeacher(session) {
    login(session,"admin","Aa!123456");
}


function logoutFromChoice(session){
    session.click("/html/body/div[2]/nav/div/div[2]/div[3]/div/div/a/span/span/span/span");
    session.click("/html/body/div[2]/nav/div/div[2]/div[3]/div/div/div/div/div/div/a[7]");


}

function logoutAdmin(session){
    //press on user scroll
    session.click("/html/body/div[4]/nav/div/div[2]/div[3]/div/div/a/span");
    //click logout
    session.click("/html/body/div[4]/nav/div/div[2]/div[3]/div/div/div/div/div/div/a[8]");
}

function createCourse(session) {
    session.click("/html/body/div[2]/nav/div/div[1]/nav/ul/li[3]/a");
    session.click("/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div/div/div/div[2]/form/button");
    session.writeText("//*[@id=\"id_fullname\"]", "test_course");
    session.writeText("//*[@id=\"id_shortname\"]", "test");
    session.click("//*[@id=\"id_saveanddisplay\"]");
}

function navigateToCourseFromHomePage(session) {
    session.click("/html/body/div[2]/nav/div/div[1]/nav/ul/li[3]/a");
    session.click("/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div[2]/div/div/div[1]/div/div/div/div/a/div");


   //  session.click("/html/body/div[2]/nav/div/div[1]/nav/ul/li[3]/a");
   //  session.click("/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div[2]/div/div/div[1]/div/div/div/div/div[1]/div/div/a/span[3]/span[2]");

}

function enrollStudent(session) {
    session.click("/html/body/div[2]/div[4]/div/div[2]/nav/ul/li[3]/a");
    session.click( "/html/body/div[2]/div[4]/div/div[3]/div/section/div/div[1]/div/div[2]/div/div/form/div/input[1]");
    session.click("/html/body/div[5]/div[2]/div/div/div[2]/form/fieldset/div[2]/div[1]/div[2]/div[3]/span");
    //choose from box
    session.click("/html/body/div[5]/div[2]/div/div/div[2]/form/fieldset/div[2]/div[1]/div[2]/ul/li/span/img");
    //choose user
    session.click("/html/body/div[5]/div[2]/div/div/div[3]/button[2]");
    //submit enroll
    session.click("/html/body/div[2]/div[4]/div/div[2]/nav/ul/li[1]/a");
}

function createActivity(session) {
    //press editMode
    session.click("/html/body/div[2]/nav/div/div[2]/form/div/div/input");
    //add activity
    session.click("/html/body/div[4]/div[5]/div/div[3]/div/section/div/div/div/ul/li[1]/div[1]/div[2]/div[2]/div/button/div/span");
    //press choice activity
    session.click("/html/body/div[7]/div[2]/div/div/div[2]/div/div/div[1]/div/div[2]/div[2]/div[2]/div/div[3]/div/a/div[2]");
    //write at choice name
    session.writeText("/html/body/div[5]/div[5]/div/div[3]/div/section/div/form/fieldset[1]/div[2]/div[1]/div[2]/input", "good activity");
    //write first choice
    session.writeText("/html/body/div[5]/div[5]/div/div[3]/div/section/div/form/fieldset[2]/div[2]/div[5]/div[2]/input","coolOption1");
    //write second choice
    session.writeText("/html/body/div[5]/div[5]/div/div[3]/div/section/div/form/fieldset[2]/div[2]/div[7]/div[2]/input","coolerOption2");
    //save and display choice added
    session.click("/html/body/div[5]/div[5]/div/div[3]/div/section/div/form/div[4]/div[2]/div[1]/div/div[2]/span/input");

}
function createActivityWithChangingOption(session) {
    //press editMode
    session.click("/html/body/div[2]/nav/div/div[2]/form/div/div/input");
    //add activity
    session.click("/html/body/div[4]/div[5]/div/div[3]/div/section/div/div/div/ul/li[1]/div[1]/div[2]/div[2]/div/button/div/span");
    //press choice activity
    session.click("/html/body/div[7]/div[2]/div/div/div[2]/div/div/div[1]/div/div[2]/div[2]/div[2]/div/div[3]/div/a/div[2]");
    //write at choice name
    session.writeText("/html/body/div[5]/div[5]/div/div[3]/div/section/div/form/fieldset[1]/div[2]/div[1]/div[2]/input", "good activity");
    //write first choice
    session.writeText("/html/body/div[5]/div[5]/div/div[3]/div/section/div/form/fieldset[2]/div[2]/div[5]/div[2]/input","coolOption1");
    //write second choice
    session.writeText("/html/body/div[5]/div[5]/div/div[3]/div/section/div/form/fieldset[2]/div[2]/div[7]/div[2]/input","coolerOption2");
    //select yes in changing option button
    session.selectByVisibleText("/html/body/div[1]/form[1]/fieldset[2]/div[2]/div[1]/div[2]/select[1]", "Yes");
    //save and display choice added
    session.click("/html/body/div[5]/div[5]/div/div[3]/div/section/div/form/div[4]/div[2]/div[1]/div/div[2]/span/input");

}

function changeActivityToDsiabledChangingOption(session) {
    //enter activity
    session.click("/html/body/div[2]/ul[1]/li[2]/div[1]/div[2]/div[2]/div[1]/div[1]/a[1]");
    //press editMode
    session.click("/html/body/div[2]/nav/div/div[2]/form/div/div/input");
    //enter settings
    session.click("/html/body/div[2]/nav[1]/ul[1]/li[2]/a[1]");
    //select yes in changing option button
    session.selectByVisibleText("/html/body/div[1]/form[1]/fieldset[2]/div[2]/div[1]/div[2]/select[1]", "No");
    //save and display choice added
    session.click("/html/body/div[5]/div[5]/div/div[3]/div/section/div/form/div[4]/div[2]/div[1]/div/div[2]/span/input");

}

function enterDisabledActivity(session){
    session.click("/html/body/div[2]/div[4]/div/div[3]/div/section/div/div/div/ul/li[1]/div/div[2]/ul/li[2]/div/div[2]/div[2]");
}

function studentEnterDisabledActivity(session){
    session.click("/html/body/div[2]/div[4]/div/div[3]/div/section/div/div/div/ul/li[1]/div/div[2]/ul/li[2]/div/div[2]/div[2]/div/div/a");
}

function chooseOption1(session){
    //choose option 1
    session.click("/html/body/div[2]/div[4]/div/div[2]/div/section/div[2]/form/ul/li[1]/label");
    //save choose
    session.click("/html/body/div[2]/div[4]/div/div[2]/div/section/div[2]/form/input[4]");
}

function chooseOption2(session){
    //choose option 2
    session.click("/html/body/div[4]/div[1]/div[3]/div[1]/section[1]/div[2]/form[1]/ul[1]/li[2]/input[1]");
    //save choose
    session.click("/html/body/div[2]/div[4]/div/div[2]/div/section/div[2]/form/input[4]");
}

function returnToCourse(session){
    //click on course name
    session.click("/html/body/div[2]/div[4]/div/header/div/div[1]/div[1]/nav/ol/li[1]/a");

}

function checkCantChange(session) {
    //this shouldnt be if its disbaled, so we check its absent
    return session.click("/html/body/div[2]/div[4]/div/div[2]/div/section/div[2]/div[3]");
}
