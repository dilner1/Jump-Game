document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino')
    let isJumping = false;
    let gravity = 0.9

    // Press space bar
    function control(e) {
        if (e.keyCode === 32){
            if(!isJumping) {
                isJumping = true
                jump()
            }
        
        }
    }

    document.addEventListener('keyup', control)
    let position = 0;

    function jump(){
        let count = 0;
        let timerId = setInterval(function(){
        

        // move down
        if (count === 30){
            clearInterval(timerId)
            console.log('down')
            let downTimerId = setInterval(function(){
                if (count === 0){
                    clearInterval(downTimerId)
                    isJumping = false;
                }
                position -= 5;
                count --
                position = position * gravity
                dino.style.bottom = position + 'px'
            },20)
            
            }

        // move up
            console.log('up')
            count ++
            position += 30;
            position = position * gravity
            dino.style.bottom = position + 'px'
            console.log('reset')
        }, 20)

    }

}); 