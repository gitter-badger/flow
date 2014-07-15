define("app/Flow-API", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Exceptions", "app/MiniMapless"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('Flow-API');
smalltalk.packages["Flow-API"].transport = {"type":"amd","amdNamespace":"app"};

smalltalk.addClass('API', globals.Object, [], 'Flow-API');


smalltalk.addClass('RESTfulAPI', globals.API, [], 'Flow-API');
smalltalk.addMethod(
smalltalk.method({
selector: "delete:do:onError:",
protocol: 'actions',
fn: function (anURLString,aBlock,errorBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._trigger_("aboutToAJAX");
$ctx1.sendIdx["trigger:"]=1;
_st(jQuery)._ajax_options_(anURLString,globals.HashedCollection._newFromPairs_(["type","DELETE","contentType","text/json","complete",(function(res){
return smalltalk.withContext(function($ctx2) {
self._trigger_("afterAJAX");
$1=_st(_st(res)._status()).__eq((200));
if(smalltalk.assert($1)){
return _st(aBlock)._value_(_st(res)._responseText());
$ctx2.sendIdx["value:"]=1;
} else {
return _st(errorBlock)._value_(res);
};
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)})})]));
return self}, function($ctx1) {$ctx1.fill(self,"delete:do:onError:",{anURLString:anURLString,aBlock:aBlock,errorBlock:errorBlock},globals.RESTfulAPI)})},
args: ["anURLString", "aBlock", "errorBlock"],
source: "delete: anURLString do: aBlock onError: errorBlock\x0a\x0a\x09self trigger: 'aboutToAJAX'.\x0a\x0a\x09jQuery ajax: anURLString options: #{\x0a\x09\x09'type' -> 'DELETE'.\x0a\x09\x09'contentType' -> 'text/json'.\x0a\x09\x09'complete' -> [:res |\x0a\x09\x09\x09self trigger: 'afterAJAX'.\x0a\x09\x09\x09res status = 200\x0a\x09\x09\x09\x09ifTrue: [aBlock value: res responseText]\x0a\x09\x09\x09\x09ifFalse: [errorBlock value: res]]\x0a\x09}",
messageSends: ["trigger:", "ajax:options:", "ifTrue:ifFalse:", "=", "status", "value:", "responseText"],
referencedClasses: []
}),
globals.RESTfulAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "get:do:onError:",
protocol: 'actions',
fn: function (anURLString,aBlock,errorBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._trigger_("aboutToAJAX");
$ctx1.sendIdx["trigger:"]=1;
_st(jQuery)._ajax_options_(anURLString,globals.HashedCollection._newFromPairs_(["type","GET","contentType","text/json","complete",(function(res){
return smalltalk.withContext(function($ctx2) {
self._trigger_("afterAJAX");
$1=_st(_st(res)._status()).__eq((200));
if(smalltalk.assert($1)){
$2=_st(res)._responseText();
$ctx2.sendIdx["responseText"]=1;
return _st(aBlock)._value_($2);
$ctx2.sendIdx["value:"]=1;
} else {
return _st(errorBlock)._value_(_st(res)._responseText());
};
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)})})]));
return self}, function($ctx1) {$ctx1.fill(self,"get:do:onError:",{anURLString:anURLString,aBlock:aBlock,errorBlock:errorBlock},globals.RESTfulAPI)})},
args: ["anURLString", "aBlock", "errorBlock"],
source: "get: anURLString do: aBlock onError: errorBlock\x0a\x0a\x09self trigger: 'aboutToAJAX'.\x0a\x0a\x09jQuery ajax: anURLString options: #{\x0a\x09\x09'type' -> 'GET'.\x0a\x09\x09'contentType' -> 'text/json'.\x0a\x09\x09'complete' -> [:res |\x0a\x09\x09\x09self trigger: 'afterAJAX'.\x0a\x09\x09\x09res status = 200\x0a\x09\x09\x09\x09ifTrue: [aBlock value: res responseText]\x0a\x09\x09\x09\x09ifFalse: [errorBlock value: res responseText]]\x0a\x09}",
messageSends: ["trigger:", "ajax:options:", "ifTrue:ifFalse:", "=", "status", "value:", "responseText"],
referencedClasses: []
}),
globals.RESTfulAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "post:data:do:onError:",
protocol: 'actions',
fn: function (anURLString,aDataString,aBlock,errorBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._trigger_("aboutToAJAX");
$ctx1.sendIdx["trigger:"]=1;
_st(jQuery)._ajax_options_(anURLString,globals.HashedCollection._newFromPairs_(["type","POST","contentType","text/json","data",aDataString,"complete",(function(res){
return smalltalk.withContext(function($ctx2) {
self._trigger_("afterAJAX");
$1=_st(_st(res)._status()).__eq((200));
if(smalltalk.assert($1)){
return _st(aBlock)._value_(_st(res)._responseText());
$ctx2.sendIdx["value:"]=1;
} else {
return _st(errorBlock)._value_(res);
};
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)})})]));
return self}, function($ctx1) {$ctx1.fill(self,"post:data:do:onError:",{anURLString:anURLString,aDataString:aDataString,aBlock:aBlock,errorBlock:errorBlock},globals.RESTfulAPI)})},
args: ["anURLString", "aDataString", "aBlock", "errorBlock"],
source: "post: anURLString data: aDataString do: aBlock onError: errorBlock\x0a\x0a\x09self trigger: 'aboutToAJAX'.\x0a\x0a\x09jQuery ajax: anURLString options: #{\x0a\x09\x09'type' -> 'POST'.\x0a\x09\x09'contentType' -> 'text/json'.\x0a\x09\x09'data' -> aDataString.\x0a\x09\x09'complete' -> [:res |\x0a\x09\x09\x09self trigger: 'afterAJAX'.\x0a\x09\x09\x09res status = 200\x0a\x09\x09\x09\x09ifTrue: [aBlock value: res responseText]\x0a\x09\x09\x09\x09ifFalse: [errorBlock value: res]]\x0a\x09}",
messageSends: ["trigger:", "ajax:options:", "ifTrue:ifFalse:", "=", "status", "value:", "responseText"],
referencedClasses: []
}),
globals.RESTfulAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "put:data:do:onError:",
protocol: 'actions',
fn: function (anURLString,aDataString,aBlock,errorBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._trigger_("aboutToAJAX");
$ctx1.sendIdx["trigger:"]=1;
_st(jQuery)._ajax_options_(anURLString,globals.HashedCollection._newFromPairs_(["type","PUT","contentType","text/json","data",aDataString,"complete",(function(res){
return smalltalk.withContext(function($ctx2) {
self._trigger_("afterAJAX");
$1=_st(_st(res)._status()).__eq((200));
if(smalltalk.assert($1)){
return _st(aBlock)._value_(_st(res)._responseText());
$ctx2.sendIdx["value:"]=1;
} else {
return _st(errorBlock)._value_(res);
};
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)})})]));
return self}, function($ctx1) {$ctx1.fill(self,"put:data:do:onError:",{anURLString:anURLString,aDataString:aDataString,aBlock:aBlock,errorBlock:errorBlock},globals.RESTfulAPI)})},
args: ["anURLString", "aDataString", "aBlock", "errorBlock"],
source: "put: anURLString data: aDataString do: aBlock onError: errorBlock\x0a\x0a\x09self trigger: 'aboutToAJAX'.\x0a\x0a\x09jQuery ajax: anURLString options: #{\x0a\x09\x09'type' -> 'PUT'.\x0a\x09\x09'contentType' -> 'text/json'.\x0a\x09\x09'data' -> aDataString.\x0a\x09\x09'complete' -> [:res |\x0a\x09\x09\x09self trigger: 'afterAJAX'.\x0a\x09\x09\x09res status = 200\x0a\x09\x09\x09\x09ifTrue: [aBlock value: res responseText]\x0a\x09\x09\x09\x09ifFalse: [errorBlock value: res]]\x0a\x09}",
messageSends: ["trigger:", "ajax:options:", "ifTrue:ifFalse:", "=", "status", "value:", "responseText"],
referencedClasses: []
}),
globals.RESTfulAPI);



