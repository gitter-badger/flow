Smalltalk createPackage: 'Flow-Templates-Tests'!
BindingController subclass: #StuffController
	instanceVariableNames: ''
	package: 'Flow-Templates-Tests'!
!StuffController commentStamp!
StuffController is a Controller composed by ThingControllers that are created based in the model's content.

Stuff has a collection of Thing(s)!

!StuffController methodsFor: 'accessing'!

inspiration
	"Answers a collection to inspire a name for something."
	
	^ #(
	so 
	many 
	cool 
	things 
	here 
	wow 
	great 
 	sweet 
	groovy 
	)
! !

!StuffController methodsFor: 'actions'!

addThing
	
	self model things add: self newThing.
	self refresh.
!

newThing

	^ Thing new
		name: self inspiration atRandom;
		yourself
!

refresh

	(self controllerAt: 'things') refresh
!

removeThing
	
	self model things removeLast.
	self refresh
! !

!StuffController methodsFor: 'reactions'!

onAfterModel
	"The model of this controller just have been set."

	super onAfterModel.
	
	self model when: #changed do:[ self onStuffChanged ].

	self hasView ifTrue:[
		self onStuffChanged ].
		
	"Customize the model"
	self model name: 'Hey... this stuff is new!!'.
	"Silently add something so by default it isn't empty."
	self model things add: self newThing; add: self newThing.
!

onStuffChanged
		
	self ifAbsentAt: 'things' 
		put: [
			"Lazy creation of the list controller for the thumbnails"
			(ListController 
				for: model 
				on: self 
				appendingTo: '.things' asJQuery)
					getItemsBlock: [:m| m things ];
					itemControllerClass: ThingController;
					yourself].
	self refresh
!

onTemplate: data

	super onTemplate: data.
	
	self onStuffChanged
! !

!StuffController class methodsFor: 'accessing'!

defaultModel

	^ Stuff new
!

viewPath
	"Returns the path where the template of the view should be found"
	
	^ 'bower_components/text/text!!views/demo/'
! !

BindingController subclass: #StuffUsingEachController
	instanceVariableNames: ''
	package: 'Flow-Templates-Tests'!
!StuffUsingEachController commentStamp!
StuffController is a Controller composed by ThingControllers that are created based in the model's content.

Stuff has a collection of Thing(s)!

!StuffUsingEachController methodsFor: 'actions'!

addThing
	
	self model things add: self class newThing
!

newThing

	^ Thing new
		name: self inspiration atRandom;
		yourself
!

removeThing
	
	self model things removeLast
! !

!StuffUsingEachController class methodsFor: 'accessing'!

defaultModel

	^ self newStuff
!

inspiration
	"Answers a collection to inspire a name for something."
	
	^ #(
	so 
	many 
	cool 
	things 
	here 
	wow 
	great 
 	sweet 
	groovy 
	)
!

viewPath
	"Returns the path where the template of the view should be found"
	
	^ 'bower_components/text/text!!views/demo/'
! !

!StuffUsingEachController class methodsFor: 'actions'!

newStuff

	| stuff |
	
	stuff := Stuff new
				name: 'Hey... this stuff is new!!';
				yourself.
				
	stuff things add: self newThing; add: self newThing.
	^ stuff
!

newThing

	^ Thing new
		name: self inspiration atRandom;
		yourself
! !

StuffUsingEachController subclass: #StuffComposedUsingEachController
	instanceVariableNames: ''
	package: 'Flow-Templates-Tests'!

!StuffComposedUsingEachController methodsFor: 'reactions'!

configureAndBind

	super configureAndBind
!

onTemplate: data

	super onTemplate: data.
		
	self ifAbsentAt: 'things' 
		put: [
			"Lazy creation of the iterated controller for the things in stuff"
			(IteratedController 
				for: model 
				on: self
				appendingTo: '.listOfThings' asJQuery)
					itemControllerClass: ThingController;
					templateUri: (TemplateController viewPath, 'demo/ListOfThings.html');
					yourself].

	(self controllerAt: 'things') render
! !

BindingController subclass: #ThingController
	instanceVariableNames: ''
	package: 'Flow-Templates-Tests'!

!ThingController class methodsFor: 'accessing'!

viewPath
	"Returns the path where the template of the view should be found"
	
	^ 'bower_components/text/text!!views/demo/'
! !

