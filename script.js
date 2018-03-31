$(document).ready(function(){
	//$('.div_anim').hide();
	$('.msg_box1').hide();
	$('.msg_box2').hide();
	$('.msg_box3').hide();
	$('.msg_box4').hide();
	$('.chat_head').click(function(){
		$('.chat_body').slideToggle('slow');
	});
	$('.msg_head1').click(function(){
		$('.msg_wrap1').slideToggle('slow');
	});

	$('.close1').click(function(){
		$('.msg_box1').hide();
	});

	$('.user').click(function(){
		$('.div_anim').hide();
		$('.msg_wrap1').show();
		$('.msg_box1').show();
		$('.msg_box2').hide();
		$('.msg_box3').hide();
		$('.msg_box4').hide();
	});

	$('.msg_input1').keypress(
    function(e){
        if (e.keyCode == 13) {
            e.preventDefault();
            var msg = $(this).val();
			$(this).val('');
			if(msg!='')
			$('<div class="msg_b1">'+msg+'</div>').insertBefore('.msg_push1');
			$('.msg_body1').scrollTop($('.msg_body1')[0].scrollHeight);
        }
    });

    $('.msg_head2').click(function(){
			$('.msg_wrap2').slideToggle('slow');
		});

		$('.close2').click(function(){
			$('.msg_box2').hide();
		});

		$('.user1').click(function(){
			$('.div_anim').hide();
			$('.msg_wrap2').show();
			$('.msg_box2').show();
			$('.msg_box1').hide();
			$('.msg_box3').hide();
			$('.msg_box4').hide();
		});

		$('.msg_input2').keypress(
	    function(e){
	        if (e.keyCode == 13) {
	            e.preventDefault();
	            var msg = $(this).val();
				$(this).val('');
				if(msg!='')
				$('<div class="msg_b2">'+msg+'</div>').insertBefore('.msg_push2');
				$('.msg_body2').scrollTop($('.msg_body2')[0].scrollHeight);
	        }
    });
    $('.msg_head3').click(function(){
			$('.msg_wrap3').slideToggle('slow');
		});

		$('.close3').click(function(){
			$('.msg_box3').hide();
		});

		$('.user2').click(function(){

			$('.msg_wrap3').show();
			$('.msg_box3').show();
			//$('.div_anim').show();
			$('.msg_box2').hide();
			$('.msg_box1').hide();
			$('.msg_box4').hide();
		});

		$('.msg_input3').keypress(
	    function(e){
	        if (e.keyCode == 13) {
	            e.preventDefault();
	            var msg = $(this).val();
				$(this).val('');
				if(msg!='')
				$('<div class="msg_b3">'+msg+'</div>').insertBefore('.msg_push3');
				$('.msg_body3').scrollTop($('.msg_body3')[0].scrollHeight);
	        }
    });

    $('.msg_head4').click(function(){
			$('.msg_wrap4').slideToggle('slow');
		});

		$('.close4').click(function(){
			$('.msg_box4').hide();
		});

		$('.user3').click(function(){
			$('.div_anim').hide();
			$('.msg_wrap4').show();
			$('.msg_box4').show();
			$('.msg_box2').hide();
			$('.msg_box3').hide();
			$('.msg_box1').hide();
		});

		$('.msg_input4').keypress(
	    function(e){
	        if (e.keyCode == 13) {
	            e.preventDefault();
	            var msg = $(this).val();
				$(this).val('');
				if(msg!='')
				$('<div class="msg_b4">'+msg+'</div>').insertBefore('.msg_push4');
				$('.msg_body4').scrollTop($('.msg_body4')[0].scrollHeight);
	        }
    });

});