smalltalk.addClass('WebSocketAPI', globals.API, ['socket', 'uri', 'onOpenBlock', 'onCloseBlock', 'onMessageBlock', 'onErrorBlock'], 'Flow-API');
smalltalk.addMethod(
smalltalk.method({
selector: "connect",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isConnected();
if(smalltalk.assert($1)){
return self;
};
self._disconnect();
self._initializeSocket();
return self}, function($ctx1) {$ctx1.fill(self,"connect",{},globals.WebSocketAPI)})},
args: [],
source: "connect\x0a\x09\x22Makes a connection.\x0a\x09Remarks:\x0a\x091. if connected already, it will do nothing\x0a\x092. it will disconnect if there is an unconnected socket.\x22\x0a\x0a\x09self isConnected ifTrue:[ ^self ].\x0a\x0a\x09self disconnect.\x0a\x09self initializeSocket.\x0a\x09",
messageSends: ["ifTrue:", "isConnected", "disconnect", "initializeSocket"],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "disconnect",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._hasSocket();
if(smalltalk.assert($1)){
_st(self["@socket"])._close();
self._reset();
};
return self}, function($ctx1) {$ctx1.fill(self,"disconnect",{},globals.WebSocketAPI)})},
args: [],
source: "disconnect\x0a\x09\x22Disconnects the web socket.\x0a\x09No fail if there is none\x22\x0a\x09\x0a\x09self hasSocket ifTrue:[\x0a\x09\x09socket close.\x0a\x09\x09self reset]",
messageSends: ["ifTrue:", "hasSocket", "close", "reset"],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "hasNotSocket",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@socket"]).__eq(nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasNotSocket",{},globals.WebSocketAPI)})},
args: [],
source: "hasNotSocket\x0a\x09^ socket = nil\x0a\x09",
messageSends: ["="],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "hasSocket",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._hasNotSocket())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasSocket",{},globals.WebSocketAPI)})},
args: [],
source: "hasSocket\x0a\x09^ self hasNotSocket not",
messageSends: ["not", "hasNotSocket"],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.WebSocketAPI.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
_st(window)._onbeforeunload_((function(){
return smalltalk.withContext(function($ctx2) {
return self._reset();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.WebSocketAPI)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09window onbeforeunload:[\x0a\x09\x09self reset ]",
messageSends: ["initialize", "onbeforeunload:", "reset"],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSocket",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._newWebSocketOn_(self._uri());
_st($2)._onopen_(self._onOpenBlock());
_st($2)._onclose_(self._onCloseBlock());
_st($2)._onmessage_(self._onMessageBlock());
_st($2)._onerror_(self._onErrorBlock());
$3=_st($2)._yourself();
self["@socket"]=$3;
$1=self["@socket"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeSocket",{},globals.WebSocketAPI)})},
args: [],
source: "initializeSocket\x0a\x09\x0a\x09^ socket := (self newWebSocketOn: self uri)\x0a\x09\x09\x09\x09\x09onopen: self onOpenBlock;\x0a\x09\x09\x09\x09\x09onclose: self onCloseBlock;\x0a\x09\x09\x09\x09\x09onmessage: self onMessageBlock;\x0a\x09\x09\x09\x09\x09onerror: self onErrorBlock;\x0a\x09\x09\x09\x09\x09yourself\x09",
messageSends: ["onopen:", "newWebSocketOn:", "uri", "onOpenBlock", "onclose:", "onCloseBlock", "onmessage:", "onMessageBlock", "onerror:", "onErrorBlock", "yourself"],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeURI",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@uri"]=_st("ws://".__comma(_st(_st(window)._location())._hostname())).__comma(":21004/");
$ctx1.sendIdx[","]=1;
$1=self["@uri"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeURI",{},globals.WebSocketAPI)})},
args: [],
source: "initializeURI\x0a\x0a\x09^ uri := 'ws://',window location hostname,':21004/'",
messageSends: [",", "hostname", "location"],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "isConnected",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._hasSocket())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self["@socket"])._readyState()).__eq((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isConnected",{},globals.WebSocketAPI)})},
args: [],
source: "isConnected\x0a\x0a\x09^ self hasSocket and:[\x0a\x09socket readyState = 1 ]",
messageSends: ["and:", "hasSocket", "=", "readyState"],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "isDisconnected",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._hasSocket())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self["@socket"])._readyState()).__tild_eq((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isDisconnected",{},globals.WebSocketAPI)})},
args: [],
source: "isDisconnected\x0a\x0a\x09^ self hasSocket or:[\x0a\x09socket readyState ~= 1 ]",
messageSends: ["or:", "hasSocket", "~=", "readyState"],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "newWebSocketOn:",
protocol: 'actions',
fn: function (anUri){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new WebSocket(anUri);
return self}, function($ctx1) {$ctx1.fill(self,"newWebSocketOn:",{anUri:anUri},globals.WebSocketAPI)})},
args: ["anUri"],
source: "newWebSocketOn: anUri\x0a\x0a\x09<return new WebSocket(anUri)>\x0a\x09",
messageSends: [],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "onCloseBlock",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@onCloseBlock"];
if(($receiver = $2) == null || $receiver.isNil){
self["@onCloseBlock"]=(function(){
return smalltalk.withContext(function($ctx2) {
return self._reset();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})});
$1=self["@onCloseBlock"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"onCloseBlock",{},globals.WebSocketAPI)})},
args: [],
source: "onCloseBlock\x0a\x0a\x09^ onCloseBlock ifNil:[ onCloseBlock := [ self reset ] ]",
messageSends: ["ifNil:", "reset"],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "onCloseBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@onCloseBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "onCloseBlock: aBlock\x0a\x0a\x09onCloseBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "onErrorBlock",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@onErrorBlock"];
if(($receiver = $2) == null || $receiver.isNil){
self["@onErrorBlock"]=(function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x)._signal();
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)})});
$1=self["@onErrorBlock"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"onErrorBlock",{},globals.WebSocketAPI)})},
args: [],
source: "onErrorBlock\x0a\x0a\x09^ onErrorBlock ifNil:[ onErrorBlock := [ :x | x signal ] ]",
messageSends: ["ifNil:", "signal"],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "onErrorBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@onErrorBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "onErrorBlock: aBlock\x0a\x0a\x09onErrorBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "onMessage:",
protocol: 'reactions',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._trigger_with_("messageReceived:",anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"onMessage:",{anEvent:anEvent},globals.WebSocketAPI)})},
args: ["anEvent"],
source: "onMessage: anEvent\x0a\x09\x0a\x09self trigger: 'messageReceived:' with: anEvent",
messageSends: ["trigger:with:"],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "onMessageBlock",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@onMessageBlock"];
if(($receiver = $2) == null || $receiver.isNil){
self["@onMessageBlock"]=(function(anEvent){
return smalltalk.withContext(function($ctx2) {
return self._onMessage_(anEvent);
}, function($ctx2) {$ctx2.fillBlock({anEvent:anEvent},$ctx1,2)})});
$1=self["@onMessageBlock"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"onMessageBlock",{},globals.WebSocketAPI)})},
args: [],
source: "onMessageBlock\x0a\x0a\x09^ onMessageBlock ifNil:[ onMessageBlock := [:anEvent | self onMessage: anEvent ] ]",
messageSends: ["ifNil:", "onMessage:"],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "onMessageBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@onMessageBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "onMessageBlock: aBlock\x0a\x0a\x09onMessageBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "onOpenBlock",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@onOpenBlock"];
if(($receiver = $2) == null || $receiver.isNil){
self["@onOpenBlock"]=(function(){
return smalltalk.withContext(function($ctx2) {
return self._trigger_("webSocketConnected");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})});
$1=self["@onOpenBlock"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"onOpenBlock",{},globals.WebSocketAPI)})},
args: [],
source: "onOpenBlock\x0a\x0a\x09^ onOpenBlock ifNil:[ onOpenBlock := [ self trigger: 'webSocketConnected' ] ]",
messageSends: ["ifNil:", "trigger:"],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "onOpenBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@onOpenBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "onOpenBlock: aBlock\x0a\x0a\x09onOpenBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
protocol: 'actions',
fn: function (){
var self=this;
self["@socket"]=nil;
return self},
args: [],
source: "reset\x0a\x09\x09\x0a\x09socket := nil",
messageSends: [],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "send:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._socket())._send_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"send:",{aString:aString},globals.WebSocketAPI)})},
args: ["aString"],
source: "send: aString\x0a\x09\x22Sends aString to the other side of the wire.\x22\x0a\x09\x0a\x09^ self socket send: aString",
messageSends: ["send:", "socket"],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "send:onError:",
protocol: 'actions',
fn: function (aString,aBlock){
var self=this;
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._socket())._send_(aString);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._on_do_($Error(),(function(x){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(x);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"send:onError:",{aString:aString,aBlock:aBlock},globals.WebSocketAPI)})},
args: ["aString", "aBlock"],
source: "send: aString onError: aBlock\x0a\x09\x22Sends aString to the other side of the wire.\x0a\x09Evaluates aBlock if an exception happnes.\x22\x0a\x0a\x09^ [ self socket send: aString ]\x0a\x09\x09on: Error\x0a\x09\x09do:[ :x | aBlock value: x ]",
messageSends: ["on:do:", "send:", "socket", "value:"],
referencedClasses: ["Error"]
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "sendCommand:",
protocol: 'actions',
fn: function (aCommand){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._send_(_st(aCommand)._asJSONString());
return $1;
}, function($ctx1) {$ctx1.fill(self,"sendCommand:",{aCommand:aCommand},globals.WebSocketAPI)})},
args: ["aCommand"],
source: "sendCommand: aCommand\x0a\x09\x22Sends aCommand to the other side of the wire.\x22\x0a\x09\x0a\x09^ self send: aCommand asJSONString",
messageSends: ["send:", "asJSONString"],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "socket",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@socket"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._initializeSocket();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"socket",{},globals.WebSocketAPI)})},
args: [],
source: "socket\x0a\x0a\x09^ socket ifNil:[ self initializeSocket ]",
messageSends: ["ifNil:", "initializeSocket"],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "uri",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@uri"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._initializeURI();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"uri",{},globals.WebSocketAPI)})},
args: [],
source: "uri\x0a\x0a\x09^ uri ifNil:[ self initializeURI ]",
messageSends: ["ifNil:", "initializeURI"],
referencedClasses: []
}),
globals.WebSocketAPI);

