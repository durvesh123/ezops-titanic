package com.ezops.spring.service;

import java.util.List;
import com.ezops.spring.entity.Passenger;

public interface PassengerService {

	public List<Passenger> getPassengers();

	public void savePassenger(Passenger theCustomer);

	public Passenger getPassenger(int theId);

	public void deletePassenger(int theId);
	
}
