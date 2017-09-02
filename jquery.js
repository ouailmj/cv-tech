!DOCTYPE html>
<html>
	<head>
		<title>Inscription</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="STYLEINSCRIPTION.css">
	</head>
	<body>
		<div class="entete" id="entete" >
				<div class="barre" id="barre">
					<br />
					<li>
					<a href="" class="acceuill" id="acceuill">acceuill</a>
					</li>
					<li>
					<a href="" class="produit" id="produit">Produit</a>
					<ul>
						<li>
							<a href="" id="web" class="web">web</a>
						</li>
						<li>
							<a href="" id="Renseignement" class="Renseignement">Renseignement</a>
						</li>
						<li>
							<a href="" id="Assistance" class="Assistance"> Assistance</a>
						</li>
					</ul>
					</li>
					<li>
					<a href="" class="propos" id="propos">A propos</a>
					<ul>
						<li>
							<a href="" id="Histoire" class="Histoire">Histoire</a>
						</li>
						<li>
							<a href="" id="Carriere" class="Carriere">Carriere</a>
						</li>
						<li>
							<a href="" id="Media" class="Media">Media</a>
						</li>
					</ul>
					</li>
					<li>
					<a href="" class="outils" id="outils">Outils</a>
					<ul>
						<li>
							<a href="" class="Carte" id="Carte">Carte</a>
						</li>
						<li>
							<a href="" class="Logo" id="Logo">Logo</a>
						</li>
						<li>
							<a href="" class="Posters" id="Posters">Posters</a>
						</li>
					</ul>
					</li>
					<li>
						<a href="" class="contact" id="contact">Contact</a>
					</li>
				</div>
				<div class="connexion" id="connexion" name="conexion">
					
					<a id="popups" onclick="divshow()">Se connecter</a>
				</div>
		</div>
		<div class="corp" id="corp">
			<div class="inscription" id="inscription">
				<p>Vous etes nouveau sur ... inscriver vous</p>
				<div id="abc">
					<!-- Popup Div Starts Here -->
					<div id="popupContact">
						<form action="CVINSCRIPTION_TRAIT.php"  method="post" id="form" class="form" name="form">
						<img id="close" src="images/3.png" onclick ="div_hide()">
						<h2>remplissez le formulaire pour vous inscrire</h2>
						<hr>
						<input id="name" name="name" placeholder="Nom" type="text" required="required">
						<input id="pass" class="pass" name="pass" placeholder="Mot de passe" type="password" required="required">
						<input id="passcom" class="passcom" name="passcom" placeholder="Comfirmation mot de passe" type="password" required="required">
						<input id="email" name="email" placeholder="Email" type="text" required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$">
					
						<input type="submit" name="submit" id="submit" value="send">
						<p>En vous inscrivant, vous acceptez les <a href="" class="conditions" id="conditions">Conditions générales d'utilisation</a> et la <a href="" class="conditions" id="conditions">Politique de confidentialité</a> de ...</p>
					</form>
					</div>
							<!-- Popup Div Ends Here -->
				</div>
							<!-- Display Popup Button -->
			<a id="popup" onclick="div_show()">S'inscrire</a>
				
			</div>
			<div id="para" class="para">
				<h2>Rejoignez nos fidéle visiteurs qui utilisent ... pour leurs designs</h2>
				<h3>Systemme d'utilisation le plus simple</h3>
				<h3>Grâce à ..., tout le monde peut être designer</h3>
				
			</div>
		</div>
	<script>
		var password = document.getElementById("pass")
		, confirm_password = document.getElementById("passcom");

		function validatePassword(){
		if(password.value != confirm_password.value) {
			confirm_password.setCustomValidity("Passwords Don't Match");
		} else {
			confirm_password.setCustomValidity('');
		}
		}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
//Function To Display Popup
		function div_show() {
			document.getElementById('abc').style.display = "block";
		}
//Function to Hide Popup
		function div_hide(){
			document.getElementById('abc').style.display = "none";
		}
	</script>	
	</body>	





</html>