smalltalk.addMethod(
smalltalk.method({
selector: "uri:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@uri"]=aString;
return self},
args: ["aString"],
source: "uri: aString\x0a\x0a\x09uri := aString",
messageSends: [],
referencedClasses: []
}),
globals.WebSocketAPI);



smalltalk.addClass('APIError', globals.Error, [], 'Flow-API');


smalltalk.addClass('Client', globals.Object, ['rest', 'webSocket'], 'Flow-API');
smalltalk.addMethod(
smalltalk.method({
selector: "connect",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._webSocket())._connect();
return self}, function($ctx1) {$ctx1.fill(self,"connect",{},globals.Client)})},
args: [],
source: "connect\x0a\x0a\x09self webSocket connect",
messageSends: ["connect", "webSocket"],
referencedClasses: []
}),
globals.Client);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWebSocket",
protocol: 'initialization',
fn: function (){
var self=this;
function $WebSocketAPI(){return globals.WebSocketAPI||(typeof WebSocketAPI=="undefined"?nil:WebSocketAPI)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($WebSocketAPI())._new();
_st($2)._when_do_("messageReceived:",(function(ev,args){
return smalltalk.withContext(function($ctx2) {
return self._onMessage_with_(ev,args);
}, function($ctx2) {$ctx2.fillBlock({ev:ev,args:args},$ctx1,1)})}));
$3=_st($2)._yourself();
self["@webSocket"]=$3;
$1=self["@webSocket"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeWebSocket",{},globals.Client)})},
args: [],
source: "initializeWebSocket \x0a\x0a\x09^ webSocket := WebSocketAPI new\x0a\x09\x09\x09\x09\x09when: 'messageReceived:' do:[ :ev :args | self onMessage: ev with: args ];\x0a\x09\x09\x09\x09\x09yourself",
messageSends: ["when:do:", "new", "onMessage:with:", "yourself"],
referencedClasses: ["WebSocketAPI"]
}),
globals.Client);

