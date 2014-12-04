
var mg = {}; // Marisa Giancarla namespace to avoid collisions


////////////////////////////////////////////////////////////////////////////////
// fTelnet settings
////////////////////////////////////////////////////////////////////////////////
mg.fTelnetSettings = function () {
	fTelnet.BareLFtoCRLF = true;
	fTelnet.BitsPerSecond = 57600;
	fTelnet.Blink = true;
	fTelnet.ButtonBarVisible = false;
	fTelnet.ConnectionType = 'telnet'; // only option for the time being, don't touch it
	fTelnet.Enter = '\r\n';
	fTelnet.Font = 'CP437';
	fTelnet.Hostname = 'empiredirectory.net';
	fTelnet.LocalEcho = true;
	fTelnet.Port = 3458
	fTelnet.ProxyHostname = 'empiredirectory.net';
	fTelnet.ProxyPort = 4321;
//	fTelnet.ProxyPortSecure = 4321; // I think Marisa doesn't got this one configured
	fTelnet.ScreenColumns = 80;
	fTelnet.ScreenRows = 25;
	fTelnet.SplashScreen = '';
	fTelnet.StatusBarVisible = false;
	fTelnet.VirtualKeyboardVisible = false;
};


////////////////////////////////////////////////////////////////////////////////
// Stubs for future functionality
////////////////////////////////////////////////////////////////////////////////

// File menu
$('#menuOpenDb').on('click', function () {
	console.log(this); // TODO remove this when this stub gets implemented
});

$('#menuCloseDb').on('click', function () {
	console.log(this); // TODO remove this when this stub gets implemented
});

$('#menuSaveDb').on('click', function () {
	console.log(this); // TODO remove this when this stub gets implemented
});

$('#menuNewDb').on('click', function () {
	console.log(this); // TODO remove this when this stub gets implemented
});


// Server menu
$('#menuConnect').on('click', function () {
	// hide splash screen and show terminal emulator
	$('#splashScreen').addClass('hidden');
	$('#fTelnetContainer').removeClass('hidden');

	if(! fTelnet.Init()) {
		// If we get here, it means fTelnet failed to load, so we'll pop up an error message.
		// The fTelnetContainer element above will also be replaced with an error message, so it's not totally
		// necessary to pop up an error message here.
		alert("Sorry, I wasn't able to load fTelnet\n\nTry again with an HTML5 capable browser.");
		return;
	}

	mg.fTelnetSettings();
	fTelnet.Connect();
});

$('#menuDisconnect').on('click', function () {
	// restore splash screen and hide terminal emulator
	$('#fTelnetContainer').addClass('hidden');
	$('#splashScreen').removeClass('hidden');

	fTelnet.Disconnect();
	// destroy and recreate fTelnet container or it will keep recreating all child elements
	$('#fTelnetContainer').remove();
	$('#mainStuff').append($('<div id="fTelnetContainer">'));
});


// View menu
$('#menuMap').on('click', function () {
	console.log(this); // TODO remove this when this stub gets implemented
});

$('#menuPlanet').on('click', function () {
	console.log(this); // TODO remove this when this stub gets implemented
});

$('#menuShip').on('click', function () {
	console.log(this); // TODO remove this when this stub gets implemented
});

$('#menuScripts').on('click', function () {
	console.log(this); // TODO remove this when this stub gets implemented
});

$('#menuCommands').on('click', function () {
	console.log(this); // TODO remove this when this stub gets implemented
});

$('#menuClearDisplay').on('click', function () {
	console.log(this); // TODO remove this when this stub gets implemented
});


// Configure menu
$('#menuHost').on('click', function () {
	console.log(this); // TODO remove this when this stub gets implemented
});

$('#menuSettings').on('click', function () {
	console.log(this); // TODO remove this when this stub gets implemented
});


// Help menu
$('#menuIndex').on('click', function () {
	console.log(this); // TODO remove this when this stub gets implemented
});

$('#menuAbout').on('click', function () {
	console.log(this); // TODO remove this when this stub gets implemented
});
