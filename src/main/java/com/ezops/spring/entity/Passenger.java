package com.ezops.spring.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="passengers")
public class Passenger {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="passengerid")
	private int passengerid;
	
	@Column(name="survived")
	private int survived;
	
	@Column(name="passenger_class")
	private int passenger_class;
	
	@Column(name="name")
	private String name;
	
	@Column(name="sex")
	private String sex;
	
	@Column(name="age")
	private int age;
	
	@Column(name="sibsp")
	private int sibsp;
	
	@Column(name="parch")
	private int parch;
	
	@Column(name="ticket")
	private String ticket;
	
	@Column(name="fare")
	private double fare;
	
	@Column(name="cabin")
	private String cabin;
	
	@Column(name="embarked")
	private String embarked;

	public int getPassengerid() {
		return passengerid;
	}

	public void setPassengerid(int passengerid) {
		this.passengerid = passengerid;
	}

	public int getSurvived() {
		return survived;
	}

	public void setSurvived(int survived) {
		this.survived = survived;
	}

	public int getPassenger_class() {
		return passenger_class;
	}

	public void setPassenger_class(int passenger_class) {
		this.passenger_class = passenger_class;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public int getSibsp() {
		return sibsp;
	}

	public void setSibsp(int sibsp) {
		this.sibsp = sibsp;
	}

	public int getParch() {
		return parch;
	}

	public void setParch(int parch) {
		this.parch = parch;
	}

	public String getTicket() {
		return ticket;
	}

	public void setTicket(String ticket) {
		this.ticket = ticket;
	}

	public double getFare() {
		return fare;
	}

	public void setFare(double fare) {
		this.fare = fare;
	}

	public String getCabin() {
		return cabin;
	}

	public void setCabin(String cabin) {
		this.cabin = cabin;
	}

	public String getEmbarked() {
		return embarked;
	}

	public void setEmbarked(String embarked) {
		this.embarked = embarked;
	}

	@Override
	public String toString() {
		return "Passenger [passengerid=" + passengerid + ", name=" + name + ", sex=" + sex + ", age=" + age + "]";
	}
		
}





