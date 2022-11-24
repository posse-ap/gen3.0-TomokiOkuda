$(function () {
  // モーダル表示
  $('.js-open').click(function () {
    $('#overlay, .modal-window').fadeIn();
  });

  // バツボタン
  $('.js-close').click(function () {
    $('#overlay, .modal-window, .loader,.record_message').fadeOut();
  });

  // 記録投稿ボタン
  $('.js-open-roading').click(function () {
    $('#overlay, .loader').fadeIn();
    $('.modal-window').fadeOut();
    buttonClick();
    setTimeout(function(){
      $('.loader').fadeOut();
      $('.record_message').fadeIn();
  },3000);
  });
});

function buttonClick(){
  let checkbox1 = document.getElementById('twitter');
  const text = document.getElementById("tweetBox").value;
  if (checkbox1.checked){
      console.log('チェック');
      var turl = "https://twitter.com/intent/tweet?text="+text;
   window.open(turl,'_blank');
  } else {
      console.log('チェックなし');
  };
}

 



function GetTweet(str,code){
  var target = document.getElementById("HELLO");
  var text_all = document.getElementById("tweetBox");
  var input_data = text_all.value.replace(/\r?\n/g, '%0D%0A');
  TWEET.innerHTML = '<a class="button" href="https://twitter.com/intent/tweet?text=' + input_data + '" target="_blank">Tweet</a>'
}
