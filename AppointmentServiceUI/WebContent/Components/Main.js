$(document).ready(function() {
	if ($("#alertSuccess").text().trim() == "") {
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
	refresh();

});


$(document).on("click","#btnSave",function(event) {
	
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	// Form validation-------------------
	var status = validateItemForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}

	var formObj = $("#formAppointment")
	var appointment = {}
	
	//appointment["Aid"] = formObj.find("#Aid").val().trim()
	appointment["date"] = formObj.find("#date").val().trim()
	appointment["time"] = formObj.find("#time").val().trim()
	appointment["doctorId"] = formObj.find("#doctorId").val().trim()
	appointment["patientNic"] = formObj.find("#patientNic").val().trim()
	

	var type = ($("#hidItemIDSave").val() == "") ? "POST"
			: "PUT";
	serviceUrl = "http://localhost:8082/appointmentService/appointmetnsService/appointments/"
	if (type == "PUT") {
		serviceUrl = "http://localhost:8082/appointmentService/appointmetnsService/appointments/"
			appointment["Aid"] = $("#hidItemIDSave").val()
	}
	
	$.ajax({
		url : serviceUrl,
		type : type,
		data : JSON.stringify(appointment),
		contentType : "application/json",
		beforeSend : function(xhr) {
			xhr.setRequestHeader("Authorization", "Basic "
					+ btoa("admin" + ":" + "admin"));
		},
		complete : function(response, status) {
			onItemSaveComplete(response.responseText,
					status);
		}
	});
});



/*
$(document).on("click",".btnUpdate",function(event) {
	
					$("#heading").text("Update Doctor");
					$("#hidItemIDSave").val($(this).closest("tr").find('#hidItemIDUpdate').val());
					$("#dName").val($(this).closest("tr").find('td:eq(0)').text());
					$("#dSpecialization").val($(this).closest("tr").find('td:eq(1)').text());
					$("#dAddress").val($(this).closest("tr").find('td:eq(2)').text());
					$("#dEmail").val($(this).closest("tr").find('td:eq(3)').text());
					$("#dFee").val($(this).closest("tr").find('td:eq(4)').text());
					$("#dWHospital").val($(this).closest("tr").find('td:eq(5)').text());
					
});
*/

/*
$(document).on("click",".btnRemove",function(event) {
	
	var r = confirm("Do you want to delete this record");
	if (r == true) {
		
		serviceUrl = "http://localhost:8082/DoctorService/DoctorService/Doctors/"
			
			
		$.ajax({
			url : serviceUrl,
			type : "DELETE",
			data : "{ID: " + $(this).data("itemid") +"}",
			contentType : "application/json",
			beforeSend : function(xhr) {
				xhr.setRequestHeader("Authorization", "Basic "
						+ btoa("admin" + ":" + "admin"));
			},
			complete : function(response, status) {
				onItemDeleteComplete(response.responseText,
						status);
			}

		});
	}
});
*/


function validateItemForm() {
	
	if ($("#date").val().trim() == "") {
		return "Insert Date";
	}

	if ($("#time").val().trim() == "") {
		return "Insert Time ";
	}


	if ($("#doctorId").val().trim() == "") {
		return "Insert Doctor ID";
	}
	

	if ($("#patientNic").val().trim() == "") {
		return "Insert patient NIC";
	}
	
	
	

	return true;
}




function onItemSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {
			
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
			
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}

	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}

	$("#hidItemIDSave").val("");
	$("#formAppointment")[0].reset();
	
	refresh();
} 


/*
function onItemDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#table").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
	refresh()
}

*/


function refresh() {

	serviceUrl = "http://localhost:8082/appointmentService/appointmetnsService/appointments/"
	$.ajax({
		dataType : 'html',
		url : serviceUrl,
		beforeSend : function(xhr) {
			xhr.setRequestHeader("Authorization", "Basic "
					+ btoa("admin" + ":" + "admin"));
		},
		success : function(data) {
			
			$("#table").html(data);
			
		
		}
	});

}


