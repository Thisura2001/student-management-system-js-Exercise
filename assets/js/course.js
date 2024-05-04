var courses = [];
let courseRecord;

//submit button
$("#courseSubmitBtn").on('click', () => {
    let cId = $("#course-id").val();
    let cName = $("#course-name").val();
    let description = $("#course-description").val();

    let course = {
        id: cId,
        Name: cName,
        description: description,
    }
    courses.push(course);
    courseTableLoad();
});
//load course table
function courseTableLoad() {
    $("#courseTableBody").empty();
    courses.map((item, index) => {
        var record = `<tr>
            <th scope="row" class="colId">${item.id}</th>
            <td class="colName">${item.Name}</td>
            <td class="description">${item.description}</td>
        </tr>`;
        $("#tableCourse").append(record);
    });
}
//load data to the text fields when clicked
$("#courseTableBody").on('click','tr',function (){
    let index = $(this).index();
    courseRecord = index;

    let cName = $(this).find(".colName").text();
    let description = $(this).find(".description").text();
    let id = $(this).find(".colId").text();

    $("#course-id").val(id);
    $("#course-name").val(cName);
    $("#course-description").val(description);
})

//update button
$("#courseUpdateBtn").on('click',function (){
    let cId = $("#course-id").val();
    let cName = $("#course-name").val();
    let description = $("#course-description").val();

    courses[courseRecord].Name = cName;
    courses[courseRecord].description = description;
    courseTableLoad();
})
//reset button
$("#courseResetBtn").on('click',function (){
     $("#course-id").val("");
     $("#course-name").val("");
     $("#course-description").val("");
})
//delete button
$("#courseDeleteBtn").on('click',function (){
    courses.splice(courseRecord,1);
    courseTableLoad();
});