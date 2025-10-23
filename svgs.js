var intial_path='M 10 100 Q 500 100  990 100';//M 10 10 C 20 20, 40 20, 50 10
var final_path='M 10 100 Q 500 100  990 100';

var stringElement = document.getElementById('string');

    stringElement.addEventListener('mousemove', function(dets) {
       path=`M 10 100 Q ${dets.x} ${dets.y}  990 100`;
       gsap.to("svg path",{
      attr:{d:path},
      duration:0.3,
      ease:"power3.inOut"
       })
    });

    stringElement.addEventListener(mouseleave, function() {
        gsap.to("svg path",{
            attr:{d:final_path},
            duration:1.5,
            ease:"elastic.out(1, 0.3)"
             })
    })