smalltalk.addMethod(
smalltalk.method({
selector: "newBadCommandOn:",
protocol: 'actions',
fn: function (aWebSocketEvent){
var self=this;
function $BadCommand(){return globals.BadCommand||(typeof BadCommand=="undefined"?nil:BadCommand)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($BadCommand())._new();
_st($2)._problematic_(_st(aWebSocketEvent)._data());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newBadCommandOn:",{aWebSocketEvent:aWebSocketEvent},globals.Client)})},
args: ["aWebSocketEvent"],
source: "newBadCommandOn: aWebSocketEvent  \x0a\x09\x22Answers a new instance of BadCommand based on aWebSocketEvent.\x22\x0a\x0a\x09^ BadCommand new\x0a\x09\x09problematic: aWebSocketEvent data;\x0a\x09\x09yourself",
messageSends: ["problematic:", "new", "data", "yourself"],
referencedClasses: ["BadCommand"]
}),
globals.Client);

smalltalk.addMethod(
smalltalk.method({
selector: "onMessage:with:",
protocol: 'reactions',
fn: function (anEvent,aWebSocketEvent){
var self=this;
var command;
function $WebSocketCommand(){return globals.WebSocketCommand||(typeof WebSocketCommand=="undefined"?nil:WebSocketCommand)}
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
command=_st($WebSocketCommand())._for_(aWebSocketEvent);
$1=command;
if(($receiver = $1) == null || $receiver.isNil){
command=self._newBadCommandOn_(aWebSocketEvent);
command;
} else {
$1;
};
_st(command)._reactOn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"onMessage:with:",{anEvent:anEvent,aWebSocketEvent:aWebSocketEvent,command:command},globals.Client)})},
args: ["anEvent", "aWebSocketEvent"],
source: "onMessage: anEvent with: aWebSocketEvent\x0a\x09\x22This client is receiving anEvent \x0a\x09with a message comming from the server.\x22\x0a\x09\x0a\x09| command |\x0a\x09command := WebSocketCommand for: aWebSocketEvent.\x0a\x09command ifNil:[ command := self newBadCommandOn: aWebSocketEvent ].\x0a\x09command reactOn: self",
messageSends: ["for:", "ifNil:", "newBadCommandOn:", "reactOn:"],
referencedClasses: ["WebSocketCommand"]
}),
globals.Client);

