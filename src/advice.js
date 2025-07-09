/**
 * The function initializes the application by selecting the elements from the DOM.
 * @returns {void}
 */
function App() {
  // Get the canvas element from the DOM
  const element = /**@type {HTMLCanvasElement | null}*/ (
    document.querySelector('canvas')
  );
  // Get the button element from the DOM
  const btn = /**@type {HTMLButtonElement | null} */ (
    document.querySelector('button')
  );

  const adviceContainer = /**@type {HTMLDivElement | null}*/ (
    document.querySelector('.advice-container')
  );

  //The constants used in the Zdog library
  // These constants are used to define the number of faces on the dice
  const FOUR = 4;

  window.addEventListener(
    'DOMContentLoaded',
    fetchAdvice.bind(null, element, btn, adviceContainer)
  );

  diceLoader(element, FOUR);

  // When the button is clicked, it will generate a new piece of advice
  btn?.addEventListener(
    'click',
    fetchAdvice.bind(null, element, btn, adviceContainer)
  );
}

/**
 * The function initializes the Zdog dice loader with a canvas and a constant.
 * It sets up the Zdog illustration, anchor, group, and shapes to create a
 * 3D dice animation.
 * @param {HTMLCanvasElement | null} canvas - The canvas element where the Zdog illustration will be rendered.
 * @param {number} constant - A constant value used to define the number of faces on the dice.
 * @returns {void}
 */
function diceLoader(canvas, constant) {
  const { Anchor, Ellipse, Group, Illustration, Rect, TAU } = Zdog;
  const illustration = new Illustration({
    element: canvas
  });
  // anchor point used for the rotation
  const dice = new Anchor({
    addTo: illustration
  });
  // group describing the faces through rounded rectangles
  const faces = new Group({
    addTo: dice
  });

  // due to the considerable stroke, it is possible to fake the dice using four faces only
  const face = new Rect({
    addTo: faces,
    color: 'hsl(150, 100%, 66%)',
    height: 50,
    stroke: 50,
    translate: {
      z: -25
    },
    width: 50
  });

  // rotate the faces around the center
  face.copy({
    rotate: {
      x: TAU / constant
    },
    translate: {
      y: 25
    }
  });

  face.copy({
    rotate: {
      x: TAU / constant
    },
    translate: {
      y: -25
    }
  });

  face.copy({
    translate: {
      z: 25
    }
  });

  // include the dots repeating as many shapes/groups as possible
  // ! when copying an element be sure to reset the rotation/translation of the copied shape
  const one = new Ellipse({
    addTo: dice,
    color: 'hsl(219, 22%, 16%)',
    diameter: 15,
    fill: true,
    stroke: false,
    translate: {
      z: 50
    }
  });

  const two = new Group({
    addTo: dice,
    rotate: {
      x: TAU / constant
    },
    translate: {
      y: 50
    }
  });

  one.copy({
    addTo: two,
    translate: {
      y: 20
    }
  });

  one.copy({
    addTo: two,
    translate: {
      y: -20
    }
  });

  const three = new Group({
    addTo: dice,
    rotate: {
      y: TAU / constant
    },
    translate: {
      x: 50
    }
  });

  one.copy({
    addTo: three,
    translate: {
      z: 0
    }
  });

  one.copy({
    addTo: three,
    translate: {
      x: 20,
      y: -20,
      z: 0
    }
  });

  one.copy({
    addTo: three,
    translate: {
      x: -20,
      y: 20,
      z: 0
    }
  });

  const four = new Group({
    addTo: dice,
    rotate: {
      y: TAU / constant
    },
    translate: {
      x: -50
    }
  });

  two.copyGraph({
    addTo: four,
    rotate: {
      x: 0
    },
    translate: {
      x: 20,
      y: 0
    }
  });

  two.copyGraph({
    addTo: four,
    rotate: {
      x: 0
    },
    translate: {
      x: -20,
      y: 0
    }
  });

  const five = new Group({
    addTo: dice,
    rotate: {
      x: TAU / constant
    },
    translate: {
      y: -50
    }
  });

  four.copyGraph({
    addTo: five,
    rotate: {
      y: 0
    },
    translate: {
      x: 0
    }
  });

  one.copy({
    addTo: five,
    translate: {
      z: 0
    }
  });

  const six = new Group({
    addTo: dice,
    translate: {
      z: -50
    }
  });

  two.copyGraph({
    addTo: six,
    rotate: {
      x: 0,
      z: TAU / constant
    },
    translate: {
      x: 0,
      y: 0
    }
  });

  four.copyGraph({
    addTo: six,
    rotate: {
      y: 0
    },
    translate: {
      x: 0
    }
  });

  /**
   * This function animates the dice by updating the render graph and rotating the dice on its x and y axes.
   * It uses requestAnimationFrame to create a smooth animation loop.
   * @returns {void}
   */
  function animate() {
    illustration.updateRenderGraph();
    dice.rotate.x += 0.01;
    dice.rotate.y -= 0.01;
    requestAnimationFrame(animate);
  }

  animate();
}
/**
 * This function fetches advice from an API and updates the advice container with the new advice.
 * It also disables the button to prevent multiple clicks while the advice is being fetched.
 * @param {HTMLCanvasElement | null} element - The canvas element where the Zdog
 * @param {HTMLButtonElement | null} btn - The button element that triggers the advice fetch.
 * @param {HTMLDivElement | null} adviceContainer - The container where the advice will be displayed.
 * @returns {Promise<void>}
 */
async function fetchAdvice(element, btn, adviceContainer) {
  if (adviceContainer && btn) {
    adviceContainer.innerHTML = ``;
    btn.disabled = true; // Disable the button while fetching advice
  }
  element?.classList.remove('hidden'); // Show the canvas

  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    const advice = data.slip.advice;
    const adviceId = data.slip.id;
    // Update the advice container with the new advice
    if (adviceContainer) {
      adviceContainer.innerHTML = `
        <h1 class="advice-id">Advice #<span id="advice-id">${adviceId}</span></h1>
        <p class="advice-text">"${advice}"</p>
      `;
    }
    refresh(btn, element); // Refresh the Zdog illustration to reflect the new advice
    // Hide the canvas after advice is fetched
  } catch (error) {
    console.error('Error fetching advice:', error);
    if (adviceContainer) {
      adviceContainer.innerHTML = `
        <h1 class="advice-id">Advance #<span id="advice-id">😵</span></h1>
        <p class="advice-text">"Check Your Internet Connection"</p>
      `;
    }
    refresh(btn, element); // Refresh the Zdog illustration to reflect the error state
  }
}

/**
 * The function refreshes the button state and hides the canvas element after advice is fetched.
 * @param {HTMLButtonElement | null} btn - The button element that triggers the advice fetch.
 * @param {HTMLCanvasElement | null} element - The canvas element where the Zdog illustration is rendered.
 * @returns {void}
 */
function refresh(btn, element) {
  if (btn) {
    btn.disabled = false; // Re-enable the button after fetching advice
    element?.classList.add('hidden'); // Hide the canvas after advice is fetched
  }
}

App();
