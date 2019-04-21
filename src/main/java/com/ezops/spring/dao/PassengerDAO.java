package com.ezops.spring.dao;

import java.util.List;
import com.ezops.spring.entity.Passenger;

public interface PassengerDAO {

	public List<Passenger> getPassengers();

	public void savePassenger(Passenger theCustomer);

	public Passenger getPassenger(int theId);

	public void deletePassenger(int theId);
	
	public List<Passenger> getPassengersByFilter(Passenger passenger);
	
}