smalltalk.addMethod(
smalltalk.method({
selector: "rest",
protocol: 'accessing',
fn: function (){
var self=this;
function $RESTfulAPI(){return globals.RESTfulAPI||(typeof RESTfulAPI=="undefined"?nil:RESTfulAPI)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@rest"];
if(($receiver = $2) == null || $receiver.isNil){
self["@rest"]=_st($RESTfulAPI())._new();
$1=self["@rest"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"rest",{},globals.Client)})},
args: [],
source: "rest\x0a\x0a\x09^ rest ifNil:[ rest := RESTfulAPI new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["RESTfulAPI"]
}),
globals.Client);

smalltalk.addMethod(
smalltalk.method({
selector: "webSocket",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@webSocket"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._initializeWebSocket();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"webSocket",{},globals.Client)})},
args: [],
source: "webSocket\x0a\x0a\x09^ webSocket ifNil:[ self initializeWebSocket ]",
messageSends: ["ifNil:", "initializeWebSocket"],
referencedClasses: []
}),
globals.Client);



smalltalk.addClass('WebSocketCommand', globals.Mapless, [], 'Flow-API');
globals.WebSocketCommand.comment="A WebSocketCommand is an abstraction.\x0a\x0aSubclasses are concrete objects that easily travel \x0a\x0a1. from the frontend to the backend and/or \x0a\x0a2. come from the backend to the frontend.\x0a\x0aThey have the concrete knowledge of how to react or who to delegate behaviour.\x0a\x0aThey also carry any information necessary to achieve some reaction at their destination.\x0a\x0aNote: they are Mapless only as convenience for traveling over the wire. You can if you like to but, originally, they are not meant to be persisted.";
smalltalk.addMethod(
smalltalk.method({
selector: "reactOn:",
protocol: 'actions',
fn: function (aClient){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"reactOn:",{aClient:aClient},globals.WebSocketCommand)})},
args: ["aClient"],
source: "reactOn: aClient\x0a\x09\x22This command has arrived, time to react to it.\x22\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.WebSocketCommand);


