# Pig Game

This is a simple implementation of the **Pig Game** where two players take turns rolling a die to accumulate points. The first player to reach or exceed the goal score wins.

## Game Rules

1. **Player Buffer**: Each player has a buffer, which starts at 0.
2. **Rolling the Die**: 
    - The player rolls a die.
    - If the roll is greater than 1, the rolled number is added to the buffer, and the player continues their turn.
    - If the player rolls a **1**, the buffer is reset to 0 and the turn passes to the other player.
3. **Redeeming the Buffer**: After rolling, the player may choose to "hold" and redeem the buffer. This will add the buffer value to their total score, ending their turn safely.
4. **Winning the Game**: A player wins if their score reaches or exceeds the `goalScore`.

## Example Flow
- **Player 1** rolls a die and gets a 5. The buffer is now 5.
- Player 1 rolls again and gets a 3. The buffer is now 8.
- Player 1 decides to hold, adding the buffer to their score. The total score becomes `score = 8`.
- **Player 2** rolls a 1. The buffer is reset to 0, and the turn passes to Player 1.

## Objective
The game continues with players alternating turns until one player's score reaches or exceeds the `goalScore`. The first player to reach the `goalScore` wins!

## How to Play
- Players alternate turns, rolling a die and deciding whether to hold or keep rolling.
- The goal is to reach the target score without risking a roll of 1.

## Goal Score
You can customize the `goalScore` to change the target score required to win the game.
