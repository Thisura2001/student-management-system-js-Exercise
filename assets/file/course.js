var courses = [];
let courseRecord;
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
$("#courseUpdateBtn").on('click',function (){
    let cId = $("#course-id").val();
    let cName = $("#course-name").val();
    let description = $("#course-description").val();

    courses[courseRecord].Name = cName;
    courses[courseRecord].description = description;
    courseTableLoad();
})
$("#courseResetBtn").on('click',function (){
     $("#course-id").val("");
     $("#course-name").val("");
     $("#course-description").val("");
})
$("#courseDeleteBtn").on('click',function (){
    courses.splice(courseRecord,1);
    courseTableLoad();
});