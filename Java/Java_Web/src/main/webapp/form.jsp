<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</head>
<body>
	<div class="container mt-3">
		<form action="StudentController" method="POST">
			<div class="form-floating mb-3 mt-3">
			  <input type="text" class="form-control" name="fname" placeholder="First Name: ">
			  <label>First Name: </label>
			</div>
			<div class="form-floating mb-3">
			  <input type="text" class="form-control" name="lname" placeholder="Last Name: ">
			  <label>Last Name: </label>
			</div>
			<div class="form-floating mb-3">
			  <input type="email" class="form-control" name="email" placeholder="Email: ">
			  <label>Email: </label>
			</div>
			<div class="form-floating mb-3">
			  <input type="number" class="form-control" name="mobile" placeholder="Mobile Number: ">
			  <label>Mobile Number: </label>
			</div>
			<div class="form-floating mb-3">
			  <input type="password" class="form-control" name="pwd" placeholder="Password:  ">
			  <label>Password: </label>
			</div>
			<select class="form-select mb-3" name="course" aria-label="Default select example">
			  <option selected disabled>Choose Course</option>
			  <option value="IT">IT</option>
			  <option value="Mechanical">Mechanical</option>
			  <option value="Civil">Civil</option>
			</select>
			<label>Gender: </label>
			<div class="form-check">
			  <input class="form-check-input" type="radio" name="gender" value="male" >
			  <label class="form-check-label" for="flexRadioDefault1">Male: </label>
			</div>
			<div class="form-check mb-3">
			  <input class="form-check-input" type="radio" name="gender" value="female" >
			  <label class="form-check-label" for="flexRadioDefault1">Female: </label>
			</div>
			<label>Hobby: </label>
			<div class="form-check">
			  <input class="form-check-input" type="checkbox" name="hobby" value="Chess" >
			  <label class="form-check-label">Chess</label>
			</div>
			<div class="form-check">
			  <input class="form-check-input" type="checkbox" name="hobby" value="Reading" >
			  <label class="form-check-label">Reading</label>
			</div>
			<div class="form-check mb-3">
			  <input class="form-check-input" type="checkbox" name="hobby" value="Cricket" >
			  <label class="form-check-label">Cricket</label>
			</div>
			<div>
				<input type="submit" class="btn btn-success" name="action" value="submit">
			</div>
		</form>
	</div>
</body>
</html>