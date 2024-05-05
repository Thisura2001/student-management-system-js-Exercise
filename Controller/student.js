import StudentModel from "../Model/StudentModel.js"; // default
// import {StudentModel} from "./StudentModel.js"; // export
import {students} from "../Db/db.js";

$('#nav-student').on('click',()=>{

    $('#coursePage').removeClass("open");
    $('#studentPage').removeClass("close");
    $('#studentPage').addClass("open");
    $('#coursePage').addClass("close");
    console.log("clickedStudent");

})
    $('#nav-course').on('click',()=>{
    $('#studentPage').addClass("close");
    $('#coursePage').removeClass("close");
    $('#coursePage').addClass("open");
    console.log("clickedCourse");
});
    // let students=[];
    let clickedRecord;

    //load data to the table
    function loadTable(){
    $('#tableBody').empty();
    students.map((item,index)=>{
    var record= `<tr>
            <th scope="row" class="colID">${item.id}</th>
            <td class="colfname">${item.fname}</td>
            <td class="collName">${item.lname}</td>
            <td class="colAddress">${item.address}</td>
            <td class="colcName">${item.course}</td>
        </tr>`;
    $('#studenttable').append(record);

    });
}

    //submit button
    $('#submitBtn').on('click',()=>{

    let id=$('#studentId').val();
    let fname=$('#fName').val();
    let laname=$('#lName').val();
    let address=$('#studentaddress').val();
    let cName =$('input[name="flexRadioDefault"]:checked').val();


    let student = new StudentModel(id,fname,laname,address,cName);
//     let student={
//     id:id,
//     fname:fname,
//     lname:laname,
//     address:address,
//     course:cName,
//     age:55,
//
//     call: ()=>{
//     console.log("saved");
// }
//
// }

    students.push(student);
    loadTable();
});
    $('#tableBody').on('click','tr',function (){
    let index=$(this).index();
    clickedRecord=index;
    let fname=$(this).find(".colfname").text();
    let lname=$(this).find(".collName").text();
    let address=$(this).find(".colAddress").text();
    let id=$(this).find(".colID").text();
    let course=$(this).find(".colcName").text();
    console.log("clicked row "+ index);
    console.log("clicked id "+ id);
    console.log("clicked fName "+ fname);
    console.log("clicked lName "+ lname);
    console.log("clicked address "+ address);

    $('#studentId').val(id);
    $('#fName').val(fname);
    $('#lName').val(lname);
    $('#studentaddress').val(address);
    $(`input[name="flexRadioDefault"][value=${course}]`).prop('checked', true);

    });

    //reset button
    $('#resetBtn').on('click',()=>{
    $('#studentId').val("");
    $('#fName').val("");
    $('#lName').val("");
    $('#studentaddress').val("");
    $(`input[name="flexRadioDefault"]`).prop('checked', false);
});
    //update student
    $('#updateBtn').on('click',()=>{

    let id=$('#studentId').val();
    let fname=$('#fName').val();
    let laname=$('#lName').val();
    let address=$('#studentaddress').val();
    let cName =$('input[name="flexRadioDefault"]:checked').val();

    students[clickedRecord].fname=fname;
    students[clickedRecord].lname=laname;
    students[clickedRecord].address=address;
    students[clickedRecord].course=cName;
    loadTable();

});
    //delete button
    $('#deleteBtn').on('click',()=>{
    students.splice(clickedRecord, 1);
    loadTable();
});
