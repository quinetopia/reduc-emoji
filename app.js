window.onload = function () {
  const emojiElement = document.querySelector("#emoji");
  const INITIAL_VALUE = { emoji: "U(•ㅅ•)U", color: "white" }
  const emotionTypes = ["HAPPY_EMOJI", "SAD_EMOJI", "ANGRY_EMOJI", "CONFUSED_EMOJI"];

  function emojiReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
      case "HAPPY_EMOJI":
        return { emoji: "(＾▽＾)", color: "yellow" }
      case "SAD_EMOJI":
        return { emoji: "(◕︿◕✿)", color: "blue" }
      case "ANGRY_EMOJI":
        return { emoji: "(◣_◢)", color: "red" }
      case "CONFUSED_EMOJI":
        return { emoji: "(⊙_◎)", color: "orange" }
      default:
        return state
    }
  }

  function handleChange() {
    const currentEmoji = store.getState().emoji;
    const currentColor = store.getState().color;
    emojiElement.innerText = currentEmoji;
    emojiElement.style.background = currentColor;

  }

  const store = Redux.createStore(emojiReducer);
  const unsubscribe = store.subscribe(handleChange);

  emojiElement.innerText = store.getState().emoji;



  document.querySelector("#happy-btn")
    .addEventListener("click", function () {
      store.dispatch({ type: "HAPPY_EMOJI" });
      // const currentEmoji = store.getState().emoji;
      // emojiElement.innerText = currentEmoji;
    });

  document.querySelector("#sad-btn")
    .addEventListener("click", function () {
      store.dispatch({ type: "SAD_EMOJI" });
      // const currentEmoji = store.getState().emoji;
      // emojiElement.innerText = currentEmoji;
    });

  document.querySelector("#angry-btn")
    .addEventListener("click", function () {
      store.dispatch({ type: "ANGRY_EMOJI" });
      // const currentEmoji = store.getState().emoji;
      // emojiElement.innerText = currentEmoji;
    });

  document.querySelector("#confused-btn")
    .addEventListener("click", function () {
      store.dispatch({ type: "CONFUSED_EMOJI" });
      // const currentEmoji = store.getState().emoji;
      // emojiElement.innerText = currentEmoji;
    });

  document.querySelector("#random-btn")
    .addEventListener("click", function () {
      const rndEmotionType = emotionTypes[Math.floor(Math.random()*emotionTypes.length)]
      store.dispatch({ type: rndEmotionType });
    });
  }