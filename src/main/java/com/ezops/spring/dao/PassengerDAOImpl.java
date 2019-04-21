package com.ezops.spring.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.ezops.spring.entity.Passenger;

@Repository
public class PassengerDAOImpl implements PassengerDAO {

	// need to inject the session factory
	@Autowired
	private SessionFactory sessionFactory;
			
	@Override
	public List<Passenger> getPassengers() {
		
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
				
		// create a query  ... sort by last name
		Query<Passenger> theQuery = 
				currentSession.createQuery("from Passenger order by passengerid",
											Passenger.class);
		
		// execute query and get result list
		List<Passenger> customers = theQuery.getResultList();
				
		// return the results		
		return customers;
	}

	@Override
	public void savePassenger(Passenger theCustomer) {

		// get current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		
		// save/upate the customer ... finally LOL
		currentSession.saveOrUpdate(theCustomer);
		
	}

	@Override
	public Passenger getPassenger(int theId) {

		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		
		// now retrieve/read from database using the primary key
		Passenger theCustomer = currentSession.get(Passenger.class, theId);
		
		return theCustomer;
	}

	@Override
	public void deletePassenger(int theId) {

		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		
		// delete object with primary key
		Query theQuery = 
				currentSession.createQuery("delete from passengers where passengerid=:passengerid");
		theQuery.setParameter("passengerid", theId);
		
		theQuery.executeUpdate();		
	}

	@Override
	public List<Passenger> getPassengersByFilter(Passenger passenger) {
		
		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();
		
		// create a query  ... sort by last name
		String sex = passenger.getSex();
		int passenger_class = passenger.getPassenger_class();
		String name = passenger.getName();
		
		Query<Passenger> theQuery = currentSession.createQuery("from Passenger where sex = :sex "
				+ "and passenger_class = :passenger_class and name = :name", 
				Passenger.class);
		
		theQuery.setParameter("sex", sex);
		theQuery.setParameter("passenger_class", passenger_class);
		theQuery.setParameter("name", name);
		
		// execute query and get result list
		List<Passenger> customers = theQuery.getResultList();
					
		System.out.println("--------------------"+customers+"--------------------");
		// return the results		
		return customers;
		
	}
	
	

}











