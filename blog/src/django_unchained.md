## # <a name="chapter_01"></a>Getting to first base

> `HEADS UP!` A compilation of notes put together by a *searching...* while learning Django.

### WTF is Django?!

WTF is Django?! Who else is in a better position to oversell what Django is than the djangoproject&hellip;

> *Django, The web framework for perfectionists with deadlines.*

> *[- The Django Project](https://www.djangoproject.com/)*

Django is an free and open-source, MVC web framework, written in Python because [Django Reinhardt](https://en.wikipedia.org/wiki/Django_Reinhardt) could strum guitar strings.

> *Feel free to read the boaring history:*

> *[- The Django Book: Django's History](http://www.djangobook.com/en/2.0/chapter01.html#django-s-history)*

### Why Django?

Amongst other things, the [Django docs](https://www.djangoproject.com/start/overview/) claim that, with Django, you can take web apps from concept to launch in matter of hours - *<s>SHIT</s> - What? - I can hear you say that, and much, much more*.

No worries though, we are about to find out whether those claims are true.

### Introducing Djira

To sample Django&apos;s alleged rockin&apos; features, we will (assume issue trackers like [JIRA](getpocket.com) do not exist and) build **Djira**, a basic issue tracker. 

Here is a list of the basic goals:

- Display a list of a project's issues.
- Submit a project.
- Add issues to a project.
- Assign an owner to an issue.
- Assign a tag to an issue.

## # <a name="chapter_02"></a>Before losing the drawers

### How to install Django

#### Install Python

#### What Python version does Django play well with?

Django `v1.9` supports both 2.x and 3.x. 

> *Feel free to read the boaring details:* 

> *[- FAQ: Installation - Django documentation ](https://docs.djangoproject.com/en/1.9/faq/install/#faq-python-version-support)*

#### Prepping the database

Django is officially supported with [PostgreSQL](http://www.postgresql.org/), [MySQL](https://www.mysql.com/), [Oracle](http://www.oracle.com/), and [SQLite](https://www.sqlite.org/). Make sure that the database server you intend to use is properly installed.

> *Feel free to read the boaring details:*

> *[- Get your database running - Django Documentation](https://docs.djangoproject.com/en/1.9/topics/install/#database-installation)*

#### Install Django: The recommended way

1. Install [pip](https://pip.pypa.io/).
2. In your terminal, enter the command `pip install Django`.

> *Feel free to read the boaring details:*

> *[- Install the Django code - Django Documentation](https://docs.djangoproject.com/en/1.9/topics/install/#install-the-django-code)*

#### Verifying

Python needs to see Django; In your terminal, verify that it does:

    ~$ python
    >>> import Django
    >>> print(django.get_version())
    1.9

#### `TODO` Django-scaffold: A quickie (optional)

### If there's something strange... Who you gonna call?

There are plenty of areas to get help these day. Here&apos;s everyone&apos;s favorite.

> *[Stackoverflow](https://stackoverflow.com/questions/tagged/django): A website created for torturing innocent programmers. Who mistakenly enter into the site, because of Google.<sup>[[source]](https://www.urbandictionary.com/define.php?term=stackoverflow&defid=6910689)</sup>*

## # Creating a project

With our goals outlined, let's get started by creating a new project.  I like to put all my projects in a `~/workspace` directory.

    ~$ cd workspace/
    ~/workspace$ django-admin startproject djira

That'll create a directory `djira`, containing  the base files for a Django project. 

Let's look at what `startproject` created:

	---
	
	`TODO` ~/workspace/djira$ tree
	
	---    

These files are: 

- The outer `djira/` root directory is a container for your project. Feel free to change its name; Django doesn't give a damn.
- *Django&apos;s Swiss Army Knife*, `manage.py` let's you interact with your Django app from your terminal.
- The inner `djira/` directory is your actual project. Don't mess with this one's name; Django uses it as an import reference.
- An empty file `djira/__init__.py` tells Python to treat this directory as a Python package.
- The file `djira/settings.py` stores configurations about your app.
- Think of the `djira/urls.py` as a table of contents for your app.
- WSGI-compatible web servers use `djira/wsgi.py` as an entry point to serve your project.

### Dev-mode server

Know how it sometimes gets painful to set up a production server - such as Apache - just so you can test your app? 

Cry no more; those days are over. Django projects come with a lightweight dev-server. Yay! Now you can focus on building your app, not a server.

Let's verify that everything worked by starting the dev server.

    ~/workspace/djira$ python manage.py runserver
    Performing system checks...

    System check identified no issues (0 silenced).

    You have unapplied migrations; your app may not work properly until they are applied.
    Run 'python manage.py migrate' to apply them.
    
    May 01, 2016 - 21:10:28
    Django version 1.9, using settings 'djira.settings'
    Starting development server at http://127.0.0.1:8000/
    Quit the server with CONTROL-C.

If everything worked, we should see the **Welcome to Django** titled page at `locahost:8000`

> <strong>*What the heck is ... unapplied migrations ... ?*</strong>

> *You have unapplied migrations; your app may not work properly until they are applied.*
> <br> *Run 'python manage.py migrate' to apply them.*

Ignore the thing about unapplied migrations for now.

> `HEADS UP!` Also tried `$ python3 manage.py runserver` - didn't quite work well for me.

## # <a name="chapter_03"></a>Using ATDD to *poop* an MVP

> *Thoughts on whole finished app makes life seem too hard - break the ideas into chunks and life is a sinch.*

So, what's a **user story** for the simplest thing we can build that is still useful?

An *most-valuable-product (MVP)* issue tracker basically needs to let the user enter some issues, and remember them for their next visit. 

> *<strong>User story</strong>* describes functionality that will be valuable to either a user or purchaser of a system or software. A user story is used to structure a functional test.

### Creating an app

Our first chunk: the **lists** app. In your terminal run:

    ~/workspace/djira$ python manage.py startapp lists

That'll create the directory `lists` and its base files:

    ~/workspace/djira$ cd issues/
    ~/workspace/djira/issues$ tree
    |-- admin.py
    |-- apps.py
    |-- __init__.py
    |-- migrations
    |--     |-- __init__.py
    |-- models.py
    |-- tests.py
    |-- views.py

#### Project vs app: What's the difference?

> **Django's philosophy:** "apps" are a good way to structure your code.

The theory is: one project can have many, many, many apps; one's made 
by you or others. A project envelopes all those apps and their configurations.

> *Feel free to read the boaring details:*

> *[- Project vs apps - Django Project Documentation](https://goo.gl/Lo3tq2)*


## Outline 

* Part 1: Dive straight into building a simple web page using TDD
	* Start by writing functional testing - with Selenium, *Yay!*
	* Basics of Django - models, views, templates - with unit testing, *another Yay!*.

* Part 2: Some *shit* about web development.
	* Static files
	* Deployment to production
	* Form data validation - The Django way
	* Database migrations
	* JavaScript

* Part 3: Advanced *shit*
	* Mocking
	* Integrating thirdy party apps (an auth system)
	* Ajax
	* Test fixtures
	* Outside-in TDD and Continous Integration (CI)

## Reading tracebacks	

A brief aside on *reading tracebacks* from *unit tests*, since it's something we do a lot of in TDD. 

The following is a traceback terminal output with clues to lookout for:
	
	[...]
	======================================================================
	FAIL: testBasicExample (lists.tests.HomePageTest) #(1)
	----------------------------------------------------------------------
	Traceback (most recent call last):
	  File "/workspace/skynet/mathers/tests.py", line 7, in testBasicExample
		self.fail('Failing test example') #(2)
	AssertionError: Failing test example #(3)
	
	----------------------------------------------------------------------
	[...]

 - **`#(1)`** ***Which test is failing?*** An important thing to double check Make sure the test failing 
 is definitely the one you expect i.e. the one you just wrote.

 - **`#(2)`** Look for the place in ***the test code*** that kicked off the failure. In this case it's 
 the line where the `fail` function is being called.
 
- **`#(3)`** ***The error itself*** - sometimes this is all you need to see; sometimes its not quite self-evident.
### # Test-Driven Development Workflow

The TDD process, WTF?

> Test-driven development is a way of managing fear during programming. I don't mean fear in
a bad way - pow widdle prwogwammew needs a pacifiew - but fear in the legitimate, this-is-a-
hard-problem-and-I-can't-see-the-end-from-the-beginning sense. If pain is nature's way of
saying "Stop!" then fear is nature's way of saying "Be careful." Being careful is good, but fear
has a host of other effects.

> *TDD by example - Kent Beck*

The main aspects of the *overall* TDD process:

> Write a test. Run the test and see it fail. Write some minimal code to get it a little further. 
Re-run the tests and repeat until it passes. Then, optionally, refactor the code, using tests to make sure nothing 
is broken.

Overall TDD summary:

1. A failing test
2. Minimal code to make the failing test pass.
3. If need be, **refactor**.

How does the *overall TDD process* apply when we have **functional tests** and **unit tests**?

> Write a functional test and see it fail. Write one or more unit tests, and corresponding production code 
until the unit tests pass. Check that the functional test gets a little further - write a bit more of the application.

In summary:

1. A failing functional test
2. Unit test(s) / code cycle  until all unit tests are green.
3. For a green functional test - if need be, refactor.

> *<strong>Functional tests</strong> (also acceptance tests) attempt to ask/answer the question does this 
code meet the requirements of the client? This should help you build an
application with the right functionality, and guarantee you never accidentally break it.*

> *<strong>Unit tests</strong> are tiny bots that go over your classes, and methods with a fine tooth comb 
ensuring that every piece of code works exactly like you expect.
This should help you to write code that&apos;s clean and bug free.*

> *<strong>Refactoring</strong> occurs when code is changed to be made better without changing what it is actually doing.*

Refactoring, in the context of functional tests? Functional tests stand to check that the behavior of the app has been 
preserved after refactoring.


## # "Don't test constants" - The Rule 

> Unit tests are really about testing logic, flow control and configuration. Making assertions about exactly what sequence of characters we have in our HTML strings isn't doing that.

> *- Test-Driven Web Development by Harry Percival*

Currently, our unit tests `lists/tests.py`:
		
	def testRootUrlResolvesHomePageView(self):
		found = resolve('/')
		self.assertEqual(found.func, homePage) #(1)

And, our views `lists/views.py`:

	from django.shortcuts import render
	from django.http import HttpResponse
	
	def homePage(request):
		return HttpResponse('<html><title>To-Do lists</title></html>') #(2)

* **`#(1)`**  Looks for a specific html returned by a `HttpResponse` in `#(2)`

* **`#(2)`**  There is a much Django way of doing this... its called **templates**.

> **Django's philosophy**: the template system is meant to express presentation, not program logic. 

Templates are a convenient way to generate HTML dynamically. Their super power, substituting Python variables with HTML content

> *Feel free to read the boaring details:*

> *[- Project vs apps - Django Project Documentation](https://goo.gl/Lo3tq2)*


### Testing in Django
		
The following test, checks if the correct home page view is returned.

		def testHomePageReturnsCorrectHtml(self):
			request = HttpRequest()
			response = homePage(request)
			self.assertTrue(response.content.startswith(b'<html>')) #(1)
			self.assertIn(b'<title>To-Do lists</title>', response.content)
			self.assertTrue(response.content.endswith(b'</html>'))
			
		[...]
		
		table = self.browser.find_element_by_id('listTable')
			rows = table.find_elements_by_tag_name('tr')
			self.assertTrue(any(row.text == '1. READ Dive into Python (2004) by Mark Pilgrim' for row in rows)) #(2)

* **`#(1)`** `assertsTrue` whether `response.content` returns a raw binary string - 
   not a python string - hence the `b` character is being used to compare 
   them.			

* **`#(2)`** The method `any`: returns true if any element of the iterable is true.
### Practical Unit Testing 101

Things already covered:

* Unit tests - small tests; keep your code clean, and bug free.

#### Structure of a Unit Test

A shopping basket scenario - get total items in a basket.
	
	public class BasketTest {
	
		public void testGetBasketTotal() {
			Basket basket = new Basket();
			basket.add("Ketchup", 3);
			basket.add("Heineken", 2);
			
			expectedTotal = basket.getTotal();
			
			assertEquals(5, expectedTotal);
		}
		
	}
		
> The line spacing in the test... 3 groups... In the beginning - *set-up* the test, in the middle - *exercise* - call the function under test - `basket.getTotal()` - *assertion* - in the end.