smalltalk.addMethod(
smalltalk.method({
selector: "for:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
var parsed;
function $Mapless(){return globals.Mapless||(typeof Mapless=="undefined"?nil:Mapless)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st((function(){
return smalltalk.withContext(function($ctx2) {
parsed=_st($Mapless())._fromJSONString_(_st(anEvent)._data());
return parsed;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._on_do_($Error(),(function(x){
parsed=nil;
return parsed;
}));
$1=parsed;
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{anEvent:anEvent,parsed:parsed},globals.WebSocketCommand.klass)})},
args: ["anEvent"],
source: "for: anEvent\x0a\x09\x22Answers a new instance of a command corresponding to\x0a\x09the message comming in anEvent or nil.\x22\x0a\x0a\x09| parsed |\x0a\x0a\x09[ parsed := Mapless fromJSONString: anEvent data ]\x0a\x09\x09on: Error\x0a\x09\x09do:[ :x | parsed := nil ].\x0a\x09^ parsed",
messageSends: ["on:do:", "fromJSONString:", "data"],
referencedClasses: ["Mapless", "Error"]
}),
globals.WebSocketCommand.klass);


smalltalk.addClass('BadCommand', globals.WebSocketCommand, [], 'Flow-API');
smalltalk.addMethod(
smalltalk.method({
selector: "reactOn:",
protocol: 'actions',
fn: function (aClient){
var self=this;
function $APIError(){return globals.APIError||(typeof APIError=="undefined"?nil:APIError)}
return smalltalk.withContext(function($ctx1) { 
_st($APIError())._signal_(self._asJSONString());
return self}, function($ctx1) {$ctx1.fill(self,"reactOn:",{aClient:aClient},globals.BadCommand)})},
args: ["aClient"],
source: "reactOn: aClient\x0a\x09\x22This command has arrived, time to react to it.\x22\x0a\x09\x09\x0a\x09APIError signal: self asJSONString",
messageSends: ["signal:", "asJSONString"],
referencedClasses: ["APIError"]
}),
globals.BadCommand);



smalltalk.addClass('Echo', globals.WebSocketCommand, [], 'Flow-API');
globals.Echo.comment="##WebSocketEcho\x0a\x0aIs a command that will send content to the server and the server will send back";
smalltalk.addMethod(
smalltalk.method({
selector: "reactOn:",
protocol: 'actions',
fn: function (aClient){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(console)._log_(self);
return self}, function($ctx1) {$ctx1.fill(self,"reactOn:",{aClient:aClient},globals.Echo)})},
args: ["aClient"],
source: "reactOn: aClient\x0a\x09\x22This command has arrived, time to react to it.\x22\x0a\x09\x09\x0a\x09console log: self ",
messageSends: ["log:"],
referencedClasses: []
}),
globals.Echo);


smalltalk.addMethod(
smalltalk.method({
selector: "for:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._content_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aString:aString},globals.Echo.klass)})},
args: ["aString"],
source: "for: aString\x0a\x0a\x09^ self new\x0a\x09\x09content: aString;\x0a\x09\x09yourself",
messageSends: ["content:", "new", "yourself"],
referencedClasses: []
}),
globals.Echo.klass);


smalltalk.addClass('Ping', globals.WebSocketCommand, [], 'Flow-API');
smalltalk.addMethod(
smalltalk.method({
selector: "reactOn:",
protocol: 'actions',
fn: function (aClient){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._halt();
return self}, function($ctx1) {$ctx1.fill(self,"reactOn:",{aClient:aClient},globals.Ping)})},
args: ["aClient"],
source: "reactOn: aClient\x0a\x09\x22This command has arrived, time to react to it.\x22\x0a\x09\x09\x0a\x09self halt",
messageSends: ["halt"],
referencedClasses: []
}),
globals.Ping);


});
