jQuery(document).ready(function($) {
  /* вызов метода по клику на меню добавления */
  $('.tools_menu').on('click', '.tools_button', function(e){
    e.preventDefault();
    let paper = $('#paper');
    let fun = $(this).attr('data-id');
    let em = new ElementsMaker();
    console.log( fun );
    if(fun in em) { 
      let str = em[ fun ];
      paper.append( str );
    } else {
      /* если метод не найден*/
      console.log('Нет метода для добавления');
    }
  });
  /* закрыть панель настроек */
  $('#close_editor_panel').click(function(){
    $('#editor_panel').removeClass('open');
  });

  /* обработка клика на кнопке настройки */
  $('#paper').on('click', '.menu_toggle_inside', function(e){
    e.preventDefault();
    let $thisp = $(this).closest('.incontainer'); //родительский 
    $('#editor_panel').toggleClass('open');
    let type = $thisp.attr('data-type');
    console.log( type);
    $('.properties_block').removeClass('show');
    $('#' + type + '_properties').addClass('show');
    let $form = $('#' + type + '_properties').children('form').attr('data-id', $thisp.attr('id') );
    $thisp.children().each(function() {
      let $href = $(this).attr('data-href');
      let text = $(this).text();
      if( $href ) {
        console.log( $href );
        $form.children().each(function() {
          let name = $(this).attr('name');
          if( name == $href ) {
            $(this).val( text );
          }
        });
        /*
        if( $('input[name=' + $href + ']').length ) {
          $('input[name=' + $href + ']').val( $(this).text() );
        }
        if( $('textarea[name=' + $href + ']').length ) {
          $('textarea[name=' + $href + ']').val( $(this).text() );
        }
        */
      }
    });

  });

  $('#editor_panel').on('submit', 'form', function(e){
    //при сабмите формы настроек
    e.preventDefault();
    let $form = $(this);
    let $id = $form.attr('data-id');
    let $block = $('#'+$id);
    $form.children().each( function() {
      let $href = $(this).attr('name');
      let $val = $(this).val();
      if( $href ) {
        switch($href) {
          case 'prop_align':
            if( this.checked ) {  
              console.log( $val );
              $block.removeClass('textleft');
              $block.removeClass('textcenter');
              $block.removeClass('textright');
              switch($val) {
                case 'left':
                  $block.addClass('textleft');
                  break;
                case 'center':
                  $block.addClass('textcenter');
                  break;
                case 'right':
                  $block.addClass('textright');
                  break;
              }
            }
            break;
          default:
            $block.children().each(function() {
              let name = $(this).attr('data-href');
              if( name == $href ) {
                $(this).text( $val );
              }
            });
        }
      }      
    });
    $('#editor_panel').removeClass('open');
  });


})


