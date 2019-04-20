package com.ezops.spring.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ezops.spring.entity.Passenger;
import com.ezops.spring.service.PassengerService;

@RestController
@RequestMapping("/api")
public class PassengerRESTController {

	@Autowired
	private PassengerService passengerService;

	@GetMapping("/passengers")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Passenger> getPassengers() {
		return passengerService.getPassengers();
	}
	
	@GetMapping("/passengers/{passengerid}")
	@CrossOrigin(origins = "http://localhost:3000")
	public Passenger getPassenger(@PathVariable int passengerid) {
		Passenger passenger = passengerService.getPassenger(passengerid);
		return passenger;
	}

}
