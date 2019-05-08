    //animation
    if((game.input.keyboard.justPressed(Phaser.Keyboard.UP) || game.input.keyboard.justPressed(Phaser.Keyboard.W)) && playerTweenCompleted) {
        this.player.animations.play("walkUp");
    } else if ((game.input.keyboard.justPressed(Phaser.Keyboard.DOWN) || game.input.keyboard.justPressed(Phaser.Keyboard.S)) && playerTweenCompleted) {
        this.player.animations.play("walkDown");
    } else if ((game.input.keyboard.justPressed(Phaser.Keyboard.LEFT) || game.input.keyboard.justPressed(Phaser.Keyboard.A)) && playerTweenCompleted) {
        this.player.animations.play("walkLeft");
    } else if ((game.input.keyboard.justPressed(Phaser.Keyboard.RIGHT) || game.input.keyboard.justPressed(Phaser.Keyboard.D)) && playerTweenCompleted) {
        this.player.animations.play("walkRight");
    }