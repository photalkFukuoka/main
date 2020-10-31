window.onload=function(){
  new Vue({
    el: '#app',
    //スライダー
    data: {
      eventTitle: '「ねこ撮り」',
      eventVolOn: 'Vol.11',
      eventUrl: 'https://photalkFukuoka.github.io/main/event/2020/10.html',
      // eventVolOff: 'Vol.7',
      eventDateOn: '10/24(土) 15:00～',
      // eventDateOff: '2020.7.12～8/31',
      current_slide: 0,　//追加
      slides: [
        {img: 'img/kv_img01.jpg'},
        {img: 'img/kv_img02.jpg'},
        {img: 'img/kv_img03.jpg'},
        {img: 'img/kv_img04.jpg'},
        {img: 'img/kv_img05.jpg'}
      ],
    },
    mounted() {
      　　setInterval(() => {
            this.current_slide = this.current_slide < this.slides.length -1 ? this.current_slide +1 : 0
          }, 6000)
      }
  })
}
