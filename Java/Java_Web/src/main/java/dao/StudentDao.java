package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;

import connection.DBConnection;
import model.Student;

public class StudentDao {
	public static void insertStudent(Student s) {
		try {
			Connection conn = DBConnection.createConnection();
			String sql =  "insert into student(fname,lname,email,mobile,pwd,course,gender,hobby) values(?,?,?,?,?,?,?,?)";
			PreparedStatement pst = conn.prepareStatement(sql);
			pst.setString(1, s.getFname());
			pst.setString(2, s.getLname());
			pst.setString(3, s.getEmail());
			pst.setLong(4, s.getMobile());
			pst.setString(5, s.getPwd());
			pst.setString(6, s.getCourse());
			pst.setString(7, s.getGender());
			pst.setString(8, s.getHobby());
            pst.executeUpdate();
            System.out.println("data inserted");
        } 
		catch (Exception e) {
            e.printStackTrace();
        }
		
	}
}
