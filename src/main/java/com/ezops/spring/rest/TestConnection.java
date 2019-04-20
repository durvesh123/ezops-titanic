package com.ezops.spring.rest;

import java.sql.Connection;
import java.sql.DriverManager;

public class TestConnection {
	
	public static void main(String[] args) {
		try {
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/titanic","root","12345678");
			System.out.println("Sucess");
		}catch(Exception e) {
			System.out.println(e.getMessage());
		}
	}

}
