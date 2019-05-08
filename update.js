if (cursors.left.isDown)
    {
    	//player will move to left
        player.body.velocity.x = -150;
        player.animations.play("left");
    }
    else if (cursors.right.isDown)
    	{
   			//player will move to right
        	player.body.velocity.x = 150;
        	player.animations.play("right");
    	}
    	else
    	{
        	//not moving at all
         	player.animations.stop();
        	player.frame = 4;
    	}