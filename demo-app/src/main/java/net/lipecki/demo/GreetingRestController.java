package net.lipecki.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingRestController {

	@RequestMapping("/greeting")
	public String greeting() {
		return "Welcome!";
	}

}
