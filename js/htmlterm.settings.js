
////////////////////////////////////////////////////////////////////////////////
// HtmlTerm Settings
////////////////////////////////////////////////////////////////////////////////

// This setting lets you control the speed of the connection.  It defaults to a high value for quick screen
// loading, but you can lower it if you want to simulate an old 2400 or something.  (Not tested thoroughly,
// so I'm not sure how accurate it actually will be)
// HtmlTerm.BitsPerSecond = 115200;

// Determines whether you allow text to blink or not.
// HtmlTerm.Blink = true;

// Determines which character set to use, and what font size.  I'll need to make a table of all the possible values,
// for now you'll have to open each font file to see what's available.  For example HtmlTerm.font-437.js has
// CrtFonts['437x10x19'], which means there's a font with codepage 437 and size 10x19 available.
// Note you'll have to ensure you add a <script> tag to load the font file containing the font you want.
// HtmlTerm.CodePage = "437";
// HtmlTerm.FontWidth = 9;
// HtmlTerm.FontHeight = 16;

// Determines the connection type.  Will be telnet in most cases, but for example C64 BBSes using tcpser need "raw"
// HtmlTerm.ConnectionType = "telnet";

// Determines what to send for the enter keypress.  Telnet spec says to send "\r\n", but most BBS software wants "\r";
HtmlTerm.Enter = "\r\n";

// Details for the server you want to connect to.  Only port 23 is supported by my proxy, which means only port 23
// is supported for now.  Later on you'll be able to run your own proxy, and you can use whatever port you want
// at that time.
HtmlTerm.ServerName = "Imperium";
HtmlTerm.Hostname = "empiredirectory.net";
HtmlTerm.Port = 3458;

// HtmlTerm speaks WebSocket, but most BBSes speak telnet, so a proxy server is needed to facilitate communication
// For now I run the only proxy compatible with my latest HtmlTerm changes, so you'll need to run everything through it
HtmlTerm.ProxyHostname = "empiredirectory.net";
HtmlTerm.ProxyPort = 4321;

// Defined in HtmlTerm.js but without explanation
// HtmlTerm.ProxyPortSecure = 11235;

// Determines how large the screen will be.  The last row is reserved for a status line
// HtmlTerm.ScreenColumns = 80;
// HtmlTerm.ScreenRows = 25;

// This is a Base64 encoded ANSI screen that will be displayed to the user when HtmlTerm first initializes
// HtmlTerm.SplashScreen -> will be defined in a separate file

// HtmlTerm.StatusBar = true;

// HtmlTerm settings ends


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
	$('#HtmlTermContainer').removeClass('hidden');

	if(! HtmlTerm.Init("HtmlTermContainer")) {
		// If we get here, it means HtmlTerm failed to load, so we'll pop up an error message.
		// The HtmlTermContainer element above will also be replaced with an error message, so it's not totally
		// necessary to pop up an error message here.
		alert("Sorry, I wasn't able to load HtmlTerm\n\nTry again with an HTML5 capable browser.");
		return;
	}

	Crt.LocalEcho = true; // echo what's typed in terminal

	HtmlTerm.Connect();
});

$('#menuDisconnect').on('click', function () {
	// restore splash screen and hide terminal emulator
	$('#HtmlTermContainer').addClass('hidden');
	$('#splashScreen').removeClass('hidden');

	HtmlTerm.Disconnect();
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
