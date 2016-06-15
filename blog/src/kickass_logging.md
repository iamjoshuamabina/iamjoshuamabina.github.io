## # Logging: Basics and Best Practices.

> **`Heads up!`** Code samples are in **Awesome** - because it is **Java**.

Long, long time ago, a group of very smart people, [IETF](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) decided that *it is not valuable* that developers write their own code for *<strong>ad hoc</strong> latin for <strong>"for this"</strong> project* logging system. So, **syslog** was born - a message logging standard that - *has its own wikipedia page<sup> [[source]](https://goo.gl/fx1x31)</sup>.*

> **`In computing:`**

> - **Logfile** keeps records of events happening on your GNU/Linux or else OS. 

> - **Logging** is an <s>act</s> art of keeping the logfile.

> *Feel free to read the more boaring <strong>`...`</strong> at [Logfile - Wikipedia](https://en.wikipedia
.org/wiki/Logfile)*


### # Logging is an art ...?

> Logging is an art? Art as in Pablo Picasso, Ludwig Van Bethoven, Edward Irving Ludwig etc. are like a bunch of 0s and 1s throwing messages to a file.

*I must say, it's pretty hard to know who's sane these days.*

> *Vision is the art of seeing what is invisible to others.* 

> *[-- Jonathan Swift](https://www.brainyquote.com/search_results.html?q=art)*

**`TODO`** Logging is an art not because **`...`**

Logging is an art because - **knowing** - *what (activity) and how (level) to log activities* needs some goddamn Picasso skills. Main issue here is, logging affects an application's performance - app's shit the bed when they are run in `DEBUG` mode.

### # Why do we need a logging API?

It is easy to argue that `System.out.println()` is logging for free. So, `java.logging.API`? Martin fowler explains, if you are going to print it to the console, write a test for it - So I can't really say to know what is not working when I am writing code. I think the
 real value for logging is experienced when I a software is already in production. Sometimes, issues are overlooked 
 while writing automated tests - those bugs that break free and see the light of day - will, hopefully leave traces. 
 These traces will be recorded, so now, developers could easily debug systems and make a the world a better place.
 
### # Why do we need different logging levels?

`DEBUG`, `INFO`, `WARN` and `ERROR` - hallmarks of logging levels. Each log level serves a different purpose - 
*(Arggh!! Obviously)* - based on how critical the information/message you are logging is.

> **`Heads up!`** Never, ever **`...`** ever - use the `DEBUG` level in a **PRODUCTION** artifact.

### # Using the Java logging API

	/* imports ... */
	
	public class Main {
		private static final Logger LOGGER 
				= Logger.getLogger(Main.class.getName()); ........... #1
		
		public static void main(String[] args) {
			LOGGER.log(Level.INFO, "Awesome INFO log message"); ..... #2
		}
	}
	
* **`#1.`** First things, first... This line declares the Logger object. The *Logger* object is used to log *system-specific* messages - in this case, the system is the **`Main.class`**

* **`#2.`** Line 2, logs an INFO level message.


### # Upcoming

* What information should you log?

* Choosing the right logging Level.

* Logger vs. System.out.println
