package com.ezops.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.ezops.spring.dao.PassengerDAO;
import com.ezops.spring.entity.Passenger;

@Service
public class PassengerServiceImpl implements PassengerService {

	// need to inject customer dao
	@Autowired
	private PassengerDAO customerDAO;
	
	@Override
	@Transactional
	public List<Passenger> getPassengers() {
		return customerDAO.getPassengers();
	}

	@Override
	@Transactional
	public void savePassenger(Passenger theCustomer) {

		customerDAO.savePassenger(theCustomer);
	}

	@Override
	@Transactional
	public Passenger getPassenger(int theId) {
		
		return customerDAO.getPassenger(theId);
	}

	@Override
	@Transactional
	public void deletePassenger(int theId) {
		
		customerDAO.deletePassenger(theId);
	}

	@Override
	@Transactional
	public List<Passenger> getPassengersByFilter(Passenger passenger) {
		return customerDAO.getPassengersByFilter(passenger);
	}
}





