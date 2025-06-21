

const { command, onMessage } = require('../lib');

let scores = {};
let activeGames = {};

// ✳️ DICE
command({ pattern: 'dice', desc: 'Roll a virtual dice', type: 'game' }, async (msg) => {
  const roll = Math.floor(Math.random() * 6) + 1;
  msg.reply(`🎲 You rolled: *roll*`);
);

// ✳️ GUESS CHARACTER
command( pattern: 'gtc', desc: 'Guess A, B, C, or D', type: 'game' , async (msg) => 
  const ans = ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)];
  activeGames[msg.jid] =  ans, timeout: setTimeout(() => delete activeGames[msg.jid], 40000) ;
  msg.reply('❓ Guess the character: A, B, C or D (40 seconds)');
);

// ✳️ FAST FINGERS
command( pattern: 'fast', desc: 'Fast typing game', type: 'game' , async (msg) => 
  if (activeGames[msg.jid]) return msg.reply('⚠️ A game is active!');
  const word = ['elephant', 'galaxy', 'rhythm', 'velocity', 'quantum', 'whistle'][Math.floor(Math.random() * 6)];
  activeGames[msg.jid] = 
    word,
    timeout: setTimeout(() => 
      delete activeGames[msg.jid];
      msg.reply(`⏱️ Time's up! The word was: *{word}*`);
    }, 60000)
  };
  msg.reply(`🏁 Type this quickly: *${word}* (60 seconds)`);
});

// ✳️ WORD CHAIN
[6/21, 9:13 AM] ChatGPT: command( pattern: 'wcg', desc: 'Word Chain Game', type: 'game' , async (msg) => 
  const start = 'flower';
  activeGames[msg.jid] = 
    last: start.slice(-1),
    timeout: setTimeout(() => 
      delete activeGames[msg.jid];
      msg.reply('⌛ Word chain expired.');
    , 60000)
  ;
  msg.reply(`🔗 Start with a word beginning with *{activeGames[msg.jid].last}*`);
});

// ✳️ DARE GAME
command({ pattern: 'dare', desc: 'Gives you a dare', type: 'game' }, async (msg) => {
  const dares = [
    'Call someone and sing a song.',
    'Send a heart emoji to your last message.',
    'Say the alphabet ba
      msg.reply('⏱️ Word chain ended.');
    }, 60000);
    scores[msg.sender] = (scores[msg.sender] || 0) + 1;
    msg.reply(`✅ Good! Next word should start with *${game.last}*`);
  }
});
