<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.3.1.min.js"></script>
<script src="Components/Main.js"></script>


</head>
<body>
		<nav class="navbar navbar-expand-sm bg-primary navbar-dark">
		<ul class="navbar-nav">
		
	</ul>
	</nav>

	<div class="container-fluid">
		<div class="row">
			<div class="col-md-4">

				<h1 id="heading">Add  Appointment</h1>

				<form id="formAppointment" name="formAppointment">
				<!--  
					Appointment ID:<input id="Aid" name="Aid" type="text"
						class="form-control form-control-sm"> <br>
				-->		
					<!--  Date: <input id="date" name="date" type="text"class="form-control form-control-sm"> <br> -->
					Date:  <input class="form-control" type="date" class="form-control"id="date" name="date" >
				
					Time : <input id="time" name="time" type="text"
						class="form-control form-control-sm"> <br>	
				
				<!--  CheckedStatus: <input id="checkedStatus" name="checkedStatus" type="email"
						class="form-control form-control-sm"> <br>-->	
				
					Doctor ID <input id="doctorId" name="doctorId" type="text"
						class="form-control form-control-sm"> <br>
					
					Patientnic: <input id="patientNic" name="patientNic" type="text"
						class="form-control form-control-sm"> <br>
					<!-- 	
					Username: <input id="username" name="username" type="text"
						class="form-control form-control-sm"> <br>
					
					Password: <input id="password" name="password" type="password"
						class="form-control form-control-sm"> <br>
					
 -->
					 <br> <input id="btnSave" name="btnSave" type="button"
						value="Save" class="btn btn-primary"> <input type="hidden"
						id="hidItemIDSave" name="hidItemIDSave" value="">
				</form>
				<hr>
				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>
				<br>



			</div>
			<div class="col-md-8">

				<div class="container">
					<h2>Appointment Table</h2>
					<p>Available Appointments</p>
					<div id="table">
					
					
					</div>
					
				</div>
			</div>
		</div>
	</div>
	


















</body>
</html>