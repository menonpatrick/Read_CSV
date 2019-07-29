package project.read.csv.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ReadController {
	
	@RequestMapping(method=RequestMethod.GET, value="/")
	public String start() {
		return "index";
	}
}
