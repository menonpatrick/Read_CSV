
# Read_CSV

This application reads the static content of titanic test data set that is read and displayed in a table format which can be edited.

## Description

To get started, all you have to do is just click "Display".
	- That will import the Titanic Test File and will display the table.
	- In order to edit, select any row and its contents will be displayed in the top column.
	- You can make your needful changes and once done, hit "Edit Row".
	- The data you have entered will display in the row you selected in the table.
  - You can also view the Pie chart and the Bar graph which describes the age of the first 100 people.

## Installation and Getting Started

Here is a quick teaser of a complete Spring Boot application in Java:

[source,java,indent=0]
----
	import org.springframework.boot.*;
	import org.springframework.boot.autoconfigure.*;
	import org.springframework.web.bind.annotation.*;

	@RestController
	@SpringBootApplication
	public class Example {

		@RequestMapping("/")
		public String start() {
			return "index";
		}

		public static void main(String[] args) {
			SpringApplication.run(Read_CSV.class, args);
		}

	}
----

### Running on Local Machine

In order to run this on your local machine, make sure you have the following:

* HTTP-Server [optional] [to be used if no IDE is used]
* Spring Boot MVC [IDE]
* Attached Resources


#### Downloading HTTP-Server

##### Open cmd/terminal and run the following commands
* $ npm install http-server -g
* $ cd <MyApp> // navigate to your application directory
* $ http-server
	
You'll see a set of IP addersses that you can enter in your URL in order to host your application in your browser


#### Downloading IDE

You need to install Spring Boot in your system and then import the project and run it.
Open your browser and go to localhost:/<port.number.you.configured>
You'll see your spring application running


#### Downloading Attached Resources

The major resourse you need is the titanic.csv [test] file which you can download from kaggle.com.
Keep in mind that there are a couple of images and icons that have been used and you might want to download it.


