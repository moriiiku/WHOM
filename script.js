window.addEventListener('load', function() {
    var images = [
      '171543.GIF',
      '171610.GIF',
      '171706.GIF',
      '171848.GIF',
      '171916.GIF',
      '171942.GIF',
      '172041.GIF',
      '172106.GIF',
      '172127.GIF',
      '172155.GIF',
      '172250.GIF',
      '172320.GIF',
      '172344.GIF',
      '172418.GIF',
      '172455.GIF',
      '172527.GIF',
      '172611.GIF',
      '172632.GIF',
      '172653.GIF',
      '173065.jpg',
      '173413.GIF',
      '173523.GIF',
      '173602.GIF',
      '173619.jpg',
      '173684.jpg',
      // 他の画像のファイル名を追加
    ];
  
    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = images[randomIndex];
    var imgElement = document.getElementById('randomImage');
    imgElement.src = randomImage;
  });