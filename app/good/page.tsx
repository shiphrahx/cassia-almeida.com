const stanzas: string[][] = [
  [
    `One of my direct subordinates — one of my guys that worked for me — he would call me up, or pull me aside, with some major problem. Some issue that was going on. And he'd say: "Boss, we got this and the other thing."`,
    `And I'd look at him and I'd say:`,
    `"Good"`,
  ],
  [
    `And finally, one day, he was telling me about some issue that he was having. And he said: "I already know what you're gonna say."`,
    `And I said: "What am I gonna say?"`,
    `He said: "You're gonna say 'good'. That's what you always say. When something is wrong and going bad, you always just look at me and say 'good'."`,
    `And I said: "Well, yeah. When things are going bad, there's gonna be some good that's gonna come from it."`,
  ],
  [
    `Didn't get the new high-speed gear that we wanted? Good.`,
    `Didn't get promoted? Good. More time to get better.`,
    `Mission got cancelled? Good. We can focus on another one.`,
    `Didn't get funded? Good.`,
    `Didn't get the job you wanted? Good.`,
    `Got injured? Good.`,
    `Sprained my ankle? Good.`,
    `Got tapped out? Good.`,
    `Got beat? Good. You learned.`,
    `Unexpected problems? Good. We have the opportunity to figure out a solution.`,
  ],
  [`That's it.`],
  [
    `When things are going bad, don't get all bummed out. Don't get startled. Don't get frustrated.`,
    `If you can say the word "good", guess what? It means you're still alive. It means you're still breathing. And if you're still breathing, well hell, you still have some fight left in you.`,
    `So get up. Dust off. Reload. Recalibrate. Re-engage.`,
    `Go out on the attack.`,
  ],
  [`— Jocko Willink`],
];

export default function Good() {
  return (
    <div className="good">
      {stanzas.map((stanza, i) => (
        <div className="good-stanza" key={i}>
          {stanza.map((line, j) => (
            <p key={j}>{line}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
