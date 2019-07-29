console.log("test");
var table_data;
var arr_age = [];



$(document).ready(function () {
    $('#load_data').click(function() {
        $.ajax({
            type: "GET",
            url: "titanic_new.csv",
            dataType: "text",
            success:function(data) {
                console.log("Success");
                var titanic_data = data.split(/\r?\n|\r/);
                table_data = '<table id="table" class="table table-bordered table-striped">';
                for(var count=0;count<titanic_data.length-1;count++) {
                    // var cell_data = titanic_data[count].split(",");
                    var cell_data = titanic_data[count].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
                    if(count > 0 && count < 100) {
                        arr_age.push(cell_data[4]);
                    }
                    table_data += '<tr>';
                    for(var cell_count=0;cell_count<cell_data.length;cell_count++) {
                        if(count === 0) {
                            table_data += '<th>'+cell_data[cell_count]+'</th>';
                        }
                        else {
                            table_data += '<td>'+cell_data[cell_count]+'</td>';
                        }
                    }
                    table_data += '</tr>';
                }
                table_data += '</table>';
                $('#titanic').html(table_data);
            }
        });
    });
});


function checkEmpty() {
    var isEmpty = false,
    pid = document.getElementById("pid").value
    pclass = document.getElementById("pclass").value
    pname = document.getElementById("pname").value
    psex = document.getElementById("psex").value
    age = document.getElementById("age").value
    sibsp = document.getElementById("sibsp").value
    parch = document.getElementById("parch").value
    ticket = document.getElementById("ticket").value
    fare = document.getElementById("fare").value
    cabin = document.getElementById("cabin").value
    embarked = document.getElementById("embarked").value

    if(pid==="") {
        alert("Id cannot be null");
        isEmpty = true;
    }

    if(pname==="") {
        alert("Name cannot be null");
    }

    if(pid==="" && pclass==="" && pname==="" && psex==="" && age==="" && sibsp==="", parch==="", ticket==="", fare==="", cabin==="", embarked===""){
        isEmpty = true;
    }
    return isEmpty;
}

function selection() {
    console.log("Selection called!");
    var table = document.getElementById("table");
    for(var i=1;i<table.rows.length;i++)
    {
        table.rows[i].onclick = function()
        {
          rIndex = this.rowIndex;
          document.getElementById("pid").value = this.cells[0].innerHTML;
          document.getElementById("pclass").value = this.cells[1].innerHTML;
          document.getElementById("pname").value = this.cells[2].innerHTML;
          document.getElementById("psex").value = this.cells[3].innerHTML;
          document.getElementById("age").value = this.cells[4].innerHTML;
          document.getElementById("sibsp").value = this.cells[5].innerHTML;
          document.getElementById("parch").value = this.cells[6].innerHTML;
          document.getElementById("ticket").value = this.cells[7].innerHTML;
          document.getElementById("fare").value = this.cells[8].innerHTML;
          document.getElementById("cabin").value = this.cells[9].innerHTML;
          document.getElementById("embarked").value = this.cells[10].innerHTML;
        };
    }
}

$(document).ready(function() {
    $('#load_data').click(function() {
        setTimeout(selection, 3000);
    });
});

function edit_row() {
    console.log("Edit command executed");
    var table = document.getElementById("table");
    var pid = document.getElementById("pid").value;
    var pclass = document.getElementById("pclass").value;
    var pname = document.getElementById("pname").value;
    var psex = document.getElementById("psex").value;
    var age = document.getElementById("age").value;
    var sibsp = document.getElementById("sibsp").value;
    var parch = document.getElementById("parch").value;
    var ticket = document.getElementById("ticket").value;
    var fare = document.getElementById("fare").value;
    var cabin = document.getElementById("cabin").value;
    var embarked = document.getElementById("embarked").value;

    if(!checkEmpty()) {
        table.rows[rIndex].cells[0].innerHTML = pid;
        table.rows[rIndex].cells[1].innerHTML = pclass;
        table.rows[rIndex].cells[2].innerHTML = pname;
        table.rows[rIndex].cells[3].innerHTML = psex;
        table.rows[rIndex].cells[4].innerHTML = age;
        table.rows[rIndex].cells[5].innerHTML = sibsp;
        table.rows[rIndex].cells[6].innerHTML = parch;
        table.rows[rIndex].cells[7].innerHTML = ticket;
        table.rows[rIndex].cells[8].innerHTML = fare;
        table.rows[rIndex].cells[9].innerHTML = cabin;
        table.rows[rIndex].cells[10].innerHTML = embarked;
    }
}

$(document).ready(function() {
    $('#edit_data').click(function() {
        setTimeout(edit_row(), 1000);
    });
});

$(document).ready(function() {
    $('#pie_chart').click(function() {
        let pie = document.getElementById("pie").getContext('2d');
        var count1 = 0, count2 = 0, count3 = 0, count4 = 0;
        for(var i=0;i<arr_age.length;i++) {
            if(arr_age[i] > 0 && arr_age[i] <= 20) {
                count1++;
            }
            if(arr_age[i] > 21 && arr_age[i] <= 40) {
                count2++;
            }
            if(arr_age[i] > 41 && arr_age[i] <= 60) {
                count3++;
            }
            if(arr_age[i] > 60) {
                count4++;
            }
        }
        let mass = new Chart(pie, {
            type: 'pie',
            data: {
                labels: ['0-20', '21-40', '41-60' , '>60'],
                datasets: [{
                    width: '50',
                    label: 'Population for First 100',
                    data: [count1, count2, count3, count4],
                    backgroundColor: ['rgba(255,99,132,0.6)', 'rgba(54,162,235,0.6)', 'rgba(255,206,86,0.6)', 'rgba(75,192,192,0.6)'],
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: 2,
                    hoverBoarderColor: '#000'
                }]
            },
            options: {}
        });
    });
});

$(document).ready(function() {
    $('#bar_graph').click(function() {
        let bar = document.getElementById("bar").getContext('2d');
        console.log(arr_age);
        var count1 = 0, count2 = 0, count3 = 0, count4 = 0;
        for(var i=0;i<arr_age.length;i++) {
            if(arr_age[i] > 0 && arr_age[i] <= 20) {
                count1++;
            }
            if(arr_age[i] > 21 && arr_age[i] <= 40) {
                count2++;
            }
            if(arr_age[i] > 41 && arr_age[i] <= 60) {
                count3++;
            }
            if(arr_age[i] > 60) {
                count4++;
            }
        }
        let mass = new Chart(bar, {
            type: 'bar',
            data: {
                labels: ['0-20', '21-40', '41-60' , '>60'],
                datasets: [{
                    width: '50',
                    label: 'Population for First 100',
                    data: [count1, count2, count3, count4],
                    backgroundColor: ['rgba(255,99,132,0.6)', 'rgba(54,162,235,0.6)', 'rgba(255,206,86,0.6)', 'rgba(75,192,192,0.6)'],
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: 2,
                    hoverBoarderColor: '#000'
                }]
            },
            options: {}
        });
    });
});