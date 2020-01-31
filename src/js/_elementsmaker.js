function ElementsMaker() {
}

ElementsMaker.prototype = {
	addbanner : function(){
	   let uid = genRndStr();
	   let paper = jQuery(this);
	   let str = '<div class="incontainer banner_block" data-type="banner"'
	   + '" id="' + uid
	   + '" ><h1 data-href="banner_properties_input_title">' + 'Заголовок банера'
	   + '</h1><p data-href="banner_properties_input_desc">' + 'Anything you`ve even dreamed is possible to realise just at the moment when you decided to win.' 
	   + '</p>' + addMenuTog() + '</div>';
	   return str;
	},
	addtext:  function(){
	 	let uid = genRndStr();
	   	let str = '<div class="incontainer text_block" data-type="text"'
	   + '" id="' + uid
	   + '" ><p data-href="text_properties_input_desc">' 
	   + 'Each type of visual aid has pros and cons that must be evaluated to ensure it will be beneficial to the overall presentation. Before incorporating visual aids into speeches, the speaker should understand that if used incorrectly, the visual will not be an aid, but a distraction.'
	   + '</p>' + addMenuTog() + '</div>';
	   return str;
	},
	addtitle: function(){
	 	let uid = genRndStr();
	   	let str = '<div class="incontainer title_block" data-type="title"'
	   + '" id="' + uid
	   + '" ><h1 data-href="title_properties_input">' + 'Заголовок'
	   + '</h1>' + addMenuTog() + '</div>';
	   return str;
	},
	addquote:  function(){
	 	let uid = genRndStr();
	   	let str = '<div class="incontainer blockquote_block" data-type="blockquote"'
	   + '" id="' + uid
	   + '" ><blockquote data-href="blockquote_properties_input">' 
	   + 'Each type of visual aid has pros and cons that must be evaluated to ensure it will be beneficial to the overall presentation. Before incorporating visual aids into speeches, the speaker should understand that if used incorrectly, the visual will not be an aid, but a distraction.'
	   + '</blockquote>' + addMenuTog() + '</div>';
	   return str;
	},
	addimage:  function(){
	 	let uid = genRndStr();
	   	let str = '<div class="incontainer image_block" data-type="image"'
	   + '" id="' + uid
	   + '" ><picture>' 
	   + '<img src="img/imgfish.jpg">'
	   + '</picture>' + addMenuTog() + '</div>';
	   return str;
	},
	separator: function(){
	 	let uid = genRndStr();
	   	let str = '<div class="incontainer separator_block" data-type="separator"'
	   + '" id="' + uid
	   + '" ><hr>' + addMenuTog() + '</div>';
	   return str;
	},
}

