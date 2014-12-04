
var mg = {}; // Marisa Giancarla namespace to avoid collisions

mg.serverName = 'empiredirectory.net';
mg.port = 4321;
mg.playerName = '';
mg.password = '';
mg.gameDescription = '';


mg.getUniqueId = function () {
	var time = new Date().getTime();
	while(time === new Date().getTime());
	return new Date().getTime();
}


mg.buildDbSelect = function () {
	// start clean
	$('#selectDb').empty().append($('<option value="null">...</option>'));

	localforage.keys(function (err, keys) {
		if(err) console.log("Couldn't get localforage.keys(): ", err);

		keys.forEach(function (key) {
			$('#selectDb').append($('<option value="' + key + '">' + key + '</option>'));
		});
	});
};


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
	fTelnet.Port = 3458;
	fTelnet.ProxyHostname = mg.serverName;
	fTelnet.ProxyPort = mg.port;
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
	// blank server settings
	$('#iServerName').val('');
	$('#iPort').val('');
	$('#iPlayerName').val('');
	$('#iPassword').val('');
	$('#iGame').val('');
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


$('#menuKeyboard').on('click', function () {
	// toggle fTelnet keyboard visibility status
	fTelnet.VirtualKeyboardVisible = (fTelnet.VirtualKeyboardVisible)? false : true;
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

$('#submitHost').on('click', function (e) {
	e.preventDefault();

	var data = {
		serverName: $('#iServerName').val(),
		port: $('#iPort').val(),
		playerName: $('#iPlayerName').val(),
		password: $('#iPassword').val(),
		gameDescription: $('#iGame').val()
	};

	var id = data.gameDescription || mg.getUniqueId().toString();

	localforage.setItem(id, data, function(err, value) {
		// clear to empty state
		$('#hostModalStatus').text('').removeClass('hidden text-danger text-success').fadeIn();

		if(err) {
			$('#hostModalStatus').text(err).addClass('text-danger').fadeOut(5000);
		} else {
			$('#hostModalStatus').text('Host settings saved.').addClass('text-success').fadeOut(5000);
			mg.buildDbSelect()
		}
	});
});


$('#selectDb').on('change', function () {
	var chosenDb = $(this).val();

	if(chosenDb === null) return;

	localforage.getItem(chosenDb, function (err, value) {
		if(err) console.log("Error while retrieving saved data.");

		$('#iServerName').val(value.serverName);
		$('#iPort').val(value.port);
		$('#iPlayerName').val(value.playerName);
		$('#iPassword').val(value.password);
		$('#iGame').val(value.gameDescription);

		$('#openDbModalStatus').text("Loaded " + chosenDb + " settings.").removeClass('hidden').addClass('text-success').fadeIn().fadeOut(5000);
	});

});


////////////////////////////////////////////////////////////////////////////////
// main
////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
	mg.buildDbSelect();
});
