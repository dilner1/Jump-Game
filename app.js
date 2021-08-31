document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino');
    const grid = document.querySelector('.grid');
    const alertMessage = document.getElementById('alert')
    let isJumping = false;
    let gravity = 0.9;
    let isGameOver = false;

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
                position -= 1;
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

    // create obstacle
    function generateObstacle(){
        let randomTime = Math.random() * 4000
        let obstaclePosition = 1400
        const obstacle = document.createElement('div')
        obstacle.classList.add('obstacle')
        grid.appendChild(obstacle)
        obstacle.style.left = obstaclePosition + 'px'

        let timerId = setInterval(function() {
            if (obstaclePosition > 0 && obstaclePosition < 60 && position < 60) {

                    clearInterval(timerId)
                    alertMessage.innerHTML = 'Game Over'
                    console.log(isGameOver)
                }
            
            obstaclePosition -= 10;
            obstacle.style.left = obstaclePosition + 'px'
        }, 20)
        if (!isGameOver) setTimeout(generateObstacle, randomTime)
    }
    generateObstacle()


}); 