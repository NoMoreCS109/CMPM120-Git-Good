//create the player sprite
this.player = this.add.sprite(120, 120, "player_atlas", "child00")
//add animation
this.player.animations.add('walkUp', Phaser.Animation.generateFrameNames('child', 0, 3, " ", 2), 4, true);
this.player.animations.add('walkDown', Phaser.Animation.generateFrameNames('child', 4, 7, " ", 2), 4, true);
this.player.animations.add('walkLeft', Phaser.Animation.generateFrameNames('child', 8, 11, " ", 2), 4, true);
this.player.animations.add('walkRight', Phaser.Animation.generateFrameNames('child', 12, 15, " ", 2), 4, true);

//No Conflict!!! please!!!!
//IT is not good!

