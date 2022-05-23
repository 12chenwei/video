window.addEventListener('load',function(){
    var prve=this.document.querySelector('.prve');
    var next=this.document.querySelector('.next');
    var bbb=this.document.querySelector('.bbb');
    var bbbWidth=bbb.offsetWidth;
    bbb.addEventListener('mouseenter',function(){
        prve.style.display='block';
        next.style.display='block';
        clearInterval(timer);
        timer='null';
    })
    bbb.addEventListener('mouseleave',function(){
        prve.style.display='none';
        next.style.display='none';
        timer=setInterval(function(){
            next.click();
        },3000)
    })

    var ul=bbb.querySelector('ul');
    var ol=bbb.querySelector('ol');
    for(var i=0;i<ul.children.length;i++){
        var li=this.document.createElement('li');
        li.setAttribute('index',i);
        ol.appendChild(li);
        li.addEventListener('click',function(){
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].className='';
            }
            this.className='current';
            var index=this.getAttribute('index');
           
            animate(ul,-index* bbbWidth);
        })
      
    }
    ol.children[0].className='current';

    var first=ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num=0;

    var circle=0;

    prve.addEventListener('click',function(){
        if(num==ul.children.length-1){
            ul.style.left=0;
            num=0;
        }
        num++;

        animate(ul,-num*bbbWidth);

        circle++;
        if(circle == ol.children.length){
            circle = 0;
        }


        for(var i = 0;i < ol.children.length;i++){
            ol.children[i].className='';
        }

        ol.children[circle].className='current';
    });

    next.addEventListener('click',function(){
        if(num==0){
            num= ul.children.length-1;
            ul.style.left=-num*bbbWidth+'px';
            
        }
        num--;

        animate(ul,-num*bbbWidth);

        circle--;
        if(circle == 0){
            circle = ol.children.length-1;
        }


        for(var i = 0;i < ol.children.length;i++){
            ol.children[i].className='';
        }

        ol.children[circle].className='current';

       
    });

    var timer=setInterval(function(){
        next.click();
    },3000)
});
var sliderbar=document.querySelector('.slider-bar');
var banner=document.querySelector('.banner');
var bannerTop=banner.offsetTop;
var sliderbarTop=sliderbar.offsetTop-bannerTop;
var main=document.querySelector('.main');
var goBack=document.querySelector('.goBack');
var mainTop=main.offsetTop;
document.addEventListener('scroll',function(){
    if(window.pageYOffset>=bannerTop){
        sliderbar.style.position='fixed';
        sliderbar.style.top=sliderbarTop+'px';
    }else{
     sliderbar.style.position='absolute';
     sliderbar.style.top='300px';
    }
    if(window.pageYOffset>=mainTop){
       goBack.style.display='block';
    }else{
     goBack.style.display='none';
    }


    })
    goBack.addEventListener('click',function(){
      

        animate(window,0)
});
