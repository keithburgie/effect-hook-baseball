import React, { useState, useEffect } from "react";

function App() {
  // Initial state = {strikes: 0, balls: 0}
  const [count, setCount] = useState({
    strikes: 0,
    balls: 0
  });

  // Initial state = false
  const [fullCount, setFullCount] = useState(false);

  // Returns a 0 or 1
  function throwPitch() {
    // 1 = true = strike()
    // 0 = false = ball()
    Math.floor(Math.random() * 2) ? strike() : ball();
  }

  function strike() {
    // Add one to strike count
    setCount({ ...count, [count.strikes]: count.strikes++ });
    console.clear()
  }

  function ball() {
    // Add one to ball count
    setCount({ ...count, [count.balls]: count.balls++ });
    console.clear()
  }

  function resetCount() {
    // Reset everything after walk or strikeout
    setCount({ strikes: 0, balls: 0 });
    setFullCount(false)
    console.clear()
  }

  // Called once on page load, like componentDidMount()
  useEffect(() => {
    window.alert("Take me out to the ball game...");
  }, []);

  // Called on changes to [count]
  useEffect(() => {
    if (count.balls === 4) {
      window.alert("Batter walks.");
      resetCount();
    }
    if (count.strikes === 3) {
      window.alert("Strikeout!");
      resetCount();
    }
    if (count.balls === 3 && count.strikes === 2) {
      setFullCount(true)
    }
  }, [count]);

  // Called on ALL renders
  useEffect(() => {
    const heckles = [
      "Hey batta batta batta swing batta batta!",
      "Everybody move in!",
      "You're getting less hits than an Amish website!",
      "I've seen better cuts at a deli!",
      "I've seen better bats in a cave!",
      "No Batter, No Batter...",
      "Didn't you just sell me a hotdog?"
    ]
    // Strike or ball logs one heckle
    // Strikeout, walk, or full count logs two heckles
    console.log(heckles[Math.floor(Math.random() * heckles.length)])
  });

  return (
    <div>
      <h1>{count.balls} balls - {count.strikes} strikes</h1>
      <button onClick={throwPitch}>Throw Pitch</button>
      {fullCount &&
        <em style={{
          color: "red", marginLeft: "10px", fontWeight: "bold"
        }}>Full count! (very exciting)</em>}
    </div>
  );
}

export default App;