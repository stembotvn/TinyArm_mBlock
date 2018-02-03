// arduino.js

(function(ext) {
    var device = null;
    var _rxBuf = [];

    // Sensor states:
   
  
	ext.resetAll = function(){};
	
	ext.runArduino = function(){};

	ext.setBase = function(angle,speed) {
       
       var header = "setBase";
       var space = " ";
       var Str = "";
       var arg1 = "B";
       var arg2 = "V";
       var end = ";";
       var StrAngle ="";
       var StrSpeed = ""; 
       var num1,num2;
       var bytes =[];
       num1 = angle;
       StrAngle = num1.toString();
       num2 = speed;
       StrSpeed = num2.toString();
       Str = Str.concat(header,space,arg1,StrAngle,space,arg2,StrSpeed,end);
       //runPackage(Short2array(header),space,"B",Short2array(StrAngle),space,"V",Short2array(StrSpeed),";");
       bytes = Str.split("");
       for (var i=0;i<bytes.length;++i)
       	 {
       	 	bytes[i]=bytes[i].charCodeAt(0);
       	 }
       device.send(bytes);
     //  runPackage("Hello");
         // runPackage(30,pin,typeof level=="string"?levels[level]:new Number(level));
    };
    ext.setShoulder = function(angle,speed) {
       
       var header = "setShoulder";
       var space = " ";
       var Str = "";
       var arg1 = "S";
       var arg2 = "V";
       var end = ";";
       var StrAngle ="";
       var StrSpeed = ""; 
       var num1,num2;
       var bytes =[];
       num1 = angle;
       StrAngle = num1.toString();
       num2 = speed;
       StrSpeed = num2.toString();
       Str = Str.concat(header,space,arg1,StrAngle,space,arg2,StrSpeed,end);
       //runPackage(Short2array(header),space,"B",Short2array(StrAngle),space,"V",Short2array(StrSpeed),";");
       bytes = Str.split("");
       for (var i=0;i<bytes.length;++i)
       	 {
       	 	bytes[i]=bytes[i].charCodeAt(0);
       	 }
       device.send(bytes);
     //  runPackage("Hello");
         // runPackage(30,pin,typeof level=="string"?levels[level]:new Number(level));
    };
    //////
    ext.setElbow = function(angle,speed) {
       
       var header = "setElbow";
       var space = " ";
       var Str = "";
       var arg1 = "E";
       var arg2 = "V";
       var end = ";";
       var StrAngle ="";
       var StrSpeed = ""; 
       var num1,num2;
       var bytes =[];
       num1 = angle;
       StrAngle = num1.toString();
       num2 = speed;
       StrSpeed = num2.toString();
       Str = Str.concat(header,space,arg1,StrAngle,space,arg2,StrSpeed,end);
       //runPackage(Short2array(header),space,"B",Short2array(StrAngle),space,"V",Short2array(StrSpeed),";");
       bytes = Str.split("");
       for (var i=0;i<bytes.length;++i)
       	 {
       	 	bytes[i]=bytes[i].charCodeAt(0);
       	 }
       device.send(bytes);
     //  runPackage("Hello");
         // runPackage(30,pin,typeof level=="string"?levels[level]:new Number(level));
    };
  ////
   ext.setGrip = function(angle,speed) {
       
       var header = "setGrip";
       var space = " ";
       var Str = "";
       var arg1 = "G";
       var arg2 = "V";
       var end = ";";
       var StrAngle ="";
       var StrSpeed = ""; 
       var num1,num2;
       var bytes =[];
       num1 = angle;
       StrAngle = num1.toString();
       num2 = speed;
       StrSpeed = num2.toString();
       Str = Str.concat(header,space,arg1,StrAngle,space,arg2,StrSpeed,end);
       //runPackage(Short2array(header),space,"B",Short2array(StrAngle),space,"V",Short2array(StrSpeed),";");
       bytes = Str.split("");
       for (var i=0;i<bytes.length;++i)
       	 {
       	 	bytes[i]=bytes[i].charCodeAt(0);
       	 }
       device.send(bytes);
     //  runPackage("Hello");
         // runPackage(30,pin,typeof level=="string"?levels[level]:new Number(level));
    };
    ///
       ext.moveArm = function(angle1,angle2,angle3,angle4,speed) {
       
       var header = "moveArm";
       var space = " ";
       var Str = "";
       var arg1 = "B";
       var arg2 = "S";
       var arg3 = "E";
       var arg4 = "G";
       var arg5 = "V";

       var end = ";";
      
       var num1,num2,num3,num4,num5;
       var bytes =[];
       num1 = angle1;
       var StrAngle1 = num1.toString();
       num2 = angle2;
       var StrAngle2 = num2.toString();
       num3 = angle3;
       var StrAngle3 = num3.toString();
       num4 = angle4;
       var StrAngle4 = num4.toString();
       num5 = speed;
       var StrSpeed = num5.toString();
       Str = Str.concat(header,space,arg1,StrAngle1,space,arg2,StrAngle2,space,arg3,StrAngle3,space,arg4,StrAngle4,space,arg5,StrSpeed,end);
       //runPackage(Short2array(header),space,"B",Short2array(StrAngle),space,"V",Short2array(StrSpeed),";");
       bytes = Str.split("");
       for (var i=0;i<bytes.length;++i)
       	 {
       	 	bytes[i]=bytes[i].charCodeAt(0);
       	 }
       device.send(bytes);
     //  runPackage("Hello");
         // runPackage(30,pin,typeof level=="string"?levels[level]:new Number(level));
    };
    ////////////////////////////////////////////
	function sendPackage(argList){
		var bytes = [];
		for(var i=0;i<argList.length;++i){
			var val = argList[i];
			if(val.constructor == "[class Array]"){
				bytes = bytes.concat(val);
			}else{
				bytes.push(val);
			}
		}
		//bytes[2] = bytes.length - 3;
		device.send(bytes);
	}

		function runPackage(){
		sendPackage(arguments);
	}
    // Extension API interactions
    var potentialDevices = [];
    ext._deviceConnected = function(dev) {
        potentialDevices.push(dev);

        if (!device) {
            tryNextDevice();
        }
    }
    
    function processData(bytes) {}

    function tryNextDevice() {
        // If potentialDevices is empty, device will be undefined.
        // That will get us back here next time a device is connected.
        device = potentialDevices.shift();
        if (device) {
            device.open({ stopBits: 0, bitRate:9600, ctsFlowControl: 0 }, deviceOpened);
        }
    }

    var watchdog = null;
    function deviceOpened(dev) {
        if (!dev) {
            // Opening the port failed.
            tryNextDevice();
            return;
        }
        device.set_receive_handler('TinyArm',processData);
    }

    ext._deviceRemoved = function(dev) {
        if(device != dev) return;
        device = null;
    };

    ext._shutdown = function() {
        if(device) device.close();
        device = null;
    };

    ext._getStatus = function() {
        if(!device) return {status: 1, msg: 'Arduino disconnected'};
        if(watchdog) return {status: 1, msg: 'Probing for Arduino'};
        return {status: 2, msg: 'Arduino connected'};
    };

    var descriptor = {};
	ScratchExtensions.register('TinyArm', descriptor, ext, {type: 'serial'});
})({});
